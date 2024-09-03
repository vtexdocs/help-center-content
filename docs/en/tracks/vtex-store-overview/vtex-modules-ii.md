---
title: 'VTEX Modules II'
id: 3MYcZaojb5HSUg6ufm6GxQ
status: CHANGED
createdAt: 2024-02-07T13:20:33.477Z
updatedAt: 2024-02-22T17:08:09.649Z
publishedAt: 2024-02-22T14:07:12.569Z
firstPublishedAt: 2024-02-22T14:07:12.569Z
contentType: trackArticle
productTeam: Others
slug: vtex-modules-ii
locale: en
trackId: eSDNk26pdvemF3XKM0nK9
trackSlugEN: vtex-store-overview
---

In addition to the modules covered in the previous article, such as [Catalog](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalog), [Prices](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#prices), [Promotions](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#promotions), and [Logistics](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistics), the VTEX platform has other modules that are essential for the store's operation. This article presents an overview and the main settings for the following modules:

- [Payments](#payments)
- [Orders](#orders)
- [Checkout](#checkout)

## Payments

The [Payments](https://help.vtex.com/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB) module on VTEX is where you can manage all the financial operations of a store. It allows you to determine the payment providers, methods, and conditions that will be offered to customers at checkout and check payment transaction details for each order.

### Before you begin with Payments

To process and receive payments for purchases in a VTEX store, you need to have a service agreement with one or more payment providers. These agreements are established directly between the merchant and the provider, without mediation or participation from VTEX. To view available providers on VTEX in each country, check the [List of Payment Providers by Country](https://help.vtex.com/en/tutorial/list-of-payment-providers-by-country--2im3BEGXxSAcRuxEaIHPvp).

>⚠️ We recommend integrating multiple payment providers in your store to enhance customer experience by offering a variety of payment methods and conditions. This approach also allows operating with diverse rates and costs, thereby improving business performance.

The payment settings described in this track can be configured at any time during the onboarding process. However, for the store to be able to process any type of payment transaction, the [Catalog](https://help.vtex.com/en/tracks/track-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalog), [Pricing](https://help.vtex.com/en/tracks/track-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#prices), and [Logistics](https://help.vtex.com/en/tracks/track-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistic) modules must have been configured beforehand.

### How the Payments module works

The table below shows the main agents and terms used in the Payments context:

| **Term** | **Description** |
| :---: | :--- |
| **Gateway**  | System that processes order payment information during checkout. | 
| **Acquirer** | Company that processes credit and debit card payments. |
| **Subacquirer** | Company that handles payments and acts as an intermediary between acquirers, anti-fraud providers, and merchants.|
| **Card brand** | Company that defines business rules for credit and debit cards. |
| **Issuing bank** | Financial institution that authorizes a payment method, such as credit or debit card. |
| **Payment provider** | Company that offers support for electronic transactions across various payment methods. |
| **Anti-fraud provider** | Company that conducts risk analysis on credit and debit card transactions. |
| **Payment Provider Protocol** | Protocol used by payment or anti-fraud providers to transmit payment data. Learn more about how providers integrate with VTEX in [Payment Provider Protocol](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m). |
| **Payment method** | Methods available to customers when paying for their orders, such as credit cards, debit cards, and digital wallets. |
| **Payment condition** | Rules established for a specific payment method, e.g., the maximum number of installments allowed and applicable interest. |

### Payment and transaction flows

When a purchase is completed on VTEX, a new transaction is created and the payment flow begins. In the example below, you can see the payment flow for a credit card purchase:

![payments-en](https://images.ctfassets.net/alneenqid6w5/6rqeRDDqm3rijRrwpG6Lb1/8df497f70d26352352a11d942887afa7/payments_image1_EN__1_.JPG)

As the data is transferred among the agents responsible for data processing, the payment transaction status is updated to reflect the current stage of the resources in the flow. In the credit card payment flow, we can consider the following example of transaction statuses:

![payments-flow-en](https://images.ctfassets.net/alneenqid6w5/6fsbJZ07a18ea8I1pk7UFo/14fa9b346e6a041fa934f2cfa9d94ace/payments_image2_ALL.JPG)

### Configuring payments in your store

Once you have agreements in place with the payment providers, you need to configure the respective connector for each one and define the available payment methods and conditions that will be offered at the store's checkout.

#### Enabling a payment provider

Payment providers must be enabled in a store to transmit and receive the information required to complete a payment transaction. Follow the steps below to enable each provider:

1. Access the [List of Payment Providers by Country](https://help.vtex.com/en/tutorial/list-of-payment-providers-by-country--2im3BEGXxSAcRuxEaIHPvp).
2. Select the desired provider by clicking the corresponding link in the table.
3. Go to the VTEX Admin to configure the provider and follow the instructions listed in the specific configuration article.

>ℹ️ You can also find provider configuration articles by entering the name of the provider in the search bar of the [Help Center](https://help.vtex.com/en).

#### Defining payment methods and payment conditions

After enabling the payment provider, you need to configure the payment methods and terms to be processed by the provider. To do this, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. On the **Payment Conditions** tab, click the **+** button.
3. Click the desired payment method.
4. If you want, you can change the name of the payment method in the **Condition name** field.
5. Activate the **Status** toggle switch.
6. In **Process with provider**, select the name of the payment provider.
7. If you want to use an anti-fraud system, check the option **Use anti-fraud solution**. Learn more in [Configuring an anti-fraud provider (optional)](#setting-up-an-anti-fraud-provider).
8. If the chosen payment method allows you to set up payments in installments, select the **In installments** option under **Paid in full or in installments?** and enter the desired information. Learn more in [Configuring payment terms](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).
9. If you want, you can also set up special payment conditions. Learn more in [Adding special payment conditions](#adding-special-payment-conditions).
10. Click `Save`.

### Optional Payments settings

Depending on the store's operating profile, you can also configure the following optional payment settings:

- [Add special payment conditions](#adding-special-payment-conditions)
- [Configure custom payment methods](#configuring-custom-payment-methods)
- [Set up an anti-fraud provider](#setting-up-an-anti-fraud-provider)
- [Create gift cards](#creating-gift-cards)           
- [Enable digital wallets](#enabling-digital-wallets)
- [Customer Credit](#customer-credit)

#### Adding special payment conditions

Special payment conditions allow you to define specific rules for a given payment method, such as expiration date, issuing bank, trade policy, commercial condition, and account name.

For more details on each type of special payment condition, check the [Configuring special payment conditions](https://help.vtex.com/en/tutorial/special-conditions--tutorials_456) article.

#### Configuring custom payment methods

On VTEX, you can configure the following custom payment methods:

- **Notes payable**: Payment commitment between the merchant and the customer for the purchase amount. Manual approval by the merchant is required to approve the purchase transaction. Learn more in [Setting up payments with Notes Payable](https://help.vtex.com/en/tutorial/setting-up-payments-with-notes-payable--5pW7avTwtyQcMu4uiW8quQ).

- **Store cards (private label)**: Credit or debit cards issued through a partnership between a company and a card label, such as Visa or Mastercard. These cards can only be used for purchases at establishments that accept the card issuer's label. Learn more in [Setting up Private Label payments](https://help.vtex.com/en/tutorial/setting-up-private-label-payments--428FgVdSGQUeAOoogkaIw4).

- **Store cards (co-branded)**: Credit or debit cards that are branded with a company's own name, issued exclusively for purchases made at the establishments of the card-issuing company. Learn more in [Setting up payments with Store Card (cobranded)](https://help.vtex.com/en/tutorial/setting-up-payments-with-store-card-cobranded--jrkLK41IjuquUmyKUi86Q).

#### Setting up an anti-fraud provider

Anti-fraud providers can be configured in the store to analyze credit and debit card payments, provided that an agreement has been established between the merchant and the provider. While their use is recommended, it is optional.

To view the anti-fraud providers that are currently integrated with VTEX, enter the name of the provider into the [Help Center](https://help.vtex.com/en/) search bar or access the VTEX Admin, as detailed in the article [Configuring the anti-fraud](https://help.vtex.com/en/tutorial/how-to-configure-the-anti-fraud--tutorials_446).

#### Creating gift cards

Gift cards, also known as vouchers, can be used in VTEX stores as a payment method or in loyalty programs.

VTEX has its own gift card provider, which allows creating and managing gift cards either through the VTEX Admin or via the Gift Card API. Learn more details about gift-card creation with both methods in [Gift Card API](https://developers.vtex.com/docs/api-reference/giftcard-api).

You can also offer gift cards from external providers via the [GiftCard Hub API](https://developers.vtex.com/docs/api-reference/giftcard-hub-api). To use an external gift card provider, you must have an agreement with the provider and check if the provider is already integrated with VTEX. Learn more in [Setting up gift cards](https://help.vtex.com/en/tutorial/gift-card--tutorials_995) and [Gift Card system architecture](https://developers.vtex.com/docs/guides/gift-card-integration-guide-system-architecture).

#### Enabling digital wallets

Digital wallets provide secure environments where customers can store their bank and credit card information in an encrypted form and use it when completing a purchase. This payment method enhances security by eliminating the need to enter sensitive data for each purchase. Instead, users authenticate within the digital wallet environment once.

On VTEX, you can offer native digital wallets, such as [Google Pay](https://help.vtex.com/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT), or integrated digital wallets, such as [Apple Pay](https://help.vtex.com/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/STKWiXJSR9ImPt5EEC2aL), [Samsung Pay](https://help.vtex.com/en/tutorial/configurar-samsung-pay-como-meio-de-pagamento--5Yj9rgzOCVYuGmAumQlfpP), and [PayPal](https://help.vtex.com/en/tutorial/configurar-paypal--4p3sD9u1moq2Aya2oc684w). Learn more in [Digital wallet (ewallet)](https://help.vtex.com/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/7jLbdfch9Oe2yYbQa9zwE1).

#### Customer Credit

Customer Credit is a VTEX solution designed to offer credit to specific customers, enabling them to spread payments over time. With this app, you can access customer management, set up payment terms and installment plans, define credit limits, and monitor the status of issued invoices, among other features.

Learn more in [Customer Credit - Overview](https://help.vtex.com/en/tutorial/customer-credit-overview--1uIqTjWxIIIEW0COMg4uE0) and [Customer Credit - Getting Started](https://help.vtex.com/en/tracks/customer-credit-getting-started--1hCRg21lXYy2seOKgqQ2CC/36grlQ69NK6OCuioeekyCs).

## Orders

As soon as the customer completes a purchase, an [order](https://help.vtex.com/en/tracks/orders--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE) is generated on VTEX. Orders can be managed through the VTEX Admin, in **Orders > [All Orders](https://help.vtex.com/en/tutorial/all-orders--2QTduKHAJMFIZ3BAsi6Pi)**, by accessing the [order details page](https://help.vtex.com/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl), or via API. For an overview of developer content related to the [Orders API](https://developers.vtex.com/docs/api-reference/orders-api#overview), check the [Orders](https://developers.vtex.com/docs/guides/orders-overview) guide.

### Before you begin with Orders

The VTEX platform does not require mandatory settings for a store to manage its orders. Instead, it offers a variety of [optional settings](#optional-orders-settings) that can be strategic for different business models.

However, for a customer to make a purchase and place an order, the store must have registered and priced products, offer [payment methods](https://help.vtex.com/en/tutorial/difference-between-payment-methods-and-payment-conditions--3azJenhGFyUy2gsocms42Q), and ensure that the order can be shipped. To do this, the following modules must be configured:

- [Catalog](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#catalog)
- [Prices](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#prices)
- [Logistics](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#logistic)
- [Payments](#payments)

### Order integration

Stores frequently want to [integrate their orders](https://developers.vtex.com/docs/guides/erp-integration-guide) with systems such as ERP (Enterprise Resource Planning) and WMS (Warehouse Management System). The [backend implementation](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) allows stores to automate some actions in order processing, such as:

- Receiving notifications about order progress and status within the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196).
- Obtaining information on orders that need to be picked and packed.
- Sending the [invoice](https://help.vtex.com/en/tutorial/how-to-manually-invoice-an-order--7p1h852V5t54KyscpgxE2v) to the VTEX platform, which then forwards it to the customer.
- Making [changes](https://help.vtex.com/en/tutorial/changing-items-from-a-complete-order--tutorials_190) to order items.

There are two different ways of tracking order status changes: [Feed](https://developers.vtex.com/docs/guides/orders-feed) or [Hook](https://developers.vtex.com/docs/guides/orders-feed#hook). Learn more about order integration in the [Backend integrations](https://help.vtex.com/en/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) article.

### Managing orders

In the VTEX Admin, under **Orders > [All Orders](https://help.vtex.com/en/tutorial/all-orders--2QTduKHAJMFIZ3BAsi6Pi)**, you can perform the following actions:

- View a list of all store orders.
- Access order details on the [details page](https://help.vtex.com/en/tutorial/order-details-page--2Y75n54Cc9VizrlG1N6ZNl) by clicking the order.

On the order details page, you can also track the progress of the [order flow](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). The image below illustrates an example of this flow when the store acts as both a marketplace and a seller:

![order-flow-en](https://images.ctfassets.net/alneenqid6w5/5ObTRbhlsYxoaW0Lzw7RmS/3ea6fe2efb78e9b449acb2dac8b1700f/pedido_fluxo_completo_en.png)

To find a purchase record in the VTEX Admin, you can either [filter orders](https://help.vtex.com/en/tutorial/filtering-all-orders--tutorials_192) on the **All Orders** page or use the global search bar, which is accessible from any page within the VTEX Admin. To search, simply select the `Orders` option in the right corner of the search bar and enter any of the following values:

- Order ID
- Customer name
- Customer email
- Customer ID

>⚠️ You can only access details about orders created in the last two years. This same period applies to customers accessing their orders via the [My Account]() page.

To enable customers to track their orders, VTEX offers two important features: [transactional emails](#transactional-emails) and a dedicated customer area called [My Account](#my-account-feature).

#### Transactional emails

VTEX natively offers the option of sending [transactional emails](https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84), enabling stores to automatically inform customers of order updates. In essence, as the order progresses through the processing flow, customers can receive notification emails. These emails keep them updated on key stages, such as payment approval and order shipping.

The platform offers a series of [transactional email templates](https://help.vtex.com/en/tutorial/order-transactional-email-templates--3g2S2kqBOoSGcCaqMYK2my), but customizing these communications is also possible. The list below describes the main aspects of these optional settings, which are independent of each other:

- **Alias**: Alternative email address automatically generated by the VTEX platform to [mask](https://help.vtex.com/en/tutorial/general-configurations-on-the-oms--tutorials_194) the customer's email in store transactional emails. This [type of conversation mask](https://help.vtex.com/en/tutorial/general-configurations-on-the-oms--tutorials_194) provides enhanced protection for customer data, as the alternative email is designed to be unreadable by external systems.

- **Availability - Notify Me**: Configuration of the [Notify Me](https://help.vtex.com/en/tutorial/setting-up-the-notify-me-option--2VqVifQuf6Co2KG048Yu6e) button on product pages visible on the store website. This button appears when a product is out of stock, allowing customers to enter their email to receive a notification when the product is available for purchase again.

#### My Account feature

[My Account](https://help.vtex.com/en/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh) is the solution that gives customers autonomy to check their orders and update their personal information. It's a unique environment for each customer and can be accessed with a username and password.

One of the advantages of **My Account** is that it facilitates more direct communication between the customer and the store. Additionally, it allows customers to take actions such as ordering again or canceling their orders. More efficient communication tends to reduce the need for customer service, resulting in cost savings for the store.

### Optional Orders settings

The following table shows some optional settings in the Orders module:

| **Feature** | **Description** |
| :---: | :--- |
| Subscriptions | [Subscriptions](https://help.vtex.com/en/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453) is an automatic order scheduler to simplify recurring purchases for store customers. The customer specifies the items they want to buy and how often the automatic orders should be placed.<br><br>[Setting up subscriptions](https://help.vtex.com/en/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) is particularly interesting for business models such as supermarkets and pet stores, where customers consume the same products on a regular basis. |
| Telesales | The [telesales](https://help.vtex.com/en/tutorial/funcionalidades-de-televendas--UqhiccIRIK2KD0OqkzJaS) solution gives the customer service team more autonomy in assisting customers. By [configuring the telesales features](https://help.vtex.com/en/tutorial/como-configurar-as-funcionalidades-de-televendas--76FNgQP2Glc4umMJ5Yr50R), store operators can perform tasks such as:<br><br>- Making purchases on behalf of a customer.<br>- Manually adjusting item prices in a shopping cart.<br>- Editing existing orders.<br>- Managing customer profile information in [My Account](#my-account-feature).|
| Price divergence | In store [marketplace strategies](https://help.vtex.com/en/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) in the VTEX ecosystem, the price set by the seller can differ from the price offered by the marketplace. Scenarios such as promotions in the marketplace can affect the original price set by the seller for their product.<br><br>To prevent order processing errors, VTEX sellers can [configure price divergence rules](https://help.vtex.com/en/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe) and set parameters to allow the automatic authorization of orders with a price difference between the seller's set price and the marketplace offering. By implementing automatic rules for approving or rejecting orders with price discrepancies, the store can avoid the need for manual processing of each item, increasing operational efficiency. |

Learn more in [Orders General Configuration](https://help.vtex.com/en/tutorial/configuracoes-gerais--tutorials_194).

## Checkout

Checkout is the last stage in the online shopping process, playing a significant role in achieving a good sales conversion rate. On the VTEX platform, the [Checkout](https://help.vtex.com/en/tutorial/checkout-vtex-visao-geral--7wcprkM7yZUflOqbzAN5SI) module is crucial for:

- Providing information about the price and availability of products in the store.
- Adding items to and processing the shopping cart.
- Completing the purchase.

### Before you begin with Checkout

To ensure the checkout will work properly, the following modules must be correctly configured: [Catalog](https://help.vtex.com/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR), [Logistics](https://help.vtex.com/en/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx), [Prices](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP#), [Promotions](https://help.vtex.com/en/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N#), [Payments](https://help.vtex.com/en/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#), and [Orders](https://help.vtex.com/en/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/2sl6hj2eqwgqbDgTF6y5qE).

![checkout-en](https://images.ctfassets.net/alneenqid6w5/57AJQIGKk5fuwN8SRMenM0/fd3e825135b5ca4f2a1c3b976bf9d9ad/checkout_image_EN.jpg)

Sharing information allows processing details regarding availability, prices, applicable promotions, shipping options, and payment methods.

### Customizing the store's checkout

The customizations described below are optional and aim to improve the performance of the checkout process. Before configuring them, we recommend analyzing the most suitable options for your store's operation.

- [Optimizing shipping options at checkout](#optimizing-shipping-options-at-checkout)
- [Abandoned cart](#abandoned-cart)
- [Changing the price of an item in the shopping cart](#changing-the-price-of-an-item-in-the-shopping-cart)
- [Minimum order amount and maximum item quantity per SKU](#minimum-order-amount-and-maximum-item-quantity-per-sku)
- [Geolocation at checkout](#geolocation-at-checkout)
- [Checkout UI Custom app](#checkout-ui-custom-app)

### Optimizing shipping options at checkout

Solution that allows you to trigger a combination of existing data, showing customers the fastest and cheapest shipping options for the products selected in their cart. Other shipping options (with higher costs or longer delivery times) will not be displayed at checkout, improving the customer experience.

Learn more in [Optimization of shipping options at Checkout](https://help.vtex.com/en/tutorial/otimizacao-das-opcoes-de-entrega-no-checkout--6DeGO9eBSFWe4XkoS0SxAB).

### Abandoned cart 

This feature allows sending emails to customers who have created a shopping cart but have not completed the purchase.

>ℹ️ Configuring the abandoned cart feature during the onboarding process allows forwarding all future carts for customer review, encouraging them to complete their purchases.

Learn more in [Setting up Cart Abandonment](https://help.vtex.com/en/tutorial/configurar-carrinho-abandonado--tutorials_740).

### Changing the price of an item in the shopping cart

On the VTEX platform, stores can manually adjust the price of an item (SKU) in the cart at checkout. This feature can be used to apply special discounts, correct pricing errors, create custom offers, address price-related complaints, or adjust shipping costs.

>⚠️ Only users with the necessary [roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) and permissions within the VTEX Admin can make these changes.

Learn more in [Change the price of an item in the shopping cart](https://help.vtex.com/en/tutorial/modificar-o-preco-de-um-item-no-carrinho-de-compras--7Cd37aCAmtL1qmoZJJvjNf).

### Minimum order amount and maximum item quantity per SKU

In ecommerce operations, the logistics cost associated with product shipping plays a crucial role in maintaining competitiveness. This cost is influenced by factors such as the total amount in the shopping cart and the number of units of the same SKU in the cart.

Implementing a minimum order amount can improve efficiency for sellers who deliver in batches, avoiding orders with low total amounts or few items, which may be economically unviable.

Learn more in [How to configure minimum order value and maximum quantity of items per SKU](https://help.vtex.com/en/tutorial/como-configurar-valor-minimo-de-pedido-e-quantidade-maxima-de-itens-por-sku--7JqipPUBxtKz0m4OlAyKs9).

### Geolocation at checkout 

The geolocation solution allows customers to use Google Maps on the store checkout screen for specifying their delivery location, as an alternative to entering the postal code. After indicating the delivery point, the shipping cost of the order will be calculated and displayed. This cost is based on the rates set by the merchant for deliveries within the selected area on the map (coordinate polygons).

In addition to automatically calculating the shipping cost, if the store offers the option of in-store pickup, geolocation can help customers find the nearest store based on their current location.

Learn more in [Setting up geolocation at checkout](https://help.vtex.com/en/tutorial/geolocalizacao-no-checkout--tutorials_4345).

### Checkout UI Custom app

This app allows different visual customizations to be applied to the store checkout screen.

Learn more in [Checkout UI Custom](https://developers.vtex.com/docs/apps/vtex.checkout-ui-custom).
