---
title: 'Amazon Listing '
id: 5HIhbnYzJWkl2yM0o72WrL
status: PUBLISHED
createdAt: 2025-01-31T15:04:46.985Z
updatedAt: 2025-03-19T14:41:51.711Z
publishedAt: 2025-03-19T14:41:51.711Z
firstPublishedAt: 2025-01-31T15:23:33.368Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-listing
legacySlug: amazon-listing
locale: en
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

**Amazon Listing** allows sellers to add products in the VTEX Admin and list them on Amazon. Once you've completed the [integration with Amazon](https://help.vtex.com/en/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan), you'll need to make your store products available for listing on the marketplace. There are two ways to do this:

- If the product already exists on Amazon, follow the instructions in the [Amazon Offer Matching tutorial](https://help.vtex.com/en/tutorial/match-de-anuncios-amazon--7fRfoP69kYgg8znImMhyQ0) to link your product to an Amazon offer.
- If the product doesn't exist on Amazon yet, follow the steps in this tutorial to add the product and create a new offer.

![overview-listing-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/amazon-listing_1.gif)

> ℹ️ All products must have [Inventory](https://help.vtex.com/en/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) and [Price](https://help.vtex.com/en/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configured before being sent to the marketplace.

## Page overview

To access Amazon Listing, in the VTEX Admin, go to **Marketplace > Connections > Amazon Listing,** or type **Amazon Listing**  in the search bar.

The page consists of the following sections:

- [Search bar](#search-bar)  
- [Filters](#filters)  
- [SKU list](#sku-list)  

### Search bar

In the search bar, you can search SKUs by **name** or **SKU ID.** See some examples below.

![Filter name listing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/amazon-listing_2.jpg)

![SKU search listing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/integrations/integration-settings/amazon-listing_3.jpg)

### Filters

You can filter SKUs by **VTEX category, Amazon category, Brand**, or **Status.** Filters can be applied individually or combined, depending on the seller's strategy.

#### Filter types

- **VTEX category:** Displays the SKU category options from the VTEX catalog. 
- **Amazon category:** Displays the SKU category options available on Amazon.
- **Brand:** Displays all the brands listed in the seller's catalog.
- **Status:** Shows the status of the SKUs in the list of products available in Amazon Listing. Each SKU has a status. See below what each status represents:
  - **Ready to edit:** Indicates the SKU is available for the seller to complete the required attributes before sending it to Amazon.
  - **Incomplete setup:** Indicates the SKU has some attributes partially completed by VTEX and requires additional information from the seller.
  - **Returned with error:** Indicates the SKU was sent to Amazon but contains incorrect information. In this case, Amazon returns the SKU error, and the seller must correct and resend it.
  - **Sent:** Indicates the SKU has been completed correctly and sent to Amazon.
  - **Published:** Indicates the SKU has been sent, accepted by Amazon, and available in the marketplace.  

### SKU list

When you access **Amazon Listing,** you'll see a list of SKUs from your VTEX catalog that are available for integration with Amazon. Each SKU in the list displays the following information: **SKU Name, SKU ID, Amazon category**, and **Status.**  

## Adding SKUs

The process for adding SKUs is done exclusively via **Amazon Listing.** You can edit products on this page manually, one by one, or by using previously created [templates](#template-for-adding-products).  

SKUs with previously mapped attributes will appear in the list with the status **Incomplete setup**.
Here's how you can add new SKUs via Amazon Listing:

1. In the VTEX Admin, go to **Marketplace > Connections > Amazon Listing,**  or type **Amazon Listing** in the search bar.  
2. Select the SKU you want to add.  
3. Complete the fields **Title, Description, Keywords**, and **Category.**  
4. Click the `Save and send` button to validate the SKU and send it to Amazon, or click the `Finish later` button to save and finish later.  

Once the SKU is complete and sent, it enters a processing queue. The status changes to **Sent** while awaiting approval or rejection from Amazon. If accepted, the SKU status changes to **Published**. If rejected, the status changes to **Returned with error**  for corrections.

## Template for adding products

To streamline the process, you can create templates to apply the same attributes to all the SKUs in the same Amazon category. See below how to create and manage templates.

### Creating a template

1. In the VTEX Admin, go to **Marketplace > Connections > Amazon Listing,** or type **Amazon Listing** in the search bar.  
2. Click a product with the status **Sent** or **Published.**  
3. Click the `Create template` button and a modal will open.  
4. Select the attributes you want to apply to other SKUs in the same Amazon category.  
5. Click the `Confirm` button.  

### Managing templates

On the Template management page, you can filter templates by Amazon category, delete a template, and edit a template. 

#### Editing templates 

1. In the VTEX Admin, go to **Marketplace > Connections > Amazon Listing,** or type **Amazon Listing** in the search bar.  
2. Click the `Manage templates` button.  
3. Select the template you want to edit.  
4. Make the necessary changes.  
5. Click the `Save` button to proceed with the changes, or `Discard` to delete the changes made.  

When editing a template, you can add new attributes and delete attributes from the existing template. To do this, follow the steps below:

1. In the **Attributes** section, click the <i class="fas fa-pencil-alt" aria-hidden="true"></i> button.
2. Select the checkbox for the attributes you want to include or remove.
3. Click the `Confirm` button.

When you edit a template, an option to view the changes will be displayed in the page footer.

> ℹ️ All changes made to the template will apply to SKUs in the same category that haven't been sent yet.

#### Deleting templates

1. In the VTEX Admin, go to **Marketplace > Connections > Amazon Listing,** or type **Amazon Listing** in the search bar.
2. Click the `Manage templates` button
3. In the template you want to delete, click the <i class="far fa-trash-alt" aria-hidden="true"></i> `trash can` button.
4. In the modal displayed on the screen, click the `Finish` button.
