---
title: 'Catalog API: new restrictions to activate an SKU'
id: JcUDPA6hTMK4kwjTUAUn9
status: PUBLISHED
createdAt: 2021-01-28T18:30:48.345Z
updatedAt: 2021-05-04T18:11:05.378Z
publishedAt: 2021-05-04T18:11:05.378Z
contentType: updates
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2021-01-28-catalog-api-new-restrictions-to-activate-an-sku
locale: en
legacySlug: catalog-api-new-restrictions-to-activate-a-sku
announcementImageID: 'undefined'
announcementSynopsisEN: 'With this update, there are new restrictions for creating SKUs via API'
---

We have updated the [Catalog API](https://developers.vtex.com/vtex-developer-docs/reference/catalog-api-overview) regarding the creation of SKUs to avoid potential SKU display problems in your store.

Previously, SKU validation via API caused undesired side effects to our clients when they tried to activate an SKU which was already created or updated. From March 11, 2021 every SKU created via API will follow the standards established in Admin, avoiding unexpected behaviors.

## What will change?

With the update, when you create an SKU via API, it will not be created as active. To activate it, you will have to associate an image with it. To activate SKUs that are kits, you will also have to associate an active component with it.

You can find more details about how this change affects the [Create SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-post-sku) and [Update SKU](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-sku#catalog-api-put-sku) endpoints and the new SKU validation path in our [guide](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku).

## What do I have to do?

VTEX will automatically implement the update on March 11, 2021 and the new requirements will be mandatory. In case you do not follow the new settings, the SKU will not be created. We recommend that you implement this new standard in SKU creation immediately.

For SKUs that were previously created in your store, you have to check whether they are activated and adequately connected to the products. If an SKU is not working, you have to adapt it according to the update and [add an image to it](https://help.vtex.com/en/tutorial/how-to-update-the-image-of-an-sku--5PMb54FnvUuWOq2qGyAosu).

