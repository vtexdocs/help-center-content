---
title: 'Adding SKU specifications or fields'
id: tutorials_119
status: PUBLISHED
createdAt: 2017-04-27T22:18:08.662Z
updatedAt: 2023-11-30T12:05:25.945Z
publishedAt: 2023-11-30T12:05:25.945Z
firstPublishedAt: 2017-04-27T23:00:44.181Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: adding-sku-specifications-or-fields
locale: en
legacySlug: creating-sku-fields
subcategoryId: pwxWmUu7T222QyuGogs68
---

An SKU specification is a mandatory field in the SKU form where you can insert specific characteristics for every product variation.

At VTEX, a specification is always included in a [specification group](https://help.vtex.com/en/tutorial/creating-category-groups--tutorials_246), associated with a [category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf). Therefore, to create an SKU specification (field), you must first create at least one category and one specification group.

Example: A fashion store which intends to sell a **Polo shirt** product in the S, M or L sizes. In the **T-shirts** category, the specification group can be named **Characteristics**. In this case, size is the characteristic which will distinguish one SKU from another. Therefore, the retailer must create an SKU field called **Size**, having **S**, **M** and **L** as value options.

In this article, we explain how the specification inheritance works for the added specifications and we describe how to create an SKU field, associate values to it and fill in specifications when adding an SKU in the VTEX Admin. Check out the following sections:

* [SKU Specification inheritance](#sku-specification-inheritance)
* [Step-by-step instructions in the VTEX Admin](#step-by-step-instructions-in-the-vtex-admin)
    1. [Creating an SKU field](#creating-an-sku-field)
        * [SKU Field types](#sku-field-types)
    2. [Adding values to the SKU field](#adding-values-to-the-sku-field)
        * [Accessing or editing values](#accessing-or-editing-values)
    3. [Filling out SKU specifications](#filling-out-sku-specifications)
        * [SKU Registration](#sku-registration)
        * [Spreadsheet](#spreadsheet)

>ℹ️ To create an SKU specification using **Catalog API**, follow the [How to create a specification](https://developers.vtex.com/vtex-developer-docs/docs/how-to-create-a-specification) developer's guide.

## SKU Specification inheritance

Before creating any specifications, it's important to understand that they follow an "inheritance" logic, i.e. when you create a specification for a higher category level, it will appear in all the sublevels of that category. Therefore, if you want to create an SKU specification applicable to the existing SKUs of one category only, the specification must be created at that category level.

Example: consider a **Men's shirt** product. In __Catalog > Products and SKUs > SKU > Specifications__, as illustrated in the page below, we can see that the specification group called **Characteristics** is associated with the Shirt category. This group includes a field named **Color** and a field named **Size**.

![heranca-especificacoes-sku-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_1.PNG)

Since this is an SKU specification, the information selected on that page will apply only to the **Men's Shirt** product variations. All SKUs added to the **Men's Shirt** category and all product SKUs of the same category must also have these specifications filled out.

## Step-by-step instructions in the VTEX Admin

To see the SKU specifications in the SKU registration page, besides having previously created a [specification group](https://help.vtex.com/en/tutorial/creating-category-groups--tutorials_246) associated with a [category](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf), you must also create the SKU fields and fill in their values. Then, you will be able to fill in the SKU specifications.

See the step-by-step instructions below.

### Creating an SKU field

>⚠️ Once created, the SKU fields cannot be deleted. If you uncheck the field, all the SKUs in that category will become inactive, until the field is checked again. If you do not fill out a specification when adding an SKU, it may cause the SKU not to appear on the website, because it is inactive.

To create an SKU field, follow the instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category associated with the specification group in which you want to create the SKU field.

  >⚠️ Please note that when you create a specification for a higher category level, it will appear in all the sublevels of that category.

3. Click `Actions` <i class="fas fa-angle-down"></i>.
4. Click `Field (SKU)`.
5. Click `New field`.
6. Fill in the information related to the field you are creating:
    * **Name**: Name of the SKU specification (field).
    * **Text**: Field description.
    * **Type**: Field type, which may vary between **Combo **or **Radio**. For more information on each option, read the [Field types](#sku-field-types) section.
    * **Group**: Name of the [specification group](https://help.vtex.com/en/tutorial/creating-category-groups--tutorials_246), in which the field will be included.
    * **Filter**: Defines if the specification will be used as a filter when navigating the** website.**
    * **Required**: Defines if a value is mandatory when adding an SKU. In the field is mandatory, the SKU may only be activated after filling in this specification.
    * **Show Specification**: Defines if the field is displayed on the SKU details page, in the **Specifications** tab.
    * **Link in the Top Menu**: Defines if the link to the field values is displayed in the in the main menu of the site.
    * **Link in the Side Menu**: Defines if the link to the field values is displayed in the side menu of the site.
    * **Active**: Inserts or removes this field when adding an SKU.
7. Click `Save`.

![sku-spec-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_2.gif)

#### SKU Field types

There are two SKU field types — **Combo** and **Radio**. The purpose of SKU specifications is to distinguish between variations of the same product, based on objective and preset characteristics for selection, such as size or color, among others. To display text fields and more complex HTML structures, such as descriptions or size charts, you must use the [product fields](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106) feature.

See the table below for details on the SKU field types you can select in the **Type** option when [creating an SKU field](#creating-an-sku-field):

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
<thead class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Field type</th>
    <th class="t-body fw5 c-muted-1 bb bw1 pa2 pb3 b--muted-3 tl">Description</th>
  </tr>
</thead>
<tbody>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Combo</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content with two or more predefined values, to select an option from a dropdown list. For example, a home appliance voltage, which can be 110v or 220v.</td>
  </tr>
  <tr class="bb b--muted-3">
    <td class="t-body pa5" style="min-width: 15rem;"><strong>Radio</strong></td>
    <td class="t-body pa5" style="min-width: 15rem;">Content with two or more predefined values, to check an option from a value grid. For example, choosing the colors of a product's components (red, yellow, blue, black...).</td>
  </tr>
</tbody>
</table>

### Adding values to the SKU field

The **Values** of the SKU fields will vary according to the selected field type: **Combo** or **Radio**. Follow the steps below to add predefined values:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category in which the product has been saved.
4. Click `Actions` <i class="fas fa-angle-down"></i>.
5. Click `Field (SKU)`.
6. Click the down arrow <i class="fas fa-angle-down"></i>.
7. Click **Values**.

    On this page you can create a **New value** or **Edit** the previously defined values.

7. Fill in the **Name** field with the values you wish to create for that field.

    Insert one value per row and press `Enter` after each value, as illustrated in the image below.

    ![valores-campo-sku-en](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_3.PNG)

8. Click `Save`.

    The added values will be displayed in the [SKU registration interface](#sku-registration).

![sku-spec-2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_4.gif)

>ℹ️ If you are adding values for the first time in a field, you must return to the form of that specific field and check the **Active** option.

#### Accessing or editing values

To access or edit values in an SKU field, follow the steps below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on **Categories**.
3. Click the category in which the SKU has been saved.
4. Click Actions <i class="fas fa-angle-down"></i>.
5. Click **Field (SKU)**.
6. Click the down arrow <i class="fas fa-angle-down"></i>.
7. Click **Values**.

    On this page you will see the values filled in and you can choose between the following options:
       * **Order Alphabetically:** Organizes the value list alphabetically.
       * **New value**: Creates a new value.
       * **Edit**: Allows changing the value text and opting for activating or deactivating it.
       * <i class="fas fa-angle-down"></i> > **Delete**: Deletes a value.

### Filling out SKU specifications

After creating an SKU field and adding the values, you must fill in each SKU's specifications, using the fields and values you created. You can do this either on each individual [SKU registration page](#sku-registration) or in bulk, using a [spreadsheet](#spreadsheet).

#### SKU registration

To fill in the specifications for each SKU individually, follow the instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Access **All products**.
3. On the product row with the desired SKU, click the down arrow <i class="fas fa-angle-down"></i>.
4. Click **SKU**.
5. On the desired SKU, click `Change`.
6. Access the **Specifications** tab.
7. Fill in the [fields you created](#creating-an-sku-field) with the desired [values](#adding-values-to-the-sku-field).

    Required fields will be marked with `*`.

8. Click `Save`.

![sku-spec-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_5.gif)

#### Spreadsheet

To fill in SKU specifications in bulk using a spreadsheet, first you must export the VTEX default spreadsheet, populate it and import it to the platform. To do this, please follow the instructions below:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click **Import and Export**.
3. Click the **SKU Specifications** tab.
4. Right-click on the desired category.
5. Click **Export...**.

    A green rectangle will appear on screen.

6. Click on **Click here to download your file** to export the spreadsheet.
7. Open the spreadsheet file and fill out the rows with the SKU specification data.

    Only edit the `SpecificationValue` spreadsheet column, inserting a value in each row field. The other columns must not be changed because their values will be used for data validation.

8. In the VTEX Admin, still in **Catalog** > **Import and export** > **SKU Specifications**, scroll down to **Upload File to Import**.
9. Click **Select** to select the file with the filled out spreadsheet from your computer.
10. Click `Import`.

![sku-spec-4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Catalog/Products%20and%20SKUs/adding-sku-specifications-or-fields_6.gif)

## Learn more
- [Adding product specifications or fields](https://help.vtex.com/en/tutorial/adding-specifications-or-product-fields--tutorials_106)
- [Product and SKU Specifications](https://help.vtex.com/en/tracks/catalog-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
