---
title: 'How to structure Master Data entities to store B2B sales data'
id: 7vHtMxXLc9oYnEfajjtTqL
status: PUBLISHED
createdAt: 2020-05-29T12:32:31.968Z
updatedAt: 2021-11-24T13:35:52.020Z
publishedAt: 2021-11-24T13:35:52.020Z
firstPublishedAt: 2020-05-29T12:50:42.308Z
contentType: tutorial
productTeam: Master Data
author: 127RQ7SUoFfyTh5gbXUpdM
slug: how-to-structure-master-data-entities-to-store-b2b-sales-data
locale: en
legacySlug: how-to-structure-master-data-entities-to-store-b2b-sales-data
subcategoryId: 5tSNDlvmik8gGuKw2goW4q
---

Through [Master Data](https://help.vtex.com/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw) - the VTEX platform’s module that allows the creation of database architectures - it is possible to collect, store and make available data in various formats for the customers and administrative users of a store. There are two ways to configure it:
- By using a Content Management System (CMS) internal to the store's administrative dashboard.
- By sending requests to [Master Data’s API](https://developers.vtex.com/reference/master-data-api-v2-overview).

The stored data is described by [Data Entities](https://help.vtex.com/tutorial/creating-data-entities--tutorials_1265), which are representative models that allow Master Data to validate the information received and create forms. The system allows the creation of [connections between the data](https://help.vtex.com/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48) of different entities, in addition to providing a series of automation possibilities.

An example is the [Triggers](https://help.vtex.com/tutorial/criando-trigger-no-master-data--tutorials_1270) that can be activated by changes in stored data and can have effects such as sending emails and other changes to that data. Learn more about all the possible configurations of this module in [Master Data’s official documentation](https://help.vtex.com/subcategory/configuracoes-de-master-data--5tSNDlvmik8gGuKw2goW4q).

## Modeling sales structures and goals

One of Master Data’s recurring applications is the __representation of the sales structures of a B2B operation__. Stores have several sales representatives with different functions, and it is of great value to be able to track their sales, in addition to establishing and monitoring their goals. Here are some examples of Data Entities that can be created or customized for B2B applications.

### Representatives

A table of representatives or Autonomous Commercial Representatives can be useful to monitor those that make sales on behalf of a B2B operation, in addition to allowing better-filtered reports.

Here are some relevant fields you can add to this table:
- Representative’s name and email
- Supervisor’s name and ID
- Represented brands
- Acting region
- Are you an administrative user?
  - Administrative user’s ID

### Supervisors

A table of supervisors allows you to associate each sales representative or Autonomous Commercial Representatives with a supervisor who will manage their work, in addition to providing control over that supervisor's data.

Here are some relevant fields you can add to this table:
- Supervisor’s name
- Supervisor’s email
- Phone number
- Administrative user’s ID

### Customers

Every store has a Data Entity that configures the table of customers. You can add fields to that entity by following the walkthrough in the article [Creating a field in Master Data](https://help.vtex.com/tutorial/how-can-i-create-field-in-master-data--frequentlyAskedQuestions_1829). This way, when a customer visits a store, the front-end has access to relevant information regarding their position in the sales structure and can provide a custom experience. In addition, it is possible to limit the access to the store to only approved customers, as explained in the article [Configuring B2B on VTEX](https://help.vtex.com/tutorial/configurando-b2b-na-vtex).

Here are some relevant fields you can add to this table:
- Representative’s ID
- Is it a company?
- Company’s data
  - Company registration number
  - Legal business name
  - Trade name
  - Contact number
  - State registration
- Registration approved?
- Sales channel

### Goals

A table of goals allows controlling the sales goals of representatives and Autonomous Commercial Representatives, and you can define policies for such goals, such as the active goal cycle, in addition to specifics such as active geographic areas and goals by brands and products.

Here are some relevant fields you can add to this table:
- Representative’s ID
- Cycle region
- Cycle start date
- Cycle end date
- Goal value
  - By product
  - By Brand
- Successful sales value per cycle
- Canceled sales value per cycle

## Data entry in Master Data

In addition to providing a powerful data structure’s modeling tool, Master Data’s content management system, accessed through VTEX’s administrative dashboard, offers several ways to fill the tables that structure the content.

### Forms

Master Data’s CMS allows you to configure forms to fill in the modeled tables. It is useful for information that will be entered and edited by administrative users, since it is possible to limit usage through [roles](https://help.vtex.com/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).

To learn how to configure these forms, check out the article [Creating forms in Master Data](https://help.vtex.com/tutorial/creating-form-in-master-data--tutorials_1047). It is also possible to create an Application, which is a grouper of forms, following the steps detailed in the article [Creating applications in Master Data](https://help.vtex.com/tutorial/creating-an-application-in-master-data--tutorials_1115).

### Front-end or API

Forms can also be submitted via front-end for customers to fill them, as described in the article [Creating Contact Us forms using Master Data](https://help.vtex.com/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614). Another way to access data on the front-end or in different integrations is through [Master Data’s API](https://developers.vtex.com/reference/master-data-api-v1-overview).

### Triggers

Events in a Master Data’s data entity can trigger changes to the data. For more on this, check out the article [Creating triggers in Master Data v1](https://help.vtex.com/tutorial/criando-trigger-no-master-data--tutorials_1270).

### Bulk import

It is also possible to fill tables in bulk by uploading spreadsheets, as explained in the article [Importing data into Master Data](https://help.vtex.com/tutorial/importing-data-into-master-data--tutorials_1135).

## Learn more

- [What is Master Data](https://help.vtex.com/tutorial/what-is-master-data--4otjBnR27u4WUIciQsmkAw)
- [Master Data API](https://developers.vtex.com/reference/master-data-api-v2-overview)
- [Creating data entities](https://help.vtex.com/tutorial/creating-data-entities--tutorials_1265)
- [Creating relationships between data entities](https://help.vtex.com/tutorial/creating-relationships-between-data-entities--6TdIa6Q2IgWYUu2wsYIG48)
- [How to create a trigger in Master Data v1](https://help.vtex.com/tutorial/criando-trigger-no-master-data--tutorials_1270)
- [Creating a field in Master Data](https://help.vtex.com/tutorial/how-can-i-create-field-in-master-data--frequentlyAskedQuestions_1829)
- [How to set up B2B with VTEX](https://help.vtex.com/tutorial/configurando-b2b-na-vtex)
- [Creating a form in Master Data](https://help.vtex.com/tutorial/creating-form-in-master-data--tutorials_1047)
- [How to create an application in Master Data](https://help.vtex.com/tutorial/creating-an-application-in-master-data--tutorials_1115)
- [Creating a Talk to Us form using Master Data](https://help.vtex.com/tutorial/criar-formulario-de-fale-conosco-usando-master-data--frequentlyAskedQuestions_614)
- [How to import data into Master Data](https://help.vtex.com/tutorial/importing-data-into-master-data--tutorials_1135)
