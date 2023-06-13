---
title: The reservation
id: 6axzVCJECyHPGHzYjWDR52
status: CHANGED
createdAt: 2019-11-14T14:40:00.695Z
updatedAt: 2020-11-27T19:40:09.586Z
publishedAt: 2020-02-13T15:02:21.694Z
firstPublishedAt: 2019-11-18T12:20:12.356Z
contentType: trackArticle
productTeam: Post-purchase
slug: the-reservation
trackId: 2xkTisx4SXOWXQel8Jg8sa
trackSlugEN: orders
---

Once an order is finished, it's essential to ensure that the cart items for that order will no longer be available for purchase in your store.

That's where the concept of __reservation__ comes in.

The reservation connects the logistics module to the orders module. It prevents the same item from being purchased more than once.

## How the reservation works

<div class="alert alert-warning">
Products only inserted into the cart <strong>do not</strong> create reservation or priority. A reservation is made only if an order is <strong>completed</strong>.
</div>  

This is the reservation flow at VTEX:

 1. At the moment the customer completes the purchase, the purchased items go to the status `Reservation Authorized` in inventory. Here it's indicated that these items will not be sold more than once, but they are not yet taken out of stock: this reservation will fall if payment is not approved within the reservation's expiration date. Understand how this deadline is defined in the article [How Reservation Works](https://help.vtex.com/en/tutorial/como-a-reserva-funciona).    

 2. After payment is confirmed, the status of the items changes to `Reservation Confirmed`. Now the reservation no longer has an expiration date. But the order can still be canceled and items can still become available again.  
 
 3. Finally, once the order is being prepared for delivery, the items move to the status `Reservation Acknowledged`. This status indicates that the items no longer exist in the physical inventory.

![reservation en](//images.ctfassets.net/alneenqid6w5/7mm0YP3bcfb5fqZf5XhmZX/8798695363d5f4008f0a9c7078ebc386/reservation_en.png)

<div class="alert alert-warning">
VTEX does not automatically remove items from the inventory, even after they have moved to <code>Reservation Recognized</code> status. Purchased items will remain in this status until the ERP or the store remove them from the inventory.
</div>
