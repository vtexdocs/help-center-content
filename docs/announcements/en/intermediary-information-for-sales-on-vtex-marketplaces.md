---
title: "Intermediary information for sales on VTEX marketplaces"
id: 1gNXqhQbudnvOkx7uHfoPB
status: PUBLISHED
createdAt: 2021-06-10T18:39:24.021Z
updatedAt: 2022-01-11T20:41:00.728Z
publishedAt: 2022-01-11T20:41:00.728Z
contentType: updates
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
slug: intermediary-information-for-sales-on-vtex-marketplaces
legacySlug: intermediary-information-for-sales-on-vtex-marketplaces
announcementImageID: ""
announcementSynopsisEN: Intermediary information will now be available for sales completed on VTEX marketplaces.
---

Sellers who sell their products on VTEX marketplaces now have access to the intermediary identification and payment method information for sales completed on that type of marketplace. VTEX clients operating as marketplaces will also send this information to their sellers (VTEX and non-VTEX).

You can now access the intermediary and payment method information using the [“Get order”](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) request in the Orders API.

## Why did we make this change?

Information contained in ecommerce invoices may vary depending on the laws of each country. For example, you may need to identify the intermediary and include the payment method for sales completed through a marketplace. 

Legal requirements, like [NT 2020.006](https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=/RzDxklkYPU=) in Brazil, for issuing intermediary sales invoices prompted us to make this improvement to help our clients meet these obligations. Since this information is not personal data protected by laws around the world, this change has been applied to all VTEX stores without any exception.

## What needs to be done?

If your store is subject to legal requirements as the ones mentioned above and it operates as a seller to other VTEX stores, any integrations that are used to issue invoices can be updated to include this information.

To identify the intermediary (natively integrated marketplaces listed above), use the [`affiliateId`](https://developers.vtex.com/vtex-developer-docs/reference/orders#getorder) field. 

To identify the payment method used, check this guide on how to [retrieve marketplace sales data with the Orders API](https://developers.vtex.com/vtex-rest-api/docs/fetching-marketplace-payment-method-data-with-the-orders-api).

