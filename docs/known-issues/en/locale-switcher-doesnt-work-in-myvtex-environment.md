---
title: Locale Switcher doesn't work in myvtex environment
id: 1ZB56egPjPbTaUUnws5juK
status: PUBLISHED
createdAt: 2023-03-27T12:26:31.974Z
updatedAt: 2023-03-27T14:55:12.486Z
publishedAt: 2023-03-27T14:55:12.486Z
firstPublishedAt: 2023-03-27T12:26:32.649Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: locale-switcher-doesnt-work-in-myvtex-environment
kiStatus: Backlog
internalReference: 778306
---

## Summary


Locale Switcher doesn't work in myvtex environment without explicitly setting the workspace/environment, but there is no impact on the website. This behavior impacts the navigation only in myvtex and content management for different languages.


##

## Simulation



- Access the Site Editor or the Front-End in the myvtex environment without putting the workspace (e.g: accountName.myvtex.com/admin/cms/site-editor);
- Select a website with multi-language;
- Change between the languages;
- You will see there will be no change in the language.


##

## Workaround


User "master" workspace to change content for the different languages and validate it while navigating (e.g: master--accountName.myvtex.com/admin/cms/site-editor)



