---
title: 'Console error [Report Only] - Refused to apply inline style because it violates the following Content Security'
id: mix75F8F7a7D4iTWyHLyM
status: PUBLISHED
createdAt: 2024-04-16T10:30:41.610Z
updatedAt: 2024-04-16T10:30:42.934Z
publishedAt: 2024-04-16T10:30:42.934Z
firstPublishedAt: 2024-04-16T10:30:42.934Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: console-error-report-only-refused-to-apply-inline-style-because-it-violates-the-following-content-security
locale: en
kiStatus: Backlog
internalReference: 1017370
---

## Summary


We have some logs in the console reporting script blocks due to restrictions via the CSP header.
The inline style calls to the host io2.vtex.com have this blocking log because it is not released in the CSP of the previous host, thus generating error messages in the console.


    [Report Only] Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". Either the 'unsafe-inline' keyword, a hash ('sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4='), or a nonce ('nonce-...') is required to enable inline execution.




##

## Simulation



1. Go to store checkout;
2. Open the console and check the report messages;


##

## Workaround


N/A





