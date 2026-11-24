---
title: 'Payment connector'
createdAt: 2018-02-08T21:31:32.599Z
updatedAt: 2026-10-30T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-the-connector
locale: en
hidden: false
---

A payment connector is the integration between the VTEX Payments module and a payment provider, such as a gateway, an acquirer, or a sub-acquirer. The connector implements the [Payment Provider Protocol](/en/docs/tutorials/payment-provider-protocol), which defines how VTEX and the provider exchange data for each transaction. The same provider can offer more than one connector, such as different versions of an integration or country-specific connectors.

For your store to offer a payment method, you need to configure the provider that will process it in **Store Settings > Payments > Providers**, as described in [Configuring payment providers](/en/docs/tracks/configuring-payment-connectors). A single payment method can be processed by multiple providers, and a single provider can process multiple payment methods. That's why, for each [payment condition](/en/docs/tutorials/how-to-configure-payment-conditions), you use the **Process with provider** field to choose which of the configured providers will process it.

To find out which connectors are available for your provider at VTEX, see the [List of Payment Providers by Country](/en/docs/tutorials/list-of-payment-providers-by-country), which also links to the setup tutorial for each provider. If no connector is available, the provider can develop one by following the guidelines in [Developing a payment connector for VTEX](/en/docs/tutorials/developing-a-payment-connector-for-vtex).

### Related articles

- [How the payments module works](/en/docs/tracks/how-the-payments-module-works)
- [Register payment and anti-fraud providers](/en/docs/tutorials/registering-gateway-affiliations)
