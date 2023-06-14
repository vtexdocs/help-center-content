---
title: 'Use v2 triggers to interact with orders'
id: 4cqms9Z186yQQMvdxjflAg
status: DRAFT
createdAt: 2019-01-14T15:29:01.109Z
updatedAt: 2022-05-03T14:08:28.693Z
publishedAt: 
firstPublishedAt: 2019-01-14T15:58:19.843Z
contentType: tutorial
productTeam: Master Data
author: TnXcuQydAAOuwWACo864E
slug: how-to-use-masterdata-v2s-triggers-to-interact-with-orders
legacySlug: how-to-use-masterdata-v2s-triggers-to-interact-with-orders
subcategory: 5tSNDlvmik8gGuKw2goW4q
---


This documentation assumes that you use MasterData V2 and are familiar with JSON Schemas.

All MasterData V2 interactions occur through API.  We strongly recommend you use Postman and familiarize with our [documentation](https://developers.vtex.com/reference/master-data-api-v2-overview).

A trigger is nothing more than configuring a predetermined condition and taking an action (HTTP request or sending an email)

You can use dynamic expressions usind dot notation  in place of variables.
So fetching the order's email address would look something like this:
{!order.clientProfiledata.email}

In this example we will be setting up a trigger that will be activated when the order status changes to invoiced.  You'll be POSTing a JSON Schema with all the necessary information.

Please consult the OMS API documentation to see the list of supported statuses.  Ex: order-completed.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "status=devolucao-completed",
                   "active": true,
                   "action": {...

```
In case of more complicated conditions, or statuses that are not directly supported by the OMS API you can use dot notation to consult a nested value.

```
..."v-trigger": [
               {
                   "name": "TestTrigger",
                   "condition": "Body.ChildOne.ChildTwo=Foo",
                   "active": true,
                   "action": {...





```
