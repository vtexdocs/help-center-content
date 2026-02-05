---
title: 'Developing a payment connector for VTEX'
id: 4QXXdhv3HQSMbvzTbgnv0G
status: PUBLISHED
createdAt: 2025-05-28T10:29:13.599Z
updatedAt: 2025-06-17T11:08:47.238Z
publishedAt: 2025-06-17T11:08:47.238Z
firstPublishedAt: 2025-05-29T17:10:05.040Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: developing-a-payment-connector-for-vtex
legacySlug: developing-a-payment-connector-for-vtex
locale: en
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

This article is a comprehensive guide for partners looking to develop [payment connectors](/en/docs/tutorials/what-is-the-connector) compatible with the VTEX platform. It focuses on enabling efficient, standardized integrations that allow connectors to work seamlessly across all stores on the platform.

By following these guidelines, partners can ensure their integrations meet the highest quality standards, delivering value to both merchants and their customers while fostering innovation and competitiveness in digital commerce.

This guide is intended for:

- __Payment partner developers and technical teams:__ For implementing efficient integration solutions. 
- __Product managers and integration teams:__ For ensuring the cohesion and effective operation of connectors within the platform.
- __Technical support teams from payment providers, gateways, and anti-fraud solutions:__ For providing ongoing support to maintain the stability and compliance of solutions.

## Overview

On VTEX, a payment connector is an external service that implements the [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol). This protocol enables communication between the platform and payment providers (such as gateways, acquirers, and anti-fraud solutions), enabling merchants to process transactions in an integrated and standardized way, without the need to build custom integrations.

What you'll find in this guide:

- [Mandatory technical requirements](#mandatory-technical-requirements)
- [Benefits of PPP integration](#benefits-of-ppp-integration)
- [Connector development phases](#connector-development-phases)
- [Choosing the infrastructure for the connector](#choosing-the-infrastructure-for-the-connector)
- [Best practices in connector development](#best-practices-in-connector-development-reliability-and-added-value)

## Mandatory technical requirements

Partners who want to develop a payment connector on VTEX must implement the following features in their integrations:

- Payment authorization (synchronous or asynchronous).
- Cancellation of authorizations before settlement.
- Settlement (immediate or scheduled).
- Refund after settlement, if the transaction has already been completed.
- Asynchronous transaction status notifications (automatic update of payment status on VTEX).
- Compliance with [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance), certification, if you want to process payment methods such as credit, debit, or [co-branded](/en/tracks/payments--6GAS7ZzGAm7AGoEAwDbwJG/1wWt35dRwEboRs1nrSx7G0#store-cards-co-branded) cards. If you don't have this certification, you must implement the connector using the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) solution of VTEX.
- High availability and regional coverage of the connector, in accordance with the provisions set forth in the partnership agreement signed with VTEX.
- Connector endpoints developed according to best practices for API creation.

## Benefits of PPP integration

Implementing connectors using the [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) offers the following benefits:

- __Optimization of technical effort:__ Reduces the need to develop custom integrations.
- __Scalability:__ You can add new payment methods quickly. Once published, a partner's connector becomes available to all VTEX merchants, increasing the solution's reach and adoption.
- __Higher sales conversion:__ Provides flexibility to adapt to the particularities and specific needs of each merchant.
- __Centralized management:__ Connector configuration can be managed directly in the VTEX Admin.

## Connector development phases

The development process for a VTEX connector can be divided into four phases:

<blockquote><ui>1. **API implementation:** Develop the connector's endpoints according to the [VTEX Payment Provider Protocol (PPP)](https://developers.vtex.com/docs/api-reference/payment-provider-protocol), incorporating definitions such as operating environment, infrastructure, and purchase flow.</ui>

  <blockquote><ui>2. **Testing:** Validate the connector through predefined test cases to make sure it works properly. This phase is crucial, as any identified errors may impact the delivery SLA originally planned.</ui>

<blockquote>> ℹ️ After completing the [initial tests](/en/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#4-testing) and submitting the connector for homologation, we recommend running [purchase flow tests](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework#placing-an-order-with-your-new-connector) in a test environment.  This helps detect inconsistencies that could affect the homologation process.</blockquote>

<blockquote><ui>3. **Homologation:** The partner developing the connector opens a request, which will be handled by the VTEX Partner Support team. From this stage, the internal validation and publication process of the connector in the VTEX environment begins.</ui>

<blockquote>> ⚠️ To initiate the [homologation process for a payment connector](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex#7-homologation-and-go-live) your company must have an active contract and no outstanding financial obligations with VTEX.</blockquote>

<blockquote><ui>4. **Connector activation:** Once approved and published, merchants can configure the [payment methods](/en/docs/tutorials/registering-gateway-affiliations) in their stores via the [VTEX Admin](/en/docs/tutorials/vtex-admin-start-here).</ui></blockquote>

For more details on the connector creation process, see [Integrating a new payment provider on VTEX](https://developers.vtex.com/docs/guides/integrating-a-new-payment-provider-on-vtex). 

## Choosing the infrastructure for the connector

During the API implementation phase, the partner can define the type of infrastructure to use when integrating the connector with VTEX.

See below the characteristics of each available infrastructure option:

### Own infrastructure

#### Benefits:

- __Freedom to choose development tools:__ Since the infrastructure is fully managed by the developer, they have complete flexibility to select the tools that best meet their needs, such as programming languages, databases, and other technological resources.

- __Receiving card data directly in the connector:__ When developing a connector within your own infrastructure, and in compliance with [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)standards, you may receive card data directly if required by the business. This eliminates the need to use features such as the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) to capture this information. 

#### Aspects to consider:  

- __Need for infrastructure maintenance:__ When developing the connector on your own infrastructure, the development team is responsible for maintaining the system, ensuring scalability, and guaranteeing stability. This increases the workload needed to ensure its proper functioning.

- __Less autonomy to make changes:__ When developing a connector outside the VTEX IO infrastructure, you must contact the VTEX team to request changes such as adding new payment methods or enabling [split](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol) payments. This process is subject to an SLA defined by the VTEX Payments team and may take up to 30 days.

### VTEX IO infrastructure

#### Benefits:

- __[Payment Provider Framework (PPF)](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework):__ A complete guide to building connectors using VTEX IO.

- __Total flexibility:__ Can be used for any type of integration, not limited to payment methods. It also allows for easier implementation of additional customizations in the connector when needed.

- __Multiple customization options:__ Supports the creation of frontend components for the [Store Framework](https://developers.vtex.com/docs/guides/store-framework), including banners on the store homepage, category pages, upsell sections, and more.

- __Integrated development with the VTEX ecosystem:__ Enables the creation of apps that interact with the platform's full set of APIs and events, such as CRM data capture, cart and checkout details, logistics information, and more.

- __Real-time event access:__ Uses the [Event Bus](https://medium.com/dev-axe/aws-amazon-eventbridge-event-bus-explained-ad52ec36d185) to track actions performed on the platform.

- __Simplified integration with database as a service:__ Easily connects to services like VBase and [Master data](/en/docs/tutorials/master-data) to manage application data efficiently.

- __No need for PCI-DSS developers:__ Connectors built on VTEX IO use [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) for card data processing, ensuring that the connector doesn't access sensitive information directly. However, the partner organization still needs to be [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) compliant.

- __No infrastructure maintenance:__ VTEX IO automates all infrastructure management, allowing developers to focus entirely on business logic without dealing with technical infrastructure issues.

- __Automated update via app versioning:__ Connector updates are performed automatically and don't require manual intervention from the VTEX team. 

#### Operational resources:

- __Serverless structure:__ VTEX IO runs directly within the VTEX environment, eliminating the need for external infrastructure.

- __GraphQL + REST APIs:__ Supports multiple communication protocols, offering flexibility for integration.

#### Aspects to consider:

- __No direct access to card data through the connector__: VTEX IO isn't compatible with [PCI-DSS](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance) requirements. As a result, connectors developed on this platform don't have direct access to card data. To process this information, you need to use the [Secure Proxy](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy) feature. If the business model needs to process card data before sending it to the acquirer, VTEX IO may not be the best option, as it doesn't support this level of access.

- __Limitations on supported languages and frameworks__: VTEX IO is compatible only with specific technologies, such as React, Node.js, and .NET. Developers unfamiliar with these tools will need to adapt, which may require additional time for learning and adjusting workflows.

- __Learning curve for VTEX IO__: While VTEX IO is intuitive and user-friendly, it includes specific features that developers need to understand in order to take full advantage of its capabilities. For those without prior experience, it will take some time to adapt and learn the specifities of the platform.

The decision to develop a connector using your own infrastructure or VTEX IO depends on the specific needs of the integration and the level of customization required. The [PPP](https://developers.vtex.com/docs/api-reference/payment-provider-protocol) is required for payment methods, while VTEX IO provides greater flexibility for advanced customizations.

When defining the infrastructure, consider the know-how of the team as a strategic factor. Working with familiar technologies reduces risk, speeds up delivery, and improves operational efficiency.

## Best practices in connector development: reliability and added value

The following are best practices for developing payment connectors. These cover both technical and business aspects that are essential to ensure effective, high-quality integrations. The practices listed below are based on years of collaboration with acquirers, agencies, and anti-fraud providers, always with the goal of delivering reliable, high-performance solutions.

### Technical differential: Idempotence

Implementing [idempotence](https://en.wikipedia.org/wiki/Idempotence) in a connector ensures that multiple identical requests with the same parameters produce the same effect, regardless of how many times they are sent. This behavior is essential in critical flows, such as transactional ones. Additionally, VTEX automatically retries identical calls, which can result in multiple requests with the same `paymentId` to update the transaction status.

Connectors that support idempotency typically show the following operational characteristics:

- Duplicate payments are avoided if the same request is sent again automatically. This behavior ensures that a transaction is processed only once to avoid duplicates. If the connector isn't idempotent, duplicate charges may occur, causing inconsistencies.

- In cases of network (communication) failure, the reliability of the integration is ensured.

- When a merchant or acquirer reports a transactional issue, idempotence ensures that logs and responses are consistent and predictable.

- The number of unnecessary calls to the provider is reduced. If the payment has already been processed, the connector can simply return the previously recorded response, avoiding the need for a new request to the acquirer.

#### Implementing idempotency

To implement idempotency, the following specifications must be followed when developing the connector: 

1. Make sure each transaction has a unique identifier (`paymentId`).
2. Store and reuse the request response (success, failure, or pending) if the same request is sent again.
3. Set an expiration time for idempotent records.
4. Ensure idempotency also applies to cancellations and refunds.
5. When using the VTEX IO infrastructure:
   - Consider using VBase to store the response based on the `paymentId` received from the payment gateway through the [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) route.
   - When handling a new request, the connector can check VBase to determine whether a similar request has already been recorded. If so, the previously recorded response can be returned. See this [implementation example](https://github.com/vtex-apps/payment-provider-example/blob/main/node/connector.ts#L53).

### Strategic resources for the business

In addition to technical reliability, some functional features can significantly increase the commercial impact of a connector. Below, we highlight capabilities that directly contribute to operational success by promoting greater security, efficiency, and conversion.

#### Support for digital wallets (Apple Pay, Google Pay, PayPal, NuPay)

The growing adoption of digital wallets brings more security and convenience to consumers. Connectors that support these wallets offer the following benefits:

- __Smoother checkout:__ Reduces payment friction, as card details are already stored in the digital wallet.
- __Enhanced security:__ Biometric authentication and tokenization help prevent fraud and reduce chargebacks.
- __Higher conversion:__ Fewer steps during checkout lead to lower cart abandonment rates.  

#### Support for Google Pay with DPAN (Device Primary Account Number) tokenization

Supporting Google Pay with [DPAN tokenization](/en/docs/tutorials/dpan-and-fpan-understanding-security-in-the-online-tokenized-payment-flow) offers key advantages for both security and user experience:  

- __Greater security:__ Actual card details aren't shared, reducing the risk of fraud.
- __Less friction in recurring purchases:__ DPANs can be reused for recurring payments without needing to request user details again.
- __Compatibility with multiple devices:__ Allows the same card to be used across different devices without requiring re-authentication.
- __Reduced fraud costs:__ Tokenization prevents credential misuse, helping reduce the number of chargebacks.

> ⚠️ Support for Google Pay with DPAN is only available through the [VTEX native Google Pay Wallet](/en/tracks/digital-wallet-e-wallet--6X8YyZBoVJpz5R8oXciTyu/61JMBvM5Vanqj6RaJsP8CT).  

#### Support for payments via POS (VTEX Sales App)

Payment connectors compatible with [POS](https://en.wikipedia.org/wiki/Point_of_sale) in [VTEX Sales App](/en/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc) enable [Omnichannel](/en/tracks/unified-commerce-strategies--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) transactions between physical and digital environments. Key benefits include:

- __Integration between channels:__ Customers can start a purchase online and complete it in the physical store using the same payment method.
- __Reduction of operational errors:__Since payment is integrated with VTEX Sales App, there's no need to manually record transactions in the [ERP](https://en.wikipedia.org/wiki/Enterprise_resource_planning).
- __Improved shopping experience:__ Sales associates can process payments quickly within a single system.
- __Support for different payment options:__ The POS can accept credit cards, debit cards, digital wallets, and Pix via QR code (Brazil).

#### Support for payout split

Connectors with the [payout split](/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx#payout-split) feature allow automatic division of a transaction amount among different recipients — either at the time of authorization or settlement — depending on the provider's configuration. This feature is essential for marketplaces and omnichannel operations.

- __Automated payment distribution__: The transaction amount is automatically split, increasing efficiency and reducing operational risk.
- __Cost and complexity reduction__: Eliminates manual transfers, lowers administrative costs, and speeds up financial reconciliation.
- __Flexibility for different business models__: Supports operations with models such as marketplace, ship-from-store, and dropshipping.

## Learn more

- [VTEX Payment Provider Protocol - Help Center](/en/docs/tutorials/payment-provider-protocol)
- [Secure Proxy - Help Center](https://developers.vtex.com/docs/guides/payments-integration-secure-proxy#custom-supported-operators)
- [VTEX Master Data - Help Center](/en/docs/tutorials/master-data)
- [Implementing a Payment Provider - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-implementing-a-payment-provider)
- [Payment Provider Framework - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-framework)
- [Split Payouts on Payment Provider Protocol - Dev. Portal](https://developers.vtex.com/docs/guides/split-payouts-on-payment-provider-protocol)
- [PCI-DSS - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-pci-dss-compliance)
- [Payment apps - Dev. Portal](https://developers.vtex.com/docs/guides/payments-integration-payment-app)
- [Whats is VTEX IO - Dev. Portal](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-vtex-io)
- [Exemplo de integração: payment-provider-example - GitHub](https://github.com/vtex-apps/payment-provider-example)
- [Developing services on VTEX IO - Learning Center](https://learn.vtex.com/docs/course-service-course-lang-en)

