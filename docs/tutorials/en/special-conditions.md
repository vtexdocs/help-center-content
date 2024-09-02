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
slug: special-conditions
locale: en
legacySlug: special-conditions
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Special conditions are part of the configuration of payment conditions which allow the sellers to increase the level of customization of the payment condition, so that they can create as many rules as necessary. Depending on the payment method you want to accept, you can use the following special conditions:

To identify the special conditions applicable to each payment method, in the VTEX Admin, access  __Payments > Settings > Payment Conditions__, select the desired payment method and check the options as shown in the illustration below.

![special payment conditions](https://images.ctfassets.net/alneenqid6w5/1DllASa2BBHO7VjL1krOqD/5f674ce32524424a33df81b671e04e5c/Special_payment_conditions.png)

## Commercial condition

Allows you to set a payment rule for each SKU group, but for it to work properly, it is necessary to first create different system default business conditions and secondly, the SKUs that comply with this rule must be properly linked to the commercial condition.

To learn how to add a new commercial condition, and link it to a SKU, read the document [Registering a commercial condition](https://help.vtex.com/en/tutorial/registering-a-commercial-condition--tutorials_445).

## How to configure a commercial condition on the payment condition

![condicao-comercial en](https://images.ctfassets.net/alneenqid6w5/2YSz1udqP6YCgSQ6u2c8II/1b9ec111a6f65a1a254908fd141a97f7/commercial-condition.png)

1. Inside the payment condition, click on `Add special condition`.
3. Then, click on `Commercial Condition`.
4. Select the desired condition from the list.
5. Fill the drag according to the scenario you want.
6. Save changes.

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

If the intention is to define whether or not interest will be applied according to how much SKU A weights in the cart, then you will need to configure the drag.

## Understanding the Drag

Th drag is a way of defining how the payment condition will be applied to a cart with SKUs under different commercial conditions. This calculation is made based on the percentage added in the "When the percentage of SKUs for this condition is greater than" field.

The platform uses this value to validate the calculation that determines the relative percentage of each SKU in relation to the cart, which is evaluated from the amount and price of the SKUs that are associated to this commercial condition.

If the drag is not configured, the payment condition will always be applied when at least one SKU associated to its commercial condition is present in the cart.

#### Practical example

Imagine that you need to offer installments in 24x, without interest, only for the TVs in your store, provided these represent at least 70% of the cart value. But, for any other scenario, the installment is only of 10x, without interest.

Suppose that a commercial condition has been added and linked to its SKUs, and that the payment condition was configured with a drag of 70% in the _Payments_ module. However, another payment condition, with installment of 10x, without interest, and without a registered drag, was also configured. Check out the cart's scenarios below:

**Shopping cart 1**
1 TV, having the value of U$ 8,000.
2 games, with a value of U$ 1,000 each.
In this case, the total value of the cart would be U$ 10,000, with the TV accounting for 80% of its total. Then, the payment condition of 24x, without interest, would be offered, since the minimum of 70%, defined in the commercial condition, was met.

**Shopping cart 2**
2 TVs, with A value of  U$ 3,000 each.
1 computer, with a value of U$ 4,000.
In this case, the total value of the cart would be U$ 10,000, with the TV accounting for 60% (2x U$ 3,000) of that total. Therefore, the payment condition of 10x, without interest, would be offered to the customer.

Of course, in addition to these scenarios, many others could be established, according to the need of the store and to how the payment conditions are configured in conjunction with the commercial conditions.

## Trade policy

Allows a payment condition to be applied to a specific trade policy, or as many as you need to configure. Remembering that, if this field is not configured, the condition will be presented in all the store's trade policies.

How to configure a trade policy for the payment condition

![politica-comercial en](https://images.ctfassets.net/alneenqid6w5/4FEkjd6rSMuA6mKOQ6O0aC/3d100357b97b18b7f073adc686ad0a1a/sales-policy.png)

1. Inside Payment Conditions, click on `Add special condition`.
3. Then, click on `Trade Policy (Sales Channel)`.
4. Select the desired policies.
5. Save changes.

#### Practical example

Suppose that your store offers payments in up to 10x, without interest, and in up to 12x, with interest, for Visa credit cards. But it does have a commercial policy to sell Samsung brand products, on their own hotsite, in up to 24x, without interest. In this case, it would be enough to create a new payment condition for Visa credit cards, of payment in 24x, without interest, and add the configured commercial policy to the sale of Samsung products.

## Issuing bank

Allows you to restrict a payment condition if the credit card and/or debit card has been issued by a specific bank, according to the country.

How to configure the issuing bank in the payment condition

1. When configuring a __payment condition__, click on `Add special condition`.
2. Click on `issuing bank`.
3. Select the __Country of origin__ of the card's issuing bank.
4. Select the __issuing bank__.
5. If you want to segment by card level, select __Card level__.
6. If you want to segment by co-brand, select the desired option in __Co-brand__ (this box will only appear if VTEX was made aware of the co-brand card list beforehand).
7. Save changes.

![banco-emissor en](https://images.ctfassets.net/alneenqid6w5/6q6yz9BnLaAkCCkCOy2EYS/9129d3e6448169fa3f940b627a31160c/issuing-bank.png)

### Examples

#### Issuing Bank

Suppose that Banco do Brasil offers its clients using Ourocard both debit and credit functions. 

To offer this special condition in your store, simply select "Brazil" in the __When the country is__ field, and "Banco do Brasil" in the __When the issuing bank is__ field.

#### Card Level

Suppose that Bradesco bank has an exclusive benefits club for clients with a "standard" level card. One of the benefits could be splitting any purchase in 12 installments, instead of the 11 installments offered for other card levels. 

In such a case, the setup requires an additional step than the previous example: the user should select the options "Brazil" and "Bradesco" from the __When the country is__ and __when the issuing bank is__ fields and then select the __standard__ option in the __card level__ field.

#### Co-brand

Suppose that you want to offer a special payment condition to customers paying by card in your store.

In this case, you must select the issuing bank which responsible for this card followed by the name of your store in the __Co-brand__ field.

<div class="alert alert-warning">
Be aware that by default, the info as to whether or not a card has co-brand is <strong>not</strong> added in the VTEX database. Therefore, if you store wants to segment a payment condition according to cards, you need to send a ticket with the co-brand card list to the VTEX support team.
</div>

## Period

Allow you to set up an expiration date for the payment condition, so that its application ceases in your store when the date expires.

How to configure the payment condition period:

![periodo en](https://images.ctfassets.net/alneenqid6w5/1SHkE4MhWYke8YAuiu0gii/cebe25c6535946b788e28bd24afa3c18/period.png)

1. In Payment Conditions, click on `Add special condition`.
2. Then, click on `Period`.
3. Click on the __From__ field, and select a date in the calendar that appears.
4. In the field next to it, enter the time from when the condition will be valid (the system will record this data using the UTC standard).
5. Click on the __To__ field, and select a date in the calendar that appears.
6. In the field beside it, enter the time from when the condition no will longer be applied (the system will record this data using the UTC standard).
7. Save changes.

#### Practical example

Suppose that your store usually offers a payment with in to 6x, without interest, but wants to use the end-of-year sales to offer payment in up to 12x, without interest. In this case, follow the steps above, and add the period of the payment condition. Its application can cease on January 1st of the following year, for example.

<div class = "alert alert-warning">
  <p>Payment conditions have a cache of up to 10 minutes it Smart Checkout. Thus, any change in Payment Conditions in the <strong>Payments</strong> module can take up to 10 minutes to start operating in Smart Checkout.</p>
</div>
