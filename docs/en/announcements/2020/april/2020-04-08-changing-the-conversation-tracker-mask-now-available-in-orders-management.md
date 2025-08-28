---
title: 'Changing the Conversation Tracker mask now available in Orders Management'
id: 4rjAD05fBp6zVeIJL7I6TY
status: CHANGED
createdAt: 2020-04-08T16:29:31.816Z
updatedAt: 2020-11-27T19:39:47.532Z
publishedAt: 2020-04-10T16:36:23.095Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: 2020-04-08-changing-the-conversation-tracker-mask-now-available-in-orders-management
locale: en
legacySlug: changing-the-conversation-tracker-mask-now-available-in-orders-management
announcementImageID: 'undefined'
announcementSynopsisEN: "It is now possible to change the Conversation Tracker's mask (Soft and Hard modes) through the Order Management module."
---

[Conversation Tracker](https://help.vtex.com/en/tutorial/conversation-tracker--tutorials_195) unifies all communication made with a customer during an order flow. These emails, which also include messages sent to the customer by any other integrated system, are added to the order timeline. 

Conversation Tracker has two mask configurations:

**Hard** - creates an unreadable alias (alternative email) to avoid the identification of your customer's email address by external systems.

**Soft** - creates a less complex alias, which can be read in the OMS and in the order's JSON.

**All stores come with the Hard configuration by default**.

## What has changed?
We recommend keeping your mask in Hard mode to protect your customers' sensitive data (such as their emails). However, some stores needed the configuration to be in Soft mode to integrate VTEX with ERPs, for example.
Before, this configuration was accessed only through Master Data. It is now possible to switch between Hard and Soft modes in your Admin's Orders Management module.

## Will this affect my store?
Warning: we recommend that you keep your mask in the Hard mode, as this is a sensitive change in the way your customers' email data is exposed. However, if the configuration change is really necessary, it is now possible to do it more easily. Change to the Soft mode only if it is necessary; the Hard mode remains the default for all stores.

## How to change it?
The change can be made through the **Settings** tab, in the *Orders Management* module. In the **General** Settings tab, change to the option you want in the **Conversation mask type** section.
Once you’ve changed it to the Soft mode, you can test if the configuration works. Just create a test order, and in the OMS hover your mouse over the e-mail sent to check which alias was applied (Soft or Hard).
To learn more, check out our documentation on [Conversation Tracker](https://help.vtex.com/en/tutorial/understanding-the-conversation-tracker--tutorials_195).


