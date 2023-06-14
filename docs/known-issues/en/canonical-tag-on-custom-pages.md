---
title: 'Canonical tag on custom pages'
id: 70PufEhKCcgmOQo6CkAEAc
status: PUBLISHED
createdAt: 2017-12-24T16:14:54.951Z
updatedAt: 2022-12-22T20:45:32.625Z
publishedAt: 2022-12-22T20:45:32.625Z
firstPublishedAt: 2017-12-24T16:30:01.966Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: canonical-tag-on-custom-pages
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

The canonical tag on custom pages, from the second level onwards, directs only to the first level.

Example:

The folder `/institutional`, directly in the site's root, will have the canonical tag pointed correctly to `www.website.com/institucional`.

The folder `/institucional/our-stores`, being a subfolder, will have the canonical tag pointed incorrectly to `www.website.com/institutional`, while it should point to `www.website.com/institucional/our-stores`.

## Simulation

- Enter the __CMS__;
- In Layout, create any two folders, one contained within the other;
- Associate HTML templates so you'll have content;
- Access the page on the store's front end;
- Check the canonical tag that was printed in the second folder of the hierarchy.

## Workaround

Because it is a customized content, the best way to get around this problem is to disable the canonical tag using the following [control](/en/tutorial/list-of-controls-for-templates): `<vtex.cmc:canonicalPage disable="true"/>`. Then manually create the canonical tag for each page.

Suggestion: Use [placeholders](/en/tutorial/how-to-customize-a-page-using-placeholders) in the template to have a settings field in each layout/folder that uses these templates.

