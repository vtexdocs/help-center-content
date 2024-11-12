---
title: 'Error when searching for pickup points and listing stores in the store locator'
id: Ycy0EPwfhPfDUx1abDMb2
status: PUBLISHED
createdAt: 2024-10-17T00:03:29.004Z
updatedAt: 2024-10-17T00:03:29.895Z
publishedAt: 2024-10-17T00:03:29.895Z
firstPublishedAt: 2024-10-17T00:03:29.895Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-when-searching-for-pickup-points-and-listing-stores-in-the-store-locator
locale: en
kiStatus: Backlog
internalReference: 1118712
---

## Summary


When searching for a pickup point in Logistics, the following error may occur:
 ![](https://vtexhelp.zendesk.com/attachments/token/tGzdaXqZCHcgtcGaPagLU0yZu/?name=image.png)

    An error occurred while loading the pickup points. Please reload the page.


Also in this same scenario, there is an impact on the webstore, which uses the Store Locator app to list its stores, then the list of stores will not be shown:
 ![](https://vtexhelp.zendesk.com/attachments/token/Dv85rVttxoEMwVXMsMmTxWoI1/?name=image.png)


##

## Simulation


**On admin**

1. Access the list of pickup points in logistics: https://accountname.myvtex.com/admin/pickup-points;
2. Enter a search term for the pickup point, like "West";
3. Intermittently, the above error can occur, so the error message will be shown.

**On webstore that uses Store Locator app**

1. Access the webstore;
2. Go to the page to see all the stores;
3. Intermittently, the stores will not load.


##

## Workaround


As it occurs intermittently, you can try again in a few moments.




