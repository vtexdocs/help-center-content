---
title: 'Managing physical stores in VTEX Sales App'
id: 5PSjRstg7UU4lOm0s8aqKN
status: PUBLISHED
createdAt: 2020-06-29T13:30:51.354Z
updatedAt: 2025-11-11T18:59:24.074Z
publishedAt: 2023-07-26T18:59:24.074Z
firstPublishedAt: 2020-06-29T14:22:11.121Z
contentType: trackArticle
productTeam: Shopping
slugEN: managing-physical-stores-in-vtex-sales-app
locale: en
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 5
---

After configuring the [VTEX Sales App basic settings](/en/docs/tracks/vtex-sales-app-basic-settings), you can add more physical stores to the system or manage the existing ones in the VTEX Admin.

**Physical store** is a page in the VTEX Admin **Store Settings** that displays the physical stores added to the [VTEX Sales App](/en/docs/tracks/what-is-vtex-sales-app) app and allows you to manage their information.

This page allows you to perform the following actions:

* [Add](#adding-a-physical-store)
* [Search](#searching-for-a-physical-store)
* [Edit](#editing-a-physical-store)
* [Inactivate](#inactivating-a-physical-store)

![loja-fisica-EN](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/instore-first-steps-and-configurations/adding-new-stores-to-instore_1.png)

The page displays the following information: 

| Column Fields   | Description                                                                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name               | Name that identifies the physical store, set in the [Add physical store](#adding-a-physical-store) step. |
| Business telephone number | Physical store's business phone number.                                                                                                                                               |
| City             | City where the physical store is located.                                                                                                                                                 |
| State             | State where the physical store is located.                                                                                                                                                 |
| Franchise account     | [Franchise account](/en/docs/tutorials/what-is-a-franchise-account) to which the physical store is associated.                                                       |
| Trade policy | [Trade policy](/en/docs/tutorials/how-trade-policies-work) applied to the physical store.                                              |

## Adding a physical store

You can add a physical store by following the steps below:

1. In the VTEX Admin, go to **Store Settings > VTEX Sales App > Physical Stores**, or type **Physical Stores** in the search bar at the top of the page.
2. Click the `+ Add Store` button.
3. Fill in the [Physical store fields](#physical-store-fields).
4. Click `Add`.
5. Click `Save` to add the physical store.   

### Physical store fields

![loja-fisica2-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/instore-first-steps-and-configurations/adding-new-stores-to-instore_2.png)

#### Identification

* **Store name:** physical store name. Mandatory field.
* **Business phone:** physical store business phone number.

#### Address

* **Country:** the country where the physical store is located. Mandatory field.
* **Postal code:** postal code where the physical store is located. Mandatory field.
* **Street:** the name of the street where the physical store is located. Mandatory field.
* **Number:** the number of the physical store's street location. Mandatory field.
* **Additional information:** additional information for the physical store address, such as suite number
* **Neighborhood:** the neighborhood where the physical store is located. Mandatory field.
* **City:** the city where the physical store is located. Mandatory field.
* **State:** The state where the physical store is located. Mandatory field.

#### Technical information

* **Franchise account:** the [franchise account](/en/docs/tutorials/what-is-a-franchise-account) in which the physical store must be added.
* **Trade policy:** the [trade policy](/en/docs/tutorials/how-trade-policies-work) that will be applied in the physical store. Mandatory field.
* **Pickup point:** the [pickup point](/en/docs/tutorials/pickup-points) associated to this physical store, where customers pick up their orders. 

> ℹ️ Changes can take up to 15 minutes to be processed and applied to VTEX Sales App.

## Searching for a physical store

You can search for a physical store using the search bar by typing in the name of the store.

## Editing a physical store

You can edit a physical store’s information by following the steps below:

1. In the row of the physical store you want to edit, click <i class="fas fa-ellipsis-v"></i>.
2. Click <i class="fas fa-pencil-alt"></i> `Edit`.
3. Change the information you want.
4. Click `Save`.

## Inactivating a physical store

You can inactivate a physical store by following the steps below:

1. In the row of the physical store you want to edit, click <i class="fas fa-ellipsis-v"></i>.
2. Click <i class="fa-solid fa-box-archive"></i> `Inactivate`.
3. Click `Inactivate` again.

When a store is inactivated, all the vendors registered with it will lose access to the VTEX Sales App application and will no longer be able to log in. 

To permanently delete a store, please contact our [support](https://support.vtex.com/hc/en-us/requests).
