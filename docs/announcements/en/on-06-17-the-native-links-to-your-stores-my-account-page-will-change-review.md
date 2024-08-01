---
title: "My Account: On June 17th, the native links to 'My Account' page will change - review your settings"
id: 2N9T3weFs2VDXan6vrGgnC
status: CHANGED
createdAt: 2020-05-26T14:16:56.645Z
updatedAt: 2020-11-27T19:40:22.264Z
publishedAt: 2020-06-04T13:39:08.653Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: on-06-17-the-native-links-to-your-stores-my-account-page-will-change-review
locale: en
legacySlug: on-06-17-the-native-links-to-your-stores-my-account-page-will-change-review
announcementImageID: ''
announcementSynopsisEN: 'From June 17, your customers would access all their information, including orders, through a single "/account" URL.'
---

The "My Account" page, native to the platform, which displays a user's personal and purchase data, recently received a set of updates and upgrades during the last couple of months. One of these upgrades was putting all customer related data on a single page. In practical terms, this means that customers would access all their information, including orders, through a single "/account" URL. 

The previous URL, "/account/orders", that listed orders, will be discontinued.
Starting __June 17th 2020__, all native platform links will direct users to the new URL, namely "/account". For example, in transactional order emails, the link to the "my orders" page will change from the old "/account/orders" to the new "/account#/orders", with an internal link. 

## What will change?

Native platform links, present in transactional emails or on the purchase confirmation page, OMS and others, will start directing users to the "/account" URL or, as previously mentioned, to "/account#/orders". We will no longer support the old URL: "/account/orders".

## Why is this change happening?

This standardization is necessary to uniformly continue developing VTEX products. In addition, the technology used on the new page guarantees greater performance and a better experience for the customer.

## What do I need to do?

This change's review and subsequent adjustment should be implemented following the three steps below. Get in touch with your store's front-end primary caretaker and share this message with them. 

Required steps for review and adjustment:

1. __Basic configuration__: ensure that the template of the "/account" page (illustration below) already uses the `<vtex.cmc:accountUserProfile />` view part and update it if necessary. This view part is responsible for loading all of the customer information, including orders. The previous view parts, `<vtex.cmc:accountAddress/>` and `<vtex.cmc:orderList />`, must be deleted from this template.![account](//images.ctfassets.net/alneenqid6w5/LIki0Pf7j1gOUi01EIajh/f7089fece0b6b10921fcb969066e2f4a/account.png)  
2. __Customization__: if the "/account/orders" page is affected by any front-end customization, it should be migrated and adapted to the new URL: "/account#/orders". Review and perform all necessary tests to ensure that all custom resources are functioning properly.  
3. __Site links__: Review and update all of the site's custom links, in addition to the ones pertaining to transactional emails that would previously direct users to "/account/orders". These links should now direct users to "/account#/orders".

## How will my operation be impacted, if I don't take the necessary actions?

In most cases, when stores do have a lot of front-end customizations running, the new "My Account" page version will work just fine without the need for any changes. However, ensuring that's it's behaving as expected is necessary to validate the user's experience.

In other cases, if no steps are taken to review and possibly adapt to the change, user experience can be negatively affected, leading to unexpected behaviors, or in extreme cases, even preventing users from accessing their order information or other type of information.

For more information, check out our [My Account](https://help.vtex.com/en/tutorial/como-funciona-o-my-account--2BQ3GiqhqGJTXsWVuio3Xh?locale=pt) documentation. If you have questions or are unsure which of the above is valid for you, please contact us.
