---
title: 'The native links to My Account page will change - review your settings'
id: 5fZyY8ZBL4jni69eJOSEZO
status: PUBLISHED
createdAt: 2020-01-30T13:36:02.201Z
updatedAt: 2020-05-27T15:11:12.565Z
publishedAt: 2020-05-27T15:11:12.565Z
contentType: updates
productTeam: Post-purchase
author: authors_31
slugEN: 2020-01-30-the-native-links-to-my-account-page-will-change-review-your-settings
locale: en
legacySlug: the-native-links-to-my-account-page-will-change-review-your-settings
announcementImageID: 'undefined'
announcementSynopsisEN: 'Starting March 9th, the native platform links will direct users to the My Account page.'
---

The "My Account" page, native to the platform, which displays a user's personal and purchase data, recently received a set of updates and upgrades during the last couple of months. One of these upgrades was putting all customer related data on a single page. In practical terms, this means that customers would access all their information, including orders, through a single "/account" URL. 

The previous URL, "/account/orders", that listed orders, will be discontinued.
Starting __June 17th 2020__, all native platform links will direct users to the new URL, namely "/account". For example, in transactional order emails, the link to the "my orders" page will change from the old "/account/orders" to the new "/account#/orders", with an internal link. 

## What will change?

Native platform links, present in transactional emails or on the purchase confirmation page, OMS and others, will start directing users to the "/account" URL or, as previously mentioned, to "/account#/orders". We will no longer support the old URL: "/account/orders".

## What is this change being implemented?

This standardization is necessary to uniformly continue developing VTEX products. In addition, the technology used on the new page guarantees greater performance and a better experience for the customer.

## What do I need to do?

This change's review and subsequent adjustment should be implemented following the three steps below. Get in touch with your store's front-end primary caretaker and share this message with them. 

Required steps for review and adjustment:

1. __Basic configuration__: ensure that the template of the "/account" page (illustration below) already uses the `<vtex.cmc:accountUserProfile />` view part and update it if necessary. This view part is responsible for loading all of the customer information, including orders. The previous view parts, `<vtex.cmc:accountAddress/>` and `<vtex.cmc:orderList />`, must be deleted from this template.![account](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/announcements/2020/2020-01-30-the-native-links-to-my-account-page-will-change-review-your-settings_1.png)  
2. __Customization__: if the "/account/orders" page is affected by any front-end customization, it should be migrated and adapted to the new URL: "/account#/orders". Review and perform all necessary tests to ensure that all custom resources are functioning properly.  
3. __Site links__: Review and update all of the site's custom links, in addition to the ones pertaining to transactional emails that would previously direct users to "/account/orders". These links should now direct users to "/account#/orders".

## What effects can not taking the necessary actions have on my operation?

In most cases, when stores do have a lot of front-end customizations running, the new "My Account" page version will work just fine without the need for any changes. However, ensuring that's it's behaving as expected is necessary to validate the user's experience.

In other cases, if no steps are taken to review and possibly adapt to the change, user experience can be negatively affected, leading to unexpected behaviors, or in extreme cases, even preventing users from accessing their order information or other type of information.

If you have questions or are unsure which of the above is valid for you, please contact us.
