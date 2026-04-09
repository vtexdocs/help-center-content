---
title: 'Creating a Microsoft Teams channel'
id: 6Of4QOVgAa95Z2QjZZYeDR
status: PUBLISHED
createdAt: 2025-09-15T14:44:39.171Z
updatedAt: 2025-10-03T14:20:32.801Z
publishedAt: 2025-10-03T14:20:32.801Z
firstPublishedAt: 2025-10-03T14:20:32.801Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-microsoft-teams-channel
legacySlug: creating-a-microsoft-teams-channel
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Building an Application in Azure

1. To create your bot application, go to https://portal.azure.com/ you will need to create an account, if you don't have one.
2. After logging into your account, select **Create a Resource.**
3. Search for **Azure Bot** in the search box.
4. Select **Azure bot** in marketplace.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_1.png)

5. Select **Create.**
6. Enter the identifying name for the bot in the identification field.
7. Select your signature from the list, by default it will already look like a created signature.
8. Select your resource group or create a new one.
	- If you want to create a resource group, select **Create New**, enter the resource name, select **OK**, and select the required location from the **New Resource Group Location** drop-down list.
9. Select the **application type**, **multi-tenant** is recommended. After that, select **Review \+ Create.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_2.png)

10. Select **Create**, if validation is approved. It takes a few moments for your bot service to be provisioned.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_3.png)

11. Select **Go to resource**. Now your application is created!

#### **To create the client secret**

1. From Settings, select **Configuration**. Save the Microsoft application ID (client ID) for future reference.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_4.png)

2. Select **Manage** next to **Microsoft App ID.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_5.png)

3. In the **Client Secrets** section, select **New Client Secret**. The **Add a Client Secret window appears.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_6.png)

4. Enter a **Description** and a period for the expiration of the secret, then select **Add.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_7.png)

5. Select **Copy to clipboard** in the **Value** column and save the **client secret ID** for future reference.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_8.png)

6. You need to search for one more piece of data that you will need for the creation of the channel on the Weni Platform, to do this, go back to **Home** and select your bot. Go to Overview on the left menu, then select **JSON View.** A json will open with some information about your application, look for **tenant id** and save the value.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_9.png)

#### **To add Microsoft Teams channel**

1. Go to **Home.**
2. In the **Recent Resources** section, open your bot.
3. Select **Channels** from the left panel and select **Microsoft Teams** from the list of available channels.

#### **Set up bot profile**

1. If you want you can set up the bot profile, to do this, in your bot go to **Bot Profile** in the menu on the left and set it up as you wish. You can add profile pictures and other information.

#### **To add the Microsoft Teams channel to your bot**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_10.png)

1. Select the check box to accept the terms of service and select **Agree.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_11.png)

2. Select **Save.**

#### **Creating a Channel on the Weni Platform**

1. After you login to the platform, choose your organization and project, go to **Settings.**
2. Select Add **Channel.**
3. From the channel list, select **Teams.**
4. To connect a channel, you will need the information about the app you created earlier (Bot name, Bot id, App id, App password and Tenant id)
5. Enter the name you gave your bot when creating the application in the **Bot name** field.
6. In **Bot id** enter the **Application ID** that you saved earlier when creating the application.
7. In App id enter the **Application ID** again.
8. In **App password** enter the **Client Secret** you created earlier.
9. In **Tenant id** enter the tenant id value you saved earlier.
10. Now click **Submit.**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_12.png)

11. Now your channel is created!
12. On the channel page that you will be sent to right after you click **Submit**, you will have the ID of that channel, we will need that value. To get it you can copy the large ID that you will have at the end of the URL of this page. After the **read/** copy all this id made up of numbers, letters, and dashes. Save it.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_13.png)

#### **Set Up Endpoint in Application**

1. Go back to Azure, under Home select your bot in Recent Resources, after that go to Settings in the left menu.
2. At **Endpoint** add the url below, at **\[CHANNEL ID]** add the ID you saved in the previous step.
	- [*https://new.push.al/c/tm/*](https://new.push.al/c/tm/) *\[CHANNEL ID]/receive*
	- e.g.: [https://new.push.al/c/tm/37b755f9-2d97-48fd-8c46-6f0f4d102d16/receive](https://new.push.al/c/tm/37b755f9-2d97-48fd-8c46-6f0f4d102d16/receive)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-microsoft-teams-channel_14.png)

#### **Setup bot in Teams**

1. In the lower left corner select Apps.
2. Use the search bar on the left and search for **App Studio**. Select it and install it, then click open.
3. Select **Create a new App.**
4. Under **App Details,** enter all the data you already have such as name.
5. Under **Identification** enter the **App ID,** under **Package name** enter a name that references your app e.g.: com.microsoft.teams.devapp
6. For **version,** use something like **v1\.0\.0**
7. In **Description** enter a description for your application, tell what it does and who it does it for, for example.
8. Under **Developer Info** enter your company data, such as name and website.
9. In **App URLs** enter the url of your company's privacy terms and in terms of use enter the url of your terms.
10. In **Branding**, you update the profile images you want your bot to have, click update and choose your images.
11. In step 2 under **Capabilities,** you can set some specifications for your bot, this step is not required for your bot to work together with our platform, so we will skip this step.
12. Now in step 3 of the left menu click on **Domains and Permissions.**
13. In **Valid Domains** enter the domain of our platform so that your bot can integrate with us (<https://new.push.al>) and click **Add.**
14. In **AAD App ID** enter your **Tenant ID** that you saved earlier.
15. Now for the last step, click **Test and Distribute** in step 3 in the left menu.
16. You can publish your bot in your organization's catalog, so everyone who participates in your organization can add your bot and send messages to it. To do this, click on Publish app in my organization's catalog and click on **Submit.**

**Important: for your app to be published in your organization's catalog, will have to be accepted by your organization's IT administrator. Once accepted your bot will be available for installation in your company's catalog for all employees that are part of it.**
