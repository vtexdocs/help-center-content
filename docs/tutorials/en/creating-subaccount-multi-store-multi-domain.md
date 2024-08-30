---
title: 'How to create a subaccount / multistore / multidomain'
id: tutorials_510
status: PUBLISHED
createdAt: 2017-04-27T22:03:17.733Z
updatedAt: 2024-01-18T17:56:47.931Z
publishedAt: 2024-01-18T17:56:47.931Z
firstPublishedAt: 2017-04-27T23:03:27.832Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: creating-subaccount-multi-store-multi-domain
locale: en
legacySlug: creating-multi-store-multi-domain
subcategory: yMp6sKDiJEi66CGAIQ4ma
---

A subaccount, multistore or multidomain is a second store administered within the same VTEX administrative panel. This feature is usually used when the store has other brands but there's a similarity of logistics and payment methods or when the store needs another environment, for example for B2B sales.

The creation of a multistore is free of charge for merchants. However, if you need to [request an additional commercial policy](https://help.vtex.com/en/tutorial/requesting-an-additional-trade-policy--61vuFOw4yGh6nwSmkLJL1X), additional costs will apply.

In a multidomain environment it's possible to define distinct layouts (in addition to products and/or prices) for each store, varying according to the domain. Example: `accountname.com` and `b2baccountname.com`.

## Creating a new store in the Account management

The first step in setting up multistore is to configure a new store on the account details page. Learn how to do this with the [Account Management](https://help.vtex.com/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq) guide.

Note that you also need to specify the domain of your new store. Learn more with the [Configuring your store's domain](https://help.vtex.com/tutorial/configuring-domains-in-account-management--tutorials_2450) guide.

## Setting up a new website in Legacy CMS Portal

The configuration in the Legacy CMS Portal will actually create the environment that can be accessed by the clients. The walkthrough below demonstrates how to create a website by copying the folder structure of your main website to make it easier to create your layout. However, this setting can also be done by creating a new website.

1. Access the **Storefront > Layout** module.
2. Click **CMS**.
3. Click **Sites and channels**.
4. Click on your main website.
5. Click the `Copy Website` button.
6. Click **Sites and channels** again in the side column.
7. Click on the created website.
8. Change its name.
9. Click the `Save Website` button.
10. On the same screen, click the `Add` button.
11. Fill in the **Store name from License Manager** with the store value created in the previous step in the __Account management__.
12. Fill in **Available sales policies** by selecting the sales policies you will associate with this store.
13. Click the `Save Binding` button.
14. Click the `Save Website` button.

Pay attention to the ordering of your sales policies. They should always be ordered according to their use on websites, i.e. first the commercial policies that are used by websites (main website, b2b, etc.) and then the sales policies that are not associated with any website (marketplace sales policies, for example). 

This is because if there's a sales policy that is not associated with any website, it's available to all of them. And should it come before the sales policy associated with the website, this website will be assigned to the wrong sales policy.

To learn more about the relationship between websites and sales policies, check the article [How the relationship between websites and sales policies works](https://help.vtex.com/en/tutorial/how-the-relationship-between-websites-and-business-policies-works--1VuakBcyNOgg4AM4cUeeQg).

### Editing the dictionary

You can also define specific variables for each website using the dictionary. To do so, within the website, click **dictionary**.

## Deleting a subaccount / multistore / multidomain

To delete an existing multistore, follow the steps described in the [Deleting a store section of the Account management guide](https://help.vtex.com/en/tutorial/account-details-page--2vhUVOKfCaswqLguT2F9xq#deleting-a-store). The name of the removed subaccount cannot be used again.

## Learn more

- [Choosing between a multi-store architecture or an additional environment](https://help.vtex.com/en/tutorial/choosing-between-a-multi-store-architecture-or-an-additional-environment--4HRNpa1OCKZ5YzP8yiilBL)
