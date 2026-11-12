---
title: "Creating a channel on Twitter"
id: 105ZDpGE4db4bOwN4IGjEL
status: PUBLISHED
createdAt: 2025-09-15T14:14:31.530Z
updatedAt: 2026-11-12T12:00:00.000Z
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

To create a bot on Twitter, you first need to [request access to Twitter's APIs](https://developer.twitter.com/en/portal/petition/essential/basic-info) for direct messages. The registration process is short and you will need to explain the purpose of your bot and the functionality you will provide.

Note that you can sign up at any level; a Sandbox account (Dev environment) is enough if you plan to make your bot work with a single account.

After you receive approval from your developer account, Twitter will send you a welcome email. You can now build your app and connect it.

## Create the app on Twitter

1. Your first step is to create your app. You will be prompted for the application name, description, and URL. Fill them in according to the functionality of the bot you are building.

2. Next, you will need to create a [development environment](https://developer.twitter.com/en/portal/petition/essential/basic-info) for your application to run. You will want to create an environment for the "Account Activity API / Sandbox". You can name it however you want, but we recommend "production". Be sure to select the application you created in step 1.

- This name should be used when connecting the account on the VTEX CX Platform.

3. Now you need to create the keys and tokens for your application, which you need when creating your channel. Go back to your app and select the Keys and Tokens tab. Click Regenerate for the Consumer API Keys and Access Token & Access Token Secret sections. Keys and tokens must be generated with the "Read, write, and direct messages" permissions.

Make sure your account is enabled to receive direct messages from anyone. You can do this in Twitter's security/privacy settings.

## Connect the channel on the platform

4. To create the channel on the platform, go to your project, open **Applications > Discovery**, and in the **Communication Channels** section, add it by clicking the "+".

5. Then, click on the **My Apps** tab; the app will be in the **Installed Apps** section. Fill out the page with the previously collected data, and don’t forget to enter the "Environment Name" exactly as it was configured in step 2. Once completed, click **Save Changes**, and your channel will be connected.

**Your channel is now connected. You can test sending and receiving direct messages.**
