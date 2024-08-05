---
title: "Order is locked in 'Ready for Handling'. What do I do?"
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2022-08-11T19:29:35.680Z
publishedAt: 2022-08-11T19:29:35.680Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: order-is-locked-in-ready-for-handling-what-do-i-do
locale: en
legacySlug: order-is-locked-in-pronto-para-manuseio-what-do-i-do
---

When a store has an order locked in the status **Ready for Handling**, it means that the ERP has to advise that it has consulted the order and has begun handling it.

This happens because within the flow of orders there is a status in which the orders have to be queried by the ERP - this is the **Ready for Handling** status.

When the ERP queries and enters this order in your base, it has to inform VTEX that the order can continue its flow. This information can be given in one of 2 manners described below.

- [ERP advises using API](https://developers.vtex.com/vtex-rest-api/reference/starthandling): this is the most common way of updating.
- **Storeowner advances manually**: in this case, the store has no ERP and has to advance manually so that the order can continue the flow.

> To do so, click on the arrow symbol on top of the **Start handling** box in the order flow diagram below.

![ProntoParaManuseio](https://images.contentful.com/alneenqid6w5/5VSeCrxvSogcI46mgkYkm8/84ea107934684ada917d6a8163aeae34/ProntoParaManuseio.png)

> You must have a [OMS - Full access role](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") in order to perform this action.

<div class="alert alert-warning">
<p>If the order is moved manually from the <b>Start handling</b> status, it will not be possible to move the order down to the ERP afterwards.</p>
</div>
