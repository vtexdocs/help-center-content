---
title: 'Managing Loading Docks'
id: 7K3FultD8I2cuuA6iyGEiW
status: PUBLISHED
createdAt: 2017-08-03T14:22:38.666Z
updatedAt: 2024-09-03T15:43:32.430Z
publishedAt: 2024-09-03T15:43:32.430Z
firstPublishedAt: 2017-08-03T14:25:42.704Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-loading-docks
locale: en
legacySlug: how-to-register-a-dock
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Loading docks are one of the logistical stages of your store. A loading dock represents an intermediate point between the warehouse and the carrier. It is the location where products will be shipped from. Loading docks receive items coming from warehouses or distribution centers and deliver them to carriers, which will deliver them to the final recipient. 

>ℹ️ To learn more about loading docks in the VTEX system, see [Loading docks](https://help.vtex.com/en/tutorial/loading-dock--5DY8xHEjOLYDVL41Urd5qj).

This article describes how to:

* [Add a new loading dock](#adding-a-loading-dock).
* [Fill in the fields and configure the loading dock priority](#filling-in-the-fields).
* [Edit an existing loading dock](#editing-a-loading-dock).
* [Delete a loading dock](#delete-a-loading-dock).

To configure a loading dock correctly, you need to: create the loading dock, fill in the fields for adding it (which include working hours and priority), and associate the loading dock with a [trade policy](https://help.vtex.com/en/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE), a warehouse, and a [shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140?&utm_source=autocomplete). 

>⚠️ For the logistics system to work as expected, we suggest that you configure it in the following order:
>
> *[Trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
> * [Shipping policy](https://help.vtex.com/en/tutorial/politica-de-envio--tutorials_140)
> * [Loading dock](https://help.vtex.com/en/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj)
> * [Warehouse](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)

## Adding a loading dock

To add a new loading dock, access the VTEX Admin and follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.  
2. In the **Loading Docks** tab, click on the `Create Loading Dock` button.  
3. Fill in the [fields](#filling-in-the-fields) and click `Save Changes`.

## Filling in the fields

Here are the fields you need to fill to add a new loading dock:

* **Name:** the name of the loading dock.
* **ID:** the loading dock identifier. If this field is left blank, an ID will be created automatically.
* **[Shipping Policies](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) and [Trade Policies:](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE)** select the shipping policy and the trade policy you want to associate with the loading dock. Please note that both policies must have been previously created.
* **Time and Priority: **
    * **Processing time:** time that will be considered when calculating delivery time. It is the time it takes for the product to arrive at the loading dock. Fill in the number of days, hours, and minutes.
    * **Time overhead:** the time that will be used to choose a loading dock when two or more loading docks have the same processing time. It is not considered when calculating delivery time. Fill in the number of days, hours, and minutes.
    * **Priority:** value used as a tie-breaking rule when selecting a loading dock. Select a value by clicking the numeric bar.
* **Integrations:** it is used to integrate an external WMS (warehouse management system) software into the order processing flow.
* **Address**: the address of the loading dock. Fill in the country, ZIP code, street, number, state, and city.

### Configuring criteria for loading dock selection

You can configure which loading dock will have preference when sending products to carriers. Three fields influence the choice of the loading dock: 

* **Processing time:** when there is more than one loading dock, the system uses this field to prioritize the loading dock with lower processing time.
* **Time overhead:** time used to choose a loading dock when there is more than one loading dock with the same processing time. The lower the value entered in this field, the greater the possibility of the loading dock being chosen. This field is not considered when calculating the delivery time.
* **Priority:** value used as a tie-breaking rule for choosing between loading docks with the same processing time and time overhead. The greater the value entered in this field, the greater the possibility of the loading dock being chosen.

## Editing a loading dock

To edit a loading dock, access the VTEX Admin and follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.    
2. Click on the **Loading Docks** tab to view all the loading docks configured.  
3. Click on the three dots icon in the card of the loading dock you want to edit.  
4. Click on `Edit`.  

## Deleting loading docks

To delete a loading dock, access the VTEX Admin and follow the steps below:

1. In the VTEX Admin, go to **Shipping > Shipping Strategy**, or type *Shipping Strategy* in the search bar at the top of the page.    
2. Click on the **Loading Docks** tab to view all the loading docks configured.
3. Click on the three dots icon in the card of the loading dock you want to delete.Click `Delete`.  
