---
title: "Discontinuation of  `order-completed`, `order-create-error` and `order-creation-error` order fulfillment statuses"
id: 4AJyu9fJNSKNpL4g4dfgcp
status: PUBLISHED
createdAt: 2019-06-12T18:05:37.415Z
updatedAt: 2020-04-02T16:45:58.231Z
publishedAt: 2020-04-02T16:45:58.231Z
contentType: updates
productTeam: Reliability
author: 5DnIDwto7E6PRpdH1Kpdyu
slug: discontinuation-of-order-completed-order-create-error-and-order-creation
legacySlug: discontinuation-of-order-completed-order-create-error-and-order-creation
announcementImageID: ""
announcementSynopsisEN: Fulfillment order statuses will be discontinued: `order-completed``order-create-error` `order-creation-error`
---

Starting June 24<sup>th</sup> 2019, the following Fulfillment order statuses will be discontinued: `order-completed`, `order-create-error` and `order-creation-error`.

Fulfillment originated orders are those related to the delivery or pick-up stages of an order. We can associate orders who have this origin to the process that a seller undergoes to have an order delivered or picked-up.

<div class="alert alert-warning">
Status of orders originating in a Marketplace will not be affected.
</div>

## Why is VTEX taking this action

Order workflows, meaning the undertaking of the order delivery steps, will no longer be generated during the buying process. These will henceforth be created in a later process, after the orders and their data are considered complete.

With this change, the workflow system will no longer stand at a critical point in the buying process, thus becoming more resilient, decreasing risk by removing a non-mandatory process from the buying process.  In turn, this will render the buying process swifter. As such, only complete orders will gain post-purchase processing for their respective workflow.

## What you need to do

Generally speaking, the discontinuation of these statuses should not affect any integration. These statuses were created to be used within VTEX systems themselves, in buying pre-processing stages and possibly also retries. As these statuses are not related to any business step or to the order delivery operation, they do not need to be consumed by external integrations.

In any case, we recommend you revise your integration in order to confirm that these statuses are in fact not in use.  
