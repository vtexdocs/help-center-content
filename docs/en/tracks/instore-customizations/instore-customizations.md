---
title: 'How to customize inStore'
id: 4mwdBrFsmE2EPE0FzgX28b
status: ARCHIVED
createdAt: 2020-06-28T16:45:29.940Z
updatedAt: 2021-11-25T13:59:37.209Z
publishedAt: 
firstPublishedAt: 2020-06-28T17:11:13.723Z
contentType: trackArticle
productTeam: Shopping
slugEN: instore-customizations
locale: en
trackId: 1z9kBm12oBPyVNDo1ivVc2
trackSlugEN: instore-customizations
---

>❗ Most inStore customizations involve changing the JavaScript file `checkout-instore-custom.js`. This operation should only be performed by people with programming experience. Incorrect changes to this file can cause critical errors.

## Accessing the inStore customization file

You can access the customization file directly from the URL of the page or via navigation in the VTEX administrative panel.

### Accessing directly

Currently, most inStore customizations are made by changing the `checkout-instore-custom.js` file, which is located in the Checkout settings, within the Admin of your VTEX store.

To access this file directly, you can enter the following URL in your browser: `https://{{AccountName}}.myvtex.com/admin/portal#/sites/default/code/files/checkout-instore-custom.js`

In this case, `{{AccountName}}` should be replaced with your VTEX store account name.

### Accessing from the Admin menu

Alternatively, you can browse to the configuration file from the VTEX Admin homepage, via `https://{{AccountName}}.myvtex.com/admin`.

In the main menu, click on __Checkout__ and then click on the store's gear symbol, as shown in the image below.

![20. inStore Customizations - 1 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Then click on the __Code__ tab and finally on the `checkout-instore-custom.js` file, which is in the file list on the right-hand side of the screen.

![20. inStore Customizations - 2 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

## Changing the inStore customization file

`checkout-instore-custom.js` is a JavaScript file that accepts a number of functions, variables and objects responsible for changing standard behaviors of the inStore application.

To make any changes, simply add or modify the lines of code directly in the file edit box, in the VTEX Admin, and—once you're done— click on the __Save__ button, as shown in the image below.

![20. inStore Customizations - 3 - EN.png?h=250](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

>⚠️ Always follow the customization instructions in this documentation and only make changes as indicated here.

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
