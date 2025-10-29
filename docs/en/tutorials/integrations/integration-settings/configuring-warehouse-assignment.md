---
title: 'Configuring Warehouse assignment'
id: 1yCEr7xQ0gVsTBB0ktMYVX
status: PUBLISHED
createdAt: 2025-09-19T17:08:56.742Z
updatedAt: 2025-09-19T19:10:28.249Z
publishedAt: 2025-09-19T19:10:28.249Z
firstPublishedAt: 2025-09-19T17:59:52.833Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: configuring-warehouse-assignment
legacySlug: configuring-warehouse-assignment
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

The **Warehouse assignment** feature allows you to sync different logistics points listed in the VTEX Admin with warehouse locations on Mercado Libre. This article presents the feature's page structure, its requirements, available actions, and how to assign inventories.  

## Requirements

To use the **Warehouse assignment** feature, your VTEX account must meet the three requirements below:  

- Have your account enabled for [warehouse assignment](/en/tutorial/alocacao-de-estoque-no-mercado-livre--6BfmmAFctWbi7hxJlxCU1S).  
- Have your account enabled for the new model for [adding products](/en/announcements/novo-modelo-de-anuncios-no-mercado-livre--3g7c72gcJk6WvKXNGfPTkb) and have at least one offer using the new model.  
- Have active warehouses in the VTEX Shipping Strategy module.  

## Page structure

The feature page can be accessed under **VTEX Admin > Marketplace > Mercado Libre > Preferences > Warehouse assignment.**

This page includes:  

- A search bar  
- A status filter  
- A table listing your store's warehouses on VTEX  

### Search bar and filter

In the page search bar, you can search for VTEX warehouses. In the filter, you can select one of the status options, **Pending** or **Assigned.**  
These options can be combined to further refine the seller's search.

### Warehouse table

The warehouse table consists of the columns: **VTEX warehouse, Type, Status** and **Mercado Libre warehouse.**  

- **VTEX warehouse** lists all active warehouses in the [Shipping strategy](/en/tutorial/gerenciar-estoque--tutorials_137) module.  
- **Type**  
- **Status** shows whether a VTEX warehouse is assigned to a Mercado Libre warehouse or is still pending.  
- **Mercado Libre warehouse** displays the `Assign` button if a VTEX warehouse has the **Pending** status. If the VTEX warehouse has the status **Assigned,** it shows the name and ID of the Mercado Libre warehouse.  

> ℹ️ The same Mercado Libre warehouse can be assigned to multiple VTEX warehouses.  

## Assigning warehouses  

To assign a **VTEX warehouse** to a **Mercado Libre warehouse,** follow the steps below:

1. In VTEX Admin, go to **Marketplace > Marketplace > Mercado Libre > Preferences > Warehouse assignment.**  
2. Find the VTEX warehouse you want to assign.  
3. Click `Assign`. A window will open with the list of available warehouses on Mercado Libre.  
4. Select the desired Mercado Libre warehouse.  
5. Click `Confirm`. The message **Warehouse assignment updated successfully** will be displayed.  

> ℹ️ Repeat the steps above for each VTEX warehouse you want to assign to a Mercado Libre warehouse.  

Each row in the table presents information about a single warehouse on VTEX. In addition to the information mentioned above, there's also the <i class="ph ph-dots-three-vertical"></i> `options` button, with the following actions:  

- View details  
- Reassign warehouse  
- Configure delivery capacity  
- Manage VTEX warehouse  
- Unassign warehouse  

### Viewing details

This option allows the seller to view the information of the Mercado Libre warehouse associated with a VTEX warehouse.  

1. Find the desired VTEX warehouse.  
2. In the actions menu <i class="ph ph-dots-three-vertical"></i>, click `View details`.  
3. A side modal will open with the following information:  

  - Store name  
  - Full address  
  - Mercado Libre warehouse ID  
  - Latitude and longitude coordinates  

### Reassigning warehouses

With this option, the seller can change the association between a VTEX warehouse and a Mercado Libre warehouse.  

1. Find the desired VTEX warehouse.  
2. In the actions menu <i class="ph ph-dots-three-vertical"></i>, click `Reassign warehouse`.  
3. A modal will open with the list of available warehouses on Mercado Libre.  
4. Select a new warehouse.  

> ℹ️ The currently assigned warehouse will be pre-selected, but to make the change effective, you must choose another one.  

5. Tap `Confirm` to complete the reassignment.  

### Configuring delivery capacity

With this option, the seller can configure the handling time and the maximum number of orders that can be processed per day at a specific warehouse.  

1. Find the desired warehouse.  
2. In the actions menu <i class="ph ph-dots-three-vertical"></i>, click `Configure delivery capacity`.  
3. You'll be redirected to the delivery capacity management screen.  
4. Then configure the following:  
  - Day  
  - Cutoff time  
  - Maximum shipping capacity  
5. Click `Apply` to save.  

> ⚠️ Changes made after the cutoff time will only take effect the following week.  

### Managing VTEX warehouses

When you select this option, you'll be redirected to the warehouse configuration screen, where you can edit the logistical details by following the steps below.  

1. Select the desired warehouse.  
2. In the actions menu <i class="ph ph-dots-three-vertical"></i>, click `Manage VTEX warehouse`.  
3. You'll be taken to the corresponding warehouse record in the [Logistics module](/en/tutorial/logistica--53udnvI5eBy8DKo8FOjMoP).  
4. Make the desired changes following the [Managing warehouses](/en/tutorial/gerenciar-estoque--tutorials_137) tutorial.  

### Unassigning warehouses

With this option, the seller can undo the association between a VTEX warehouse and a Mercado Libre warehouse by following the steps below.  
1. Select the desired warehouse.  
2. In the actions menu <i class="ph ph-dots-three-vertical"></i>, click `Unassign warehouse`.  
3. Click `Confirm`.  

> ⚠️ Unassigning a warehouse will reset the inventory on Mercado Libre, but it won't affect the VTEX warehouse.  
