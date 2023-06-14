---
title: 'Customer approval'
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2023-03-29T00:06:00.612Z
publishedAt: 2023-03-29T00:06:00.612Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: customer-approval
locale: en
legacySlug: customer-approval
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

You can approve customers in the Master Data via Admin or API.

## Approving customers via Admin

To approve customers in the Admin:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. Inside the box __Profile System__, click on the  <i class="fas fa-bars"></i>   icon next to __Clientes__ (Customers).
3. Select the row of the customer you want to approve.
4. At the bottom of the page, click on the __Editar__ (Edit) button.
5. Select the __checkbox__ next to the __Aprovado__ (Approved) field.
6. At the bottom of the page, click on __Salvar__ (Save).

After that, the store content will be displayed to the selected customers. 

## Approving customers via API

You can approve multiple customers at once via a [Master Data API](https://developers.vtex.com/vtex-developer-docs/reference/master-data-api-v2-overview "API do Master Data") route.

All information related to a customer can be interpreted as a document in [“Customer” data entity](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265 "entidade de dados "Cliente""). Therefore, the [PATCH Create or Update partial document](https://developers.vtex.com/vtex-developer-docs/reference/documents#createorupdatepartialdocument "PATCH Create or Update partial document") route must be used to change the "Approved" field value in bulk.

Check the article [Import customer data](https://help.vtex.com/pt/tutorial/importar-datos-de-clientes-brasil?locale=pt "Importar dados de clientes") to learn which fields are required for a specific individual document.
