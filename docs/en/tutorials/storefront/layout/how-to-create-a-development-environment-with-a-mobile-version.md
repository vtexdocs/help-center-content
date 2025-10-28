---
title: 'Creating a development environment for mobile version'
id: frequentlyAskedQuestions_587
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.089Z
updatedAt: 2023-03-29T18:35:02.578Z
publishedAt: 2023-03-29T18:35:02.578Z
firstPublishedAt: 2019-01-24T22:05:49.842Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-create-a-development-environment-with-a-mobile-version
legacySlug: how-to-create-a-development-environment-with-a-mobile-version
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

We start this article with a reminder of the fact that the tendency and good practice is for a single (responsive) version to be used for both desktop and mobile. 

The creation of a separate mobile version was a practice adopted when the CSS resources made it hard to adapt a desktop version for mobile use. Today, with the resources that the CSS offers, it has become standard practice to create a responsive version. 

To read more about this, check the article [Responsive vs. Mobile Version](/en/tutorial/responsive-vs-mobile-version).

The purpose of this article is to illustrate how to prepare a development environment for a mobile version, without affecting the production version.

There are a number of ways of developing a mobile version without impacting the desktop version an without this development being public in mobile browsing. We will deal with the primary method in this article.

## Developing a mobile version

To develop a mobile version for a new website, you must proceed as follows:

1. Set up a new (temporary) store in the **Account Settings.** This should be done by the person responsible for the store (environment). In the Admin, go to __Account Settings > Accounts__. Select the desired account and click **Configure This Store**.
2. Create a new website (or clone the main one) on the **CMS Layout**:

Storefront > Layout > CMS folder > Sites and Channels > New Website

![cms-new-website](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/layout/how-to-create-a-development-environment-with-a-mobile-version_1.png)

3. Create a folder structure for the Mobile website: at this stage, you will have to create the default system folders to be used in the mobile version (search, department, category, brand, product etc.)

## Developing a Mobile version

To view the mobile version, access the site via _myvtex.com_ through a host set up in the Account Settings. Don’t forget the following parameters: `?uam=true&amp;mobile={mobile\_version)`

Example:  http://(storename).myvtex.com?uam=true&amp;mobile=4

## Posting a mobile version

When the development is complete, proceed as follows to post the mobile version:

1. __Define the mobile version of the Principal Website.__ On the Principal Website, set up the Website-Mobile field, pointing to the Mobile Website.
2. __Define Parent Website for the Mobile version.__ On the Mobile Website, configure the Parent Website field, pointing to the Principal Website
3. __Exclude the Website Binding of the Mobile version.__ On the Mobile website, exclude the binding created. NB: Mobile versions do not need a binding because they inherit this configuration from the parent website.
5. __Delete the (temporary) mobile store created in the Account Settings.__ This store was created purely to serve as an environment for developing the mobile version. Since the mobile version will inherit the hosts of the Principal website, this store will not be used again and can be deleted.
