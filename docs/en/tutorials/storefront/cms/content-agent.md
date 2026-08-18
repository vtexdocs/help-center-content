---
title: "Content agent"
createdAt: "2026-08-18T10:00:00.219Z"
updatedAt: "2026-08-18T10:00:00.219Z"
contentType: tutorial
productTeam: CMS
slugEN: content-agent
locale: en
---

The Content agent edits your storefront content from a conversation. Instead of opening each entry and filling in fields manually, you describe the change you want, such as reordering the banners in the home hero or updating a campaign headline, and the agent applies it to the content in the CMS.

The agent works inside the same [branch-based model](https://help.vtex.com/docs/tutorials/managing-versions-and-branches) used by the rest of the CMS. Every edit it makes is saved to a branch as a new version, previewed in the storefront context, and only reaches Buyers when the branch is merged into `main`. This means the agent can't publish anything to the live storefront on its own.

> ⚠️ The Content agent is available for FastStore stores from v3 and above, and Headless Stores. If your store uses FastStore v1 or v2, see [Headless CMS (Legacy)](https://help.vtex.com/docs/tutorials/headless-cms-overview).

## Accessing the Content agent

To use the Content agent, open the VTEX Admin and go to **Storefront > Content > Content**. The Content page has two tabs:

* **Store:** Displays a live preview of your storefront with the agent prompt below it. Use this tab to inspect the storefront and ask for changes.
* **Branches:** Lists all the branches in the account, so you can track and open the work in progress.

The prompt at the bottom of the page is available on both tabs. To talk to the Content agent, select it in the agent selector next to the message field and describe what you want to change.

## Content analytics

![content-agent-analytics-tab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms/content-agent_1.png)

At the top of the **Store** tab, a set of indicators summarizes the current state of your content:

| Indicator | Description |
| :---- | :---- |
| **Content Score** | Overall quality assessment of the store's published content. |
| **Active branches** | Number of branches with unmerged changes in the account. |
| **Your branches** | Number of active branches created by you. |
| **Last update** | Time elapsed since the most recent content change. |
| **Deploy status** | Time elapsed since the last deploy of the storefront. |

Below the indicators, the storefront preview shows the content as Buyers see it. You can switch between desktop and mobile views to check how a change behaves on each device.

## Branches tab

![content-agent-branches-tab](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms/content-agent_2.png)

The **Branches** tab lists every branch in the account with the following information:

| Column | Description |
| :---- | :---- |
| **Branch** | Name of the branch. |
| **Changes** | Number of content items added and removed in the branch, compared to `main`. |
| **Score** | Content quality assessment for the branch. |
| **Created by** | User who created the branch. |
| **Last update** | Date of the most recent change in the branch. |

Use the search field to find a branch by name and the **Author** filter to see only the branches created by a specific user. To create a branch, click <i class="fas fa-plus" aria-hidden="true"></i>.

> ℹ️ Each account can have up to 10 active branches. For more details on how branches work, see [Versions and branches](https://help.vtex.com/docs/tutorials/managing-versions-and-branches).

## Editing content with the agent

When you send a prompt, the Content agent opens a working session with the conversation on the left and the storefront preview, called canvas, on the right.

![content-agent-chat-and-canvas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/storefront/cms/content-agent_3.png)

The agent applies each change to the branch you are working on and updates the canvas so you can review the result immediately. You can keep refining the same content in follow-up messages within the conversation.

### Setting the context

Before sending a prompt, check the context displayed below the message field. It defines where the agent will apply the changes:

* **Store:** Storefront the agent will edit, for example `Nike USA`. Accounts with more than one storefront must select the correct one.
* **Branch:** Branch that receives the changes. The agent never writes directly to `main`.
* **Locale:** Language and region of the content being edited, for example `English US (Default)`. Changes apply only to the selected locale.

A counter next to the context shows how many content items were added and removed in the branch so far.

> ⚠️ Always confirm the branch before sending a prompt. Changes are saved as new versions in that branch and can only be undone by discarding them.

### Selecting elements on the canvas

To limit the scope of a change, select an element directly in the canvas before writing the prompt. You can select a whole section, such as a hero carousel, or a smaller element inside it, such as a single banner or a call-to-action button.

The selected element is attached to the prompt as context, so you can describe the change without explaining where it is. For example, after selecting a banner, `swap this image for the summer campaign one` is enough for the agent to identify the target.

### Reviewing changes

Click `Changes` in the canvas header to open the changes drawer, which lists everything modified in the branch. Each entry shows:

* Whether the item was added, edited, or removed.
* The name of the content item and the content type it belongs to, such as a banner, a product listing page, or the store menu.
* When the change was made and which user or agent made it.

Use this drawer to review the agent's work before merging, especially when a single prompt affects several pages.

## Publishing changes

The Content agent doesn't publish content. After reviewing the changes in the branch, publish them by merging the branch into `main`, either immediately or on a scheduled date. For instructions, see [Publishing and scheduling changes](https://help.vtex.com/docs/tutorials/managing-versions-and-branches#publishing-and-scheduling-changes).

> ℹ️ Merging into `main` requires the Content Editor or Content Administrator role. For more information, see [Roles and permissions](https://help.vtex.com/docs/tutorials/roles-and-permissions).

## Writing effective prompts

The following practices help the agent produce the result you expect:

* **Be specific about the target.** Name the page and the section, or select the element in the canvas before writing the prompt.
* **Describe one change at a time.** Sequential prompts are easier to review and undo than a single prompt with several unrelated requests.
* **State the intent, not the implementation.** Describing the outcome you want, such as `make the hero show the summer collection first`, works better than describing field-by-field edits.
* **Review before merging.** Always open the changes drawer and the preview before publishing to the storefront.
