---
title: 'You cannot archive a promotion via the Create Or Update Promotion endpoint'
id: 3MUDa3ZvdhoahJhZ4FvekO
status: PUBLISHED
createdAt: 2021-02-25T20:33:18.281Z
updatedAt: 2022-12-22T14:39:48.384Z
publishedAt: 2022-12-22T14:39:48.384Z
firstPublishedAt: 2021-05-04T20:08:56.465Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
tag: Pricing & Promotions
slug: you-cannot-archive-a-promotion-via-the-create-or-update-promotion-endpoint
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

When updating a promotion via API, if you set the `isArchived` attribute to `true`, it will not prevent the promotion from being displayed on the **Not Archived** promotions screen.

## Simulation

Using the [Create Or Update Promotion](https://developers.vtex.com/vtex-rest-api/reference/createorupdatecalculatorconfiguration) endpoint, change the values `isActive` to false and `isArchived` to `true`. This action will archive the promotion via API but will not remove it from the **Not Archived** screen. The **Archive** flag will still be displayed on the promotion card.

## Workaround

Use the [Archive a Promotion](https://developers.vtex.com/vtex-rest-api/reference/archivepromotion-1) endpoint to archive the promotion.

