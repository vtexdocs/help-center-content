---
title: 'Adding product specifications'
id: 4fcdmJzQ6QYA9zWf3bLWin
status: ARCHIVED
createdAt: 2019-06-18T16:56:58.820Z
updatedAt: 2022-07-06T14:25:25.296Z
publishedAt: 
firstPublishedAt: 2019-06-25T19:06:35.046Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: adding-product-specifications
locale: en
trackId: 5AF0XfnjfWeopIFBgs3LIQ
trackSlugEN: catalog-101
---

There are three ways of adding product specifications: via Admin, spreadsheet, or API.

>⚠️ In VTEX, specifications follow a logic of "inheritance", that is, when creating a specification at a higher category level, the specification will be presented at all category levels below it. Therefore, if you need to create a product or SKU specification that applies to only one category, it should be created at that category's level.

Follow the steps highlighted below to add specifications:

## Admin

To add specifications, your store already needs to have departments, categories, and subcategories. After ensuring that you have already created them, follow the steps below:

1. Click on **Catalog**.
2. Click on **Categories**.
3. Select the category you wish to add specifications to.
4. A small blue rectangle will pop up on the screen. Click on **Actions**.
5. Click on **Product Field**.
6. Click on **New Field**.
7. Fill out the specification form fields. For more info on each field, access our article on [how to fill out product specification fields](https://help.vtex.com/en/tutorial/creating-a-product-field--tutorials_106).
8. Click on **Save**.

![EN.1novo](https://images.ctfassets.net/alneenqid6w5/2dF0ogtrRK8JwAfpklyJ7I/2ff6abcfd3e119739d8d383524b6305b/EN.1novo.gif)

The following steps will let you add specification values:

1. Click on **Catalog**.
2. Click on **Categories**.
3. Select the category you wish to add specification values to.
4. A small blue rectangle will pop up on the screen. Click on **Actions**
5. Click on **Product Field**.
6. Hover the mouse over the desired specification and select the **Arrow Down** button, located next to the **Edit** button.
7. Click on **Values**.
8. Click on **New Value**.
9. Type in the **Name** of the desired value and click on **Save**.

![EN.2novo](https://images.ctfassets.net/alneenqid6w5/2LBqRIgwrRKGFRZI1k66xV/c225f4b00ecd036deb541355d10278e8/EN.2novo.gif)

### Linking specifications to a product

After adding a specification, you will be able to link its value to a product.

To include specifications to a **Product**, complete the following steps:

1. Click on **Catalog**.
2. Click on **Products and SKUs**.
3. Click on **Update** next to the chosen product.
4. Select the **Specifications** tab and choose the specification value for this product.
5. Click on the **Product** tab and then on **Save**.

![EN.3novo](https://images.ctfassets.net/alneenqid6w5/6aLqyJEcn1gn7ZY6D1HOBR/b98761150ff82fce355480c78f7693e6/EN.3novo.gif)

## Spreadsheet

To add specifications using a spreadsheet, you first need to export a default VTEX spreadsheet by following the steps below:  

1. Click on **Catalog**.
2. Select **Import and Export**.
3. Click on the **SKU specifications** tab.
4. Right-click above the desired category.
5. Click on **Export**.
6. A green rectangle will pop up on the screen.
7. Select **Click here to download the file** to export the spreadsheet.

Open the spreadsheet and fill in the product specification data.

Only edit the "Specification Value" spreadsheet column. The remaining columns must remain unchanged because their values will be used for data validation. 

For more information on each field, read our article on [how to fill out product and SKUs import spreadsheet fields](https://help.vtex.com/en/tutorial/fill-out-import-spreadsheet-fields--4nYhx63Q5yokQWaMguaIgI).

After filling in the spreadsheet data, follow the instructions below to import your specifications:

1. Click on **Catalog**.
2. Select **Import and Export**.
3. Click on the **Product specifications** tab.
4. On the bottom of the page, look for the **Upload file to import** option.
5. Click on **Select** to choose the filled-out spreadsheet.
6. Click on **Import**.

![EN.4](https://images.ctfassets.net/alneenqid6w5/38zcVf51x9HpqztCxmfgRy/d4d6d36b35f4d0717c3d97fcc9c9223b/EN.4.gif)

## API 

Learn how to create a product specification via API in our [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) guide.
