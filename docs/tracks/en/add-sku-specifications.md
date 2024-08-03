---
title: 'Add SKU specifications'
id: 6UjLHdAT5YLuflki10SXLr
status: DRAFT
createdAt: 2019-06-18T17:27:49.997Z
updatedAt: 2022-07-06T17:44:14.393Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:43.640Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: add-sku-specifications
locale: en
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalog-101
---

There are currently three ways of adding SKU specifications: either through admin, spreadsheet or ERP.

<div class="alert alert-warning">
<p>In VTEX, specifications follow a logic of "inheritance", that is, when creating a specification at a higher category level, the specification will be presented at all category levels below it. Therefore, if you need to create a product or SKU specification that applies to only one category, it should be created at that category's level.</p>
</div>

Follow the steps highlighted below in order to add specifications:

## Admin
To add the specifications, your store already needs to have departments, categories and subcategories. After ensuring that the above-mentioned are already created, follow these steps:

1. Click on **Catalog**
2. Click on **Categories** 
3. Select the category you wish to add specifications to
4. A small blue rectangle will pop up on the screen. Click on **Actions**
5. Click on **SKU Field**
6. Click on **New Field** 
7. Fill out the specification form fields. In the case of SKUs, the mandatory fields flag is selected by default. For more info on each field, access our article on [how to fill out SKU specification fields](https://help.vtex.com/en/tutorial/creating-sku-fields--tutorials_119) 
8. Click on **Save**

![EN.1novo](https://images.ctfassets.net/alneenqid6w5/1UNDWQPmeRtLkc1VKqctAF/4e5526d5496d6f0b0fd0c1cc97d4bb05/EN.1novo.gif)

The following steps will let you add SKU specification values:

1. Click on **Catalog**
2. Click on **Categories**
3. Select the category you wish to add specification values to
4. A small blue rectangle will pop up on the screen. Click on **Actions**
5. Click on **SKU Field**
6. Hover the mouse over the desired specification and select the **Arrow Down** button, located next to the **Edit** button
7. Click on **Values**
8. Click on **New Value**
9. Type in the **Name** of the desired value and click on **Save**

![EN.2novo](https://images.ctfassets.net/alneenqid6w5/2vwsLaRQy4JXIDCIreLhHg/db0b782d93a8ca16734a59105f9d264a/EN.2novo.gif)

### Link specifications to a SKU

After adding a specification, you will be able to link its value to a SKU.
To include specifications to a **SKU**, complete the following steps:

1. Click on **Catalog**
2. Click on **Products and SKUs**
3. Looking at the product with the desired SKU, click on the **blue arrow**, located next to the **Edit** button on the right side of the page
4. Click on **SKU**
5. Hovering over the desired SKU, click on **Change**
6. Select the **Specifications** tab and choose the specification value for this SKU
7. Click on **Save**

![EN.3novo](https://images.ctfassets.net/alneenqid6w5/5IitjVxPxsC0gRmx8Gclpr/7a07cbc2c58f06e8379bc4c1771cbea6/EN.3novo.gif)

## Spreadsheet

To add your specifications using a spreadsheet, you first need to export a default VTEX spreadsheet by following the steps below:  

1. Click on **Catalog**
2. Select **Import and Export**
3. Click on the **SKU specifications** tab
4. Right-click above the desired category
5. Click on **Export**
6. A green rectangle will pop up on the screen
7. Select **Click here to download file** to export the spreadsheet

Open the received spreadsheet and fill in the SKU specification data.

Only edit the  "Specification Value" spreadsheet column. The remaining columns must remain unchanged because their values will be used for data validation.

For more info on each field, access our article on [how to fill out product and SKUs import spreadsheet fields](https://help.vtex.com/en/tutorial/fill-out-import-spreadsheet-fields--4nYhx63Q5yokQWaMguaIgI)

After filling in the spreadsheet data, follow the instructions below to import your specifications:

1. Click on **Catalog**
2. Select **Import and Export**
3. Click on the **SKU specifications** tab
4. On the bottom of the page, look for **Upload file to import**
5. Click on **Select** to choose the filled out spreadsheet
6. Click on **Import**

![EN.4](https://images.ctfassets.net/alneenqid6w5/3hx1Cvscz5vuvSv05NRl4E/d2dd8151c493ee8d6765aa2ad1374c89/EN.4.gif)

## API 

Learn how to create a SKU specification via API in our [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) guide.
