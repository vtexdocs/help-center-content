---
title: 'Sales Associates inStore (Beta)'
id: 4rzit1pzp28km4HSDEdrEC
status: DRAFT
createdAt: 2022-12-02T18:05:56.305Z
updatedAt: 2023-04-26T15:16:49.107Z
publishedAt: 
firstPublishedAt: 2022-12-02T18:40:20.036Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: sales-associates-instore-beta
locale: en
legacySlug: sales-associates-instore-beta
subcategory: 5SE2asHiQtHKfbnFru8RWH
---

<div class ="alert alert-info">
<p>This functionality is in Beta stage, which means we are working to improve it. If in doubt, contact <a href="https://support.vtex.com/hc/en-us/requests">our Support</a>.</p>
</div>

**Sales associates** is a VTEX Admin **Store Settings** page that displays a list of the sales associates registered in your [inStore](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf) app. It allows you to manage sales associate information across all your store's [franchise accounts](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl).

This page allows you to manage your sellers from the following actions:

* [Add](#adding-a-sales-associate)
* [Search](#searching-for-a-sales-associate)
* [Filter](#filtering-sales-associates)
* [Edit](#editing-sales-associate-information)
* [Delete](#deleting-a-sales-associate)

![vendedores-en](https://images.ctfassets.net/alneenqid6w5/1PDeYBlqDILaEOFGOE7H8x/da3c90c0dfb50c0b5c40b9743b421c8b/image.png)

The page displays the following information: 

  | Column Fields | Description                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name             | Name that identifies the sales associate, defined in the [Add sales associate](#adding-a-sales-associate) step. |
| Code           | Identifier code of each sales associate. It must be the same used in the physical store system.                                                                                                 |
| Store             | Identifier name of the [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) in which the sales associate is registered.                              |
| Email            | Sales associate access email.                                                                                                                                           |

## Adding a sales associate

You can add a sales associate by following the steps below:

1. In the VTEX Admin, go to **Store Settings > inStore > Sales Associates**, or type **Sales Associates** in the search bar at the top of the page.
2. Click the `+ Add Sales Associate` button.
3. Fill in the [Sales associate fields](#sales-associate-fields).
4. Click `Add`.
5. Click `Save` to confirm the sales associate's registration.  

After creation, the sales associate will receive a confirmation email and will be redirected to the sales associate's login option in the inStore app.

![email-vendedor-pt](https://images.ctfassets.net/alneenqid6w5/28VbbIXujzHcE3BriNtZPq/3aa9729eb2211875302b7316dbe46c93/image.png)

<div class ="alert alert-warning">
<p>Sales associates registered in inStore cannot access the VTEX Admin. If a sales associate tries to log in to Admin, their registration will be deleted.</p> 
</div>

### Sales associate fields

#### Identification

* **Sales associate name:** sales associate name. Mandatory field.
* **Sales associate code:** the code that identifies the sales associate. It must be the same used in the physical store system.
* **Email:** sales associate's inStore access email. Mandatory field.

#### Physical store

* **Store:** the [franchise account](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) in which the sales associate will be registered. Mandatory field.

<div class ="alert alert-info">
<p>Changes can take up to 15 minutes to be processed and applied to inStore.</p> 
</div>

## Searching for a sales associate

You can search for a sales associate using the search bar by entering their name, email, or store.

## Filtering sales associates

Click the `Store` filter to filter sales associates by the name of a specific physical store. 

## Editing sales associate information

You may need to change a sales associate's store to a new one, so you need to edit their information. You can edit a sales associate by following the steps below:

1. In the row of the sales associate you want to edit, click <i class="fas fa-ellipsis-v"></i>.
2. Click <i class="fas fa-pencil-alt"></i> `Edit`.
3. Change the information you want.
4. Click `Save`.

## Deleting a sales associate

You can delete a sales associate by following the steps below:

1. In the row of the sales associate you want to edit, click <i class="fas fa-ellipsis-v"></i>.
2. Click <i class="fas fa-trash"></i> `Delete`.
3. Click `Delete` again.

Once the sales associate is deleted, they will no longer have access to the inStore app nor be able to log in.

## Learn more

* [What is inStore?](https://help.vtex.com/en/tracks/instore-getting-started-and-setting-up--zav76TFEZlAjnyBVL5tRc/7fnnVlG3Kv1Tay9iagc5yf)
* [What is a franchise account?](https://help.vtex.com/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl)
