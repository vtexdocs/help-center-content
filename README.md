# help-center-content

Welcome to the [VTEX Help Center](https://help.vtex.com/) content repository!

## Table of Contents

- [help-center-content](#help-center-content)
  - [Table of Contents](#table-of-contents)
  - [In this repository](#in-this-repository)
  - [Managing Help Center documentation](#managing-help-center-documentation)
    - [Filling in front matter information](#filling-in-front-matter-information)
      - [Announcements fields](#announcements-fields)
      - [Track fields](#track-fields)
      - [Troubleshooting fields](#troubleshooting-fields)
    - [Applying filters to an announcement](#applying-filters-to-an-announcement)
      - [Announcements Type filters](#announcements-type-filters)
      - [Announcements Area filters](#announcements-area-filters)
        - [Example of announcements filters in the front matter](#example-of-announcements-filters-in-the-front-matter)
    - [Applying categorization and filters to a troubleshooting article](#applying-categorization-and-filters-to-a-troubleshooting-article)
      - [Troubleshooting primary categories](#troubleshooting-primary-categories)
      - [Troubleshooting Type filters](#troubleshooting-type-filters)
      - [Troubleshooting Area filters](#troubleshooting-area-filters)
        - [Example of troubleshooting categorization in the front matter](#example-of-troubleshooting-categorization-in-the-front-matter)
      - [Troubleshooting filter governance](#troubleshooting-filter-governance)
      - [Troubleshooting taxonomy governance for scale](#troubleshooting-taxonomy-governance-for-scale)
    - [Publishing a new article](#publishing-a-new-article)
      - [Adding images](#adding-images)
        - [Maximum image size](#maximum-image-size)
      - [Adding a download file to the article](#adding-a-download-file-to-the-article)
    - [Updating a published article](#updating-a-published-article)
    - [Localization workflow](#localization-workflow)
      - [Placeholder for EN and ES files](#placeholder-for-en-and-es-files)
      - [Triggering the localization task](#triggering-the-localization-task)
      - [Linking the EDU task](#linking-the-edu-task)
      - [When the automation runs](#when-the-automation-runs)
        - [Exclusions](#exclusions)
      - [Mixed content](#mixed-content)
      - [Re-running after PR updates](#re-running-after-pr-updates)
      - [Production lock (auto-update cutoff)](#production-lock-auto-update-cutoff)
      - [Quick checklist](#quick-checklist)
    - [Creating a redirect](#creating-a-redirect)
    - [Settings for specific content](#settings-for-specific-content)
      - [Track articles: Title information](#track-articles-title-information)
  - [GitHub Actions](#github-actions)
    - [Navigation Generation](#navigation-generation)
    - [Broken Page Finder](#broken-page-finder)
    - [Changelog Generation](#changelog-generation)
    - [Index Documents](#index-documents)

## In this repository

You will find the following folders in this repository:

- **.github/workflows**: Workflows needed to manage the content of this repository.
- **docs-utils**: Scripts used to perform adjustments to documentation imported from Contentful.
- **docs**: Documentation files. Contains subfolders corresponding to each locale (PT, EN, and ES), and within each of them, the following categories:
  - **announcements**: Announcement markdown files.
  - **faq**: FAQ markdown files.
  - **tracks**: Tracks markdown files.
  - **troubleshooting**: Troubleshooting markdown files.
  - **tutorials**: Tutorials markdown files.
- **readme-images**: Images used in the README.md file.

## Managing Help Center documentation

In this document we will address the following topics related to the Help Center Portal:

- [Filling in front matter information](#filling-in-front-matter-information)
- [Applying filters to an announcement](#applying-filters-to-an-announcement)
- [Applying categorization and filters to a troubleshooting article](#applying-categorization-and-filters-to-a-troubleshooting-article)
- [Publishing new articles](#publishing-a-new-article)
- [Updating published articles](#updating-a-published-article)
- [Creating redirects](#creating-a-redirect)
- [Settings for specific content](#settings-for-specific-content)

### Filling in front matter information

The front matter is the table with metadata about the article you are creating. It contains the following fields:

- **title:** Article title with single quotes. E.g. 'Adding SKU specifications or fields'
- **createdAt:** Creation date (UTC) and time in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **updatedAt:** Update date (UTC) in this format `{YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}.{mmm}Z`.
- **contentType:** Content type (e.g., `tutorial`, `updates`, `trackArticle`, `frequentlyAskedQuestion`, `knownIssue`).
- **productTeam:** Name of the module to which the article is related.
- **slugEN:** Article reference slug in the English version. This field must always be filled in with the same value (slug in EN), even in PT and ES version files. This is required for proper locale switching on Help Center.
- **locale:** Article language (`pt`, `en`, or `es`).
- **hidden**: (Optional) Identifies whether the article should remain hidden and be accessed only through its link (`true` or `false`).

In addition to the standard fields for all articles, check the specific fields for each type of article below:

#### Announcements fields

- **announcementSynopsisEN:** Announcement Synopsis information with single quotes. The name of this parameter varies according to the language of the article, for the Portuguese version it must be used `announcementSynopsisPT`, and for the Spanish version use `announcementSynopsisES`.
- **author:** Technical writer ID in Contentful.
- **tags**: filters tags of the announcement type (e.g. `New feature`, `Breaking change`) and area(s) (e.g. `Orders`, `Promotions`, `Storefront`, etc). For more information see the section [Applying filters to an announcement](#applying-filters-to-an-announcement).

#### Track fields

- **trackSlugEN**: Track slug identification.
- **order**: Defines the article's position in the track sidebar navigation. Must be a positive integer. Articles are displayed in ascending order.

#### Troubleshooting fields

- **domainFilters**: Troubleshooting Area filters. These values identify the product or area in which the user is most likely to associate the issue (for example, `Checkout`, `Logistics`, `Master Data`).
- **symptomFilters**: Troubleshooting Type filters. These values identify the problem type the user is experiencing (for example, `Loading issue`, `Misconfiguration`, `Flow interruption`).

### Applying filters to an announcement

The [Announcements](https://help.vtex.com/announcements) page allows users to filter announcements by **Type** and **Area**. This is made by adding the applicable filtering values to the announcement [front matter](#filling-in-front-matter-information), in the `tags` field.

#### Announcements Type filters

These filters are displayed in the UI in the announcements card, above the title. Each announcement must have one Type filter.

The existing values and their context are:

| Type EN             | Tipo PT                         | Tipo ES                         | Description                                        |
| :------------------ | :------------------------------ | :------------------------------ | :------------------------------------------------- |
| `New feature`     | `Nova funcionalidade`         | `Nueva funcionalidad`         | New functionality, modules, or capabilities.       |
| `Improvement`     | `Melhoria`                    | `Mejora`                      | Enhancements, optimizations, UX improvements.      |
| `Breaking change` | `Breaking change`             | `Cambio disruptivo`           | Platform behavior modifications requiring action.  |
| `Deprecation`     | `Descontinuação`            | `Descontinuación`            | Discontinued features and products.                |
| `Security update` | `Atualização de segurança` | `Actualización de seguridad` | Security updates, compliance, vulnerability fixes. |

#### Announcements Area filters

These filters don't appear in the UI. Each announcement should have at least one Area filter, you can add as many as you need.

The existing values and their context are:

| Area EN                      | Área PT                     | Área ES                     | Description                                                   |
| :--------------------------- | :--------------------------- | :--------------------------- | :------------------------------------------------------------ |
| **Admin**              | **Admin**              | **Admin**              | VTEX Admin.                                                   |
| **Checkout**           | **Checkout**           | **Checkout**           | Validation, reCAPTCHA, cart functionality.                    |
| **Catalog**            | **Catálogo**          | **Catálogo**          | Products, categories, SKUs, specifications.                   |
| **Payments**           | **Pagamentos**         | **Pagos**              | Gateway, Payment Provider Protocol, payment methods, Billing.          |
| **Orders**             | **Pedidos**            | **Pedidos**            | Order Management System (OMS), order processing.              |
| **Promotions**         | **Promoções**        | **Promociones**        | Discounts, coupons, campaigns, pricing rules.                 |
| **Prices**             | **Preços**            | **Precios**            | Price tables, fixed prices, computed prices, price rules.     |
| **Marketplace**        | **Marketplace**        | **Marketplace**        | Marketplace Network, integration, seller, channels.           |
| **Intelligent Search** | **Intelligent Search** | **Intelligent Search** | Search functionality, merchandising rules.                    |
| **Storefront**         | **Storefront**         | **Storefront**         | Store Framework, FastStore, Site Editor, CMS Portal (Legacy). |
| **Master Data**        | **Master Data**        | **Master Data**        | Data entities, triggers, customer data.                       |
| **Audit**              | **Audit**              | **Audit**              | Audit.                                                        |
| **Identity**           | **Identity**           | **Identity**           | License Manager, permissions, authentication.                 |
| **Logistics**          | **Logística**         | **Logística**         | Shipping, inventory, fulfillment.                             |
| **B2B**                | **B2B**                | **B2B**                | B2B Suit, buyer organizations, cost centers.                  |
| **Integrations**       | **Integrações**      | **Integraciones**      | Third-party connectors.                                       |
| **VTEX Shield**        | **VTEX Shield**        | **VTEX Shield**        | VTEX Shield news.                                             |
| **VTEX Ads**           | **VTEX Ads**           | **VTEX Ads**           | VTEX Ads news.                                                |
| **B2B Buyer Portal**   | **B2B Buyer Portal**   | **B2B Buyer Portal**   | B2B Buyer Portal news.                                        |
| **VTEX Sales App**     | **VTEX Sales App**     | **VTEX Sales App**     | VTEX Sales App news.                                          |

> ℹ️ If you wish to add or remove a filter value, you have to manage them in the [helpcenter](https://github.com/vtexdocs/helpcenter) repository.

##### Example of announcements filters in the front matter

See below an example of filters applied to an announcement front matter for each locale:

English:

```md
---
title: 'General availability of new catalog spreadsheet import and export experience'
(...)
locale: en
announcementSynopsisEN: 'The redesigned interface offers export using filters and status tracking.'
tags:
  - New feature
  - Catalog
---
```

Portuguese:

```md
---
title: 'Nova experiência de importação e exportação de planilhas do Catálogo em disponibilidade global'
(...)
locale: pt
announcementSynopsisPT: 'Interface redesenhada que oferece exportação por filtros e acompanhamento de status.'
tags:
  - Nova funcionalidade
  - Catálogo
---
```

Spanish:

```md
---
title: 'Nueva experiencia de importación y exportación de plantillas del módulo Catálogo con disponibilidad general'
(...)
locale: es
announcementSynopsisES: 'La interfaz rediseñada ofrece exportación por filtros y seguimiento del status.'
tags:
  - Nueva funcionalidad
  - Catálogo
---
```

### Applying categorization and filters to a troubleshooting article

The [Troubleshooting](https://help.vtex.com/troubleshooting) page allows users to navigate content through:

- **Primary category**: the article's folder within `docs/{locale}/troubleshooting`
- **Type**: values added to `symptomFilters`
- **Area**: values added to `domainFilters`

#### Troubleshooting primary categories

Troubleshooting primary categories are determined by the folder where the article is saved. Use the category that best matches the broad operational context of the issue.

The current troubleshooting categories are:

| Category EN                         | Categoria PT                          | Categoria ES                         | Description                                                                                                             |
| :---------------------------------- | :------------------------------------ | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Integrations and channels** | **Integrações e canais**      | **Integraciones y canales**    | Integration and synchronization issues with marketplaces, affiliates, and external connectors.                          |
| **Merchandising and search**  | **Merchandising e busca**       | **Merchandising y búsqueda**  | Offer and discoverability issues involving catalog setup, indexing, search, pricing, and promotions.                    |
| **Orders and fulfillment**    | **Pedidos e fulfillment**       | **Pedidos y fulfillment**      | Post-order operations such as status progression, invoicing, cancellation, shipment handling, and reservation behavior. |
| **Data access and security**  | **Acesso a dados e segurança** | **Acceso a datos y seguridad** | Admin access, Master Data, notifications, and technical security/configuration topics.                                  |
| **Checkout and financial**    | **Checkout e financeiro**       | **Checkout y financiero**      | Checkout, order placement, payment authorization, pricing-total consistency, and other transactional failures.          |
| **B2B**                       | **B2B**                         | **B2B**                        | B2B organization structure, permissions, and company-specific flows.                                                    |

#### Troubleshooting Type filters

These filters appear in the Troubleshooting UI under **Type**. Each troubleshooting article should usually have **1 to 2** values in `symptomFilters`.

The existing values and their context are:

| Type EN                      | Tipo PT                            | Tipo ES                             | Description                                                                      |
| :--------------------------- | :--------------------------------- | :---------------------------------- | :------------------------------------------------------------------------------- |
| **Sync issue**         | **Erro de sincronização**  | **Error de sincronización**  | Failed integrations or synchronization between systems, channels, or connectors. |
| **Loading issue**      | **Erro de carregamento**     | **Error de carga**            | Pages, products, content, or metrics not appearing or not loading correctly.     |
| **Flow interruption**  | **Interrupção no fluxo**   | **Interrupción en el flujo** | Statuses, steps, or operational flows that do not progress as expected.          |
| **Validation error**   | **Erro de validação**      | **Error de validación**      | Schema, header, spreadsheet, API, or input validation failures.                  |
| **Access restriction** | **Restrição de acesso**    | **Restricción de acceso**    | Permission, authorization, profile, or restricted-access problems.               |
| **Misconfiguration**   | **Configuração incorreta** | **Configuración incorrecta** | Incorrect setup, missing settings, or misconfigured policies and rules.          |
| **Notification issue** | **Erro de notificação**    | **Error de notificación**    | Email delivery, alerts, reports, or notification-related failures.               |

#### Troubleshooting Area filters

These filters appear in the Troubleshooting UI under **Area**. Each troubleshooting article should usually have **1 to 3** values in `domainFilters`.

The existing values and their context are:

| Area EN                      | Área PT                     | Área ES                     | Description                                                         |
| :--------------------------- | :--------------------------- | :--------------------------- | :------------------------------------------------------------------ |
| **Admin**              | **Admin**              | **Admin**              | VTEX Admin.                                                         |
| **Checkout**           | **Checkout**           | **Checkout**           | Checkout completion issues, validation, session, and cart behavior. |
| **Catalog**            | **Catálogo**          | **Catálogo**          | Product and SKU setup, attributes, and indexing.                    |
| **Payments**           | **Pagamentos**         | **Pagos**              | Payment flow, capture, authorization, and gateway behavior.         |
| **Orders**             | **Pedidos**            | **Pedidos**            | Order creation, updates, and statuses.                              |
| **Promotions**         | **Promoções**        | **Promociones**        | Promotion rules and context-based applicability.                    |
| **Prices**             | **Preços**            | **Precios**            | Price tables, fixed/computed pricing, and price divergence.         |
| **Marketplace**        | **Marketplace**        | **Marketplace**        | Marketplace Network and channel operations.                         |
| **Intelligent Search** | **Intelligent Search** | **Intelligent Search** | Search behavior, relevance, and product exposure.                   |
| **Storefront**         | **Storefront**         | **Storefront**         | Storefront rendering and behavior issues.                           |
| **Master Data**        | **Master Data**        | **Master Data**        | Entities, schemas, triggers, and data behavior.                     |
| **Audit**              | **Audit**              | **Audit**              | Action and event traceability.                                      |
| **Identity**           | **Identity**           | **Identity**           | Users, roles, authentication, and permissions.                      |
| **Logistics**          | **Logística**         | **Logística**         | Delivery, SLA, carriers, and logistics stock.                       |
| **B2B**                | **B2B**                | **B2B**                | Organizations, cost centers, and B2B rules.                         |
| **Integrations**       | **Integrações**      | **Integraciones**      | Third-party connector and integration issues.                       |
| **VTEX Shield**        | **VTEX Shield**        | **VTEX Shield**        | Application security and data protection topics.                    |
| **VTEX Ads**           | **VTEX Ads**           | **VTEX Ads**           | Ads-related catalog and operational topics.                         |
| **VTEX Sales App**     | **VTEX Sales App**     | **VTEX Sales App**     | In-store sales app flow issues.                                     |

> ℹ️ If you wish to add or remove a troubleshooting filter value, you have to manage it in the [helpcenter](https://github.com/vtexdocs/helpcenter) repository.

##### Example of troubleshooting categorization in the front matter

See below an example of categorization and filters applied to a troubleshooting article front matter for each locale:

English:

```md
---
title: "My carrier isn't showing at checkout"
(...)
locale: en
domainFilters:
  - Checkout
  - Logistics
symptomFilters:
  - Loading issue
  - Misconfiguration
---
```

Portuguese:

```md
---
title: 'Minha transportadora não aparece no Checkout'
(...)
locale: pt
domainFilters:
  - Checkout
  - Logística
symptomFilters:
  - Erro de carregamento
  - Configuração incorreta
---
```

Spanish:

```md
---
title: 'Mi transportadora no se muestra en el checkout'
(...)
locale: es
domainFilters:
  - Checkout
  - Logística
symptomFilters:
  - Error de carga
  - Configuración incorrecta
---
```

#### Troubleshooting filter governance

When classifying troubleshooting content, apply the following rules:

1. Use **domainFilters** as the primary discovery axis.
2. Use **symptomFilters** as the secondary refinement axis.
3. Treat the **primary category** (folder) as the broad navigation layer, not as the main retrieval mechanism.
4. For hybrid articles, prioritize:
   - the product or area the user is most likely to associate with the issue as the main domain filter
   - the dominant symptom as the main troubleshooting refinement
   - additional domain filters only when they materially improve discovery

#### Troubleshooting taxonomy governance for scale

To keep the troubleshooting taxonomy consistent as the section grows, follow these guidelines:

- Apply **1 primary category** per article.
- Apply **1 to 2 symptomFilters** per article in most cases.
- Apply **1 to 3 domainFilters** per article in most cases.
- Only promote niche filter values when recurring article volume justifies them.
- Only propose new primary categories when the current structure creates repeated ambiguity for users and editors.
- Prioritize the user's mental model over internal team ownership or root-cause attribution when deciding how to classify an article.

### Publishing a new article

Follow the steps below to create a new article in the Help Center:

1. Open a branch in the [help-center-content](https://github.com/vtexdocs/help-center-content) repository.
2. Add a new file in the [desired folder](#in-this-repository), and write the content of the article according to the [Template --&gt; TBD](https://github.com/vtexdocs/dev-portal-content/blob/main/templates/guide_template.md).

   > ⚠️ Make sure the file name (slug) is unique and an exact copy of the article slug.
   >
3. [Add images](#adding-images) to the article, if necessary.
4. Fill in the [front matter](#filling-in-front-matter-information) of the article.
5. Create placeholder files for the EN and ES versions in their respective locale folders. Each placeholder should contain only the front matter (no body content) — this signals to the Localization team which files need to be translated and where to upload the translations.
6. Submit your PR for review on GitHub.
7. Send the PR link in the `#education-prs` Slack channel for review by another technical writer.
8. After review, add the appropriate `localization needed` label to trigger the localization workflow. See [Localization workflow](#localization-workflow) for details.
9. Once the translations are complete, check the contents of the files updated by the localization team in the EN and ES folders. If the article in the PT version contains images, repeat this [procedure](#adding-images) to insert them into the EN and ES versions.
10. Approve the PR and apply the merge to publish the article.

> ℹ️ The [help-center-content](https://github.com/vtexdocs/help-center-content) repository is synched to the `helpcenter` repository, so new articles are automatically updated in the Help Center portal's navigation sidebar.

#### Adding images

In some situations, it may be necessary to insert images, GIFs, or videos into an article to help the user understand complex procedures.

To insert an image to an article follow the steps below:

1. Access the folder where the article is located within the repository.
2. Save the image (respecting the [maximum image size](#maximum-image-size)) inside this folder, naming it according to the markdown file name and slug. For instance, if the article file name and slug is "how-to-create-a-catalog-category", the image should be saved as `how-to-create-a-catalog-category_1.png`.

   > ℹ️ If the article has more than one image, they must be named in numerical sequence. For instance, `how-to-create-a-catalog-category_1.png`, `how-to-create-a-catalog-category_2.png`.
   >
3. Open the article and add `![{{Image name}}](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/{{locale}}/{{path}}/{{image-slug-name}})`, replacing:

   - `{{Image name}}` by an image identification name of your choice
   - `{{path}}` by the path where you saved the image
   - `{{image-slug-name}}` by the image slug name

Example: `![Instalação B2B Suite - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs\pt\tutorials\b2b\b2b-suite\visao-geral\b2b-suite-visao-geral_1.gif)`.

> ⚠️ After localization completes the translations, you must repeat this same process in the respective article folders for the EN and ES versions, modifying the information according to the specific language.

##### Maximum image size

To ensure efficient page load times and adhere to [GitHub space storage best practices](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github), we set a maximum file size limit of **50 MB**.

If you need to use an illustration that exceeds this value, you can compress it using tools such as [ILoveImg](https://www.iloveimg.com/pt) or [FreeConvert](https://www.freeconvert.com/pt), to reduce the final file size. Additionally, you can also adjust the article content to allow the illustration to be split into smaller file sizes.

> ⚠️ Whenever you use an image compressor, check the visual quality of the file after compression.

#### Adding a download file to the article

If you wish to provide a downloadable file directly within your article (such a table or PDF file), you must attach it, creating a reference as follows:

1. Open a branch in the [help-portal-content](https://github.com/vtexdocs/help-center-content) repository.
2. Copy the file you want to make available for download to the same directory as the article where it will be inserted. For instance, to attach a spreadsheet within an article located at `docs/pt/tutorials/Payments/Payment Settings/list-of-payment-providers-by-country.md`, you need to save it in the directory `docs/pt/tutorials/Payments/Payment Settings.`
3. Go to the [branches page](https://github.com/vtexdocs/help-center-content/branches), and under **Your branches** section, click on the name of the branch you created.

![Branches_page](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-1.png)

4. Locate the folder where you saved the file and click on it.

![File_folder](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-2.png)

5. Right-click on the **Raw** option and select **Copy link address (Copiar endereço do link)**.

![Raw_link_information](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-3.png)

> ℹ️ Address link example: `https://github.com/vtexdocs/help-center-content/raw/main/docs/pt/tutorials/Payments/Payment%20Settings/Payment%20Provider%20x%20Countries%20-%20August%202024.xlsx`

6. Access the article where you want to add the file and insert the link obtained in the previous step in the desired location.

![Add_link_in_article](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-4.png)

7. Return to the main branch by clicking **Main** in the **Branches** tab.

![Main branch](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-download-illustration-5.png)

8. Submit your PR for review.

### Updating a published article

To update the content of an article that is already published on the Help Center Portal, follow the steps below:

1. Open a branch in the [help-portal-content](https://github.com/vtexdocs/help-center-content) repository.
2. Access and update the **PT version** of the desired file in the repository.
3. In the corresponding EN and ES files, update the `updatedAt` field to match the date set in the PT version. This acts as a placeholder that signals to the Localization team which files need to be translated. See [an example of this pattern](https://github.com/vtexdocs/help-center-content/pull/865/changes).
4. Submit your PR for review.
5. Add the appropriate `localization needed` label to trigger the localization workflow. See [Localization workflow](#localization-workflow) for details.
6. After the translation is complete, check the content translated by the localization team in the EN and ES version files.
7. Approve the PR and apply the merge to publish the article.

### Localization workflow

#### Placeholder for EN and ES files

For both new articles and updates to existing ones, you must add a placeholder for the EN and ES files before opening a PR. This tells the Localization team exactly which files need to be translated and where to upload the translations.

- **New articles**: create the EN and ES files with only the front matter (no body content).
- **Updates to existing articles**: update the `updatedAt` field in the EN and ES files to match the date set in the PT version. See [an example of this pattern](https://github.com/vtexdocs/help-center-content/pull/865/changes).

#### Triggering the localization task

A GitHub Actions workflow automatically opens a Localization JIRA task when a PR is labeled `localization needed`.
When a PR is ready for localization, add **one** of these labels:

| Label | Priority | Estimated delivery |
| :--- | :--- | :--- |
| `localization needed (high)` | High | **Friday** of the following week (~1 week) |
| `localization needed (medium)` | Medium | High deadline **+ 1 week** |
| `localization needed (low)` | Low | High deadline **+ 2 weeks** |

After the workflow runs, a comment appears on the PR confirming ticket creation. If you added the EDU task in the PR, the comment will also confirm it has been linked:

> **Localization task**
> Localization ticket **LOC-xxxxx** created. It blocks **EDU-xxxxx**.
> Estimated delivery date: **YYYY-MM-DD**

If you have an issue with the deadline, talk to the Localization team.

#### Linking the EDU task

To link the source EDU task, include **`EDU-xxxxx`** in any of:

- PR **title**
- PR **description**
- PR **branch name**

The automation creates a **blocks** link (LOC blocks EDU) and mentions the EDU key in the PR comment.

> ℹ️ If no `EDU` key is found, the LOC task is still created, but nothing is linked.

#### When the automation runs

These three conditions must be true:

- PR targets **`main`**
- PR adds **new lines** to markdown files in:
  - `docs/pt/**` (Portuguese source)
  - `docs/en/**` (English source)
  - `localization/**` (treated as Portuguese source)
- You add one of the **`localization needed (...)`** labels above

##### Exclusions

The automation will not run when **any** of these are true:

- Changes are only outside the scope above (e.g. `docs/es/`, `docs/pt/metadata.json`)
- Changes are **deletions only** (no new lines added)
- Label was added **before** content changed — remove and re-add the label after new commits

#### Mixed content

If a PR changes both `docs/pt` and `docs/en`, only **Portuguese** content is sent to localization; `docs/en` changes are ignored.

#### Re-running after PR updates

If you push more content after applying the label:

1. Remove the `localization needed (...)` label
2. Add it again

The **same LOC task** is updated (not duplicated), as long as production lock does not apply (below).

#### Production lock (auto-update cutoff)

If a LOC task **already exists** for the PR and the **Prepare file to be localized** subtask is **due today or overdue** (it is usually due the Friday before the parent task deadline), the automation **stops updating** JIRA and Crowdin.

- A comment is posted on the LOC task in JIRA telling the assignee the PR changed but the task was not auto-updated
- You must coordinate changes manually with the localization team

Before that date, re-labeling the PR will refresh the LOC task, including its description, subtasks, due dates, and translatable files.

#### Quick checklist

1. PR to `main` with new content in `docs/pt/`, `docs/en/`, or `localization/`, preferably in only one of them.
2. Include `EDU-xxxxx` in title, description, or branch (if applicable)
3. Add `localization needed (high|medium|low)` label based on urgency
4. Check if the expected PR comment is added to the PR a few minutes later. It should confirm ticket creation, EDU task (if any) link, and delivery date
5. If you change content later, remove and re-add the label (unless production lock applies).

### Creating a redirect

If an article published on Help Center must be archived and another article will be used in its place, it is necessary to create a redirect to allow users to access the new content.

To create a redirect, follow the [instructions](#https://github.com/vtexdocs/helpcenter/blob/main/README.md#redirects) available in the [README](https://github.com/vtexdocs/helpcenter/blob/main/README.md) file of the `help-center` repository.

### Settings for specific content

See in this section some specific settings that must be applied according to the type of article.

#### Track articles: Title information

Track articles' titles must contain the reference numbers in the navigation sidebar, but not in the title of the article page.

![image](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/readme-images/readme-track-illustration-6.png)

## GitHub Actions

This repository uses GitHub Actions for automating various tasks related to content management, navigation generation, and documentation maintenance. Below are details about each workflow.

### Navigation Generation

**Source**: `.github/workflows/nav-generation.yml`

**Summary**: This workflow automatically generates the navigation structure for the VTEX Help Center by processing all markdown files in the repository. It creates a comprehensive `navigation.json` file that contains the hierarchical structure of all documentation, organized by categories, subcategories, and individual articles across all supported languages (PT, EN, ES).

**Trigger Conditions**:

- Pull request events: `opened`, `synchronize`, `reopened`
- Automatically runs when PRs are created or updated

**Process Overview**:

1. **Content Scanning**: Processes 10,000+ markdown files across all locales and content types
2. **CLI Download**: Uses multiple fallback strategies to obtain the navigation generator CLI:
   - Primary: `npx github:vtexdocs/vtexhelp-nav-cli#main` (GitHub tarball)
   - Fallback 1: `npx git+https://github.com/vtexdocs/vtexhelp-nav-cli.git#main`
   - Fallback 2: Direct git clone and local build
   - Fallback 3: Curl download + unzip (network resilience)
3. **Navigation Generation**: Creates structured JSON with:
   - 600+ categories and subcategories
   - 3,400+ individual documents
   - Full multilingual support (PT/EN/ES)
   - Cross-language document linking
4. **File Commit**: Automatically commits the generated `public/navigation.json` back to the PR branch
5. **Artifacts**: Uploads the navigation file as a downloadable artifact
6. **Reporting**: Provides detailed job summaries with statistics and file information

**Output**:

- **File**: `public/navigation.json` (~58,000+ lines, ~2.6MB)
- **Structure**: Hierarchical JSON with navbar sections, categories, subcategories, and articles
- **Metadata**: Includes titles, slugs, publication status, and cross-references for all languages
- **Coverage**: 100% language coverage for all supported locales

**Performance**:

- **Generation Time**: ~5-6 seconds for full repository scan
- **Total Workflow Time**: ~2-3 minutes including setup and commit
- **Network Resilience**: Multiple fallback mechanisms handle GitHub runner limitations

**Key Features**:

- **Robust Error Handling**: Multiple download strategies ensure reliable CLI access
- **Git Integration**: Handles detached HEAD states and automatically commits results
- **Validation**: Performs content validation and reports duplicate slugs or issues
- **Incremental Updates**: Only commits when navigation content actually changes
- **Artifact Preservation**: Generated files are available for download even if commit fails

**Dependencies**:

- actions/checkout@v4
  - Function: Checks out the PR branch for processing
- actions/setup-node@v4
  - Function: Sets up Node.js environment (version 20)
- actions/upload-artifact@v4
  - Function: Uploads generated navigation.json as downloadable artifact
- vtexdocs/vtexhelp-nav-cli (external)
  - Function: CLI tool that processes markdown files and generates navigation structure

**Usage Notes**:

- Automatically triggered on all PR activity - no manual intervention required
- Generated navigation.json is committed directly to the PR branch
- Workflow includes comprehensive logging for debugging and monitoring
- Safe for concurrent execution with other workflows due to branch-specific concurrency controls

### Broken Page Finder

**Source**: `.github/workflows/broken-page-finder.yml`

**Summary**: This workflow leverages the `vtexdocs/devportal-docsearch-action` to scrape files from the Help Center. Instead of indexing them, it logs errors to identify broken or problematic pages. It uses a specific branch version of the docsearch action that has been stripped down to only log errors.

**Trigger Conditions**:

- Manual trigger (workflow_dispatch)
- Configurable inputs:
  - directory (default: 'docs')
  - batch_size (default: 500)
  - sleep_time (default: 0)
  - files (optional comma-separated list of specific files to process)

**Process Overview**:

1. **File Discovery**: Finds all markdown files in the specified directory and subdirectories
2. **Batch Processing**: Splits files into manageable batches to avoid rate limits
3. **Error Detection**: Uses the specialized docsearch action to identify broken pages
4. **Error Logging**: Records errors to a spreadsheet for analysis

**Key Features**:

- **Batch Processing**: Handles large numbers of files by processing them in configurable batches
- **Flexible Input**: Can process all files in a directory or specific files via comma-separated list
- **Rate Limit Management**: Configurable sleep time between batches
- **Error Focus**: Specifically designed to identify and log problematic pages

**Dependencies**:

- actions/checkout@v4
  - Function: Checks out the repository code
- vtexdocs/devportal-docsearch-action@broken-page-finder
  - Function: Specialized version that logs errors instead of indexing content

### Changelog Generation

**Source**: `.github/workflows/changelog.yml`

**Summary**: This workflow automatically generates changelogs and manages version tags for the repository. It uses standard-version to create semantic versioning and generates changelog entries based on commit messages.

**Trigger Conditions**:

- Push to main branch
- Pull request closed on main branch (only when merged)

**Process Overview**:

1. **Version Detection**: Finds the next available version tag and bumps if needed
2. **Changelog Generation**: Uses standard-version to generate changelog entries
3. **Tag Creation**: Creates and pushes version tags
4. **Cleanup**: Handles tag cleanup on failure

**Key Features**:

- **Automatic Versioning**: Automatically determines and increments version numbers
- **Semantic Versioning**: Follows semantic versioning principles
- **Changelog Generation**: Creates comprehensive changelog entries
- **Failure Recovery**: Cleans up tags if the process fails
- **Git Integration**: Automatically commits and pushes changes

**Dependencies**:

- actions/checkout@v4
  - Function: Checks out the repository with full history
- actions/setup-node@v4
  - Function: Sets up Node.js environment (version 20)
- standard-version (npm package)
  - Function: Generates changelogs and manages versioning

### Index Documents

**Source**: `.github/workflows/index-documents.yml`

**Summary**: This workflow automatically indexes changed documentation files into the VTEX Docs search system. When markdown files under `docs/` are added or modified, the workflow sends them to the indexing API, which chunks the content, generates embeddings, and stores them for hybrid search (BM25 + vector similarity).

**Trigger Conditions**:

- Push to `main` or `master` branch, when files matching `docs/**/*.md` are changed
- Manual trigger (`workflow_dispatch`) with optional `full_reindex` boolean input to reindex all documents

**Process Overview**:

1. **Changed File Detection**: Uses `git diff` to identify added, copied, modified, or renamed markdown files under `docs/`
2. **Full Reindex Mode**: When triggered manually with `full_reindex: true`, discovers all markdown files via `find docs -name '*.md'`
3. **Batched Indexing**: Sends files to the indexing API in batches of 10, with a 300-second timeout per batch
4. **Idempotency**: The API uses content-hash-based skip optimization — unchanged files are not re-indexed
5. **Error Reporting**: Logs per-batch results and emits GitHub Actions warnings for failures

**Key Features**:

- **Content-Hash Skip**: Files whose content hasn't changed since last indexing are automatically skipped
- **Partial Failure Resilience**: If one batch fails, the workflow continues with remaining batches
- **Batch Processing**: Files are sent in groups of 10 to avoid timeout issues with large changesets
- **Full Reindex**: Manual dispatch with `full_reindex: true` re-processes all documents in the repository

**Required Secrets**:

- `INDEXING_URL`: Base URL of the VTEX Docs API (e.g., `https://vtexdocs-edge.vtex.com`)
- `INTERNAL_ACCESS_KEY`: API consumer key with `index-documents` permission

**Dependencies**:

- actions/checkout@v4
  - Function: Checks out the repository with `fetch-depth: 2` for diff comparison
- jq (pre-installed on GitHub runners)
  - Function: JSON processing for file lists and API response parsing
- curl (pre-installed on GitHub runners)
  - Function: HTTP requests to the indexing API
