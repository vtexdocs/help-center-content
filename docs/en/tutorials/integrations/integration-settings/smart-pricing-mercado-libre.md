---
title: 'Mercado Libre Smart Pricing'
id: 3J8t9EFFaaxmOloOqzU5Hz
status: PUBLISHED
createdAt: 2025-09-29T19:04:19.374Z
updatedAt: 2025-10-17T20:20:24.067Z
publishedAt: 2025-10-17T20:20:24.067Z
firstPublishedAt: 2025-09-29T19:25:29.346Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: smart-pricing-mercado-libre
legacySlug: smart-pricing-mercado-libre
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

**Smart Pricing** in the [Mercado Libre integration](xxxxx) provides two features: **Price suggestions** and **Automatic price adjustment.** See below to learn about each feature and how to use it.

Both features are available only to clients using the **Mercado Libre Premium** integration.

## Price suggestions

The **Price suggestions** feature sends alerts to the seller with suggestions to adjust prices in their offers. These suggestions are made based on similar products from other sellers.

To activate **Price suggestions,** follow the steps below:

1. Go to **VTEX Admin > Marketplace > Mercado Libre > Preferences > Smart Pricing**, or type **Smart Pricing** in the search bar at the top of the page.
2. In the **Price suggestions** section, click the <i class="ph ph-play-circle"></i> button. A confirmation pop-up will appear.
3. Click the `Confirm` button.

After activating the feature, the seller must track the suggestions in the [Price module](/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP). To do so, go to **Marketplace > Connections > Price** in the VTEX Admin.

You can identify all price suggestions in the Price module by their **ID** following this structure: `186-Automation`, as shown in the image below:

![Mercado Libre Smart Pricing](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/smart-pricing-mercado-libre_1.png)

## Automatic price adjustment

The **Automatic price adjustment** feature allows sellers to set rules that automatically update the prices of active offers based on the lowest prices found in similar offers on Mercado Libre and other sites.

To activate **Automatic price adjustment**, follow the steps below:

1. In the VTEX Admin, go to **Marketplace > Mercado Libre > Preferences > Smart Pricing**, or type **Smart Pricing** in the search bar.
2. In the **Automatic price adjustment** section, click the `<i class="ph ph-plus"></i> Create rule` button, and a new drawer will open.
3. Complete the `General information` and `Compare with prices` fields.  
4. Click the `Next` button.
5. Select the category you want to link to this rule.
6. Click the `<i class="ph ph-arrow-line-down"></i> Download SKUs for setup` button and complete the **minimum price** and **maximum price** fields for each SKU.
7. Upload the spreadsheet.
8. Click the `Confirm` button.
9. Click the `Activate rule` button to create and apply the new rule.

### Managing rules

All existing rules can be **edited, paused** or **deleted.**

#### Editing rules

To edit a rule, follow the steps below:

1. In the desired rule, click the <i class="ph ph-pencil-simple"></i> button. 
2. Click the <i class="ph ph-arrow-line-down"></i> button to download the spreadsheet. 
3. Edit the desired prices in the spreadsheet. 
4. Upload the updated spreadsheet. 
5. Click `Confirm changes`. 

#### Pausing rules

To pause a rule, follow the steps below:

1. In the desired rule, click the <i class="ph ph-pencil-simple"></i> button.   
2. Click the <i class="ph ph-pause-circle"></i> button.
3. Click the `Deactivate` button.

#### Deleting rules

To delete a rule, follow the steps below:

1. In the desired rule, click the <i class="ph ph-pencil-simple"></i> button.
2. Click the <i class="ph ph-trash"></i> button.
3. Click the `Delete` button.
