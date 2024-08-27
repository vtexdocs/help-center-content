---
title: 'Price Configuration (Beta)'
id: 5VGOhV4yRpg9WB5B0Pjw1J
status: DRAFT
createdAt: 2020-09-08T15:14:39.844Z
updatedAt: 2022-07-27T12:43:11.380Z
publishedAt: 
firstPublishedAt: 2020-09-24T17:54:32.771Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: beta-price-configuration
locale: en
legacySlug: price-configuration-beta
subcategory: 2XTQ6yFYeU5bGHK8Qq3f4I
---

<div class = "alert alert-info" >
  <p>This feature is in Beta stage, meaning we are working to improve it. If you have any questions, please contact <a href = "https://support.vtex.com/hc/en-us/requests">our Support Center</a>.</p>
</div>

This new Price Settings (Beta) section allows you to create and manage rules for price lists and change general settings in an easy and fast way. 

## Price General Settings

In this section, you can set the default markup and price variation limit for your store, as well as inherit prices from your parent account and overwrite sellers' prices with those from your account.

- **Default markup for new prices:** default profit percentage over a new price added to a product or service.
- **Use price variation limit:** ensures that SKU prices are not changed to undesired values.
  - **maximum decrease:** highest decrease in the price of a SKU.
  - **maximum increase:** highest increase in the price of a SKU.
- ** In case of nonexistent price, inherit from parent account:** option that allows inheriting prices from a parent account if the price does not exist in the current account.
- **Inherit from parent account:** option that allows the current account to inherit prices from a parent account. The price inheritance is done in the following situations:
  - **Always:** the account will always inherit all the prices from the parent account.
  - **Only for non-existent prices:** the parent account prices will be inherited only if they are non-existent in the current account.

<div class = "alet alert-info">
  <p>The option to <b>inherit prices from parent account</b> is only available for child accounts.</p>
</div>

- **Overwrite seller prices:** this option overwrites all seller prices with the ones from the current account. 

>ℹ️ The configuration **Overwrite prices for sellers** is not available for white label sellers.

## Price table rules

<div class = "alert alert-warning" >
  <p>This section is the alternative for clients who used to configure their prices through Pricing V1 UTM. Now you can select a price table for UTM scenarios.</p>
</div>

In this section you can create pricing table prioritization rules from specific conditions.

### Strategy

- **Lowest price:** it will configure the store to use the lowest price found in the price tables.
- **Highest price:** it will configure the store to use the highest price found in the price tables.
- **Priority (custom):** it will configure the store to use the first price found according to the priority set for price tables.

### Creating price table rules

To create a new rule, follow the steps below:

1. In Admin, click on the **Prices** module.
2. Click on **Settings**.
3. In the **Price tables rules** section, click on the **New rule** button.
4. Fill in the **Rule name**.
5. Select the price table the rule will be applied to.
6. Indicate the conditions for activating the rule:

  a. **Always active:** the price table is continually activated, regardless of any conditions.

  b. **Activate in specific conditions:** the price table will be activated according to the conditions set in the rule. See the configuration possibilities on the following images:

  ![config-preco-EN](https://images.ctfassets.net/alneenqid6w5/2sDqS10pMIv7tmDTgP96si/10028ff45ae241863445061a871e98dd/config-preco-EN.png)

  ![config-preco2-EN](https://images.ctfassets.net/alneenqid6w5/13jaqi9EY1SZ7CdShElb7r/e9ce4f8ca7b2322aacd556fbf5f7cd50/config-preco2-EN.png)

![config-preco3-EN](https://images.ctfassets.net/alneenqid6w5/3EC7hLAQO43LoPlijbXFKM/42d35e6f525408f2920da790b08bd88d/config-preco3-EN.png)

  7. Click on **Confirm**.

### Edit price table rule

To edit a rule, follow the steps below:

1. In Admin, click on the **Prices** module.
2. Click on **Settings**.
3. In the **Price table rules** section, click on the icon <i class="fas fa-pen" title = "edit pen"></i>.
4. Make the desired changes.
5. Click on **Confirm**.

If you have the **Priority (custom)** strategy activated, you can change the rule sorting to change the priority. To do so, click on the icon <i class="fas fa-grip-vertical" title = "vertical drag"></i>, drag the item to the desired position and release it.

## Delete or duplicate price table rule

If you want to delete a rule, just click on the icon <i class="fas fa-trash-alt" title = "trash"></i> in the rule list. 

If you want to duplicate a rule, click on the icon <i class="fas fa-clone" title = "clone"></i> of the respective rule.
