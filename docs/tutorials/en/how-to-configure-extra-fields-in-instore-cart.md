---
title: 'How to configure extra fields in inStore cart'
id: CDIG0jT2ak6eCOGKgOc0i
status: DRAFT
createdAt: 2017-08-14T23:05:34.624Z
updatedAt: 2022-09-16T17:09:43.790Z
publishedAt: 
firstPublishedAt: 2017-08-14T23:19:38.584Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slug: how-to-configure-extra-fields-in-instore-cart
locale: en
legacySlug: how-to-configure-extra-fields-in-instore-cart
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

The configuration of extra fields in the inStore cart allows product specifications to be used in the order invoice issuance process.

To create the extra fields, follow the steps below:

1. Check current store configuration via GET request on endpoint [Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration). Save the JSON information returned from the request.

Example used for the "inStore" store:
![2017-08-14 20 12 34-Postman](//images.contentful.com/alneenqid6w5/6I61we4oF2AMkgcIAMgEo/772e7d2b045312f1f5c76b4d8eb9d30f/2017-08-14_20_12_34-Postman.png)
    2. Make a POST request using the endpoint [Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration) cwith the same saved JSON data, and add the extra fields (`fields`) with the information inside the `apps` property.

Example of POST request:

![2017-08-14 20 11 18-Postman](//images.contentful.com/alneenqid6w5/6QIwIi5IBiy4qCyu2qseey/538d03ceb7f47ea0e47eb8047b931da6/2017-08-14_20_11_18-Postman.png)
