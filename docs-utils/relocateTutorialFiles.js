const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { checkBrokenImageLinks } = require('./checkBrokenImageLinks');

// Moves a single Help Center markdown file and its co-located images across
// en / es / pt, matching counterparts by slugEN — never by translating
// folder or file names — then rewrites CDN image URLs that embed the
// repo-relative path. Leaves sibling articles and metadata.json in place.
//
// Usage:
//   node docs-utils/relocateTutorialFiles.js <source.md> --up
//   node docs-utils/relocateTutorialFiles.js <source.md> <destination-folder>
//   node docs-utils/relocateTutorialFiles.js <source.md> --up --apply
//   node docs-utils/relocateTutorialFiles.js <source.md> <destination-folder> --locale pt
//
// Default is a dry run. Pass --apply to git mv, rewrite URL path prefixes,
// then verify (and fix) remaining CDN image links in the destination folders.

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const LOCALES = ['en', 'es', 'pt'];
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.bmp', '.ico']);

const CDN_URL_RE =
  /https:\/\/(?:cdn\.jsdelivr\.net\/gh\/vtexdocs\/help-center-content@[^/\s)"'>]+|cdn\.statically\.io\/gh\/vtexdocs\/help-center-content\/refs\/heads\/[^/\s)"'>]+)\/[^\s)"'>]+/g;

const usage = () => {
  console.log(`
Usage: node docs-utils/relocateTutorialFiles.js <source.md> [destination] [options]

Move one tutorial markdown file (and its co-located images) across en/es/pt,
matched by slugEN. Each locale keeps its own filename
(what-is-a-marketplace.md vs o-que-e-um-marketplace.md). Does not move
sibling articles or metadata.json, and does not edit frontmatter or in-article links.

To move a whole folder, use relocateTutorialFolders.js instead.

Arguments:
  source.md      Markdown file to move (relative to repo root, or absolute)
  destination    Destination folder in the same locale as source
                 (optional when --up is set). If this path is the markdown
                 file itself, the parent folder is used. Filenames are not renamed.

Options:
  --up             Move one level up (out of the parent folder)
  --apply          git mv, rewrite URLs, then verify CDN links in the destination
  --verbose        List every CDN URL rewrite and every OK link in the check
  --locale <l>     Only this locale (en|es|pt). Default: all three.
  --help, -h       Show this help

Examples:
  node docs-utils/relocateTutorialFiles.js docs/en/tutorials/integrations/integrations-overview/what-is-a-marketplace.md --up
  node docs-utils/relocateTutorialFiles.js docs/en/tutorials/integrations/integrations-overview/what-is-a-marketplace.md docs/en/tutorials/marketplace
  node docs-utils/relocateTutorialFiles.js docs/en/tutorials/integrations/integrations-overview/what-is-a-marketplace.md --up --apply
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

const escapeRe = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

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

const repoPathFromCdnUrl = (url) => {
  const jsdelivr = url.match(
    /^https:\/\/cdn\.jsdelivr\.net\/gh\/vtexdocs\/help-center-content@[^/]+\/(.+)$/
  );
  if (jsdelivr) return decodeURIComponent(jsdelivr[1]);
  const statically = url.match(
    /^https:\/\/cdn\.statically\.io\/gh\/vtexdocs\/help-center-content\/refs\/heads\/[^/]+\/(.+)$/
  );
  if (statically) return decodeURIComponent(statically[1]);
  return null;
};

const collectSidecarImages = (mdAbs) => {
  const dir = path.dirname(mdAbs);
  const stem = path.basename(mdAbs, path.extname(mdAbs));
  const pattern = new RegExp(`^${escapeRe(stem)}(_\\d+)?\\.[^.]+$`, 'i');
  const images = [];
  if (!fs.existsSync(dir)) return images;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (!fs.statSync(full).isFile()) continue;
    if (!IMAGE_EXTS.has(path.extname(name).toLowerCase())) continue;
    if (pattern.test(name)) images.push(full);
  }
  return images;
};

const collectImagesForMarkdown = (mdAbs) => {
  const dirAbs = path.dirname(mdAbs);
  const dirRel = toRepoRel(dirAbs);
  const byPath = new Map();
  for (const image of collectSidecarImages(mdAbs)) {
    byPath.set(image, 'sidecar');
  }

  const elsewhere = [];
  const missing = [];
  const content = fs.readFileSync(mdAbs, 'utf8');
  for (const match of content.matchAll(CDN_URL_RE)) {
    const repoPath = repoPathFromCdnUrl(match[0]);
    if (!repoPath) continue;
    const abs = path.join(REPO_ROOT, repoPath);
    if (toPosix(path.dirname(repoPath)) !== dirRel) {
      elsewhere.push(repoPath);
      continue;
    }
    if (abs === mdAbs) continue;
    if (!fs.existsSync(abs)) {
      missing.push(repoPath);
      continue;
    }
    if (!byPath.has(abs)) byPath.set(abs, 'cdn');
  }

  return {
    images: [...byPath.keys()],
    elsewhere,
    missing,
  };
};

const findCounterpartFiles = (sourceFile, slugEN, slugIndex, sourceLocale) => {
  const byLocale = { [sourceLocale]: sourceFile };
  const missing = [];
  const inconsistent = [];

  for (const locale of LOCALES) {
    if (locale === sourceLocale) continue;
    const matches = (slugIndex.get(slugEN) || []).filter((m) => m.locale === locale);
    if (matches.length === 0) {
      missing.push(locale);
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
    byLocale[locale] = matches[0].file;
  }

  return { byLocale, missing, inconsistent };
};

const resolveDestForSource = (sourceFile, destArgValue) => {
  const leaf = path.basename(sourceFile);
  if (moveUp) {
    return path.join(path.dirname(path.dirname(sourceFile)), leaf);
  }

  let dest = path.resolve(REPO_ROOT, destArgValue);
  if (dest.toLowerCase().endsWith('.md')) {
    if (path.basename(dest) !== leaf) {
      throw new Error(
        `Destination filename "${path.basename(dest)}" does not match source "${leaf}". ` +
          `Keep each locale's filename and pass the destination folder.`
      );
    }
    dest = path.dirname(dest);
  }

  if (!fs.existsSync(dest) || !fs.statSync(dest).isDirectory()) {
    throw new Error(`Destination folder does not exist: ${toRepoRel(dest)}`);
  }

  const destLocale = localeOf(dest);
  const sourceLocale = localeOf(sourceFile);
  if (destLocale !== sourceLocale) {
    throw new Error(
      `Destination locale (${destLocale}) must match source locale (${sourceLocale}). ` +
        `Other locales are derived from slugEN.`
    );
  }
  return path.join(dest, leaf);
};

const destForCounterpart = (sourceFile, destFile, counterpartFile) => {
  const leaf = path.basename(counterpartFile);
  if (moveUp) {
    return path.join(path.dirname(path.dirname(counterpartFile)), leaf);
  }
  const mappedParent = mapDirToLocale(
    path.dirname(destFile),
    localeOf(sourceFile),
    localeOf(counterpartFile)
  );
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

const main = () => {
  const sourceFile = path.resolve(REPO_ROOT, sourceArg);
  if (!fs.existsSync(sourceFile)) {
    console.error(`Not found: ${sourceFile}`);
    process.exit(1);
  }
  if (fs.statSync(sourceFile).isDirectory()) {
    console.error(
      `Source is a directory. To move a whole folder, use:\n  node docs-utils/relocateTutorialFolders.js ${toRepoRel(sourceFile)} ...`
    );
    process.exit(1);
  }
  if (!sourceFile.endsWith('.md')) {
    console.error(`Source must be a markdown file: ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }
  if (!isUnder(DOCS_DIR, sourceFile)) {
    console.error(`Source must be inside docs/{en,es,pt}/: ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }

  const sourceLocale = localeOf(sourceFile);
  if (!LOCALES.includes(sourceLocale)) {
    console.error(`Source is not under docs/en, docs/es, or docs/pt: ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }

  const content = fs.readFileSync(sourceFile, 'utf8');
  const slugEN = parseSlugEN(content);
  if (!slugEN) {
    console.error(`No slugEN in ${toRepoRel(sourceFile)}. Cannot match other locales.`);
    process.exit(1);
  }

  let destFile;
  try {
    destFile = resolveDestForSource(sourceFile, destArg);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  if (path.resolve(sourceFile) === path.resolve(destFile)) {
    console.error('Source and destination are the same.');
    process.exit(1);
  }

  console.log(`Source:      ${toRepoRel(sourceFile)}`);
  console.log(`Destination: ${toRepoRel(destFile)}${moveUp ? ' (--up)' : ''}`);
  console.log(`slugEN:      ${slugEN}`);
  console.log(`Locales:     ${localeFilter || LOCALES.join(', ')}`);
  console.log(`Mode:        ${shouldApply ? 'apply' : 'dry-run (pass --apply to write)'}\n`);

  const slugIndex = buildSlugIndex();
  const { byLocale, missing, inconsistent } = findCounterpartFiles(
    sourceFile,
    slugEN,
    slugIndex,
    sourceLocale
  );

  if (inconsistent.length > 0) {
    console.error('Inconsistent counterparts — not guessing:\n');
    for (const item of inconsistent) {
      console.error(`  ${item.locale}: slugEN "${item.slugEN}" matches multiple files:`);
      for (const f of item.files) console.error(`    ${f}`);
    }
    process.exit(1);
  }

  const localesToMove = LOCALES.filter((l) => (localeFilter ? l === localeFilter : true));
  const moves = [];

  for (const locale of localesToMove) {
    const from = byLocale[locale];
    if (!from) {
      console.warn(`No counterpart in ${locale} for slugEN "${slugEN}" — skipping.`);
      continue;
    }

    let to;
    try {
      to = locale === sourceLocale ? destFile : destForCounterpart(sourceFile, destFile, from);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }

    const oldDirRel = toRepoRel(path.dirname(from));
    const newDirRel = toRepoRel(path.dirname(to));
    const { images, elsewhere, missing: missingImages } = collectImagesForMarkdown(from);
    const { replacements } = rewriteCdnUrlsInText(fs.readFileSync(from, 'utf8'), oldDirRel, newDirRel);

    moves.push({
      locale,
      from,
      to,
      oldDirRel,
      newDirRel,
      images,
      elsewhere,
      missingImages,
      replacements,
    });
  }

  if (moves.length === 0) {
    console.error('Nothing to move.');
    process.exit(1);
  }

  for (const move of moves) {
    if (fs.existsSync(move.to)) {
      console.error(`Destination already exists: ${toRepoRel(move.to)}`);
      process.exit(1);
    }
    if (!fs.existsSync(path.dirname(move.to))) {
      console.error(`Destination folder does not exist: ${toRepoRel(path.dirname(move.to))}`);
      process.exit(1);
    }
    for (const image of move.images) {
      const destImage = path.join(path.dirname(move.to), path.basename(image));
      if (fs.existsSync(destImage)) {
        console.error(`Destination image already exists: ${toRepoRel(destImage)}`);
        process.exit(1);
      }
    }
  }

  console.log('Plan\n');
  for (const move of moves) {
    console.log(`  [${move.locale}] ${toRepoRel(move.from)}`);
    console.log(`       → ${toRepoRel(move.to)}`);
    console.log(`       ${move.images.length} image(s), ${move.replacements.length} CDN URL(s) to rewrite`);
    for (const image of move.images) {
      console.log(`         img  ${path.basename(image)}`);
    }
    if (move.elsewhere.length > 0) {
      console.log(`       CDN image(s) outside this folder (not moved):`);
      for (const p of move.elsewhere) console.log(`         skip ${p}`);
    }
    if (move.missingImages.length > 0) {
      console.log(`       CDN image(s) missing on disk:`);
      for (const p of move.missingImages) console.log(`         miss ${p}`);
    }
    if (verbose) {
      for (const r of move.replacements) {
        console.log(`           - ${r.from}`);
        console.log(`           + ${r.to}`);
      }
    }
    console.log('');
  }

  const skipped = localesToMove.filter((l) => !moves.some((m) => m.locale === l));
  if (skipped.length > 0) {
    console.log(`Skipped locales with no counterpart: ${skipped.join(', ')}\n`);
  }
  if (missing.length > 0 && !localeFilter) {
    const unused = missing.filter((l) => localesToMove.includes(l));
    if (unused.length > 0) {
      console.log(`No counterpart for slugEN "${slugEN}" in: ${unused.join(', ')}\n`);
    }
  }

  if (!shouldApply) {
    console.log('Dry run only. Re-run with --apply to git mv, rewrite URLs, and check CDN links.');
    return;
  }

  for (const move of moves) {
    console.log(`git mv ${toRepoRel(move.from)} ${toRepoRel(move.to)}`);
    gitMv(move.from, move.to);
    for (const image of move.images) {
      const destImage = path.join(path.dirname(move.to), path.basename(image));
      console.log(`git mv ${toRepoRel(image)} ${toRepoRel(destImage)}`);
      gitMv(image, destImage);
    }
    const original = fs.readFileSync(move.to, 'utf8');
    const { content: next, replacements } = rewriteCdnUrlsInText(
      original,
      move.oldDirRel,
      move.newDirRel
    );
    if (replacements.length > 0) {
      fs.writeFileSync(move.to, next, 'utf8');
    }
    console.log(`  rewrote ${replacements.length} CDN URL(s)`);
  }

  console.log('\nDone.');
  for (const move of moves) {
    if (fs.existsSync(move.from)) {
      console.warn(`  source still exists: ${toRepoRel(move.from)}`);
    }
    if (!fs.existsSync(move.to)) {
      console.warn(`  destination missing: ${toRepoRel(move.to)}`);
    }
  }

  const destFolders = [...new Set(moves.map((m) => path.dirname(m.to)))].filter((dir) =>
    fs.existsSync(dir)
  );
  if (destFolders.length === 0) return;

  console.log('\nChecking CDN image links in destination folders...');
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
