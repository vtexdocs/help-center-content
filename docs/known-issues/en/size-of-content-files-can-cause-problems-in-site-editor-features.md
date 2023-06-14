---
title: 'Size of content files can cause problems in Site Editor features'
id: UevN0hPbmi9f9RQtsI1bi
status: PUBLISHED
createdAt: 2022-12-13T14:37:50.733Z
updatedAt: 2022-12-13T14:37:51.370Z
publishedAt: 2022-12-13T14:37:51.370Z
firstPublishedAt: 2022-12-13T14:37:51.370Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: size-of-content-files-can-cause-problems-in-site-editor-features
kiStatus: Backlog
internalReference: 715480
---

## Summary


Every content or structure update in a store theme is registered in files called `content.json` and `template.json`, those files work like "maps" that keep the references of all the content that the storefront shows, therefore, it is also based on what is displayed as a preview in the Site Editor.

When one of those files is too big, it can cause performance problems and affect Site Editor features like Content Version Scheduling.


##

## Simulation


There's no specific way to simulate problems based on content files size, but here's an example of a scheduled content fail:

When a content file is too big the GET request, which is responsible to update the info on the screen, can present a timeout error, so, the content used could be based on the render-server cache, which will contain outdated information regarding the changes made in the new content version, causing the schedule fails.


##

## Workaround


- It's essential to understand why those files are big and try to decrease them;
- Check if the store has multiple bindings and if they are well set and indispensable because they can directly affect the size of the content files;
- Check if the `vtex.render-server` and the `vtex.store` app are in their final version;
- In a scheduled fail scenario, the user can manually activate the failed version.

