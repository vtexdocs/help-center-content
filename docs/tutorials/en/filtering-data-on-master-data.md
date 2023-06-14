---
title: 'How to filter data in Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2023-03-28T23:42:30.477Z
publishedAt: 2023-03-28T23:42:30.477Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: filtering-data-on-master-data
legacySlug: filtering-data-on-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

In Master Data, you can create filters for accesses through API, or for viewing the forms. Creating filters facilitates the search and query of data, enabling a greater control on your data. Filters must be set up first in the data entity, and subsequently, in the form desired. To be set up as a filter, a field should not be of the CEP, Text and File types. Also, a good practice is to set up filters with fields that contain just a few options for completion, such as “Categoria,” for example.

## How to set up a Data Entity filter

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. In Master Data, click **Aplications** > **Data structure.**
2. Access the **Entidade de Dados** tab.
3. Click on the **editar** button in the entity in which you intend to set up a filter.
4. The list of fields will be shown.
5. Click on the gear icon of the field that you intend to set up.
6. Check the **É filtro **option.**
7. Click on the **Salvar** button.
8. In the list of entities, click on the **Publicar** button, with the disk icon.
9. Wait for the publication and re-indexation of data to view the filter.

## How to set up the filter in the form

1. Access the **Master Data** module;
2. Click on the **Aplicações** tab;
3. In the application containing the form in which you want to create the filter, click on the gear icon;
4. The list of forms will be displayed; click on the pencil icon of the form that you intend to edit;
5. Fill out the **Filtros** field with the internal name of the field that was marked as filter. “Internal name” is the first column when creating and editing a data entity; this name cannot be changed. To enter more than one value, just separate them by comas, without spaces;
6. Click on the **Salvar **button.

## How to use filters

After creating the filter, you will be able to use it in the form. To do so, follow the steps below:

1. Access the **Master Data** module;
2. Click on the **Aplicações** tab;
3. In the desired application, identify the form that you intend to view;
4. In the desired form, click on the list icon;
5. The page with the list of records of this form will be shown. On one side, you will see the filters set up.
6. To use the filters, just click on the name of the filter, and on its value.
7. To check the results of the filter, scroll down the page and click on the **Filtrar **button.
8. You can use several fields simultaneously as filters, as well as several values in the same field. To remove a filter, just click on the **x** icon next to the value.

