---
title: "Update seller using Admin is setting some fields back to the default value after changing it via API"
id: 2gtqnZmCW59OKoqRpU3UaQ
status: PUBLISHED
createdAt: 2022-06-30T12:21:23.852Z
updatedAt: 2024-02-16T20:28:26.435Z
publishedAt: 2024-02-16T20:28:26.435Z
firstPublishedAt: 2022-06-30T12:21:24.538Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: update-seller-using-admin-is-setting-some-fields-back-to-the-default-value-after-changing-it-via-api
locale: en
kiStatus: No Fix
internalReference: 608120
---

## Summary



After using the APIs from seller register to modify fields like trustPolicy, SecutityPrivacyPolicy, ArchiveId and MerchantName and go back to the seller management admin and save the seller through there, the information of those fields will be set back to the default value.



## Simulation



1. Use the API "Update Seller By Seller Id" and modify the field "trustPolicy" to "AllowEmailSharing" instead of "Default";
2. Wait for the cache time and check using the API "Get Seller Data By Id" to make sure the field was updated.
3. Go to the seller managament UI on the Admin and save the seller through there (no need to change anything);
4. Wait for the cache time and check using the API "Get Seller Data By Id" that the field is back to the default value, in this case "Default";



## Workaround


No workaround for the moment.

