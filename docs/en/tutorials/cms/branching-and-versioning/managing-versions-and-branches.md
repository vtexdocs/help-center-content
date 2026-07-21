---
title: "Managing versions and branches"
createdAt: 2026-03-27T17:08:52.219Z
updatedAt: 2026-03-31T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: managing-versions-and-branches
locale: en
---

When working with content in the CMS, changes happen frequently, whether updating a product page, preparing a campaign, or testing new layouts. Versions and branches help you manage these changes safely while collaborating with your team.

* **[Versions](#versions)** allows you to prepare changes for the future, track edits, review past content states, and restore earlier versions when needed.
* **[Branches](#branches)** allow you to group multiple page versions to collaborate and evolve your content before publishing it to the storefront.

<video controls width="100%">
  <source src="https://raw.githubusercontent.com/vtexdocs/help-center-content/cms-branches-update/docs/en/tutorials/cms/branching-and-versioning/Branches-en.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

In this guide, learn how to use versions and branches to track content changes, test safely, restore past content, and manage publishing workflows.

## Versions

Versions keep a history of every saved change to an entry so you can review how content evolved, compare past states, and restore a previous version when needed. Each time you save an entry to the `main` branch or another one, the CMS stores a new version in the version history, along with the name of the user who made the change and the date. Over time, this creates a version history for the entry.

> ℹ️ **Content Type** serves as a template (for example, `Landing Page`). An **entry**, such as the **Landing Page** shown in the video below, is a specific page or content item derived from that template for a given store and locale, containing unique values for its fields (such as `path`, `title`, and `sections`).

Versions show where the entry exists (for example, which version is published in `main` and which draft branches are available), so you can switch contexts or create a new version in a branch.

![versions-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versions-en___2de7e2f0f39c655e5b90184fa0b2a00c.png)

Version control offers several advantages for content management:

* **Rollback capability:** Quickly [restore a previously](#restore-past-versions) published version to fix issues such as broken layouts or incorrect edits.  
* **Change tracking:** Maintain a clear record of who made changes and when, to support reviews and approvals.  
* **Safe experimentation:** Test new copy, layouts, or campaigns without risk, knowing you can revert to the previous version if the results are unsatisfactory.  
* **Content reuse:** Save time by reusing content from an older campaign instead of starting from scratch.

### Version history

Version history records branching and merging events for entries, showing who made which changes and when. It displays the timeline of events within the selected entry, allowing you to review past states and restore a past version when needed.

![version-history-modal](https://vtexhelp.vtexassets.com/assets/docs/src/cms-version-history-en___15c42cc2a69ee7d36c44fba5eea5c8e4.png)

### Creating a new version

Whenever you modify an Entry, a new version is created. For example, if we make a small change to the **Default page title** within the **Landing Page** example below, the CMS generates a new version:

![creating-a-new-version](https://vtexhelp.vtexassets.com/assets/docs/src/cms-creating-version-en___e49c26465afd45218283d475b229c0ff.gif)

Once you have made the changes, you have the following actions to choose:

| Action | Description |
| :---- | :---- |
| `Save to main` | Saves your current edits directly to the `main` branch, updating the published version for that entry and updating the storefront visible to Buyers. |
| `Save to branch` | Saves your edits as a new version only in the selected branch (for example, `black-friday`), keeping the `main` branch unchanged. Use this to work on drafts or campaigns without affecting what’s published to the storefront. |
| `Discard` | Deletes all unsaved changes in the form and restores the entry to its last saved version in the `main` or other branch, without creating a new version. This action can't be undone. |

> ℹ️ For more information about branches, see the [Branches](#branches) section.

### Restore past versions

Versions saved to the `main` branch can be viewed and restored to publish content from the past. In the Version history drawer, hovering over a previously published version reveals a **View version** action.

![restore-past-versions](https://vtexhelp.vtexassets.com/assets/docs/src/restore-past-versions-en___12b2c9da44f44ec4be48915f224ab2d1.png)

Once viewed, you can choose from the following actions:

| Action | Description |
| :---- | :---- |
| `Restore to Main` | Duplicates the version and publishes it to the `main` branch as a new version on the storefront.  |
| `Restore to branch` | Duplicates the version and adds it to a target branch for additional editing, without impacting the storefront.  |
| `Close` | Closes the past version and returns you to the `main` branch without applying any restore. |

> ℹ️ For more information about branches, see the [Branches](#branches) section.

## Branches

Branches facilitate team collaboration, bulk content changes across multiple pages, and approval workflows. Branches enable you to edit, review, preview, and test changes before they go live. They are commonly used for specific content projects or campaigns, such as Black Friday, or for other special content updates that involve editing and publishing multiple pages simultaneously.

> ⚠️ **Branch limits**: keep in mind that each account can have up to 10 active branches.

![branches-overview](https://vtexhelp.vtexassets.com/assets/docs/src/branch-overview-en___da4df316c071fdf04889c08bc55ebea3.png)

| Feature | Description |
| :---- | :---- |
| **Branches (`+`)** | Lists all branches for the store. Use the **`+`** to create a new branch. |
| **Search** | Finds entries by name within the current branch and store. |
| **Content-type filter** | Filters the entries list by content type (for example, `home`, `pdp`, `landingPage`). |
| **Last update filter** | Sorts or filters entries by the most recent update time. |
| **Entries table** | Displays the entries in the branch, including **Name**, **Content Type**, **Store**, and **Last updated** information. |
| **Show only changes** | Filters the list to show only entries modified in the active branch. |
| **Pagination icon** | Navigates between pages of entries. |
| **Create content** | Creates a new entry in the current branch and store. |
| **Preview** (eye icon) | Opens a preview to review draft content in the storefront. |
| **Merge** | Merges the branch changes into `main`, immediately or on a scheduled date. For more details, see [Publishing and scheduling changes](#publishing-and-scheduling-changes). |

### Understanding the `main` branch and other branches

The `main` branch contains content published to the storefront. When you click `Save to main`, your changes are published immediately.

Other branches are used to develop and review content before publishing to the main. When you click `Save to branch`, your changes are saved as a [new version](#creating-a-new-version) within that branch, without affecting the storefront.

### Publishing and scheduling changes

The **Branches** page includes the ability to `Merge` the current branch to the `main` branch, which provides two ways to publish content to the storefront:

* `Merge now` takes the changes contained within the branch and merges them into the `main` branch. This action immediately publishes the changes to the storefront.

* `Schedule merge` lets you plan the merging of a branch into the main branch for a future date and time. The CMS will automatically execute the merge once the scheduled date and time arrive.

![publish-and-schedule-changes](https://vtexhelp.vtexassets.com/assets/docs/src/merge-schedule-en___e53bf6bf1a633faf9c9bfcc4bf2a07d1.gif)

> ⚠️ Content might be cached even after merging and may take a few more minutes to appear in the storefront.

### Delete branch

This process deletes all versions that contain changes within the branch. Entries and other branch versions will be unaffected.

## Managing content removal

There are three distinct ways to remove or revert content.

### Delete entry

Deletes the entire entry and all its versions. This action is irreversible. To delete an entry, follow these steps:

1. Choose one of the entries from a branch you created, for example, **Home**.  
2. In **Home**, click the menu, and choose `Delete`.  
3. Click `Hold to delete`, and the entry will be deleted.  

   ![delete-entry](https://vtexhelp.vtexassets.com/assets/docs/src/delete-entry-en___070187665594af4245f587d8c22cba96.gif)

### Undo changes

Discards your changes in a branch and restores the entry to its last published version.

![undo-changes](https://vtexhelp.vtexassets.com/assets/docs/src/undo-changes-en___0368b28ba85c6d02b9fe3ba6990bc2a7.png)

### Delete from `main`

Removes the entry from the `main` branch while keeping versions in other branches. This unpublishes the content from the storefront.

![delete-from-main](https://vtexhelp.vtexassets.com/assets/docs/src/delete-from-main-en___83952b2721135642c85745b7c176f365.png)

You can remove an entry from `main` in two ways:

* **Delete now:** Removes the entry from `main` immediately, unpublishing it from the storefront right away.
* **Delete on merge:** Schedules the entry's main version to be deleted automatically when a chosen branch is merged into `main`, instead of removing it by hand. This keeps the outgoing entry live until the exact moment the new content takes its place.

![delete-from-main-overview](https://vtexhelp.vtexassets.com/assets/docs/src/delete-from-main___e2abd167abc3ea7b587bfec95dd7c56e.gif)

This is especially useful for content swaps, such as seasonal campaigns. For example, if a `Christmas` entry is currently published in `main` and a `New Year's` entry is being prepared in another branch, you can schedule the deletion of the `Christmas` entry's main version so it's automatically removed as soon as the branch containing the `New Year's` entry is merged into `main`. This way, taking down the outdated entry no longer requires a separate manual step.

> ℹ️ For more information about merging branches, see [Publishing and scheduling changes](#publishing-and-scheduling-changes).
