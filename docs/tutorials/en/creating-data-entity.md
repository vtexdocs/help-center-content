---
title: 'How to create a data entity'
id: tutorials_1265
status: PUBLISHED
createdAt: 2017-04-27T21:56:57.118Z
updatedAt: 2023-03-28T23:55:21.924Z
publishedAt: 2023-03-28T23:55:21.924Z
firstPublishedAt: 2017-04-27T23:03:49.803Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creating-data-entity
locale: en
legacySlug: creating-data-entity
subcategory: 1l3IVVYwrrG5YOtdt7R2SN
---

Data entity is a representation of a set of information about a given concept. Each entity includes fields with information that makes up the entity.

For example, imagine the system that controls a library. This system controls books than can be borrowed by customers. So, we can notice that these 3 concepts (book, customer, borrowing) are entities that include information about each one of them. Thus, “data entity” is a set of information about a given concept.

![exemploBiblioteca](//images.contentful.com/alneenqid6w5/4WFfw93mlykqGCMSyAKcW2/27a0fd02aba4dd22df42a00fd506b75e/new-infographic.png)

Considering these concepts, it is possible to set up several data control scenarios in the Master Data. By default, the following data entities are considered: Customer, Address, Stores etc. You may create as many data entities as you wish in order to develop a customized environment according to the needs of your store.

<div class="alert alert-warning">
This article describes how Master Data v1 works. It is important that you evaluate which Master Data version meets the needs of your operation or is already in use.
 <ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Master Data version characteristics
 </a>
</li>
<li>
<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
Master Data v2
</a>
</li>
</ul>
</div>

## Understanding the types

Before developing the settings, you must define the type of data that will be used therein. Data entities include fields that, in turn, are of a certain type. This type identifies the characteristics of the information that will be stored in the field, and performs validations, filters and calculations according to the value selected.

The creation of fields includes the types listed below and the definition thereof:

- **Relationship:** Type of field for relationship with another entity. “Relationship” means displaying an entity’s information in another entity. For example, in the example of the library, the Customer Name may also appear in the Borrowing registration. To do so, you just have to establish a relationship between Borrowing and Customer by using the “nome” field registered in “Borrowing,” and selecting the Relationship type, within the settings, and the Customer field to be displayed must be selected; so the “name” field also has to be selected. 
- **User Login:** Field for automatic selection of the user logged in. This is used for registering the e-mail of users who perform an action in an entity record.
- **Integer:** Field that stores whole numbers, that is, without fractions. It stores whole numbers between -2147483648 and 2147483647.
- **Long:** Field type similar to integer, but with the possibility to store more numbers. Stores from `-2⁶³` to `2⁶³-1`.
- **Date:** Field type that stores date information.
- **Time:** Field type that stores time information.
- **Date and Time:** Field type that stores date and time.
- **Percent:** Field type that stores information in percentage format.
- **Currency:** Field type that stores information in currency format.
- **Decimal:** Field type that stores numbers with fractions set up for 2 digits. That is, this field will always store 2 digits as decimal places of the value entered.
- **URL:** Field type that stores URLs.
- **E-mail:** Field type that stores e-mails.
- **CEP:** Field type that stores a Postal Code.
- **Varchar 10:** Field type that stores numbers, letters and special characters. In this case, the number of digits is limited to 10.
- **Varchar 50** Field type that stores numbers, letters and special characters. In this case, the number of digits is limited to 50.
- **Varchar 100:** Field type that stores numbers, letters and special characters. In this case, the number of digits is limited to 100.
- **Varchar 750:** Field type that stores numbers, letters and special characters. In this case, the number of digits is limited to 750.
- **Text:** Field type that stores numbers, letters and special characters. There is no limit for characters in this case.
- **Boolean:** Field to store information as true or false. This field always has to be filled out with a default value, that is, it will always be filled out with `true` or `false`.
- **Auto Increment:** Field type that stores whole numbers and is automatically increased, that is, at each new record, the value of the previous record is increased by 1.
- **Telephone:** Field type to store information in phone number format.
- **Tag:** this type of field was discontinued.
- **Score2:** Field consisting of key, value and expiry date. E.g.: This can be used to control purchases made by each customer. It stores the value and quantity of purchases. [This field can only be filled out through API](https://developers.vtex.com/reference/master-data-api-v1-overview).
- **File:** Field type that stores a file. The maximum size accepted must be set up in the field’s options (gear icon button).
- **Flow:** this type of field was discontinued.
- **Tag Reference:** this type of field was discontinued.
- **CPF/CNPJ:** Field to store information on CPF and CNPJ.

## How to set up

1. In the VTEX Admin, access **Store Settings** > **Storefront** > **Master Data.**
2. In Master Data, click **Aplications** > **Data structure.**
3. Click on the **Entidade de dados** tab.
4. Click on the button **New**.
5. Fill in the sigla field with 2 letters that identify the data entity. These letters will be the initials of the field that identifies the record. E.g.: Sigla SP, identificador SP-0001.
6. Fill in with the name of the data entity that you intend to create.
6. Select the type of primary key, which can be as follows: **GUID**: sequence of numbers and characters that is unique and identifies a record; **Sequencial numérico:** sequence of numbers that is unique and identifies a record; **The primary key is informed by the customer in the ‘id’ attribute:** the identification field is not created automatically; it must be created manually and named as “**id**;”.
8. The flag “**permitir consultar todos os registros sem filtro**” has to be enabled in order to check the records without a filter or without authentication. Remember! This setting is critical because it enables all base records to be listed via API.
9. Complete the **Campos** tab with the fields that are not to be calculated automatically.
10. Enter in the **Nome** column the field identification value. Spaces or special characters are not allowed. E.g.: ClientName.
11. In the **Nome de exibição** column, enter the value to be shown in the form. E.g.: Client Name.
12. Select the type of field according to the options described in the section Understanding the types.
13. Click on the gear icon to open the settings options.
14. Select **“permitir nulo”** to enable the creation or editing of records with blank fields. In case this option is disabled, it will not be possible to create records with blank fields.
15. The **auditado** field will be discontinued, so all fields will be audited as a standard.
16. Select **“público para leitura”** in case it is possible to view data in these fields through the API, without the need for authentication.
17. Select **“público para escrita”** in case it is possible to enter data in these field through the API, without the need for authentication.
18. Select **“público para filtrar”** in case it is possible to filter data in this field through the API, without the need for authentication.
19. Select **“é buscável”** in case this field is used for searches in the form and through the API.
20. Select “**é filtro**” in case this field is used as a filter in the form and in the API.
21. Enter a description of the field.
22. Click on the **Campos Automáticos** tab to set up the fields in which values are to be calculated automatically.
23. Settings can be defined in the same way as the settings of non-automatic fields, except for the **Edição da fórmula** area, which must be filled in with the C# code that will establish the field calculation logics. You can also use dynamic expressions to insert values from other fields in the code. Additionally, you have to select the timing for the calculation.
24. To enter more fields, just click on the button **Novo campo** or **Novo campo calculado**.
25. After establishing the settings, click on the button **Salvar** or **Salvar e novo** (to continue to the creation of a new data entity).
26. Click on the disk icon to publish the data entity that was created or changed.

_After creating the data entity, you have to [create the form to insert, change and display data in your Master Data environment](/en/tutorial/creating-form-in-master-data)._
