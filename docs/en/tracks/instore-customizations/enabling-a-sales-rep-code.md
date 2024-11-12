---
title: 'Enabling a sales rep code'
id: 5kNtS80hbBGg58jMeF8CRv
status: ARCHIVED
createdAt: 2021-02-04T11:42:33.284Z
updatedAt: 2021-11-25T13:59:49.170Z
publishedAt: 
firstPublishedAt: 2021-02-26T12:14:28.917Z
contentType: trackArticle
productTeam: Shopping
slugEN: enabling-a-sales-rep-code
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: instore-customizations
---

Associating a sale to a specific sales rep is a recurring operation in physical stores.

One possible customization offered by inStore is to change the [Observation](https://help.vtex.com/en/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs) field (as explained in the track’s previous step) and turn this component into a field specifically for sales rep codes.

Once this customization is enabled, the `Vendor` field will be displayed at the top of the page, and a new step will be added to the purchase flow. The sales rep must identify the order with their code before proceeding to Shipping.

>❗ **Warning**: In this case, you cannot complete a sale without entering the sales rep code in the `Vendor` field.

## Editing the JavaScript file

To enable the sales rep code, you must edit the JavaScript code `checkout-instore-custom.js` saved on the VTEX Admin dashboard.

>⚠️ It is **expressly recommended** that the person responsible for editing the code has **experience with programming**.  

>ℹ️ The sales rep code can **only** be enabled via JavaScript.

First, customize the file as described in the article [Enabling the remarks field in the order screen](https://help.vtex.com/en/tracks/instore-customizacoes--1z9kBm12oBPyVNDo1ivVc2/8Aj21R8bll0tdrxHWjVOs).

After following these recommendations, access the __Store setup__ module. Then go to __Checkout > Blue button with the <i class="fas fa-cog"></i> icon > Code__.

On the right side of the screen, you will see the `checkout-instore-custom.js` file. 

![codevendorEN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Open the file and add the following piece of code to the `window.INSTORE_CONFIG` object:

```json
window.INSTORE_CONFIG = {
  noteAsVendorCode: {
    type: 'input',
    skipValidation: true,
    mask: '^(HE|TU)[A-Za-z0-9]{5,8}$', // Example
  },
}
```

>❗ Do not delete any other property of the `window.INSTORE_CONFIG` object. Otherwise, this action will possibly affect other features of your store. Also, please note that the code above is only one example of several configuration possibilities.

The properties of the `window.INSTORE_CONFIG` object must be filled in according to how the customization is expected to work for the store.

Click on the __Save__ blue button at the top of the page. 

![codevendor2EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

## Understanding the priorities

The `window.INSTORE_CONFIG` object is composed of three properties:

- `type` – property responsible for defining the ‘Vendors’ field format. The possible values are `text` and `textarea`, for big text blocks, and `input`, a text field for simple keys.

- `skipValidation` – a boolean property that activates the validation performed via Master Data. It accepts `true` and `false` values.

- `mask` – a regular variable expression that applies a validation logic to the `type` property value. In other words, the person responsible for editing the `window.INSTORE_CONFIG` object can create the variable expression they find most appropriate for the sales rep code.

By combining these three properties, you have many configuration possibilities for the sales rep code. 
