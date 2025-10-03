---
title: 'Zendesk - Human Support'
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

### Steps for Integration

The integration between the Weni platform and Zendesk provides a powerful tool for managing customer service efficiently and automatically. After completing the configuration and installation, it is essential to monitor the integration's operation to ensure that all tickets are managed correctly and that automatic triggers function as expected.

1. Create an account on Zendesk

If you don’t have an account yet, create one on Zendesk. For this example, we are using a free trial account. (https://weni5623\.zendesk.com/)

Access: <https://www.zendesk.com/>

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_1.png)

1. Access the Project on the Weni Platform
Within your project on the Weni platform, go to the **Applications > Other Apps** module.
Click on the hamburger menu and select **Add Ticketing Service**, choosing **Zendesk**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_2.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_3.png)

1. Fill in the Subdomain and Capture the Request URL
You will be asked to enter your subdomain. Before submitting it, press **F12** to open developer mode and go to the **Network** module.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_4.png)

-

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_5.png)

**Fill in the Subdomain**, which is the value before ""zendesk.com"" in the URL. Example: **weni5623** from https://weni5623\.zendesk.com/.
- When you click **Connect**, two new lines will appear in developer mode.
- Click on the second line, where the **Request URL** will start with your subdomain, for example, https://weni5623\...
- Copy the entire URL and open it in another browser tab.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_6.gif)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_7.png)

1. Authorize the Use of the Application

Authorize the use of the application in your Zendesk account.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_8.png)

- After authorization, a step-by-step guide will be displayed to continue.
- Save the secret that is shown, as it will be needed in the following steps.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_9.png)

1. Install the Weni Application in Zendesk
Access the [**Zendesk Marketplace**](https://www.zendesk.com/marketplace/apps/) and install the **Weni** application.

If the Weni app is already installed in Zendesk, there is no need to reinstall it. Proceed to the next step to **add account.**

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_10.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_11.png)

1. Configure the Integration in Zendesk

Your account settings are now in the **Admin Center**. Go to the **Admin Center**.

In **Apps and Integrations**, add the **Weni** app from the Marketplace if you haven’t done so already.

After integrating, configure and save the information.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_12.png)

1. Click on **Channel Apps > Click on your Channel > Accounts > Add Account**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_13.png)

Assign a name to your integration/account and add the secret saved in **Step 5**.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_14.png)

1. Verify the Connection on the Weni Platform
If all the steps have been followed correctly, under **Applications > Other Apps** on the Weni Platform, the service with Zendesk should appear as connected.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_15.png)

1. Use the ""Open a Ticket"" Card in the Flow
You can now use the **Open a Ticket** card in your flow on the Weni Platform.
See: [Creating Custom Fields](https://docs.weni.ai/l/pt/configura-es/campos-de-cria-o-de-ticket-no-zendesk) .

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_16.png)

1. Set Up Triggers
Configure a trigger so that when a ticket is closed, a completion flow is initiated for the user.
Additionally, create triggers to prevent users in support from initiating other unwanted flows.

This is a test for opening tickets in Zendesk:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/zendesk-human-support_17.png)

##### Next Steps:

- Test the Integration: Perform tests to ensure that ticket creation and automatic responses are functioning as planned.
- Continuous Monitoring: Establish a regular review process for triggers and flows to ensure they align with business needs.
- Adjustments and Optimization: As system usage evolves, consider adjusting flows and triggers to optimize customer service and enhance the user experience.
