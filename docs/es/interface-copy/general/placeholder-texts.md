---
title: 'Placeholder texts'
id: ui0007
status: PUBLISHED
createdAt: 2024-12-06T19:24:22.388Z
updatedAt: 2024-12-06T19:24:22.388Z
publishedAt: 2024-12-06T19:24:22.388Z
firstPublishedAt: 2024-12-06T19:24:22.388Z
contentType: trackArticle
productTeam: Localization
slugEN: placeholder-texts
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: placeholder-texts
---

Placeholder texts use a single sentence to guide the user on how to interact with a form field before any value is entered. This pattern is commonly found in components like Search and Select fields.

## General

Avoid custom placeholder text. The user should intuitively know what information to enter.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li>Search</li><li>Select…</li></ul> | <ul><li>Search by name</li><li>Select an option...</li></ul> |

Don't include redundant words.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| <ul><li><p>Page title: Products</p><p>Field placeholder: Search by category or ID</p></li><li><p>Field label: Category</p><p>Field placeholder: Select…</p></li></ul> | <ul><li><p>Page title: Products</p><p>Field placeholder: Search by product category or product ID</p></li><li><p>Field label: Category</p><p>Field placeholder: Select a category…</p></li></ul> |

Write at most 36 characters.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| Search by name, ID, or ref ID | Search by name, category, description, ID, or ref ID |

## Specific

When writing the placeholder text of a Select field, include an ellipsis at the end.

| Do ✅ | Don't ❌ |
| :---- | :---- |
| Select… | Select |
