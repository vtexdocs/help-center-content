---
title: 'Pricing rules (v2)'
id: tutorials_4446
status: ARCHIVED
createdAt: 2017-04-27T21:50:44.178Z
updatedAt: 2021-08-19T14:33:42.966Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:16.063Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: pricing-rules-v2
locale: en
legacySlug: pricing-rules-v2
subcategoryId: wUepkh8pzimEywO8oGUIc
---

**Soft launch**
The functions described in this article are not yet available for all clients.

A pricing rule is a modifier of the base price, registered on the Price List screen.

![new-dashboard-pricing-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20rules/pricing-rules-v2_1.gif)

## How it works

The base price register will serve as a benchmark for all the commercial policies. From it, the selling prices for the store will be calculated.

Pricing rules are used when you want to change the price of a specific commercial policy without changing the base price for other commercial policies. They can also be used to change the price of all the products in a category or brand and/or for products with a base price that pertains to a specific markup range.
 
Price modification rules are optional. The price calculated for an SKU will be its base price, if it is not covered by any modification rule.

In addition, it is important to note that pricing rules are applied to the price of an SKU sequentially, in the order in which they are registered. The order can be changed by dragging the arrow on the left of a rule up or down. 

**Only the first** pricing rule that is valid for the SKU conditions (category; brand; and the markup range) will be applied. Even if there are other valid pricing rules, only the first one in the order will be used to calculate the price of the SKU.

![new-dashboard-pricing-rule-reordering-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20rules/pricing-rules-v2_2.gif)

_We recommend that the order should start with the most specific rules and end with the most comprehensive ones._

## How to register

The step-by-step procedure for registering is very simple, and is illustrated below:

![new-dashboard-pricing-add-rule-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20rules/pricing-rules-v2_3.gif)

1. The **Price rules** will show a list of all the commercial policies. Each of these policies will contain rules. Click on the button **New rule**, above the list, to create a rule.
2. Select the commercial policy which is to contain this rule.
3. Select the items to which the rule is to be applied. You have two choices: apply to the whole store, or enter one or more values in the Category and/or Brand fields.
4. Optionally you may apply this rule only to products with a base price within a **Markup range**. If you wish to, activate the field **Use markup range** then fill the fields `from` and `up to`.
5. Complete the **Modifier** field with the percentage value to be added to or subtracted from the markup of the base price.
5. Click on the **Save** button.

Below you can see examples of the flows of editing and deleting pricing rules. 

![new-dashboard-pricing-edit-rule-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20rules/pricing-rules-v2_4.gif)
_Procedure for modifying a rule_

![new-dashboard-pricing-remove-rule-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Prices/Price%20rules/pricing-rules-v2_5.gif)
_Procedure for deleting a rule_
