---
title: 'Setting up modal for carriers'
id: 3jhLqxuPhuiq24UoykCcqy
status: PUBLISHED
createdAt: 2018-02-28T14:15:43.168Z
updatedAt: 2023-03-29T15:09:26.801Z
publishedAt: 2023-03-29T14:51:10.227Z
firstPublishedAt: 2018-02-28T18:37:55.622Z
contentType: tutorial
productTeam: Post-purchase
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: configure-modal
legacySlug: configure-modal
locale: en
subcategoryId: 1UL6Q7nUN6SkA2g2SUsECi
---

The configuration of a modal is made on **Shipping Settings** and **Catalog** modules, in that order. Enabling modal in **Settings** and associating it to a **Carrier** will automatically generate a field on the SKU register, where you can define whether there is a need to classify a category as a modal, so that it can be attended by a designated carrier.

Your **Shipping strategy** as a whole needs to be structured in order to comply with this specific kind of delivery. Which means you need to have the carrier that delivers a specific product properly associated to a dock and the dock in turn associated to a stock.

### Example

Consider a store in which part of the dairy demands a carrier equipped with a cooled system suitable for the delivery of perishables. Due to that, you must ensure that only this type of carrier makes the delivery of these products.

To accomplish that, first of all you must enable a refrigerated option of modal, and associate it to a specific carrier. Then, you must select each product to be part of this modal, in order to make the connection between products and logistics.

## How to enable the modal and associate it to a carrier 

1. In the VTEX Admin, go to **Store settings > Shipping > Settings**, or type *Shipping* in the search bar at the top of the page and select *Store settings / Shipping*.  
2. On **Allow use of the following modals carriers**, select the desired modal types.
3. Click on **Save**.
4. Go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
5. Select then the __shipping policy__ you want to change.
6. On **Modals** section, select the modal that you want to be associated with this carrier. 
7. To finish, click on **Save**.

With the modal enabled and already associated to a shipping policy, a field is generated on the SKU register which allows you to define if it will be attended by a specific kind of delivery.

## How to link a SKU to a modal

1. In the VTEX Admin, go to **Catalog > Products and SKUs**, or type *Products and SKUs* in the search bar at the top of the page.
2. Select the SKU you want to edit.  
3. On the __Advanced Settings__ tab, select a **Modal**.  
4. To finish, click on **Save**.  

