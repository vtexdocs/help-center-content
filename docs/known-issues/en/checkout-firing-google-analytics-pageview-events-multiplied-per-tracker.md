---
title: "Checkout firing Google Analytics' pageview events multiplied per tracker"
id: 1XMmCfDdKVLEZ5SFq7TyrO
status: PUBLISHED
createdAt: 2022-05-12T14:51:41.067Z
updatedAt: 2022-11-25T21:49:12.329Z
publishedAt: 2022-11-25T21:49:12.329Z
firstPublishedAt: 2022-05-12T14:51:41.383Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: checkout-firing-google-analytics-pageview-events-multiplied-per-tracker
locale: en
kiStatus: Fixed
internalReference: 350780
---

## Summary


Checkout's Google Analytics implementation is firing the pageview event once per crawler, even if the crawler is not intended to track the pageview information.

Consider that tags created to track other types of information, such as an event tag, are declared as trackers.
Also, a tracker is created every time the event is fired - so if you have a tag to track the different checkout steps as events, many trackers can be created as the user moves through the purchase flow.

In our implementation for Checkout v5 / v6, each checkout step (declared in the URL with a different #hash) triggers a pageview to GA. Considering the various trackers created, we'll fire the pageview event much more than should be submitted at each step change on the cart / checkout pages.

Side effects:

There is a chance of logging more pageviews than actually occurred (although GA seems to deduplicate them).

Stores using the Google Analytics 360 enterprise solution are subject to limitations and pricing rules based on the amount of information submitted to GA; the accumulated trackers and the repeated information can really generate a high volume of hits, which is definitely critical for these stores.

It is possible to collect more information on this topic by analyzing other similar cases.




## Simulation



1- In a store, configure Google Tag Manager with a special environment that has the tags to reproduce the problem.

2- The configuration should consist of a common GA page display tag (UA version) and an event tag that will be fired at each checkout step change.


3- Enable the environment together with the Tag Assistant view.

4-Install the Google Analytics Debugger Chrome extension as it will help to show the created trackers and pageview events being sent to GA.

5- In the special URL above, activate the extension, add an item to the cart;

6- Navigate between checkout steps to see multiplied events.







## Workaround



It is possible to put the snippet `window.vtex.gtmId = ""`; in the checkout6-custom.js file and this will possibly prevent native page display events from being tracked thus avoiding duplication of information.

This solution can have unexpected side effects on other events that are also triggered by the checkout, such as dataLayer enrichment, and also on the fact that page view events must be collected in their own way in a GTM / custom created Implementation of GA.

