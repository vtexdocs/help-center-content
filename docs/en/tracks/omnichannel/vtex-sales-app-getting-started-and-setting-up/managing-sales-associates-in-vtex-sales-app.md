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

After the merchant has added the sales associate, they can create an access password, as described in the [Sales associate first access](#sales-associate-first-access) section.

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

## Sales associate first access

To access the **Sales App**, the sales associate must follow the steps below:

>ℹ️ Sales associates donn't have access to the store's VTEX Admin, as the **Sales App** access is created in another environment.

1. After the merchant [adds the sales associate](#adding-a-sales-associate), an email is sent to the associate’s registered email address.
2. By clicking the link in the email, they can create their access.
3. On the page that opens, they enter their registered email address and click to continue.
4. After receiving a confirmation code via email, they enter the code in the designated field.
5. Then, click to continue.
6. In the **Sales App** login window, select the option to log in with your email and password. This option is required; otherwise, an error will be returned.
7. In the window that opens, the sales associate creates a password that meets the following requirements:

    * 8 characters
    * 1 number
    * 1 uppercase letter
    * 1 lowercase letter

8. They click to confirm and create it.

    >⚠️ The page may display an access error at this stage, which doesn't affect the password creation process; you can close the page.

Once this is done, the sales associate can access **Sales App**. All they need to do is open a new browser window and access the link `https://{storeName}.myvtex.com/assisted-sales/sales-app`, replacing `{storeName}` with the actual name of the store, and use the password they created.

### Resetting the password

If the sales associate forgets their password, they can reset it by accessing the **Sales App** using the link `https://{storeName}.myvtex.com/assisted-sales/sales-app`, replacing `{storeName}` with the name of the store. By choosing the option to recover their password, they can complete the recovery process using their registered email address.
