---
title: Platform status page
id: gPhqDn9IQ3c67wbJEX3JJ
createdAt: 2019-01-14T19:58:58.431Z
updatedAt: 2023-05-08T20:24:24.256Z
publishedAt: 2023-05-08T20:24:24.256Z
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

![status resumeBox](//images.ctfassets.net/alneenqid6w5/fCbfgeEf678XnOvWONnIf/c0ab3d6ae46a765a0c7015793a04e0e0/status_resumeBox.PNG)

Below, we explain in further details all the elements that are part of VTEX Status, as well as the information presented there:

## Resume Box
__Resume bar:__ it informs the platform status in real time.

__View historical uptime:__ by clicking here, you will be able to view the daily status of the platform, in calendar structure. Each day has a color, which indicates the overall status of the platform on that date.

Colors meaning:
__Green:__ there was no record of incidents or maintenance.
__Yellow:__ there was an incident or maintenance that lasted more than 10 minutes (and less than 30 minutes).
__Orange:__ there was an incident or maintenance that lasted more than 30 minutes (and less than 1 hour).
__Red:__ There was an incident or maintenance that lasted more than 1 hour.

__Module Status:__ here, we highlight the status of the most important modules in the store operation and purchase flow. When an incident is active and relevant to one of these modules, its status will also be updated.

Possible module statuses are:
- **Operational:** stable operation.
- **Degraded Performance:** the module is underperforming.
- **Partial Outage:** partial functioning of the features.
- **Major Outage:** operation totally impacted.
- **Under Maintenance:** the system is under maintenance.

![status moduleBox](//images.ctfassets.net/alneenqid6w5/2BkFdVXFXayUCvClXLPSNL/6fd919b0ef2121b6e6005b6466811164/status_moduleBox.PNG)

## List of incidents
The incident list displays chronologically the record of platform incidents and scheduled maintenance for the last 14 days. You can also view the entire incident history organized by month: just go to the `Incident History` link in the page footer.

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
