---
title: 'Cart transfer'
id: 4UOGpAFVOUougwiGQMi4Ca
status: ARCHIVED
createdAt: 2018-06-22T17:12:42.573Z
updatedAt: 2020-08-03T19:58:03.049Z
publishedAt: 
firstPublishedAt: 2018-06-22T18:02:29.060Z
contentType: trackArticle
productTeam: Shopping
slug: cart-transfer
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

The __Cart Transfer__ functionality allows a purchase initiated on one device to be finalized on any other device present in the purchase flow, without the need to re-beep the products.

An example of use are shops where the customer can be served by more than one vendor. In this case, in every interaction with a seller, he or she adds the products in the same cart in the inStore that is being transferred until the end of the purchase, streamlining the closing the order and facilitating the commissioning of the sellers involved in that sale because it removes the need for labels with vendor identification codes.

To enable __Cart Transfer__ in the inStore, you need to edit the `checkout-instore-custom.js` file in the Portal admin. Because it is a JavaScript present in several streams of application use, it is important that you have programming knowledge before changing it, to avoid breaking other functionalities.

Within the file you need to find the `window.INSTORE_CONFIG` object and add the` transferEnabled` property with the `true` value to enable __Transfer Cart__.
Do not remove any of the other properties present in this object, but the result should be something like:

```
window.INSTORE_CONFIG = {
  transferEnabled: true, // Allow transfer carts between devices
}
```

When making this change, you should notice that two polyesters appear at the bottom of the inStore ID page:

![01 inStore slider transferencia](//images.ctfassets.net/alneenqid6w5/5h4AVCw4sE4oAIsMEMskU0/a5739c88008a9029755adadc58a332bf/01_inStore_slider_transferencia.png)

When dragging the screen to the side you will see the screen for __ "Capture Cart" __:

![02 inStore capturar carrinho](//images.ctfassets.net/alneenqid6w5/1hfTK0X9dg4CgSKEqYm0gG/637365736b1bb04e0dae621e2a7022b9/02_inStore_capturar_carrinho.png)

In it it is possible to capture a cart by the code of the cart, QR code or even by seller.

In order to generate a QR code or code from a cart you must use the __ "Transfer" option __ in the inStore cart:

![03 inStore transferir](//images.ctfassets.net/alneenqid6w5/5fpW69RgkgAgaig46S6kwu/72442a8c5d24f48861881f2a884c065a/03_inStore_transferir.png)
