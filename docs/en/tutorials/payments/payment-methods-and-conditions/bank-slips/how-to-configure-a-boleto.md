---
title: 'Configuring a boleto (for stores in Brazil)'
createdAt: 2017-04-27T22:04:55.249Z
updatedAt: 2026-10-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: how-to-configure-a-boleto
locale: en
hidden: false
---
On VTEX, your store can sell using boleto, a Brazilian payment method. To configure this payment method, follow these steps:

1. [Add the boleto provider](#adding-the-boleto-provider)
2. [Configure payment conditions](#configuring-payment-conditions)
3. [Validate the configuration](#validating-the-configuration)

## Before you begin

Before configuring a boleto, make sure your store has:

- A contract with a bank or payment provider that processes boleto. To find out which providers are available in your operation, go to [List of payment providers by country](/en/docs/tutorials/list-of-payment-providers-by-country).
- The credentials provided by the bank or payment provider, required to add the provider in the VTEX Admin.
- Permission to access the payments module in the VTEX Admin.

## Adding the boleto provider

Boleto is processed by the payment provider added to your store. To add this provider, follow these steps:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. On the Providers page, click the `New provider` button.
3. Type the name of the provider that will process the boleto into the search bar.
4. Complete the form fields with the data provided by your payment provider or bank.
5. Click `Save`.

> ℹ️ The fields displayed in the form vary depending on the provider. For instructions on each provider, open the corresponding article in the [Payment provider list by country](/en/docs/tutorials/list-of-payment-providers-by-country).

## Configuring payment conditions

To create the boleto payment condition that will be displayed at checkout, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Settings**, or type **Settings** in the search bar at the top of the page.
2. In the **Payment Conditions** tab, click the add condition button `+`.
3. In **Boleto**, select the option **Boleto Bancário**.
4. Activate the condition in the **Status** field.
5. In **Process with provider**, select the previously configured provider.
6. (Optional) Define [special payment conditions](/en/docs/tutorials/special-conditions) for boleto.
7. Click `Save`.

## Validating the configuration

1. Wait up to 10 minutes after saving the payment condition.
2. At checkout, confirm that **Boleto Bancário** is displayed as a payment option.

If the option isn't displayed after this target, see [Troubleshooting](#troubleshooting).

## Boleto due date and cancellation

Some payment providers allow you to set the boleto expiration date, which determines how many days the customer has to pay it, directly on the provider's configuration page. When the provider doesn't offer this field in the VTEX Admin, you'll need to handle the configuration directly with the provider's support team.

The cancellation period for an order with an unpaid boleto depends on the boleto's validity period and the inventory reservation release period. To learn how both deadlines are calculated, go to [How long does it take to cancel an order with an unpaid "boleto"?](/en/docs/tutorials/how-long-does-it-take-to-cancel-an-order-with-an-unpaid-boleto).

## Troubleshooting

If the boleto isn't displayed at checkout after 10 minutes, check the following possible causes:

- **Inactive payment condition**: In the **Payment Conditions** tab, confirm that the **Status** field of the boleto payment condition is active.
- **Provider doesn't support boleto**: Confirm with your payment provider or bank whether boleto is available in their system for your store.
- **Incorrect provider in the condition**: Confirm that the **Process with provider** field indicates the provider that processes the boleto.

## Next steps

- [How are the payments made through boletos approved?](/en/docs/tutorials/how-are-the-payments-made-through-boletos-approved)
- [Approving payment of the bank payment slip](/en/docs/tutorials/approving-payment-of-the-bank-payment-slip)
- [How long does it take to cancel an order with an unpaid "boleto"?](/en/docs/tutorials/how-long-does-it-take-to-cancel-an-order-with-an-unpaid-boleto)
- [Changing the logo on the boleto](/en/docs/tutorials/changing-the-logo-on-the-boleto)
