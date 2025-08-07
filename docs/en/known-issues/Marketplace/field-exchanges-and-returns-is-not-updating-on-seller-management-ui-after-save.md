---
title: 'Field "Exchanges and returns" is not updating on seller management UI after save'
id: 1z8LrsbGk5B2ejZ1PV9vaB
status: PUBLISHED
createdAt: 2022-11-01T17:47:30.359Z
updatedAt: 2023-10-30T19:28:26.143Z
publishedAt: 2023-10-30T19:28:26.143Z
firstPublishedAt: 2022-11-01T17:47:31.132Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: field-exchanges-and-returns-is-not-updating-on-seller-management-ui-after-save
locale: en
kiStatus: Fixed
internalReference: 689886
---

## Summary


After saving the field "Exchanges and returns" on the UI the information is first updated but if we try to leave the management area or refresh the page the information is lost.

The info showed on the UI is the same as the field "Shipping Policy".

However, this seems to be happening only on the UI, via API the information is correct.


##

## Simulation



1. Enter a seller on the seller management area;
2. Change the info on the field "Exchanges and returns" and save;
3. Enter again the same seller and check that the information is not correct.


##

## Workaround


There is no need to workaround, the information is correct on the system's backend.





