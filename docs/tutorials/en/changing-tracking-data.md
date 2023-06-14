---
title: 'Changing tracking data'
id: 63c2hG3fBSCnchiMBOR5Ck
status: PUBLISHED
createdAt: 2021-12-17T18:17:47.739Z
updatedAt: 2023-03-29T15:05:42.352Z
publishedAt: 2023-03-29T15:05:42.352Z
firstPublishedAt: 2021-12-17T18:30:56.599Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: changing-tracking-data
locale: en
legacySlug: changing-tracking-data-beta
subcategory: 3VNOhxDrvYxJThhuJClrYZ
---

Retailers and customers can track order deliveries by entering their tracking data into the platform. To enter or change tracking data, orders must [have been invoiced](https://help.vtex.com/en/tutorial/como-faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v).  

There are two ways of entering order tracking data:

* **Via API**: using the [Update order's partial invoice (send tracking number) API](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-) to implement an integration that sends tracking data in an automated way or in bulk, according to your business needs.
* **[Via Admin:]**(#how-to-change-tracking-data) manually changing the tracking data for each order.

## How to change tracking data

To manually change an order's data, follow the steps below:

1. In the VTEX Admin, go to **Orders > All Orders**, or type **All Orders** in the search bar at the top of the page.
2. Select the order you want to change. Remember that the order must have an invoice attached;
3. On the order details page, go to the **Invoice** section.
4. Click the <i class="fas fa-ellipsis-v"></i>`Actions` button.
5. Click `Edit tracking data`.
6. Fill in the following data:
    * **Tracking number:** the tracking number provided by the carrier.
    * **Access Key:** fill in this field if the carrier's website uses an access key to perform the query via URL.
    * **Tracking URL**: link to the carrier's tracking page related to the order.
    * **Select carrier:** select which carrier will deliver the order.
7. Click `Save`.

![FaturaEN](https://images.ctfassets.net/alneenqid6w5/24K1rMqn970zgeKxK81f3Z/1f68c545e4a42383d85aa82b7dd6ba96/FaturaEN.png)
