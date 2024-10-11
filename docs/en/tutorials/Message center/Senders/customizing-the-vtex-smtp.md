---
title: 'Customizing the VTEX SMTP'
id: tutorials_2733
status: PUBLISHED
createdAt: 2017-04-27T21:52:41.580Z
updatedAt: 2022-10-11T16:07:08.378Z
publishedAt: 2022-10-11T16:07:08.378Z
firstPublishedAt: 2017-04-27T23:03:54.566Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slugEN: customizing-the-vtex-smtp
locale: en
legacySlug: customizing-the-vtex-smtp
subcategoryId: 1wsCJz4swMsK4QSsGeIgic
---

VTEX has an email server that you can use free of charge. 
Also, it is possible to arrange for emails to be sent with the store’s address rather than the standard VTEX email address. To configure this, proceed as follows.

1. On the Admin menu, click on **Message Center**.
2. Click on **Senders**.
3. Click on the **New Provider** button and select **Own**.
4. Create a name to go in the **Sender ID** field, which will be used to identify the sender on the Providers screen and to associate the SMTP to be used with the templates you require.
5. In the **Name** field, enter the name to be used which is associated with the email address.
6. In the **Email** field, enter the email address that your store will be using for communications with customers.
7. Do __not__ select the **This is the default sender** flag until after you have completed registration and have checked that the sender created is in fact shown as such on emails.
8. Click on **Save**.
9. You will receive an email confirming that the SMTP has been successfully registered.
10. Edit the sender to mark it as **default** and save the changes.

Every time you make a change in the sender and save, an SMTP confirmation email will be sent successfully to the registered address. __You must click the link__. Otherwise, no email will be sent regarding the registered email. You can also test whether the sending is OK by clicking the __Test__ button for the respective sender in __Message Center__> __Senders__.
