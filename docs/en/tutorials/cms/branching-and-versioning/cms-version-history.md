---
title: "Version history"
createdAt: 2026-07-09T17:08:52.219Z
updatedAt: 2026-07-09T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: cms-version-history
locale: en
---

The CMS keeps a version history for every entry, recording who made each change and when. This history allows you to review how content evolved over time, compare past states, and restore a previous version with a single click using the Restore past version feature.

In this guide, you’ll learn how to check the version history timeline and restore a past version of an entry.

![version-history-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-versioning___1a610e124a85b4fc41630dd75556960c.gif)

## Understanding the version history timeline

Version history records every save event for an entry. Each time you save content to the `main` branch or to another branch, the CMS creates a new version and stores the name of the user who made the change and the date it was saved. To open the version history for an entry:

1. In  the VTEX Admin, go to **Storefront > All Content**.  
2. Click the entry you want to review.  
3. Open the Version history drawer from the entry toolbar.

The timeline shows all saved versions for the entry in chronological order. For each version, you can see:

* The date and time the version was saved.  
* The user who made the change.  
* The branch where the version was saved, such as \`main\` or another branch.  
* Which version is currently published on the \`main\` branch.

> ⚠️ Only versions merged to the `main` branch can be restored.

## Viewing a previous version

Viewing a previous version allows you to inspect past content before deciding whether to restore it. To see a previous version, follow these steps:

1. In the Version history drawer, hover over the version you want to review.  
2. Click `View version`.

The entry form updates to display the content as it existed then. You can read all fields and sections, but you can’t edit the content in this view. After viewing, you can choose one of the following actions:

| Action | Description |
| :---- | :---- |
| Restore to Main | Duplicates the version and publishes it to the main branch as a new version on the storefront. |
| Restore to Branch  | Duplicates the version and adds it to a selected branch for further editing, without affecting the storefront. |
| Close  | Closes the previous version and returns to the current state without applying any changes.  |

## Restoring a previous version

With the Restore past version feature, you can republish content from a previous version without manually re-entering old data. The restore action duplicates the selected version and preserves all intermediate history. This feature is useful in the following scenarios:

* Broken page after a campaign ends.  
  * Your team updated the homepage for a promotion, but the post-campaign layout is now showing incorrect content. Restore the pre-campaign version directly to the `main` to fix the storefront.  
* Reusing content from a previous campaign.  
  * You want to reuse last year's Black Friday layout as a starting point for this year's campaign. Restore that version to a branch, update the dates and offers, and merge the branch into `main` when it’s ready.

### Restore to Main

Use Restore to Main to immediately publish a past version to the storefront.

1. In the Version history drawer, hover over the version you want to restore.  
2. Click `View version`.  
3. Review the content to confirm it's the correct version.  
4. Click `Restore to Main`.

The CMS duplicates the selected version, adds it to the `main` branch as a new version, and publishes it to the storefront. The version history is preserved, and all intermediate versions remain on the timeline.

> ⚠️ Content may remain cached for a few minutes after restoring to `main`. Allow a short delay before confirming the change is live on the storefront.

### Restore to Branch

Use Restore to Branch to bring a previous version into a branch for further editing before publishing.

1. In the Version history drawer, hover over the version you want to restore.  
2. Click `View version`.  
3. Review the content to confirm it's the correct starting point.  
4. Click `Restore to Branch`.  
5. Select the target branch.

The CMS duplicates the selected version and adds it to the chosen branch. The storefront isn't affected until you merge the branch into the `main` branch. For more information on merging a branch, see [Managing versions and branches](https://help.vtex.com/docs/tutorials/managing-versions-and-branches).
