---
title: 'How is the platform’s operation SLA determined?'
id: frequentlyAskedQuestions_662
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.436Z
updatedAt: 2024-03-11T22:38:31.694Z
publishedAt: 2024-03-11T22:38:31.694Z
firstPublishedAt: 2019-01-24T22:11:03.028Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: how-is-the-platforms-operation-sla-determined
locale: en
legacySlug: how-is-the-platforms-operation-sla-determined
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

Any minute of interruption can be costly, both for the stores and for VTEX. Therefore, we try to be as transparent as possible regarding the health of our platform. We provide the [VTEX Status] page (http://status.vtex.com), where we record all incidents that have impacted our SLA.

To determine SLA violations, i.e. to account for platform downtime, we consider the following events:

- Interruptions in the online store that significantly affect the number of orders placed, for example: store outage, slow access, checkout failure.
- Interruptions lasting at least 10 minutes.

>⚠️ We do not count scheduled maintenance as downtime.

### Checking VTEX status

To identify unstable scenarios, we recommend checking the [VTEX Status](https://status.vtex.com) page if you suspect that the platform is unavailable. The status is updated when the incident has passed the 10-minute mark, with the following information:

- __Investigating/Identified__: The team is investigating the incident and carrying out the necessary actions to restore the service.
- __Monitoring__: The incident has been resolved and the service stabilized. The environment is being monitored.
- __Resolved__: Case closed, with total SLA interruption time recorded. In most cases, the total interruption time is the sum of the incident's downtime.

## Learn more

- [VTEX status page](https://help.vtex.com/en/tutorial/vtex-status-page--gPhqDn9IQ3c67wbJEX3JJ)

