---
title: "Order is locked in 'Ready for Handling', what should I do?"
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2023-06-15T13:20:25.568Z
publishedAt: 2023-06-15T13:20:25.568Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: order-is-locked-in-ready-for-handling-what-should-i-do
locale: en
legacySlug: order-is-locked-in-pronto-para-manuseio-what-do-i-do
---

When a store has an order locked in the status **Ready for Handling**, it means that the ERP has to advise that it has consulted the order and has begun handling it.

This happens because within the flow of orders there is a status in which the orders have to be queried by the ERP - this is the **Ready for Handling** status.

When the ERP queries and enters this order in your base, it has to inform VTEX that the order can continue its flow. This can be done in two ways:

- [ERP advises using API](https://developers.vtex.com/vtex-rest-api/reference/starthandling): this is the most common way of updating.
- **Storeowner advances manually**: the store has no ERP and has to advance the order manually in VTEX Admin, in the [Order details page](https://help.vtex.com/en/tutorial/pagina-de-detalhes-do-pedido--2Y75n54Cc9VizrlG1N6ZNl). The complete steps are described in [Moving order to Handling Shipping](https://help.vtex.com/en/tutorial/passar-pedido-para-o-status-preparando-entrega--tutorials_198).

> You must have a [OMS - Full access role](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") to be able to perform this action.

<div class="alert alert-warning">
<p>If the order is moved manually from the <b>Start handling</b> status, it will not be possible to move the order down to the ERP afterwards.</p>
</div>
