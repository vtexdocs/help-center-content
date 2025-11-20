---
title: 'Managing sales associates in VTEX Sales App'
id: 5pqtuvi97FFZiGf7MlSe8q
status: PUBLISHED
createdAt: 2023-04-17T21:01:21.431Z
updatedAt: 2025-11-21T19:59:15.811Z
publishedAt: 2024-01-05T19:59:15.811Z
firstPublishedAt: 2023-04-25T20:13:04.431Z
contentType: trackArticle
productTeam: Shopping
slugEN: managing-sales-associates-in-vtex-sales-app
locale: en
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 6
---

After configuring the [VTEX Sales App basic settings](https://help.vtex.com/docs/tracks/vtex-sales-app-basic-settings), you can add sales associates to the system or manage the existing ones in the VTEX Admin.
On the VTEX Admin **Store Settings** page, there is a **Sales associates** category that displays a list of the sales associates added to your **VTEX Sales App**. It allows you to manage sales associate information across all [franchise accounts](/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) of your store, enabling you to [add](#adding-a-sales-associate), [search](#searching-for-a-sales-associate), [filter](#filtering-sales-associates), [edit](#editing-sales-associate-information), and [inactivate](#inactivating-a-sales-associate) them.

![vendedores-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/omnichannel/instore-first-steps-and-configurations/managing-sales-associates-in-instore_1.png)

The page displays the following information:

| Column Fields | Description                                                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name          | Name that identifies the sales associate, defined in the[Add sales associate](#adding-a-sales-associate) step.                                                              |
| Code          | Identifier code of each sales associate. It must be the same used in the physical store system.                                                                          |
| Store         | Identifier name of the[franchise account](/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) in which the sales associate is registered. |
| Email         | Sales associate access email.                                                                                                                                            |

## Adding sales associate

You can add a sales associate by following the steps below:

1. In the VTEX Admin, go to **Store Settings > Sales App > Sales Associates**, or type **Sales Associates** in the search bar at the top of the page.
2. Click the `+ Add Sales Associate` button.
3. Fill in the [Sales associate fields](#sales-associate-fields).
4. Click `Add`.
5. Click `Save` to confirm the sales associate's registration.

After being added, the sales associate will receive a confirmation email and be redirected to the sales associate's login option in Sales App.

> ⚠️ Sales associates registered in Sales App cannot access the VTEX Admin. If a sales associate tries to log in to Admin, their registration will be deleted.

### Sales associate fields

#### Identification

* **Sales associate name:** sales associate name. Mandatory field.
* **Sales associate code:** the code that identifies the sales associate. It must be the same used in the physical store system.
* **Email:** sales associate's Sales App access email. Mandatory field.
* **Allow access to other sales associates' performances:** Checkbox that allows you to view other sales associates' sales performance (when checked) or only access information about your own sales performance (when unchecked).

#### Physical store

* **Store:** the [franchise account](/en/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) in which the sales associate will be registered. Mandatory field.

> ℹ️ Changes can take up to 15 minutes to be processed and applied to Sales App.

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

## Inactivating a sales associate

You can inactivate a sales associate by following the steps below:

1. In the row of the sales associate you want to edit, click <i class="fas fa-ellipsis-v"></i>.
2. Click <i class="fa-solid fa-box-archive"></i> `Inactivate`.
3. Click `Inactivate` again.

Once the sales associate is inactivated, they will no longer have access to the VTEX Sales App nor be able to log in. To permanently delete a sales associate, please contact our [support](https://support.vtex.com/hc/en-us/requests).
