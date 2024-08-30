---
title: 'AB Tester app shows miscalculated information for sessions and conversion'
id: 2Sgvlldl0kyDcWBVi4KMzg
status: PUBLISHED
createdAt: 2023-07-20T12:42:25.435Z
updatedAt: 2024-07-01T18:49:08.433Z
publishedAt: 2024-07-01T18:49:08.433Z
firstPublishedAt: 2023-07-20T12:42:26.335Z
contentType: knownIssue
productTeam: Cloud Services
author: 2mXZkbi0oi061KicTExNjo
tag: Cloud Services
slug: ab-tester-app-shows-miscalculated-information-for-sessions-and-conversion
locale: en
kiStatus: No Fix
internalReference: 865727
---

## Summary


AB Tester app shows miscalculated information for sessions and conversion when running tests, causing undesired results interpretation. The workspace split functionality still works as expected.


##

## Simulation



- Create a A/B Test;
- Let the test run for some time;
- Check the values for sessions and conversions; it will show miscalculated information.


##

## Workaround


Use an external analytics tool to analyze the data.




