---
title: Creating a field in Master Data
id: frequentlyAskedQuestions_1829
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.042Z
updatedAt: 2023-03-28T23:46:05.723Z
publishedAt: 2023-03-28T23:46:05.723Z
firstPublishedAt: 2019-01-24T22:09:07.683Z
contentType: tutorial
productTeam: Master Data
author: authors_84
slug: how-can-i-create-a-field-in-master-data
legacySlug: how-can-i-create-field-in-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

Fields are attributes of a document. Before you configure them, you must understand the [concepts of data entities in our guide](https://help.vtex.com/en/tutorial/creating-data-entities--tutorials_1265 "data entities").

The process is done in two modules, Dynamic Storage and CRM, described below. Dynamic Storage is an environment in which fields are created, while CRM is where this information is viewed.

## Dynamic Storage

Dynamic Storage is an environment in which you can set up data structures.

This environment allows you to create the field as you would in a database, but with a more user-friendly and clearer interface (there is no need for a script).

To access it, you can take the traditional route through VTEX Admin to Master Data.

Follow the step-by-step below:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. Click on __Create Applications.__
3. Under Settings, click on __Data Structure.__
4. Select the __Data Entities__ tab on the page.
5. Find the __entity__ in which you wish to create a field.
6. Click on the __pencil__ icon to start editing.
7. Click on one of the __New Field__ buttons.
8. Fill out the __Name__ - without spaces or special characters -, __Display Name__ and __Type__ values.
9. Click on the __gears__ icon to set up the other field options.
10. If required, set up the desired alternate options in __General Settings__, __Search and Filter Settings__, __Custom field type settings.__
11. If required, fill out the __Description__ field.
12. Click on __Save.__

<div class="alert alert-info">More information about <strong>General Settings</strong> and <strong>Search and Filter Configurations</strong> can be found in our article on <a href="https://help.vtex.com/en/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar">Creating a data entity</a>, subsection <strong>How to set up</strong>.</div>

![criar campo master data ds](https://images.ctfassets.net/alneenqid6w5/5cWru1fi0SyEAOoEbgShOI/95cabcfa4a60032d87c3294773ba4fd0/criar_campo_master_data_ds.gif)

You will then return to the main Data Entity page. To complete the process, you need to publish the field. Locate the entity line in which the field was added and click on the disk icon.

Afterwards, the following message is displayed:

*"Successfully published. If fields are configured as Filter or Searchable, you need to click on the reindexing button."*

If this were the case, click on the arrow icon in the edited entity line in order to reindex the entity, thus successfully creating the field.

## CRM

If you want the recently created fields to be displayed on the form, access CRM - an environment where such information is displayed.

To achieve this, follow the instructions below:

1. On top of the page, click on __Master Data__;
2. Select the Master Data option;
3. Next to Profile System, click on the gears symbol;
4. On the desired form, click on the pencil icon to start editing;
5. In the Listed Fields tab ("campos da listagem"); select the fields that you wish to display in the listing;
6. Select the Layout Blueprints tab ("Schemas de layout");
7. Drag the field from the list entitled "available fields" to the columns entitled "column Fields 1" or "column Fields 2";
8. In the lower part of the screen, click on the blue Save button.

![criar campo master data CRM](https://images.ctfassets.net/alneenqid6w5/2ykQ9Vx7FCZLehkQpxMMmp/0b52e7bc11fc024e74c5223b8e534b65/criar_campo_master_data_CRM.gif)

Done! The fields will be displayed on the form.
