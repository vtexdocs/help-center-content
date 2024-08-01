---
title: 'How to change orders (Beta)'
id: 7btlG91rb6sHpW1dkd2kBw
status: PUBLISHED
createdAt: 2023-11-27T22:40:33.769Z
updatedAt: 2024-04-09T18:03:22.045Z
publishedAt: 2024-04-09T18:03:22.045Z
firstPublishedAt: 2023-11-28T15:16:50.272Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: how-to-change-orders-beta
locale: en
legacySlug: how-to-change-orders-beta
subcategory: 3LQ1Tl0u4frEOd45BkjFAm
---

<div class="alert alert-info">
This feature is in beta, which means that we are working to improve it. If you wish to use <b>Change order (Beta)</b>, please contact <a href="https://help.vtex.com/en/support">our Support</a> and provide the <a href="https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC">account name(s)</a> in which to activate it.
</div>

The [Change order (beta)](https://help.vtex.com/en/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ) feature allows you to edit an order in different ways, either due to customer requests, product unavailability, or other reasons.

This article explains how an order can be changed and how to do so. It comprises the following sections:

- [Conditions](#conditions)
- [Types of order changes](#types-of-order-changes)
- [Common aspects](#common-aspects)
- [Processing errors](#processing-errors)

<div class="alert alert-warning">
To learn about the <a href="https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ#general-characteristics">general characteristics</a> of order change scenarios, including aspects like reservation, inventory update, and franchise accounts, or to understand details related to <a href="https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ#price-changes">pricing, payment, and invoicing</a>, read the <a href="https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ">How Change order works (Beta)</a> article.
</div>

## Conditions

There are some conditions for changing orders related to the order status. See the details below.

### Status of the order to be changed

In the [order flow](https://help.vtex.com/en/tutorial/fluxo-e-status-de-pedidos--tutorials_196), `Handling shipping` is the only status valid for **Change order (beta)** in the VTEX Admin. Read the [How Change order works (Beta)](https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ) article to learn more about API changes.

### License Manager permission

For a user to be able to change orders, their [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) must be associated with at least one of the following [Licence Manager resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3):

- `Orders Full Access`
- `Change order`

## Types of order changes

These are the main order changes that can be made through the VTEX Admin:

- **Add:** Increase the number of items or add new products.
- **Remove:** Remove the partial or total number of items.
- **Weight change:** Adjust the weight assigned to items.
- **Replace items:** Replace items, including those priced by weight.
- **Price change:** [Change the order total amount](https://help.vtex.com/en/tutorial/alterar-valor-total-do-pedido--2asq4BmxvSD8Tw9xpfZuMo).

All these actions are done on the [order details](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl) page, which you can access in two ways, as described below.

### Viewing orders on the All orders page

In the VTEX Admin, go to **Orders >** [All Orders](https://help.vtex.com/en/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi) and click the desired order, or type **All Orders** in the search bar at the top of the page. Then click the order you want to view. If necessary, you can use [filters](https://help.vtex.com/en/tutorial/filtrar-todos-pedidos--tutorials_192) to narrow your search.

### Viewing orders using the global search bar

From any VTEX Admin page, search for the order using the search bar at the top of the page. Select the `Orders` option in the right corner of the bar and use one of the following criteria:

- Order ID
- Customer name
- Customer email
- Customer document

On the order details page, you can do the following:

- [Add items](#adding-items)
- [Add a new product](#adding-a-new-product)
- [Remove items](#removing-items)
- [Remove a product](#removing-a-product)
- [Replace items](#replacing-items)
- [Change weight](#changing-weight)

<div class = "alert alert-info">
You can make a single change to the order or combine several at once. There is no limit to how many times an order can be changed. Read the <a href="https://help.vtex.com/en/tutorial/how-change-order-works-beta--56TO0bOFXsfmpc7YZ3wIUZ">How Change order works (Beta)</a> article to learn more.
</div>

### Adding items

To add one or more items to the order, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, click the up arrow <i class="fas fa-angle-up"></i> to the number you want, or enter the number in the field. Then, the page will display the price and the previous number with a strikethrough, followed by the message: _"Item edited"_.

    ![change_order_adding_items_EN](//images.ctfassets.net/alneenqid6w5/5dqVuyGULGm5TJH2tliSoO/d1f2ff7078f9a72db8ab25b8dda60e7c/change_order_adding_items_EN.png)

4. Review the [details of the amount change](#viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
5. Click `Review and Apply`.
6. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
7. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"._

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, you will see the updated number of items.

### Adding a new product

To add one or more products to an order, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, click `+ Add Item`.
4. On the **Add items** page, use the <i class="fas fa-search"></i> search bar to enter the name of the desired product.
5. Click <i class="fas fa-plus"></i> `Select`. You can add as many products as you like by repeating the procedure. For each new addition, the following message will be displayed: _"Item selected"_.
  > If you click the product name, you will be redirected to the product page on the store's website.
6. Then click `Add Selected Items`, and the following message will be displayed: _"Items added"_.

    ![change_order_adding_product_EN](//images.ctfassets.net/alneenqid6w5/6a1gqq7WZiTO1lXZL26tU0/30f4bc58081e982190d44bb730a9ca25/change_order_adding_product_EN.png)

4. Review the [details of the amount change](#viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
5. Click `Review and Apply`.
6. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
7. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"_.

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, you will see the recently added products.

### Removing items

To remove one or more items from an order, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, click the down arrow <i class="fas fa-angle-down"></i> to the number you want, or enter the number in the field. Then, the page will display the price and the previous number with a strikethrough, followed by the message: _"Item edited"_.

    ![change_order_removing_items_EN](//images.ctfassets.net/alneenqid6w5/1fyXdA3TCu89tVktrQTFOr/d2ebd588be0ed9b83aec51767bd263e3/change_order_removing_items_EN.png)

4. Review the [details of the amount change](#viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
5. Then click `Review and Apply`.
6. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
7. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"._

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, the number of items will reflect the recent removal.

### Removing a product

To remove a product from an order, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, click the trash can icon <i class="far fa-trash-alt"></i> and `Remove Item`. The following confirmation message will appear: _"Item removed"_.

    ![change_order_removing_product_EN](//images.ctfassets.net/alneenqid6w5/6aN2IcHBxHHhFYIsy8ihRN/7d5515c38ca48467dbaabe0123d8b14d/change_order_removing_product_EN.png)

4. Review the [details of the amount change](#viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
5. Then click `Review and Apply`.
6. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
7. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"_.

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, you will see the order without the recently removed product.

### Replacing items

To replace items in the order, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, in the row of the product you want to replace, click the menu <i class="fas fa-ellipsis-v"></i> and select <i class="fas fa-pencil-alt"></i> `Replace Item`.
4. On the **Order replacement** page, use the &lt;i class="fas fa-search">&lt;/i> search bar to enter the name of the product you want to replace it with.
5. Click `+ Select`. The following message will be displayed: _"Item selected"_. If you click the product name, you will be redirected to the product page on the store's website.
6. Then click `Apply`. The following message will appear: _"Changes applied"_.
7. Review the [details of the amount change](#viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
8. Click `Review and Apply`.
9. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
10. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"_.

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, you will see the item that replaced the previous product.

### Changing weight

To change the weight of an item, follow these steps:

1. In the VTEX Admin, go to the order details page through **Orders >** [All Orders](#viewing-orders-on-the-all-orders-page) or by using the [global search bar](#viewing-orders-using-the-global-search-bar).
2. In the **Pending invoicing** section, click `Change Items`.
3. On the **Manage order items** page, enter the new weight in the row of the desired product. The unit of measure will be specified based on the Catalog settings.
4. Then, the page will display the previous price and weight number with a strikethrough, followed by the message _"Item edited"_.

    ![change_order_changing_weight_EN](//images.ctfassets.net/alneenqid6w5/354LTV0LRZmcCXsB1oJkTw/c57d6801d560764df71a72e0593358f9/change_order_changing_weight_EN.png)

5. Review the [details of the amount change](##viewing-details-of-the-amount-change). You can [undo a change](#undoing-actions) if necessary.
6. Click `Review and Apply`.
7. In the **Reason for Changes** field, briefly explain why the order is being changed. If you wish, review the changes again.
8. Click `Apply`. The following confirmation message will be displayed: _"Change request completed"._

After doing so, you will be redirected back to the order details page. In the **Pending invoicing** section, you will see the updated item weight.

## Common aspects

When making any [type of change](#types-of-order-changes) to an order, some steps are the same, and you can check them in this section.

### Viewing details of the amount change

On the **Manage order items** page, as you change the order, the **Total amount** is automatically updated at the bottom of the page. In addition, you can view the price variation resulting from each operation. To view price details, click the arrow icon <i class="fas fa-angle-up"></i> next to the total amount.

### Undoing actions

On the **Manage order items** page, you can undo a change if you want. To do this, click the curved arrow icon `Undo Action`. After this, a confirmation message will be displayed: _"Change undone"_, indicating that the action has been successfully reversed.

![change_order_undoing_actions_EN](//images.ctfassets.net/alneenqid6w5/GcSxHKn9jphCgi8eNQarG/ceee7cdae26eddb1da3588d1e5af4d0e/change_order_undoing_actions_EN.png)

## Processing errors

In any [type of order change](#types-of-order-changes) on the **Manage order items** page, when you click `Review and Apply,` the change may not be approved, which redirects you back to the order details page. Some of the reasons for changes being rejected are:

- **Unavailable item:** The SKU may [not be displayed on the store's website](https://help.vtex.com/en/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) or may be unavailable due to an error or missing catalog, price, or logistics settings.
- **Insufficient inventory:** The number of items added or replaced in the change may be greater than the number of items available for sale in your [inventory](https://help.vtex.com/en/tutorial/gerenciar-itens-em-estoque--tutorials_139).

If the Catalog and inventory settings are correct and changes to orders return errors, this might indicate a problem with the platform's processing. In this case, we recommend contacting our [support team](https://help.vtex.com/en/support).

