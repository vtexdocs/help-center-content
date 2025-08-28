---
title: 'Integration status'
id: tutorials_422
status: PUBLISHED
createdAt: 2017-04-27T22:05:50.596Z
updatedAt: 2025-06-10T18:20:24.338Z
publishedAt: 2025-06-10T18:20:24.338Z
firstPublishedAt: 2017-04-27T23:03:24.679Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: checking-integrations-in-bridge
legacySlug: checking-integrations-in-bridge
locale: en
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

The **Connections** section displays the logs of a VTEX store's integrations with other marketplaces. To access it, go to **VTEX Admin > Marketplace > Connections.**  

This section allows you to monitor the status of each type of integration and reprocess any that contain errors.  

## Connections

In the **Connections** section, you can view the following types of integrations:

[Orders](#pedidos)  
[Products](#products)  
[Tracking](#tracking)  
[Price](#price)  
[Inventory](#inventory)  

Each page includes a filter, a search bar, and the buttons `Expand all` and `Export to excel`.  

### Orders  

You can access the **Orders** page by going to **VTEX Admin > Marketplace > Connections > Orders.** This page displays the logs of orders placed on the marketplaces your store is integrated with. It includes the following information:  

- **ID:** Order number.  
- **Affiliate:** Marketplace where the order was placed.  
- **Status:** Can be **Processed with success** or **Processed with error.**  
- **Processing date:** Last time the VTEX platform processed the order.  

To view more details, click the order. If there's an error, the platform will display a detailed log of the issues. To solve it, go to the [Troubleshooting](https://help.vtex.com/en/subcategory/integracoes--2LcLWCYaEm5qPmOuYUiKIS) section of the Help Center and follow the solution tutorial based on the marketplace where the order was placed.  

### Products  

You can access the **Products** page by going to **VTEX Admin > Marketplace > Connections > Products.** This page displays the product sending logs for the marketplaces your store is integrated with.  It includes the following information:  

- **SKU code:** ID that identifies the SKU in your VTEX catalog.  
- **Affiliate:** Marketplace to which the SKU was sent.  
- **Status:** Status of the SKU sending, which can be **Processed with success** or **Processed with error.**  
- **Processing date:** Last time the VTEX platform processed the SKU sending.  

To view more details, click the desired SKU. If there's an error, a detailed log will be displayed explaining why the product wasn't sent to the affiliate. To solve it, make the necessary corrections and reprocess the sending.  

To reprocess the sending, click the `Actions` button and select **Reprocess SKU.**  

### Tracking  

You can access the **Tracking** page by going to **VTEX Admin > Marketplace > Connections > Tracking.**  This page displays the shipping logs for orders placed on the marketplaces your store is integrated with. It includes the following information:  

- **Order code:** Alphanumeric ID that identifies the order.  
- **Affiliate:** Marketplace where the order was placed.  
- **Status:** Tracking status of the order, which can be **Processed with success**, **Processed with warning** or **Processed with error.**  
- **Processing date:** Last time the tracking was processed.  

To view more tracking details, click the desired order. If there's an error, a detailed log of the order's shipping information will be displayed. To solve the error, make the necessary corrections and reprocess the sending.  

To reprocess the sending, click the `Actions` button and select **Reprocess.**  

### Price  

You can access the **Price** by going to **VTEX Admin > Marketplace > Connections > Price.** This page displays product price details sent to the marketplaces your store is integrated with. It includes the following information:  

- **SKU code:** ID that identifies the SKU in your VTEX catalog.  
- **Affiliate:** Marketplace to which the SKU was sent.  
- **Status:** Price sending status of the SKU, which can be **Processed with success**, **Processed with warning** or **Processed with error.**  
- **Processing date:** Last time the SKU price was processed.  

To view price sending details, click the desired SKU. If there's an error, a detailed log will be displayed. To solve the error, make the necessary corrections and reprocess the sending.  

To reprocess the sending, click the `Actions` button and select **Reprocess.**  

### Inventory

You can access the **Inventory** page by going to **VTEX Admin > Marketplace > Connections > Inventory.** This page displays inventory details sent to the marketplaces your store is integrated with. It includes the following information:  

- **SKU code:** ID that identifies the SKU in your VTEX catalog.  
- **Affiliate:** Marketplace to which the SKU inventory was sent.  
- **Status:** Inventory sending status of the SKU, which can be **Processed with success** or **Processed with error.**  
- **Processing date:** Last time the inventory sending was processed.  

To view inventory sending details, click the desired SKU. If there's an error, a detailed log will be displayed. To solve the error, make the necessary corrections and reprocess the sending.  

To reprocess the sending, click the `Actions` button and select **Reprocess.**
