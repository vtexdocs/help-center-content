---
title: 'Setting up 3DS 2 authentication flow'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2025-06-02T17:06:50.600Z
publishedAt: 2025-06-02T17:06:50.600Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
legacySlug: setting-up-3ds-2-authentication-flow
locale: en
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

3D Secure 2.0 (3DS 2) is an authentication flow that increases security in payments made with credit and debit cards, through the internal analysis of a large amount of data present in each transaction.

<div class = "alert alert-warning">
3DS 2 is only supported by certain connectors in VTEX and must be implemented via <a href="https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2">Payment App</a>. Check with your payment provider to see if this feature is available and to verify the necessary steps for setting it up.
</div>

<div class="alert alert-warning">
3DS 2 does not support purchases using two credit cards. If an order is placed under these conditions, the payment will be canceled.
</div>            

