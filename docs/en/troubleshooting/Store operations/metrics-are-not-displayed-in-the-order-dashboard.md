---
title: 'Metrics are not displayed in the order dashboard'
id: 1B5OAicmK3AvnwPzs4iq7Z
status: PUBLISHED
createdAt: 2024-06-10T11:28:08.507Z
updatedAt: 2024-11-08T18:41:59.361Z
publishedAt: 2024-11-08T18:41:59.361Z
firstPublishedAt: 2024-06-10T17:15:44.616Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: metrics-are-not-displayed-in-the-order-dashboard
locale: en
legacySlug: metrics-are-not-displayed-in-the-order-dashboard
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Dashboard, VTEX Admin, Overview, User roles

When accessing the Admin dashboard, it may fail to load metrics in the **Overview** dashboard, indicated by warning icons and the message "Something went wrong". This can be due to:

- **Delay in updating data:** There may be a delay in updating the information displayed on the dashboard.
- **Inadequate comparison period:** The period selected in the top right corner of the dashboard may not contain sufficient order data for comparison.
- **Insufficient access permissions:** You might not have the necessary role to view certain information on the dashboard.

![Visão geral - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Solution
To solve inconsistencies in the initial dashboard of the Admin, you can try the following:

### Adjust the comparison period
Adjusting the comparison period can solve the issue by displaying relevant metrics. To ensure the selected period in the **Overview** dashboard contains valid order data, follow these steps:

1. In the VTEX Admin, go to **Dashboard > Overview**.
2. In the top right corner, select the comparison period.

![Dashboard - EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

### Wait for information to be updated
Please allow 10 to 80 minutes for the information to be updated on the dashboard. This period is necessary for the data to be processed and displayed correctly. For more information about the waiting time, see [Comparing periods](https://help.vtex.com/en/tutorial/visao-geral-da-loja--P8ahguoRs0U3PzmXg2wuQ?&utm_source=autocomplete).

### Check access permissions
To view the information on the dashboard, make sure that your role contains the **Insights Metrics** [resource](https://help.vtex.com/en/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3). For more information about roles and how to configure them, see [Roles](https://help.vtex.com/en/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).
