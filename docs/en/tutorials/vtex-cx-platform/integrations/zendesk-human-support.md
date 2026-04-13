---
title: "Zendesk - human support"
id: 3FSQwdnzAX3jah8euPD1Ah
status: PUBLISHED
createdAt: 2025-09-15T15:13:03.117Z
updatedAt: 2025-10-03T14:20:32.519Z
publishedAt: 2025-10-03T14:20:32.519Z
firstPublishedAt: 2025-10-03T14:20:32.519Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zendesk-human-support
legacySlug: zendesk-human-support
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

The integration between the Weni platform and Zendesk provides a powerful tool for managing customer service efficiently and automatically. After completing the configuration and installation, it is essential to monitor the integration's operation to ensure that all tickets are managed correctly and that automatic triggers function as expected.

## Instructions

1. Create an account on Zendesk

If you don’t have an account yet, create one on Zendesk. For this example, we are using a free trial account. (https://weni5623\.zendesk.com/)

Access: <https://www.zendesk.com/>

1. Access the Project on the Weni Platform
   Within your project on the Weni platform, go to the **Applications > Other Apps** module.
   Click on the hamburger menu and select **Add Ticketing Service**, choosing **Zendesk**.

1. Fill in the Subdomain and Capture the Request URL
   You will be asked to enter your subdomain. Before submitting it, press **F12** to open developer mode and go to the **Network** module.

-

**Fill in the Subdomain**, which is the value before ""zendesk.com"" in the URL. Example: **weni5623** from https://weni5623\.zendesk.com/.

- When you click **Connect**, two new lines will appear in developer mode.
- Click on the second line, where the **Request URL** will start with your subdomain, for example, https://weni5623\...
- Copy the entire URL and open it in another browser tab.

1. Authorize the Use of the Application

Authorize the use of the application in your Zendesk account.

- After authorization, a step-by-step guide will be displayed to continue.
- Save the secret that is shown, as it will be needed in the following steps.

1. Install the Weni Application in Zendesk
   Access the [**Zendesk Marketplace**](https://www.zendesk.com/marketplace/apps/) and install the **Weni** application.

If the Weni app is already installed in Zendesk, there is no need to reinstall it. Proceed to the next step to **add account.**

1. Configure the Integration in Zendesk

Your account settings are now in the **Admin Center**. Go to the **Admin Center**.

In **Apps and Integrations**, add the **Weni** app from the Marketplace if you haven’t done so already.

After integrating, configure and save the information.

1. Click on **Channel Apps > Click on your Channel > Accounts > Add Account**.

Assign a name to your integration/account and add the secret saved in **Step 5**.

1. Verify the Connection on the Weni Platform
   If all the steps have been followed correctly, under **Applications > Other Apps** on the Weni Platform, the service with Zendesk should appear as connected.

1. Use the ""Open a Ticket"" Card in the Flow
   You can now use the **Open a Ticket** card in your flow on the Weni Platform.
   See: [Creating Custom Fields](/en/docs/tutorials/adding-ticket-creation-fields-in-zendesk) .

1. Set Up Triggers
   Configure a trigger so that when a ticket is closed, a completion flow is initiated for the user.
   Additionally, create triggers to prevent users in support from initiating other unwanted flows.

This is a test for opening tickets in Zendesk:

## Next steps

- Test the Integration: Perform tests to ensure that ticket creation and automatic responses are functioning as planned.
- Continuous Monitoring: Establish a regular review process for triggers and flows to ensure they align with business needs.
- Adjustments and Optimization: As system usage evolves, consider adjusting flows and triggers to optimize customer service and enhance the user experience.
