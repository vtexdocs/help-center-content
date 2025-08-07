---
title: 'Promotions for specific scenarios'
id: jOu9b69mKbrTDfSJYAawy
status: PUBLISHED
createdAt: 2020-01-22T13:55:51.326Z
updatedAt: 2023-10-23T17:08:04.859Z
publishedAt: 2023-10-23T17:08:04.859Z
firstPublishedAt: 2020-01-22T15:01:20.187Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: promotions-for-specific-scenarios
locale: en
trackId: 6asfF1vFYiZgTQtOzwJchR
trackSlugEN: promotions
---

As explained in the previous topic, a Regular Promotion is the most generic type of promotion at VTEX.

However, occasionally your store will need to create promotions for more specific scenarios.

In order to meet these scenarios, we offer the following types of promotions:

- Buy Together - Bundle
- More For Less
- Progressive Discount
- Buy One Get One

<div class="alert alert-info">
The configuration screens for any of the promotions mentioned above follow the same main sections as those explained in the Regular Promotion article. The options in these sections repeat themselves throughout the promotions, with the exception of some specific configurations regarding which conditions to apply the promotion to. Therefore, this article will focus on these specific configurations.
</div>

### Buy Together - Bundle

The Buy Together promotion is used to grant a discount for two or more products when placed at the same time in the cart.

The promotion configuration screen offers two SKU lists, which can be added manually or using a spreadsheet.

You can define a discount value for each of these lists. If, for example, list 1 has a 10% discount and list 2 has a 5% discount, when the cart has at least one product from each of these lists, a total of 10% discount will be granted on the value of the items from list 1 and a 5% discount will be granted on the value of the items from list 2.

![Compre junto - EN](https://images.ctfassets.net/alneenqid6w5/5BDhbniC14qWJbV6L8e3Kk/c7fdc229614791d92043d350ca5b1319/Screenshot_2020-06-24_https_lojadobreno_myvtex_com_4_.png)

Two examples of this type of promotion would be "Buy a pair of pants and get 10% off when buying a belt" and "Buy a pair of sneakers + a pair of socks and get a 15% off".

To understand the Buy Together promotion in more detail, read our article on <a href="https://help.vtex.com/en/tutorial/buy-together--tutorials_323">Creating a Buy Together Promotion</a>.

### More for Less

The More for Less promotion is used to grant a discount when the customer adds several units of the same product to the cart. A classic example of this promotion would be "Buy 4 pay for 3".

In the configuration of the More for Less promotion, the store must define which collections or SKUs it will apply to. Then, it must choose the minimum number of items in the cart for it to apply and the number of items that get a discount.

![More less](https://images.ctfassets.net/alneenqid6w5/5LQErZWrN4WyX8ZuIBEMPM/823b88ebf22ca83427e4c9c809d31d2e/More_less.png)

For example:
- For every `3` products, the customer will get `1` `free` product.
- For every `5` products, the customer will get `2` products with a `30%` `discount`.

To understand the More for Less promotion in more detail, read the article <a href="https://help.vtex.com/en/tutorial/creating-more-for-less-promotion--tutorials_325">Creating More for Less promotion</a>.

### Progressive Discount

The Progressive Discount promotion is used when the store wants to offer a percentage discount for a certain quantity of products inserted in the cart.

An example would be: “When buying 5 kg of pet food, get a 5% off. Add 5 kg more and receive 10% off”.

When configuring the Progressive Discount promotion, the store must define which collections or SKUs the promotion applies to. Then, it must choose the minimum quantity and the initial discount applied. For example: for the first `3` items, the customer will receive a `5%` discount.

To add more details to the progressive discount promotion, click on the "+" button. A new line will be added, and then you can add a new discount. For example: for the next 2 products, the customer will receive an additional 5% discount. And so on.

![Desconto progressivo - EN](https://images.ctfassets.net/alneenqid6w5/7qZXWf05OIow5vgX5eYulO/808c44fcd80666575444d3d9d6afd560/Screenshot_2020-06-24_https_lojadobreno_myvtex_com_6_.png)

To understand the Progressive Discount promotion in more detail, read our article on <a href="https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324">How progressive discount works</a>.

### Buy One Get One

The Buy One Get One promotion is used to offer free shipping or a freebie when a certain product is purchased. For example, "buy a television and get free shipping" or "buy a video game and win a game".

The applied discount (free shipping or freebie) must be defined in the promotion's general data. Then the store must choose the collections or SKUs to which it will apply. Finally, you must define the minimum number of items in the cart for the promotion to apply.

![Compre um e leve outro - EN](https://images.ctfassets.net/alneenqid6w5/L17yG5ZAgaGnCuamDWLwk/141c68c306baa0b2bedec04ee3d0c894/Screenshot_2020-06-24_https_lojadobreno_myvtex_com_7_.png)

To understand the Buy One Get One promotion in more detail, read our article on <a href="https://help.vtex.com/en/tutorial/buy-and-win--tutorials_322">How the Buy and Win promotion works</a>.

### Restricting promotional products in cart

This setting determines how many items in the cart will be affected by a promotion. 

<div class="alert alert-warning">
It is important to note that such restrictions are only <strong>valid for regular promotions with percentage discounts</strong>.
</div>

After filling in all the [regular promotion fields](/en/tutorial/regular-promotion--tutorials_327) with the percentage discount, you can __set a maximum number of items affected per cart__ by checking the box for this option, found in the __restrictions__ section.

![Limite itens - EN](https://images.ctfassets.net/alneenqid6w5/1W6ZYterIepCud41XJr4UQ/98c764ea9fd40bd809d3b7bf55c7a313/Limite_itens_-_EN.png)

By default, the __unlimited__ selection is active, applying the promotion to all items in the cart, as illustrated in the diagram below:  

![Caso ilimitado EN](https://images.ctfassets.net/alneenqid6w5/3H9q2Ywy6uPZmQaff7LgO2/5f69462ef9ecf3d57817ad0fba44a337/Caso_ilimitado_EN.png)

To restrict the number of items in the cart, you can choose one from the following options:

- __Items by cart__: this setting restrict a promotion to a predetermined number of items in the cart. Once the limit is reached, the promotion will apply to the rest of the cart. The system uses price as a selection criterion so the items with the lowest prices will be affected first.

![Caso por itens EN](https://images.ctfassets.net/alneenqid6w5/2UUHQC3AZW5g0QzFouGw0u/f414491e89bbd9f08b96914243584be2/Caso_por_itens_EN.png)

- __Items by product__: this setting restricts the promotion to a number of units per product. As in the example below, only two units per product will be eligible for the promotion. The lowest price determines which product items are eligible first.   

![Caso por produto EN](https://images.ctfassets.net/alneenqid6w5/2WN8gDLFhTSjcpx16S3bjb/c4221f0b4901a7df2432d3951deec983/Caso_por_produto_EN.png)

- __Items by SKU__: this setting restricts the promotion to a predetermined number of units for each SKU in the cart. As in the example below, only two units per SKU will be eligible. As seen in the previous case, the lowest price will determine the eligible items. 

![Caso por SKU EN](https://images.ctfassets.net/alneenqid6w5/huuzHYSvrVxk2THs7zx2P/0a513d9fbd247797218c25089372c450/Caso_por_SKU_EN.png)
