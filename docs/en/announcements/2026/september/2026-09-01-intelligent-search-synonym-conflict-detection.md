---
title: 'Intelligent Search: Synonym conflict detection'
createdAt: 2026-09-01T12:00:00.000Z
updatedAt: 2026-09-01T12:00:00.000Z
publishedAt: 2026-09-01T12:00:00.000Z
contentType: updates
productTeam: Intelligent Search
slugEN: 2026-09-01-intelligent-search-synonym-conflict-detection
locale: en
announcementSynopsisEN: 'Intelligent Search now indicates when a term is already covered by another synonym, helping you avoid duplicates and relevance conflicts.'
tags:
  - New feature
  - Intelligent Search
---

VTEX launched a conflict detection layer in the Intelligent Search [synonym](https://help.vtex.com/en/docs/tutorials/synonyms) creation and editing flow, indicating when a term is already covered by an existing rule.

![conflicting-synonyms-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2026/september/2026-09-01-intelligent-search-synonym-conflict-detection_1.png)

## What has changed?

- When creating or editing a synonym, Intelligent Search validates the terms entered against all synonyms already registered in the store.
- If a term is already covered by another rule, a notification highlights the overlap and directs you to the **Conflicting synonyms** page, where you can review, edit, or delete each conflicting synonym individually.
- When you click `Save`, a confirmation window identifies the conflict and asks you to confirm the registration or edit before proceeding.

## Why did we make this change?

In stores with extensive synonym databases, it was common to recreate synonyms that already existed without realizing it, duplicating entries in the list and making synonym management more difficult over time.

## What needs to be done?

No action is required. Synonym conflict detection is available for all stores using Intelligent Search. To learn more, see [Creating synonyms](https://help.vtex.com/en/docs/tutorials/creating-synonyms#conflicting-synonym-detection).
