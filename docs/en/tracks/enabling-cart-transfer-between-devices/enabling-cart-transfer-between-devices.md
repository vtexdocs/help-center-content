---
title: 'Enabling cart transfer between devices'
id: 1PqUW2NuQzaVxTJp0lBK0r
status: ARCHIVED
createdAt: 2020-06-28T18:40:36.128Z
updatedAt: 2021-11-25T13:59:54.379Z
publishedAt: 
firstPublishedAt: 2020-06-28T18:46:41.828Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-cart-transfer-between-devices
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: enabling-cart-transfer-between-devices
---

>❗ The feature that lets you enable Cart Transfer, explained in this article, involves changing the JavaScript file `checkout-instore-custom.js`. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

The __Cart Transfer__ functionality of the inStore allows a purchase initiated on one device to be completed on any other device present in the purchase flow, without the need to re-beep the products.

An example of use are stores where the customer can be served by more than one salesperson. In that case, at each interaction with a different salesperson, they can add products to the same cart used by the previous salesperson. This same cart is transferred between one salesperson and another, until the purchase is closed. 

This streamlines the order and facilitates the commissioning of the salespeople involved in the purchase, as it removes the need for labels with a salesperson identification codes.

To activate the __Cart Transfer__ in inStore, you must edit the file `checkout-instore-custom.js`. Inside this file, you need to find the `window.INSTORE_CONFIG` object and add the `transferEnabled` property with the value `true`. Do not remove any of the other properties present on that object. The result should look something like:

```json
window.INSTORE_CONFIG = {
  transferEnabled: true, // Allow cart transfer between devices
}
```

After making this change, open the inStore menu and update the data by clicking on the __Reset app local data__ button. Once this is done, a slider will appear at the bottom of the inStore identification page:

![24. Enable cart transfer between devices - 1 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

When you drag the screen to the right, you will see the screen for __Cart Capture__, as shown in the image below.

![24. Enable cart transfer between devices - 2 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

On this screen, you can capture a cart using one of three methods:
- Cart code
- QR Code
- Salesperson

## Sharing a cart

For the salesperson to share a cart, they can generate a numeric code or a QR Code. To do this, while on the cart screen, just click on the __Transfer__ button. See an example in the image below.

![24. Enable cart transfer between devices - 3 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)
