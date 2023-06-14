---
title: 'V2 of Checkout and Fulfillment API is already in beta (migration will be completed on May 23)'
id: 2h5VNlwg3OUOSKeWqyac8q
status: PUBLISHED
createdAt: 2018-02-07T12:10:09.771Z
updatedAt: 2019-12-31T15:12:56.320Z
publishedAt: 2019-12-31T15:12:56.320Z
contentType: updates
productTeam: Shopping
author: authors_24
slug: v2-of-checkout-and-fulfillment-api-is-already-in-beta-migration-will-be-completed-on-may-23
legacySlug: v2-of-checkout-and-fulfillment-api-is-already-in-beta-migration-will-be-completed-on-may-23
announcementImageID: ''
announcementSynopsisEN: 'The V2 brings a lot of improvements in comparison with the previous version and removes some outdated routes and fields.'
---

<div class="alert alert-danger">
The migration to V2 of Checkout and Fulfillment API was already completed on <strong>05/23/2018</strong>
</div>

<div class="alert alert-warning">
The deadline changed from <strong>05/21</strong> to <strong>05/23</strong> (a two-day postponement) due to the need for additional tests.
</div>

The second version of the Checkout and Fulfillment API is already available in beta. Starting __May 23__, all stores will be running it. This V2 brings a lot of improvements in comparison with the previous version and removes some outdated routes and fields.

<div class="alert alert-warning">
<strong>Atention</strong><br>
We strongly recommend you to run tests to evaluate all impacts and adapt you web site's integrations and customizations before the deadline.<br> 
So, when we complete the update to the API's new version, the process will run smoothly for your store.
</div>

Take a look at everything wich changes with the Checkout and Fulfillment new API (and what's in beta or in stable):

- Removal of the __defaultPicker__, __handlerSequence__ and __handling__ fields from __itens__ object, in the shopping cart and orders response routes (BETA). These fields were included because of a feature that is not being used anymore. Therefore, they've not being filled in for a while now.
- Replacement of __checkToSavePersonDataByDefault__ by the __saveUserData__ field from the __storePreferencesData__ object in the shopping cart and orders response routes (BETA). __Attention:__ during the migration period, we recommend you to keep reading both fields because of possible compatibility issues, but always prioritizing the new one.
- Removal of the __attachmentId__ (or __id__, depending of the route) objects, from the attachment groups (such as __shippingData__, __clientProfileData__ and __giftRegistryData__), in the shopping cart and orders response routes. This change will resolve redundancy issues (BETA).
- Removal of the __templateOptions__ field from the __storePreferencesData__ object in the shopping cart and orders responses (BETA). The development of the feature which was supposed to use this field was never completed, so it always returns the same value.
- Removal of the __itemAttachment__ field (outdated) from the __items__ object, both in the shopping cart and orders creation and in the orders obtaining (BETA). This field will be removed because of redundancy issues with the __attachments__ field (already in STABLE). It has been on until now to keep compatibility, since it's first version wasn't a list.
- Update of the __shippingEstimate__ field from the __SLAs__, in the shopping cart and orders response, to support hours (h) and minutes (m) values (BETA).
- Removal of the callback route (authorization in the order fulfillment) `{host}/gatewayCallback/{gatewayReferenceId}/{transactionId}/{messageCode}` (GET) and replacement by the `{host}/gatewayCallback/{orderGroup}/{messageCode}` (GET) route. This change is in BETA, but the correct route is already in STABLE.
- Removal of the __merchantName__, __transactionId__ and __payments__ fields from the __paymentData__ object in the following response routes: `{host}/api/checkout/pub/orders/order-group/{order-group}`, `{host}/api/checkout/pub/orders` (GET) and `{host}/api/checkout/pub/orders/{orderId}`. This change is in BETA and completely removes outdated and redundant fields, as compared to those in the __transactions__ field (wich is already in STABLE with all the mentioned changes).
- Removal of the `{host}/api/checkout/pvt/orders/order-import` route in the order import (BETA).
- Removal of the __products__ field in the shopping cart response and requisition routes. This feature was never completely implemented and will be deprecated (BETA). 
- Removal of support for the __product__ queryString in the route `{host}/checkout/cart/add`. This feature was never completely implemented and will be deprecated (BETA).
- Removal of the __expectedOrderFormSections__ object in the shopping cart request routes. From now on, all fields be returned (BETA).
- Removal of the __stockBalance__ field from the __logisticsInfo__ object in the response route `{host}/api/checkout/pub/orderForms/simulation`. __Important:__ this field will still be available in the private route `{host}/api/checkout/pvt/orderForms/simulation` (BETA).
- Removal of the route `{host}/api/checkout/pvt/orders/{orderId}/updateShippingEstimateDate` (BETA).
- Error fixing in cases that should return code __500__, but were returning code __400__ (BETA).
