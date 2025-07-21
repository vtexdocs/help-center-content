---
title: 'Checkout VTEX - Overview'
id: 7wcprkM7yZUflOqbzAN5SI
status: PUBLISHED
createdAt: 2022-07-06T12:13:18.284Z
updatedAt: 2022-07-13T18:53:14.222Z
publishedAt: 2022-07-13T18:53:14.222Z
firstPublishedAt: 2022-07-13T18:28:12.662Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: checkout-vtex-overview
locale: en
legacySlug: checkout-vtex-overview
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

In the online purchase process, Checkout is the last step and is also considered to be one of the most important for a store's sales conversion rate. At VTEX, the Checkout module is responsible for the following:
- Confirming information on price and availability for items in the window display, according to the existing sellers.
- Adding items and processing the shopping cart.
- Gathering purchase details and completing the purchase.

These actions are performed using information shared with other modules of the VTEX platform, such as [Catalog](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR#), [Inventory & shipping](/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx#), [Prices](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promotions](/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Payments](/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#) and [Orders management](/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/3cjk655ZzDGICH4rVfgu7O#). Sharing information allows processing data related to availability, prices, applicable promotions, shipping methods and payment.

## VTEX Checkout operation

The steps below describe the customer's purchase experience and the way that Checkout acts in this process, together with the related modules.

1. **Selecting the items**: the customer selects the items to be shown in the window display, according to the store's existing sellers. For stores using geographical shipping restrictions, the items will be displayed depending on the customer's location. For more information about sellers' item availability, check out [Setting up price and availability of SKUs by Region](/en/tutorial/configurar-preco-e-disponibilidade-de-skus-por-region--12ne58BmvYsYuGsimmugoc#) and [Comprehensive seller](/en/tutorial/seller-abrangente--5Qn4O2GpjUIzWTPpvLUfkI).
2. **Adding items to cart and completing the purchase**: the customer adds one or more items to the cart, selects the quantities and clicks `Complete order`. The information for each item (quantity, price, promotions, seller availability) is provided by the **Catalog**, **Inventory & shipping**, **Prices** and **Promotions** modules and is sent to **Checkout**.
3. **Customer identification**: the customer inserts their email. Checkout receives information from [Master Data](/en/tutorial/entendendo-o-funcionamento-das-consultas-no-master-data--tutorials_4629#) and verifies if the inserted email belongs to an existing store customer. If it does, the customer's information will be automatically filled in ([SmartCheckout](/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#)) but will only be seen in partial view at Checkout.
4. **Filling in personal data**: on the Checkout screen, the customer checks and inserts their personal data and the shipping information. Checkout calculates the [time](https://developers.vtex.com/vtex-rest-api/reference/calculatesla) and [options](/en/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) for delivering the order to the customer. The information flow is the same as in step 2.
5. **Selecting the payment method**: the customer selects the payment method, inserts the voucher (if applicable) and completes the purchase. Checkout receives information from and sends it to the **Payments** module.
6. **Completing the order**: the customer views the information for the placed order. Checkout sends the placed order information through [Place order from an existing cart API](https://developers.vtex.com/vtex-rest-api/reference/placeorderfromexistingorderform). Learn more in [Using APIs to place a regular order](https://developers.vtex.com/vtex-rest-api/docs/using-apis-to-place-a-regular-order).

Every time a customer changes something in the cart (adds or removes items), or every time the Checkout screen is updated, the following Checkout internal process chain is performed.

![Checkout overview](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Checkout/Checkout%20overview/checkout-vtex-overview_1.png)

<div class="alert alert-info">
If one or more items selected by the customer are eligible for delivery by a <a href="https://help.vtex.com/en/tutorial/definicoes-de-conta-franquia-e-seller-white-label--5orlGHyDHGAYciQ64oEgKa#">Seller white label</a>, the seller responsible for delivering the items will be chosen based on shipping simulations, as shown in the right side of the picture. Learn more in <a href="https://help.vtex.com/en/tutorial/white-label-sellers-selection--3MemNQ4pKkWCpMdzI27AHa#">Selecting white label sellers</a>.
</div>

## VTEX Checkout features

Here are some highlights from the main features of the VTEX Checkout module:  

- [SmartCheckout](/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#): a VTEX solution which allows the customer to skip the authentication process (login and password), automatically filling in their information at Checkout instead. The customer only needs to insert the email previously used in the store.
- [Optimizing shipping options](/en/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB#) (lean shipping): combines customer and item information to identify faster and cheaper shipping options.
- [Pickup points](/en/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#): allows checking information on available pickup points for each item, such as addresses and location maps. Learn more in [Setting up geolocation](/en/tutorial/gerenciar-geolocalizacao--tutorials_138).
- [Manual Price](/en/tutorial/modificar-o-preco-de-um-item-no-carrinho-de-compras--7Cd37aCAmtL1qmoZJJvjNf): allows the retailer to modify the price of an available item while in cart.
- [reCAPTCHA](/en/tutorial/recaptcha-no-checkout--18Te3oDd7f4qcjKu9jhNzP#): a tool for user validation on orders that will be paid by credit or debit card, in order to prevent malware simulated fake users.

## VTEX Checkout versions

The VTEX Checkout module currently runs two versions: **Checkout v5** and **Checkout v6**.

<div class="alert alert-info">
  <b>Checkout v5</b> is no longer being updated or receiving direct operational support. Therefore, we recommend using <b>Checkout v6</b> for your store.
</div>

For more information about Checkout settings and APIs, please go to [Checkout Overview on Developer Portal](https://developers.vtex.com/vtex-rest-api/docs/checkout-overview).
