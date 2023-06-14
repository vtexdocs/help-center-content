---
title: Configuring payment connectors
id: 7pAEMAo4iqNHwYOarZ3zgm
status: PUBLISHED
createdAt: 2019-11-12T17:29:10.501Z
updatedAt: 2023-03-21T20:10:49.512Z
publishedAt: 2023-03-21T20:10:49.512Z
firstPublishedAt: 2019-11-24T21:05:50.533Z
contentType: trackArticle
productTeam: Financial
slug: configuring-payment-connectors
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: payments
---

The **Payments** module allows you to configure a number of **connectors**, which are the communication protocols that your store uses to enable data transmission with acquirers, sub-acquirers or gateways.

For your website to offer customers a certain payment method, you need to enable the **connector** that will communicate with the gateway responsible for processing.

Another important feature is the connections parity. Just as a payment method can communicate with multiple connectors, a connector can establish communication with multiple payment methods. Because of this possibility, you must configure the connector through **gateway affiliations**.

**Gateway affiliations** is a set of configurations that represents your contract with a payment gateway.

In addition to payment gateways, other affiliations include promissory, acquirers and sub-acquirers, for example. This allows you to decide which payment gateways will process the different types of transactions in your VTEX store.

The VTEX Payments Module supports multiple affiliations with one or more Payment Gateways of your choice to process different payment methods.

There are two ways to start accepting credit card payments:
- Affiliate with a payment gateway by Admin.
- Use [VTEX integrations](https://developers.vtex.com/vtex-rest-api/docs/payments-integration-guide) with payment methods.

## How to add gateway affiliations through Admin
1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. Click on the **Gateway Affiliations** option.
3. Click on the **+** button to add a new affiliation.
4. Choose your Payment Gateway.
5. Name your affiliation.
6. If an alert message appears indicating the need to install the app, click on the **Install app** button and follow the installation instructions. This message is only displayed for some types of gateway affiliations. 
7. Fill in the available fields with the contract data sent by the chosen Gateway.
8. Click on the **Save** button.

This connector must be associated with a payment condition. For more information and examples of how to receive installment or cash payments with different affiliations, read our article about [Payment Conditions](https://help.vtex.com/en/tutorial/how-to-configure-payment-conditions--tutorials_455).

If you want to check out the step by step of a specific connector, visit our [Tutorials & Solutions](https://help.vtex.com/en/tutorial/--531cHtUCUi3puRXNDmKziw) articles and search for the desired keyword.

