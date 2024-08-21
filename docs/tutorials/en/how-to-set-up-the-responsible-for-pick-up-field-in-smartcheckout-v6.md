---
title: "How to set up the 'Responsible for pick up' field in SmartCheckout™ V6"
id: 2GsFnXUJxSOYEE6U2c4Syw
status: PUBLISHED
createdAt: 2018-11-09T12:18:14.596Z
updatedAt: 2023-07-27T17:07:55.563Z
publishedAt: 2023-07-27T17:07:55.563Z
firstPublishedAt: 2018-11-26T14:43:00.552Z
contentType: tutorial
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slug: how-to-set-up-the-responsible-for-pick-up-field-in-smartcheckout-v6
locale: en
legacySlug: how-to-set-up-the-responsible-for-pick-up-field-in-smartcheckout-v6
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

>ℹ️ The **Responsible for Pick Up** field is only available for the **SmartCheckout™ V6**, version compatible with the Pick Up Points feature.

The [pick up points](/tutorial/configurar-pontos-de-retirada-pickup-points?locale=en) give your customers one more option: instead of waiting for delivery, they can choose to go to a determined point and collect the item in person. By default, this action is linked to the user who made the purchase. However, you can enable the `Responsible for pick up` field at your store checkout so that your customer can appoint someone else to pick up the product.

>⚠️ If you have the [Checkout UI Settings](https://developers.vtex.com/vtex-developer-docs/docs/vtex-checkout-ui-settings) app installed on your store, the CSS code described in the procedure below must only be entered via the app. Scripts inserted via the VTEX Admin interface (**Code > Files**) are not reproduced in stores that have the application installed.

To set this field up (which is disabled by default), follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Code__.
4. In the __Files__ menu, located on the right side of the page, click on `checkout6-custom.css`.
5. In the _css_ code edit field, add the _css_ information highlighted below.
6. Click `Save`.

```
.vtex-omnishipping-1-x-container.shp-pickup-receiver{
    display: block; !import;
}
```

After following these steps, the `Responsible for pick up` field will be displayed at the Checkout of your store.
