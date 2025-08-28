---
title: 'New feed filter allows for notifications related to any order atribute'
id: 4j99SY7EW0sSJz1Vu0p4uP
status: PUBLISHED
createdAt: 2021-05-20T16:39:31.231Z
updatedAt: 2021-05-28T18:00:19.312Z
publishedAt: 2021-05-28T18:00:19.312Z
contentType: updates
productTeam: Post-purchase
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: 2021-05-20-new-filtering-options-for-the-orders-feed-and-hook
locale: en
legacySlug: new-filtering-options-for-the-orders-feed-and-hook
announcementImageID: 'undefined'
announcementSynopsisEN: 'It is now possible to filter the orders feed by any attribute, including delivery or changes in items, for example.'
---

We have improved the orders [feed and hook](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1) configuration options with a new type of filter which allows stores to get updates regarding any order attribute. For example, it is now possible to receive updates when an order is delivered or an item is changed, among other things.

## What has changed?

Before, the feed and the hook tracked changes only in the orders’ [status](https://help.vtex.com/en/tutorial/order-status-table-oms--frequentlyAskedQuestions_773?&utm_source=autocomplete#).

With the new configuration, any changes made to orders can be tracked. This is done through [JSONata](https://jsonata.org/) expressions set in the Orders API, which allow for highly customized filtering.

## Why did we make this change?

Order filtering by status did not include events that were relevant for some integration. We realized that stores could benefit from receiving updates when orders were delivered or had items changed, for example.

Furthermore, this new configuration allows for a number of custom filter options in addition to the ones mentioned above. Since it uses [JSONata expressions](https://docs.jsonata.org/overview.html), you can combine filtering conditions and select specific subsets of orders that should generate events, for example.

## What needs to be done?

Existing feed and hook configurations are not affected by this change. This new configuration is an alternative to the default filtering by status.

You can implement the new configuration by using the [Feed v3 configuration](https://developers.vtex.com/vtex-rest-api/reference/feed-v3) or [Hook configuration](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1#hook) endpoints of the Order API. Learn more about how to configure this new filter in the [Feed v3 guide](https://developers.vtex.com/vtex-rest-api/docs/feed-v3-1).

If you need to test your JSONata filtering expressions, use our [JSONata expressions API endpoint](https://developers.vtex.com/vtex-rest-api/reference/feed-v3#testjsonataexpression).
