---
title: 'Security Monitor'
id: 5LOVNLrrtmgSj99pM1NS4x
status: PUBLISHED
createdAt: 2024-04-25T00:42:30.944Z
updatedAt: 2024-10-10T14:12:24.884Z
publishedAt: 2024-10-10T14:12:24.884Z
firstPublishedAt: 2024-04-25T02:41:44.798Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: security-monitor
locale: en
legacySlug: security-monitor
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

>ℹ️ This feature is part of [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh). If you are already a VTEX customer and want to adopt VTEX Shield for your business, please contact [Commercial Support](https://help.vtex.com/en/tracks/support-at-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Additional fees may apply. If you are not yet a customer but are interested in this solution, please complete our [contact form](https://vtex.com/br-pt/contato/).

Security Monitor is a dashboard that helps merchants identify and manage potential risks in their environment in real time. The tool identifies configuration risks and the behavior of admin users, then notifies merchants via email, enabling them to take preventive action against security vulnerabilities.

To access the dashboard, follow the steps below:

1. In the VTEX Admin, go to **Dashboards**, or type **Dashboards** in the search bar.
2. Under **Security Monitor**, click **Security Monitor Dashboard**.

![1-security-monitor-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Security/VTEX%20Shield/security-monitor_1.png)

Security Monitor displays the findings in three tabs based on their status:

- [Open](#open)
- [Snoozed](#snoozed)
- [Closed](#closed)

In all tabs, you can:

- [Search for findings](#searching-for-findings)
- [Filter findings by type](#filtering-findings-by-type)
- [Edit notification settings](#editing-notification-settings)

Below, you will find specific details about the information available in each tab and their related actions.

## Open

The **Open** tab displays the threats detected by the Security Monitor that have not yet been managed or snoozed.

The top bar displays the total number of findings and the number of threats by severity level (high, medium, or low).

![2-findings-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Security/VTEX%20Shield/security-monitor_2.png)

The tab displays the full list of open findings in a table, from the most recent to the oldest:

| Column fields | Description |
| --- | --- |
| Finding | User email or application key related to the finding. |
| Type | Type of finding detected:<br/><ul><li><strong>Old app keys:</strong> <a href="https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Application keys</a> that were created more than 6 months ago.</li><li><strong>Excessive Super Admins:</strong> Users or application keys with the <strong>Owner (Admin Super)</strong>  <a href="https://help.vtex.com/en/tutorial/role--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">role</a>.</li><li><strong>Leaked App Keys:</strong> <a href="https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Application keys</a> that have been leaked on the web and identified by the VTEX Security team.</li><li><strong>Inactive Users:</strong> Users who have not accessed the Admin in the last 30 days.</li><li><strong>Excessive Permissions:</strong> Users or application keys with access to resources they did not use in the last 30 days.</li></ul> |
| Detected | Date the finding was detected. |
| Sensor | Sensor that detected the threat: <br/><ul><li><strong>VTEX Identity</strong></li></ul> |
| Severity| Level of threat severity, determined by the impact or potential risk associated with the threat: <br /><ul><li><strong>High</strong></li><li><strong>Medium</strong></li><li><strong>Low</strong></li></ul> |
| Action menu ⋮ | Menu of possible actions for the finding: <br/><ul><li><a href="#managing-findings" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Manage findings</a></li><li><a href="#snoozing-findings" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Snoozing findings</a></li></ul> |

### Managing findings

To manage a finding, follow the instructions below:

1. In the finding row, click the ⋮ menu.
2. Select `Manage`.

   You will be redirected to the **Users** screen in **Account Management** to edit the roles associated with the specific user or application key.

### Snoozing findings

To move a finding to the **Snoozed** tab, removing it temporarily from the **Open** tab, follow the instructions below:

1. In the finding row, click the ⋮ menu.
2. Select  `Snooze`.
3. Choose the number of days you want the finding to remain in the **Snoozed** tab. The options available are: **7**, **90**, or **120** days.
4. Click `Snooze`.

![3-snooze-finding-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Security/VTEX%20Shield/security-monitor_3.png)

## Snoozed

The **Snoozed** tab lists the findings that have been snoozed in a table, with the same information as described in the [Open](#open) tab.

In the **Snoozed** tab, the actions menu in each finding's row only displays the `Unsooze` option, which allows you to undo the snooze action and send the finding back to the **Open** tab.

## Closed

The **Closed** tab displays a list of findings that have been managed and are therefore closed. It displays the following information in a table:

| Column fields | Description |
| --- | --- |
| Finding | User email or application key related to the finding. |
| Type | Type of finding detected:<br/><ul><li><strong>Old app keys:</strong> <a href="https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Application keys</a> that were created more than 6 months ago.</li><li><strong>Excessive Super Admins:</strong> Users or application keys with the <strong>Owner (Admin Super)</strong>  <a href="https://help.vtex.com/en/tutorial/role--7HKK5Uau2H6wxE1rH5oRbc" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">role</a>.</li><li><strong>Leaked App Keys:</strong> <a href="https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet" rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Application keys</a> that have been leaked on the web and identified by the VTEX Security team.</li><li><strong>Inactive Users:</strong> Users who have not accessed the Admin in the last 30 days.</li></ul> |
| Detected | Date the finding was detected. |
| Closed | Date the finding was closed. |
| Closed By | Indicates that the finding was automatically closed after being managed by an admin user. |
| Severity | Level of threat severity, determined by the impact or potential risk associated with the threat: <br /><ul><li><strong>High</strong></li><li><strong>Medium</strong></li><li><strong>Low</strong></li></ul> |

## Searching for findings

In the search bar, enter the user's email address or the name of the application key to find related findings.

## Filtering findings by type

By clicking `Type` <i class="fas fa-chevron-down"></i>, you can choose one of the finding types to filter the results displayed in the list. Click `Apply` to confirm the chosen filter, and the list will be updated.

![4-filter-findings-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Security/VTEX%20Shield/security-monitor_4.png)

## Editing notification settings

To edit the admin users who will be notified about the findings, follow the steps below:

1. Click the gear button in the top right corner of the screen.
2. Enter the email address of the user that will receive notifications and press `Enter`. Repeat this step for as many users as you want.

   To remove a user, click the `X` next to their email.
3. Click `Save`.

![5-edit-notifications-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Security/VTEX%20Shield/security-monitor_5.png)

## Learn more

* [VTEX Shield](https://help.vtex.com/en/tutorial/vtex-shield--2CVk6H9eY2CBtHjtDI7BFh)
* [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [Users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512)
* [Application keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet)
