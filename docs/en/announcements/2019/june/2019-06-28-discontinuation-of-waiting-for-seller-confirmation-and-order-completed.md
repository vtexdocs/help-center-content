---
title: 'Discontinuation of waiting-for-seller-confirmation and order-completed order Marketplace statuses'
id: 7jnFwL3cIqwdTu7yb4LXwj
status: CHANGED
createdAt: 2019-06-28T13:57:39.046Z
updatedAt: 2020-11-27T19:40:14.278Z
publishedAt: 2020-04-02T16:47:32.151Z
contentType: updates
productTeam: Channels
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-28-discontinuation-of-waiting-for-seller-confirmation-and-order-completed
locale: en
legacySlug: discontinuation-of-waiting-for-seller-confirmation-and-order-completed
announcementImageID: 'undefined'
announcementSynopsisEN: 'The following Marketplace order statuses will be discontinued: `waiting-for-seller-confirmation` and `order-completed`'
---

Starting July 15<sup>th</sup> 2019, the following Marketplace order statuses will be discontinued: `waiting-for-seller-confirmation` and `order-completed`.

Marketplace orders are those that are related to the order closing stages from within a store’s environment. We can associate orders having this origin with the checkout process, where the end customer includes the necessary payment data to finalize a purchase.

## Why is VTEX taking this action

Order workflows, meaning the undertaking of the order delivery steps, will no longer be generated during the buying process. These will henceforth be created in a later process, after the orders and their data are considered complete.

With this change, the workflow system will no longer stand at a critical point in the buying process, thus becoming more resilient, decreasing risk by removing a non-mandatory process from the buying process. In turn, this will render the buying process swifter. As such, only complete orders will gain post-purchase processing for their respective workflow.

## What you need to do

Generally speaking, the discontinuation of these statuses should not affect any integration. These statuses were created to be used within VTEX systems themselves, in buying pre-processing stages and possibly also retries. As these statuses are not related to any business step, they do not need to be consumed by external integrations.

In any case, we recommend you revise your integration in order to confirm that these statuses are in fact not in use.

> ℹ️ The workflow removal from the purchase closing critical path for Fulfillment orders has already been done. Read the following article for more on [fulfillment orders workflow removal.](/en/announcements/discontinuation-of-order-completed-order-create-error-and-order-creation--4AJyu9fJNSKNpL4g4dfgcp)
