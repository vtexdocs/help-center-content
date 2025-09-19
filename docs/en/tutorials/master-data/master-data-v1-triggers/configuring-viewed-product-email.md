---
title: 'Configuring viewed product email'
id: tutorials_3136
status: PUBLISHED
createdAt: 2017-04-27T21:52:11.184Z
updatedAt: 2024-08-20T17:44:37.317Z
publishedAt: 2024-08-20T17:44:37.317Z
firstPublishedAt: 2017-04-27T23:03:54.918Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: configuring-viewed-product-email
legacySlug: configuring-product-visited
locale: en
subcategoryId: 2nx7hMJmisofwqwy2P9l2i
---

> ⚠️ This tutorial is only applicable to Legacy CMS Portal stores.

The viewed product email is an automatic message sent to customers who have accessed a product page on the site but have not placed an order. The purpose of sending this  email is to recover the sale and offer other products.

You can configure this type of email trigger using Master Data. To do this, follow the instructions in the next sections:

1. [Setting a minimum trigger range](#setting-a-minimum-trigger-range)
2. [Displaying fields on the form](#displaying-fields-on-the-form)
3. [Creating an email template for viewed products](#creating-an-email-template-for-viewed-products)
4. [Creating a folder structure](#creating-a-folder-structure)
5. [Configuring the email trigger](#configuring-the-email-trigger)

> ⚠️ Your store must have a high flow of visits and orders for this feature to work properly since shelves are created based on browsing data for a specific product.

## Setting a minimum trigger range

Setting a trigger range means limiting the minimum time between one trigger and another for sending an email to the same customer. This prevents the customer from receiving multiple emails during the same navigation session in the store.

To configure this range, create a field in the **CL** entity.

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.
2. In Master Data, click **Apps** > **Data Structure**.
3. Click the **Data Entities** tab.
4. In the **Customer** entity, click the pencil icon.
5. Click the `New Field` button.
6. Complete the fields, as described below:
    * **Name**: lastTrigger.
    * **Display name**: Date of last trigger sent.
    * **Type**: Date and Time.
7. Click the `Save` button.

## Displaying fields on the form

After creating a field in the entity, you must configure the field to display on the form to be able to see the information it contains. This is also valid for fields created automatically by VTEX but that are not flagged to be displayed on the form.

Follow the steps below to display the important fields for the viewed products scenario:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.
2. In the **Profile System** application, click the gear icon <i class="fas fa-cog"></i>.
3. Click the pencil icon <i class="fas fa-pencil-alt"></i> on the **Customers** form.
4. Click the **Layout Schemas** tab.
5. Click the `Add New Section` button.
6. Add a name to your section.
7. In the **Available Fields** column, drag the desired field to the **Fields of Column 1** area below the name of the created section.
8. Click the `Save` button.

## Creating an email template for viewed products

The email template that will be sent must be configured in the Legacy CMS Portal, following the steps below. To help with the configuration, you can use the[ example template](https://assets.ctfassets.net/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/cf62e0e8ae5ab674d66362def45ec653/product-visited-en.zip).

1. In the Admin, go to **Storefront > Layout**.
2. Click `CMS` and then **HTML Templates**.
3. Click **new template**.
4. Enter the name and paste the code of your template. If you're using the example template, remember to change the SHELF TEMPLATE code to the ID of your shelf template and the STORE_NAME code to your store URL. You also need to change the image files.
5. Click the `Save Template` button.

### Sent products

The control that displays the viewed product is `ProductQueryStringReferenceShelf`, and the control that displays the shelves of similar products is `<vtex.cmc:productsCrossSelling … crossSellingType="1" />`. The parameter `crossSellingType` ranges from 1 to 6:

- **1**: People who viewed this item also viewed
- **2**: People who viewed this item also bought
- **3**: People who bought this item also bought
- **4**: Similar products
- **5**: Suggestions
- **6**: Accessories

The first three shelves are set up automatically by the system, and the last three are configured [manually in the product settings](/en/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos/).

## Creating a folder structure

After creating the template, you must create the folder structure required for configuring the trigger. Follow the steps below:

1. In the Admin, go to **Storefront > Layout**.
2. Click **CMS** > **Sites and channels**.
3. Click your store.
4. Click the / folder and then the **CEM** folder.
5. Click **new folder**.
6. Complete the fields, as described below:
    * **Folder Name**: Viewed-product
    * **Protocol**: HTTPS
    * **Authentication Required?**: Leave it unchecked.
7. Click the `Save Folder` button.
8. Once the folder has been created, you must link the page template to the layout. Click the created folder in the left-hand side menu of the Legacy CMS Portal.
9. Click **new layout**.
10. In **Template**, select the template created previously.
11. Click the `Save Layout` button.

## Configuring the email trigger

To configure the trigger, follow the instructions below:

1. Access `{storename}.ds.vtexcrm.com.br`, replacing `{storename}` with your VTEX account name.
2. Log in as required.
3. Click the **Trigger** tab.
4. Click `Add New`.
5. Complete the fields:
    * **Name:** Enter the trigger name.
    * **Data entity:** Select the data entity the trigger belongs to.
    * **Status:** Check the **Enabled** option.
6. In the **Rules** tab, in the field **Trigger rule**, select **An attribute value is changed**.
7. In **Field**, select** Visited Product**.
8. In **Additional filter**, click `Add Filter`. Configure two filters as described below:
    * _Checkout – Is null – and_
    * _Viewed Product - Is not null - and_
9. Click the `Add Group` button.
10.  Click `Add Filter` to add a filter to the group. Complete as described below:
    * _Date of last trigger sent - Less than or equal to - CURRENT DATE - Minus days - 7 - or_
    * _Date of last trigger sent - Is null_
11. 11. Click the **Schedule** tab.
12.  Select one of the trigger scheduling options. Example: Schedule on a dynamic date, such as _CURRENT DATE - plus - 2 hours_.
13.  Click the** If Positive** tab.
14. Complete this tab as follows:
    * **Action**: Select **Send an email**.
    * **Recipient**: Enter your email as a test, and click `Add Static Email`. After the test, delete your email, select **CL: Email**, and click `Add Dynamic Email`.
    * **Email body format**: Select **HTML**.
    * **Sender's name**: Enter the name of your store as you want it to be displayed on the email sender.
    * **Reply to**: Enter the email address to which the customer can reply.
    * **Content type**: Select **URL content**.
    * **Subject**: Complete the subject of the email.
    * **URL**: Enter your store's address with the folders in which the layout of the viewed product has been configured. Example: `storename.com/CEM/Viewed-Product?refp={!productVisitedTag}`. Pay attention to the end `?refp={!productVisitedTag}`, which needs to be at the end of the URL for the products to be displayed.
    * **Add utm_source in all links containing values**: Complete with "CEM" to facilitate the identification of purchases made via the viewed product.
    * **Overwrite utm_source:** Check this option.
15.  Click the `Save` button.

