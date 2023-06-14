---
title: 'How to customize inStore'
id: 4mwdBrFsmE2EPE0FzgX28b
status: DRAFT
createdAt: 2020-06-28T16:45:29.940Z
updatedAt: 2021-11-25T13:59:37.209Z
publishedAt: 
firstPublishedAt: 2020-06-28T17:11:13.723Z
contentType: trackArticle
productTeam: Shopping
slug: instore-customizations
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: instore-customizations
---

<div class="alert alert-danger">
Most inStore customizations involve changing the JavaScript file <code>checkout-instore-custom.js</code>. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.
</div>

## Accessing the inStore customization file

You can access the customization file directly from the URL of the page or via navigation in the VTEX administrative panel.

### Accessing directly

Currently, most inStore customizations are made by changing the `checkout-instore-custom.js` file, which is located in the Checkout settings, within the Admin of your VTEX store.

To access this file directly, you can enter the following URL in your browser: `https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

In this case, `{{AccountName}}` should be replaced with your VTEX store account name.

### Accessing from the Admin menu

Alternatively, you can browse to the configuration file from the VTEX Admin homepage, via `https://{{AccountName}}.myvtex.com/admin`.

In the main menu, click on __Checkout__ and then click on the store's gear symbol, as shown in the image below.

![20. inStore Customizations - 1 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/6AXuX4eeuPus1uiuyFcXkp/ce21c3df39b94600d4165f0b357321c0/20._inStore_Customizations_-_1_-_EN.png_h_250)

Then click on the __Code__ tab and finally on the `checkout-instore-custom.js` file, which is in the file list on the right-hand side of the screen.

![20. inStore Customizations - 2 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/3TCYyx8ZthAnzwDPOQYdNZ/7a31e38624df1ffa2d0f649f2d9328d2/20._inStore_Customizations_-_2_-_EN.png_h_250)

## Changing the inStore customization file

`checkout-instore-custom.js` is a JavaScript file that accepts a number of functions, variables and objects responsible for changing standard behaviors of the inStore application.

To make any changes, simply add or modify the lines of code directly in the file edit box, in the VTEX Admin, and—once you're done— click on the __Save__ button, as shown in the image below.

![20. inStore Customizations - 3 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/6gxUvg8FcYg2b7zhNpoTj8/0137d152efa66e076f438e849a5bde87/20._inStore_Customizations_-_3_-_EN.png_h_250)

<div class="alert alert-warning">
Always follow the customization instructions in this documentation and only make changes as indicated here.
</div>

## InStore customizations

These are some of the main customizations that can be made in inStore today. Most of them require changes to the `checkout-instore-custom.js` file:

- Configure client identification
- Change inStore language
- Enable remarks field on the order screen
- Enable cart transfer between devices
- Enable product recommendations
- Enable order filter by salesperson
- Force stock availability
- Add extra text to the order printing
