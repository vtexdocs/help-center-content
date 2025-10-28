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
slugEN: why-doesnt-the-payments-finalize-the-cancellation-of-a-transaction
locale: en
legacySlug: why-doesnt-the-pci-gateway-finalize-the-cancellation-of-a-transaction
---

This happens when a transaction continues in `Cancelling` status indefinitely, preventing it from being cancelled and, consequently, preventing a request in OMS. This happens when VTEX is awaiting a response from the gateway system, but the correct response is not sent. We can see in the picture below an example of a gateway response preventing VTEX from proceeding with the cancellation process:

![resposta-inadequada-pci-gateway](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/financial/why-doesnt-the-payments-finalize-the-cancellation-of-a-transaction_1.png)

To solve this, you must contact the gateway responsible for payment, give the transaction details and request cancellation.
