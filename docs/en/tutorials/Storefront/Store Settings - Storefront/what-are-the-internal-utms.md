---
title: 'What are the internal UTMs utmi_cp, utmi_pc and utmi_p'
id: 5Pvo8ufYWs00AUeCCEY68a
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.618Z
updatedAt: 2024-08-05T11:11:38.459Z
publishedAt: 2024-08-05T11:11:38.459Z
firstPublishedAt: 2019-01-24T22:01:12.633Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: what-are-the-internal-utms
locale: en
legacySlug: what-are-the-internal-utms
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

`UTMi`s are internal UTMs, that is, URL parameters that are intended to track traffic between pages inside your site. Through them, you can trace navigation and define contexts where certain actions should be applied.

Therefore, they do not aim to track traffic coming from external sites or services for purposes related to the marketing context. This is a function performed by the UTMs, as explained in the article [What are utm_source, utm_campaign and utm_medium](/en/faq/what-are-utm-source-utm-campaign-and-utm-medium).

Normally, the internal UTMs are used as __cause of benefit__. In the Promotions & Taxes module, you can define that only closed orders with a given UTM applied to the URL will receive a certain benefit. See below the field to choose or create this internal UTM in the registration of a regular benefit.![utmi1](https://images.contentful.com/alneenqid6w5/16CfZDMc1A2IiiU2UcayS2/aaf51be21c48ee58b10066e7cb70c063/utmi1.jpg)

In the Orders Management module, within the order details screen, you can rotate the Total Value card to view the data for __Sales and Marketing__. It contains the value of the internal UTM parameter used in the benefit.

![utmi2](https://images.contentful.com/alneenqid6w5/41RwzsUqdOYWaYAokS6YiC/5774226a9a53769566cdefbcb2c0b171/utmi2.jpg)

VTEX works with three types of internal UTMs:
- `utmi_cp`
- `utmi_pc`
- `utmi_p`

As previously explained, `utmi_cp` is used by the Promotions & Taxes module. But you can use this and the other two according to your need. Another possible use, for example, is to track the flow of users clicking on a store banner.

In the OrderForm, the fields populated by the values of these UTMs are as follows:
- `utmi_cp`: __utmiCampaign__
- `utmi_pc`: __utmiPart__
- `utmi_p`: __utmiPage__

They can be found inside the `marketingData` node.

### Related articles

- [What are utm_source, utm_campaign and utm_medium](https://help.vtex.com/en/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium)
- [Creating a coupon](https://help.vtex.com/en/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU)
