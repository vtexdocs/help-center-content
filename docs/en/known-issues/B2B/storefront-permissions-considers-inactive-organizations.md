---
title: 'Storefront Permissions considers inactive organizations'
id: 2GANYaXFMQpLGADajl4CbS
status: PUBLISHED
createdAt: 2023-10-27T22:08:14.267Z
updatedAt: 2024-09-05T17:42:55.782Z
publishedAt: 2024-09-05T17:42:55.782Z
firstPublishedAt: 2023-10-27T22:08:14.965Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: storefront-permissions-considers-inactive-organizations
locale: en
kiStatus: Fixed
internalReference: 927174
---

## Summary


When a user has more than one organization assigned to them, and the first registered is inactive, it's not recognized as any organization is assigned after login.


##

## Simulation



- Create two organizations and assign the same user/email;
- Inactive the 1st organization created;
- Log in to the website.


##

## Workaround


Remove the user/email from the inactive organization.




