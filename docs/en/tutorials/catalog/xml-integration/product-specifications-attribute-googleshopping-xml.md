---
title: 'Product specifications attribute – Google Shopping XML'
id: tutorials_100
status: PUBLISHED
createdAt: 2017-04-27T22:19:40.955Z
updatedAt: 2025-06-12T20:41:17.144Z
publishedAt: 2025-06-12T20:41:17.144Z
firstPublishedAt: 2017-04-27T23:00:42.099Z
contentType: tutorial
productTeam: Channels
author: authors_3
slugEN: product-specifications-attribute-googleshopping-xml
legacySlug: product-specifications-attribute-googleshopping-xml
locale: en
subcategoryId: 2OCA7SVfWoMSiAi0GEGwKo
---

Following the [update released by Google](/en/tutorial/understanding-the-updating-of-the-xml)  in September 2015, several attribute tags used in the product feed now have pre-defined values that are required in the English language and all of them **in upper case.**

This is to make it possible to integrate the products on Google Shopping and to improve the level of categorization.

As the VTEX platform allows each customer to structure and formulate this product range as they see fit, it is impossible to map them all and converge them into just a variation of two or three values.

That is, take the tag for the attribute **gênero** (for Google: **gender**), where we can have a variation ranging from “Male”/ “Female” to “Boys”/ “Girls”, “Little Boys”/ “Little Girls”, among others.

In the case of feeds with products in the **Clothing and accessories** category, it will be mandatory to insert the attributes:

- `'gênero'[g:gender]`
- `'idade'[g:age_group]`
- `'disponibilidade'[g:availability]`
- `'condição'[g:condition]`

Attributes like `tamanho'[g:size]` and `'cor' [g:color]` should be filled out with the value of the specification created.

This demand should be dealt with using product specifications.

Creating a Group that includes the attributes described above so as to comply with the default value required for the XML of Google Shopping.

## How to do it

### Group

We will create a group with the name **Atributos Google** in the root category of the store:

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __Categories__.
3. Click on the root category.
   After doing so, the selected category will also appear on the right portion of the screen. It will have an `Actions` button on its side.
4. Click on the `Actions` button and then on __Group__.
5. Click on the `New Group` button to add a new group.
6. You will be redirected to a new screen, where you should fill the name and confirm the category of the new group.
7. Click on the `Save` button.

### Product field

Here you will have to create four fields for each attribute discussed above: **gender**, **age\_group**, **availability** and **condition**.

#### How to create a product field

1. In the VTEX Admin, go to __Catalog__, or type __Catalog__ in the search bar at the top of the page.
2. Click on __Categories__.
3. Click on the root category.
   After doing so, the selected category will also appear on the right portion of the screen. It will have an `Actions` button on its side.
4. Click on the `Actions` button and then on __Field (Product)__.
5. Click on the `New Field` button to add a new product field.

The following options show up:

- __Name:__ Gender/age\_group/availability/condition.
- __Text:__ Description of the field.
- __Type:__ Radio.
- __Group:__ Select the group previously created “Atributos Google”.
- __Filter:__ To be used as a filter for browsing the site.
- __Required:__ Not required.
- __Show Specification:__ Not required.
- __Link in the Top Menu:__ Not required.
- __Link in the Side Menu:__ Not required.
- __Active:__ Enables or disables the field in the Product register.

### Attribute values

Here we will have to register the predefined values that will comprise the Product register:

With the above field already created, click on the action button and then on __Values__. Then enter the values according to the following standard:
- **gender**: can only be “male”, “female” and “unisex”;
- **age\_group**: can only be “newborn”, “infant”, “toddler”, “kids” and “adult”
- **availability**: can only be “in stock”, “out of stock” and “preorder”
- **condition**: can only be “new”, “used” and “refurbished”

The values can be created all at the same time, just enter a line break for each one.

Just save this and the values will become listed.

Now just define on Google Shopping XML the attributes as structured above.

See [How to Configure Google Shopping XML](/en/tutorial/how-to-configure-xml-for-google-shopping--frequentlyAskedQuestions_372) for instructions on how to configure the XML.
