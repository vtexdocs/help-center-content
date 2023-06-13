---
title: Setting up the Moip sub-acquirer
id: 16yZI11GWC2KMMUAGmec0m
status: DRAFT
createdAt: 2018-02-27T16:01:35.629Z
updatedAt: 2022-12-23T20:30:33.976Z
publishedAt: 
firstPublishedAt: 2018-02-28T16:53:22.407Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: setting-up-the-moip-sub-acquirer
legacySlug: setting-up-the-moip-sub-acquirer
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Moip is a [sub-acquirer](/en/tutorial/what-is-a-sub-acquirer) that provides a single integration to connect your store with all parties involved in the payment flow. as well as protection against fraud and a [transparent checkout solution](/en/tutorial/what-is-transparent-checkout) with no redirects.

<div class="alert alert-warning">
The information in this article are just configuration references for merchants who are already using the Moip sub-acquirer. For new affiliations, we recommend using the sub-acquirer <a href="https://help.vtex.com/en/tutorial/configurar-o-subadquirente-moipv2--4BipUcTxQ7cq2BiYzUDmEH">MoipV2</a>.
  </div>

To configure Moip in your store, follow the steps below:

## Setting up Moip gateway affiliation

1. Access the VTEX __Admin__.
2. In the __Payments__ module, click on __Settings__.
3. In __Gateway affiliations__, click on the green “__+__” button.
4. Select the __Moip__ connector.
5. Fill in the fields with the following information:

    - __Token and Key__: enter the information provided by Moip.
    - __Receive payments__: select whether payments will be received in installments or in full.
    - __Early capture__: define how long after transaction approval and anti-fraud analysis the payment should be captured. You can also disable this option if you prefer.
    - In the field __Do you have an anti-fraud agreement with this affiliation?__, select Yes if you have the anti-fraud solution and want to use it.

<ui>
  6. Click on <b>Save</b>
  </ui><br><br>

<div class="alert alert-warning">
Moip does not process transactions if there are products costing "US$0" in the shopping cart.  For example, suppose you create a gift wrap product as an <a href="https://help.vtex.com/en/tutorial/o-que-e-um-anexo--aGICk0RVbqKg6GYmQcWUm?&utm_source=autocomplete">attachment</a>. In this case, this item’s price will be US$0, preventing the payment from being processed.
  </div>

## Setting up the payment condition

Once you have completed the steps above, Moip will be ready to be used in your store. It will be available in the __Process with affiliation__ field — provided that the payment method is compatible with Moip — when creating a payment condition.

Learn more in the article [Configuring payment conditions](https://help.vtex.com/en/tutorial/condicoes-de-pagamento).
