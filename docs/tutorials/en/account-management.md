---
title: 'Account management'
id: tutorials_6285
status: DRAFT
createdAt: 2017-04-27T21:48:34.322Z
updatedAt: 2023-06-01T13:45:18.066Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.953Z
contentType: tutorial
productTeam: Identity
author: authors_2
slug: account-management
legacySlug: how-to-manage-accounts
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Your accounts are managed on the Account management module. To access it, click on your profile avatar, which can be identified by the first letter of your email address, then click on **Account settings** > **Account**.

On the page of each account, you find basic data about the virtual store, domain and multi-domain settings, access keys for APIs, the company logo and contact information.

<div class="alert alert-info">
Some of this data is useful solely for VTEX, and may not reflect in changes to the data displayed in the store.
</div>

## Active/Inactive button

When you disable this button, the store bcomes inaccessible to end users.

## "In production" button

By default, the store's initial status is not in production. In this status, there is no traffic to the store yet.

Under the standard VTEX contract, no percentage is charged on sales while the store is not in production.

## Company information

Here, you can edit the following company information:

- Account name (the identifier name of your account, used in the Admin access URL. It cannot be changed).
- Trade name
- Company name
- Tax ID

## Store

In this section, you can configure your store's identifying characteristics:
- [Store name](https://help.vtex.com/en/tutorial/what-is-the-store-name--3gh9mTNeMgs6Qe44e8IqQK#).
- Trade name.
- Hosts.

You can also click the `Configure this store` button to [Create a multistore](https://help.vtex.com/en/tutorial/como-criar-multiloja-multidominio--tutorials_510).

### Hosts

In the **Hosts** section, you need to add your store's main domain [set up with DNS pointing](https://help.vtex.com/en/tutorial/configurando-o-apontamento-de-dns-para-a-vtex--tutorials_4280).

<div class="alert alert-danger">
In case your operation has more than one VTEX account or subaccounts, do not trade domains among them. This will cause errors in different aspects of your store.
</div>

Click `Add New Domain` to add a new host, and then enter the domain in the text field. 

<div class="alert alert-warning">
If you add more than one domain as your store's host, they will all display the same content. However, we recommend registering only one domain and using redirections for the other ones. Learn more about redirections:
<ul><li><a href=”https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirection from other addresses</a></li>
<li><a href=”https://help.vtex.com/en/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configuring access without www</a></li></ul>  
</div>

#### Subdomains

Any domain registered this way needs to contain a subdomain, that may or may not be `www`. See the examples below:

- `mystore.com` - Not valid because it does not have a subdomain.
- `www.mystore.com` - Valid domain.
- `store.mybrand.com` - Valid domain.

## Contacts

The **Contacts** part is only visible to users that are registered there. This registration defines who can use the **[FullCleanUp](http://help.vtex.com/en/tutorial/understanding-how-to-maintain-a-database/)** panel and also who can view the **Security** information. This user is considered the sponsor user.

After a user has filled in and saved the **Name** and **E-mail** in the contacts field, an automatic e-mail is sent to it, informing about the registration and requesting the creation of a password (in the event he has no access to the admin).

<div class="alert alert-info">
The template for this automatic email can be changed in the <a href="https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84">Message Center</a> by modifying the <i>account registration</i> template.
</div>

![account registration](//images.ctfassets.net/alneenqid6w5/I0CttFz6ayQW2Q8uOkKmc/19184a55a9a8de5cb3e04088251a9c93/account_registration.jpg)

## Security

The [appKeys and appTokens](https://help.vtex.com/en/tutorial/chaves-de-aplicacao) used to authenticate integrations with your store are created here.

Only the Sponsor user is allowed to create appKeys and appTokens, since they give access to your store via API, which can be critical if not used by skilled professionals.
s tab, you can:

- View [store list](#stores).
- [Add new store](#creating-a-store).
- [Edit store](#editing-a-store).
- [Delete store](#deleting-a-store).

By clicking the **Stores** tab at the top of the screen, you will see a list with all the information of all the stores created in your VTEX account.

![Account details page - Stores](//images.ctfassets.net/alneenqid6w5/rAFyEsEDLBDqj3UBGufrb/19d4e782db194e0482398ffa382a9565/2en.png)

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
	- **Trade policy:** [Trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#) you want to associate with the new store.
5. If you wish to start the [go-live](https://help.vtex.com/en/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM) process for your store, fill in the **Hosts** field with your store's domain. Otherwise, leave it blank.
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

<div class="alert alert-warning">
Note that the main store, indicated with a star next to its name in the store list, cannot be deleted.
</div>

Learn more:
- [What is an account name?](https://help.vtex.com/en/tutorial/what-is-an-account-name--i0mIGLcg3QyEy8OCicEoC)
- [Sponsor user](https://help.vtex.com/en/tutorial/o-que-e-o-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy)
- [Transferring store ownership](https://help.vtex.com/en/tutorial/transferencia-de-propriedade-da-loja)
- [Configure your store's domain](https://help.vtex.com/en/tutorial/configurando-dominios-no-gerenciamento-da-conta--tutorials_2450)
- [Go-live](https://help.vtex.com/en/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM)

