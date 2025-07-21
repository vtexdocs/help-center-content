---
title: ' Account management'
id: 2vhUVOKfCaswqLguT2F9xq
status: PUBLISHED
createdAt: 2023-04-25T20:31:19.403Z
updatedAt: 2024-03-09T00:12:08.991Z
publishedAt: 2024-03-09T00:12:08.991Z
firstPublishedAt: 2023-05-24T17:48:42.796Z
contentType: tutorial
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: account-management
locale: en
legacySlug: account-details-page
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

The **Account** page allows you to view and manage your VTEX account details. To access it, click your **profile avatar** that has the first letter of your email, and click **Account Settings** > **Account.**

![Admin v4 account settings menu EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_1.jpg)

<div class="alert alert-warning">
This screen has no application key details. Learn where to find and manage this information in the article <a href="https://help.vtex.com/en/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet">Application Keys</a>.
</div>

The **Account** page is divided into two tabs: [General](#general) and [Stores](#stores). Learn more about each tab below.

## General

The **General** tab's features are available in the [Details](#details), [Company Information](#company-information), and [Owner](#owner) sections. This tab allows you to:

![Account details page - account section](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_2.png)

This tab allows you to:

- View [account details](#details).
- View and edit [company information](#company-information).
- View [account-sponsor-user information](#sponsor).

### Details

In this section, you can check the basic information of your VTEX account.

![Account details page - details](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_3.png)

- **Main account name:** [VTEX account name](/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC).
- **Creation date:** The date your account was created.
- **Account ID:** The unique code that identifies your account.
- **Go-live date:** The date your account was activated and available for configuration and store implementation.
- **Account status:** Indicates whether your account is in production or not. An account in production is the first step to [making your store available for customers in a public domain](/en/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM). This status can be either **in production** or **not in production**.
- **Admin platform status:** Indicates whether or not your account is active, which means that the VTEX Admin and APIs are available for the configuration and deployment of your store. This status can be **Active** or **Inactive**.

### Company information

In this section, you will see the following information about your company:

- Logo
- Trading name
- Company registration number

![Account details page - Company information](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_4.png)

#### Editing company information

You can edit the company information by following the steps below:

1. Go to the **Account** page by clicking your **profile avatar** that has the first letter of your email address, and then go to **Account Settings** > **Account**.
2. Go to the **Company Information** section.
3. Click `Edit`.
4. Change the desired information regarding:
	- **Logo**
	- **Trading name**
	- **Legal name**
	- **Company reg. no.**
5. Click `Save`.

<div class="alert alert-warning">
Your logo must be a JPG, GIF, or PNG file with a maximum size of 800 KB.
</div>

### Sponsor

This section displays the account sponsor details. Each VTEX account has only one sponsor account, which has full access to all Admin sections, including important maintenance and authorization actions.

<div class = "alert alert-info">
Learn more about the <a href="https://help.vtex.com/pt/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy">sponsor user</a>.
</div>

![Account details page - Sponsor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_5.png)

If you are the sponsor user, you can [transfer store ownership](/en/tutorial/transferencia-de-propriedade-da-loja) in this section. This allows you to transfer the store's ownership to another user.

## Stores

In the Stores tab, you can:

- View [store list](#stores).
- [Add new store](#creating-a-store).
- [Edit store](#editing-a-store).
- [Delete store](#deleting-a-store).

By clicking the **Stores** tab at the top of the screen, you will see a list with all the information of all the stores created in your VTEX account.

![Account details page - Stores](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Account%20management/Accounts/account-management_6.png)

For each store, you can view the following details:

- **Store name:** Name that will identify your store.
- **Trading name:** Business name of your store.
- **Hosts:** Domains related to the store.

You can use the search box to filter the stores displayed in the list by any of the attributes.

You can also [create a new store](#create-store), [edit a store](#edit-store), or [delete](# delete-store) existing stores.

### Creating a store

Follow the steps below to create a store:

1. Go to the **Account** page by clicking your **profile avatar** that has the first letter of your email, and then go to **Account Settings** > **Account**.
2. Click the **Stores** tab at the top of the screen.
3. Click the `+ New Store` button.
4. Fill in the basic store information:
	- **Store name:** Name that will identify your store.
	- **Trading name:** Business name of your store.
	- **Locale:** Preset language associated with this store.
	- **Trade policy:** [Trade policy](/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#) you want to associate with the new store.
5. If you wish to start the [go-live](/en/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM) process for your store, fill in the **Hosts** field with [your store's domain](/en/tutorial/configurando-dominios-no-license-manager). Otherwise, leave it blank.
6. Click the `Create` button.

<div class = "alert alert-info">
  To learn more about configuring your store's <b>Hosts</b>, read the article  <a href="https://help.vtex.com/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450">Configure your store domain</a>.
</div>

<div class="alert alert-warning">
Do not use a ".com" domain in the Store Name field. This type of entry can only exist in the Hosts field.
</div>

### Editing a store

Follow the steps below to edit information from an existing store:

1. Go to the **Account** page by clicking your **profile avatar** that has the first letter of your email, and then go to **Account Settings** > **Account**.
2. Click the **Stores** tab at the top of the screen.
3. Click the action button<i class="fas fa-ellipsis-v"></i> corresponding to the store you want to edit.
4. Click `Edit`.
5. You will see the account edit page. Edit the information you want.
6. Click `Save`.

### Deleting a store

Follow the steps below to delete a store:

1. Go to the **Account** page by clicking your **profile avatar** that has the first letter of your email, and then on **Account Settings** > **Account**.
2. Click the **Stores** tab at the top of the screen.
3. Click the action button <i class="fas fa-ellipsis-v"></i> corresponding to the store you want to delete.
4. Click `Delete`.
5. You will see a confirmation modal. Click `Delete`.

The name of the removed store cannot be used again.

<div class="alert alert-warning">
Note that the main store, indicated with a star next to its name in the store list, cannot be deleted.
</div>

## Learn more

- [What is an account name?](/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
- [Sponsor user](/en/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy)
- [Transferring store ownership](/en/tutorial/transferencia-de-propriedade-da-loja)
- [Configure your store's domain](/en/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450)
- [Go-live](/en/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM)

