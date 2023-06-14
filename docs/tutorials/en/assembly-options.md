---
title: Assembly Options
id: 5x5FhNr4f5RUGDEGWzV1nH
status: PUBLISHED
createdAt: 2021-10-25T20:22:43.094Z
updatedAt: 2023-03-29T17:55:49.763Z
publishedAt: 2023-03-29T17:55:49.763Z
firstPublishedAt: 2021-10-25T21:39:46.746Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: assembly-options
legacySlug: assembly-options-en
subcategory: 1hoOi2R0Rm6ky0yCwOUoiy
---

<div class="alert alert-warning">
  <p>This feature is only available for stores developed using <a href="https://vtex.com/us-en/store-framework/">VTEX IO</a>. Before proceeding, you need to <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer">install and configure Product Customizer</a> in your store. </p>
</div>

An assembly option is an [attachment](https://help.vtex.com/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm) for complex scenarios, such as product customization, in which you need to manage different product combinations, quantity, additional items, costs, and product inventory management.

In the example below, a store offers multiple assembly options for the Custom Bell product. These options are shown on the product page, where the customer can select the desired options. Depending on the choices, there may be an additional cost for the SKU.

![assembly-option-EN](https://images.ctfassets.net/alneenqid6w5/3A5QzqwSI6Z9CZk3EqPrZs/585aace6b147a8107f0f5d03faa5db5f/image.png)

You can combine [SKUs](https://help.vtex.com/en/tutorial/what-is-an-sku--1K75s4RXAQyOuGUYKMM68u) to provide assembly options, such as the Bells add-ons Roman or the Bells add-ons 1-3 lines in the example above. If an item is out of stock, it will be shown as unavailable.

This article will explain how to start using Assembly Options in your store.

## Implementing Assembly Options

There are two ways to implement Assembly Options: using the [Assembly Options app](#app-assembly-options) or the native Catalog [Custom Product Attributes](#custom-product-attributes) interface.

<div class="alert alert-warning">
  <p>If you implement Assembly Options in a <a href="https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w">seller account</a>, the product customization options will be displayed to your customers at checkout. If you want the options to be displayed on the product page, you need to install the app in a <a href="https://help.vtex.com/en/tutorial/what-is-a-marketplace--680lLJTnmEAmekcC0MIea8">marketplace account</a>.</p>
</div>

### Assembly Options App

The [Assembly Options](https://apps.vtex.com/vtex-admin-assembly-options/p) app, available for stores developed with [VTEX IO](https://vtex.com/us-en/store-framework/), provides an interface for configuring and managing custom options. In this case, the assembly option syntax and attachment are automatically generated. Please refer to the [Assembly Options App](https://help.vtex.com/en/tutorial/assembly-options-app--54mWg37mojrqOgCA79iqqk) user guide to learn more about the app.

### Custom Product Attributes

To create Assembly Options using Attachments in VTEX Admin, you must manually create a [syntax](#assembly-options-syntax) to define the product customization rules. Then, enter that syntax in the [attachment configuration](#attachment-settings). Check out the following sections for more details.

#### Assembly Options syntax

To implement an assembly option, first you need to create a syntax, such as the one below, by changing each value according to your scenario.

`[0-3]#10000[1-2][1]pricetable1;#20000[0-2][0]pricetable2;#30000[0-2][0]pricetable3`

The first elements `[x-y]` are group rules, and between each `#` and `;` are SKU component rules. Learn more about each segment of this syntax in the table below.

| Segment      | Description        |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **\[0-3\]**#10000\[1-2\]\[1\]pricetable1;#20000\[0-2\]\[0\]pricetable2;#30000\[0-2\]\[0\]pricetable3      | Minimum and maximum quantity of items that can be selected from the group. The first segment defines how many choices  this assembly accepts in total. `[0-3]` means that you can select a minimum of zero items and a maximum of three. If the value is `[1-1]`, it  means that you can only select one item out of all the options. |
| \[0-3\]#**10000**\[1-2\]\[1\]pricetable1;**#20000**\[0-2\]\[0\]pricetable2;#**30000**\[0-2\]\[0\]pricetable3 | After each `#`, you must include the SKU ID of the component. You must use at least one SKU in the assembly options.       |
| \[0-3\]#10000**\[1-2\]**\[1\]pricetable1;#20000**\[0-2\]**\[0\]pricetable2;#30000**\[0-2\]**\[0\]pricetable3 | This segment defines the minimum and maximum quantity of each SKU that the end customer can select. If the value is `[0-1]`, it means that there can be up to one of this SKU.      |
| \[0-3\]#10000\[1-2\]**\[1\]**pricetable1;#20000\[0-2\]**\[0\]**pricetable2;#30000\[0-2\]**\[0\]**pricetable3 | This segment defines the default selected quantity for each SKU.  |
| \[0-3\]#10000\[1-2\]\[1\]**pricetable1**;#20000\[0-2\]\[0\]**pricetable2**;#30000\[0-2\]\[0\]**pricetable3** | The final segment indicates the price table for each item.  | 

![assembly-option-exemplo-EN](https://images.ctfassets.net/alneenqid6w5/2c4cfwQo0KisXQhlzYoxGC/939c084743ddf02d3903af57104f0b39/image.png)

#### Attachment Settings

To add an Assembly Option, you  need to have an attachment already created. Check the article [Adding an attachment](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU) to learn how to create one.

After adding an attachment and [associating it with an SKU](https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#associating-the-attachment-with-a-sku), follow the steps below to configure the Assembly Option.

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click **Custom Product Attributes**.
3. In the **Service and SKUs** tab, choose the attachment to which you want to add the Assembly option and click `Modify`.
4. In the  **Permitted Values** field, insert the syntax you  created, as described in the [Assembly Options syntax](#assembly-options-syntax) section.
5. Click `Save`.
