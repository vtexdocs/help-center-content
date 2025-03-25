---
title: 'How communication with the client is made during the order flow'
id: tutorials_195
status: PUBLISHED
createdAt: 2017-04-27T22:14:41.243Z
updatedAt: 2023-03-31T15:15:40.914Z
publishedAt: 2023-03-31T15:15:40.914Z
firstPublishedAt: 2017-04-27T23:02:48.283Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: understanding-the-conversation-tracker
locale: en
legacySlug: understanding-the-conversation-tracker
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

The Conversation Tracker is used to unify all communication with the customer during an order flow. This communication also includes messages sent to the customer’s email by any other integrated system. 

Therefore, any interaction such as __payment approved__, __in handling__, __invoicing__, __shipping__ and __delivery__ will be notified to the customer by email. These emails will be recorded in the order's the timeline. This communication is recorded in the order details in **Orders** module. 

The Conversation Tracker can one of the following two settings:

- **Hard** - Creates an unreadable alias (alternate email), thereby avoiding identification by external systems, in addition to linking any email sent to this address to the order's timeline. The alias of a store having such configuration would be similar to the following: `ff2e6348a53a4d449af92be2a1011328@ct.vtex.com.br`
- **Soft** - Creates a less complex alias (alternate email) for the buying user's email, making this email readable in the OMS UI and when looking at the order's JSON. Another important aspect is that the store's address (issuer address) is also masked in the same way as the user's email in JSON, this being necessary to allow the system to link the emails associated with that purchase to the order's timeline. The alias in such as configured store would be similar to the following: `johndoe@vtex.com.br-207700027841b.ct.vtex.com.br`

>ℹ️ NOTE: Stores are configured as **hard by default**.

This  Conversation Tracker offers several other advantages, mainly in terms of security:

- Emails sent by any other system are encrypted, preventing direct access to your customer's email address.
- Any communication using encrypted emails is recorded in the corresponding order's details.
- This email is __valid for 2 months__. Therefore, it must not be used to trigger newsletters or email marketing. This validity is an additional security measure since, if the information is stolen, its validity is confined to this 2-month period.

To gain access to your customers’ email addresses for marketing purposes, use the **Master Data** module.

You can choose the configuration you want - Soft or Hard - by following the steps below:

1. In the VTEX Admin, go to **Store Settings > Orders > Settings**, or type *Orders* in the search bar at the top of the page and select *Store Settings / Orders*.
2. In the **General** tab, click on **Conversation mask type**.
3. Select your option:
    - Hard
    - Soft
4. Click `Save`.
