---
title: 'Adding a trigger'
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

At this point, your chatbot is connected to a channel, but to automatically start a flow when the user interacts with the chatbot, you need to set up a Trigger. To create it, go to the Triggers Menu within the ""Studio"" module and click on ""Create Trigger.""

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_1.png)

In this section, we will create a standard trigger that can be configured in both the studio module and the flow.

- Click on ""Create Trigger."" A new window will open

- Click the button ""Create a message keyword that launches a flow.""
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_2.png)

- In the keyword space, you will define the word that will act as a trigger.Avoid using common words like: help, hello, good afternoon. Instead, use: test123, help123. This ensures that if the user uses any common word in a message, the flow with this trigger won't be activated.

- In the trigger, you can choose to activate when:- The message starts with the keyword – If the phrase typed by the user starts with the keyword, the selected flow will be triggered.

- The message contains only the keyword – The selected flow will execute an action if the user types only the single registered keyword.

- In ""Flow,"" you define the flow to be started.

- In ""Only Groups,"" you can choose to include or exclude the rules of this trigger for a specific group of contacts. Leave the field blank if you want to apply this rule to everyone.

- Click on ""Create Trigger"" box.
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_3.png)

In ""Groups to Exclude"": you can prevent people from certain groups from entering this flow.
If your Agent Builder is active, the triggers **WILL NOT** work, as the flows are activated by the intelligent agent and not by triggers.

#### Creating triggers in a flow

- Click on ""Flows"" choose your flow, and open it.
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_4.png)

- Within the flow, click on the three-line menu and select ""Edit."" A new window will open.
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_5.png)

- In ""Global Keywords,"" type the trigger word and click ""Save Changes.""
  ![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/studio/adding-a-trigger_6.png)
