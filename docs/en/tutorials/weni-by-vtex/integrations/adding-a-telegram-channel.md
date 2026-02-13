---
title: 'Adding a Telegram channel'
id: 2HpxHtgeLai6EpgEFxQL2p
status: PUBLISHED
createdAt: 2025-09-15T14:59:37.246Z
updatedAt: 2025-10-03T14:20:32.736Z
publishedAt: 2025-10-03T14:20:32.736Z
firstPublishedAt: 2025-10-03T14:20:32.736Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-telegram-channel
legacySlug: adding-a-telegram-channel
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

To connect your chatbot with Telegram, follow these steps:

#### **Talk with BotFather:**

BotFather is a chatbot that creates and manages other chatbots for Telegram. To find it, look for @BotFather in your Telegram's search bar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/adding-a-telegram-channel_1.png)

#### **Create a new chatbot with BotFather:**

Once you start the conversation with BotFather, send the message /newbot to create a new chatbot. Then choose a name and a Username (usernames must always end with “\_bot”, ex test\_bot).

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/adding-a-telegram-channel_2.png)

#### **Receive the access token:**

All set! You’ve created your new chatbot and received your token! Copy and save it for use on the Weni Platform.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/adding-a-telegram-channel_3.png)

#### **Registering Telegram on the platform:**

1. With the token in hand, you can now integrate Telegram into your project.
2. Locate the project you want to integrate.
3. On the sidebar, click on **Applications**.
4. Select the **Telegram** option and add the channel to your project.
5. Once added, go to the **My Apps** tab and click on the Telegram icon to add the token you obtained earlier from BotFather, then click **Validate**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/integrations/adding-a-telegram-channel_4.png)

6. All set! The generated channel will have the same name as the bot you created.

#### **Enabling Triggers**

The Telegram bot displays a **""Start""** button when you interact with it for the first time:

To ensure that the **Start** button initiates a new conversation when clicked, you need to configure the [corresponding trigger](/en/docs/tutorials/triggers-types) by providing the name of the Telegram channel and the desired flow.

Since this type of trigger only works on the first interaction, to enable interactions in subsequent flows, you need to have at least one more trigger configured, such as one that [captures unhandled messages by another flow](/en/docs/tutorials/triggers-types).
