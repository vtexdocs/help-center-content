---
title: 'Setting up the MoipV2 sub-acquirer'
id: 4BipUcTxQ7cq2BiYzUDmEH
status: DRAFT
createdAt: 2021-12-03T16:57:26.876Z
updatedAt: 2022-12-23T20:35:19.599Z
publishedAt: 
firstPublishedAt: 2021-12-14T14:39:34.847Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: setting-up-the-moipv2-sub-acquirer
legacySlug: setting-up-the-moipv2-sub-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Moip is a [sub-acquirer](/en/tutorial/what-is-a-sub-acquirer) that provides a single integration to connect your store with all parties involved in the payment flow, as well as protection against fraud and a [transparent checkout solution](/en/tutorial/what-is-transparent-checkout) with no redirects. In addiction to the features of Moip connector, the MoipV2 allows [Split Payments](https://help.vtex.com/en/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete#).

## Setting up MoipV2 gateway affiliation

To configure MoipV2 in your store, follow the steps below:

1. Access the VTEX __Admin__.
2. In __Payments__, click on __Settings__.
3. In __Gateway affiliations__, click on the green “__+__” button.
4. Select the __MoipV2__ connector.
5. In __Click to authorize VTEX to make payments__, click on __Autorizar__.
At this point, you will be redirected to the Moip webpage, where you will need to access your Moip account and authorize a VTEX connection.
6. After authorization, you will automatically return to the VTEX Admin, and the  __Application Key__, __Application Token__, and __Application Id__ fields will already be filled in.
7. Click on Save.

## Setting up the payment condition

Once you have completed the steps above, MoipV2 will be ready to be used in your store. It will be available in the __Process with affiliation__ field — provided that the payment method is compatible with MoipV2 — when creating a payment condition.

Learn more in the article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
