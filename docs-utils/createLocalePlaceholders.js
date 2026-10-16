const fs = require('fs');
const path = require('path');

// Keeps en/es in sync with a pt tutorial article. Existing files are matched
// by slugEN. New placeholder titles and filenames must be translations of the
// Portuguese ones (passed with --en-title/--es-title and --en-filename/--es-filename).
//
// - If the en/es counterpart already exists: copies pt's `updatedAt` into it
//   (frontmatter only, body untouched).
// - If the en/es counterpart does not exist yet: creates a placeholder file
//   (frontmatter only, empty body) in the folder whose metadata.json `id`
//   matches the pt article's parent folder id.
//
// Usage:
//   node docs-utils/createLocalePlaceholders.js <pt-file.md>
//   node docs-utils/createLocalePlaceholders.js <pt-file.md> --apply
//   node docs-utils/createLocalePlaceholders.js <pt-file.md> --locale en --apply
//   node docs-utils/createLocalePlaceholders.js <pt-file.md> --en-title "Checking Credit Wallet" --en-filename checking-credit-wallet.md --es-title "Consultar la cartera de crédito" --es-filename consultar-la-cartera-de-credito.md --apply
//
// Default is a dry run. Pass --apply to write.

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const LOCALES = ['en', 'es', 'pt'];
const TARGET_LOCALES = ['en', 'es'];
// Scalar frontmatter fields carried over verbatim to a new placeholder.
// seeAlso (and any other array field) is locale-specific and is skipped.
const CARRY_FIELDS = ['createdAt', 'updatedAt', 'contentType', 'productTeam', 'slugEN', 'legacySlug', 'hidden'];

const usage = () => {
  console.log(`
Usage: node docs-utils/createLocalePlaceholders.js <pt-file.md> [options]

Sync en/es with a pt tutorial article (matched by slugEN):
  - Counterpart exists  -> copy pt's updatedAt into it.
  - Counterpart missing -> create an empty-body placeholder in the folder whose
                           metadata.json id matches the pt article's parent.
                           Requires a translated --<locale>-title and
                           --<locale>-filename.

Options:
  --apply            Write changes (default: dry run)
  --locale <l>       Only this target locale (en|es). Default: both.
  --en-title <text>     Translated title for a new en placeholder (required to create)
  --es-title <text>     Translated title for a new es placeholder (required to create)
  --en-filename <name>  Translated filename for a new en placeholder (required to create)
  --es-filename <name>  Translated filename for a new es placeholder (required to create)
  --help, -h         Show this help

A new placeholder requires a translated title and filename for that locale.
The script refuses to create the file if either flag is missing — it will not
copy the Portuguese title or filename. Updating an existing counterpart only
copies updatedAt and does not need these flags.
`);
};

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  usage();
  process.exit(0);
}

const shouldApply = args.includes('--apply');
const flagValue = (flag) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
};

const localeFlag = flagValue('--locale');
if (localeFlag && !TARGET_LOCALES.includes(localeFlag)) {
  console.error(`Invalid --locale "${localeFlag}". Use en or es.`);
  process.exit(1);
}
const targetLocales = localeFlag ? [localeFlag] : TARGET_LOCALES;

const titleOverride = { en: flagValue('--en-title'), es: flagValue('--es-title') };
const filenameOverride = { en: flagValue('--en-filename'), es: flagValue('--es-filename') };

// The only positional argument needed is the first non-flag, non-flag-value token.
const KNOWN_VALUE_FLAGS = ['--locale', '--en-title', '--es-title', '--en-filename', '--es-filename'];
const sourceArg = (() => {
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      if (KNOWN_VALUE_FLAGS.includes(args[i])) i++;
      continue;
    }
    return args[i];
  }
  return null;
})();

if (!sourceArg) {
  usage();
  process.exit(1);
}

const toPosix = (p) => p.split(path.sep).join('/');
const toRepoRel = (absPath) => toPosix(path.relative(REPO_ROOT, absPath));

const localeOf = (absPathUnderDocs) => {
  const rel = path.relative(DOCS_DIR, absPathUnderDocs).split(path.sep);
  return rel[0];
};

const walk = (dir, fileList = []) => {
  if (!fs.existsSync(dir)) return fileList;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, fileList);
    else fileList.push(full);
  }
  return fileList;
};
const listMdFiles = (dir) => walk(dir).filter((f) => f.endsWith('.md'));

// Normalizes CRLF to LF so line-based parsing/regexes work regardless of the
// file's line endings. All writes below use LF.
const normalizeNewlines = (content) => content.replace(/\r\n/g, '\n');

const splitFrontmatter = (content) => {
  const normalized = normalizeNewlines(content);
  if (!normalized.startsWith('---')) return null;
  const end = normalized.indexOf('\n---', 3);
  if (end === -1) return null;
  const fm = normalized.slice(3, end).replace(/^\n/, '');
  const bodyStart = normalized.indexOf('\n', end + 1);
  const body = bodyStart === -1 ? '' : normalized.slice(bodyStart + 1);
  return { fm, body };
};

const unquote = (value) => {
  let v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1);
  }
  return v;
};

// Reads simple `key: value` scalar fields (one per line). Multi-line array
// fields like seeAlso are intentionally not captured.
const parseScalars = (fm) => {
  const fields = {};
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    fields[m[1]] = m[2];
  }
  return fields;
};

const parseSlugEN = (content) => {
  const split = splitFrontmatter(content);
  if (!split) return null;
  const fields = parseScalars(split.fm);
  return fields.slugEN ? unquote(fields.slugEN) : null;
};

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

const readMetaId = (dir) => {
  const metaPath = path.join(dir, 'metadata.json');
  if (!fs.existsSync(metaPath)) return null;
  try {
    return JSON.parse(fs.readFileSync(metaPath, 'utf8')).id || null;
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

// Maps a directory from one locale to its counterpart in another locale by
// walking path segments and matching folder name first, then metadata.json
// id (folders are localized: informacoes-de-faturamento vs billing vs
// facturacion, all sharing the same metadata.json id).
const mapDirToLocale = (absDir, fromLocale, toLocale) => {
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
        `Cannot map "${toRepoRel(fromCursor)}" to ${toLocale}: no folder named "${part}" and no metadata.json id. ` +
          `Create the matching folder/metadata.json in ${toLocale} first.`
      );
    }
    const match = findChildWithMetaId(toCursor, id);
    if (!match) {
      throw new Error(
        `No ${toLocale} folder with metadata.json id "${id}" under "${toRepoRel(toCursor)}". ` +
          `Create the matching folder/metadata.json in ${toLocale} first.`
      );
    }
    toCursor = match;
  }
  return toCursor;
};

const buildPlaceholderFrontmatter = (sourceFields, locale, title, subcategoryId) => {
  const lines = ['---'];
  lines.push(`title: '${title.replace(/'/g, "''")}'`);
  for (const key of CARRY_FIELDS) {
    if (sourceFields[key] === undefined) continue;
    lines.push(`${key}: ${sourceFields[key]}`);
  }
  lines.push(`locale: ${locale}`);
  if (subcategoryId) lines.push(`subcategoryId: ${subcategoryId}`);
  lines.push('---');
  return lines.join('\n') + '\n';
};

const setScalarField = (fm, key, rawValue) => {
  const re = new RegExp(`^${key}:\\s*.*$`, 'm');
  if (re.test(fm)) return fm.replace(re, `${key}: ${rawValue}`);
  return `${fm.trimEnd()}\n${key}: ${rawValue}`;
};

const main = () => {
  const sourceFile = path.resolve(REPO_ROOT, sourceArg);
  if (!fs.existsSync(sourceFile) || fs.statSync(sourceFile).isDirectory()) {
    console.error(`Not found (or is a directory): ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }
  if (localeOf(sourceFile) !== 'pt') {
    console.error(`Source must be a docs/pt/ file: ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }

  const content = fs.readFileSync(sourceFile, 'utf8');
  const split = splitFrontmatter(content);
  if (!split) {
    console.error(`No frontmatter found in ${toRepoRel(sourceFile)}`);
    process.exit(1);
  }
  const sourceFields = parseScalars(split.fm);
  const slugEN = sourceFields.slugEN ? unquote(sourceFields.slugEN) : null;
  if (!slugEN) {
    console.error(`No slugEN in ${toRepoRel(sourceFile)}. Cannot match en/es.`);
    process.exit(1);
  }
  if (!sourceFields.updatedAt) {
    console.error(`No updatedAt in ${toRepoRel(sourceFile)}.`);
    process.exit(1);
  }

  console.log(`Source:  ${toRepoRel(sourceFile)}`);
  console.log(`slugEN:  ${slugEN}`);
  console.log(`Mode:    ${shouldApply ? 'apply' : 'dry-run (pass --apply to write)'}\n`);

  const slugIndex = buildSlugIndex();
  const matches = slugIndex.get(slugEN) || [];

  const parentDirPt = path.dirname(sourceFile);

  let hadError = false;

  for (const locale of targetLocales) {
    const existing = matches.filter((m) => m.locale === locale);
    if (existing.length > 1) {
      console.error(`Multiple ${locale} files with slugEN "${slugEN}" — not guessing:`);
      for (const m of existing) console.error(`  ${toRepoRel(m.file)}`);
      hadError = true;
      continue;
    }

    if (existing.length === 1) {
      // Counterpart exists: sync updatedAt only.
      const target = existing[0].file;
      const targetContent = fs.readFileSync(target, 'utf8');
      const targetSplit = splitFrontmatter(targetContent);
      const targetFields = targetSplit ? parseScalars(targetSplit.fm) : {};
      if (targetFields.updatedAt === sourceFields.updatedAt) {
        console.log(`[${locale}] up to date: ${toRepoRel(target)}`);
        continue;
      }
      console.log(`[${locale}] update updatedAt: ${toRepoRel(target)}`);
      console.log(`         ${targetFields.updatedAt} -> ${sourceFields.updatedAt}`);
      if (shouldApply) {
        const newFm = setScalarField(targetSplit.fm, 'updatedAt', sourceFields.updatedAt);
        fs.writeFileSync(target, `---\n${newFm.trim()}\n---\n${targetSplit.body}`, 'utf8');
      }
      continue;
    }

    // No counterpart: create a placeholder.
    let destDir;
    try {
      destDir = mapDirToLocale(parentDirPt, 'pt', locale);
    } catch (err) {
      console.error(`[${locale}] ${err.message}`);
      hadError = true;
      continue;
    }
    const title = titleOverride[locale];
    let filename = filenameOverride[locale];
    if (!title || !filename) {
      console.error(
        `[${locale}] would create a placeholder under ${toRepoRel(destDir)}, but a translated title and filename are required.`
      );
      console.error(`         pass --${locale}-title and --${locale}-filename (do not copy the Portuguese title or filename).`);
      hadError = true;
      continue;
    }
    if (!filename.endsWith('.md')) filename += '.md';
    if (filename.includes('/') || filename.includes('\\') || filename !== path.basename(filename)) {
      console.error(`[${locale}] --${locale}-filename must be a file name, not a path: ${filename}`);
      hadError = true;
      continue;
    }
    const destFile = path.join(destDir, filename);
    if (fs.existsSync(destFile)) {
      console.error(`[${locale}] destination already exists (but had no slugEN match): ${toRepoRel(destFile)}`);
      hadError = true;
      continue;
    }
    const subcategoryId = readMetaId(destDir);
    const placeholder = buildPlaceholderFrontmatter(sourceFields, locale, title, subcategoryId);

    console.log(`[${locale}] create placeholder: ${toRepoRel(destFile)}`);
    console.log(`         title: ${title}`);
    if (shouldApply) {
      fs.writeFileSync(destFile, placeholder, 'utf8');
    }
  }

  if (!shouldApply) {
    console.log('\nDry run only. Re-run with --apply to write.');
  } else {
    console.log('\nDone.');
  }
  if (hadError) process.exitCode = 1;
};

if (require.main === module) {
  main();
}

module.exports = { main };
