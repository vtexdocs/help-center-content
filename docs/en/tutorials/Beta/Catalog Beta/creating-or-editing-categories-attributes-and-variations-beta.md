---
title: 'Creating or editing categories, attributes, and variations (Beta)'
id: 1lzs3fHjM9N7CKFOxCCYQi
status: PUBLISHED
createdAt: 2025-07-09T19:53:44.834Z
updatedAt: 2025-07-14T20:16:34.071Z
publishedAt: 2025-07-14T20:16:34.071Z
firstPublishedAt: 2025-07-14T18:56:57.453Z
contentType: tutorial
productTeam: Management
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: creating-or-editing-categories-attributes-and-variations-beta
locale: en
legacySlug: creating-or-editing-categories-attributes-and-variations-beta
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

<div class = "alert alert-info">
  <p>This feature is in beta, which means that we are working to improve it. If you have any questions, please contact <a href="https://help.vtex.com/en/support">our Support</a>.</p>
</div>

In the VTEX Admin, under **Catalog > Categories**, you'll find the page for managing your store's category tree. This article guides you through creating and configuring categories, [attributes, and variations](#terminology). It's divided into the following sections:

- [Terminology](#terminology)
- [Interface overview of categories, attributes, and variations](#interface-overview-of-categories-attributes-and-variations)
- [Actions on categories](#actions-on-categories)
    - [Adding categories](#adding-categories)
    - [Editing categories](#editing-categories)
    - [Searching categories by name](#searching-categories-by-name)
    - [Hiding categories](#hiding-categories)
- [Actions on groups of attributes or variations](#actions-on-groups-of-attributes-or-variations)
    - [Adding groups](#adding-groups)
    - [Editing groups](#editing-groups)
    - [Identifying groups and inherited attributes](#identifying-groups-and-inherited-attributes)
- [Actions on attributes](#actions-on-attributes)
    - [Adding attributes](#adding-attributes)
    - [Editing attributes](#editing-attributes)
    - [Viewing attribute activation status and values](#viewing-attribute-activation-status-and-values)
    - [Hiding inactive attributes](#hiding-inactive-attributes)
- [Actions on variations](#actions-on-variations)
    - [Adding variations](#adding-variations)
    - [Editing variations](#editing-variations)
    - [Viewing variation activation status and values](#viewing-variation-activation-status-and-values)
    - [Hiding inactive variations](#hiding-inactive-variations)

<div class="alert alert-danger">
  <p>Once a category, attribute, or variation is created, it can't be deleted; only edited, deactivated, or hidden in the interface.</p>
</div>

## Terminology

In the beta phase, we'll use a new name for the following terms:

| **Current name** | **Beta name** |
| --- | --- |
| [Product specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification) | Attributes |
| [SKU specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#sku-specifications) | Variations |
| [Groups (of product specifications or SKUs)](/en/tutorial/criando-grupo-de-especificacoes-em-uma-categoria--tutorials_246) | Groups (of attributes or variations) |

## Interface overview of categories, attributes, and variations

In the VTEX Admin, when you go to **Catalog > Categories**, the interface by displays **Categories** and **Attributes** by default, as shown in the image below:

![category_attributes_EN](https://images.ctfassets.net/alneenqid6w5/7436dJLF4YzoYkjrm6GBfM/fe467645e777cf8e5cbdc1e5e596390c/category_attributes_EN.png)

On this page, you can view information and perform the following actions:

- **A - Search category:** After [adding categories](#adding-categories), you can use the [search bar to search](#searching-categories-by-name) for the desired option by name.
- **B / C - Create category:** You can [add a new category](#adding-categories) by clicking the + icon next to the search bar, or by hovering over **All products** and clicking the + icon that displays.
- **D - Hide categories:** You can [hide the list of categories](#hiding-categories) by clicking the icon at the top of the page next to the name of the page category.
- **E - Create subcategory:** When you hover over the name of a category, the + icon displays, allowing you to create a nested category, which is a subcategory.
- **F - Edit category:** When you hover over the name of a category, the vertical ellipsis <i class="fas fa-ellipsis-v" aria-hidden="true"></i> displays, allowing you to [edit the category](#editing-categories).
- **G - Inherited attribute:** The share icon displayed next to an attribute indicates that it has been [inherited](#identifying-groups-and-inherited-attributes) as a category setting applied to **All products**. Subcategories have all the attributes configured in the parent category, so they "inherit" these configurations.
- **H - Attribute status:** An [attribute can be active](#viewing-attribute-activation-status-and-values), indicated by a green circle, which means it's enabled and can display on the storefront. If inactive, it’s represented by a white circle.
- **I - Type of attribute:** The icon next to the attribute name represents the attribute type, which can be "Free text", "Large text", "Single selection", or "Multi selection".
- **J - Edit attribute:** After adding an attribute, you can [edit it](#editing-attributes) by clicking the pencil icon <i class="fas fa-pencil-alt" aria-hidden="true"></i> on the row of the desired attribute.
- **K - Add attribute:** You can [add an attribute](#adding-attributes) by clicking the + icon in the attribute group name.
- **L - Hide inactive attributes:** You can [hide inactive attributes](#hiding-inactive-attributes) in the interface by clicking the eye icon <i class="fas fa-eye" aria-hidden="true"></i>.
- **M - Add group of attributes:** You can [create a group of attributes](#adding-groups) by clicking the + icon at the top right of the page.
- **N - Edit category:** You can [edit the selected category](#editing-categories) by clicking the vertical ellipsis <i class="fas fa-ellipsis-v" aria-hidden="true"></i> at the top right of the page.
- **O - Select option:** When accessing the **Categories** page, you can choose between viewing their `Attributes` (related to products) or `Variations` (related to SKUs).

Selecting the **Variations** option displays an interface like the one shown below:

![category_variations_EN](https://images.ctfassets.net/alneenqid6w5/5XX38yXs6AkibrvpWqXODV/0a0418f43b503e6fb16913ee28c4ef40/category_variations_EN.png)

On this page, you can view information and do the following:

- **P - Variation status:** A [variation status can be active](#viewing-variation-activation-status-and-values), indicated by a green circle, meaning that it has been activated to display on the storefront, or inactive, indicated by a white circle.
- **Q - Type of variation:** The icon next to the attribute name indicates the variation type, which can be "Single selection" or "Multi selection".
- **R - Add variation:** You can [add a variation](#adding-variations) to a group by clicking the + icon in the group name.
- **S - Hide inactive variations:** You can [hide inactive variations](#hiding-inactive-variations) in the interface by clicking the eye icon <i class="fas fa-eye" aria-hidden="true"></i>.
- **T - Add group of variations:** You can [create a group of variations](#adding-groups) by clicking the + icon at the top right of the page.
- **U - Edit category:** You can [edit the selected category](#editing-categories) by clicking the vertical ellipsis <i class="fas fa-ellipsis-v" aria-hidden="true"></i> at the top right of the page.
- **V - Edit variation:** After adding a variation, you can [edit it](#editing-variations) by clicking the pencil icon <i class="fas fa-pencil-alt" aria-hidden="true"></i> on the row of the desired variation.

## Actions on categories

In the Admin VTEX, go to **Catalog > Categories**, or type **Categories** in the search bar at the top of the page. The category editing interface is always displayed on the left, whether you select `Attributes` or `Variations`.

Category actions include:

- [Adding categories](#adding-categories)
- [Editing categories](#editing-categories)
- [Searching categories by name](#searching-categories-by-name)
- [Hiding categories](#hiding-categories)

<div class="alert alert-warning">
  <p>When a category is added, it can't be removed, only <a href="#editing-categories">edited</a> or deactivated.</p>
</div>

### Adding categories

To create a category, follow the steps below:

<div class="alert alert-danger">
  <p>Once a category has been created as a parent category, it can't be edited as a subcategory. The same rule applies to subcategories, which can't become categories or change their parent category.</p>
</div>

1. In the left corner of the page, next to the search bar, click the + icon, or hover over **All products** and click the + displayed. You can also click the + icon next to the category name.
2. In the modal displayed, enter the category name. This is the only required field.

  <div class="alert alert-warning">
  <p>The category name is crucial for <a href="https://help.vtex.com/en/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG">SEO</a> (Search Engine Optimization), so we recommend the following:</p><p><ul><li>Use simple words.</li><li>Avoid using other languages.</li><li>Avoid complex spelling.</li><li>Use up to 150 characters.</li></ul></p>
</div>

3. If you want to activate the category you're creating, select the checkbox **Active.** To keep it deactivated, leave the option unchecked.
4. In the **Basic information** section, complete the following fields:
    - **Parent category:** If the category you’re creating is a subcategory (for example, nested under another category), enter the numerical code of the parent category it belongs to.
    - **VTEX global category:** The [global category](/en/tutorial/configurando-a-categoria-global--tutorials_188) is a taxonomy created by Google for the [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR), predefined as a single tree on the VTEX platform.

5. In the **Storefront and SEO** section, complete the following fields:
    - **Similar words:** Synonyms of the category names. Use this field to improve the coverage of search results. You can add multiple words, separated by commas, up to 200 characters.
    - **Page title:** Text displayed in the browser tab that corresponds to the title of the category page on the site. This field is crucial for SEO, as it doesn't allow HTML tags and must contain up to 150 characters.
    - **Description:** Brief summary of the category. We recommend using up to 200 characters, so that search engines display the description correctly on the results pages. The field only supports plain text and doesn't allow HTML tags.
    - **Store search priority:** Integers used to define the category's priority in search results. The highest value means the highest priority in the results, and the value zero or the field left blank means no priority. Learn more in the article [How the score field works](/en/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).

6. In the **Storefront** section, you can check any of the following options:
    - <a class="far fa-check-square" aria-hidden="true"></a> **Show on menu:** Makes the category or department visible on the store's top and side menus.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Menu with active link:** Determines whether the category visible in the store is clickable, which redirects to a category page.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Brand filter:** Defines whether the category or department page should display the option to filter by [brands](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh).

7. In **Product display mode**, you determine how the SKUs of the products in the category will be displayed in the store product listing page. You can choose the following options:
    - **SKU list:** Items organized in a list format. If you don’t choose another option, this one will be used by default.
    - **Combo boxes:** Items selected from combo boxes.
    - **Radio selection icons:** Items selected from a list where you can select a single item at a time.
    - **Follows the variation setting:** The product presentation follows the configuration at the SKU level, for example, defined by the variation.

8. Click `Create`.

Once this is done, the confirmation message "*Category created successfully*" will be displayed.

### Editing categories

To edit a category, follow the steps below:

1. Hover over the desired category and click the vertical ellipsis menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Click <i class="fas fa-pencil-alt" aria-hidden="true"></i> **Edit category**.
3. Edit the information you want.

  <div class="alert alert-danger">
  <p>The following configurations can't be edited:</p><p><ul><li>Hierarchy level of the category, whether it's a parent category or subcategory.</li><li>Relationship between categories and subcategories.</li></ul></p>
</div>

4. Click `Apply`.

Once this is done, the confirmation message "*Category updated successfully*" will be displayed.

### Searching categories by name

Once you've created categories, you can find them using the search bar indicated by the magnifying glass icon <i class="fas fa-search" aria-hidden="true"></i>. The search only considers the names of categories and subcategories.

<div class = "alert alert-info">
  <p>You can use a shortcut for this search. By pressing the <code>/</code> key, the cursor moves to the search field to enter the name of the desired category.</p>
</div>

### Hiding categories

On the **Categories** page, you can hide the list of categories by clicking the icon next to the category name at the top of the page. To display the list of categories again, click the same icon.

## Actions on groups of attributes or variations

In **Catalog**, a group is a set of related attributes or variations. To manage your groups, go to **Catalog > Categories** and select `Attributes` or `Variations`. The possible actions for groups are:

- [Adding groups](#adding-groups)
- [Editing groups](#editing-groups)
- [Identifying groups and inherited attributes](#identifying-groups-and-inherited-attributes)

Every group created on the **Attributes** page is reflected on the **Variations** page, and vice versa. However, each group only displays the attributes or variations configured in it, which are displayed based on the selected page.

### Adding groups

To create a group, follow the steps below:

1. At the top of the **Attributes** or **Variations** page, click the + icon.
2. Enter the group name, up to 100 characters.
3. Click outside the text area to view the `Save` button.
4. Click `Save`.

Once this is done, the confirmation message "*Category group saved successfully*" will be displayed. The group will be automatically listed in alphabetical order after being added.

<div class = "alert alert-info">
  <p>To learn how to add attributes to a group, go to <a href="#adding-attributes">Adding attributes</a>, and to learn how to add variations to a group, go to <a href="#adding-variations">Adding variations</a>.</p>
</div>

### Editing groups

You can edit a group by changing its name,[including attributes](#adding-attributes) or [including variations](#adding-variations), as will be explained in the following sections.

To rename a group, follow the steps below:

1. On the **Attributes** or **Variations** page, double-click the name of the desired group.
2. Edit the name.
3. Click outside the text area to see the `Save` button.
4. Click `Save`.

Once this is done, the confirmation message *"Category group saved successfully"* will be displayed.

### Identifying groups and inherited attributes

When a group of attributes is created in the parent category, it becomes mandatory for all subcategories, so we say it's an "inherited" group.

In the **Attributes** interface, you can identify groups and inherited attributes by the share icon, located to the left of the name, as in the image below:

![inherited_atribute_EN](https://images.ctfassets.net/alneenqid6w5/5nmtuQ4WLDd95101bFo3vq/49808ee4f19506367fed4f66f5ae172d/inherited_atribute_EN.png)

<div class = "alert alert-info">
  <p>To learn about attribute status, see the section <a href="#viewing-attribute-activation-status-and-values">Viewing attribute activation status and values</a>.</p>
</div>

## Actions on attributes

In beta, *attributes* is the terminology for what used to be called [product specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#product-specification) — the informative properties that can be added to products. In **Catalog > Categories**, the **Attributes** page allows you to:

- [Adding attributes](#adding-attributes)
- [Editing attributes](#editing-attributes)
- [Viewing attribute activation status and values](#viewing-attribute-activation-status-and-values)
- [Hiding inactive attributes](#hiding-inactive-attributes)

To view its interface, see the section [Interface overview of categories, attributes, and variations](#interface-overview-of-categories-attributes-and-variations).

### Adding attributes

To add an attribute, follow the steps below:

<div class="alert alert-danger">
  <p>Once an attribute has been added to a group, it can't be removed; it can only be edited, deactivated, or hidden in the interface. The attributes' type can't be edited.</p>
</div>

1. On the **Attributes** page, after you've [added a group](#adding-groups), click the + icon next to the name of the group you want, or click the down arrow next to the name of the group and then click `Add first attribute`.
2. Click the type of attribute you want:
    - **Free text:** Character-free typing, suitable for short text. The field doesn't support HTML tags. Example: Description of ingredients.
    - **Large text:** Character-free typing, suitable for longer text. The field doesn't support HTML tags. Example: Size charts for fashion stores.
    - **Single selection:** There are two or more predefined values, but you can select only one. Example: Shoe sizing, using values such as 34, 35, 36, etc.
    - **Multiple selection:** There are at least two predefined values, and you can select multiple options. Example: Gender for which a product is intended, which can be a combination of Male, Female, and Unisex.
3. In the side drawer, complete the title field with the attribute name. This is the only required field.
4. If you want to activate the attribute you're creating, select the **Active** checkbox. To keep it deactivated, leave the option unchecked.
5. In **Settings**, complete the following fields:
    - <a class="far fa-check-square" aria-hidden="true"></a> **Required:** Select this checkbox to make the attribute required. Leave it unchecked to keep it optional. If the attribute is required, the product can only be activated once the field is completed.
    - **Default value:** Common value for the attribute. Example: In a t-shirt store, the default value for the "material" attribute is "cotton", the most commonly used type.
    - **Description:** Description of the attribute and its values.

6. In **Storefront**, all the fields refer to the customers' shopping experience, and you can select the options you want from the following:
    - <a class="far fa-check-square" aria-hidden="true"></a> **Show specification:** Determines whether the attribute is displayed on the storefront.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Use as filter:** Defines whether the attribute can be used as a filter in the product search.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Top menu link:** Defines whether the attribute is displayed as a clickable link in the top menu of the site.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Side menu link:** Defines whether the attribute is displayed as a clickable link in the site's side menu.

7. Click `Create`.

Once this is done, the confirmation message "*Attribute created*" will be displayed.

### Editing attributes

To edit an attribute, follow the steps below:

1. On the **Attributes** page, hover over the name of the attribute you want to edit and click the pencil icon <i class="fas fa-pencil-alt" aria-hidden="true"></i> that will be displayed.
2. In the side drawer, change the attribute settings as desired. For more information on **Settings** or **Storefront**, see the section [Adding attributes](#adding-attributes).

  <div class="alert alert-warning">
  <p>The attribute type is the only setting that can't be changed.</p>
</div>

3. (Optional). This step doesn't apply to the **Free text** and **Large text** attribute types. However, for **Single selection** and **Multiple selection**, there's the **Values** section, in which you determine the exact values for the attribute.
    - 3.1 To create a value, click the + icon, or click the down arrow next to **Values** and select `Add first value`.
    - 3.2 Enter the text of the value and then click somewhere on the screen outside the value row.
    - 3.3 The value is created as active, identified by the green icon next to the name. To deactivate it, leave the **Active** checkbox unchecked.
    - 3.4 The values are displayed in the order they were created. To change a value's position in the list, click the icon to the left of the attribute value name and drag it to the desired position.

4. Click `Apply`.

Once this is done, the confirmation message "*Attribute updated successfully*" will be displayed.

### Viewing attribute activation status and values

Both the attribute and its values can have two possible statuses, as shown in the table below:

| **Status** | **Attribute** | **Attribute value** | **Icon color** |
| :---: | :--- | :--- | :---: |
| Active | The attribute can be reflected on the storefront, displaying only the activated values. | The attribute value can be reflected on the storefront if the attribute itself is active. | 🟢 Green |
| Inactive | The attribute isn't reflected on the storefront, regardless of the value status. | The attribute value isn't reflected on the storefront, regardless of whether the attribute is active. | ⚪ White |

To activate or deactivate an attribute or its values, see the section [Editing attributes](#editing-attributes).

<div class = "alert alert-info">
  <p>For more information on the icon that can be displayed next to the attribute's status, see the section </a><a href="#identifying-groups-and-inherited-attributes">Identifying groups and inherited attributes</a>.</p>
</div>

### Hiding inactive attributes

A created attribute can't be deleted from your catalog, but you can hide it from the interface after [deactivating it](#viewing-attribute-activation-status-and-values).

To do this, at the top right of the **Attributes** page, click the eye icon <i class="fas fa-eye" aria-hidden="true"></i> to **Hide inactive attributes**. To display the inactive attributes again, click the same icon.

## Actions on variations

In beta, *variations* is the terminology for what used to be called [SKU specifications](/en/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP#sku-specifications) — the SKU options in which products could be purchased. In **Catalog > Categories**, the **Variations** page allows you to:

- [Adding variations](#adding-variations)
- [Editing variations](#editing-variations)
- [Viewing variation activation status and values](#viewing-variation-activation-status-and-values)
- [Hiding inactive variations](#hiding-inactive-variations)

To view its interface, see the section [Interface overview of categories, attributes, and variations](#interface-overview-of-categories-attributes-and-variations).

### Adding variations

To create a variation, follow the steps below:

<div class="alert alert-danger">
  <p>Once a variation has been added to a group, it can't be removed; it can only be edited, deactivated, or hidden in the interface. The variations' type can't be edited.</p>
</div>

1. On the **Attributes** page, after you've [added a group](#adding-groups), click the + icon next to the name of the group you want, or click the down arrow next to the name of the group and then click `Create first variation`.
2. Click the desired type of variation:
    - **Single selection:** There are two or more predefined values, but the customer can choose only one option. Example: The appliance's voltage is 110V or 220V.
    - **Multiple selection:** There are two or more predefined values, and the customer can choose more than one option. Example: Defining the colors of a product (red, yellow, blue and/or black).
3. In the side drawer, complete the title field with the name of the variation. This is the only required field.
4. If you want to activate the variation you're creating, select the **Active** checkbox . To keep it deactivated, leave the option unchecked.
5. In **Settings**, complete the following fields:
    - <a class="far fa-check-square" aria-hidden="true"></a> **Required:** Select this checkbox to make the variation required. Leave it unchecked to keep it optional. If the variation is required, the SKU can only be activated once it's completed.
    - **Default value:** Common value for the chosen variation type.
    - **Description:** Description of the variation and its values.

6. In **Storefront**, all the fields refer to the customers' shopping experience, and you can select the options you want from the following:
    - <a class="far fa-check-square" aria-hidden="true"></a> **Show specification:** Determines whether the variation is displayed on the storefront.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Use as filter:** Defines whether the variation can be used as a filter in the product search.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Top menu link:** Defines whether the variation is displayed as a clickable link in the top menu of the site.
    - <a class="far fa-check-square" aria-hidden="true"></a> **Side menu link:** Defines whether the variation is displayed as a clickable link in the site's side menu.

7. Click `Create`.

Once this is done, the confirmation message "*Variation created successfully*" will be displayed.

### Editing variations

To edit a variation, follow the steps below:

1. On the **Variations** page, hover over the name of the variation you want to edit and click the pencil icon <i class="fas fa-pencil-alt" aria-hidden="true"></i> that will be displayed.
2. In the side drawer, change the variation settings as desired. For more information on **Settings** or **Storefront**, see the section [Adding variations](#adding-variations).

  <div class="alert alert-warning">
  <p>The variation type is the only setting that can't be changed.</p>
</div>

3. When editing, the **Values** section determines the predefined values for the variation.
    - 3.1 To create a value, click the + icon, or click the down arrow next to **Values** and select `Add first value`.
    - 3.2 Enter the text of the value and then click somewhere on the screen outside the value row.
    - 3.3 The value is created as active, identified by the green icon next to the name. To deactivate it, leave the checkbox unchecked.
    - 3.4 The values are displayed in the order they were created, which is reflected on the storefront. To change a value's position in the list, click the icon to the left of the name and drag it to the desired position.

4. Click `Apply`.

Once this is done, the confirmation message "*Updated attribute successfully*" will be displayed.

### Viewing variation activation status and values

Both the variation and its values can have two possible statuses, as shown in the table below:

| **Status** | **Variation** | **Variation value** | **Icon color** |
| :---: | :--- | :--- | :---: |
| Active | The variation is reflected on the storefront and only displays the activated values. | The variation value can be reflected on the storefront if the variation itself is active. | 🟢 Green |
| Inactive | The variation isn't reflected on the storefront, regardless of the value status. | The value of the variation isn't reflected on the storefront, regardless of whether the variation is active. | ⚪ White |

<div class = "alert alert-info">
  <p>To activate or deactivate a variation or its values, see the section <a href="#editing-variations">Editing variations</a>.</p>
</div>

### Hiding inactive variations

A created variation can't be deleted from your catalog, but you can hide it from the interface after [deactivating it](#viewing-variation-activation-status-and-values).

To do this, at the top right of the **Variations** page, click the eye icon <i class="fas fa-eye" aria-hidden="true"></i> to **Hide inactive variations**. To display them again, click the same icon.

