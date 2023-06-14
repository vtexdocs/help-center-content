---
title: Intermediator data for natively integrated marketplace sales
id: 76L5juzkCZa8Bn5vl6U9Cp
status: PUBLISHED
createdAt: 2021-03-31T13:19:17.099Z
updatedAt: 2021-05-25T21:13:24.704Z
publishedAt: 2021-05-25T21:13:24.704Z
contentType: updates
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: intermediator-data-for-natively-integrated-marketplace-sales
legacySlug: intermediator-data-for-natively-integrated-marketplace-sales
announcementImageID: 
announcementSynopsisEN: Intermediator information for natively integrated marketplace sales is now being made available through the Orders API.
---

Stores that use VTEX’s native integrations with marketplaces now have access to new data fields. Namely, intermediator and payment method information for sales made in those marketplaces. These integrations are with:
- B2W
- Via Varejo
- Magazine Luiza
- Mercado Livre
- Amazon
- Carrefour
- Netshoes
- Centauro
- Dafiti
- Wish

Now you can get both the information on the intermediator and the payment method using the Get order request in the [Orders API](https://developers.vtex.com/vtex-developer-docs/reference/orders-api-overview).

## Why did we make this change?
The information contained in ecommerce invoices may vary according to business laws in each country. It is possible, for example, that you are required to identify the intermediator and include payment method information in case a sale is made through a marketplace.

In light of specific legal requirements regarding the invoicing of intermediated transactions, such as Brazil’s [NT 2020.006](https://www.nfe.fazenda.gov.br/portal/informe.aspx?ehCTG=false&Informe=IqSW/jxfvaw=), we made this improvement so that our clients may be fully able to comply.

## What needs to be done?
If your store is subject to such legal requirements as mentioned above, whatever integrations that result in the invoicing of orders may be updated to contain this data.

To identify the intermediator (natively integrated marketplaces listed above) use the `affiliateId` field. To identify the payment method used, follow the steps described in [Fetching marketplace payment method information](https://developers.vtex.com/vtex-rest-api/docs/fetching-marketplace-payment-method-data-with-the-orders-api).

Also, you have the option to include information regarding whether the payment is made in installments or not. This information can be found in the `installments` field.

