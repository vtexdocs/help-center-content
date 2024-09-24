---
title: 'Incorrect/Lacking indexings for accounts where the accountname is different from the one registered on the fulfillmentEndpoint'
id: 3TPRChOVHGpOYVeVo4zGOK
status: PUBLISHED
createdAt: 2024-06-14T16:45:39.257Z
updatedAt: 2024-07-09T16:49:07.942Z
publishedAt: 2024-07-09T16:49:07.942Z
firstPublishedAt: 2024-06-14T16:45:40.852Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: incorrectlacking-indexings-for-accounts-where-the-accountname-is-different-from-the-one-registered-on-the-fulfillmentendpoint
locale: en
kiStatus: Backlog
internalReference: 1050023
---

## Summary


Currently, a franchise account can have its fulFillmentEndpoint register differing from its "official" accountname, which is a common practice for specific seller<>marketplace architectures that need multiple prices and/or stock for distinct sales channels using the franchise feature with multiple sellers for the same franchise.

Although this feature works in terms of displaying the needed content for shoppers, when sales-relevant data, such is price/stock is updated for the main seller of a given franchise, the other associated accounts are not correctly indexed alongside it, generating inconsistent availability and pricing displays among selling channels for a store.


##

## Simulation



-  For a store that has multiple sellers and 1+ franchise accounts, configure 2+ sellers pointing, in the fulfillmentendpoint, towards the same franchise account in its seller settings.
- Attempt to update price/stock data for any item of the franchise account.
- Check the updated data on the other associated sellers that use the franchise account in their FFM endpoints, it will be outdated.


##

## Workaround


Use the salesChannelMapping feature instead to implement this architecture instead





