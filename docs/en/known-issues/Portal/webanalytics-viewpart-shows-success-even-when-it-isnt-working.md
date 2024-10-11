---
title: "Webanalytics Viewpart Shows success even when it isn't working"
id: 73oMf2Wxkgw1feWUvntX6s
status: PUBLISHED
createdAt: 2023-03-09T18:20:47.358Z
updatedAt: 2024-07-01T18:48:55.053Z
publishedAt: 2024-07-01T18:48:55.053Z
firstPublishedAt: 2023-03-09T18:20:48.023Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: webanalytics-viewpart-shows-success-even-when-it-isnt-working
locale: en
kiStatus: No Fix
internalReference: 768059
---

## Summary


Currently, the webanalytics viewpart does not render any error messages, even when it fails and does not deliver metadata content to the user.

This issue might also hide possible issues related to an incorrect number of PageView events on the legacy VTEX pages navigation


##

## Simulation


This issue is quite hard to replicate, since there's no error feedback.

The viewsource has a series of tags that can load metatada if the user has implemented its GTM view-source:https://account.myvtex.com/

However, even when the tags (such as the gtm content) do not load the needed data to send to google (for instance, if there's no GTM configured), the webanalytcs tag is generated and there is no error feedback to inform the user what is wrong.


##

## Workaround


n/a





