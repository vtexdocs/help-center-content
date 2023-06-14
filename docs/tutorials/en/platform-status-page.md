---
title: 'Platform status page'
id: gPhqDn9IQ3c67wbJEX3JJ
status: PUBLISHED
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-24T19:06:04.933Z
publishedAt: 2023-05-24T19:06:04.933Z
firstPublishedAt: 2019-01-14T20:01:43.663Z
contentType: tutorial
productTeam: Reliability
author: 0QBQws7rk0t5Mnu8fgfUv
slug: platform-status-page
legacySlug: untitled-entry-2019-01-14-at-07-58-58, vtex-status-understand-how-the-platform-status-works
subcategory: 5PYkoNDZyo2G80yiiqG2YW
---

In [VTEX Status](https://status.vtex.com), you can monitor the stability of the platform in real time, as well as access the entire incident history.

Events are reported by our team whenever our automatic monitoring system identifies instability in the platform modules. Scheduled maintenance is also communicated in detail.

Below, you will find details about the VTEX platform status page elements.

<div class = "alert alert-info">
The status page is built on Atlassian Statuspage.
</div>

## Notifications

The status page has a `SUBSCRIBE TO UPDATES` button. By clicking, you can subscribe to receive updates via email, Slack, webhook, or RSS feed.

The webhook option allows you to perform integrations based on automatic platform status notifications. If you want to use it, contact your development team and read the [Atlassian Statuspage webhook documentation](https://support.atlassian.com/statuspage/docs/enable-webhook-notifications/).

## Current status

In this section, you can see, in real time, the overall platform status, as well as some specific details:

![Status page](//images.ctfassets.net/alneenqid6w5/7Acmvo2WI9cSZZHCNGdeiM/9f9f9c8abf89ab20a21917d2008acf09/1.png)

- **Checkout:** Features linked to the order creation flow, i.e., checkout and its dependencies.
- **WebStore:** Storefront navigation.
- **Administrative Environment:** Navigation in the VTEX Admin and its modules, such as Order Management, Price Settings, and Logistics.
- **Internal Modules:** Other modules not included in the above groups, such as VTEX IO.

The possible statuses for each of the above are:

- **Operational:** stable operation.
- **Degraded Performance:** the module is underperforming.
- **Partial Outage:** partial functioning of the features.
- **Major Outage:** operation totally impacted.
- **Under Maintenance:** the system is under maintenance.

## Incident history

The incident history section displays, in reverse chronological order, the record of incidents and scheduled maintenance that occurred in the platform in the last 15 days.

You can also view the whole history of incidents sorted by month by clicking **Incident History** at the bottom of the page.

### Incident Log

Each incident log is composed of date of occurrence, title and status evolution.

![status incidentBox](//images.ctfassets.net/alneenqid6w5/2NWuofZrmybqso50XpC8Gy/eeda8697db4c1b22067dfa233e628a8c/status_incidentBox.PNG)

- **Log's Title:** title describing the type of incident classification. By clicking on it, you are redirected to the incident detail page.
- **Incidents Status:** each incident has a specific cycle, in which our team works to identify and solve the problems. Get to know a little more about each step of this cycle:
    - **Investigating:** The first incident status is dedicated to the analysis of impacts, related services and root cause identification.
    - **Identified:** with the origin of the error properly identified, the development team begins to perform actions towards the solution.
    - **Monitoring:** after completing the system stabilization actions, already with the operation indicators normalized, we remain on alert state with a closer monitoring of the performance of impacted services or modules.
    - **Resolved:** With the platform's performance stabilized, we return to normal monitoring and consider that the platform is working as expected.
- **Update:** if a status does not advance for a considerable period, we log this substate to share an update in the working progress.

### Scheduled Maintenance Log

Updates on the platform are made continually and generally do not impact the operation of our customers. But sometimes, some of them require the service to be temporarily unavailable.

![status maintenanceBox](//images.ctfassets.net/alneenqid6w5/quaItZNYtCgkpADVjT9aq/8cb4cf7d673e5fa5b710dc1d0ecb89ac/status_maintenanceBox.PNG)

For such cases, which affect the stability of the platform, we use VTEX Status to communicate all the details: when maintenance will be performed, the duration and the impact.

In addition to date and title (which follow the same behavior as incident logs), the scheduled maintenance log also details the evolution of the event state:

- **Scheduled:** maintenance event already defined and scheduled.
- **In progress:** maintenance event in progress.
- **Completed:** completed maintenance event.
