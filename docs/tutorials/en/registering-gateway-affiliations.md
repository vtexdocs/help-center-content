---
title: Registering gateway affiliations
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2023-03-21T20:55:24.198Z
publishedAt: 2023-03-21T20:55:24.198Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: registering-gateway-affiliations
legacySlug: registering-gateway-affiliations
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A gateway affiliation is a set of configurations that represent your contract with a payment provider (gateway, acquirer, or subacquirer). 

At VTEX, you can configure many payment providers and offer different payment methods and conditions to your customers.

To set up a gateway affiliation, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Payment** > **Settings**, or type **Settings** in the search bar at the top of the page.
2. On the __Gateway Affiliations__ tab, click the __+__ button.
3. Click on your preferred payment provider.
4. Fill in the __Application Key__ and __Application Token__ fields with the information provided by the payment provider.
5. If an alert message appears indicating the need to install the app, click on the __Install app__ button and follow the installation instructions. This message is only displayed for some types of gateway affiliations. 
6. Click on __Save__.

<div class = "alert alert-info">
  <p>If there are other fields to be filled in besides the <b>Application Key</b> and <b>Application Token</b> (Step 6), the gateway affiliation must be configured according to the specific tutorial. For more information, check the subsection <a href="https://help.vtex.com/en/subcategory/configuracoes-de-pagamentos--3tDGibM2tqMyqIyukqmmMw">Payment Settings</a>.</p>
</div>

<div class = "alert alert-danger">
The payment provider must provide the credentials used to populate the <strong>Application Key</strong> and <strong>Application Token</strong> fields to identify the store. No <a href="https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet">credentials generated in the Admin</a>, which start with <code>vtexappkey-</code>, should be used.
</div>

To configure the payment methods to be processed by the chosen payment provider, access [Configuring Payment Conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).

To set special conditions on payment methods, go to [Configuring payment special  conditions](https://help.vtex.com/en/tutorial/conditiones-especiales--tutorials_456?&utm_source=autocomplete).

