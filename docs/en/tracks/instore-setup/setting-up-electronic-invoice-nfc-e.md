---
title: 'Setting up Electronic Invoice (NFC-e)'
id: 3v0HJIbYdWIsQggoQgUYsg
status: ARCHIVED
createdAt: 2018-06-25T22:29:30.122Z
updatedAt: 2021-08-24T20:47:32.245Z
publishedAt: 
firstPublishedAt: 2018-06-25T22:40:47.613Z
contentType: trackArticle
productTeam: Shopping
slug: setting-up-electronic-invoice-nfc-e
locale: en
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugEN: instore-setup
---

By using inStore you can sell the products from your physical store while receiving payments through card and instantly generating the NFC-e. To perform NFC-e printing we depend on two steps:

- Generating the NFC-e
- Printing the NFC-e and the card receipts

## Generating the NFC-e

To generate the NFC-e you will depend on the service of a VTEX partner that will perform all the necessary configuration for the billing. We recommend e-Millenium and Webbsys.

> __IMPORTANT__: If you are in a state where the use of Fiscal SAT is mandatory, as in the case of São Paulo, you will also need this equipment.


## Printing the NFC-e and the card receipts

__IMPORTANT__: You may need the help of an infrastructure professional to set up your network and a developer to change the inStore settings in JavaScript.

1. Connect the USB non-fiscal thermal printer to the Windows computer where the partner billing program is running.
2. Install and run inStore on this Windows computer (download at http://instore.vtex.com/download).
3. Set a fixed IP on this Windows computer to be used as the print address.
4. Assuming you have set up the inStore using __Easy Setup__, insert the code snippet below in the `checkout-instore-custom.js` file (available in the Portal admin):
 
```
/* Print configurations (uncomment for invoice on each sale) */

const IP_GLOBAL = '127.0.0.1' // Replace for correct internal IP on your network

window.ORDER_PLACED_HOOK_GLOBAL = {
 url: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 cancelUrl: 'http://' + IP_GLOBAL + ':6061/invoice-order',
 invoiceEndpoints: {
   Output: 'http://' + IP_GLOBAL + ':6060/api/vtex/order',
   Input: 'http://' + IP_GLOBAL + ':6060/api/vtex/cancela',
 },
 // printImmediately: false, // If true, it prints the receipt as soon as the "Order placed" screen is opened. If undefined the behavior is to print after a sale and to not print when visiting past orders
}
```

5) Replace the value of `IP_GLOBAL` in the configuration code shown above with the fixed IP of the Windows computer.
