---
title: 'VTEX Orders Management FAQ'
id: 4vddUgU784wyGYQ64cw6I8
status: DRAFT
createdAt: 2018-07-20T17:27:48.286Z
updatedAt: 2022-01-21T19:44:39.976Z
publishedAt: 
firstPublishedAt: 2018-07-20T19:26:49.496Z
contentType: tutorial
productTeam: Post-purchase
author: D0eIlynYFqaWQOMM6mmY6
slugEN: vtex-orders-management-faq
locale: en
legacySlug: vtex-oms-faq
subcategoryId: 3vhg10rO4MSmy06KeIYMIa
---

__1. Credit - The consumer buys in the physical store (in another POS) and has available credit. Is it possible to integrate this credit so that it can be used in all channels integrated with the Orders Managment, mainly in e-commerce?__

__Answer:__ Yes, it's possible to integrate it so that the customer can use the credit in any sales channel that they want (e-commerce, physical store or telesales, for example).

__2. In the case of a sale made through pick-up point, the customer bought online and will get the product in the store along with the invoice. Will the order made in the e-commerce generate a DANFE?__

__Answer:__ It depends on what the store wants. For example, some stores print the tax coupon at the store's POS, others implement a solution without using the store's POS (by business rule, since in the store the price is different from the site) and then print the DANFE or NF-e as in the process already applied by the warehouse. Remember that for shipping (ship from store) you need an NF-e in order to avoid fiscal problems during transport. That means for pick-up you may use coupons, but not for shipping.

__2.1. The customer will pick up the product in the store and at the same time the DANFE will be issued without going through the store's POS. Is that it?__
  
__Answer:__ Yes, the process was designed so that the order arrives at the store and pick & packing are immediately performed, as well as the issuing of the invoice, allowing the store to wait for the withdrawal by the customer. It will not go through the store's POS at the time of withdrawal for systemic reasons (the POS is Zanthus, which doesn't accept a different price from the store; also, the website has a different pricing policy). However, there is a fiscal implication in this process of printing the invoice prior to withdrawal. It means that the product has been fiscally released and is no longer in your possession. Legally speaking this item can not be inside the store anymore. The store needs a special regime license to do so. Also, early invoice issuance implies tax collection. If the customer cancels the purchase after 24h, the taxes that were collected are not reversed, making it more complex to control these taxes. These are variables that can change from business to business. Remember that pickup should not issue a coupon long before withdrawal. There's a limit of 24 hours for an issued invoice and product still in store (this would be a short sale scenario).

__3. Documentation for Pick-up Store?__

__Answer:__ [Registering Pickup Points](/en/tutorial/registering-pickup-points) or [Setting up Seller White Label as a Pickup Point](/en/tutorial/setting-up-seller-white-label-as-a-pickup-point).

__4. What payment methods are available to use at InStore?__

__Answer:__ Simply access our documentation about [VTEX inStore](/en/tutorial/vtex-instore-overview) and search for compatible payment methods.

__5. Is it possible to register the vendor who made the sale via Endless Aisle so they can receive their commission?__

__Answer:__ Yes, this is possible through the `vendor code` field or if there is an individualized login in InStore.

__6. Is it possible to register/integrate a POS sale related to a Gift List?__

__Answer:__ The insertion of the list ID when the order is made in your POS together with the Omnichannel Fulfillment solution is enough for VTEX to identify in which physical store the item of the list was bought and to proceed with the order. What you will need to define is how the list ID will be allocated in the order, if it's a field that the vendor can type after consulting the e-commerce or if you'll prefer to make an integration in which the POS reads and understands the lists. Anyway, this integration is not something that depends on VTEX, because we have APIs open and you can be free to decide how to proceed.

__7. Is it possible for InStore checkout to use VTEX payment gateway?__

__Answer:__ It is not possible. For physical payments you will need an acquirer.
