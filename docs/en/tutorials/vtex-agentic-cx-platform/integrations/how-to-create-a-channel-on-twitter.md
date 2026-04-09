---
title: 'How to create a channel on Twitter'
id: 105ZDpGE4db4bOwN4IGjEL
status: PUBLISHED
createdAt: 2025-09-15T14:14:31.530Z
updatedAt: 2025-10-03T14:20:33.673Z
publishedAt: 2025-10-03T14:20:33.673Z
firstPublishedAt: 2025-10-03T14:20:33.673Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-channel-on-twitter
legacySlug: how-to-create-a-channel-on-twitter
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

To create a bot on Twitter, you first need to [request access to Twitter's API's](https://developer.twitter.com/en/portal/petition/essential/basic-info) for direct messages. The registration process is short and you will need to explain the purpose of your bot and the functionality you will provide.

Note that you can sign up at any level, a Sandbox account (Dev environments) is enough if you plan to make your bot work with a single account.

After you receive approval from your developer account, Twitter will send you a welcome email. You can now build your app and connect it.

#### Steps

1. Your first step is to create your app. You will be prompted for the application name, description, and URL. Fill them in according to the functionality of the bot you are building.

2. Next, you will need to create a [development environment](https://developer.twitter.com/en/portal/petition/essential/basic-info) for your application to run. You will want to create an environment for the ""Account Activity API / Sandbox"". You can name it however you want, we recommend ""production"", be sure to select the application you created in the step

- This name should be used when connecting the account on the Weni Platform.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/how-to-create-a-channel-on-twitter_1.png)

3. Now you need to create the keys and tokens for your application, which you need when creating your channel. Go back to your app and select the Keys and Tokens tab. Click Regenerate for the Consumer API Keys and Access token \& access token secret sections. Keys and tokens must be generated with the ""Read, write, and direct messages"" permissions.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/how-to-create-a-channel-on-twitter_2.png)

Make sure your account is enabled to receive direct messages from anyone. You can do this in Twitter's security/privacy settings.##### Connecting with Weni Plataform

4. To create the channel on the platform, go to your project, enter **Applications > Discovery** in the **Communication Channels** section, and add it by clicking the ""\+"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/how-to-create-a-channel-on-twitter_3.png)

5. Then, click on the **My Apps** tab; the app will be in the **Installed Apps** section. Fill out the page with the previously collected data, and don’t forget to enter the ""Environment Name"" exactly as it was configured in step 2\. Once completed, click **Save Changes**, and your channel will be connected.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/how-to-create-a-channel-on-twitter_4.png)

**Your channel is now connected, you can test sending and receiving direct messages.**
