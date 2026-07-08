---
title: "Roles and permissions"
createdAt: "2026-07-08T10:00:00.219Z"
updatedAt: "2026-03-30T10:00:00.219Z"
contentType: tutorial
productTeam: CMS
slugEN: roles-and-permissions
locale: en
---

The CMS includes three predefined roles:

* **Content Producer**: Creates and edits content within branches. Cannot publish to the live storefront (main branch).  
* **Content Editor**: Manages the full content lifecycle: create, edit, and publish. Manages Branch operations.  
* **Content Administrator**: Full access, including all Content Editor capabilities plus Store and locale configuration.

## Branches

| Action | Content Producer | Content Editor | Content Administrator |
| :---- | ----- | :---: | :---: |
| Save to `main` branch - Publish changes to the storefront. |  | ✅ | ✅ |
| Remove from `main` branch - Unpublish from the storefront. |  | ✅ | ✅ |
| Merge branch - Promote a feature branch to main, immediately or on a scheduled date. |  | ✅ | ✅ |
| Delete branch - Delete all versions with changes within the branch. |  | ✅ | ✅ |
| Create branch - Create a new branch to develop and review content before publishing. | ✅ | ✅ | ✅ |

## Entries

| Action | Content Producer | Content Editor | Content Administrator |
| :---- | ----- | :---: | :---: |
| View content - Browse entries across all branches. | ✅ | ✅ | ✅ |
| Create and edit entries - Author and modify content entries on feature branches. | ✅ | ✅ | ✅ |
| Delete entries - Permanently delete an entry and all its versions. This action is irreversible. |  |  | ✅ |

## Stores

| Action | Content Producer | Content Editor | Content Administrator |
| :---- | :---- | :---: | :---: |
| Create and configure stores - Set up stores and manage related settings, including storefront configurations, languages, and regional settings.  |  |  | ✅ |

## The branch-based publishing workflow

CMS uses a git-like branching model. Understanding this model clarifies why the Editor and Producer roles exist as separate permission levels.

* **Branches** are the authoring space. Any authenticated user, including Producers, can create and edit content here.  
* **The** `main` **branch** represents production-published content. Changes to `main` are immediately live on the storefront. Only Editors and Administrators can commit to or merge into `main`.  
* **The merge step** is the approval gate. When a Producer finishes work on a branch, an Editor or Administrator reviews and merges it, promoting the changes to the storefront. This model allows teams to separate content authoring from content publishing, giving control over what goes live and when.

## Use cases

The following scenarios show how roles interact in common content workflows.

### Launching a seasonal campaign

![lauching-a-seasonal-campaign-flow](https://vtexhelp.vtexassets.com/assets/docs/src/lauching-a-seasonal-campaign___4a8f3b593f6c2901c192d9a698646b2e.png)

### Adding a new storefront locale

![storefront-locale-role-flow](https://vtexhelp.vtexassets.com/assets/docs/src/storefront-locale-role-flow___db87989d885e827bbf1b42ae69958494.png)

## Adding roles

Roles are assigned through VTEX Admin. No setup is required. The three roles are predefined and available as soon as the app is installed. To make them available in your account, follow these steps:

1. In the VTEX Admin, go to **Account Settings > User Roles**.  
2. Click `New Role`.  
3. In the **Choose role** field, select one of the three roles: **Content Administrator**, **Content** **Producer,** or **Content** **Editor**.  
4. In the **Role name** field, type a name for this role  
5. Click `Save`.
