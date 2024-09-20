---
title: 'Creating a Talk to Us form using Master Data'
id: frequentlyAskedQuestions_614
status: ARCHIVED
createdAt: 2019-01-24T20:45:56.562Z
updatedAt: 2021-06-10T20:28:29.450Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:16.176Z
contentType: tutorial
productTeam: Master Data
author: authors_31
slug: create-a-talk-to-us-form-using-master-data
locale: en
legacySlug: create-a-talk-to-us-form-using-master-data
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

The purpose of this article is to explain how to create a Talk to Us (“Fale Conosco”) form using Master Data..

### Adjustments necessary in the Master Data (Dynamic Storage)

**Create a data entity CONTATO**

Each contact will be stored in a new entity (related to the Client) in Master Data. This entity is defined below.

Code: _CO_
Name: _Contato_
Type of primary key: _Gerar um sequencial numérico (Default)_
Fields:

- _client | Cliente | Relationship | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221; / &#8220;Entidade de Dados para relacionar = Cliente&#8221; / &#8220;Campo relacionado para visualização = email&#8221;_
- _description | Descrição | Text | &#8220;Público Para Escrita&#8221;_
- _type | Tipo | Varchar 100 | &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221; / &#8220;É filtro&#8221;_

After creation, don&#8217;t forget to post the entity in the listing.

**Change data entity CLIENT**

Since the Talk to Us form also uses Client data, some fields for this entity need to be changed. The necessary changes are.

Fields:

- firstName | Nome | Varchar 50 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- lastName | Sobrenome | Varchar 100 | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;É buscável&#8221;
- email | Email | Email | &#8220;Publico Para Leitura&#8221; / &#8220;Público Para Escrita&#8221; / &#8220;Público Para Filtrar&#8221; / &#8220;É buscável&#8221;
- homePhone | Telefone Residencial | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;
- phone | Telefone | Telephone | &#8220;Permitir Nulo&#8221; / &#8220;Público Para Escrita&#8221;

After the change, don&#8217;t forget to post the entity in the listing.

**Create TALK TO US trigger**

When a customer contacts the store using the Talk to Us form, the system should be triggered to send out emails. The trigger for this purpose is as follows.

Name: _Fale Conosco_
Data entity: _Contato_
Trigger condition: _A registration was entered_
Scheduling: _Execute as soon as possible_
Action if positive: _Send an email (We suggest sending one to the customer and another to the store owner__)_

**Email to store owner &#8211; suggestion and template:**

_Hi,&lt;br /&gt;&lt;br /&gt;_

_The Support Store has just received a new contact on the Talk to Us form.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Contact Information:&lt;/b&gt;&lt;br /&gt;_
_First name: {!client.CL.firstName}&lt;br /&gt;_
_Last name: {!client.CL.lastName}&lt;br /&gt;_
_Email: {!client.CL.email}&lt;br /&gt;_
_Phone No.: {!client.CL.homePhone}&lt;br /&gt;_
_Cell phone: {!client.CL.phone}&lt;br /&gt;_
_Type: {!type}&lt;br /&gt;_
_Description: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_To reply to the customer, just reply to this email.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Support Store Team&lt;/b&gt;_

**Email to customer &#8211; suggestion and template:**

_Hi, {!client.CL.firstName},&lt;br /&gt;&lt;br /&gt;_

_Thanks for contacting us. Our team will be in touch with you very soon.&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt;Contact Information:&lt;/b&gt;&lt;br /&gt;_
_First name: {!client.CL.firstName}&lt;br /&gt;_
_Last name: {!client.CL.lastName}&lt;br /&gt;_
_Email: {!client.CL.email}&lt;br /&gt;_
_Phone No.: {!client.CL.homePhone}&lt;br /&gt;_
_Cell phone: {!client.CL.phone}&lt;br /&gt;_
_Type: {!type}&lt;br /&gt;_
_Description: &lt;br /&gt;{!description}&lt;br /&gt;&lt;br /&gt;_

_&lt;b&gt; Support Store Team&lt;/b&gt;_

**Creation of Talk to Us template on Portal Manager**

After completing this configuration, you will have to create a template in the Portal Manager with the form, which will be responsible for submitting the information to the Master Data API. We suggest you create a landing-page for this function (e.g.: /faleconosco).

To load the form on the template you have created, use the plug-in attached to this article and follow the instructions below.

The plug-in has been developed to help you install the form on the template. To use it, you do not need to define any HTML structure, just the element that will receive the form. You will also have to give the name of the store in the configuration, as well as the data entity code, which is essential for integrating with the Master Data by API.

**Settings Attributes:**

- storeName: _Indicates the name of the account used in the MasterData API_
- dataEntity: _Indicates the code of the data entity used in the MasterData API_
- htmlElementId: _Indicates the ID of the HTML element which will receive the form_
- messageLoading: _Form loading message (on saving)_
- messageValidation: _Form validation message_
- messageSuccess: _Success message_
- messageError: _Error message_

**Plug-in dependencies:**

- jQuery
- Bootstrap

[For more details access the attached example](//assets.contentful.com/alneenqid6w5/4rfOv1xQoEuwWYS0sq24QM/3099aa480d85a9ca4d2ce50dfef64a68/contactMasterData.zip "For more details access the attached example").

__Important__: This plug-in has been developed to help you create the Talk to Us form using Master Data. VTEX **DOES NOT** offer support for this extension and its code is open, so it can be altered and adapted.
