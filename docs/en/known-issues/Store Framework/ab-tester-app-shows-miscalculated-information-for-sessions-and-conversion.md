---
title: "AB Tester app shows miscalculated information for sessions and conversion"
id: 2Sgvlldl0kyDcWBVi4KMzg
status: PUBLISHED
createdAt: 2023-07-20T12:42:25.435Z
updatedAt: 2025-01-17T17:30:46.285Z
publishedAt: 2025-01-17T17:30:46.285Z
firstPublishedAt: 2023-07-20T12:42:26.335Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: ab-tester-app-shows-miscalculated-information-for-sessions-and-conversion
locale: en
kiStatus: Fixed
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




