---
title: "Why isn't the order invoiced on the marketplace?"
excerpt: "The invoice may be in VTEX while the marketplace still shows an earlier status. Check Integrations logs and send any required tax invoice access key."
id: frequentlyAskedQuestions_715
status: PUBLISHED
createdAt: 2017-04-27T22:28:23.898Z
updatedAt: 2020-05-11T15:48:16.337Z
publishedAt: 2020-05-11T15:48:16.337Z
firstPublishedAt: 2017-04-27T23:02:33.970Z
contentType: frequentlyAskedQuestion
productTeam: Marketplace
author: authors_3
slugEN: why-isnt-the-order-invoiced-on-the-marketplace
locale: en
legacySlug: why-isnt-the-order-invoiced-on-the-marketplace
---

This happens when the tax invoice and the order invoice are already in VTEX, but the marketplace still shows an earlier status.

## Check Integrations

Issues can occur at any stage of the purchase flow. Integrations logs the result so you can see what failed and how to fix it.

[Learn how to analyze integration errors in Integrations](/en/docs/tutorials/checking-integrations-in-bridge).

## Enter the access key with the tax invoice

To invoice orders on CNova, you must provide the tax invoice access key when you add the invoice to the order. Otherwise, you cannot enter tracking data on VTEX for CNova.

In that case, the order can reach `Invoiced` only on VTEX. You then have to update the status manually in the CNova back office.

The tax invoice access key is used to look up the electronic tax invoice (NF-e) and confirm that it exists. The field name is **Invoice Key**:

![ChaveDeAcesso](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/marketplace/why-isnt-the-order-invoiced-on-the-marketplace_1.png)

> The access key is generated when the tax invoice is issued in the ERP. If your store uses an ERP, request the key from that system.

You can enter this value in the Admin or through the [invoice notification API](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice), in the **invoiceKey** field.
