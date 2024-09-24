---
title: 'Creating relationships between Master Data v1 entities'
id: 1qzbCit8SYXbKwrT5x2FfA
status: PUBLISHED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2024-08-06T18:27:27.318Z
publishedAt: 2024-08-06T18:27:27.318Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: creating-relationships-between-master-data-entities-using-admin
locale: en
legacySlug: creating-relationships-between-master-data-entities-using-admin
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

A relationship between entities is a reference between documents that belong to different domains. This reference is defined by a field in each entity. This field should be completed with the ID of the related entity's document and will not be visible to the user.

For example, assume your store has a **Customer** entity and a **Wishlist** entity. If you want each customer to be able to create multiple wishlists, you must create a field in the **Wishlist** entity to link each one of them to a customer. 

>ℹ️ Master Data has a few predefined relationships by default, such as Customer (CL) and Address (AD).

## Creating a relationship between data entities

To create a relationship, there must be two data entities. If there is only one entity, you may create another following the instructions below. To learn more about data entities, see [Data entities](https://help.vtex.com/en/tutorial/data-entity--tutorials_1265).

In the example above, you need to create a data entity called **Wishlist** which will have a relationship with the **Customer** entity. This relationship will allow a customer to have multiple wishlists, but a wish list can only belong to one customer.

Check out the instructions below for the aforementioned example.

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. Click `Advanced settings`.  
3. Click **Data structure**. You will be redirected to a new page.
4. Click the **Data Entities** tab.
5. If you want to create a relationship in a new entity, click the `Add` button to create a new data entity.

   If you want to create a relationship in an existing entity, find it and click the edit button <i class="fas fa-edit"></i>, then go to step 7. 

6. Configure the entity that will be created by completing the **Acronym** and **Name** fields and adding the desired fields. Learn more about fields in [Creating a field in Master Data](https://help.vtex.com/en/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829).

   In this example, the entity will use the name `Wishlist`, the acronym `WL`, and the field `wishlist` of type `Varchar 750`.

   For more details on how to complete these fields, see [Data entity](https://help.vtex.com/en/tutorial/data-entity--tutorials_1265). 

7. Add a field of type **Relationship** and define its name. In this example, it will be called `Customer`.
8. Click the gear icon <i class="fas fa-cog"></i> next to the **Relationship** field to configure it.
9. Under **Custom field type settings**, select the entity you want to link and the field that will be displayed in the relationship. In this example, the relationship will be with the **Customer** entity, and the **email** field will be displayed.

   ![Relationship entity Shopping List](//images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/353fce7d63dcb871aad6b426723738c7/Lista_Compras_Relacionamento_EN.png)

10. Click the `Save` button to save the settings.
11. Click the publish icon <i class="fas fa-save"></i> to publish the entity.
12. You may also need to update the applications to implement the changes. To do this, go to **Store Settings** > **Storefront** > **Master Data** and click the `Reload Applications` button.

## Creating a relationship between documents

You can also create a relationship between documents once there is a [relationship between data entities](#creating-a-relationship-between-data-entities). To do this, you will need to edit the [form](https://help.vtex.com/en/tutorial/creating-form-in-master-data--tutorials_1047) of a data entity.

Follow the steps below:

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data**.
2. Click the gear icon <i class="fas fa-cog"></i> next to the application name.

 You will be redirected to the list of forms in that application.

3. To create a new form, click `+ New`.
4. Enter the **Name** of the form.
5. Select the **Data entity** to which the form will be linked. In this tutorial, we will use the Wishlist entity as an example.

   The entity's fields will be displayed in a list on the **List Fields** tab and can be selected to compose the form.

6. Select the relationship field and any others you want to include in the form. In this example, we will include the **Customer** field (relationship) and the **Document ID** and **Wishlist** fields.
7. Click the **Layout Schemas** tab to configure the form layout.
8. Click `Add New Section` to create a section on the form.
9. Name the section.
10. Drag the relationship field (in this case, **Customer**) into the section and the other fields you want to include in the form.
11. Click `Save`. You will be directed to the list of forms in the application, which includes the new form.
12. In the new form's row, click the edit icon <i class="fas fa-edit"></i>.
13. Click the **Layout Schemas** tab.
14. Next to the relationship field (in the example, **Customer**) click the edit icon <i class="fas fa-edit"></i>.
15. Select the **Combo box** option and click `OK`. This option allows you to select existing field values stored in the related entity when completing the form.
16. Click `Save`.
17. Click the **Applications** tab.
18. Click the `Reload Applications` button.

Now, when you create a new document from the form, you can select the desired value (in this example, the pre-existing Customer who will be linked to the Wishlist).

You can also view the related records by accessing each record of an entity. For example, you can view the `Wishlist` created by a `Customer` when accessing the customer's record.

To do this, you need to add the value `{relationship_entity_acronym}.{relationship_field_name}` to the entity's form in the **View queries** field. Example: `WL.customer`.

## Adding filters to relationship fields

Relationships are kept through document IDs. Trying to insert the relationship's field value as a filter in the form will return only the IDs of the referred documents, and not each document's value for the chosen field. The image below shows this result. For more information, see [How to filter data in Master Data](https://help.vtex.com/en/tutorial/filtering-data-on-master-data--tutorials_778).

![Filter relationship ID](//images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/cc8c2639c1f1c806c97392e7a97da165/filters-en.png)
