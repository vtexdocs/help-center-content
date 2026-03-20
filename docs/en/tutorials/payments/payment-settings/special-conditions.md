---
title: 'Configuring payment special conditions'
id: tutorials_456
status: PUBLISHED
createdAt: 2017-04-27T22:03:58.783Z
updatedAt: 2023-07-27T16:59:12.708Z
publishedAt: 2023-07-27T16:59:12.708Z
firstPublishedAt: 2017-04-27T23:03:26.753Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: special-conditions
legacySlug: special-conditions
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Special conditions are part of the configuration of payment conditions which allow the sellers to increase the level of customization of the payment condition, so that they can create as many rules as necessary. Depending on the payment method you want to accept, you can use the following special conditions:

To identify the special conditions applicable to each payment method, in the VTEX Admin, access  **Payments > Settings > Payment Conditions**, select the desired payment method and check the options as shown in the illustration below.

![special payment conditions](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/special-conditions_1.png)

## Commercial condition

Allows you to define a payment rule for each group of SKUs, considering the impact of these items on the total cart value. For it to work correctly, you must first create commercial conditions different from the system default and ensure that the SKUs are properly associated with them.

Find out more about how to register a new commercial condition and associate it with a SKU in [Registering a commercial condition](/en/docs/tutorials/registering-a-commercial-condition).

## How to configure a commercial condition on the payment condition

![condicao-comercial en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/special-conditions_2.png)

1. Inside the payment condition, click on `Add special condition`.
2. Then, click on `Commercial Condition`.
3. Select the desired condition from the list.
4. Fill the drag according to the scenario you want.
5. Save changes.

It is important to remember that if two payment conditions are available for the same payment method, whereas the only difference between the two is the commercial condition, in addition to having two different SKUs in the cart, each SKU linked to one of the commercial conditions, the SKU will offering a lower price will take precedence.

#### Practical example

- SKU A is linked to a customized commercial condition.
- SKU B is linked to a standard commercial condition.
- Payment method is 10x, with 2.5% interest on all installments, when a customized commercial condition is configured.
- Payment method is 10x without interest, when a standard commercial condition is configured.

**Shopping cart 1**
Contains only SKU A. The possibility of paying up to 10x, with 2.5% interest, will be presented.

**Shopping cart 2**
Contains only SKU B. The possibility of paying up to 10x, without interest, will be presented.

**Shopping cart 3**
Contains SKUs A and B. The possibility of paying up to 10x, without interest, will be presented.

If you want interest to be applied or not depending on how much SKU A represents in the total cart value, you need to configure the drag.

## Understanding the Drag

Drag is a way to define how a payment condition will be applied in a cart with SKUs from different commercial conditions. This is done through the percentage configured in the field **When the percentage of SKUs in this condition is greater than:**.

The platform uses this value to calculate how much the items associated with the commercial condition represent in the total cart value.

> ⚠️ The calculus considers the total value of the items (price × quantity) associated with the commercial condition in relation to the total cart value — not just the number of SKUs.

If drag is not configured, the payment condition will be applied whenever at least one SKU associated with the commercial condition is present in the cart.

#### Practical example

Imagine that you need to offer installments in 24x, without interest, only for the TVs in your store, provided these represent at least 70% of the cart value. But, for any other scenario, the installment is only of 10x, without interest.

Suppose that a commercial condition has been added and linked to its SKUs, and that the payment condition was configured with a drag of 70% in the **Payments** module. However, another payment condition, with installment of 10x, without interest, and without a registered drag, was also configured. Check out the cart's scenarios below:

**Shopping cart 1**
1 TV priced at U$ 8,000.
2 video game consoles priced at U$ 1,000 each.

In this case, the total cart value is U$ 10,000, with the TV representing 80% of the total cart value. In this case, the total cart value is U$ 10,000, with the TV representing 80% of the total cart value.

**Shopping cart 2**
2 TVs priced at U$ 3,000 each
1 computer priced at U$ 4,000

In this case, the total cart value is U$ 10,000, with the TVs representing 60% of the total cart value. Therefore, the customer will see the option of 10 interest-free installments.

You can configure many other scenarios depending on your store’s needs and how payment conditions are combined with commercial conditions.

## Trade policy

Allows a payment condition to be applied to a specific trade policy, or as many as you need to configure. Remembering that, if this field is not configured, the condition will be presented in all the store's trade policies.

### How to configure a trade policy for the payment condition

![politica-comercial en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/special-conditions_3.png)

1. Inside Payment Conditions, click on `Add special condition`.
2. Then, click on `Trade Policy (Sales Channel)`.
3. Select the desired policies.
4. Save changes.

#### Practical example

Suppose that your store offers payments in up to 10x, without interest, and in up to 12x, with interest, for Visa credit cards. But it does have a commercial policy to sell Samsung brand products, on their own hotsite, in up to 24x, without interest. In this case, it would be enough to create a new payment condition for Visa credit cards, of payment in 24x, without interest, and add the configured commercial policy to the sale of Samsung products.

## Issuing bank

Allows you to restrict a payment condition if the credit card and/or debit card has been issued by a specific bank, according to the country.

How to configure the issuing bank in the payment condition

1. When configuring a **payment condition**, click on `Add special condition`.
2. Click on `issuing bank`.
3. Select the **Country of origin** of the card's issuing bank.
4. Select the **issuing bank**.
5. If you want to segment by card level, select **Card level**.
6. If you want to segment by co-brand, select the desired option in **Co-brand** (this box will only appear if VTEX was made aware of the co-brand card list beforehand).
7. Save changes.

![banco-emissor en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/special-conditions_4.png)

### Examples

#### Issuing Bank

Suppose that Banco do Brasil offers its clients using Ourocard both debit and credit functions.

To offer this special condition in your store, simply select "Brazil" in the __When the country is__ field, and "Banco do Brasil" in the __When the issuing bank is__ field.

#### Card Level

Suppose that Bradesco bank has an exclusive benefits club for clients with a **standard** level card. One of the benefits could be splitting any purchase in 12 installments, instead of the 11 installments offered for other card levels.

In such a case, the setup requires an additional step than the previous example: the user should select the options **Brazil** and **Bradesco** from the **When the country is** and **when the issuing bank is** fields and then select the **standard** option in the **card level** field.

#### Co-brand

Suppose that you want to offer a special payment condition to customers paying by card in your store.

In this case, you must select the issuing bank which responsible for this card followed by the name of your store in the **Co-brand** field.

> ⚠️ Be aware that by default, the info as to whether or not a card has co-brand is not added in the VTEX database. Therefore, if you store wants to segment a payment condition according to cards, you need to send a ticket with the co-brand card list to the VTEX support team.

## Period

Allow you to set up an expiration date for the payment condition, so that its application ceases in your store when the date expires.

How to configure the payment condition period:

![periodo en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-settings/special-conditions_5.png)

1. In Payment Conditions, click on `Add special condition`.
2. Then, click on `Period`.
3. Click on the **From** field, and select a date in the calendar that appears.
4. In the field next to it, enter the time from when the condition will be valid (the system will record this data using the UTC standard).
5. Click on the **To** field, and select a date in the calendar that appears.
6. In the field beside it, enter the time from when the condition no will longer be applied (the system will record this data using the UTC standard).
7. Save changes.

#### Practical example

Suppose that your store usually offers a payment with in to 6x, without interest, but wants to use the end-of-year sales to offer payment in up to 12x, without interest. In this case, follow the steps above, and add the period of the payment condition. Its application can cease on January 1st of the following year, for example.

> ⚠️ Payment conditions have a cache of up to 10 minutes it Smart Checkout. Thus, any change in Payment Conditions in the **Payments** module can take up to 10 minutes to start operating in Smart Checkout.
