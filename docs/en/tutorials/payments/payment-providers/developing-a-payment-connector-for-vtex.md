---
title: 'Developing a payment connector for VTEX'
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: developing-a-payment-connector-for-vtex
locale: en
hidden: false
---

This article presents the requirements, infrastructure options, and best practices for partners who want to develop [payment connectors](/en/docs/tutorials/what-is-the-connector) compatible with the VTEX platform. The goal is to ensure an efficient, standardized integration that allows connectors to work across all stores on the platform.

This article is for:

- **Payment partner developers and technical teams:** Build and implement the integrations.
- **Product managers and integration teams:** Make sure connectors work consistently and run smoothly on the platform.
- **Technical support teams at payment providers, gateways, and anti-fraud companies:** Provide ongoing support and keep solutions stable and compliant.

## Overview

On VTEX, a payment connector is an external service that implements the [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). This protocol enables communication between the platform and payment providers (such as gateways, acquirers, and anti-fraud solutions), allowing merchants to process transactions in an integrated, standardized way without developing custom integrations.

What you'll find in this guide:

- [Technical requirements](#technical-requirements)
- [Benefits of PPP integration](#benefits-of-ppp-integration)
- [Connector development phases](#connector-development-phases)
- [Choosing the infrastructure for the connector](#choosing-the-infrastructure-for-the-connector)
- [Best practices in connector development](#best-practices-in-connector-development-reliability-and-added-value)

## Technical requirements

Partners who want to develop a payment connector on VTEX must implement the following features in their integrations:

- Payment authorization (synchronous or asynchronous)
- Authorization cancellation before settlement
- Settlement (immediate or scheduled)
- Refunds after settlement
- Asynchronous transaction status notifications that automatically update the payment status on VTEX
- [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) certification to process credit, debit, or [co-branded](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#store-cards-co-branded) cards, or a connector built with VTEX [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy), which doesn't require this certification
- High availability and regional coverage of the connector, as defined in the partnership agreement with VTEX
- Connector endpoints developed following API design best practices

## Benefits of PPP integration

Implementing connectors using the [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) offers the following benefits:

- **Optimization of technical effort:** Reduces the need for custom integrations.
- **Scalability:** You can add new payment methods quickly. Once published, a partner's connector becomes available to all VTEX merchants, increasing the solution's reach and adoption.
- **Higher sales conversion:** Provides flexibility to adapt to each merchant's unique characteristics and specific needs.
- **Centralized management:** Connector settings can be managed directly in the VTEX Admin.

## Connector development phases

[Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex) is the reference guide for the full connector creation process. In short, the partner implements the PPP endpoints, validates the connector with the [Payment Provider Test Suite test cases](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-homologation), and runs [purchase tests](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector) in a test store. When all test cases pass, the partner requests homologation by opening a ticket with [VTEX Support](https://supporticket.vtex.com/support), which requires an active contract and no outstanding payments to VTEX. After the connector is homologated and published, merchants can configure [payment methods](/en/docs/tutorials/registering-gateway-affiliations) for their stores in the [VTEX Admin](/en/docs/tutorials/vtex-admin-start-here).

## Choosing the infrastructure for the connector

When implementing the endpoints, the partner chooses whether to host the connector on their own infrastructure or on VTEX IO. Here are the characteristics of each option:

### Own infrastructure

#### Benefits

- **Freedom to choose development tools:** Since the developer fully controls the infrastructure, they can choose the tools that best fit their needs, such as programming languages, databases, and other technologies.

- **Receiving card data directly in the connector:** When developing a connector on your own infrastructure in compliance with [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) standards, you can receive card data directly if the business requires it. This means you don't need features like [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) to capture this data.

#### Aspects to consider

- **Infrastructure maintenance:** When you host the connector yourself, your development team handles system maintenance, scalability, and stability, which adds to the workload of keeping it running smoothly.

- **Less autonomy to make changes:** When developing a connector outside the VTEX IO infrastructure, you must contact the VTEX team to request changes, such as adding new payment methods or activating [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) payments. This process is subject to an SLA defined by the VTEX Payments team and may take up to 30 days.

### VTEX IO infrastructure

#### Benefits

- **[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):** A complete guide to building connectors on VTEX IO.

- **Use beyond payment methods:** VTEX IO can be used for other types of integrations besides payment methods, and allows you to add custom features to the connector when needed.

- **Multiple customization options:** Allows you to create frontend components for [Store Framework](https://developers.vtex.com/docs/guides/store-framework), such as homepage banners, category pages, upsell sections, and more.

- **Integrated development with the VTEX ecosystem:** Allows you to create apps that interact with all platform APIs and events, such as CRM data capture, cart and checkout details, logistics data, and more.

- **Access to events in real time:** VTEX IO apps can [receive and handle events](https://developers.vtex.com/docs/guides/services-2-handling-and-receiving-events) triggered by actions on the platform.

- **Simplified integration with Database as a Service:** Connects easily to databases such as VBase and [Master Data](/en/docs/tutorials/master-data) to manage your app's data efficiently.

- **Card data handling through Secure Proxy:** Connectors built on VTEX IO must use [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) to handle card data, so the connector doesn't access sensitive data directly. Since they use Secure Proxy, these connectors don't require [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) certification from the partner.

- **No infrastructure maintenance:** VTEX IO automates all infrastructure management, allowing developers to focus entirely on business logic rather than infrastructure issues.

- **Automatic updates through app versioning:** Connector updates happen automatically, with no intervention needed from the VTEX team.

#### Operational features

- **Serverless architecture:** VTEX IO runs directly in the VTEX environment, so no external infrastructure is needed.

- **GraphQL + REST APIs:** Supports multiple communication protocols for more flexible integrations.

#### Aspects to consider

- **No direct access to card data**: Since the VTEX IO environment isn't [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) certified, connectors developed on it don't access card data directly and must use [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) to handle it. If your business model needs to process card data before sending it to the acquirer, VTEX IO may not be the best option.

- **Limited language and framework support**: VTEX IO is compatible only with specific technologies, such as React, Node.js, and .NET. Developers unfamiliar with these tools will need to adapt, which may require additional time for learning and adjusting workflows.

- **Learning curve for VTEX IO**: [VTEX IO](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io) has specific characteristics, and developers without prior experience on the platform need time to learn them.

In both options, the connector implements the [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). The difference lies in hosting and customization: on their own infrastructure, the partner maintains the environment and can receive card data directly, while on VTEX IO the platform manages the infrastructure and offers more resources for advanced customization. The choice depends on the needs of each integration and the desired level of customization.

When choosing the infrastructure, consider your team's expertise as a strategic factor. Working with familiar technologies reduces risk, speeds up delivery, and improves operational efficiency.

## Best practices in connector development: reliability and added value

The following are best practices for developing payment connectors. These cover both technical and business aspects that are essential to ensure effective, high-quality integrations. These practices reflect VTEX's experience from years of collaboration with acquirers, agencies, and anti-fraud providers.

### Technical advantage: Idempotency

Implementing [idempotency](https://en.wikipedia.org/wiki/Idempotence) in a connector ensures that multiple requests with the same parameters have the same effect, regardless of how many times they're sent. This behavior is essential in critical flows, such as payment transactions. Additionally, VTEX automatically retries identical calls, which can result in multiple requests with the same `paymentId` to update the transaction status.

Connectors that support idempotency typically show the following operational characteristics:

- Duplicate charges are avoided when VTEX automatically resends a request, since each transaction is processed only once.

- The integration remains reliable even during network failures.

- When a merchant or acquirer reports a transactional issue, idempotency ensures that logs and responses are consistent and predictable.

- The number of unnecessary calls to the provider is reduced. If the payment has already been processed, the connector can return the previously recorded response, avoiding the need for a new request to the acquirer.

#### Implementing idempotency

To implement idempotency, follow these guidelines when developing the connector:

1. Make sure each transaction has a unique identifier (`paymentId`).
2. Store and reuse the request response (success, failure, or pending) if the same request is sent again.
3. Set an expiration time for idempotent records.
4. Ensure idempotency also applies to cancellations and refunds.
5. When using the VTEX IO infrastructure:
   - Consider using VBase to store the response based on the `paymentId` sent by the payment gateway through the [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) endpoint.
   - When handling a new request, the connector can check VBase to determine whether a similar request has already been recorded. If so, the previously recorded response can be returned. See this [implementation example](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Strategic business features

In addition to technical reliability, some functional features can significantly increase the commercial impact of a connector. Below, we highlight capabilities that directly contribute to operational success by promoting greater security, efficiency, and conversion.

#### Support for digital wallets (Apple Pay, NuPay, Google Pay, PayPal)

The growing adoption of digital wallets brings more security and convenience to consumers. Connectors that support these wallets offer the following benefits:

- **Smoother checkout:** Reduces payment friction, since card details are already stored in the digital wallet.
- **Enhanced security:** Biometric authentication and tokenization help prevent fraud and reduce chargebacks.
- **Higher conversion:** Fewer checkout steps mean lower cart abandonment.

#### Support for Google Pay with DPAN (Device Primary Account Number) tokenization

Supporting Google Pay with [DPAN tokenization](/en/docs/tutorials/dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow) offers key advantages for both security and user experience:

- **Greater security:** Actual card details aren't shared, which reduces the risk of fraud.
- **Less friction in recurring purchases:** DPANs can be reused for recurring payments without asking users for their details again.
- **Compatibility across devices:** The same card can be used across different devices without re-authentication.
- **Lower fraud costs:** Tokenization prevents credential misuse, which can reduce chargebacks.

> ⚠️ Support for Google Pay with DPAN is only available through the [VTEX native Google Pay wallet](/en/docs/tracks/google-pay).

#### Support for payments via POS (VTEX Sales App)

Payment connectors compatible with [POS](https://en.wikipedia.org/wiki/Point_of_sale) payments in the [VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) enable [omnichannel](/en/docs/tracks/unified-commerce-101) transactions across physical and digital channels. Key benefits include:

- **Integration across channels:** Customers can start a purchase online and complete it in the physical store with the same payment method.
- **Fewer operational errors:** Since payment is integrated with the VTEX Sales App, there's no need to manually record transactions in the [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning).
- **Better shopping experience:** Sales associates can process payments quickly in a single system.
- **Support for multiple payment options:** The POS can accept credit cards, debit cards, digital wallets, and Pix via QR code (Brazil).

#### Support for payout split

Connectors with the [payout split](/en/docs/tutorials/split-payment#payout-split) feature automatically divide a transaction amount among multiple recipients at authorization or settlement, depending on the provider's configuration. This feature is essential for marketplaces and omnichannel operations.

- **Automated payment distribution**: The transaction amount is automatically split, improving efficiency and reducing operational risk.
- **Lower costs and complexity**: Eliminates manual transfers, lowers administrative costs, and speeds up financial reconciliation.
- **Flexibility for different business models**: Supports models such as marketplace, ship from store, and dropshipping.

## Learn more

- [VTEX Payment Provider Protocol - Help Center](/en/docs/tutorials/payment-provider-protocol)
- [Secure Proxy - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](/en/docs/tutorials/master-data)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [What is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Integration example: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)
