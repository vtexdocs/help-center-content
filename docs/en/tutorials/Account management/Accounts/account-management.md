---
title: 'Account management'
id: tutorials_6285
status: ARCHIVED
createdAt: 2017-04-27T21:48:34.322Z
updatedAt: 2023-06-01T13:45:18.066Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:18.953Z
contentType: tutorial
productTeam: Identity
author: authors_2
slugEN: account-management
locale: en
legacySlug: how-to-manage-accounts
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

Your accounts are managed on the Account management module. To access it, click on your profile avatar, which can be identified by the first letter of your email address, then click on **Account settings** > **Account**.

On the page of each account, you find basic data about the virtual store, domain and multi-domain settings, access keys for APIs, the company logo and contact information.

>ℹ️ Some of this data is useful solely for VTEX, and may not reflect in changes to the data displayed in the store.

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

>❗ In case your operation has more than one VTEX account or subaccounts, do not trade domains among them. This will cause errors in different aspects of your store.

Click `Add New Domain` to add a new host, and then enter the domain in the text field. 

>⚠️ If you add more than one domain as your store's host, they will all display the same content. However, we recommend registering only one domain and using redirections for the other ones. Learn more about redirections:
>
> *<a href=”https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirection from other addresses</a>
>
> *<a href=”https://help.vtex.com/en/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configuring access without www</a>

#### Subdomains

Any domain registered this way needs to contain a subdomain, that may or may not be `www`. See the examples below:

- `mystore.com` - Not valid because it does not have a subdomain.
- `www.mystore.com` - Valid domain.
- `store.mybrand.com` - Valid domain.

## Contacts

The **Contacts** part is only visible to users that are registered there. This registration defines who can use the **[FullCleanUp](http://help.vtex.com/en/tutorial/understanding-how-to-maintain-a-database/)** panel and also who can view the **Security** information. This user is considered the sponsor user.

After a user has filled in and saved the **Name** and **E-mail** in the contacts field, an automatic e-mail is sent to it, informing about the registration and requesting the creation of a password (in the event he has no access to the admin).

>ℹ️ The template for this automatic email can be changed in the [Message Center](https://help.vtex.com/en/tutorial/understanding-the-message-center--tutorials_84) by modifying the <i>account registration</i> template.

![account registration](//images.ctfassets.net/alneenqid6w5/I0CttFz6ayQW2Q8uOkKmc/19184a55a9a8de5cb3e04088251a9c93/account_registration.jpg)

## Security

The [appKeys and appTokens](https://help.vtex.com/en/tutorial/chaves-de-aplicacao) used to authenticate integrations with your store are created here.

Only the Sponsor user is allowed to create appKeys and appTokens, since they give access to your store via API, which can be critical if not used by skilled professionals.
