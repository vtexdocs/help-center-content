---
title: How to identify promotions attributed to an SKU?
id: frequentlyAskedQuestions_4813
status: PUBLISHED
createdAt: 2019-01-24T20:46:01.523Z
updatedAt: 2022-08-31T22:33:34.388Z
publishedAt: 2022-08-31T22:33:34.388Z
firstPublishedAt: 2019-01-24T22:06:21.209Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: how-to-identify-promotions-attributed-to-an-sku
legacySlug: how-to-identify-promotions-attributed-to-an-sku
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

<div class="alert alert-warning" role="alert">
<p>The steps described in this article use Google Chrome. Since this tool is not part of VTEX, it may be updated without notice.</p>
</div>

We have written this article in response to a frequent query from users of the VTEX platform: what is the reason for a promotion to be applied to an SKU when apparently it should not be?

To find out what promotions are being attributed to an SKU, we have to analyze its `priceTags`.

1. Go to the product shopping cart.
2. In Google Chrome, go to **Developer Tools** (`Ctrl+Shift+I`).![ferramentas-do-desenvolvedor](//images.contentful.com/alneenqid6w5/3NBGEPjXEkkSqA2WOYs8us/5219ffe6515a120ac0e6d489c78e5820/ferramentas-do-desenvolvedor.png)
3. Select the tab **Network** and press `F5` to record the reload.![network-f5](//images.contentful.com/alneenqid6w5/1TZRay17qkEO8As8w0MKOS/f4d88d06f2a3fd656aa41e3809f35d45/network-f5.png)
4. After loading, press `Ctrl+F` to search in the Developer Tools window, and look for “orderform”. ![order-form](//images.contentful.com/alneenqid6w5/jtqrcUjDAAqoMUGiYM4qE/94803953c1577a7954ba09f163738e0e/order-form.png)
5. Click on `orderform` and go to `items` After clicking on `items`, click on the numbers (`0`, `1`, `2` etc.) to see the details of the product you want. In our example, since there is only one item, it is represented by the number `0` in the array.![items-0](//images.contentful.com/alneenqid6w5/DUtSiCdnrwSmoKqqYW8E6/ec7335a0c9308b17b9d8aa2274057220/items-0.png)
6. After clicking on the  number, scroll down to `priceTags` Click on `priceTags` and then on the numbers (`0`, `1`, `2` etc.) to see the details of the promotion you want. In our example, since there is only one promotion, it is represented by the number `0` in the array. After this, look for the `identifier` of the promotion.![priceTags-0-identifier](//images.contentful.com/alneenqid6w5/5MCOrSJPaMSYQcimY8CKos/ca8960a1a98f680406daf7879d241987/priceTags-0-identifier.png)
7. Open another tab, and go to URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{identifier}`. This is the promotion that is being applied to the product in the cart. Check the configurations of the promotion and see whether the conditions apply to the SKU in question.![promo-debug-help](//images.contentful.com/alneenqid6w5/5G2eJ4AilySK0o8ugaOMq4/b4dba231e9812906a45af5a4432d9783/promo-debug-help.png)

## Learn more

- [How promotions work](https://help.vtex.com/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
- [Identifying promotions applied to the cart](https://help.vtex.com/en/tutorial/how-to-identify-promotions-applied-to-the-cart--frequentlyAskedQuestions_345)

