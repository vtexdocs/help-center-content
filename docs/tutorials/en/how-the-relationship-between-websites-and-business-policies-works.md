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
slug: how-the-relationship-between-websites-and-business-policies-works
locale: en
legacySlug: how-the-relationship-between-websites-and-business-policies-works
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Trade policies define what content can be rendered on a website. Below we will explain the rules of the relationship between websites and trade policies.

## Eligibility rule

How do I know which trade policies are eligible for a website?

This eligibility is determined in the __binding__ configuration of the website. [In this article](/en/tutorial/linking-an-account-name-to-a-website-binding), in __step 8__, we have an explanation of how a trade policy is linked to a website.

Here are the rules for defining eligibility:

&bull; If you have checked a trade policy box for a website, this policy becomes eligible for this website. If you want, this policy can still be linked to other websites.

&bull; If you have not linked a trade policy to any website, this trade policy becomes eligible for all of your websites.

## Priority rule

Among the __eligible trade policies__, the policy that will be rendered on the website will be the one that is in first place in the trade policies ordering.

To know the ordering of trade policies, follow the steps below:

1. In your VTEX Admin, access **Store Settings > Channels > Trade Policies**.
2. In the __Position__ column, you will see the ordering of your trade policies. Position 1 displays the highest priority trade policy.

<div class="alert alert-danger">
We recommend that you do not change the position of the trade policy with <strong>ID 1</strong>.
</div>

### Examples

Let's assume you have an account with three trade policies (A, B and C). The ordering of policies is configured as follows:

1. C
2. B
3. A

A website that has these three eligible trade policies will render the information of the __trade policy C__.

A website that only has policies A and B as eligible policies will render the information of __trade policy B__.

## Exception to the priority rule

If a trade policy *with access restriction* is listed in the ordering with higher priority than another eligible policy, *which does not have access restriction*, the rendered policy will be the __eligible policy without access restriction__.

### Examples

Let's assume you have an account with three trade policies (A, B and C). Policy B is a B2B-specific policy and therefore __has access restriction__. Policy A is a marketplace-specific policy, __without access restriction__.

The ordering of trade policies is configured as follows:

1. C
2. B
3. A

A website whose eligible policies are only A and B will render the __trade policy A__.
