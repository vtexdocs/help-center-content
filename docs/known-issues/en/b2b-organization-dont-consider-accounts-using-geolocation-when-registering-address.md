---
title: "B2B Organization don't consider accounts using geolocation when registering address"
id: 2o6k71zZQWGVNDVSTwMZSx
status: PUBLISHED
createdAt: 2023-09-21T16:10:29.092Z
updatedAt: 2023-09-21T16:10:59.672Z
publishedAt: 2023-09-21T16:10:59.672Z
firstPublishedAt: 2023-09-21T16:10:29.723Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: b2b-organization-dont-consider-accounts-using-geolocation-when-registering-address
locale: en
kiStatus: Backlog
internalReference: 904907
---

## Summary


B2B Organization don't have anything to configure an address when accounts use geolocation, causing the items to be unavailable.


##

## Simulation



- Configure an account to use geolocation at checkout;
- Make sure it's an account from countries using predefined options, for example, Argentina, Chile, Colombia, etc;
- Create an organization;
- Try to buy any product, it will always be unavailable.


##

## Workaround


Change the configuration to use only postal code.



