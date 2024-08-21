---
title: 'Master Data'
id: 4otjBnR27u4WUIciQsmkAw
status: PUBLISHED
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2024-06-07T20:19:30.086Z
publishedAt: 2024-06-07T20:19:30.086Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: master-data
locale: en
legacySlug: what-is-master-data
subcategory: 1l3IVVYwrrG5YOtdt7R2SN
---

Master Data is a VTEX database platform solution, which is highly customizable, and it also enables you to create applications.

By default, Master Data is used to store and organize Customer data from your store. It features a powerful search engine, allowing you to store, search, expand, and customize data.

In this article you will learn more about each available version of the Master Data, important concepts, and how to use it.

>ℹ️ Note that depending on the functionality and version you wish to use, it is necessary to contact your development team.

## Versions available

Currently there are two versions available and you can choose the one that best suits your operational needs. The main difference between the two is that v2 does not have a graphical interface and can be used only through [Master Data v2 API](https://developers.vtex.com/docs/api-reference/master-data-api-v2), although it has other relevant functionalities, such as the use of [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

<div class = "alert alert-info">
Note that the VTEX platform natively saves customer data from your store in Master Data v1.
</div>

Check the table below to learn more about the different functionalities of each version.

<div style="overflow: auto;"><table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px;border-collapse: collapse;">
   <thead class="bb b--muted-3 tl">
      <tr>
         <th class="t-body fw5 pa5" style="min-width: 10rem">Functionality</th>
         <th class="t-body fw5 pa5" style="min-width: 10rem;">v1</th>
         <th class="t-body fw5 pa5" style="min-width: 10rem;">v2</th>
         <th class="t-body fw5 pa5" style="min-width: 10rem;">Learn more</th>
      </tr>
   </thead>
   <tbody>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Graphical interface
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">-
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">API
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="https://developers.vtex.com/docs/api-reference/masterdata-api" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Master
                     Data
                     v1 API</a></li>
               <li><a href="https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Master
                     Data
                     v2 API</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Importing and exporting spreadsheets
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="https://help.vtex.com/en/tutorial/importing-data-into-master-data--tutorials_1135#" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Import
                     data into Master Data v1</a></li>
               <li><a href="https://help.vtex.com/en/tutorial/exporting-data--tutorials_1125#" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Export
                     data from Master
                     Data v1</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Attachments (imagens)
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">-
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Triggers
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="#triggers" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Triggers</a>
               </li>
               <li><a href="https://help.vtex.com/en/tutorial/creating-trigger-in-master-data--tutorials_1270#" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Creating
                     triggers with Master Data v1</a></li>
               <li><a href="https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Creating
                     triggers with Master Data v2</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">JSON Schemas
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="http://json-schema.org/" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">JSON
                     schemas</a></li>
               <li><a href="https://json-schema.org/understanding-json-schema" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Understanding
                     JSON schemas</a>
               </li>
               <li><a href="https://developers.vtex.com/vtex-rest-api/docs/starting-to-work-on-master-data-with-json-schema" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Starting
                     to work with JSON schemas in Master Data v2</a></li>
               <li><a href="https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Schema
                     life
                     cycle in Master Data v2</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Nested properties
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="#nested-properties" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Nested
                     properties</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Data entities
         </td>
         <td class="t-body pa5">Referenced by acronyms composed of two capital letters. For example, the 'CL' entity stores client data from the store and 'AD' stores addresses. Cannot be created via API.
         </td>
         <td class="t-body pa5">Referenced by their names. For example, 'Notification'. Can only be created via API.
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="#data-entities" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Data
                     entities</a></li>
               <li><a href="https://help.vtex.com/en/tutorial/criando-entidade-de-dados--tutorials_1265" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Data
                     entities
                     in Master Data v1</a></li>
               <li><a href="https://developers.vtex.com/vtex-rest-api/docs/creating-relationships-between-data-entities-using-api" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Creating
                     relationships between Master Data v2 data entities</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Fields
         </td>
         <td class="t-body pa5">Must be filled in in the specific format configured in the data entity.
         </td>
         <td class="t-body pa5">At first, there is no restriction on fields's formats. Format is validated through JSON schemas.
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="https://help.vtex.com/en/tutorial/criando-entidade-de-dados--tutorials_1265#understanding-the-types" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">Field
                     types in Master Data v1</a></li>
               <li><a href="#v2-schemas" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">JSON
                     schemas</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">Indexes
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="https://help.vtex.com/en/tutorial/setting-up-an-index-on-master-data--tutorials_785" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">How
                     to
                     set up indexes in Master Data v1</a></li>
               <li><a href="https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">How
                     to set up indexes with
                     Master Data v2 API</a></li>
            </ul>
         </td>
      </tr>
      <tr class="bb b--muted-3">
         <td class="t-body pa5">VTable
         </td>
         <td class="t-body pa5">No
         </td>
         <td class="t-body pa5">Yes
         </td>
         <td class="t-body pa5">
            <ul style="padding-inline-start: 0px;">
               <li><a href="https://developers.vtex.com/docs/guides/vtable" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">VTable</a>
               </li>
            </ul>
         </td>
      </tr>
   </tbody>
</table></div>

>❗ Note that the data entities of the two versions are independent, even if some may be analogous. This means that a data created in a v1 entity cannot be queried or edited using v2 resources and vice versa.

## Basic components

Both versions of Master Data use some basic components, which may be equivalent to concepts found in other database solutions, with other names such as record or table. Below you can find more details about:
- [Data entities](#data-entities)
- [Documents](#documents)
- [Fields](fields)
- [Indexes](#indexes)

### Data entities

Data entities are in the form of tables where documents and fields are recorded.

Master Data v1 data entities are referenced by acronyms composed of two capital letters. In v2, you can use the name of the data entity. For example, in v1, the 'CL' entity stores Client data from the store and 'AD' stores client addresses. Equivalent entities in v2 can be referenced with names such as 'Client' and 'Address'.

In a data entity date, the information is structured in [documents](#documents) and [fields](#fields).

### Documents

Documents are records in a data entity. If data entities are in the form of tables, each document represents a row in a table.

For example, within an entity that stores client data from the store, such as 'CL' or 'Client', each document contains information from a client.

Each document has an ID automatically generated by the platform at the time of its creation, a unique code that identifies that record.

### Fields

The attributes that make up Master Data documents are called fields. When comparing data entities with tables, we can think of the fields as the columns of a table.

For example, in an entity that stores client data from the store, such as 'CL' or 'Client', we may fill in fields such as **name**, **email**, **date of birth**, and **document**.

In Master Data v1, the fields must be filled in in the specific format configured in the data entity. Learn more about [the field types in Master Data v1](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos).

However, in v2, there is no restriction on fields and formats. Format validation is made through [JSON schemas](#v2-schemas).

#### Nested properties

Master Data v2 allows you to structure the data with nested properties, a structure often found in the [JSON](https://www.json.org/json-en.html) format. This concept consists of the possibility of creating composite fields from other fields, to better structure the data. For example, a client profile might have the field 'Document', which in turn consists of the 'Type' and 'Number' properties. You can also create nested [triggers](#triggers).

### Indices

Indices are used to specify a document to be accessed, indicated by an indexed field instead of its ID.

As mentioned above, each document has an ID automatically generated by the platform at the time of its creation. If you want to query a document but do not know its ID, you can use indices.

For example, you can query a document with a client's information by specifying the value of the 'email' field for the client.

<div class = "alert alert-info">
Learn more about <a href=https://help.vtex.com/en/tutorial/setting-up-an-index-on-master-data--tutorials_785>setting up indexes in Master Data v1</a> or <a href=https://developers.vtex.com/vtex-rest-api/reference/putindices>setting up indexes with Master Data v2 API</a>.
</div>

## Triggers

A Master Data trigger is a mechanism that performs an action after creating or updating a document, if the conditions set in the configuration are met. These actions can be of three types:
- Send HTTP request.
- Send an email.
- Save document in another data entity.

Learn more about how [to configure triggers in Master Data v1](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270) or how [to configure triggers with Master Data v2 API](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

With Master Data v2, you can define data formats with JSON schemas. This format indicates how the Master Data should validate and index documents.

<div class = "alert alert-info">
Learn more about <a href=https://json-schema.org/>JSON schemas</a>.
</div>

You can save a document to any data entity if the content is a valid JSON. A data entity may or may not have multiple JSON schemas associated with it.

![Master Data schemas](https://images.ctfassets.net/alneenqid6w5/CaidhUAHIxcwas8eWLQZu/72f691a72fe0166b1e16a38c6bf89d11/schemas_en.jpg)

<div class = "alert alert-info">
A document can be compatible with multiple JSON Schemas, but also with none.
</div>

## Applications

Both versions of Master Data are extremely flexible, allowing you to meet a variety of your store's needs. You may check below some examples of applying Master Data functionalities.

### A/B Testing

With v2 triggers, you can establish multiple actions for the same trigger by setting the load percentage that each action should receive. Therefore, it is possible to comparatively test the impact of different automations on your store.

Learn how to configure [A/B testing with Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Abandoned cart

Master Data can also be used to create abandoned cart integrations, i.e. performing automatic actions whenever clients add products to their store cart and log out without checking out.

To learn more, please see this guide on [abandoned cart configuration](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740)

