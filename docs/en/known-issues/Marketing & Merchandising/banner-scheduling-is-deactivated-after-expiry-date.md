---
title: 'Banner scheduling is deactivated after expiry date'
id: 5JrrUCTU1q2KKCqo20SQqQ
status: PUBLISHED
createdAt: 2017-03-29T23:39:38.141Z
updatedAt: 2022-12-22T20:45:37.766Z
publishedAt: 2022-12-22T20:45:37.766Z
firstPublishedAt: 2017-03-29T23:42:49.292Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: banner-scheduling-is-deactivated-after-expiry-date
locale: en
kiStatus: Backlog
internalReference: 
---

## Summary

Scheduling a banner does not automatically update the template cache. As a result, the banner is not shown in the template at the time scheduled.

In other words, when a user schedules a banner for a certain time on a certain day, the system stores the information so that the banner will be activated at the scheduled time, but this does not update the cache. So the banner does not immediately appear on the template.

When the scheduling of a banner works correctly, it is only a coincidence if the cache is updated close to the time of scheduling. But unfortunately this behavior is not standardized to the point of using the scheduling at the time of updating.

## Simulation

- Access the CMS module
- Access Portal > Web-sites > *store* > / > *template*
- Click on Settings
- Click to edit the control
- Click to edit the content
- Configure a validity date in the "Periods" field
- Click on “Change in the content list”
- Click on "Save Content"
- Click on "OK" when you see the confirmation message
- Click on "Save Settings"
- Click on "OK" when you see the confirmation message

![Banner scheduling](//images.contentful.com/alneenqid6w5/54556kzHKwMogwaMksMQ2a/e078030f450f7cdc666bcb5258ccb7d2/2017-03-16_23_06_36-Index.png)

## Workaround

There is no simple solution for scheduling, but you can activate a banner manually using the CMS Module on the VTEX platform. For this the schedulings have to be removed. Thus the button __Activate__ will be the trigger for activating the banner.

