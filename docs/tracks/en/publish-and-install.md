---
title: 'Publish and install'
id: 4q2yXHthMsey0iEuMUuCGi
status: DRAFT
createdAt: 2018-04-26T19:31:45.275Z
updatedAt: 2020-03-13T21:24:44.370Z
publishedAt: 
firstPublishedAt: 2018-05-03T20:34:34.311Z
contentType: trackArticle
productTeam: VTEX IO
slug: publish-and-install
locale: en
trackId: 2qYWraccosS2ayg2kusaUo
trackSlugEN: vtex-io-getting-started
---

If you want your app to be available in production, __linking it is not enough__. For that, the app needs to be __installed in master workspace__. But you will never be able to install an app that only exists in your local environment.

When you [publish](/en/faq/what-does-publishing-an-app-mean) an app, what you're doing is making it available for others to [install](/en/faq/what-does-installing-an-app-mean) it, including yourself.

## Publish

To publish the app to the Registry of the account you're working on, just use the following command:

`vtex publish`

## Install

Since you published your app without [Pricing Models](/en/tutorial/app-pricing-options), only your account can install it. To do so, just do:

`vtex install` if you are currently in the app's folder

or

`vtex install {vendor}.{appName}` if you are not.
