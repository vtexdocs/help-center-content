---
title: 'How the relationship between websites and sales policies works'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2026-10-14T18:21:41.930Z
publishedAt: 2023-03-29T14:43:46.618Z
firstPublishedAt: 2019-01-24T22:07:42.559Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-the-relationship-between-websites-and-business-policies-works
legacySlug: how-the-relationship-between-websites-and-business-policies-works
locale: en
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Sales channels define the content that can be rendered on a website. Below are the rules for the relationship between websites and sales channels.

## Eligibility rule

How do I know which sales channels are eligible for a website?

This eligibility is defined in the website **binding** configuration. To learn how to link a sales channel to a website, see **step 8** of the article [Linking a store to a folder structure in CMS (binding)](/en/docs/tutorials/linking-an-account-name-to-a-website-binding).

The eligibility rules are as follows:

- If you've selected the box for a sales channel on a website, this sales channel becomes eligible for that website. If you want, this sales channel can still be linked to other websites.

- If you **haven't selected** a sales channel for **any website**, this sales channel becomes eligible for **all** your websites.

> ℹ️ When a [white label seller](/en/docs/tutorials/white-label-seller) fulfills orders for your store, the sales channel served by that seller must be eligible in the binding of the **main account**, even if the seller only delivers orders from another website.

## Priority rule

Among the **eligible sales channels**, the one rendered on the website is the one that comes first in the sales channel order.

To check the order of your sales channels, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Channels > Sales Channels**.
2. In the **Position** column, you'll see the order of your sales channels. Position 1 shows the sales channel with the highest priority.

> ❗ We recommend not changing the position of the sales channel with **ID 1**. This is the default sales channel for the account. Changing its position can affect which sales channel is rendered on websites and cause inconsistencies in prices, catalog, and shipping. If you need to change the order, check the result on each website after the change.

### Use case

Consider a store with three registered sales channels (A, B, and C). The sales channel order is configured as follows:

1. C
2. B
3. A

A website that has these three sales channels as eligible will render the information of **sales channel C**.

A website that only has sales channels A and B as eligible will render the information of **sales channel B**.

## Exception to the priority rule

If a sales channel _with access restriction_ is listed in the order with a higher priority than another eligible sales channel _without access restriction_, the rendered sales channel will be the **eligible sales channel without access restriction**.

### Use case

Consider a store with three registered sales channels (A, B, and C). Sales channel B is a B2B-specific sales channel and therefore **has access restriction**. Sales channel A is a marketplace-specific sales channel, **without access restriction**.

The sales channel order is configured as follows:

1. C
2. B
3. A

A website that only has sales channels A and B as eligible will render the information of **sales channel A**.

> ℹ️ If the main account sales channel served by a [white label seller](/en/docs/tutorials/white-label-seller) has access restriction, the binding eligibility requirement combines with this exception. If logged-out users see unintended information in a store with access restriction, see [Logged-out users see information in my store with access restriction](/en/docs/troubleshooting/logged-out-users-see-information-in-my-store-with-access-restriction).
