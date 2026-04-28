---
title: 'How the relationship between websites and sales policies works'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2023-03-29T14:43:46.618Z
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

Sales channels define what content can be rendered on a website. Below we will explain the rules of the relationship between websites and sales channels.

## Eligibility rule

How do I know which sales channels are eligible for a website?

This eligibility is determined in the __binding__ configuration of the website. [In this article](/en/docs/tutorials/linking-an-account-name-to-a-website-binding), in __step 8__, we have an explanation of how a sales channel is linked to a website.

Here are the rules for defining eligibility:

&bull; If you have checked a sales channel box for a website, this policy becomes eligible for this website. If you want, this policy can still be linked to other websites.

&bull; If you have not linked a sales channel to any website, this sales channel becomes eligible for all of your websites.

## Priority rule

Among the __eligible sales channels__, the policy that will be rendered on the website will be the one that is in first place in the sales channels ordering.

To know the ordering of sales channels, follow the steps below:

1. In your VTEX Admin, access **Store Settings > Channels > Sales Channels**.
2. In the __Position__ column, you will see the ordering of your sales channels. Position 1 displays the highest priority sales channel.

> ❗ We recommend that you do not change the position of the sales channel with **ID 1**.

### Examples

Let's assume you have an account with three sales channels (A, B and C). The ordering of policies is configured as follows:

1. C
2. B
3. A

A website that has these three eligible sales channels will render the information of the __sales channel C__.

A website that only has policies A and B as eligible policies will render the information of __sales channel B__.

## Exception to the priority rule

If a sales channel *with access restriction* is listed in the ordering with higher priority than another eligible policy, *which does not have access restriction*, the rendered policy will be the __eligible policy without access restriction__.

### Examples

Let's assume you have an account with three sales channels (A, B and C). Policy B is a B2B-specific policy and therefore __has access restriction__. Policy A is a marketplace-specific policy, __without access restriction__.

The ordering of sales channels is configured as follows:

1. C
2. B
3. A

A website whose eligible policies are only A and B will render the __sales channel A__.
