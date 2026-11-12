---
title: "Creating a Slack channel"
id: 6At6Ne3yXdVJqEVR8mUzC8
status: PUBLISHED
createdAt: 2025-09-15T14:30:28.340Z
updatedAt: 2026-11-12T12:00:00.000Z
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

1. With your account and workspace already created, go to [Slack API](https://api.slack.com/apps) and press the button to create a new app.

2. Select the `From scratch` option.

3. In `Basic Information` go to the Bots feature.

4. Click the `Review Scopes to Add` button to add the bot token scopes required for the integration.

5. Scroll down to the Scopes section.

6. For "Bot Token Scopes" add the scopes of `chat:write`, `files:read`, `files:write`, `users:read`. For "User Token Scopes" add the scopes of `files:read` and `files:write`.

7. Scroll up until you find the `Install to Workspace` button and click it to install the bot app for your workspace.

8. Copy the tokens "User OAuth Token" and "Bot User OAuth Token" to enter them into the channel creation form for the Slack bot on the VTEX CX Platform.

9. On the Slack apps page, go to the Basic Information menu to copy the `Verification Token`.

10. Go to **Applications > Discovery** and add the Slack app. After adding the app, you will be able to fill in the tokens. Once you have filled in all the fields in the form below—User OAuth Token, Bot User OAuth Token, and Verification Token—click the "Save changes" button to complete the process.

11. After the registration form is complete, copy the URL that will appear on the created channel configuration screen.

12. Go back to the Slack apps page, go to the `Event Subscriptions` menu item, and activate it.

13. Then paste the URL and wait a moment until the word `Verified` appears in the green color next to the Request URL title.

14. Go down the page and add the events indicated in the image.

15. Save modifications.

16. After saving, a yellow notification bar will appear asking you to reinstall the app for your workspace. Click the link indicated.

After these steps, the bot will be able to interact in the Slack workspace channels where it is added, but it still cannot exchange direct messages with users. To allow this too, follow the next instructions.

1. To enable the direct message exchange permission, go to App Home and check the box indicated in the image.

## Activate quick replies and buttons

In Slack, you need to enable sending quick replies in Features > Interactivity \& Shortcuts. In the Interactivity tab, add the Flows callback URL in the Request URL field.

With all these steps, your Slack bot channel will be integrated and able to send and receive messages in the Slack channels where the bot is added or in direct messages.
