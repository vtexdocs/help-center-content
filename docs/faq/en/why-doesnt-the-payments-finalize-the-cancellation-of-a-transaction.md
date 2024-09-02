---
title: 'Why doesn’t Payments finalize the cancellation of a transaction?'
id: 3IBqfy5IhOMkYKuKmu2wSs
status: PUBLISHED
createdAt: 2017-05-16T14:37:21.265Z
updatedAt: 2019-12-31T14:23:49.504Z
publishedAt: 2019-12-31T14:23:49.504Z
firstPublishedAt: 2017-05-18T18:55:27.278Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: why-doesnt-the-payments-finalize-the-cancellation-of-a-transaction
locale: en
legacySlug: why-doesnt-the-pci-gateway-finalize-the-cancellation-of-a-transaction
---

This happens when a transaction continues in `Cancelling` status indefinitely, preventing it from being cancelled and, consequently, preventing a request in OMS. This happens when VTEX is awaiting a response from the gateway system, but the correct response is not sent. We can see in the picture below an example of a gateway response preventing VTEX from proceeding with the cancellation process:

![resposta-inadequada-pci-gateway](https://images.contentful.com/alneenqid6w5/3P9FblRbzGIEyWo0IW6msa/278ba7912bcbb49a537e94fb7bb4a1b1/resposta-inadequada-pci-gateway.png)

To solve this, you must contact the gateway responsible for payment, give the transaction details and request cancellation.
