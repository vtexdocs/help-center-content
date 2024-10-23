---
title: 'Configuring payment conditions'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2024-09-27T18:32:01.802Z
publishedAt: 2024-09-27T18:32:01.802Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
locale: en
legacySlug: how-to-configure-payment-conditions
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Payment conditions are the methods of payment displayed on the website for checkout. Through this functionality it is possible to configure options such as: installments, interest, [payment special conditions](https://help.vtex.com/en/tutorial/condicoes-especiais--tutorials_456#).

## How to set up

Before starting to set a payment condition, you need to register a [payment integration](https://help.vtex.com/en/tutorial/afiliacoes-de-gateway/). 

Once you have defined your provider, for any of the payment conditions to be chosen, it will always be necessary:

- Fill in the __Rule Name__ field with a name of your choice for identification.
- Activate the condition in the __Status__ field.
- Indicate in __Process with provider__, which provider will process this payment condition.
- Define if you want to use an [anti-fraud system](https://help.vtex.com/en/tutorial/como-configurar-antifraude) in __Use anti-fraud solution__.

In addition, it's possible to define whether the payment will be in full or in installments, with or without interest and special conditions.

>⚠️ Any changes in payment conditions may take up to 10 minutes to appear at your store's checkout.

In the steps below, we will use the credit card as an example of a payment condition.

### Payment in full

![pagamento-a-vista en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/how-to-configure-payment-conditions_1.png)

1. In the VTEX Admin, go to Store __Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any flag) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On __Process with provider__, choose the configured provider (Important: Prior to activating the payment condition, check with the gateway or acquirer to see whether the payment method or card brand is available in their system).
7. If you want to use an anti-fraud system, select the option __Use anti-fraud solution:__.
8. On __Prepaid in full or in installments?__, select __Prepaid in full__.
9. Click __Save__.

>ℹ️ In Step 5. you can choose other payment methods such as debit cards, cobranded, private, notes payable, bank invoices, PIX, among others.

### Installments without interest

![parcelamento-sem-juros en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/how-to-configure-payment-conditions_2.png)

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any brand) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On __Process with provider__, choose the configured provider.
7. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
8. On __Prepaid in full or in installments?__, select __In installments__.
9. Set the number of sequential installments (ex.: 1-10) or individual (ex.: 1,3,6) on the __Total number of installments__ field.
10. Set a minimum value to be applied, according to the value of each product.
11. The __Billing__ field will only be taken into account for installments with interest, so any option is valid.
12. Click __Save__.

### Installments with interest

![parcelamento-com-juros en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/how-to-configure-payment-conditions_3.png)

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the __+__ button.
3. Choose the Credit Card (any flag) payment method.
4. Fill the __Rule Name__ field with a name of your choice for identification.
5. Activate the condition in the __Status__ field.
6. On __Process with provider__, choose the configured provider.
7. If you want to use an anti-fraud system, select the option __Use anti-fraud solution__.
8. On __Prepaid in full or in installments?__, select __In installments__.
9. Set the number of sequential installments (ex .: 1-10) or individual (ex.:1,3,6) on the __Total number of installments__ field.
10. Set a minimum value to be applied, according to the value of each product.
11. Select the date of __Billing__ with beginning or end date (value used to calculate the value of the installment with interest).
12. Click __Set installment interest date__.
13. In __Interest(%)__, enter the amount of interest you want apply to each installment. The field accepts values with up to 2 decimals (`1,25` and `10,89` are examples of allowed values).
14. To choose between compound interest and simple interest, select __Compound interest applied. Change__. A selection box will appear allowing you to choose between the two options. 
15. Click __Save__.

![Juros - en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/how-to-configure-payment-conditions_4.png)

#### External Interest

In some countries, interest on installment purchases is charged directly by the financial institution. For these cases, you can activate the __External interest__ button. This button fills the amount of interest on the JSON sent to the connector with `null`. This `null` value indicates that interest will be charged at a later date by the financial institution. To activate this feature, click on the button __External interests__ in the configuration of installments with interests.

>ℹ️ Attention: the external interest functionality is only valid for some gateway affiliations (check that this option is available when registering the desired affiliation). Orders placed by affiliations that do not support this feature will be canceled in the system.

## Remove payment condition

1. In the VTEX Admin, go to __Store Settings > Payment > Settings__, or type __Settings__ in the search bar at the top of the page.
2. In the __Payment Conditions__ tab, click on the payment term you wish to remove.
3. Click on the trash can icon.

![Remove payment condition](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Payments/Payment Settings/how-to-configure-payment-conditions_5.png)
