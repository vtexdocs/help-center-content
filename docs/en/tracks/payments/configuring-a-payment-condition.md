---
title: 'Configuring a payment condition'
id: 6bzGxlz4inf8sKmvZ1c7i3
status: PUBLISHED
createdAt: 2019-11-26T17:47:27.426Z
updatedAt: 2024-03-13T21:42:43.233Z
publishedAt: 2024-03-13T21:42:43.233Z
firstPublishedAt: 2019-11-26T20:43:48.321Z
contentType: trackArticle
productTeam: Financial
slugEN: configuring-a-payment-condition
locale: en
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
---

The next step is to configure payment conditions.

But first we must clarify the difference between payment methods and payment conditions.

## Payment methods
The payment methods are the ways that can be used for money to change hands, making  the buying and selling transactions possible. VTEX supports a variety of payment methods, such as credit and debit cards, "boleto bancário" (popular Brazilian off-line payment method), digital wallet, voucher ("vale") and many others.

## Payment conditions
Payment conditions are rules that must be followed by a person who wants to buy in your store. In practice, payment conditions are the options that appear on the user's screen at checkout.

That said, we can move on to configuring the payment conditions.

## General Settings

To set up a payment condition, you first need to register a payment provider, as described in [Register payment and anti-fraud providers](/en/tutorial/registering-gateway-affiliations--tutorials_444).

Regardless of the payment condition to be chosen, the following actions must always be carried out:
- Define the name of the rule according to what it represents, to help identify it;
- Activate it;
- Define which payment provider this condition will be processed by;
- Define whether or not you will use [anti-fraud](/en/tutorial/como-configurar-antifraude--tutorials_446).

Furthermore, for some payment conditions it may be necessary to define whether payment will be made in cash or in installments, with or without interest and [special conditions](/en/tutorial/special-conditions--tutorials_456).

As the __Credit Card__ is a payment method that allows you to apply all these features, see below how to configure it:

## Prepayment in full

Before activating the payment condition, you must check with the gateway or acquirer if the card brand or the payment method are available on their system.

That done, follow the instructions:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on **Payment Conditions**.
3. Click on the **+** button.
4. Choose a credit card brand.
5. Name the rule in the **Rule Name** field.
6. Activate the condition in the **Status** field.
7. In the **Process with provider** field, choose the previously configured provider.
8. In the **Prepaid in full or in installments?** field, select the **Prepaid in full** option.
9. Click **Save**.

## In installments

The setting for payments in installments are very similar to the ones for prepayments in full. However, for this option, it is possible to define whether payments will occur: without interest, with interest or via automatic installment.

### Without interest

It is noteworthy that the field **Billing** will only be taken into account for payments in installments with interest. Therefore, any option is valid.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on **Payment Conditions**.
3. Click on the **+** button.
4. Choose a credit card brand.
5. Name the rule in the **Rule Name** field.
6. Activate the condition in the **Status** field;
7. In the **Process with provider** field, choose the previously configured provider.
8. In the **Prepaid in full or in installments?** field, select the **In installments** option.
9. Configure the number of sequential or individual installments in the **Total installments** field.
10. Define a minimum installment to be applied according to the value of each product.
11. Click **Save**.

### With interest 

If you decide to configure a payment method that accepts installments with interest, this field accepts values up to two decimal places. For example, 1.25 or 10.89 are possible values.

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on **Payment Conditions**.
3. Click on the **+** button.
4. Choose a credit card brand.
5. Name the rule in the **Rule Name** field.
6. Activate the condition in the **Status** field.
7. In the **Process with provider** field, choose the previously configured provider.
8. In the **Prepaid in full or in installments?** field, select the **In installments** option.
9. Configure the number of sequential or individual installments in the **Total installments** field.
10. Define a minimum installment to be applied according to the value of each product.
11. Select the billing date (begin or end of the period).
12. Click on the **Set installment rate** button.
13. Enter the amount of interest you want to apply to each installment.
14. Click on **Compound interest applied. Change** to choose between compound or simple interest.
15. Click **Save**.

### Automatic Installment
The Automatic Installment option allows you to configure the details of the installments directly in the payment provider (outside the VTEX environment).
To enable this option, select “Yes” in the **Use external installments** field during the [provider setup](/en/tutorial/afiliacoes-de-gateway--tutorials_444) step.

![automaticinstallment](https://images.ctfassets.net/alneenqid6w5/3ErHSFlSGyUwbLzJWaUlXw/965203e926177f608618ed0048411de6/parcelamentoautomaticous.JPG)

After enabling automatic installment payment on the provider, follow these steps:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on **Payment Conditions**.
3. Click on the **+** button.
4. Choose a credit card brand.
5. Name the rule in the **Rule Name** field.
6. Activate the condition in the **Status** field.
7. In the **Process with provider** field, choose the previously configured provider.
8. If you want to use an anti-fraud system, select the option **Use anti-fraud**.
9. Select an anti-fraud option. 
10. In the **Prepaid in full or in installments?** field, select the **Automatic** option.
11. Click **Save**.

