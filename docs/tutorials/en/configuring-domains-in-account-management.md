---
title: "Configure your store's domain"
id: tutorials_2450
status: PUBLISHED
createdAt: 2017-04-27T21:55:00.603Z
updatedAt: 2023-05-31T22:31:46.690Z
publishedAt: 2023-05-31T22:31:46.690Z
firstPublishedAt: 2017-04-27T23:03:51.625Z
contentType: tutorial
productTeam: Identity
author: authors_3
slug: configuring-domains-in-account-management
locale: en
legacySlug: configuring-domains-in-license-manager
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

Configuring domains ensures that the address access is directed correctly to the VTEX store. Below you can learn how to [register a new domain](#register-new-domain) or [change the domain of an active store](#change-store-domain).

>❗ In case your operation has more than one VTEX account or subaccounts, do not trade domains among them. This will cause errors in different aspects of your store.

>⚠️ If you add more than one domain as your store's host, they will all display the same content. However, we recommend registering only one domain and using redirections for the other ones. Learn more about redirections:
>
> *<a href=”https://help.vtex.com/en/tutorial/redirecionamento-de-outros-enderecos--3Xi2AeLUx2QpJQu8DTX8KQ”>Redirection from other addresses</a>
>
> *<a href=”https://help.vtex.com/en/tutorial/configurando-acesso-sem-www--tutorials_4278”>Configuring access without www</a>

## Subdomain

Any domain registered this way needs to contain a subdomain, that may or may not be `www`. See the examples below:

- `mystore.com` - Not valid because it does not have a subdomain.
- `www.mystore.com` - Valid domain.
- `store.mybrand.com` - Valid domain.

<div class = "alert alert-info">
  Learn how to <a href="https://help.vtex.com/en/tutorial/configuring-access-without-www--tutorials_4278">configure access without www</a>.
</div>

## Register new domain

1. Click on your profile avatar, which can be identified by the first letter of your email address.
2. Click on **Account settings**.
3. Click on **Account**.
4. Click on the **Stores** tab.
5. Click on the actions button <i class="fas fa-ellipsis-v"></i> corresponding to the store where you want to register the domain.
6. Enter the domain in the **Hosts** field.
7. Click on the `Add` button.
8. Click on the `Save` button.

After that you can [set up the DNS pointing to VTEX](https://help.vtex.com/en/tutorial/configuring-dns-pointing-to-vtex--tutorials_4280).

## Change store domain

The VTEX platform is prepared to support domain changes without adverse impacts. To do so, just follow the steps below:

1. Create new Host entries, as described above. At this moment, the DNS of the new domain should not be pointed to VTEX yet. 
2. Check the settings of the new Portal. This step is crucial for the Checkout to continue operating after the change. You must check whether the Sites set up are connected to some inexisting Account Name created in License Manager. Learn more about the [portal settings](/en/faq/configure-template-in-the-smartcheckout).
3. Point the DNS of the new domain to VTEX. Learn more about [DNS pointing](/en/tutorial/configuring-dns-pointing-to-vtex/).
4. After DNS propagation of the new host, remove the old ones, keeping only the new.
