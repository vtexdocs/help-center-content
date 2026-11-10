---
title: 'Adding payment and anti-fraud providers'
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2026-10-15T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: registering-gateway-affiliations
locale: en
hidden: false
---

VTEX allows you to configure different types of providers, such as gateways, acquirers, sub-acquirers, orchestrators, and payment service providers (PSPs), allowing you to offer your customers different payment methods and conditions, as well as anti-fraud protection services. Previously, these settings were known in our system as gateway affiliations.

> ℹ️ To understand what each institution involved in payment operations does, see [Financial agents in the payment flow](/en/docs/tutorials/financial-agents-in-the-payment-flow).

The provider management screen allows you to:

- [Add new providers](#adding-providers)
- [View added providers](#viewing-added-providers)
- [Edit provider settings](#editing-provider-settings)

![interface_provedor_EN_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_1.jpg)

## Adding providers

To add a new payment or anti-fraud provider to your store, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.

2. Click `New Provider`.

3. Type the name of the payment or anti-fraud provider in the search bar and click it.

4. Complete the **App key** and **App token** fields with the information from the provider.

   > ⚠️ For some connectors, a message will ask you to install the app. If it appears, click `Install app` and follow the instructions.

5. Click `Save`.

> ℹ️ Some providers require fields other than **App key** and **App token** (step 4) or the installation of an app. In these cases, configure the provider according to its specific tutorial, available in [List of payment providers by country](/en/docs/tutorials/list-of-payment-providers-by-country).

> ❗ The credentials used to complete the **App key** and **App token** fields must be provided by the payment provider to identify the store. Don't use [credentials generated in the Admin](/en/docs/tutorials/api-keys), which start with `vtexappkey-`.

After saving, the provider is displayed on the provider management screen. Next, in [Payment conditions](/en/docs/tutorials/how-to-configure-payment-conditions), define which payment methods it will process and, if needed, set up [special conditions](/en/docs/tutorials/special-conditions) for those methods.

![interface_provedor_EN_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_2.JPG)

## Viewing added providers

The main provider management screen, available in the VTEX Admin under **Store Settings > Payment > Providers**, displays all the payment or anti-fraud providers added to a store. To quickly access a specific provider, you can search by name or apply filters.

### Searching for providers

To find providers by name, go to the provider management page and type the provider's name in the search bar or in the **Name** filter.

![interface_provedor_EN_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_3.JPG)

### Filtering providers

To display providers using filters, go to the provider management page and apply one or more of the filters below:

- **Type**: Select whether to display payment providers, anti-fraud providers, or both.

![interface_provedor_EN_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_4.JPG)

- **Environment**: Select providers by the operating environment type (production or test).

![interface_provedor_EN_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_5.JPG)

> ❗ To clear the applied filters and see all the providers in the store again, click the `Clear all` button.

## Editing provider settings

To edit the settings of payment or anti-fraud providers already added to the store, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Payment > Providers**, or type **Providers** in the search bar at the top of the page.
2. Click the payment or anti-fraud provider you want.
3. On the provider configuration screen, click `Edit`.
4. Make the necessary changes and click `Save`.

![interface_provedor_EN_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/payments/payment-providers/registering-gateway-affiliations_7.JPG)

> ❗ Changes to a provider's settings, such as the **App key** and **App token** credentials, processing mode, refund type, or the **Activate test mode** option, affect the payments it processes in the store. Before saving, confirm with the provider that the new information is correct.
