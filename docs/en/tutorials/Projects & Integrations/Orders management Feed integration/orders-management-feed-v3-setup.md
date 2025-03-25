---
title: 'Orders management Feed v3 setup'
id: 5qDml3cQypWDRTgw69s4C1
status: ARCHIVED
createdAt: 2019-01-30T20:34:24.388Z
updatedAt: 2021-09-09T18:30:06.744Z
publishedAt: 
firstPublishedAt: 2019-01-30T20:37:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 6AcGyun1hSWewU8YcaQiO
slugEN: orders-management-feed-v3-setup
locale: en
legacySlug: orders-management-feed-v3
subcategoryId: 3Y8xzVGMXcuPTuzfFI0vUp
---

The new feed version gives your store better operational performance through its new functionalities that ensure orders event management agility. 

## Feed Configuration

The Feed v3 allows for feed customization with filters and intervals necessary for your operation.

This means that it's possible to define which status will be visible on your store's event feed through the [API Feed Configuration](https://developers.vtex.com/reference/feed-v3#feedconfiguration). The list of possible order statuses can be seen in the article [Order flow in Orders management](https://help.vtex.com/en/tutorial/fluxo-de-pedido/#understanding-the-status).

>ℹ️ If the `filter` object is not configured in the API, **all** status updates are sent to the feed.

>ℹ️ The AppKey that will be used in the integration must be the same as the one used in the initial setup.

An example of a body is as follows:

```
{
   “filter”: {
       “status”: [“order-completed”,“start-handling”,“handling”,“ready-for-handling”,“cancel”]
   },
   “queue”:{
       “visibilityTimeoutInSeconds”: 250,
       “MessageRetentionPeriodInSeconds”:345600
   }
}

```

The `visibilityTimeoutInSeconds` field configures a visibility timeout, measured in seconds, to redisplay events on the feed after being consulted. When sending a call to read your feed, __all__ returned events are omitted from being committed, not appearing in any query during the time defined in this field. If they are not committed, the events will reappear in the feed after the configured time expires.

The field is defined with a default visibility timeout of 30 seconds, but it can be configured to up to 43200 seconds (12 hours).

Your feed's event retention time is defined in seconds in the `MessageRetentionPeriodInSeconds` field. If an event does not receive interactions within the configured time, it will be excluded from the feed queue and its pertaining data will be lost. The maximum time for this field is 345600 seconds (4 days). 

>ℹ️ In order to configure and use Feed v3, a `Feed v3 and Hook` enabled [role](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?locale=en) within **OMS** is required.

## How Feed v3 APIs work

Feed v3 works with two calls: one for readout and the other to inform that an event has already been read and should therefore be excluded.

>⚠️ Don't forget to configure the Feed before using it!

### Get Feed order status

The [call to read the feed](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1) returns to its events queue, which means that it returns order status changes. __Each event corresponds to a status change.__

The `maxLot` parameter indicates the maximum number of events that will be returned with each call. In Feed v3, you may specify __up to 10 events__.

>⚠️ Each time a call for a feed readout is made, **all** returned events become invisible in the feed for the time defined in the `visibilityTimeoutInSeconds` of the Feed Configuration API. 

### Confirm item feed order status

After a feed readout, it's time to [commit events](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus).

`Handles` value must be given in the commit body. This value is returned by the feed API when you make a call for its readout and it will be used by the API to know which event you're referring to when committing.

Each array from the body can have as many `handles` as necessary, making it possible to commit more than one event at a time.

>ℹ️ The `visibilityTimeoutInSeconds` field displays the time limit to <i>commit</i> an event. 

There are no cases where a feed event should not be committed. Your system should commit all events present in your queue. __Once an event has been committed, it's impossible to recover in the feed using the same appkey.__

>⚠️ All possible order statuses (considering filtering, when applicable) must be dealt with during integration to avoid errors. Special attention should be given to `Status Null`, which may not be identified and ends up being mapped as another status, potentially leading to errors. 

For more on this, read our article on [how the Orders Management feed works](https://help.vtex.com/en/tutorial/how-the-orders-management-feed-v3-workds--5SzSKee2f666YCoWkm0eQC).

## Hook

Find out more on how to configure the Hook [here](https://help.vtex.com/en/tutorial/configure-feed-v3-hook--6JkYQpIlU8ptysUiGIp4Px). The hook is an extension of the feed for robust operations with complex integrations.

