---
title: 'Banner scheduling is deactivated after expiry date'
id: 2dakcDLdkmsmbVE2X1SAdU
status: DRAFT
createdAt: 2022-03-16T19:25:12.659Z
updatedAt: 2022-06-28T16:55:09.965Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: banner-scheduling-is-deactivated-after-expiry-date
locale: en
kiStatus: Backlog
internalReference: 301023
---

## Summary


Scheduling a banner does not automatically update the template cache. As a result, the banner is not shown in the template at the time scheduled. In other words, when a user schedules a banner for a certain time on a certain day, the system stores the information so that the banner will be activated at the scheduled time, but this does not update the cache. So the banner does not immediately appear on the template. When the scheduling of a banner works correctly, it is only a coincidence if the cache is updated close to the time of scheduling. But unfortunately, this behavior is not standardized to the point of using the scheduling at the time of updating.



## Simulation



- Access the CMS module
- Access Portal > Web-sites > _store_ > / > _template_
- Click on Settings
- Click to edit the control
- Click to edit the content
- Configure a validity date in the "Periods" field
- Click on “Change in the content list”
- Click on "Save Content"
- Click on "OK" when you see the confirmation message
- Click on "Save Settings"
- Click on "OK" when you see the confirmation message



## Workaround


There is no simple solution for scheduling, but you can activate a banner manually using the CMS Module on the VTEX platform.

For this, the schedulings have to be removed. Thus the button **Activate** will be the trigger for activating the banner.

