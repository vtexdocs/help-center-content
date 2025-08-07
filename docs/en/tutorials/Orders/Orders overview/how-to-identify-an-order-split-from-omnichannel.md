---
title: 'How to identify an order split from omnichannel'
id: 5LuhsjJkEEqU0uysEuIUQO
status: PUBLISHED
createdAt: 2018-06-19T06:52:10.893Z
updatedAt: 2023-03-29T18:34:26.061Z
publishedAt: 2023-03-29T18:34:26.061Z
firstPublishedAt: 2019-01-25T17:29:55.002Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slugEN: how-to-identify-an-order-split-from-omnichannel
legacySlug: how-to-identify-an-order-split-from-omnichannel
locale: en
subcategoryId: 3VNOhxDrvYxJThhuJClrYZ
---

Stores that operate with [Unified Commerce](https://help.vtex.com/en/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) strategies and omnichannel architecture need to manage orders alongside their financial reconciliation. The **Orders** module and the [Split Payment](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) solution allow an order to be split among multiple sellers, which is called order splitting.

You can see if an order has been split in the order ID. There are two ID formats for stores acting as a [marketplace](https://help.vtex.com/en/tutorial/configurar-marketplace-vtex--7splyp5MqIyt2Iyz5jsNzb):

- A sequence of 12 numerical digits. For example: `527103869572`.
- A sequence of alphanumeric numbers, consisting by default of the letter "v," followed by 6 numerical digits and 4 letters. For example: `v527103anml`.

When the order is split, a suffix is added to the ID, such as `-01` or `-02`. Each number represents a seller, and the count starts from one onwards.

> For example: In the marketplace, an order's split ID could be `527103869572-01` or `v527103anml-01`.

<div class = "alert alert-info">
Orders placed on the marketplace will have an ID in the sellers' environment. Each seller has restricted access to its order section and no access to other sellers' orders.
</div>

The order ID in the seller's environment is based on the same sequence used in the marketplace but has an additional prefix corresponding to the [affiliate ID](https://help.vtex.com/en/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0), composed of three consonants that identify the seller in the marketplace.

> For example: If the order ID in the marketplace is `v527103anml-01`, in the seller environment, it would be `SLR-v527103anml-01`.

Some stores using [integrations with ERP](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) and other systems may require additional configuration or customization to receive order split information. If the store has access to both the marketplace and seller environments, you can access the information via [API](https://developers.vtex.com/vtex-rest-api/reference/listorders).

## Learn more

- [Precautions when setting the order numbering](https://help.vtex.com/en/tutorial/cuidados-ao-definir-a-numeracao-de-pedido--VAKKptfcaOxFxM8gfPobu)
