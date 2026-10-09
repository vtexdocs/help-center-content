const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { checkBrokenImageLinks } = require('./checkBrokenImageLinks');

// Moves a Help Center folder (markdown, metadata.json, co-located images) across
// en / es / pt, matching counterparts by slugEN — never by translating folder
// names — then rewrites CDN image URLs that embed the repo-relative path.
//
// Usage:
//   node docs-utils/relocateTutorialFolders.js <source> --up
//   node docs-utils/relocateTutorialFolders.js <source> <destination>
//   node docs-utils/relocateTutorialFolders.js <source> --up --apply
//   node docs-utils/relocateTutorialFolders.js <source> --up --locale pt
//
// Default is a dry run. Pass --apply to git mv, rewrite URL path prefixes,
// then verify (and fix) remaining CDN image links in the new folders via
// checkBrokenImageLinks.js.

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const LOCALES = ['en', 'es', 'pt'];

const CDN_URL_RE =
  /https:\/\/(?:cdn\.jsdelivr\.net\/gh\/vtexdocs\/help-center-content@[^/\s)"'>]+|cdn\.statically\.io\/gh\/vtexdocs\/help-center-content\/refs\/heads\/[^/\s)"'>]+)\/[^\s)"'>]+/g;

const usage = () => {
  console.log(`
Usage: node docs-utils/relocateTutorialFolders.js <source> [destination] [options]

Move a tutorial folder across en/es/pt (matched by slugEN) and rewrite CDN image URLs
inside the moved markdown files. Leaf folder names stay locale-specific
(vtex-admin vs admin-vtex). Does not edit metadata.json, frontmatter, or in-article links.

Arguments:
  source         Folder to move (relative to repo root, or absolute)
  destination    New folder path in the same locale as source
                 (optional when --up is set). If this path is an existing
                 parent directory, the locale's leaf folder name is appended.

Options:
  --up             Move one level up (out of the parent category)
  --apply          git mv, rewrite URLs, then verify CDN links in the new folders
  --verbose        List every CDN URL rewrite and every OK link in the check
  --locale <l>     Only this locale (en|es|pt). Default: all three.
  --help, -h       Show this help

Examples:
  node docs-utils/relocateTutorialFolders.js docs/en/tutorials/storefront/cms-portal-legacy/layout --up
  node docs-utils/relocateTutorialFolders.js docs/en/tutorials/operational/vtex-admin docs/en/tutorials/vtex-admin
  node docs-utils/relocateTutorialFolders.js docs/en/tutorials/operational/vtex-admin --up --apply
`);
};

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  usage();
  process.exit(0);
}

const shouldApply = args.includes('--apply');
const verbose = args.includes('--verbose');
const moveUp = args.includes('--up');
const localeFlagIndex = args.indexOf('--locale');
const localeFilter =
  localeFlagIndex !== -1 ? args[localeFlagIndex + 1] : null;

if (localeFilter && !LOCALES.includes(localeFilter)) {
  console.error(`Invalid --locale "${localeFilter}". Use en, es, or pt.`);
  process.exit(1);
}

const positional = args.filter((a, i) => {
  if (a.startsWith('--')) return false;
  if (localeFlagIndex !== -1 && i === localeFlagIndex + 1) return false;
  return true;
});

const sourceArg = positional[0];
const destArg = positional[1];

if (!sourceArg || (!destArg && !moveUp)) {
  usage();
  process.exit(1);
}

const walk = (dir, fileList = []) => {
  if (!fs.existsSync(dir)) return fileList;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fileList);
    else fileList.push(full);
  }
  return fileList;
};

const toPosix = (p) => p.split(path.sep).join('/');

const toRepoRel = (absPath) => toPosix(path.relative(REPO_ROOT, absPath));

const localeOf = (absPathUnderDocs) => {
  const rel = path.relative(DOCS_DIR, absPathUnderDocs).split(path.sep);
  return rel[0];
};

const isUnder = (parentAbs, childAbs) => {
  const rel = path.relative(parentAbs, childAbs);
  return rel === '' || (rel && !rel.startsWith('..') && !path.isAbsolute(rel));
};

const parseSlugEN = (content) => {
  if (!content.startsWith('---')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;
  const fm = content.slice(3, end);
  const m = fm.match(/^slugEN:\s*(.*)$/m);
  if (!m) return null;
  let value = m[1].trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1);
  }
  return value || null;
};

const readMetaId = (dir) => {
  const metaPath = path.join(dir, 'metadata.json');
  if (!fs.existsSync(metaPath)) return null;
  try {
    const json = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    return json.id || null;
  } catch {
    return null;
  }
};

const findChildWithMetaId = (parentDir, id) => {
  if (!fs.existsSync(parentDir)) return null;
  for (const entry of fs.readdirSync(parentDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const child = path.join(parentDir, entry.name);
    if (readMetaId(child) === id) return child;
  }
  return null;
};

// Map a directory in fromLocale onto toLocale by walking path segments:
// same folder name first, then metadata.json id. Folder names are localized
// (operational / operacional / operativo), so name-only mapping is not enough.
const mapDirToLocale = (absDir, fromLocale, toLocale) => {
  if (fromLocale === toLocale) return absDir;
  const fromRoot = path.join(DOCS_DIR, fromLocale);
  const rel = path.relative(fromRoot, absDir);
  if (rel === '') return path.join(DOCS_DIR, toLocale);

  const parts = rel.split(path.sep).filter(Boolean);
  let fromCursor = fromRoot;
  let toCursor = path.join(DOCS_DIR, toLocale);

  for (const part of parts) {
    fromCursor = path.join(fromCursor, part);
    const sameName = path.join(toCursor, part);
    if (fs.existsSync(sameName) && fs.statSync(sameName).isDirectory()) {
      toCursor = sameName;
      continue;
    }
    const id = readMetaId(fromCursor);
    if (!id) {
      throw new Error(
        `Cannot map "${toRepoRel(fromCursor)}" to ${toLocale}: no folder named "${part}" and no metadata.json id`
      );
    }
    const match = findChildWithMetaId(toCursor, id);
    if (!match) {
      throw new Error(
        `Cannot map id "${id}" (${toRepoRel(fromCursor)}) under ${toRepoRel(toCursor)}`
      );
    }
    toCursor = match;
  }
  return toCursor;
};

const listMdFiles = (dir) => walk(dir).filter((f) => f.endsWith('.md'));

const buildSlugIndex = () => {
  const index = new Map();
  for (const locale of LOCALES) {
    for (const file of listMdFiles(path.join(DOCS_DIR, locale))) {
      const slugEN = parseSlugEN(fs.readFileSync(file, 'utf8'));
      if (!slugEN) continue;
      if (!index.has(slugEN)) index.set(slugEN, []);
      index.get(slugEN).push({ locale, file });
    }
  }
  return index;
};

// Counterpart folder = walk up from the matching file the same number of
// segments as the source file sits below the source folder.
const counterpartFolderFromMatch = (sourceFolder, sourceFile, matchFile) => {
  const rel = path.relative(sourceFolder, sourceFile);
  const depth = rel.split(path.sep).length;
  let folder = matchFile;
  for (let i = 0; i < depth; i++) folder = path.dirname(folder);
  return folder;
};

const collectSlugENs = (sourceFolder) => {
  const entries = [];
  for (const file of listMdFiles(sourceFolder)) {
    const slugEN = parseSlugEN(fs.readFileSync(file, 'utf8'));
    if (!slugEN) {
      console.warn(`  (no slugEN) ${toRepoRel(file)}`);
      continue;
    }
    entries.push({ slugEN, file });
  }
  return entries;
};

const findCounterpartFolders = (sourceFolder, slugEntries, slugIndex, sourceLocale) => {
  const byLocale = {};
  const missingByLocale = {};
  const inconsistent = [];

  for (const locale of LOCALES) {
    if (locale === sourceLocale) {
      byLocale[locale] = sourceFolder;
      continue;
    }
    const inferred = new Map();
    for (const { slugEN, file } of slugEntries) {
      const matches = (slugIndex.get(slugEN) || []).filter((m) => m.locale === locale);
      if (matches.length === 0) {
        if (!missingByLocale[locale]) missingByLocale[locale] = [];
        missingByLocale[locale].push({ slugEN, file: toRepoRel(file) });
        continue;
      }
      if (matches.length > 1) {
        inconsistent.push({
          locale,
          slugEN,
          files: matches.map((m) => toRepoRel(m.file)),
        });
        continue;
      }
      const folder = counterpartFolderFromMatch(sourceFolder, file, matches[0].file);
      if (!inferred.has(folder)) inferred.set(folder, []);
      inferred.get(folder).push(slugEN);
    }

    if (inferred.size > 1) {
      inconsistent.push({
        locale,
        folders: [...inferred.entries()].map(([folder, slugs]) => ({
          folder: toRepoRel(folder),
          slugs,
        })),
      });
    } else if (inferred.size === 1) {
      byLocale[locale] = [...inferred.keys()][0];
    }
  }

  return { byLocale, missingByLocale, inconsistent };
};

const resolveDestForSource = (sourceFolder, destArgValue) => {
  const leaf = path.basename(sourceFolder);
  if (moveUp) {
    return path.join(path.dirname(path.dirname(sourceFolder)), leaf);
  }

  let dest = path.resolve(REPO_ROOT, destArgValue);
  if (path.basename(dest) !== leaf) {
    if (fs.existsSync(dest) && fs.statSync(dest).isDirectory()) {
      dest = path.join(dest, leaf);
    } else {
      throw new Error(
        `Destination leaf "${path.basename(dest)}" does not match source leaf "${leaf}". ` +
          `Keep each locale's folder name and pass the new parent, or the full destination including "${leaf}".`
      );
    }
  }

  const destLocale = localeOf(dest);
  const sourceLocale = localeOf(sourceFolder);
  if (destLocale !== sourceLocale) {
    throw new Error(
      `Destination locale (${destLocale}) must match source locale (${sourceLocale}). ` +
        `Other locales are derived from slugEN.`
    );
  }
  return dest;
};

const destForCounterpart = (sourceFolder, destFolder, counterpartFolder) => {
  const sourceLocale = localeOf(sourceFolder);
  const destLocale = localeOf(counterpartFolder);
  const destParent = path.dirname(destFolder);
  const leaf = path.basename(counterpartFolder);

  if (isUnder(destParent, sourceFolder) && destParent !== sourceFolder) {
    const rel = path.relative(destParent, sourceFolder);
    const upCount = rel.split(path.sep).length - 1;
    let parent = path.dirname(counterpartFolder);
    for (let i = 0; i < upCount; i++) parent = path.dirname(parent);
    return path.join(parent, leaf);
  }

  const mappedParent = mapDirToLocale(destParent, sourceLocale, destLocale);
  return path.join(mappedParent, leaf);
};

const encodePath = (posixPath) => posixPath.split('/').map(encodeURIComponent).join('/');

const rewriteCdnUrlsInText = (content, oldDirRel, newDirRel) => {
  if (oldDirRel === newDirRel) return { content, replacements: [] };
  const replacements = [];
  const next = content.replace(CDN_URL_RE, (url) => {
    let updated = url;
    if (url.includes(oldDirRel)) updated = updated.split(oldDirRel).join(newDirRel);
    const oldEnc = encodePath(oldDirRel);
    const newEnc = encodePath(newDirRel);
    if (oldEnc !== oldDirRel && updated.includes(oldEnc)) {
      updated = updated.split(oldEnc).join(newEnc);
    }
    if (updated !== url) replacements.push({ from: url, to: updated });
    return updated;
  });
  return { content: next, replacements };
};

const collectRewrites = (folderAbs, oldDirRel, newDirRel) => {
  const perFile = [];
  for (const file of listMdFiles(folderAbs)) {
    const { replacements } = rewriteCdnUrlsInText(
      fs.readFileSync(file, 'utf8'),
      oldDirRel,
      newDirRel
    );
    if (replacements.length > 0) {
      perFile.push({ file: toRepoRel(file), replacements });
    }
  }
  return perFile;
};

const gitMv = (fromAbs, toAbs) => {
  const parent = path.dirname(toAbs);
  if (!fs.existsSync(parent)) {
    throw new Error(`Destination parent does not exist: ${toRepoRel(parent)}`);
  }
  const result = spawnSync('git', ['mv', fromAbs, toAbs], {
    cwd: REPO_ROOT,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(
      `git mv failed:\n  ${toRepoRel(fromAbs)}\n  → ${toRepoRel(toAbs)}\n${(result.stderr || result.stdout || '').trim()}`
    );
  }
};

const applyRewrites = (folderAbs, oldDirRel, newDirRel) => {
  let count = 0;
  for (const file of listMdFiles(folderAbs)) {
    const original = fs.readFileSync(file, 'utf8');
    const { content, replacements } = rewriteCdnUrlsInText(original, oldDirRel, newDirRel);
    if (replacements.length > 0) {
      fs.writeFileSync(file, content, 'utf8');
      count += replacements.length;
    }
  }
  return count;
};

const main = () => {
  const sourceFolder = path.resolve(REPO_ROOT, sourceArg);
  if (fs.existsSync(sourceFolder) && fs.statSync(sourceFolder).isFile() && sourceFolder.endsWith('.md')) {
    console.error(
      `Source is a markdown file. To move one article and its images, use:\n  node docs-utils/relocateTutorialFiles.js ${toRepoRel(sourceFolder)} ...`
    );
    process.exit(1);
  }
  if (!fs.existsSync(sourceFolder) || !fs.statSync(sourceFolder).isDirectory()) {
    console.error(`Not a directory: ${sourceFolder}`);
    process.exit(1);
  }
  if (!isUnder(DOCS_DIR, sourceFolder) || sourceFolder === DOCS_DIR) {
    console.error(`Source must be inside docs/{en,es,pt}/: ${toRepoRel(sourceFolder)}`);
    process.exit(1);
  }

  const sourceLocale = localeOf(sourceFolder);
  if (!LOCALES.includes(sourceLocale)) {
    console.error(`Source is not under docs/en, docs/es, or docs/pt: ${toRepoRel(sourceFolder)}`);
    process.exit(1);
  }

  let destFolder;
  try {
    destFolder = resolveDestForSource(sourceFolder, destArg);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  if (path.resolve(sourceFolder) === path.resolve(destFolder)) {
    console.error('Source and destination are the same.');
    process.exit(1);
  }

  console.log(`Source:      ${toRepoRel(sourceFolder)}`);
  console.log(`Destination: ${toRepoRel(destFolder)}${moveUp ? ' (--up)' : ''}`);
  console.log(`Locales:     ${localeFilter || LOCALES.join(', ')}`);
  console.log(`Mode:        ${shouldApply ? 'apply' : 'dry-run (pass --apply to write)'}\n`);

  console.log('Collecting slugEN values...');
  const slugEntries = collectSlugENs(sourceFolder);
  if (slugEntries.length === 0) {
    console.error('No slugEN values found under the source folder. Cannot match other locales.');
    process.exit(1);
  }
  console.log(`  ${slugEntries.length} markdown file(s) with slugEN\n`);

  const slugIndex = buildSlugIndex();
  const { byLocale, missingByLocale, inconsistent } = findCounterpartFolders(
    sourceFolder,
    slugEntries,
    slugIndex,
    sourceLocale
  );

  if (inconsistent.length > 0) {
    console.error('Inconsistent folder structures — not guessing:\n');
    for (const item of inconsistent) {
      if (item.folders) {
        console.error(`  ${item.locale}: slugEN values map to more than one folder:`);
        for (const f of item.folders) {
          console.error(`    ${f.folder}`);
          for (const s of f.slugs) console.error(`      - ${s}`);
        }
      } else {
        console.error(`  ${item.locale}: slugEN "${item.slugEN}" matches multiple files:`);
        for (const f of item.files) console.error(`    ${f}`);
      }
    }
    process.exit(1);
  }

  const localesToMove = LOCALES.filter((l) => (localeFilter ? l === localeFilter : true));
  const moves = [];

  for (const locale of localesToMove) {
    const from = byLocale[locale];
    if (!from) {
      console.warn(
        `No counterpart in ${locale} — skipping. Missing slugEN sample: ${
          (missingByLocale[locale] || []).slice(0, 3).map((m) => m.slugEN).join(', ') || '(none)'
        }`
      );
      continue;
    }

    let to;
    try {
      to = locale === sourceLocale ? destFolder : destForCounterpart(sourceFolder, destFolder, from);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }

    const oldDirRel = toRepoRel(from);
    const newDirRel = toRepoRel(to);
    const rewrites = collectRewrites(from, oldDirRel, newDirRel);
    const missing = missingByLocale[locale] || [];

    moves.push({ locale, from, to, oldDirRel, newDirRel, rewrites, missing });
  }

  if (moves.length === 0) {
    console.error('Nothing to move.');
    process.exit(1);
  }

  for (const move of moves) {
    if (fs.existsSync(move.to)) {
      console.error(`Destination already exists: ${move.newDirRel}`);
      process.exit(1);
    }
  }

  console.log('Plan\n');
  for (const move of moves) {
    console.log(`  [${move.locale}] ${move.oldDirRel}`);
    console.log(`       → ${move.newDirRel}`);
    const urlCount = move.rewrites.reduce((n, f) => n + f.replacements.length, 0);
    console.log(`       ${move.rewrites.length} markdown file(s), ${urlCount} CDN URL(s) to rewrite`);
    if (move.missing.length > 0) {
      console.log(`       (${move.missing.length} slugEN(s) had no file in this locale — folder still inferred)`);
    }
    if (verbose) {
      for (const file of move.rewrites) {
        console.log(`         ${file.file}`);
        for (const r of file.replacements) {
          console.log(`           - ${r.from}`);
          console.log(`           + ${r.to}`);
        }
      }
    }
    console.log('');
  }

  const skipped = localesToMove.filter((l) => !moves.some((m) => m.locale === l));
  if (skipped.length > 0) {
    console.log(`Skipped locales with no counterpart: ${skipped.join(', ')}\n`);
  }

  if (!shouldApply) {
    console.log('Dry run only. Re-run with --apply to git mv, rewrite URLs, and check CDN links.');
    return;
  }

  for (const move of moves) {
    console.log(`git mv ${move.oldDirRel} ${move.newDirRel}`);
    gitMv(move.from, move.to);
    const n = applyRewrites(move.to, move.oldDirRel, move.newDirRel);
    console.log(`  rewrote ${n} CDN URL(s)`);
  }

  console.log('\nDone.');
  for (const move of moves) {
    if (fs.existsSync(move.from)) {
      console.warn(`  source still exists: ${move.oldDirRel}`);
    }
    if (!fs.existsSync(move.to)) {
      console.warn(`  destination missing: ${move.newDirRel}`);
    }
  }

  const destFolders = moves.map((m) => m.to).filter((dir) => fs.existsSync(dir));
  if (destFolders.length === 0) return;

  console.log('\nChecking CDN image links in moved folders...');
  const results = checkBrokenImageLinks({
    targetDir: destFolders,
    fix: true,
    verbose,
  });
  if (results.unfixable.length > 0 || results.ambiguous.length > 0) {
    process.exitCode = 1;
  }
};

if (require.main === module) {
  main();
}

module.exports = { main };
