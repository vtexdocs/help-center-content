---
title: 'Using many filters in the OMS list affects the results in the report'
id: WO9AvZxmUkmil35OZb8Lr
status: PUBLISHED
createdAt: 2023-02-17T17:45:57.039Z
updatedAt: 2023-02-17T17:52:41.370Z
publishedAt: 2023-02-17T17:52:41.370Z
firstPublishedAt: 2023-02-17T17:50:29.929Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: using-many-filters-in-the-oms-list-affects-the-results-in-the-report
locale: en
kiStatus: Backlog
internalReference: 756198
---

## Summary

The use of filters in the Order Management List generates a parameter in the URL that helps define what is shown when the page loads and to generate the exported orders report. In that sense, as we use more and more filters, the parameters included in the URL increase proportionally, and the query string increase, reaching points (size) that can generate various types of unwanted behaviors.

In this case, the problem caused by using many filters at the same time (size of the **Query String** in the URL) affects the results of the exported report, showing fewer orders than expected.

It is important to note that here we are talking about the **size of the Query String generated in the URL**, this means that it is not the number of filters used directly, but the size of each parameter. Very large filter names can  limit the number of filter you are able to use to generate a consistent report.


## Simulation

This scenario can be simulated by using multiple "long" filters in the OMS list and exporting the orders. You can see that the export shows fewer orders than the OMS list.


## Workaround

It is possible to think of alternative ways to avoid this type of issue in the report. Here are some points that may be useful:

- Optimizing the name of the parameters could be a good practice.
- Export the report with few filters and then in the exported document, carry out the additional or necessary filters to obtain the desired information.
- Think about breaking the report in more than one, that is, use some filters to generate a part of the information and then another with the rest and unify after being downloaded.

These are just ideas to avoid accumulating filters and generating this inconsistency in the exported information. Other solutions can be used.


