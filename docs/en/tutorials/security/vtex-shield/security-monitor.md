---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2025-08-12T22:54:55.978Z
publishedAt: 2025-08-12T22:54:55.978Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
legacySlug: security-monitor
locale: en
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

> ℹ️ This feature is part of [VTEX Shield](/en/docs/tutorials/vtex-shield). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](/en/docs/tracks/commercial-support). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/br-pt/contato/).

Security Monitor is a dashboard that helps merchants identify and manage potential risks in their environment in real time. The tool identifies configuration risks and the behavior of admin users, then notifies merchants via email, enabling them to take preventive action against security vulnerabilities.

To access the dashboard, follow the steps below:

1. In the VTEX Admin, go to **Dashboards**, or type **Dashboards** in the search bar.
2. Under **Security Monitor**, click **Security Monitor Dashboard**.

![1-security-monitor-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/security-monitor_1.png)

Security Monitor displays the findings in three tabs based on their status:

- [Open](#open)
- [Snoozed](#snoozed)
- [Closed](#closed)

In all tabs, you can:

- [Search for findings](#searching-for-findings)
- [Filter findings by type](#filtering-findings-by-type)
- [Export findings](#exporting-findings)
- [Edit notification settings](#editing-notification-settings)

Below, you will find specific details about the information available in each tab and their related actions.

## Open

The **Open** tab displays the threats detected by the Security Monitor that have not yet been managed or snoozed.

The top bar displays the total number of findings and the number of threats by severity level (high, medium, or low).

![2-findings-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/security-monitor_2.png)

The tab displays the full list of open findings in a table, from the most recent to the oldest:

| Column fields | Description |
| --- | --- |
| Finding | User email or API key related to the finding. |
| Type | Type of finding detected:<br/><ul><li>**Old app keys:** [API keys](/en/docs/tutorials/api-keys) that were created more than 6 months ago.</li><li>**Excessive Super Admins:** Users or API keys with the **Owner (Admin Super)**  [role](/en/docs/tutorials/roles).</li><li>**Leaked App Keys:** [API keys](/en/docs/tutorials/api-keys) that have been leaked on the web and identified by the VTEX Security team.</li><li>**Inactive Users:** Users who have not accessed the Admin in the last 30 days.</li><li>**Excessive Permissions:** Users or API keys with access to resources they did not use in the last 30 days.</li></ul> |
| Detected | Date the finding was detected. |
| Sensor | Sensor that detected the threat: <br/><ul><li>**VTEX Identity**</li></ul> |
| Severity| Level of threat severity, determined by the impact or potential risk associated with the threat: <br /><ul><li>**High**</li><li>**Medium**</li><li>**Low**</li></ul> |
| Action menu ⋮ | Menu of possible actions for the finding: <br/><ul><li>[Manage findings](#managing-findings)</li><li>[Snoozing findings](#snoozing-findings)</li></ul> |

### Managing findings

To manage a finding, follow the instructions below:

1. In the finding row, click the ⋮ menu.
2. Select `Manage`.

   You will be redirected to the **Users** screen in **Account Management** to edit the roles associated with the specific user or API key.

### Snoozing findings

To move a finding to the **Snoozed** tab, removing it temporarily from the **Open** tab, follow the instructions below:

1. In the finding row, click the ⋮ menu.
2. Select  `Snooze`.
3. Choose the number of days you want the finding to remain in the **Snoozed** tab. The options available are: **7**, **90**, or **120** days.
4. Click `Snooze`.

![3-snooze-finding-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/security-monitor_3.png)

## Snoozed

The **Snoozed** tab lists the findings that have been snoozed in a table, with the same information as described in the [Open](#open) tab.

In the **Snoozed** tab, the actions menu in each finding's row only displays the `Unsooze` option, which allows you to undo the snooze action and send the finding back to the **Open** tab.

## Closed

The **Closed** tab displays a list of findings that have been managed and are therefore closed. It displays the following information in a table:

| Column fields | Description |
| --- | --- |
| Finding | User email or API key related to the finding. |
| Type | Type of finding detected:<br/><ul><li>**Old app keys:** [API keys](/en/docs/tutorials/api-keys) that were created more than 6 months ago.</li><li>**Excessive Super Admins:** Users or API keys with the **Owner (Admin Super)**  [role](/en/docs/tutorials/roles).</li><li>**Leaked App Keys:** [API keys](/en/docs/tutorials/api-keys) that have been leaked on the web and identified by the VTEX Security team.</li><li>**Inactive Users:** Users who have not accessed the Admin in the last 30 days.</li></ul> |
| Detected | Date the finding was detected. |
| Closed | Date the finding was closed. |
| Closed By | Indicates that the finding was automatically closed after being managed by an admin user. |
| Severity | Level of threat severity, determined by the impact or potential risk associated with the threat: <br /><ul><li>**High**</li><li>**Medium**</li><li>**Low**</li></ul> |

## Searching for findings

In the search bar, enter the user's email address or the name of the API key to find related findings.

## Filtering findings by type

By clicking `Type` <i class="fas fa-chevron-down"></i>, you can choose one of the finding types to filter the results displayed in the list. Click `Apply` to confirm the chosen filter, and the list will be updated.

![4-filter-findings-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/security-monitor_4.png)

## Exporting findings

To export findings to a CSV file, follow the steps below:

1. Click the `Export` button in the top right corner of the screen.  
2. Select which findings to include in the exported file:  
   * All findings  
   * Open  
   * Snoozed  
   * Closed  
3. Click `Export`. The generated file will be sent to your email once it's ready.  
4. Open the email you received and click `Download` to download the file.

### Information in the exported file

The exported CSV file includes the following information about each finding:

| Column | Description |
| :---- | :---- |
| *Id* | ID of the finding. |
| *Type* | Type of finding detected. |
| *Finding* | User email or API key related to the finding. |
| *Sensor* | Sensor that detected the threat (VTEX Identity). |
| *Account* | Account where the threat was detected. |
| *Severity* | Level of threat severity, determined by the impact or potential risk: <ul><li>High</li><li>Medium</li><li>Low</li></ul> |
| *Detected* | Date and time of the finding, in the format DD/MM/YYYY hh:mm:ss. |
| *Description* | Recommended action based on the finding. |
| *Status* | Status of the threat, which can be: <ul><li>Open</li><li>Closed</li><li> AutoClosed</li></ul> |
| *Snoozed Until* | Date until which the finding is snoozed, in the format DD/MM/YYYY hh:mm:ss. This field is only populated if the finding is snoozed. |
| *Closed* | Date and time when the finding was closed, in the format DD/MM/YYYY hh:mm:ss. |
| *Closed By* | User responsible for closing the finding. |

## Editing notification settings

To edit the admin users who will be notified about the findings, follow the steps below:

1. Click the gear button in the top right corner of the screen.
2. Enter the email address of the user that will receive notifications and press `Enter`. Repeat this step for as many users as you want.

   To remove a user, click the `X` next to their email.
3. Click `Save`.

![5-edit-notifications-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/security/vtex-shield/security-monitor_5.png)

## Learn more

* [VTEX Shield](/en/docs/tutorials/vtex-shield)
* [Roles](/en/docs/tutorials/roles)
* [Users](/en/docs/tutorials/managing-admin-users)
* [API keys](/en/docs/tutorials/api-keys)
