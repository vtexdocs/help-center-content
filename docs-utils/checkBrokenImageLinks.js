const fs = require('fs');
const path = require('path');

// Finds image links that point at this repo's CDN mirrors
// (jsDelivr and statically.io), checks whether the embedded path still exists
// in the working tree, and — for the ones that don't — tries to relocate the
// image by filename + folder structure so links survive folder reorgs.
//
// Usage:
//   node docs-utils/checkBrokenImageLinks.js                        // scan all of docs/, report only
//   node docs-utils/checkBrokenImageLinks.js <folder>                // scan only <folder> (relative to repo root, or absolute)
//   node docs-utils/checkBrokenImageLinks.js <folder> --fix           // report + rewrite unambiguous fixes
//   node docs-utils/checkBrokenImageLinks.js <folder> --verbose       // also list every OK link
//
// <folder> only narrows which .md files get checked — candidates for fixing
// broken links are still looked up across the whole docs/ tree, since an
// image may have moved outside the folder being scanned.
//
// Also callable as a library:
//   const { checkBrokenImageLinks } = require('./checkBrokenImageLinks');
//   checkBrokenImageLinks({ targetDir, fix, verbose });

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');

// Groups: 1 = jsDelivr ref, 2 = jsDelivr path, 3 = statically ref, 4 = statically path
const CDN_LINK_RE =
  /https:\/\/cdn\.jsdelivr\.net\/gh\/vtexdocs\/help-center-content@([^/\s)"'>]+)\/([^\s)"'>]+)|https:\/\/cdn\.statically\.io\/gh\/vtexdocs\/help-center-content\/refs\/heads\/([^/\s)"'>]+)\/([^\s)"'>]+)/g;

const walk = (dir, fileList = []) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, fileList);
    } else {
      fileList.push(full);
    }
  }
  return fileList;
};

// basename -> [absolute paths] for every file under docs/, used to relocate
// images whose old path no longer exists.
const buildBasenameIndex = () => {
  const index = new Map();
  for (const file of walk(DOCS_DIR)) {
    const base = path.basename(file);
    if (!index.has(base)) index.set(base, []);
    index.get(base).push(file);
  }
  return index;
};

const toUrlPath = (absPath) => path.relative(REPO_ROOT, absPath).split(path.sep).join('/');

const localeOf = (absPathUnderDocs) => {
  const rel = path.relative(DOCS_DIR, absPathUnderDocs).split(path.sep);
  return rel[0]; // 'en' | 'es' | 'pt'
};

const decodeUrlPath = (urlPath) => {
  try {
    return decodeURIComponent(urlPath);
  } catch {
    return urlPath;
  }
};

const rebuildCdnUrl = (match, newPath) => {
  if (match[1]) {
    return `https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@${match[1]}/${newPath}`;
  }
  return `https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/${match[3]}/${newPath}`;
};

// Score a relocation candidate against the broken path: same locale as the
// referencing doc counts most, then how many parent folders (closest to the
// file first) still match, so a rename one level up still wins over an
// unrelated file that merely shares a filename.
const scoreCandidate = (docLocale, brokenAbsPath, candidateAbsPath) => {
  let score = candidateAbsPath.includes(`${path.sep}${docLocale}${path.sep}`) ? 1000 : 0;

  const brokenSegs = path.dirname(brokenAbsPath).split(path.sep).reverse();
  const candSegs = path.dirname(candidateAbsPath).split(path.sep).reverse();
  let i = 0;
  while (i < brokenSegs.length && i < candSegs.length && brokenSegs[i] === candSegs[i]) {
    score += 10;
    i++;
  }
  return score;
};

const pickBestCandidate = (docLocale, brokenAbsPath, candidates) => {
  const scored = candidates.map((c) => ({ path: c, score: scoreCandidate(docLocale, brokenAbsPath, c) }));
  scored.sort((a, b) => b.score - a.score);
  const top = scored[0].score;
  const tied = scored.filter((c) => c.score === top);
  return tied.length === 1 ? tied[0].path : null; // null => ambiguous
};

const report = (results, { fix, verbose }) => {
  if (verbose) {
    console.log(`\nOK (${results.ok.length})`);
    for (const r of results.ok) console.log(`  ${r.file}\n    ${r.url}`);
  }

  console.log(`\nFIXED (${results.fixed.length})${fix ? '' : ' — dry run, re-run with --fix to write changes'}`);
  for (const r of results.fixed) {
    console.log(`  ${r.file}`);
    console.log(`    - ${r.oldUrl}`);
    console.log(`    + ${r.newUrl}`);
  }

  console.log(`\nAMBIGUOUS (${results.ambiguous.length}) — multiple equally-likely candidates, needs manual pick`);
  for (const r of results.ambiguous) {
    console.log(`  ${r.file}\n    ${r.url}`);
    for (const c of r.candidates) console.log(`    ? https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/${c}`);
  }

  console.log(`\nUNFIXABLE (${results.unfixable.length}) — no matching file found under docs/`);
  for (const r of results.unfixable) {
    console.log(`  ${r.file}\n    ${r.url}\n    (${r.reason})`);
  }

  console.log(
    `\nSummary: ${results.ok.length} ok, ${results.fixed.length} fixed, ${results.ambiguous.length} ambiguous, ${results.unfixable.length} unfixable.`
  );
};

const checkBrokenImageLinks = ({ targetDir, fix = false, verbose = false } = {}) => {
  const targetDirs = (Array.isArray(targetDir) ? targetDir : [targetDir || DOCS_DIR]).map((dir) =>
    path.resolve(REPO_ROOT, dir)
  );

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) {
      throw new Error(`Not a directory: ${dir}`);
    }
  }

  const basenameIndex = buildBasenameIndex();
  const seen = new Set();
  const mdFiles = [];
  for (const dir of targetDirs) {
    for (const file of walk(dir).filter((f) => f.endsWith('.md'))) {
      if (seen.has(file)) continue;
      seen.add(file);
      mdFiles.push(file);
    }
  }

  const scanned = targetDirs.map((dir) => path.relative(REPO_ROOT, dir) || '.').join(', ');
  console.log(`Scanning ${scanned} (${mdFiles.length} .md file(s))...`);

  const results = { ok: [], fixed: [], ambiguous: [], unfixable: [] };

  for (const mdFile of mdFiles) {
    const relMd = path.relative(REPO_ROOT, mdFile);
    const docLocale = localeOf(mdFile);
    let content = fs.readFileSync(mdFile, 'utf8');
    let changed = false;

    const matches = [...content.matchAll(CDN_LINK_RE)];
    if (matches.length === 0) continue;

    for (const match of matches) {
      const fullUrl = match[0];
      const urlPath = decodeUrlPath(match[2] || match[4]);
      const brokenAbsPath = path.join(REPO_ROOT, urlPath);

      if (fs.existsSync(brokenAbsPath)) {
        results.ok.push({ file: relMd, url: fullUrl });
        continue;
      }

      const basename = path.basename(urlPath);
      const candidates = (basenameIndex.get(basename) || []).filter((c) => c !== brokenAbsPath);

      if (candidates.length === 0) {
        results.unfixable.push({
          file: relMd,
          url: fullUrl,
          reason: `no file named "${basename}" found anywhere under docs/`,
        });
        continue;
      }

      const best = pickBestCandidate(docLocale, brokenAbsPath, candidates);

      if (!best) {
        results.ambiguous.push({
          file: relMd,
          url: fullUrl,
          candidates: candidates.map(toUrlPath),
        });
        continue;
      }

      const newUrl = rebuildCdnUrl(match, toUrlPath(best));
      results.fixed.push({ file: relMd, oldUrl: fullUrl, newUrl });

      if (fix) {
        content = content.split(fullUrl).join(newUrl);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(mdFile, content, 'utf8');
    }
  }

  report(results, { fix, verbose });
  return results;
};

const main = (argv = process.argv.slice(2)) => {
  const shouldFix = argv.includes('--fix');
  const verbose = argv.includes('--verbose');
  const targetArg = argv.find((a) => !a.startsWith('--'));

  try {
    const results = checkBrokenImageLinks({
      targetDir: targetArg ? path.resolve(REPO_ROOT, targetArg) : DOCS_DIR,
      fix: shouldFix,
      verbose,
    });
    if (results.unfixable.length > 0 || results.ambiguous.length > 0) {
      process.exitCode = 1;
    }
    return results;
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

if (require.main === module) {
  main();
}

module.exports = { checkBrokenImageLinks, main };
