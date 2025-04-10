---
title: 'Setting up fields for issuing invoices with inStore'
id: 3DlxJlZI1Wqk2So6MGwWII
status: ARCHIVED
createdAt: 2018-03-13T19:40:22.188Z
updatedAt: 2022-09-13T21:24:23.416Z
publishedAt: 
firstPublishedAt: 2018-03-13T19:54:06.513Z
contentType: tutorial
productTeam: Shopping
author: authors_59
slugEN: setting-up-fields-for-issuing-invoices-with-instore
locale: en
legacySlug: setting-up-fields-for-issuing-invoices-with-instore
subcategoryId: 8AGXmtpbTqUE2KQu0Swwk
---

For the invoice of an order made using inStore to have all the necessary fields, you need to configure some extra fields in the __orderForm__. In addition, these extra fields allow VTEX orders module to correctly identify when an order is made through inStore.

To set these extra fields up, follow the steps below:

- Make a GET call to the path `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, where `{AccountName}` is the name of your store. You must use your store's `x-vtex-api-appKey` and `x-vtex-api-appToken` to make this call.
- Save the response from this GET in a text editor.
- You will see that the "apps" property will have the value of an empty array (`[]`). Insert the following snippet in the brackets.

```json
     {
       "fields": [
  "cart-extra-context",
  "cart-type",
      ],
      "id": "cart-extra-context",
      "major": 1
      }
```

- Save your text file.
- Make a POST call to the path `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm`, where `{AccountName}` is the name of your store. You must use your store's `x-vtex-api-appKey` and `x-vtex-api-appToken` to make this call. The body of this POST will be the entire content of the file from the previous step.

---

Now the orderForm of your orders already has the extra fields. To check if the POST has succeeded, you can perform a GET call to the route `https://{AccountName}.vtexcommercestable.com.br/api/checkout/pvt/configuration/orderForm` and verify that the "apps" property has the new information.
