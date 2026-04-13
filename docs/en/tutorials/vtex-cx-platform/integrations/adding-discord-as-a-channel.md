---
title: "Adding Discord as a channel"
id: 2s5uqsnula0RiNQXXJDDrL
status: PUBLISHED
createdAt: 2025-09-15T14:27:46.594Z
updatedAt: 2025-10-03T14:20:32.891Z
publishedAt: 2025-10-03T14:20:32.891Z
firstPublishedAt: 2025-10-03T14:20:32.891Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-discord-as-a-channel
legacySlug: adding-discord-as-a-channel
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Your users will need a Discord account and a compatible device to send/receive messages. This type of channel is only available if your instance has been configured with the Discord proxy [application](https://github.com/releaseplatform/RapidPro-Discord-Proxy) .

The infrastructure required for the proxy is not provided by VTEX CX Platform.

#### Register your app by following the official instructions.

- Discord has official documentation on how to register your bot.

https://discord.com/developers/docs/getting-started

- Go to the developer dashboard and click New Application and build your app:

https://discord.com/developers/applications

1. Go to the "Bot" tab and click "Add Bot". You will have to confirm by clicking "Yes, do it!"

2. Keep the default settings for Public Bot (checked) and Require OAuth2 code grant (unchecked).
3. The next step is to copy the token.

4.Click "Reset Token" and get your token.

### Add the channel to the VTEX CX Platform

1. Within the project, go to: Applications -> Discovery -> Add Discord.

2. After adding it to "My Applications," insert your discord_bot_token provided by the Discord Developer page and the Proxy URL, which is the URL where the Discord proxy is running.

3. Save Changes.
