---
title: 'How to set up a SalesChannel and define a default SLA for recurrent orders'
id: 4AyJBkwoMEgCkKIAMomekK
status: DRAFT
createdAt: 2017-05-03T16:54:56.590Z
updatedAt: 2020-02-03T22:32:27.851Z
publishedAt: 
firstPublishedAt: 2017-05-05T18:28:48.785Z
contentType: tutorial
productTeam: Others
author: 12efi1hBSg0ag6yCQMiaQu
slug: how-to-set-up-a-saleschannel-and-define-a-default-sla-for-recurrent-orders
locale: en
legacySlug: how-to-set-up-a-saleschannel-and-define-a-default-sla-for-recurrent-orders
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

## Recurrence: define SalesChannel and default SLA

The purpose of this mini tutorial is to explain a new feature that enables the recurrence module to be set up(Via API). For now, it is possible to define a SaleChannel to be used when generating all “recurrent” orders of the store, in addition to informing the default SLA.

## Route (endpoint for API)
- Retrieve configurations: [GET configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#e3cfd743-1cf0-41ce-b9ce-3e35b32a137a)
- Setup configurations: [PUT Setup configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#b82e6ce4-ecf9-41f1-ab6e-a09310e983a9)


### SalesChannel (Trade Policy) 

Just include an attribute with the name `salesChannel`, as illustrated in the setup route, with the value of the sales channel identifier.  

Thereafter, the next orders will be created using the sales channel that was set up. In the event there is no stock for a given item in this channel, the item will be excluded from the order.   

![posicao.en](//images.ctfassets.net/alneenqid6w5/8TLvzlzTkt2yUtr5Lmj5z/507d00037f92756ddc01008590350a7b/posicao.en.png)

*The screen showing the salesChannel ID*

### SLA

Just include an attribute with the name `defaultSLA`, as illustrated in the setup route, with the delivery type identifier.  

Thereafter, the SLA set up will take preference over the cheaper SLA for the next orders created – whereby, if it has a delivery window, the first interval available will be selected.

![transportadora.en](//images.ctfassets.net/alneenqid6w5/5qOOw2KsCHgxP5XmbjmEMd/7b6d0aa40ae6f9e28c269ac42f5313d5/transportadora.en.png)
*The screen showing the ID of the SLA*
