# Contentful Exporter

Exports structured content from Contentful into localized Markdown files for use in documentation websites, static site generators, or internal knowledge bases.

## 📂 Output Structure

The exporter creates files in the following structure:

```
docs/
  en/
    tracks/
      accounts-and-permissions/
        getting-started.md
    tutorials/
      Pricing/
        Discounts/
          how-to-apply-discount.md
  pt/
    ...
```

Each Markdown file includes rich frontmatter metadata for easy processing and rendering.

---

## 🚀 Features

- 🔎 Filters entries by content type (e.g. `trackArticle`, `tutorial`)
- 🌍 Supports multiple locales (`en`, `pt`, `es`)
- 📁 Organizes tutorials by category/subcategory
- 🧾 Adds structured frontmatter (ID, status, slugs, team, etc.)
- ✅ Uses Contentful Management API
- 🖼️ Downloads and renames images, updating Markdown links automatically

---

## 📦 Setup

1. Clone this repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the root directory:

```env
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ENVIRONMENT=master
```

---

## 🛠️ Project Structure

```
help-center-content/
├── contentful-fetcher/               # All script logic (fetchers, writers, utils)
│   ├── fetch/              # Contentful client and entry loaders
│   ├── writers/            # Markdown generators and file writers
│   ├── utils/              # Helpers (e.g. slug normalization)
│   └── index.js            # Main script entry point
├── package.json
├── docs/                   # Generated Markdown files (output)
├── .env                    # Contentful credentials```

---

## 🧪 Run the Exporter

To export content:

```bash
node contentful-fetcher/index.js --contentType=tutorial
```

You can also pass multiple content types:

```bash
node contentful-fetcher/index.js --contentType=trackArticle,tutorial
```

### 🖼️ Images

All images referenced in Markdown are automatically downloaded, renamed for uniqueness, and their links are updated to point to the new location. 

You can skip image downloading and link updates by passing the `--skipImages` flag:

```bash
node contentful-fetcher/index.js --contentType=trackArticle,tutorial --skipImages
```

This will export content without downloading images or modifying image links.

---

## 🧾 Supported Content Types

| Type                      | Output Folder                                 | Nested?             |
| ------------------------- | --------------------------------------------- | ------------------- |
| `trackArticle`            | `tracks/{track}`                              | ✅ grouped by track |
| `tutorial`                | `tutorials/{category}/{subcategory}`          | ✅ grouped          |
| `updates`                 | `announcements/{year}`                        | ✅ grouped by year  |
| `frequentlyAskedQuestion` | `docs/{locale}/faq/{productTeam}`             | ✅ grouped by team  |
| `troubleshooting`         | `docs/{locale}/troubleshooting/{subcategory}` | ✅ grouped          |

---

## ✅ Frontmatter Example

```yaml
---
title: "How to configure pricing"
id: 123abcXYZ
status: PUBLISHED
createdAt: 2023-01-01T12:00:00Z
updatedAt: 2023-02-01T12:00:00Z
publishedAt: 2023-02-01T12:00:00Z
firstPublishedAt: 2023-01-01T12:00:00Z
contentType: tutorial
productTeam: Pricing & Promotions
author: 456def
slugEN: how-to-configure-pricing
legacySlug: pricing-v1
locale: en
subcategoryId: abc987
---
```

---

## 🧼 Cleanup

To remove previously generated files, just delete the `docs/` folder:

```bash
rm -rf docs/
```
