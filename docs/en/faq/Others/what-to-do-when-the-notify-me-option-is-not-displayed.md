---
title: "What to do when the 'Notify me' option is not displayed"
id: oNb6JK1LPMOQwYsecKKCs
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.175Z
updatedAt: 2022-04-04T16:36:16.943Z
publishedAt: 2022-04-04T16:36:16.943Z
firstPublishedAt: 2019-01-24T20:30:45.618Z
contentType: frequentlyAskedQuestion
productTeam: Others
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: what-to-do-when-the-notify-me-option-is-not-displayed
locale: en
legacySlug: what-to-do-when-the-avise-me-doesnt-show
---

There is a situation in which, despite having [set up the “Notify me” option](/en/tutorial/set-up-the-avise-me) correctly, it does not appear. This happens **when the category display type is marked as “List of SKUs”.**

![categoria-lista-de-skus EN](//images.ctfassets.net/alneenqid6w5/2C4pwhZgdeQSmmiA4ss8y4/9cfd91a623e3e87734c2b9f417a08be7/lista_de_skus_EN.png)

In this case, in addition to the default settings, the use of the `vtex.cmc:SkuSelection` control is required, even if there is only one SKU per page.

So, when the product category is set up as “List of SKUs,” as shown in the image above, the control `vtex.cmc:SkuSelection` must be included in the page template so that the **Notify me** option is displayed.
