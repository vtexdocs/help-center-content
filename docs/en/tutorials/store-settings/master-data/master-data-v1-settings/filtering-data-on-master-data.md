---
title: 'How to filter data in Master Data'
id: tutorials_778
status: PUBLISHED
createdAt: 2017-04-27T21:58:11.041Z
updatedAt: 2024-06-27T00:07:07.554Z
publishedAt: 2024-06-27T00:07:07.554Z
firstPublishedAt: 2017-04-27T23:03:42.905Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: filtering-data-on-master-data
legacySlug: filtering-data-on-master-data
locale: en
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

In Master Data, you can create filters for API access and viewing forms. Filters simplify data search and query, giving you more control over your data.

To create a filter, you must first configure it on the data entity and then on the desired form, following the steps described in the following sections.

## Filter requirements

Follow the recommendations below when setting fields as filters:

- Do not use fields of the **CEP** (Brazilian postal code system), **Text** and **File** types as filters.
- Add a field containing a few options as a filter, such as "Category".

## Configuring filters in the data entity

Follow the instructions below to set an existing field as a filter in the data entity:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. In Master Data, click the gear icon <i class="fas fa-cog"></i> next to an application.
3. Click **Data structure**.
4. Go to the **Data Entities** tab.
5. Click the edit button <i class="fas fa-edit"></i> on the entity you want to set the filter.

   You will be redirected to the list of the entity's fields.
6. Click the gear <i class="fas fa-cog"></i> button in the field you want to set as a filter.
7. Check the **Is filterable?** option.
8. Click the `Save` button.
9. In the list of entities, click the diskette button <i class="fas fa-save"></i> to publish the entity.
10. Click the reindex button <i class="fas fa-expand-arrows-alt"></i> to index the entity.

## Configuring filters in the form

Follow the instructions below to configure filters in the form:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. In the application containing the form where you want to create the filter, click the gear icon <i class="fas fa-cog"></i>.

   You will be redirected to the list of forms in the app.
3. Click the edit <i class="fas fa-edit"></i> button on the row of the form you want to edit.
4. Complete the **Filters** field with the internal name of the designated filter field. The internal name corresponds to the initial field value when creating and editing the data entity, and it cannot be changed. To input multiple values, separate them with commas, without spaces.
5. Click the `Save` button.

## Filtering form records

After creating the filter, you can use it in the form. To do this, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.
2. In the desired application, find the form you want to view and click the list icon <i class="fas fa-bars"></i>.

   You will be redirected to the list of records for this form. On the side, you will see the configured filters. 
3. To filter, select the filter's name and value, then click `Filter`.

   You can filter by multiple fields at once, and use multiple values for a single field. To remove a filter, click the `X` next to its value.
