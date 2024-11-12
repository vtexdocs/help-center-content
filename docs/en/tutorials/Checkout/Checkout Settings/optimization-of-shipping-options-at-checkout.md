---
title: 'Optimization of shipping options at Checkout'
id: 6DeGO9eBSFWe4XkoS0SxAB
status: PUBLISHED
createdAt: 2022-05-25T19:12:15.339Z
updatedAt: 2023-03-23T17:31:59.995Z
publishedAt: 2023-03-23T17:31:59.995Z
firstPublishedAt: 2022-05-27T12:33:12.618Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: optimization-of-shipping-options-at-checkout
locale: en
legacySlug: optimization-of-shipping-options-at-checkout
subcategoryId: 6XAvmMxp7yyY06ewYMuggs
---

When the customer places an order, the cart may contain products that are in one of the following configurations:
- Storage in multiple locations ([warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb#) or [loading docks](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj#)).
- Specific sellers for each selected product, including [sellers white label](https://help.vtex.com/en/tutorial/white-label-seller--5orlGHyDHGAYciQ64oEgKa#).
- Shippings made by different [carriers](https://help.vtex.com/en/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE#).

In this context, VTEX Checkout v6 allows you to process different shipping options and combine selected products into packages. This optimization of shipping options (also known as **Lean Shipping**), improves the customer's shopping experience through the following actions:
- **Reduction of information at Checkout**:
  - More expensive and longer shipping options are not shown to the customer.
  - Products with different shipping options are automatically organized int [multiple packages](https://help.vtex.com/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV), without the need for customer review.   

- **Faster Checkout**: internal processing of available shipping options, reducing the number of options that have similar costs and shipping times.

## Optimized shipping options

VTEX's Checkout v6 combines information such as the customer's zip code, product location, carriers available in the region, and makes the **Cheapest** and **Fastest** shipping options available on the Checkout screen.

- **Cheapest**: option with the lowest cost to the customer.
- **Fastest**: option with the shortest shipping time.

>⚠️ When only one type of shipping option is available for a given order, the **Cheapest** and **Fastest** options will not be shown at Checkout.

## Disable the Optimized Shipping Options function

The **Optimized Shipping Options** functionality is enabled by default in Checkout v6. However, in some regions, there may be scenarios that contribute to this function not being used. In countries such as Spain or the United States, where the available shipping options are similar, consumers prefer to choose a carrier based on their level of trust in the company.

>⚠️ By disabling this function in Admin VTEX, all available shipping options will be displayed in the Checkout process. However, if the [Multiple Deliveries](https://help.vtex.com/en/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV#) functionality is enabled in the store and there are different delivery options between the selected items in the cart, the **Optimized Delivery Options** will continue to be displayed. That is, delivery optimization will be needed to handle multiple packages (items with different delivery options).

To disable the __Optimized Shipping Options__ function, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Storefront > Checkout__, or type __Checkout__ in the search bar at the top of the page.
2. Click on the <i class="fas fa-cog" alt="engrenagem azul"></i> icon of the desired website.
3. In the blue options menu located at the top of the page, click on __Checkout__.
4. Under __Optimized Shipping Options__, click the <i class="fas fa-toggle-off"></i> to disable the __Optimize Shipping options display option__.

![Optimized shipping options](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.PNG)

<ul>
  5. Click <b>Save</b>.
</ul>
