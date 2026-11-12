---
title: "Adding a trigger"
id: 4bo1N0wsONdFMVDMlIPU9T
status: PUBLISHED
createdAt: 2025-09-12T17:40:04.331Z
updatedAt: 2025-10-03T14:20:34.064Z
publishedAt: 2025-10-03T14:20:34.064Z
firstPublishedAt: 2025-10-03T14:20:34.064Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-trigger
legacySlug: adding-a-trigger
locale: en
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

At this point, your chatbot is connected to a channel, but to automatically start a flow when the user interacts with the chatbot, you need to set up a trigger.

## Creating a standard trigger

In this section, we will create a standard trigger that can be configured both in **Contacts** and in the flow:

1. Click `Create Trigger`. A new window will open.
2. Click **Create a keyword that starts a flow**.
3. In the **Keyword** field, define the word that will act as the trigger:
    - At this stage, avoid common names such as "help", "hello", and "good afternoon". Use "test123" or "help123". This way, if the user uses a common word in a message, the flow with this trigger will not start.
4. Choose when the trigger fires:
    - When the message starts with the keyword: the selected flow starts.
    - If the phrase typed by the user starts with the keyword: the selected flow starts.
    - If the message contains only the keyword: the selected flow runs an action if the user types **only** the single registered keyword.
5. In **Flow**, define the flow to start.
6. In **Groups to include**, apply this trigger's rules to a specific contact group.
7. In **Groups to exclude**, exclude this trigger's rules from a specific contact group.
8. Click the `Create Trigger` box.

> If your Agent Builder is active, triggers will not work, because flows are started by the intelligent agent and not by triggers.

## Creating triggers in an automation flow

1. Click **Automation flow**.
2. Select the flow, and then click the three-line menu.
3. Click `Edit`.
4. In **Global trigger keywords**, enter the trigger you want and click `Save changes`.
