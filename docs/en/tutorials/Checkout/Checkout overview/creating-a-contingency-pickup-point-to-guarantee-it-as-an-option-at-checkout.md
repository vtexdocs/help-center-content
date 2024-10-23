---
title: 'Creating a contingency pickup point to guarantee it as an option at checkout'
id: 3mowqWEfjyM2g6WoWgE0Ao
status: PUBLISHED
createdAt: 2018-04-01T16:02:02.437Z
updatedAt: 2023-08-01T21:35:48.449Z
publishedAt: 2023-08-01T21:35:48.449Z
firstPublishedAt: 2019-01-25T17:26:19.150Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
locale: en
legacySlug: creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

In an omnichannel scenario in which your store uses pickup points set up on franchise accounts, it can be useful to create contingency pickup points. This article explains what this configuration is, what it is used for and how to set it up.

If your end customer buys a product on any of your channels (online or physical stores) and wants to pick it up at a specific store, by default this store only appears as a pickup point option during the checkout if the product is available in its stock.

However, you may prefer this store to work as a pickup point __even in a stockout scenario__. For this, your logistics must make sure that the product will reach that store from another stock - for example, from the e-commerce one. In this case, you need to have an e-commerce shipping policy in which the pickup point of the physical store is configured.

![Creating a contingency pickup point to guarantee it as an option at checkout](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Checkout/Checkout overview/creating-a-contingency-pickup-point-to-guarantee-it-as-an-option-at-checkout_1.jpg)

## How to set up a contingency pickup point

To implement a contingency pickup point, you need to configure the following steps:

1. In the VTEX Admin, [add a new pickup point](https://help.vtex.com/en/tutorial/cadastro-de-pontos-de-retirada--2R5ClQiwe4KoSQgsuiOw4E) in the store with available inventory to serve this pickup point.
2. [Create a new shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140) with the same name as the shipping method already configured in the policy used in the physical store, where the products will be picked up.
3. Link this new policy with the new pickup point you created.

Thus, you will have two logistic routes: one using the physical store inventory and the other using the inventory of a different store.

When the customer selects this pickup point at checkout, the system will proceed as follows:

- If there is local inventory, the delivery time will be shorter. In this case, the main pickup point will be selected.
- If there is no local inventory, the logistic route configured as contingency will be selected.
