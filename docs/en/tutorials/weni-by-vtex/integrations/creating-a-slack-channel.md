---
title: 'Creating a Slack Channel'
id: 6At6Ne3yXdVJqEVR8mUzC8
status: PUBLISHED
createdAt: 2025-09-15T14:30:28.340Z
updatedAt: 2025-10-03T14:20:32.860Z
publishedAt: 2025-10-03T14:20:32.860Z
firstPublishedAt: 2025-10-03T14:20:32.860Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-slack-channel
legacySlug: creating-a-slack-channel
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### Begin

1. With your account and workspace already created, **https://api.slack.com/apps** and press the button to create a new app.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_1.png)

2. Select the `From scratch` option.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_2.png)

3. In `Basic Information` go to the Bots feature. 

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_3.png)

4. Trigger `the Review Scopes to Add` button to add the bot token scopes required for integration.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_4.png)

5. Walk the page down to the Scopes content block.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_5.png)

6. For ""Bot Token Scopes"" add the scopes of `chat:write`, `files:read`, `files:write`, `users:read`. For ""User Token Scopes"" add the scopes of `files:read` and `files:write` 

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_6.png)

7. Go up to the page until you find the `Install to Workspace` button and trigger it to install the bot app for your workspace.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_7.png)

8. Copy the tokens ""User OAuth Token"" and ""Bot User OAuth Token"" to enter them into the channel creation form for the Slack bot on the Weni platform.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_8.png)

9. On the slack apps page, go to the Basic Information menu to copy the `Verification Token`.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_9.png)

10. Go to **Applications > Discovery** and add the Slack app. After adding the app, you will be able to fill in the tokens.Once you have filled in all the fields in the form below—User OAuth Token, Bot User OAuth Token, and Verification Token—click the ""Save changes"" button to complete the process.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_10.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_11.png)

11. After the registration form is complete, copy the URL that will appear on the created channel configuration screen.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_12.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_13.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_14.png)

12. Go back to the slack apps page, go to the `Event Subscriptions` menu item, and activate.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_15.png)

13. Then paste the URL and wait a moment until the word `Verified` appears in the green color next to the Request URL title.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_16.png)

14. Go down the page and add the events indicated in the image.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_17.png)

15. Save modifications.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_18.png)

16. After saving a yellow notification bar will appear asking you to reinstall the app for your workspace, click the link indicated.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_19.png)

After these steps the bot will be able to interact in the Slack Workspace Channels that is inserted, but still cannot exchange direct messages with users, to allow this too, follow the next instructions.

1. To enable direct message exchange permission go to App Home and check the check box indicated in the image.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_20.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_21.png)

# How to activate quick replies/buttons in slack

In slack you need to enable sending quick responses in Features > Interactivity \& Shortcuts in the Interactivity tab add in the Request URL field the Flows callback URL.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/creating-a-slack-channel_22.png)

With all these steps your channel with slack bot will be integrated and able to send and receive messages in the slack channels that the bot is added or in direct messages.
