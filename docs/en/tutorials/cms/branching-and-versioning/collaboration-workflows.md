---
title: "Collaboration workflows"
createdAt: 2026-05-20T17:08:52.219Z
updatedAt: 2026-06-10T17:08:52.219Z
contentType: tutorial
productTeam: CMS
slugEN: collaboration-workflows
locale: en
---

When collaborating with a team, [Branches](https://help.vtex.com/en/docs/tutorials/managing-versions-and-branches) provide key features to facilitate content editing and review processes. They allow multiple contributors to collaborate efficiently while maintaining control over different content versions.

## Multi-user awareness

When multiple team members are editing the same version, the system displays user avatars in the header. This makes it easy to identify who is currently active in the document.

![multi-user-awareness-overview](https://vtexhelp.vtexassets.com/assets/docs/src/multi-user-awareness-1___efb04fe660bbcd9c627683189124a776.gif)

Additionally, in the **Versions** menu, you can see which users are actively editing a specific version. Their avatars appear next to the version name in the side panel, helping teams stay aware of ongoing changes and avoid conflicts.

![multi-user-awareness-detail](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/cms/branching-and-versioning/collaboration-workflow-2.gif)

## Multi-user editing within a branch

When multiple users are working on the same version in a branch, the content updates automatically whenever someone saves their changes. This ensures that everyone sees the latest saved version.

However, unsaved changes aren't protected. If two users edit the same content and one of them clicks `Save`, their version will overwrite any unsaved changes made by the other user.

To avoid losing work, use the [multi-user awareness feature](#multi-user-awareness) to see who else is editing. You can identify active users by their avatars and coordinate changes accordingly.

## Auto-updating branch content

Branches automatically stay synced with the latest changes published to the `main` branch via the auto-update feature. This ensures the branch version is up to date without overwriting changes made in the branch.  

For example, if you're editing a **product shelf** on the homepage in a branch called **Spring refresh**, and a teammate publishes a banner update directly to `main`, your **Spring refresh** branch will automatically include that new banner without interrupting or affecting your ongoing work.  

The core principle is that changes made in your branch are always preserved and never overwritten by updates from `main`.  

If both you and your colleague update the same content (for example, the same product shelf), the auto-update doesn't apply. In case of conflict, the system keeps the changes made in the branch.
