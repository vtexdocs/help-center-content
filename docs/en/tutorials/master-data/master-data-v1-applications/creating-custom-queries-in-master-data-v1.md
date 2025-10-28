---
title: 'Creating custom queries in Master Data v1'
id: tutorials_799
status: PUBLISHED
createdAt: 2017-04-27T21:57:44.496Z
updatedAt: 2024-07-17T13:34:47.245Z
publishedAt: 2024-07-17T13:34:47.245Z
firstPublishedAt: 2017-04-27T23:03:43.119Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-custom-queries-in-master-data-v1
legacySlug: creating-a-personalized-master-data-query
locale: en
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

A custom query in Master Data is a filter or combination of filters that can be saved and accessed directly in a form's record list.

## Prerequisites

Before creating a query, follow the steps described in[ How to filter data in Master Data](/en/tutorial/filtrando-dados-no-master-data--tutorials_778) to set up a filter in the data entity and the form.

## Saving a query

Follow the steps below to filter the form records and save a custom query.

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.
2. Make sure you are in the **Applications** tab.
3. In the desired application, find the form you want to view and click the list icon <i class="fas fa-bars"></i>.

    You will be redirected to the list of records for this form. On the side, you will see the configured filters.
4. To filter, select the filter name and value, then click `Filter`.

    You can filter by multiple fields at once, and use multiple values for a single field. To remove a filter, click the `X` next to its value.
5. Click the `Save Query` button.
6. Add a name to the custom query.
7. Click `OK`.
8. Click `OK` again.
9. Click the **Applications** tab.
10. Click the `Reload Applications` button.

After following the instructions above, the query will appear as a display option in the form list.

![queries-2-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/master-data/master-data-v1-applications/creating-custom-queries-in-master-data-v1_1.png)

You can also access the saved queries by clicking the __Queries__ button in the form list:

![queries-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/master-data/master-data-v1-applications/creating-custom-queries-in-master-data-v1_2.png)

## Configuring a default query

To set a form to always open the list with a custom query instead of displaying all the records, you can configure a default query. To do this, follow the steps below:

1. In the VTEX Admin, go to **Store Settings** > **Storefront** > **Master Data**.
2. Make sure you are in the **Applications** tab.
3. In the application where you want to change the form, click the gear symbol <i class="fas fa-cog"></i>.
4. Click the edit icon <i class="fas fa-edit"></i> on the form row where you want to add the default query.
5. In the **Default query** option, select the custom query you want to display whenever you open the form's record list.
6. Click `Save`.
