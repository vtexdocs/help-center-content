---
title: 'Save user data opt-in at Checkout: using stored personal and payment information for future purchases'
id: ZZQyqkBLort425Mer2E7N
status: PUBLISHED
createdAt: 2022-06-21T11:47:21.760Z
updatedAt: 2022-10-21T16:44:56.661Z
publishedAt: 2022-10-21T16:44:56.661Z
contentType: updates
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: save-user-opt-in-using-stored-information-for-future-purchases
locale: en
legacySlug: save-user-opt-in-using-stored-information-for-future-purchases
announcementImageID: ''
announcementSynopsisEN: 'Allow your customers to choose whether to store their data for future purchases.'
---

To comply with consumer data privacy laws, such as GDPR (General Data Protection Regulation) in Europe and LGPD (General Data Protection Law) in Brazil, VTEX has developed the **Save user data opt-in** feature. With this solution, customers can decide whether to store their data in the store when making a purchase.

## What has changed?

Previously, after customers entered their information at checkout or after their first purchase, the store automatically saved their data without requiring confirmation. 

From now on, two checkboxes will be available on the Checkout screen, allowing users to indicate if they want their personal and payment information to be stored and used for future purchases. This will reduce your customers' shopping time. 

![ Save user data opt-in EN](//images.ctfassets.net/alneenqid6w5/6NGmOzVPMDNlcptCwaqTsM/465f60548b25abfde675c3e81cbbcebe/Save_user_data_-_EN.PNG)

Learn more in [SmartCheckout - Customer information automatic fill-in](https://help.vtex.com/en/tutorial/smartcheckout-customer-information-automatic-fill-in--2Nuu3xAFzdhIzJIldAdtan#).

##  What needs to be done?

To enable the **Save user data opt-in** feature in your store, you need to change the `savePersonalDataAsOptIn` parameter in the Checkout `orderForm` object. Learn more in the article [Save user data opt-in on Checkout](https://developers.vtex.com/vtex-rest-api/docs/enable-the-save-user-data-opt-in).
