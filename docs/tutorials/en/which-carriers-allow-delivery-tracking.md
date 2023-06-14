---
title: 'Which carriers allow delivery tracking?'
id: frequentlyAskedQuestions_303
status: PUBLISHED
createdAt: 2019-01-24T20:45:52.473Z
updatedAt: 2023-03-31T01:16:49.121Z
publishedAt: 2023-03-31T01:16:49.121Z
firstPublishedAt: 2019-01-24T22:12:09.421Z
contentType: tutorial
productTeam: Post-purchase
author: authors_2
slug: which-carriers-allow-delivery-tracking
legacySlug: which-transport-companies-enable-make-it-possible-to-track-delivery
subcategory: 7fTH6bP0C4IaM8qWi0kkQC
---

After [reporting the invoice](https://help.vtex.com/en/tutorial/como-inserir-a-nota-fiscal--tutorials_193), it is possible to obtain the delivery data in the order. This data corresponds to the carrier name, tracking code, and tracking URL, and can be entered either via the interface or via the Order Management module API.

## Integration with carriers

As detailed [in this known issue](https://help.vtex.com/en/known-issues/a-integracao-de-rastreamento-nao-esta-atualizando-de-forma-automatica), automatic tracking updates by integrated carriers **is currently disabled** on VTEX stores.

Therefore, automatic verifications on the delivery status **are not being performed** and emails with the updated status **are not being sent** to the clients, even if stores have previously configured integrated carriers in VTEX natively.

For this reason, regardless of the chosen carrier, we recommend following the step-by-step instructions below to actively update tracking data.

## How to send delivery updates

You can actively update the tracking data using the [Update Order Tracking Status](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking) endpoint in the Orders API. In this case, the information will be logged in Order Management and emailed to the clients.

This data can be sent by any external system that is tracking the delivery status of the package, whether it be an ERP, middleware, or the carrier itself.

It is also possible to [insert the variable](https://help.vtex.com/en/tutorial/incluir-variaveis-do-pedido-no-template-de-e-mail-transacional--694Bn8eOeAWYQeaWGaOISe) `trackingURL` in some [Message Center templates](https://help.vtex.com/en/tutorial/lista-de-templates-de-e-mail-no-message-center--3g2S2kqBOoSGcCaqMYK2my), such as **Order invoiced** and **Order shipped**, which will allow the client to track their order via the link.

## Integration with Correios

As detailed [in this known issue](https://help.vtex.com/en/known-issues/atualizacao-automatica-do-rastreio-de-entregas-via-correios), native tracking integration with Correios is currently disabled.

Alternatively, you can use solutions developed by partners to track deliveries by Correios, such as [XP Agência's tracking system](https://rastreio.xpagencia.com.br/).
