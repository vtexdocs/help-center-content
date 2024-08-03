---
title: 'Creating relationships between Master Data entities using Admin'
id: 1qzbCit8SYXbKwrT5x2FfA
status: CHANGED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2024-06-06T19:36:29.525Z
publishedAt: 2022-10-17T19:11:39.513Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1ofpAV0ehUdsaOloLrmD40
slug: creating-relationships-between-master-data-entities-using-admin
locale: en
legacySlug: creating-relationships-between-master-data-entities-using-admin
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

## What is a relationship between Master Data entities?

A relationship between entities is a reference between documents that belong to different domains. This reference is defined by a field in one of these entities. In practice, this field will be filled with a document ID of the related entity, which is invisible to the user.

For example, consider a scenario in which you have two entities: Customers and Shopping List, and you want each customer to be able to have multiple shopping lists. Just create a field in the Shopping List entity to inform to which client it belongs.

If you are familiar with SQL, you can think of a relationship as a [foreign key](https://www.sqltutorial.org/sql-foreign-key/).

The Master Data already has some pre-defined relationships by default, as the Customer (CL) and the Address (AD) ones.

## How to create a relationship between entities?

First, to create a relationship, you must have two entities. Learn how to create them in our guide [How to create a data entity](https://help.vtex.com/tutorial/creating-data-entity--tutorials_1265). You must also create at least one field in a data entity and add it to the form. Check out our tips for that in the article [Creating a field in the Master Data](https://help.vtex.com/en/tutorial/how-can-i-create-a-field-in-master-data--frequentlyAskedQuestions_1829).

In the example below, there is an entity called `Lista de compras` (Shopping list) that will establish a relationship with the `Cliente` (Customer) entity. This relationship will allow the customer to have multiple shopping lists. However, a shopping list can only belong to a single customer.

1. In the Master Data, click on the **Aplicações** (Applications) tab.
2. Then click on the **Advanced settings** button.  
![Configurações Avançadas](https://images.ctfassets.net/alneenqid6w5/6wFQw4Qk1qjan3kff0slhB/f35565fd34625205f1e28006292fc110/Advanced_settings.png)
3. Select the option **Estrutura de dados** (Data structure). You will be redirected to the Dynamic Storage (DS).  
![Estrutura de dados](https://images.ctfassets.net/alneenqid6w5/24pLSQHFkz2TnB0VMU6yKk/04a32ffbeeedc0f615b2adb42038e676/Estrutura_de_dados.png)
4. In the Dynamic Storage, click on the **Data Entities** tab.
5. If you want to create a relationship in a new entity, click on **Add new** to create a new data entity. _If you want to create a relationship in an existing entity, locate it and click on the **Edit** button next to it. Go to step 7_.  
![Adicionar nova entidade de dados](https://images.ctfassets.net/alneenqid6w5/6RnSgkbz7LF0S8kwMHBReK/7895df7b2ac14d5fea332040a40977d8/Adicionar_nova_entidade_dados.png)  
![Editar entidade Lista de Compras](https://images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/4a9f852803c1c3cc391c572bd61ba8a9/Editar_entidade_Lista_de_Compras.png)
6. Configure the new entity by filling in the fields **Acronym** and **Name**, and add the fields of your choice. In this example, the entity will receive the name `Lista de compras`, the acronym `LC` and the `compras` field of `Varchar 750` type.
7. Add a `Relationship` type field and name it. In this example, it will be called `Cliente`.
8. Then click on the button **Edit** (gear icon) to configure it in the relationship field. 
9. In **Custom field type settings**, select the entity you want to refer to and the field that will be displayed in the relationship. In this example, the relationship will be established with the “Cliente” entity and shown in the “email” field.  
![Relacionamento entidade Lista de Compras](https://images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/41cb881fc6bfe93744e4a68cca8ea43a/Lista_Compras_Relacionamento.png)
10. Click on the **Save** button.
![Salvar entidade de dados](https://images.ctfassets.net/alneenqid6w5/3HaACxzYeRsUE5i8jLRGf/c96ed109ce54f70138489cf25cb87cd8/Salvar_entidade_de_dados.png)
11. Go back to the entity list. Remember that you must publish the entity with the relationship by clicking on the **Publish** button (floppy disk icon). You may also need to update the applications for the changes to be implemented. For that, go to **Aplicações** (Applications) and click on the **Reload applications** button.  
![Publicar entidade Lista de Compras](https://images.ctfassets.net/alneenqid6w5/4R9mLqBcx8Vq2JaurbmLkG/6ace79062a37f8a0ecd24f95a6ec2c2d/Publicar_entidade_Lista_de_Compras.png)  
![Master Data Reload applications](https://images.ctfassets.net/alneenqid6w5/6gud9kq3gpHbU9a23xzzSZ/e3e9f10a22b7567b1698342374f10bb6/Master_Data_Reload_applications.png)

## How to create a relationship between documents?

You can also apply relationships to specific documents of the data entity. The `Lista de Compras` relationship entity is our example once again; now, we will also consider that we have created some documents inside it. In addition, it will be necessary to change the form of a data entity. Learn how to do that in our article [Creating a field in Master Data](https://help.vtex.com/en/tutorial/how-can-i-create-a-field-in-master-data--frequentlyAskedQuestions_1829).

1. To relate the documents, add the relationship field to the form of the entity that contains the reference. You can set the field as a combo box to show all the available values. For more details, read our article [Creating a field in Master Data](https://help.vtex.com/en/tutorial/how-can-i-create-a-field-in-master-data--frequentlyAskedQuestions_1829#crm).

2. Select a value (in this case, the client to be related to this shopping list).
![Selecionar relacionamento de documento Master Data](https://images.ctfassets.net/alneenqid6w5/6Ss4S4Be4qRqNKLWBz51KF/a913e0402c87456ab9ca07e7431d4eac/Selecionar_relacionamento_de_documento_Master_Data.png)
3. Click on **Salvar** (Save).

After adding the field to the table, check out the values that were defined. 
![Tabela de relacionamento de documentos Master Data](https://images.ctfassets.net/alneenqid6w5/43607tgaCHpBOeKQ3w9VUd/5658949f4c0a72a5ed7bdd9af7819896/Tabela_de_relacionamento_de_documentos_Master_Data.png)

## How to add filters to relationship fields?

Relationships are stored in the system as document IDs. So, suppose you enter the value of the relationship field as a filter in the form. In that case, the result will return only the ID values of the referred documents—instead of the values of the field selected for each document. You can see this result in the pictures below. For more information, read our article on [How to filter data in Master Data](https://help.vtex.com/en/tutorial/filtering-data-on-master-data--tutorials_778).

![Selecionar filtro relacionamento](https://images.ctfassets.net/alneenqid6w5/Kh7PNTktepTfJn4s5AQlI/cc64d40a1bcfcd5b508dae36b7ee80cd/Selecionar_filtro_relacionamento.png)

![Filtro relacionamento ID](https://images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/a9e179027658143481e6a6f3444e24cd/Filtro_relacionamento_ID.png)

If you want to see the field values instead of their IDs, you can filter using an automatic field. See the instructions below:

1. In the Master Data, go to **Aplicações** (Applications) > **Advanced settings** > **Estrutura de dados** (Data structure) to access the Dynamic Storage.
2. Access **Data Entities**.
3. Click on the **Edit** button next to the entity that contains the relationship (in this case, `Lista de Compras`). 
![Editar entidade Lista de Compras](https://images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/01edd05338b039279672d9cfc4a49164/Editar_entidade_Lista_de_Compras.png)
4. Select the **Automatic fields** tab.
5. Click on **New field**.    
![Relacionamento automatic fields](https://images.ctfassets.net/alneenqid6w5/5StRAtwfrzUWnSzOLrHJqM/603a35102ef272d3c5b633eaa3e757e7/Relacionamento_automatic_fields.png)
6.  Fill in the **Name**, **Display Name**, and **Type** fields. In this example, they are `emailCliente`, `E-mail cliente`, and Varchar 50.
7. Select the gear icon to adjust additional settings.   
![Name automatic field](https://images.ctfassets.net/alneenqid6w5/4lAatUDVlXMOpNLKX1kx0J/9aed2f322c02ab0c3991f1d28c199676/Nome_automatic_field.png)
8. Enter additional settings to the formula, and select the field value, as in the picture below. 
![Configurar relacionamento automatic fields](https://images.ctfassets.net/alneenqid6w5/1cmXmQDZaepVddzoExEl1r/8605aa25dbc22ba6d28674472fc80232/Configurar_relacionamento_automatic_fields.png)
9. Click on **Validate**.
10. A new window will open and you’ll be asked to add an email address. Enter a generic email address and click **Ok**.   
![Validar automatic field](https://images.ctfassets.net/alneenqid6w5/5nLfBVHL6YfedIALJsf6QX/127bfc77d276c61ccd0346bcb8d6e6e2/Validar_automatic_field.png)
11. Subsequently, a warning will be displayed indicating that the formula is valid, as in the image below. Then click **Ok**. 
![Fórmula válida automatic field](https://images.ctfassets.net/alneenqid6w5/79A6B2D9TMjkpkj6gkez9Y/ee9e905339c9cbb8343a8809fb38a9e6/F__rmula_v__lida_automatic_field.png)
12. Click on **Save**.

After following the steps above, the filter will be applied to the relationship. In the entity form (`Lista de Compras`), add the new field to the filter after updating the records.
![Selecionar filtro relacionamento valor](https://images.ctfassets.net/alneenqid6w5/6KQwyXBZ0VaK2srXFiupmv/731c3fa19a7a8c3d9cf91a3733d86c7c/Selecionar_filtro_relacionamento_valor.png)

Now the filters are named with values instead of their IDs.
![Filtro relacionamento valor](https://images.ctfassets.net/alneenqid6w5/2mcBmzqxJLm7L3GrZuFeVa/5c63307856159af60995094fa6e99f42/Filtro_relacionamento_valor.png)

