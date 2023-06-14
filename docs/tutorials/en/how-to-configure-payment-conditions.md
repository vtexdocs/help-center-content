---
title: 'Configuring payment conditions'
id: tutorials_455
status: CHANGED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2023-03-21T21:01:23.792Z
publishedAt: 2023-03-21T21:01:12.557Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: how-to-configure-payment-conditions
locale: en
legacySlug: how-to-configure-payment-conditions
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Payment conditions are the methods of payment displayed on the website for checkout. Through this functionality it is possible to configure options such as: installments, interest, [payment special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456#).

## How to set up

Before starting to set a payment condition, you need to register a [gateway affiliation](https://help.vtex.com/en/tutorial/afiliacoes-de-gateway/). 

Once you have defined your gateway affiliation, for any pf the payment condition s to be chosen, you will always need: 

- Fill in the __Rule Name__ field with a name of your choice for identification.
- Activate the condition in the __Status__ field.
- Indicate in __Process with affiliation__, which gateway affiliation will process this payment condition.
- Define if you want to use an [anti-fraud system](https://help.vtex.com/en/tutorial/como-configurar-antifraude) in __Use anti-fraud__.

In addition, it's possible to define whether the payment will be in full or in installments, with or without interest and special conditions.

<div class="alert alert-warning">
 Any changes in payment conditions may take up to 10 minutes to appear at your store's checkout.
</div>

In the steps below, we will use the credit card as an example of a payment condition.

### Payment in full

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any flag) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On **Process with affiliation**, choose the configured affiliation (Important: Prior to activating the payment condition, check with the gateway or acquirer to see whether the payment method or card brand is available in their system).
7. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
8. On __In full or in installments?*__, select __In full__.
9. Click on __Save__.

<div class="alert alert-info">
In Step 5. you can choose other payment methods such as debit cards, cobranded, private, promissories, bank invoices, PIX, among others.
</div>

### Installments without interest

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any brand) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On **Process with affiliation**, choose the configured affiliation.
7. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
8. On __In full or in installments?__, select __In installments__.
9. Set the number of sequential installments (ex.: 1-10) or individual (ex.: 1,3,6) on the __Total installments__ field.
10. Set a minimum value to be applied, according to the value of each product.
11. The __Billing__ field will only be taken into account for installments with interest, so any option is valid.
12. Click on __Save__.

### Installments with interest

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any flag) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On __Process with affiliation__, choose the configured affiliation.
7. If you want to use an anti-fraud system, select the option __Use anti-fraud__.
8. On __In full or in installments?__, select __In installments__.
9. Set the number of sequential installments (ex .: 1-10) or individual (ex.:1,3,6) on the __Total installments__ field.
10. Set a minimum value to be applied, according to the value of each product.
11. Select the date of __Billing__ with beginning or end date - value used to calculate the value of the installment with interest.
12. Click on __Add Interest__.
13. Enter the amount of interest you want apply to each installment. __The field accepts values with up to 2 decimals__ (`1,25` and `10,89` are examples of allowed values).
14. To choose between compound interest and simple interest, select __Compound Interest applied. Change__. A selection box will appear allowing you to choose between the two options. 
15. Click on __Save*__.

![Juros - en](https://images.ctfassets.net/alneenqid6w5/7IPLydgcKCsQUItYhn4LgD/efa95228eb34354425a0064491122b46/Juros_-_en.png)

#### External Interest

In some countries, interest on installment purchases is charged directly by the financial institution. For these cases, you can activate the __External interest__ button. This button fills the amount of interest on the JSON sent to the connector with `null`. This `null` value indicates that interest will be charged at a later date by the financial institution. To activate this feature, click on the button __External interests__ in the configuration of installments with interests.

<div class="alert alert-info">
  Attention: the external interest functionality is only valid for some gateway affiliations (check that this option is available when registering the desired affiliation). Orders placed by affiliations that do not support this feature will be canceled in the system.
</div>

## Remove payment condition

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the payment term you wish to remove.
3. Click on the trash can icon.

![Remove payment condition](https://images.ctfassets.net/alneenqid6w5/30AGmwCJOclqEqvcNPzuxV/8fc094a085a51f3b24d705956c14e052/remove_payment_condition.png)
