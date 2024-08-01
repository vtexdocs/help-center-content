---
title: 'Available addresses list on Checkout UI missing data for newly created address'
id: 1BEDcoXLVAs5L039eKXsXv
status: PUBLISHED
createdAt: 2024-07-05T21:08:40.994Z
updatedAt: 2024-07-11T15:56:34.357Z
publishedAt: 2024-07-11T15:56:34.357Z
firstPublishedAt: 2024-07-05T21:08:42.246Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: available-addresses-list-on-checkout-ui-missing-data-for-newly-created-address
locale: en
kiStatus: Backlog
internalReference: 1061630
---

## Summary


When a user adds a new address during the Checkout's shipping step, advances to the payment step, and then returns to the shipping step's list of available addresses, this newly created address may be missing from the list or display incomplete information on the UI.


##

## Simulation



Case 1, for authenticated users:

1. Log in to the store with a user who has at least one address saved and create a cart.
2. Proceed to Checkout and reach the Payment screen.
3. Click "Change shipping options".
4. Click "Deliver to another address".
5. Fill in a new address and click "Go to payment".
6. Click "Change shipping options" again.
7. Click "Deliver to another address" again.
8. Click "Back to address list".
9. The newly created address may be missing from the list.

Case 2,  for identified but unauthenticated users:

1. Create a cart and identify yourself with the email of a user who has at least one address saved.
2. Proceed to Checkout and reach the Payment screen.
3. Click "Change shipping options".
4. Click "Deliver to another address".
5. Fill in a new address and click "Go to payment".
6. Click "Change shipping options" again.
7. Click "Deliver to another address" again.
8. Click "Back to address list".
9. For some countries, the newly added address may show incomplete information, such as showing only the postal code and the country's name.


##

## Workaround


Refresh the page.





