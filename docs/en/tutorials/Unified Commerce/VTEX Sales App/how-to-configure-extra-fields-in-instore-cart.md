---
title: 'How to configure extra fields in inStore cart'
id: CDIG0jT2ak6eCOGKgOc0i
status: ARCHIVED
createdAt: 2017-08-14T23:05:34.624Z
updatedAt: 2022-09-16T17:09:43.790Z
publishedAt: 
firstPublishedAt: 2017-08-14T23:19:38.584Z
contentType: tutorial
productTeam: Shopping
author: 3uCjaRpzeMieQWwWycYAMG
slugEN: how-to-configure-extra-fields-in-instore-cart
locale: en
legacySlug: how-to-configure-extra-fields-in-instore-cart
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

The configuration of extra fields in the inStore cart allows product specifications to be used in the order invoice issuance process.

To create the extra fields, follow the steps below:

1. Check current store configuration via GET request on endpoint [Get orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/getorderformconfiguration). Save the JSON information returned from the request.

Example used for the "inStore" store:
![2017-08-14 20 12 34-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Unified Commerce/VTEX Sales App/how-to-configure-extra-fields-in-instore-cart_1.png)
    2. Make a POST request using the endpoint [Update orderForm configuration](https://developers.vtex.com/vtex-rest-api/reference/updateorderformconfiguration) cwith the same saved JSON data, and add the extra fields (`fields`) with the information inside the `apps` property.

Example of POST request:

![2017-08-14 20 11 18-Postman](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Unified Commerce/VTEX Sales App/how-to-configure-extra-fields-in-instore-cart_2.png)
