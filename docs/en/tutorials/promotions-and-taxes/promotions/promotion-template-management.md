---
title: "Promotion templates management"
status: PUBLISHED
createdAt: 2026-01-27T22:08:26.447Z
updatedAt: 2026-01-27T13:50:03.053Z
publishedAt: 2026-01-27T13:50:03.053Z
firstPublishedAt: 2026-01-27T23:03:15.195Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: promotion-template-management
legacySlug: promotion-template-management
locale: en
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

**Promotion templates** allow merchants to save recurring configurations for reuse when creating new promotions. This approach reduces configuration time and ensures consistency across promotions with similar rules.

A template serves as a base model and, when applied, automatically completes the New Promotion form with the previously saved configuration.

## Creating empty templates

When no template has been created, the **Templates** tab displays an empty state indicating that no models are available yet. To create the first template, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions** or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Click the **Default** tab.
4. Complete the form with the desired configuration.
5. Click `Save`.

## Accessing promotion templates

Follow the steps below to access the promotion templates section in the VTEX Admin and create or manage existing templates:

1. In the VTEX Admin, go to **Promotions > Promotions** or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Complete the form with the configuration you want to reuse.
4. Click `Save as template`.
5. In the **Save as template** modal, complete:
   - Name (required): Identifies the template in the list of templates.
   - Description (optional): Brief explanation of the purpose or type of promotion associated with the template.
6. Click `Save`.

After creation, the template becomes available in the **Templates** tab, accessible via **Promotions > Promotions > Create promotion > Templates**.

> ℹ️ The form remains a promotion configuration form and isn't automatically saved as a template. If the promotion has a configured budget, this configuration isn't saved in the template.

## Creating promotions from a template

Use a template to create a promotion with a pre-defined configuration. To do so, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions** or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Click the `Templates` tab.
4. Select the desired template. The **New promotion** page will open with the form pre-completed.
5. Review the fields automatically completed based on the selected template.
6. Manually configure the fields that aren't part of the template.
7. Save the promotion.

> ℹ️ Changes made to a promotion created from templates don't affect the original template.

## Editing promotion templates

To edit templates and update the base configuration for future promotions, follow these steps:

1. In the VTEX Admin, go to **Promotions** or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Click the **Templates** tab.
4. Find the template you want to edit and click the icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
5. Click `Edit`.
6. Make the necessary changes.
7. Click `Save`.

After that, the VTEX Admin will display the **Template saved successfully** confirmation message.

> ℹ️ The changes will only apply to new promotions created from this template. Existing promotions won't be affected.

## Deleting promotion templates

To delete a template, follow the steps below:

1. In the VTEX Admin, go to **Promotions > Promotions** or type **Promotions** in the search bar at the top of the page.
2. Click `Create Promotion`.
3. Click the **Templates** tab.
4. Find the template you want to delete and click the icon <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
5. Click `Delete`.

> ⚠️ Deleting a template can't be undone and doesn't affect existing promotions.