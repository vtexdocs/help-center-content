---
title: 'Sponsor user'
id: 3oPr7YuIkEYqUGmEqIMSEy
status: PUBLISHED
createdAt: 2019-01-24T20:45:43.693Z
updatedAt: 2022-10-25T15:05:55.777Z
publishedAt: 2022-10-25T15:05:55.777Z
firstPublishedAt: 2019-01-24T22:00:34.038Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slugEN: what-is-the-sponsor-user
locale: en
legacySlug: what-is-the-master-user
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Each VTEX account has a single Sponsor user – the only one who is granted full access to every section in the Admin, including critical maintenance and authorization actions.

>⚠️ The Sponsor user is not the same as the **Owner (Admin Super)**. The **Owner (Admin Super)** is a License Manager role that defines the permissions of a user in your store. It can even be assigned to multiple users.

The Sponsor management page allows you to identify the current Sponsor user, transfer store ownership and view the activity log associated with Sponsor user actions. To access this page, navigate to **Account settings** > **Account management** > **Account**, scroll down to the Contact section and click `Sponsor management`.

## Actions restricted to the Sponsor user

Only the Sponsor user can perform these critical maintenance and authorization actions:

* [Transfer store ownership](https://help.vtex.com/en/tutorial/transferring-store-ownership) to a new Sponsor user
* [Database Maintenance (Full Cleanup)](https://help.vtex.com/en/tutorial/database-maintenance-full-cleanup--34P9LGs7BCIQK6acQom802) operations, including:
    * Re-register prices in SmartCheckout
    * Delete Indexer Products
    * Delete Products/SKUs and related items
    * Delete Categories, Brands, Fields, and related items
    * Delete Sellers and related items
    * Schedule full reindexing
* Authenticating your account in our native connectors, including:
    * [Facebook](https://help.vtex.com/en/tracks/facebook-integration--7h8KvIC4DbRRc8VlyJ8PFc/5OP69kHWKca01wLH0w10jX)
    * [Google Shopping](https://help.vtex.com/en/tracks/integrating-with-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/44hAYlKYSRZMTNY3ELxeQ2)
    * [Mercado Libre](https://help.vtex.com/en/tracks/mercado-libre-integration-set-up--2YfvI3Jxe0CGIKoWIGQEIq/4leBEAd22Icm46kGeiGgak)
* [Approve order cancellation requests](https://help.vtex.com/en/tutorial/how-does-cancellation-work-when-requested-by-the-customer--3wEI6DUNtecooG2Ki4Akqo)

In addition, when VTEX needs to communicate store-sensitive information, such as changes in roles, such communication is done directly and exclusively with the Sponsor user.

>ℹ️ The creation of [authentication credentials](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) (appKey/appToken) for API integrations is no longer restricted to the Sponsor user. See this [announcement](https://help.vtex.com/en/announcements/changes-in-the-name-and-restricted-actions-available-to-the-master-user) for more details about this change.
