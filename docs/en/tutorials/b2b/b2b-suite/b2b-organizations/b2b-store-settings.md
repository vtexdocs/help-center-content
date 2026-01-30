---
title: 'B2B Store Settings'
id: 7riBcnrOv4Cz7qMeACyVLm
status: PUBLISHED
createdAt: 2023-10-11T15:17:39.003Z
updatedAt: 2025-10-14T18:11:52.743Z
publishedAt: 2025-10-14T18:11:52.743Z
firstPublishedAt: 2023-10-19T13:27:04.087Z
contentType: tutorial
productTeam: B2B
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: b2b-store-settings
legacySlug: b2b-store-settings
locale: en
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

This page allows defining the behavior of B2B stores related to organization approval, user experience during navigation between companies, and linked trade policies.

To access the settings of your B2B store, follow the steps below:

1. In the VTEX Admin, go to Apps > B2B Organizations & Cost Centers > Organizations, or type Organizations in the search bar at the top of the page.
2. On the Organizations page, click Settings.

On this page, you can do the following:

- Set approval for new organizations
- Link trade policies to the store
- Remove trade policies from the store

## Setting approval for new organizations
- Auto approve new organizations: When enabled, all newly created organizations will be approved automatically.
Otherwise, you can configure the notification topbar to indicate that the organization hasn't been approved.

After configuring organization approval, customize the topbar shown to buyers.

### Customizing the topbar
- Topbar color: Sets the background color of the bar shown at the top of the page. The color must be provided in hex code (example: #656896).
- Message: Informative text that will be shown inside the bar.

> ℹ️ If the **Message** field is left blank, the default text will be shown.

### Applying edit restrictions
- Make business document read only: Prevents the buyer from editing the business document.
- Make state registration read only: Prevents editing the state registration field.

### Configuring navigation behavior
- Use modal to switch buyer company: Activates a modal window that allows users to select another buyer organization without leaving the current page.
- Clear cart when switching company or logging in: Removes items from the cart whenever the user switches between organizations or logs in.
- Allow organization and cost center selection with impersonating: Enables direct control over these fields when acting as another user in the store environment.

After making changes in the above sections, click Save in the top right corner of the page to apply them correctly.

## Linking trade policies to the store
This section allows linking the store to specific [trade policies](/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV).

To link a trade policy, follow the steps below:

- On the **Settings** tab, go to the **Bindings** section.
- In the **Available bindings**, check the box of the desired trade policy.
- Click `Add to binding` to move the policy to the Selected bindings list.

## Removing trade policies from the store
To unlink a trade policy from the store, follow the steps below:

1. On the **Settings** tab, go to the **Selected bindings** section.
2. Check the box of the trade policy you want to remove.
3. Click **Remove from binding** to remove it from the list.

After adding or removing trade policies, click Save in the top right corner of the page to apply the changes.
