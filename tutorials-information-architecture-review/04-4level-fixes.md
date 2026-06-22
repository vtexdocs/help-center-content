# Four-Level Nesting Violations — Identification and Flattening Plan

The maximum allowed depth in the new IA is 3 levels (L1 Section → L2 Category → L3 Article). Four places in the current structure have a 4th level that must be eliminated.

Each violation is documented with:
- Current path and depth diagram
- All affected articles
- Recommended flattening strategy
- The resulting structure after the fix
- Required file operations

---

## Violation 1: `b2b/b2b-suite/organization-details/`

### Current depth
```
b2b/                                    ← L1 (Section)
  b2b-suite/                            ← L2 (Category)
    organization-details/               ← L3 (illegal sub-category)
      *.md articles                     ← L4 (articles, one level too deep)
```

### Affected articles (8 articles)
| File | Title |
|---|---|
| `b2b-collection-management.md` | B2B Collection Management |
| `b2b-cost-center-management.md` | B2B Cost Center Management |
| `b2b-organization-general-settings.md` | B2B Organization General Settings |
| `b2b-sales-channels-overview.md` | B2B Sales Channels Overview |
| `configuring-payment-conditions-for-b2b.md` | Configuring Payment Conditions for B2B |
| `configuring-seller-allocation-for-buying-xky.md` | Configuring Seller Allocation |
| `custom-fields-when-adding-an-organization.md` | Custom Fields When Adding an Organization |
| `managing-users-in-b2b-organizations.md` | Managing Users in B2B Organizations |
| `price-table-management-in-b2b-organizations.md` | Price Table Management in B2B Organizations |

### Recommended fix: Promote articles up one level

Move all articles from `organization-details/` directly into `b2b-suite/`. The `organization-details/` folder and its `metadata.json` are removed. The articles become L3 articles directly under the `b2b-suite` L2 group.

The `b2b-suite` category currently has 4 direct articles + 5 sub-folders (b2b-organizations, organization-details, overview, practical-guides, and 4 articles in those). After flattening, the total under `b2b-suite` will be ~24 articles as direct L3 entries.

### Resulting structure
```
b2b/                                    ← L1 (Section)
  b2b-suite/                            ← L2 (Category)
    *.md articles (all 24 flat)         ← L3 (articles) ✓
```

### File operations required
| Operation | Source | Destination |
|---|---|---|
| Move | `b2b/b2b-suite/organization-details/*.md` | `b2b/b2b-suite/` |
| Move | `b2b/b2b-suite/organization-details/*.png/.jpg` | `b2b/b2b-suite/` |
| Delete | `b2b/b2b-suite/organization-details/metadata.json` | — |
| Delete | `b2b/b2b-suite/organization-details/` (empty folder) | — |

**ES equivalent:** `b2b/b2b-suite/detalles-de-la-organización/`
**PT equivalent:** `b2b/b2b-suite/detalhes-da-organização/`

---

## Violation 2: `storefront/cms-for-store-framework/[pages, site-editor, store-settings---storefront, styles]`

### Current depth
```
storefront/                             ← L1 (Section)
  cms-for-store-framework/             ← L2 (Category)
    pages/                             ← L3 (illegal sub-category)
      *.md articles                    ← L4 (articles, one level too deep)
    site-editor/                       ← L3 (illegal sub-category)
      *.md articles                    ← L4
    store-settings---storefront/       ← L3 (illegal sub-category)
      *.md articles                    ← L4
    styles/                            ← L3 (illegal sub-category)
      *.md articles                    ← L4
```

### Affected articles (27 articles across 4 sub-folders)

**`pages/` (4 articles):**
| File |
|---|
| `creating-landing-pages.md` |
| `managing-redirects-per-binding.md` |
| `managing-url-redirects.md` |
| `pages-overview.md` |

**`site-editor/` (8 articles):**
| File |
|---|
| `image-widget.md` |
| `improving-the-seo-of-product-listing-pages.md` |
| `linking-urls-to-banners-using-the-site-editor.md` |
| `managing-content-per-binding.md` |
| `managing-content-versions.md` |
| `managing-page-and-template-content.md` |
| `scheduling-content-updates.md` |
| `site-editor-overview.md` |

**`store-settings---storefront/` (12 articles):**
| File |
|---|
| `changing-default-system-texts-displayed-in-the-store.md` |
| `cms-store-overview.md` |
| `configuring-pwa-in-your-store-framework-store.md` |
| `configuring-seo-in-legacy-cms-portal-stores.md` |
| `configuring-seo-in-your-store.md` |
| `enabling-pwa-push-notifications-in-your-store.md` |
| `filling-in-system-settings.md` |
| `how-to-install-a-service-worker.md` |
| `set-the-store-display-language.md` |
| `setting-up-the-standard-size-for-the-zoom-image.md` |
| `storefront-settings-overview.md` |
| `what-are-the-internal-utms.md` |

**`styles/` (2 articles):**
| File |
|---|
| `customizing-your-stores-typography.md` |
| `styles-overview.md` |

### Recommended fix: Promote sub-folders to L2 groups (eliminate `cms-for-store-framework` as an intermediate level)

Instead of keeping `cms-for-store-framework` as an L2 group that contains L3 sub-groups, eliminate it as a navigation level and promote its 4 sub-folders directly as L2 groups under `storefront`.

```
storefront/                             ← L1 (Section)
  cms-for-store-framework/             ← REMOVED as navigation level
    pages/ → becomes a new flat group
    site-editor/ → becomes a new flat group
    store-settings---storefront/ → becomes a new flat group
    styles/ → (only 2 articles; merge into site-editor or store-settings group)
```

**Option A (Recommended): Elevate sub-folders to L2 groups under storefront**

```
storefront/                             ← L1 (Section)
  layout/                              ← L2 (existing, keep)
  headless-cms/                        ← L2 (existing, keep)
  agentic-cx/                          ← L2 (existing, keep)
  cms-pages/                           ← L2 (NEW — was cms-for-store-framework/pages)
  site-editor/                         ← L2 (NEW — was cms-for-store-framework/site-editor)
  storefront-settings/                 ← L2 (NEW — was cms-for-store-framework/store-settings---storefront + styles)
    *.md articles                      ← L3 ✓
```

> Note: `styles/` has only 2 articles — merge both articles into `storefront-settings/` group since they are about visual/appearance settings.

**Option B (Alternative): Flatten cms-for-store-framework into one large L2 group**

Move all 27 articles directly into a single flat `cms-for-store-framework/` L2 group, removing the 4 sub-folders. This is simpler but creates a 27-article group without internal organization.

Recommendation: Use **Option A** as it maintains thematic grouping with better discoverability.

### File operations required (Option A)

| Operation | Source | Destination | Notes |
|---|---|---|---|
| Move | `storefront/cms-for-store-framework/pages/*.md` | `storefront/cms-pages/` | New L2 folder |
| Move | `storefront/cms-for-store-framework/pages/*.png` | `storefront/cms-pages/` | |
| Move | `storefront/cms-for-store-framework/site-editor/*.md` | `storefront/site-editor/` | New L2 folder |
| Move | `storefront/cms-for-store-framework/site-editor/*.png/.gif` | `storefront/site-editor/` | |
| Move | `storefront/cms-for-store-framework/store-settings---storefront/*.md` | `storefront/storefront-settings/` | New L2 folder |
| Move | `storefront/cms-for-store-framework/store-settings---storefront/*.png/.jpg` | `storefront/storefront-settings/` | |
| Move | `storefront/cms-for-store-framework/styles/*.md` | `storefront/storefront-settings/` | Merge with settings |
| Move | `storefront/cms-for-store-framework/styles/*.png/.gif` | `storefront/storefront-settings/` | |
| Create | `storefront/cms-pages/metadata.json` | — | New L2 metadata |
| Create | `storefront/site-editor/metadata.json` | — | New L2 metadata |
| Create | `storefront/storefront-settings/metadata.json` | — | New L2 metadata |
| Delete | `storefront/cms-for-store-framework/pages/metadata.json` | — | |
| Delete | `storefront/cms-for-store-framework/site-editor/metadata.json` | — | |
| Delete | `storefront/cms-for-store-framework/store-settings---storefront/metadata.json` | — | |
| Delete | `storefront/cms-for-store-framework/styles/metadata.json` | — | |
| Delete | `storefront/cms-for-store-framework/metadata.json` | — | Remove L2 folder |
| Delete | `storefront/cms-for-store-framework/` (empty) | — | |

**ES equivalents:**
- `storefront/cms-for-store-framework/páginas/` → `storefront/cms-pages/`
- `storefront/cms-for-store-framework/estilos/` → `storefront/storefront-settings/`
- `storefront/cms-for-store-framework/configuración-de-la-tienda---storefront/` → `storefront/storefront-settings/`

**PT equivalents:**
- `storefront/cms-for-store-framework/páginas/` → `storefront/cms-pages/`
- `storefront/cms-for-store-framework/estilos/` → `storefront/storefront-settings/`
- `storefront/cms-for-store-framework/configurações-da-loja---storefront/` → `storefront/storefront-settings/`

---

## Violation 3: `vtex-cx-platform/agent-builder/automation-flow/`

### Current depth
```
vtex-cx-platform/                      ← L1 (Section)
  agent-builder/                       ← L2 (Category)
    automation-flow/                   ← L3 (illegal sub-category)
      *.md articles                    ← L4 (articles, one level too deep)
```

### Affected articles (19 articles in `automation-flow/`)
| File |
|---|
| `action-cards.md` |
| `adding-media-to-the-message.md` |
| `automation-flow-overview.md` |
| `call-webhook-making-requests-to-external-services.md` |
| `chatbot-integrado-a-api-omie.md` |
| `construtor-de-vendas-api-integrated-chatbot.md` |
| `decision-cards.md` |
| `expressions-and-variables-introduction.md` |
| `expressions-glossary.md` |
| `flow-editor-and-tools.md` |
| `flows-creation.md` |
| `import-and-export-flows.md` |
| `route-markers.md` |
| `sienge-api-integrated-chatbot.md` |
| `using-expressions-to-capture-the-users-location.md` |
| `variables-glossary.md` |
| `viewing-reports-on-the-platform.md` |
| `whatsapp-message-card.md` |
| `zero-shot-learning.md` |

**Direct articles in `agent-builder/` (4 articles):**
- `agent-builder-overview.md`
- `assigning-and-testing-agents-in-agent-builder.md`
- `official-agents-from-vtex-cx-platform.md`
- (metadata.json)

### Recommended fix: Promote automation-flow articles up to agent-builder level

Move all 19 articles from `automation-flow/` directly into `agent-builder/`. The result is `agent-builder` as an L2 category with 23 total articles as direct L3 entries. The `automation-flow/` folder and its `metadata.json` are deleted.

23 articles is slightly above the 20-article soft maximum for an L2 group — this is acceptable given the thematic coherence of the content. If further splitting is desired, `agent-builder` could be split into two L2 groups: "Agent Builder Basics" (3–4 articles) and "Automation Flows" (19 articles).

### Resulting structure
```
vtex-cx-platform/                      ← L1 (Section)
  agent-builder/                       ← L2 (Category)
    *.md articles (all 23 flat)        ← L3 (articles) ✓
```

### File operations required
| Operation | Source | Destination |
|---|---|---|
| Move | `vtex-cx-platform/agent-builder/automation-flow/*.md` | `vtex-cx-platform/agent-builder/` |
| Move | `vtex-cx-platform/agent-builder/automation-flow/*.png/.gif` | `vtex-cx-platform/agent-builder/` |
| Delete | `vtex-cx-platform/agent-builder/automation-flow/metadata.json` | — |
| Delete | `vtex-cx-platform/agent-builder/automation-flow/` (empty) | — |

**ES equivalent:** `vtex-cx-platform/agent-builder/flujo-de-automatizacion/`
**PT equivalent:** `vtex-cx-platform/agent-builder/fluxo-de-automacao/`

---

## Violation 4: `indeva-by-vtex/sales-update-with-pdv/erp/`

### Current depth
```
indeva-by-vtex/                        ← L1 (Section)
  sales-update-with-pdv/               ← L2 (Category, single-child)
    erp/                               ← L3 (illegal sub-category)
      *.md articles                    ← L4 (articles, one level too deep)
```

### Affected articles (8 articles in `erp/`)
| File | Title |
|---|---|
| `fix-connection-refused-error-ip-or-port-integrator-indeva.md` | Fix Connection Refused Error |
| `fix-integration-failures-with-sales-systems-indeva.md` | Fix Integration Failures with Sales Systems |
| `fix-unassigned-sales-to-sellers-indeva.md` | Fix Unassigned Sales to Sellers |
| `manual-sales-update-indeva.md` | Manual Sales Update |
| `microvix-integration-interrupted-due-to-username-and-password.md` | Microvix Integration Interrupted |
| `open-and-check-integrator-indeva.md` | Open and Check Integrator |
| `real-time-sales-indeva.md` | Real-Time Sales |

### Recommended fix: Collapse two levels into one — remove `sales-update-with-pdv` and `erp` as separate levels

The intermediate `sales-update-with-pdv/` folder contains only a single child (`erp/`), making it a vestigial level. Collapse both `sales-update-with-pdv/` and `erp/` into a single flat L2 group named `sales-update-pdv-erp` (or rename it to a more descriptive label).

```
indeva-by-vtex/                        ← L1 (Section)
  sales-update-pdv-erp/               ← L2 (Category — replaces both sales-update-with-pdv + erp)
    *.md articles (all 8 flat)        ← L3 (articles) ✓
```

### File operations required
| Operation | Source | Destination |
|---|---|---|
| Move | `indeva-by-vtex/sales-update-with-pdv/erp/*.md` | `indeva-by-vtex/sales-update-pdv-erp/` (new folder) |
| Create | `indeva-by-vtex/sales-update-pdv-erp/metadata.json` | — |
| Delete | `indeva-by-vtex/sales-update-with-pdv/erp/metadata.json` | — |
| Delete | `indeva-by-vtex/sales-update-with-pdv/erp/` | — |
| Delete | `indeva-by-vtex/sales-update-with-pdv/metadata.json` | — |
| Delete | `indeva-by-vtex/sales-update-with-pdv/` (empty) | — |

**ES equivalent:** `indeva-by-vtex/actualización-de-ventas-con-pdv/erp/` → `indeva-by-vtex/actualización-de-ventas-pdv-erp/`
**PT equivalent:** `indeva-by-vtex/atualização-de-vendas-com-pdv/erp/` → `indeva-by-vtex/atualizacao-de-vendas-pdv-erp/`

---

## Summary of All 4-Level Violations

| # | Violation path | Articles affected | Fix strategy | New path |
|---|---|---|---|---|
| 1 | `b2b/b2b-suite/organization-details/` | 8 | Promote to b2b-suite | `b2b/b2b-suite/*.md` |
| 2 | `storefront/cms-for-store-framework/[4 sub-folders]` | 27 | Elevate sub-folders to L2 | `storefront/cms-pages/`, `storefront/site-editor/`, `storefront/storefront-settings/` |
| 3 | `vtex-cx-platform/agent-builder/automation-flow/` | 19 | Promote to agent-builder | `vtex-cx-platform/agent-builder/*.md` |
| 4 | `indeva-by-vtex/sales-update-with-pdv/erp/` | 8 | Collapse two intermediate levels | `indeva-by-vtex/sales-update-pdv-erp/` |
| | **Total articles affected** | **62** | | |

> All 4 violations must be fixed in all 3 language trees (EN, ES, PT) simultaneously, using the localized folder name equivalents documented above.
