---
title: 'Search Analytics duplicated events'
id: 48h3ObR7qqRHvU36weCvjC
status: PUBLISHED
createdAt: 2023-03-15T19:40:23.229Z
updatedAt: 2024-08-05T16:28:52.160Z
publishedAt: 2024-08-05T16:28:52.160Z
firstPublishedAt: 2023-03-15T19:40:23.835Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: search-analytics-duplicated-events
locale: en
kiStatus: Fixed
internalReference: 771986
---

## Summary


Some events of the Intelligent Search reports are duplicated, which can impact the analytics view on the search admin module.


#### FAQ

**1. Does it affect all VTEX events (e.g., Request Capture, Admin Home page dashboards, etc.)?**

No, Intelligent Search analytics are calculated differently and independently from those metrics and events for now. This issue only affects the Search > Analytics page.

**2. Are all metrics being over-computed?**

Yes, all raw metrics shown on the Search > Analytics page are being over-computed at the moment.

Those are: search count, clicks on a term, unique clicks on a term, count of transactions after a term is searched and revenue generated from those transactions, click-through rate, and conversion.

**3. Was the “Export to CSV” data also affected?**

Yes, data exported to CSV is also impacted by the over-computed data.

**4. Does this affect the Search Relevance algorithm and search results?**

No, although the search relevance algorithm also uses the analytics events to calculate the product popularity score, it does not use the aggregated metrics.


##

## Simulation


The scenario can be seen when checking the search admin page for the reports/analytics.


##

## Workaround


N/A

