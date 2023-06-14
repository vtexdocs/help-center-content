---
title: 'How is the platform’s operation SLA determined?'
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2019-12-31T17:00:45.718Z
publishedAt: 2019-12-31T17:00:45.718Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: how-is-the-platforms-operation-sla-determined
locale: en
legacySlug: how-is-the-platforms-operation-sla-determined
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

In addition to the deadlines, you must identify what we consider to be a violation of the SLA. That is, what will really be considered as unavailability time.

Since our trade model is based on store returns, it is quite clear for the VTEX team that an interruption of 1 minute costs a lot for both the stores and VTEX itself. Accordingly, we try to be as transparent as possible regarding the health of our platform. See the [status page](http://status.vtex.com "status page") for a description of all incidents that impacted our SLA. Such events are accounted for as follows:

### Events accounted for

- Interruptions in the virtual stores that may significantly impact the number of orders made. E.g.: store outage, slow access, checkout failure.
- We account for interruptions with duration of no less than 10 minutes.

### Events not accounted for

- Scheduled maintenance.
- Interruption of administrative module services.

### Checking the status

To facilitate the identification of such scenarios, we always recommend checking the status when there is a suspicion that the tool is not available. When the incident surpasses 10 minutes, the status is updated with the following information:

- __Investigating/Identifying__: the incident is being investigated by the team. The team is taking the actions required to restore services.
- __Monitoring__: The incident was resolved, and the service was restored. The environment is being monitored.
- __Resolved__: Case closed. Total outage time has been recorded. In most cases, the SLA is the sum of the unavailability time for all incidents.

![](//images.contentful.com/alneenqid6w5/2Le8koNu7YUoICaquSSuuY/134a3f2ca7cee4614a09c96397573dd9/Screen_Shot_2016-04-22_at_16.28.39.png)
