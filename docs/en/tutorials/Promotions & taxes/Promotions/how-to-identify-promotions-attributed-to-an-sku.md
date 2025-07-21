---
title: 'How to identify promotions attributed to an SKU?'
id: frequentlyAskedQuestions_4813
status: PUBLISHED
createdAt: 2019-01-24T20:46:01.523Z
updatedAt: 2022-08-31T22:33:34.388Z
publishedAt: 2022-08-31T22:33:34.388Z
firstPublishedAt: 2019-01-24T22:06:21.209Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: how-to-identify-promotions-attributed-to-an-sku
locale: en
legacySlug: how-to-identify-promotions-attributed-to-an-sku
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

<div class="alert alert-warning" role="alert">
<p>The steps described in this article use Google Chrome. Since this tool is not part of VTEX, it may be updated without notice.</p>
</div>

We have written this article in response to a frequent query from users of the VTEX platform: what is the reason for a promotion to be applied to an SKU when apparently it should not be?

To find out what promotions are being attributed to an SKU, we have to analyze its `priceTags`.

1. Go to the product shopping cart.
2. In Google Chrome, go to **Developer Tools** (`Ctrl+Shift+I`).![ferramentas-do-desenvolvedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_1.png)
3. Select the tab **Network** and press `F5` to record the reload.![network-f5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_2.png)
4. After loading, press `Ctrl+F` to search in the Developer Tools window, and look for “orderform”. ![order-form](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_3.png)
5. Click on `orderform` and go to `items` After clicking on `items`, click on the numbers (`0`, `1`, `2` etc.) to see the details of the product you want. In our example, since there is only one item, it is represented by the number `0` in the array.![items-0](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_4.png)
6. After clicking on the  number, scroll down to `priceTags` Click on `priceTags` and then on the numbers (`0`, `1`, `2` etc.) to see the details of the promotion you want. In our example, since there is only one promotion, it is represented by the number `0` in the array. After this, look for the `identifier` of the promotion.![priceTags-0-identifier](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_5.png)
7. Open another tab, and go to URL `https://{accountName}.vtexcommercestable.com.br/admin/rnb/#/benefit/{identifier}`. This is the promotion that is being applied to the product in the cart. Check the configurations of the promotion and see whether the conditions apply to the SKU in question.![promo-debug-help](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Promotions%20&%20taxes/Promotions/how-to-identify-promotions-attributed-to-an-sku_6.png)

## Learn more

- [How promotions work](/en/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N)
- [Identifying promotions applied to the cart](/en/tutorial/how-to-identify-promotions-applied-to-the-cart--frequentlyAskedQuestions_345)

