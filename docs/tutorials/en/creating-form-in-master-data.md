---
title: 'Creating a form in Master Data'
id: tutorials_1047
status: PUBLISHED
createdAt: 2017-04-27T21:57:35.614Z
updatedAt: 2024-06-19T15:04:30.932Z
publishedAt: 2024-06-19T15:04:30.932Z
firstPublishedAt: 2017-04-27T23:03:43.083Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creating-form-in-master-data
locale: en
legacySlug: creating-form-in-master-data
subcategory: WpbGhubuRZaNZilJSXnqu
---

A form serves as an interface for the visualization and manipulation of a data entity. Essentially, it acts as a field aggregator.

Although always associated with a data entity, it is not mandatory for it to contain all the fields related to it; it can be customized according to demand. This way, it is possible to create different forms for the same entity, adapting to various needs. For example, a purchase form may include fields such as ID, customer, and date.

To create a form, follow the steps below:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. Make sure that you are in the __Applications__ tab.
3. In the application in which you want to create the form, click on the gear icon <i class="fas fa-cog"></i>.
4. After opening the list of forms, click `New`.
5. Fill in the fields as described in [Fields for the new form](#fields-for-the-new-form).
6. Click `Save`.

## Fields for the new form

- **Nome:** Form name.
- **Filters:** Fields marked as entity filters; these fields will make up the side filters of the form. The internal name of the field must be entered. If there is more than one field, separate them with comas. For example: campo1,campo2.
- **Data entity:** This is the data entity in which the form will save and display the data.
- **Search highlights:** Fields that will be listed in the search results. The internal name of the field must be entered. If there is more than one field, separate them with comas. For example: when searching for a customer, the list of results must include the customer’s ID and name; so, the field must be filled out with `id,nome`.
- **View queries:** Enables a new section in the display form with the records of an entity related to the form’s entity. The information displayed will relate to the record that is being viewed.   

   For example, the __Shopping List__ entity includes a field whose type is __Relationship__, which is related to the __Customer__ entity. So, in the __View queries__ field of the __Customer__ form, you must enter the __Shopping List__ field that refers to the __Customer__.

   If the acronym of the __Shopping List__ entity is __SL__, and the name of the field is __Customer__, you must enter: `SL.Customer` to upload the customer service that is being viewed in the form.

   ![relatedRecords-en](//images.ctfassets.net/alneenqid6w5/3j6iBpbL7ao6soYaME4e2a/b63c13d0278c701cce402b77c567f843/image_2.png)

After filling out the mandatory fields, the tabs available for configuration will be displayed. See below the fields of these tabs.

- **List Fields:** Select the fields included in the records list when clicking to view the form. To this end, just select the check boxes appearing at the side of the fields that you want to appear on the list. It is also possible to set up the width of the field on the list (column width), the display order and the ordering.

   The order of the fields on the list will follow the order viewed in this screen, that is, for a field to appear in the first column, click on the up arrow until it becomes the first field. Ordering is defined by one field. Select one field and choose between ascending (Asc) or descending (Desc) order.
- **Layout Schemas:** definition of how the fields will be displayed in the form, both for viewing, and for editing and creating the fields. That is, the position of each field in the form will be set up in this phase, and they also be divided by sections.

   1. Click on the `Add New Section` button.
   2. Fill out the __Name__ field to name the section.
   3. Drag one field from the **Available Fields** list to the **Fields of Column 1** column. The same can be made regarding the **Fields of Column 2** column.

   Repeat these three steps until you reach the format desired for the form. You can include several fields in a single column, as well as create several sections.

- **Queries:** This tab is only intended to show the [queries created on the list](https://help.vtex.com/en/tutorial/creating-a-personalized-master-data-query--tutorials_799).
- **Style Sheet:** Tab to enter the CSS to edit the frontend of the form.
