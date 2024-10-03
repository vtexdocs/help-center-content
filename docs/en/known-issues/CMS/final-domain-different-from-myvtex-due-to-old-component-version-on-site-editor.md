---
title: 'Final domain different from myvtex due to old component version on Site Editor'
id: 7bf2mMbpcxUd6Q32DYP6vz
status: PUBLISHED
createdAt: 2023-12-05T18:07:50.089Z
updatedAt: 2024-01-26T17:52:03.169Z
publishedAt: 2024-01-26T17:52:03.169Z
firstPublishedAt: 2023-12-05T18:07:50.675Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: final-domain-different-from-myvtex-due-to-old-component-version-on-site-editor
locale: en
kiStatus: Backlog
internalReference: 948071
---

## Summary


Sometimes you can make changes on Site Editor and those changes are reflected on the myvtex environment, but when you try to update the final domain, those changes are not being reflected. This normally happens when the component you're trying to change has more than one version. The front keeps using the inactive version of the component while the myvtex is using the active version. The only way to solve this is by deleting the inactive version of the component.


##

## Simulation



- Try to change something on the site editor on a new version of a component
- Check if your changes are being reflected on the final domain and in the myvtex environment


##

## Workaround


Delete the old version, this will make the final domain use the right version of the component





