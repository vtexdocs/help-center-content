---
title: 'Configuring payment conditions'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2026-07-03T00:00:00.000Z
publishedAt: 2025-04-23T13:29:53.447Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
legacySlug: how-to-configure-payment-conditions
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Payment conditions are the payment methods displayed on the website for completing the purchase. This feature allows you to configure options such as installments, interest, special conditions, and others.

## How to configure

Before configuring a payment condition, you need to add a [payment integration](https://help.vtex.com/docs/tutorials/registering-gateway-affiliations).

Once your provider is defined, for any payment condition you plan to choose, you'll always need to:

- Complete the **Condition name** field with the name of your choice for identification.
- Activate the condition in the **Status** field.
- In **Process with provider**, indicate the provider that will process this payment condition.
- Define whether you want to use an [anti-fraud solution](https://help.vtex.com/docs/tutorials/how-to-configure-the-anti-fraud) in **Use anti-fraud solution**.

You can also define whether the payment will be in full or in installments, with or without interest, or with [special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions).

## Information about installments and interest

### Condition name

Internal identifier of the payment condition (rule) in the Admin. You can create multiple rules for the same payment method (example: "Visa 10 installments no interest" and "Visa 12 installments with interest"), as long as they are differentiated by card network, installments, or [special conditions](https://help.vtex.com/docs/tutorials/special-conditions).

### Total number of installments

Defines how many installment options will be available:

- **Interval:** `1-10` creates options from 1 to 10 installments.
- **Single:** `1,3,6` creates only the 1, 3, and 6 installment options.

### Minimum installment

The **Minimum installment** field defines the minimum amount for each installment. If the calculated amount of an installment falls below this limit, it won't be displayed. For example, with a minimum installment of $50 and an order of $200, no more than 4 installments will be offered ($50 per installment), even if up to 10 installments have been configured.

### Billing

Applies only to installments with interest. Defines whether the charge is calculated at the beginning or end of each period, impacting the final installment amount. See the formulas in [How do you calculate payments in installments with compound interest?](https://help.vtex.com/docs/tutorials/how-do-you-calculate-payments-in-installments-with-compound-interest).

### Interest per installment

When you click **Set installment interest rate**, a list with interest fields is displayed for each number of installments. You can define different surcharges per option (example: 1.99% for 6 installments and 2.49% for 12 installments). For more information about the differences between simple and compound interest, see [How to choose the type of interest for a payment condition](https://help.vtex.com/docs/tutorials/how-to-choose-the-type-of-interest-for-a-payment-condition).

### Displaying installments at checkout

The purpose of installments is to reduce the amount paid each month. If, by increasing the number of installments, the installment amount doesn't decrease compared to an option with fewer installments, the platform doesn't display that option at checkout since it doesn't offer an advantage for the customer.

This behavior can occur, for example, when rounding the installment amount results in the same amount for different numbers of installments.

> ℹ️ If you configured more installments than what is being displayed at checkout, check the **Minimum installment**, the order amount, and the interest rates configured for each number of installments.

> ⚠️ Any changes to payment conditions may take up to 10 minutes to reflect on the store checkout.

In the steps below, we'll use a credit card as the example of a payment condition.

### In full

![pagamento-a-vista pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_1.png)

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the **+** button.
3. Choose the credit card payment method (any card network).
4. Complete the **Condition name** field with the name of your choice for identification.
5. Activate the condition in the **Status** field.
6. In the **Process with provider** field, choose the provider you configured. Important: Before activating the payment condition, check with the gateway or acquirer whether the card network/payment method is available in their system.
7. If you want to use an anti-fraud solution, select the **Use anti-fraud solution** option.
8. In the **In full or in installments?** field, select **In full**.
9. Click **Save**.

> ℹ️ In step 3, you can choose other payment methods such as debit, cobranded, and private label cards or notes payable, boleto, Pix, among others.

### Installments with no interest

![parcelamento-sem-juros pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_2.png)

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the **+** button.
3. Choose the credit card payment method (any card network).
4. Complete the **Condition name** field with the name of your choice for identification.
5. Activate the condition in the **Status** field.
6. In the **Process with provider** field, choose the provider you configured.
7. If you want to use an anti-fraud solution, select the **Use anti-fraud solution** option.
8. In the **In full or in installments?** field, select **In installments**.
9. Configure the number of interval installments (example: 1-10) or single installments (example: 1,3,6) in the **Total number of installments** field.
10. Define the **Minimum installment** to set the minimum amount for each installment. If the calculated amount of an installment falls below this limit, it won't be displayed at checkout.
11. The **Billing** field will only be taken into account for installments with interest. This means any option is valid.
12. Click **Save**.

### Installments with interest

![parcelamento-com-juros pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_3.png)

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the **+** button.
3. Choose the credit card payment method (any card network).
4. Complete the **Condition name** field with the name of your choice for identification.
5. Activate the condition in the **Status** field.
6. In the **Process with provider** field, choose the provider you configured.
7. If you want to use an anti-fraud solution, select the **Use anti-fraud solution** option.
8. In the **In full or in installments?** field, select **In installments**.
9. Configure the number of interval installments (example: 1-10) or single installments (example: 1,3,6) in the **Total number of installments** field.
10. Define the **Minimum installment** to set the minimum amount for each installment. If the calculated amount of an installment falls below this limit, it won't be displayed at checkout.
11. In **Billing**, select the charge date as the beginning or end of the period (value used to calculate the installment amount with interest).
12. Click **Set installment interest rate**.
13. In **Interest (%)**, configure the interest rate for each number of installments. You can define different surcharges per option (example: 1.99% for 6 installments and 2.49% for 12 installments). The field accepts values with up to 2 decimal places, for example, `1.25` or `10.89`.
14. To choose between compound and simple interest, click **Compound interest applied. Change**. A dropdown menu will appear offering both options.
15. Click **Save**.

![Juros - pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_4.png)

## Removing a payment condition

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the payment condition you want to remove.
3. Click the trash can icon.

![Remove payment condition](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_5.png)

## Learn more

- [Configuring special payment conditions](https://help.vtex.com/docs/tutorials/special-conditions)
- [How to choose the type of interest for a payment condition](https://help.vtex.com/docs/tutorials/how-to-choose-the-type-of-interest-for-a-payment-condition)
- [How do you calculate payments in installments with compound interest?](https://help.vtex.com/docs/tutorials/how-do-you-calculate-payments-in-installments-with-compound-interest)