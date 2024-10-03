---
title: "Publishing an app to the current account's registry"
id: 4YZ1gbhtxmC4cYUmIaOs2Y
status: ARCHIVED
createdAt: 2018-02-22T01:46:04.405Z
updatedAt: 2020-03-13T21:25:00.136Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:49:05.945Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slugEN: publishing-an-app-to-the-current-accounts-registry
locale: en
legacySlug: publishing-the-app-to-the-current-accounts-registry
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

When you're happy with a version of your app, it's time to publish it.

__Important!__
- You need to be logged in to the account in which you want to publish the app
- Make sure that your app's `vendor` is __the same__ as the `account`

To publish the app to the Registry of the account you're currently working on, just use the following command:

`vtex publish`

In case your app __doesn't__ have `billingOptions`, once you publish it, it will be visible in `/admin/apps` and available to be installed only by users with access to the account in which the app was published.

Otherwise, your app will be available to be installed through the CLI by any VTEX account regardless of your app's pricing model.

[Click here](http://help.vtex.com/en/tutorial/app-pricing-options) for more information on `billingOptions` and app pricing.
