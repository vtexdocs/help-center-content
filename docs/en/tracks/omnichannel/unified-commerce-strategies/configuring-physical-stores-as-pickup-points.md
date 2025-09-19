---
title: 'Physical stores as pickup points'
id: 4hXfgqXxS1lwAfnxgja3xW
status: PUBLISHED
createdAt: 2021-08-23T17:04:37.282Z
updatedAt: 2024-11-13T18:16:43.930Z
publishedAt: 2024-11-13T18:16:43.930Z
firstPublishedAt: 2021-08-23T17:12:50.884Z
contentType: trackArticle
productTeam: Shopping
slugEN: configuring-physical-stores-as-pickup-points
locale: en
trackId: 3WGDRRhc3vf1MJb9zGncnv
trackSlugEN: unified-commerce-strategies
order: 5
---

A pickup point is a physical location where customers can pick up their orders instead of having them delivered to their homes. Therefore, it is optional and the last stage in the logistics route.

You can use your physical stores as pickup points where customers can collect their online orders. When the customer fills in their address information when purchasing a product, the system displays all shipping options for that address, including the available pickup points.

The customer can decide whether they want their order delivered to their home or collected at a pickup point, and they can also choose from the available pickup points.

## Prerequisites - VTEX Sales App

Check the requirements to start using physical stores as pickup points for [VTEX Sales App](/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) orders in the article [Prerequisites for using VTEX Sales App](/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u). 

## Configuring physical stores as pickup points

On the VTEX platform, physical stores are configured as franchise accounts, which function as white label sellers of the main account. For more information, read the article [What is a franchise account?](/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl).

Therefore, you must configure a pickup point and associate it with the logistics settings on the account of each franchise that will act as a local pickup point. See the step-by-step instructions below.

### Creating franchise accounts

For more information about creating franchise accounts, read our article [Creating franchise accounts](/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd).

### Creating pickup points

You must configure the physical stores as pickup points so that your customers can place orders (in-store or through another channel) and pick up their orders in-store. To do this, follow the steps below.

1. In the VTEX Admin of the desired franchise account, go to **Shipping** > __Pickup points__, or type __Pickup points__ in the search bar at the top of the page.
2. Click on `Add pickup point`.
3. Fill in the required information. To learn more about each field, read our article [Adding pickup points](/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).
4. Click on `Save`.

### Associating a pickup point with a shipping policy

Next, you must associate the new pickup points with a shipping policy for them to work properly. For more information about this process, please refer to the section [Link a pickup point with a shipping policy](/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E#2-link-a-pickup-point-to-a-shipping-policy) of the article [Configuring pickup points](/en/tutorial/adding-pickup-points--2R5ClQiwe4KoSQgsuiOw4E).

### Associating a pickup point with the warehouse of a physical store

Now, you must connect the pickup point with the warehouse of the physical store. This means that you need to inform the system that the products collected by customers at this pickup point (the physical store) will leave the local warehouse of the store. To do this, follow the steps below.

1. In the VTEX Admin of the desired franchise account, go to **Shipping** > __Shipping Strategy__ > __Warehouses__, or type __Shipping Strategy__ in the search bar at the top of the page.
2. Select a warehouse or create a new one. To learn how to create a new warehouse, read the article [Managing warehouses](/en/tutorial/managing-warehouses--tutorials_137#adding-a-warehouse).
3. Enable the __VTEX Sales App warehouse__ option by toggling the <i class="fas fa-toggle-on"></i> button.
4. Select the pickup points that will use the warehouse of the physical store.

With this, your warehouse is connected to the pickup point, and customers can now pick up products at this physical store. When you activate this option, __Logistics__ does not observe the trade policy of the loading dock connected to the warehouse in question. 

> ℹ️ When you associate the pickup point with the physical store's stock, this configuration applies to the stock of all active trade policies.

## Learn more
- [Configuring a white label seller as a pickup point](/en/tutorial/setting-up-seller-white-label-as-a-pickup-point--6fSUE2O0taaoKieAaiuc4e).

