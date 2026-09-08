const fs = require('fs');
const path = require('path');

// Updates `order` in metadata.json of folders immediately inside
// docs/{en,es,pt}/tutorials. Categories are matched across locales by
// metadata `id` — never by translating folder names
// (vtex-admin vs admin-vtex, catalog vs catálogo).
//
// Usage:
//   node docs-utils/reorderTutorialCategories.js "VTEX Admin" Dashboards Orders ...
//   node docs-utils/reorderTutorialCategories.js --file order.txt
//   node docs-utils/reorderTutorialCategories.js --file order.txt --apply
//   node docs-utils/reorderTutorialCategories.js --file order.txt --locale pt
//
// Default is a dry run. Pass --apply to write. Only the `order` field is
// changed; JSON shape, key order, and formatting are preserved.

const REPO_ROOT = path.join(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const LOCALES = ['en', 'es', 'pt'];

// User labels that do not always match `id` or `name` exactly.
// Matching order is: exact id → case-insensitive name in any locale → these.
const ALIASES = [
  { id: 'vtex-admin', labels: ['VTEX Admin', 'Admin VTEX'] },
  {
    id: 'promotions-and-taxes',
    labels: [
      'Promotions',
      'Promotions & taxes',
      'Promoções e taxas',
      'Tasas y promociones',
    ],
  },
  { id: 'sellers', labels: ['Marketplace'] },
  {
    id: 'store-settings',
    labels: [
      'Store Settings',
      'Configurações da Loja',
      'Configuraciones de la Tienda',
    ],
  },
];

const usage = () => {
  console.log(`
Usage: node docs-utils/reorderTutorialCategories.js <label> [<label> ...] [options]
       node docs-utils/reorderTutorialCategories.js --file <path> [options]

Set \`order\` on top-level tutorial categories (docs/{en,es,pt}/tutorials/*/metadata.json)
from an ordered list of labels (ids, names, or aliases). The same number is written
for each id in every locale. Nested metadata.json files are not touched.

Arguments:
  label            Category id, localized name, or known alias
                   (quote labels that contain spaces)

Options:
  --file <path>    Read labels, one per line (# comments and blank lines ignored)
  --apply          Write the new order values (default: dry run)
  --locale <l>     Only these locales (en|es|pt, comma-separated). Default: all three
  --help, -h       Show this help

Examples:
  node docs-utils/reorderTutorialCategories.js "VTEX Admin" Dashboards Orders Catalog Promotions Storefront Shipping Marketplace Apps "Store Settings"
  node docs-utils/reorderTutorialCategories.js --file order.txt --apply
  node docs-utils/reorderTutorialCategories.js --file order.txt --locale pt
`);
};

const parseArgs = (argv) => {
  const args = [...argv];
  if (args.includes('--help') || args.includes('-h')) {
    usage();
    process.exit(0);
  }

  const shouldApply = args.includes('--apply');
  const localeFlagIndex = args.indexOf('--locale');
  const fileFlagIndex = args.indexOf('--file');

  let localeFilter = null;
  if (localeFlagIndex !== -1) {
    localeFilter = args[localeFlagIndex + 1];
    if (!localeFilter || localeFilter.startsWith('--')) {
      console.error('--locale requires a value (en, es, pt, or a comma-separated list).');
      process.exit(1);
    }
  }

  let filePath = null;
  if (fileFlagIndex !== -1) {
    filePath = args[fileFlagIndex + 1];
    if (!filePath || filePath.startsWith('--')) {
      console.error('--file requires a path.');
      process.exit(1);
    }
  }

  const skipValues = new Set();
  if (localeFlagIndex !== -1) skipValues.add(localeFlagIndex + 1);
  if (fileFlagIndex !== -1) skipValues.add(fileFlagIndex + 1);

  const positional = args.filter((a, i) => {
    if (a.startsWith('--')) return false;
    if (skipValues.has(i)) return false;
    return true;
  });

  const locales = localeFilter
    ? localeFilter.split(',').map((l) => l.trim()).filter(Boolean)
    : [...LOCALES];

  for (const locale of locales) {
    if (!LOCALES.includes(locale)) {
      console.error(`Invalid locale "${locale}". Use en, es, or pt.`);
      process.exit(1);
    }
  }

  return { shouldApply, locales, filePath, positional };
};

const toPosix = (p) => p.split(path.sep).join('/');

const toRepoRel = (absPath) => toPosix(path.relative(REPO_ROOT, absPath));

const readLabelsFromFile = (filePath) => {
  const abs = path.resolve(REPO_ROOT, filePath);
  if (!fs.existsSync(abs)) {
    throw new Error(`File not found: ${filePath}`);
  }
  return fs
    .readFileSync(abs, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.replace(/#.*$/, '').trim())
    .filter(Boolean);
};

const loadTopLevelCategories = () => {
  // id -> { [locale]: { id, name, slug, order, dir, metaPath, raw } }
  const byId = new Map();
  const skipped = [];
  const errors = [];

  for (const locale of LOCALES) {
    const tutorialsDir = path.join(DOCS_DIR, locale, 'tutorials');
    if (!fs.existsSync(tutorialsDir)) {
      errors.push(`Missing directory: ${toRepoRel(tutorialsDir)}`);
      continue;
    }

    for (const entry of fs.readdirSync(tutorialsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const dir = path.join(tutorialsDir, entry.name);
      const metaPath = path.join(dir, 'metadata.json');
      if (!fs.existsSync(metaPath)) {
        skipped.push({ locale, dir: toRepoRel(dir) });
        continue;
      }

      let json;
      let raw;
      try {
        raw = fs.readFileSync(metaPath, 'utf8');
        json = JSON.parse(raw);
      } catch (err) {
        errors.push(`Invalid JSON ${toRepoRel(metaPath)}: ${err.message}`);
        continue;
      }

      const id = json.id;
      if (!id) {
        errors.push(`Missing id in ${toRepoRel(metaPath)}`);
        continue;
      }

      if (!byId.has(id)) byId.set(id, {});
      const localesForId = byId.get(id);
      if (localesForId[locale]) {
        errors.push(
          `Duplicate id "${id}" in ${locale}: ${toRepoRel(localesForId[locale].dir)} and ${toRepoRel(dir)}`
        );
        continue;
      }

      localesForId[locale] = {
        id,
        name: json.name || '',
        slug: json.slug || '',
        order: typeof json.order === 'number' ? json.order : null,
        dir,
        metaPath,
        raw,
      };
    }
  }

  return { byId, skipped, errors };
};

const aliasIdsForLabel = (label) => {
  const needle = label.toLowerCase();
  const ids = [];
  for (const alias of ALIASES) {
    if (alias.labels.some((l) => l.toLowerCase() === needle)) {
      if (!ids.includes(alias.id)) ids.push(alias.id);
    }
  }
  return ids;
};

const resolveLabel = (label, byId) => {
  const trimmed = label.trim();
  if (!trimmed) return { error: 'empty', label };

  if (byId.has(trimmed)) return { id: trimmed, via: 'id' };

  const nameMatches = [];
  for (const [id, locales] of byId) {
    for (const locale of LOCALES) {
      const entry = locales[locale];
      if (entry && entry.name.toLowerCase() === trimmed.toLowerCase()) {
        if (!nameMatches.includes(id)) nameMatches.push(id);
      }
    }
  }
  if (nameMatches.length === 1) return { id: nameMatches[0], via: 'name' };
  if (nameMatches.length > 1) {
    return { error: 'ambiguous', label: trimmed, matches: nameMatches, via: 'name' };
  }

  const aliasMatches = aliasIdsForLabel(trimmed);
  if (aliasMatches.length === 1) return { id: aliasMatches[0], via: 'alias' };
  if (aliasMatches.length > 1) {
    return { error: 'ambiguous', label: trimmed, matches: aliasMatches, via: 'alias' };
  }

  return { error: 'not-found', label: trimmed };
};

const resolveLabels = (labels, byId) => {
  const resolved = [];
  const problems = [];
  const seen = new Set();

  for (const label of labels) {
    const result = resolveLabel(label, byId);
    if (result.error) {
      problems.push(result);
      continue;
    }
    if (seen.has(result.id)) {
      problems.push({
        error: 'duplicate',
        label,
        id: result.id,
      });
      continue;
    }
    seen.add(result.id);
    resolved.push({ label, id: result.id, via: result.via });
  }

  return { resolved, problems };
};

const formatResolveProblems = (problems, byId) => {
  const lines = [];
  for (const problem of problems) {
    if (problem.error === 'empty') {
      lines.push('  empty label');
    } else if (problem.error === 'not-found') {
      lines.push(`  "${problem.label}" matched no id, name, or alias`);
    } else if (problem.error === 'ambiguous') {
      const detail = problem.matches
        .map((id) => {
          const names = LOCALES.map((l) => (byId.get(id) || {})[l]?.name)
            .filter(Boolean)
            .join(' / ');
          return `${id} (${names})`;
        })
        .join(', ');
      lines.push(`  "${problem.label}" matched more than one ${problem.via}: ${detail}`);
    } else if (problem.error === 'duplicate') {
      lines.push(`  "${problem.label}" resolves to "${problem.id}", which is already in the list`);
    }
  }
  return lines.join('\n');
};

const missingLocalesForId = (id, byId, locales) => {
  const entry = byId.get(id);
  if (!entry) return locales;
  return locales.filter((locale) => !entry[locale]);
};

const assignOrders = (listedIds, byId, locales) => {
  const n = listedIds.length;
  // locale -> [{ id, from, to, reason }]
  const changes = {};
  for (const locale of locales) changes[locale] = [];

  for (const locale of locales) {
    const listedSet = new Set(listedIds);
    const used = new Set();

    listedIds.forEach((id, index) => {
      const to = index + 1;
      const entry = byId.get(id)[locale];
      used.add(to);
      changes[locale].push({
        id,
        from: entry.order,
        to,
        reason: 'listed',
        name: entry.name,
      });
    });

    const unlisted = [];
    for (const [id, localesForId] of byId) {
      if (listedSet.has(id)) continue;
      const entry = localesForId[locale];
      if (!entry) continue;
      unlisted.push({ id, ...entry });
    }

    const keep = unlisted.filter((c) => typeof c.order === 'number' && c.order > n);
    const colliding = unlisted.filter((c) => !(typeof c.order === 'number' && c.order > n));

    for (const c of keep) {
      used.add(c.order);
      changes[locale].push({
        id: c.id,
        from: c.order,
        to: c.order,
        reason: 'unlisted',
        name: c.name,
      });
    }

    colliding.sort((a, b) => {
      const ao = typeof a.order === 'number' ? a.order : Number.POSITIVE_INFINITY;
      const bo = typeof b.order === 'number' ? b.order : Number.POSITIVE_INFINITY;
      if (ao !== bo) return ao - bo;
      return a.name.localeCompare(b.name, 'en');
    });

    let next = n + 1;
    for (const c of colliding) {
      while (used.has(next)) next += 1;
      used.add(next);
      changes[locale].push({
        id: c.id,
        from: c.order,
        to: next,
        reason: 'collision',
        name: c.name,
      });
      next += 1;
    }
  }

  return changes;
};

const replaceOrderValue = (raw, newOrder) => {
  if (/"order"\s*:/.test(raw)) {
    const next = raw.replace(/("order"\s*:\s*)-?\d+/, `$1${newOrder}`);
    if (next === raw && !new RegExp(`"order"\\s*:\\s*${newOrder}\\b`).test(raw)) {
      throw new Error('Could not replace existing order value while preserving formatting');
    }
    return next;
  }

  const match = raw.match(/\n(\s*)}\s*$/);
  if (!match) {
    throw new Error('Could not insert order: unexpected JSON shape');
  }
  const indent = match[1] + '  ';
  const withoutClose = raw.replace(/\s*}\s*$/, '');
  const needsComma = /["\dtrue]|null\s*$/.test(withoutClose);
  return `${withoutClose}${needsComma ? ',' : ''}\n${indent}"order": ${newOrder}\n${match[1]}}\n`;
};

const pad = (value, width) => String(value ?? '').padEnd(width, ' ');

const printTable = (listedIds, byId, changes, locales) => {
  const rows = [];
  const allIds = [...listedIds];
  const extra = new Set();
  for (const locale of locales) {
    for (const change of changes[locale]) {
      if (!listedIds.includes(change.id)) extra.add(change.id);
    }
  }
  const extraSorted = [...extra].sort((a, b) => {
    const orderA = locales.map((l) => changes[l].find((c) => c.id === a)?.to).find((n) => n != null) ?? 0;
    const orderB = locales.map((l) => changes[l].find((c) => c.id === b)?.to).find((n) => n != null) ?? 0;
    if (orderA !== orderB) return orderA - orderB;
    return a.localeCompare(b);
  });
  allIds.push(...extraSorted);

  for (const id of allIds) {
    const names = {};
    const orders = {};
    const froms = {};
    for (const locale of LOCALES) {
      names[locale] = byId.get(id)?.[locale]?.name || '—';
    }
    for (const locale of locales) {
      const change = changes[locale].find((c) => c.id === id);
      orders[locale] = change ? change.to : '—';
      froms[locale] = change ? change.from : '—';
    }
    rows.push({ id, names, orders, froms, listed: listedIds.includes(id) });
  }

  const wId = Math.max(2, ...rows.map((r) => r.id.length));
  const wEn = Math.max(2, ...rows.map((r) => r.names.en.length));
  const wEs = Math.max(2, ...rows.map((r) => r.names.es.length));
  const wPt = Math.max(2, ...rows.map((r) => r.names.pt.length));

  const orderHeader = locales.length === LOCALES.length ? 'order' : locales.map((l) => `ord ${l}`).join('  ');
  const showPerLocaleOrder = locales.some((locale) =>
    rows.some((r) => {
      const first = r.orders[locales[0]];
      return r.orders[locale] !== first;
    })
  );

  console.log(
    `  ${pad('#', 3)} ${pad('id', wId)}  ${pad('EN', wEn)}  ${pad('ES', wEs)}  ${pad('PT', wPt)}  ${
      showPerLocaleOrder ? locales.map((l) => pad(l, 4)).join('  ') : pad(orderHeader, 5)
    }  note`
  );

  rows.forEach((row, index) => {
    const noteParts = [];
    if (!row.listed) {
      const reasons = locales
        .map((l) => changes[l].find((c) => c.id === row.id)?.reason)
        .filter(Boolean);
      if (reasons.includes('collision')) noteParts.push('collision');
      else noteParts.push('unlisted');
    }
    const changed = locales.some((l) => {
      const change = changes[l].find((c) => c.id === row.id);
      return change && change.from !== change.to;
    });
    if (changed) noteParts.push('changed');

    const orderCell = showPerLocaleOrder
      ? locales.map((l) => pad(row.orders[l], 4)).join('  ')
      : pad(row.orders[locales[0]], 5);

    console.log(
      `  ${pad(index + 1, 3)} ${pad(row.id, wId)}  ${pad(row.names.en, wEn)}  ${pad(row.names.es, wEs)}  ${pad(
        row.names.pt,
        wPt
      )}  ${orderCell}  ${noteParts.join(', ')}`
    );
  });
};

const verify = (listedIds, byId, changes, locales) => {
  const issues = [];
  const n = listedIds.length;

  for (const locale of locales) {
    const byOrder = new Map();
    for (const change of changes[locale]) {
      if (!byOrder.has(change.to)) byOrder.set(change.to, []);
      byOrder.get(change.to).push(change.id);
    }

    listedIds.forEach((id, index) => {
      const expected = index + 1;
      const change = changes[locale].find((c) => c.id === id);
      if (!change || change.to !== expected) {
        issues.push(`${locale}: listed id "${id}" should have order ${expected}, got ${change ? change.to : 'missing'}`);
      }
    });

    for (let order = 1; order <= n; order += 1) {
      const ids = byOrder.get(order) || [];
      const extra = ids.filter((id) => !listedIds.includes(id));
      if (extra.length > 0) {
        issues.push(
          `${locale}: order ${order} is also used by unlisted id(s): ${extra.join(', ')}`
        );
      }
    }
  }

  return issues;
};

const applyChanges = (byId, changes, locales) => {
  const written = [];
  for (const locale of locales) {
    for (const change of changes[locale]) {
      if (change.from === change.to) continue;
      const entry = byId.get(change.id)[locale];
      const next = replaceOrderValue(entry.raw, change.to);
      fs.writeFileSync(entry.metaPath, next, 'utf8');
      written.push({ locale, id: change.id, path: toRepoRel(entry.metaPath), from: change.from, to: change.to });
    }
  }
  return written;
};

const main = (argv = process.argv.slice(2)) => {
  const { shouldApply, locales, filePath, positional } = parseArgs(argv);

  let labels = positional;
  if (filePath) {
    if (positional.length > 0) {
      console.error('Pass labels as arguments or via --file, not both.');
      process.exit(1);
    }
    try {
      labels = readLabelsFromFile(filePath);
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }

  if (labels.length === 0) {
    usage();
    process.exit(1);
  }

  const { byId, skipped, errors } = loadTopLevelCategories();
  if (errors.length > 0) {
    console.error('Failed to load top-level categories:\n');
    for (const err of errors) console.error(`  ${err}`);
    process.exit(1);
  }

  console.log(`Locales:  ${locales.join(', ')}`);
  console.log(`Mode:     ${shouldApply ? 'apply' : 'dry-run (pass --apply to write)'}`);
  console.log(`Labels:   ${labels.length}`);
  console.log(`Loaded:   ${byId.size} categor${byId.size === 1 ? 'y' : 'ies'} (matched by id)\n`);

  if (skipped.length > 0) {
    console.log('Skipped directories with no metadata.json:');
    for (const item of skipped) console.log(`  [${item.locale}] ${item.dir}`);
    console.log('');
  }

  const { resolved, problems } = resolveLabels(labels, byId);
  if (problems.length > 0) {
    console.error('Could not resolve labels (not guessing):\n');
    console.error(formatResolveProblems(problems, byId));
    process.exit(1);
  }

  const listedIds = resolved.map((r) => r.id);
  const missing = [];
  for (const { label, id, via } of resolved) {
    const absent = missingLocalesForId(id, byId, locales);
    if (!byId.has(id) || absent.length > 0) {
      missing.push({ label, id, via, absent: byId.has(id) ? absent : locales });
    }
  }
  if (missing.length > 0) {
    console.error('These ids are missing in one or more locales:\n');
    for (const item of missing) {
      console.error(
        `  "${item.label}" → ${item.id} (${item.via}); missing in ${item.absent.join(', ')}`
      );
    }
    process.exit(1);
  }

  console.log('Resolved list:');
  resolved.forEach((item, index) => {
    console.log(`  ${String(index + 1).padStart(2, ' ')}. ${item.id}  ← ${item.label} (${item.via})`);
  });
  console.log('');

  const changes = assignOrders(listedIds, byId, locales);

  console.log('Plan\n');
  printTable(listedIds, byId, changes, locales);
  console.log('');

  const issues = verify(listedIds, byId, changes, locales);
  if (issues.length > 0) {
    console.error('Verification failed:\n');
    for (const issue of issues) console.error(`  ${issue}`);
    process.exit(1);
  }

  const writeCount = locales.reduce(
    (n, locale) => n + changes[locale].filter((c) => c.from !== c.to).length,
    0
  );

  if (!shouldApply) {
    console.log(
      `Dry run only. ${writeCount} metadata.json file(s) would change. Nested metadata.json files were not considered. Re-run with --apply to write.`
    );
    return { listedIds, changes, written: [] };
  }

  let written;
  try {
    written = applyChanges(byId, changes, locales);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  console.log(`Wrote ${written.length} file(s):`);
  for (const item of written) {
    console.log(`  [${item.locale}] ${item.path}  ${item.from} → ${item.to}`);
  }
  if (written.length === 0) {
    console.log('  (no order values changed)');
  }
  console.log('\nDone. Nested metadata.json files were not edited.');
  return { listedIds, changes, written };
};

if (require.main === module) {
  main();
}

module.exports = { main, loadTopLevelCategories, resolveLabel, assignOrders };
