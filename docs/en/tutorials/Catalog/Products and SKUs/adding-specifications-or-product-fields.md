---
title: 'Adding product specifications or fields'
id: tutorials_106
status: PUBLISHED
createdAt: 2017-04-27T22:19:08.184Z
updatedAt: 2023-03-29T17:43:57.193Z
publishedAt: 2023-03-29T17:43:57.193Z
firstPublishedAt: 2017-04-27T23:00:43.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-specifications-or-product-fields
locale: en
legacySlug: creating-a-product-field
subcategoryId: pwxWmUu7T222QyuGogs68
---

When adding a product, you can use the [specification](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) field to include characteristics applicable to all its variations (SKUs).

At VTEX, a specification is always included in a [specification group](/en/tutorial/creating-category-groups--tutorials_246), associated with a [category](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Therefore, to create a product specification (field), you must first create at least one category and one specification group.

Example: Consider a fashion store. In the **T-shirts** category, the specification group can be named **Characteristics** and include the **Fabric** field and its values, **Cotton **and **Polyester**.

In this article, we explain how the specification inheritance works for the added specifications, detail the process of adding product fields and show how to fill in product specifications. Check out the following sections:

* [Product specifications inheritance](#product-specifications-inheritance)
* [Step-by-step instructions on VTEX Admin](#step-by-step-instructions-on-vtex-admin)
    1. [Creating a product field](#creating-a-product-field)
        * [Product field types](#product-field-types)
    2. [Adding values to the product field](#adding-values-to-the-product-field)
        * [Accessing or editing values](#accessing-or-editing-values)
    3. [Filling in product specifications](#filling-in-product-specifications)
        * [Product registration](#product-registration)
        * [Spreadsheet](#spreadsheet)

<div class = "alert alert-info">
  <p>To create a product specification using <strong>Catalog API</strong>, follow the <a href="https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification">How to create a specification</a> developer's guide.</p>
</div>

## Product specifications inheritance

Before creating any specifications, it's important to understand that they follow a "inheritance" logic, i.e. when you create a specification for a higher category level, it will appear in all the sublevels of that category. Therefore, if you want to create a product specification applicable to one category only, you must create it at that category level.

Consider the **TV** product for example. In __Catalog > All products > Edit > Specifications__, as illustrated in the page below, we can see that the specification group called **Characteristics** is associated with the TV's category. This group includes a field named **Inches** and a field named **Age group**, which are mandatory.

![specifications-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-specifications-or-product-fields_1.PNG)

Since this is a product specification, the information selected on that page will apply to all **TV** product variations. All products added to the TV's category must have these specifications filled out, since they are required fields.

## Step-by-step instructions on VTEX Admin

To see product specifications while creating or editing products, besides having previously created a [specification group](/en/tutorial/creating-category-groups--tutorials_246) associated with a [category](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), you must also create the fields and fill in their values. Next, you will be able to fill in your product specifications.

See the step-by-step instructions below.

### Creating a product field

To create a product field, follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category associated with the specification group you want to create the field.

    Please note that when you create a specification for a higher-level category, it will appear in all the sublevels of that category.

3. Click `Actions` <i class="fas fa-angle-down"></i>.
4. Click `Field (Product)`.
5. Click `New field`.
6. Fill in the information related to the field you are creating:
    * **Name**: Name of the product specification (field).
    * **Text**: Field description.
    * **Type**: Field type, which can vary between **Text**, **Large Text**, **Number**, **Combo**, **Radio**, **CheckBox**, **Indexed Text** and **Large Indexed Text**. For more information on each option, read the [Field types](#product-field-types) section.
    * **Default Value**: Value already defined when creating the field.
    * **Group**: Name of the previously created [specification group](/en/tutorial/creating-category-groups--tutorials_246) in which the field will be included.
    * **Filter**: Defines if the specification will be used as a filter when navigating the website.
    * **Required**: Defines if a value is mandatory when adding a product. In the case of a required field, the product will be activated only after filling in this specification.
    * **Show specification**: Defines if the field is displayed on the product details page in the **Specifications** tab.
    * **Link in the Top Menu**: Defines if the link for the field values is displayed in the website's main menu.
    * **Link in the Side Menu**: Defines if the link for the field values is displayed in the website side menu.
    * **Active**: Inserts or removes this field when adding the product (**Specifications** tab).
7. Click `Save`. 

![product-spec-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-specifications-or-product-fields_2.gif)

#### Product field types

See the table below for details on the product field types you can select in the **Type** option:

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Field type</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Description</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Text</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content as free text, recommended for short texts and simple formatting. Not recommended for large HTML structures.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Large Text</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content as free text, recommended for large HTML structures. For example, size charts, frequently used in the fashion segment.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Number</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content with whole numbers only. For example, indicating shoe sizes (39, 41, 42...).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Combo</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content with two or more preset values selected out of a dropdown list. For example, a home appliance voltage, which can be 110v or 220v.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Radio</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content with two or more preset values checked as options from a value grid. For example, choosing the colors of product components (red, yellow, blue, black...).</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>CheckBox</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Option with values equivalent to <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">true</span> (checked) or <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">false</span> (unchecked). For example, a field named <strong>Outlet</strong> will be checked only when the product is part of the store selection for <em>outlet</em> (clearance sale). The field must remain unchecked if it's not part of the selection.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Indexed Text<br> <br>Large Indexed Text</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Technically, these field types follow the same rule as the <strong>Text</strong> field, except for one difference: their values will be interpreted by the <strong>Catalog </strong><a href="https://help.vtex.com/en/tutorial/understanding-how-indexation-works--tutorials_256"  rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">indexer</a> and will influence the search results for the store customers. For more details, please see the article <a href="https://help.vtex.com/en/tutorial/how-does-vtex-search-work--tutorials_542"  rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">How VTEX search works?</a>.</td>
  </tr>
</tbody>
</table>

### Adding values to the product field

The product field values will vary according to the field type. For the **Text** and **Number** field types, no preset values are created — the values will be filled in individually in the **Specifications** tab, when adding the product.

For the **Combo**, **Radio** and **CheckBox** field types, you must add preset values for the selection when adding the product. Follow the instructions below: 

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category in which the product has been saved.
4. Click __Actions__ <i class="fas fa-angle-down"></i>.
5. Click __Field (Product)__.
6. Click the down arrow <i class="fas fa-angle-down"></i>.
7. Select **Values**.

    If there are values already added, you must click `New value`.

7. Fill in the **Name** field with the values you wish to create for that field. Enter one value per row and press `Enter` after each value.
8. Click `Save`.

    The created values will be displayed in the Product **Specifications** tab.

![product-spec-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-specifications-or-product-fields_3.gif)

<div class = "alert alert-info">
  <p>If you are adding values for the first time in a field, you must return to the form of that specific field and check the <strong>Active</strong> option.</p>
</div>

#### Accessing or editing values

To access or edit values in a product field, follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category in which the product has been saved.
4. Click __Actions__ <i class="fas fa-angle-down"></i>.
5. Click __Field__ (Product).
6. Click the down arrow <i class="fas fa-angle-down"></i>.
7. Select **Values**.

    On this page, you will see the values filled in, and you can choose between the following options:
      * **Order Alphabetically:** Organizes the value list alphabetically.
      * **New value**: Create a new value.
      * **Edit**: Allows changing the value text and opting for activating or deactivating it.
      * <i class="fas fa-angle-down"></i> > **Delete**: Delete a value.

### Filling in product specifications

Finally, you need to fill in the specifications for each product, according to the fields and values you have created. You can do this individually via the [product registration](#product-registration) page or massively via [spreadsheet](#spreadsheet).

#### Product Registration

To fill in the specifications for each product individually, follow the instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **All products**.
3. In the product row, click `Edit`.
4. Access the **Specifications** tab.
5. Fill in the [fields you created](#creating-a-product-field) with the desired [values](#adding-values-to-the-product-field).

    Required fields will be marked with `*`.

6. Click `Save`.

![product-spec-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-specifications-or-product-fields_4.gif)

#### Spreadsheet

To fill in product specifications in bulk by spreadsheet, you need to export the template VTEX spreadsheet, populate it and import it into the platform. To do this, follow the instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click **Import and Export**.
3. Click the **Product Specifications** tab.
4. Right-click on the desired category.
5. Click on **Export...**.

    A green rectangle will appear on the screen.

6. Click **Click here to download the file** to export the spreadsheet.
7. Open the spreadsheet file and fill in the rows with the product specification data.

    Change only the `SpecificationValue` column in the spreadsheet with the value for the field listed in each row. The other columns should remain unchanged because their values will be used to validate the data.

8. In the VTEX Admin, still under **Catalog** > **Import and Export** > **Product Specifications**, scroll down the page to **Upload File for Import**.
9. Click **Select** to select the file with the completed spreadsheet on your computer.
10. Click `Import`.

![product-spec-4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-specifications-or-product-fields_5.gif)

## Learn more
- [Adding SKU specifications or fields](/en/tutorial/adding-sku-specifications-or-fields--tutorials_119)
- [Product and SKU Specifications](/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
