---
title: 'White label seller'
id: 5orlGHyDHGAYciQ64oEgKa
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.034Z
updatedAt: 2023-07-14T15:15:56.338Z
publishedAt: 2023-07-14T15:15:56.338Z
firstPublishedAt: 2019-01-24T22:03:52.175Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: white-label-seller
legacySlug: what-are-franchise-account-and-seller-white-label
locale: en
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

The architecture of a VTEX store allows it to act both as a [marketplace](/en/docs/tutorials/marketplace-strategies-at-vtex) and as a seller. The marketplace is the environment where a product is sold, also called window display. The seller is the inventory owner and the one responsible for delivering orders.

When a customer places an order in a marketplace, a seller is responsible for fulfilling the order, ensuring it will be delivered There are two types of sellers on the VTEX platform:

- **Regular seller:** The seller is visible for customers in the marketplace and can be chosen by the customer during their shopping experience.
- **White label seller:** The seller remains unknown to the customer during their shopping experience and is [automatically selected](/en/docs/tutorials/white-label-sellers-selection) by the VTEX platform to deliver the order. 

A marketplace that uses white label sellers to fulfill orders benefits from more flexibility in selecting the seller, choosing the best option both for the customer and the marketplace. To that end, the VTEX platform is provided with a white label sellers selection algorithm, prepared to offer optimal price and delivery conditions for a placed order. Learn more in [Selecting white label sellers](/en/docs/tutorials/white-label-sellers-selection).

## Relationship between white label sellers and franchise accounts 

A [franchise account](/en/docs/tutorials/what-is-a-franchise-account) is a type of account associated with a standard account, primarily defined by the fact that it inherits the [catalog](/en/docs/tracks/catalog-architecture) from the standard account. In other words, categories, products and specifications are imported to the franchise account website, which does not have to create its own products.

A franchise account is of strategic use for sales growth operations, such as the integration of physical stores, considering the opportunity of inheriting a catalog already registered on the VTEX platform. Learn more in [What is a franchise account](/en/docs/tutorials/what-is-a-franchise-account).

> ℹ️ All franchise accounts are by default white label sellers of the main account. Even though white label seller and franchise account are related concepts, they are not equivalent because white label seller is a type of seller, and franchise account is a type of account.

A standard account may act as a white label seller of another VTEX store, case in which the marketplace does not inform the customer who is the seller in charge of the order fulfillment. A franchise account can also act as a normal seller of a marketplace other than the main account. Summing up:

- **Account:** Can be a franchise account or a standard account.
- **Seller:** Can be regular or white label.

> ℹ️ To add a white label seller, this model must be provided for in your contract with VTEX. In case you need to make changes to your contract, please contact your VTEX sales representative and submit a request to add a franchise account through our Support. Every franchise account is created as a white label seller. It is not possible to change the seller type after its creation.

### Learn more

- [Selecting white label sellers](/en/docs/tutorials/white-label-sellers-selection)
- [Configuring a VTEX marketplace](/en/docs/tutorials/configuring-vtex-marketplace)
- [Adding a seller](/en/docs/tutorials/adding-a-seller)
- [Choosing between standard account, franchise account or Seller Portal](/en/docs/tutorials/choosing-between-standard-account-franchise-account-or-seller-portal)
