---
title: 'Assembly Options App'
id: 54mWg37mojrqOgCA79iqqk
status: PUBLISHED
createdAt: 2022-06-14T10:43:51.397Z
updatedAt: 2023-03-29T14:51:54.670Z
publishedAt: 2023-03-29T14:51:54.670Z
firstPublishedAt: 2022-06-22T19:48:18.050Z
contentType: tutorial
productTeam: Apps
author: 1malnhMX0vPThsaJaZMYm2
slugEN: assembly-options-app
locale: en
legacySlug: assembly-options-app
subcategoryId: 3xpuy7xGlzKKg6vxqiExZ2
---

<div class="alert alert-warning">
<p>This app is only available for stores developed using<a href="https://vtex.com/br-pt/store-framework/"> VTEX IO</a>. Before proceeding, you need to <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-product-customizer">install and configure Product Customizer</a> in your store.</p>
</div>

Product customization options are available at VTEX when using [Assembly Options](/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH). This solution helps create [attachments](/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm) for complex scenarios in which you need to manage different product combinations, quantities, additional items and costs.

As an alternative to implementing Assembly Options through Catalog attachments, the [Assembly Options app](https://apps.vtex.com/vtex-admin-assembly-options/p) provides an interface to configure and manage customization options in stores using [VTEX IO](https://vtex.com/br-pt/store-framework/).

## Installation 

You can install the app for free from the [VTEX App Store](https://apps.vtex.com/vtex-admin-assembly-options/p) or via [VTEX IO CLI](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-installation-and-command-reference) by following the steps in the [Assembly Options guide for developers](https://developers.vtex.com/vtex-developer-docs/docs/assembly-options-app).

<div class="alert alert-warning">
<p>If you install the Assembly Options app in a <a href="https://help.vtex.com/en/tutorial/what-is-a-seller--5FkLvhZ3Few4CWWIuYOK2w">seller account</a>, the product customization options will be displayed to your customers at checkout. If you want the options to be displayed in the product page, you need to install the app in a <a href="https://help.vtex.com/en/tutorial/what-is-a-marketplace--680lLJTnmEAmekcC0MIea8">marketplace account</a>.</p>
</div>

After installation, the **Catalog > Assembly Options** page will become available in the VTEX Admin. Below, you will find the app’s available features.

## List of Assembly Options

In the VTEX Admin, go to **Catalog > Assembly Options** to access a list with all the assembly options available in your store.

![assembly-options-app-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Apps/Assembly%20Options/assembly-options-app_1.PNG)

Below, you will find the information displayed in the list:

* **ID:** Shows the assembly option ID, which is the same as the [attachment](/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm) ID in the **Catalog**.
* **Name:** Indicates the name of the assembly option's attachment.
* **Required:** If it is marked with a <i class="far fa-check-circle"></i>, this column indicates that the assembly option attachment is required. If this field is empty, no action is needed.
* **Status:** It indicates the assembly option status, which can be either:
    * **Active**: It means that the customization options are active; therefore, they’ll appear in your store if they’re [associated with a SKU](/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#associating-the-attachment-with-a-sku).
    * **Inactive**: The customization options are inactive; therefore, they cannot be chosen.
* **Menu** <i class="fas fa-ellipsis-v"></i>: It shows the options available:
    * <i class="far fa-pencil"></i> **Edit**: Provides access to the edit page of the assembly option.
    * <i class="far fa-trash-alt"></i> **Delete**: Deletes an assembly option.

Use the search field to look for an assembly option by name. You can also filter the results in the list by **Status** (**Active** or **Inactive**).

To set up a new assembly option, click the `Create assembly option` button in the upper right corner of the page.

## Creating or Editing Assembly Options

The **Products > Assembly Options > New Assembly Options** page contains a form with all the information needed to create or edit an assembly option. Follow the steps below to create an assembly option.

1. Fill in the **Basic information** fields:
    * **Name:** Name of the assembly option, e.g., Ingredients.
    * <i class="fas fa-toggle-on"></i> **Active:** Defines whether the assembly option will remain active, i. e., available to be used in the store.
    * <i class="far fa-square"></i> **Required:** Defines whether it is necessary for your customers to choose one of the options available.
2. In **SKU Groups**, click `Add new group`.
    A group with no name will be created. Each group will have the SKU options available for your customers to choose from.
3. Fill in the information required to create the group:
    * **Name**: Name of the group that will be displayed on the product page, e.g., Extra ingredients.
    * **Minimum quantity:** Defines the lowest number of group items the customer can choose.
    * **Maximum quantity:** Defines the highest number of group items the customer can choose.
4. Click `Add SKU` to add an existing SKU to the group.
5. Complete the following information about the SKU:
    * **SKU ID:** SKU identifier.
    * **Linked price table name:** Name of the price table in which the chosen SKU is listed. If this field is empty, the SKU takes the price of the trade policy.
    * **Minimum quantity:** Lowest number of items that the customer can choose.
    * **Maximum quantity:** Highest number of items that the customer can choose.
    * **Initial quantity:** Quantity selected by default.
6. Click `Add`.
    The information about the added SKU will be shown in a table, and you will be able to edit it or delete the SKU from the group.
    If necessary, you can add other SKUs to the group by repeating step 4 onwards. You can also create other groups by repeating step 2 onwards.
7. Once all groups have been configured, click `Save`.

When you save an assembly option, an attachment is automatically created in **Catalog > Attachments** with the prefix `vtex.assembly-option.` added to the name of the assembly option created. For example: `vtex.assembly-option.Ingredients`.

<div class="alert alert-warning">
  <p>For the customization options created in <b>Assembly Options</b> to appear in the storefront, you will need to associate the attachment created with a SKU in <strong>Catalog > Products and SKUs > Advanced settings > Attachments</strong>. To do so, follow the steps described in <a href="https://help.vtex.com/en/tutorial/adding-an-attachment--7zHMUpuoQE4cAskqEUWScU#associating-the-attachment-with-a-sku">Associating the attachment with a SKU</a>.</p>
</div>

## Learn more

* [Assembly Options](/en/tutorial/assembly-options--5x5FhNr4f5RUGDEGWzV1nH)
* [What is an Attachment?](/en/tutorial/what-is-an-attachment--aGICk0RVbqKg6GYmQcWUm)
