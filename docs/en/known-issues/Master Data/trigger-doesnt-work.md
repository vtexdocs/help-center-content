---
title: "Trigger doesn't work"
id: 4dX1C5BVnkobCV7VrwRiD4
status: PUBLISHED
createdAt: 2019-04-01T22:06:02.199Z
updatedAt: 2019-12-31T15:18:25.369Z
publishedAt: 2019-12-31T15:18:25.369Z
firstPublishedAt: 2019-04-01T22:09:33.094Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slugEN: trigger-doesnt-work
locale: en
kiStatus: Fixed
internalReference: 
---

## Summary

Some fields have been known to negatively affect the reliable and successfull usage of VTEX's MasterData V1 Trigger.

These are found in `Ações em caso de positivo` and __must be blank__:


- Email for error notification
- E-mail recipient in test mode
- Source email
- Source e-mail display name


We also don't recommend using the `Ações em caso negativo` tab and Status: `Teste`.


## Simulation

This error can be simulated by filling in:


- E-mail for error notification
- E-mail recipient in test mode
- Source e-mail
- Source e-mail display name



## Workaround

As mentioned above, leaving the following fields blank generally solves the problem:


- Email for error notification
- E-mail recipient in test mode
- Source email
- Source e-mail display name


