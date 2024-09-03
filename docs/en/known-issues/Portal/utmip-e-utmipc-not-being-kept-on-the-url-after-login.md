---
title: 'utmi_p e utmi_pc not being kept on the URL after login'
id: 7e8EO8EWEJCLbXs16ZofQk
status: PUBLISHED
createdAt: 2022-03-16T16:17:55.535Z
updatedAt: 2024-02-16T20:29:25.217Z
publishedAt: 2024-02-16T20:29:25.217Z
firstPublishedAt: 2022-03-16T16:17:55.979Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: utmip-e-utmipc-not-being-kept-on-the-url-after-login
locale: en
kiStatus: No Fix
internalReference: 372787
---

## Summary



## Simulation


- Access a restricted template with a URL on the request, for example: `.myvtex.com/Sistema/401?utm_source=utmSource&utm_medium=utmMedium&utm_campaign=utmCampaign&utmi_cp=utmiCampaign&utmi_pc=utmiPart&utmi_p=utmipage`
- Check that after the login, the UTM's utmi_p and utmi_pc are not being kept



## Workaround


Use another type of UTMs, for example, utm_source and umt_campaign.

