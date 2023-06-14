---
title: How to create a trigger in Master Data v1
id: tutorials_1270
status: PUBLISHED
createdAt: 2017-04-27T21:56:49.666Z
updatedAt: 2022-12-14T18:27:30.828Z
publishedAt: 2022-12-14T18:27:30.828Z
firstPublishedAt: 2017-04-27T23:03:50.015Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: creating-trigger-in-master-data
legacySlug: creating-trigger-in-master-data
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

<div class="alert alert-info">
This article talks about Master Data v1. If you want to use Master Data v2, check out the steps explained in <a href="https://help.vtex.com/en/tutorial/setting-up-triggers--54eVOFGhS0EWyAUieoqKWo">this article</a>.
</div>

Conceptually, the “Trigger” is a programming feature that is executed whenever its linked event takes place. In Master Data, the trigger is the setup of one or more events when a given situation takes place. This situation is set up based on several variables.

This enables the use of certain data automation and controls, increasing the efficiency of your data management. In other words, simply speaking, triggers are functionalities that enable the scheduling of actions if an event takes place.

1. A data entity contains data from all stores
2. A new registry is added to this entity
3. A configured trigger sends an email providing all customers with this update

Suppose that certain actions are scheduled to take place when a given condition is met. Accordingly, any information recorded in MasterData may trigger innumerable actions, as required. Triggers have some important characteristics, as described below:

- They relate to a data entity;
- They are called automatically;
- They cannot be called directly;
- They set off several actions;
- They enable the creation of recursion scenarios;
- They may impact the handling of data by the entity, due to the previous characteristic.

Triggers are set up through a 4-step process. Each step is detailed below:

1. Settings of the action that will activate the trigger. You have to determine which action must be followed by another action. This setting is divided in two parts: **condição** and **filtros adicionais**. Condição (condition) is the action that sets off the trigger (for example, a registration), while filtros (filters) are the specifications that must be met so that the return action can be executed, such as a registration that is carried out through a newsletter form, rather than upon the completion of a purchase. In this case, the condition of the trigger would be as follows: “Whenever a record is included”, and the additional filters include an “origin” field filtering by “newsletter.” So, whenever a new registration is made, the trigger checks whether the customer registered through the newsletter and, only in this case, it would carry out the action that was set up for this purpose.
2. Trigger timing. It is possible to set up several sending actions separated by time intervals. You may also schedule the trigger according to the date of another field. For example: the field “Maturity Date” is included in the registration of a “Product” entity; it is required that, 1 month before this date, a notice is sent by API to another system. In this case, the trigger timing will be the “Maturity Date” less 1 month.

Actions that will be performed when a record meets the condition of the trigger and the filters. Here, you must set up all actions that will be executed when the record that met the conditions has also met the filters and reached the date established in the schedule. These actions may include the sending of e-mails, comments, changing other fields and other possibilities, which are detailed below: Real example:

- **Condition – **The Checkout attribute is changed.
- **Additional filter – **Checkout is equal to Completed
- **Actions in positive case – **Change the Bonus field (score type) by including a bonus tag with value 10 and valid for 30 days.

In this case, this is a situation that seeks to score a field at each new purchase made by the customer. That is, at each order made by the customer, 10 points are added to the Bonus field. Supposing that the bonus is granted when this field reaches 40 points, another trigger is required to check this bonus and grant the promotion. For this purpose, a second trigger will associate the customer with a cluster that is already set up in a promotion. See below the settings of the second trigger:

- **Condition** - The Checkout attribute is changed**.**
- **Additional filter ** - The bonus is equal to or greater than 40.
- **Actions in positive case** – Change the ClusterBônus field to “true.”

Actions that will be performed when a record meets the condition of the trigger but not the filters. This option is exactly the opposite of the option above. It will be performed only when the record that met the condition of the trigger **does not** meet the additional filters. Real example:

**Condition** – Addition of a new record in the Extended Registration
**Additional filter** – The sex is equal to “female”.
**Actions in positive case** – Sending of e-mail with offers from the women’s department.
**Actions in negative case** - Sending of e-mail with offers from the men’s department.

## How to set it up

1. Go to the DynamicStorage (https://*YOURSTORE*.ds.vtexcrm.com.br);
2. Click on the **Trigger **tab;
3. Click on the **Novo **button;
4. Enter the trigger Name;
5. Give an e-mail address to receive a notice in case the execution fails;
6. Select the [data entity](/tutorial/criando-entidade-de-dados/ "data entity") that will activate the trigger;
7. After selecting the data entity, the other fields of the settings will be displayed;
8. Select a status for the trigger;
9. Continue to set up the tabs as below:

### Conditions

Here, you will define the conditions that will activate the event(s) set up in the trigger. These settings are described below:

#### Condition of the trigger

- **The value of an attribute was changed** – this means that, should there be any change in the value of the field given, regarding any record, this trigger will be activated.
The field to be filtered must be given. E.g.: When the “E-mail” field is changed, the trigger should be set off – give the “E-mail” field in the “Give the attribute” field.
- **An event was raised** – This type was discontinued.
- **A record was changed **– this means that when a record is changed in any field, this trigger will be activated.
- **A record was commented **– this means that, when a record is commented, this trigger will be set off.
- **A record was entered** – this means that, when a record is entered, this trigger will be set off.
- **A record was removed **– this means that, when a record is removed, this trigger will be set off.

#### Additional filter

**Add group** – creates groups that contain filters. Each of these groups may relate to other groups in order to create more complex filter layers.
![relacaoGrupos](//images.contentful.com/alneenqid6w5/6n2ipjsapUYyG8quIucIke/1b789ceed1f6ea993096f0d3c857b114/relacaoGrupos.png)

**Enter filter** – this can be created inside the most recently created group, or without the need for a group. In the set model, a filter always interacts with other filters through the “AND” and “OR” options for each one of them.
The fields and values accepted must be selected in order to activate the trigger.
![filtroTrigger](//images.contentful.com/alneenqid6w5/go7XW0mqWsuA4ygwYsoMS/cf6c5ef321a8d39e16a09d30c2ca1245/filtroTrigger.png)

<div class="alert alert-info">
Master Data v1 does not allow retries configuration, unlike Master Data v2.
</div>

#### Scheduling

This defines when the trigger should be activated. It can be immediately, through the option “Execute as soon as possible;” scheduling for a calendar date through “Schedule for a specific date;” or a future value, starting from the current date or the date of some date field, using minutes, hours, days, month and years through the option “Schedule the execution for a dynamic date.”

### Actions in positive case

The events to be triggered in case the record that triggered the event meets the conditions of all additional filters, will be set up.

#### Changing an attribute

This action changes the record field that activated the trigger. The field (attribute) that must be changed and the formula to be used must be given. The field “Expressões dinâmica” displays the values that should be used in the formula in case you intend to use the values given in the record fields or fields of related records (if any). “Formula” is a C# code that returns a value of the same type defined in the data entity for the field.
![fórmula](//images.contentful.com/alneenqid6w5/F3qRfRkScKWAYoCas4GCe/36f27cb6e71425b80340e1221251d3d2/f_C3_B3rmula-1.png)

The Validar button will compile the code in the formula field to check whether or not it is valid, showing the value that will be returned to the field.
![validacaoFormula](//images.contentful.com/alneenqid6w5/3Fjh4Q1hVCqkY0yAmMSmOM/67564a371055792fd5c0f40efed7670b/validacaoFormula.png)

#### Entering a comment

Includes a comment in the record that activated the trigger. Type in the comment that will be entered.

#### Sending an email

Sends an e-mail for fixed or dynamic (included in the record) addressees. The e-mail to be sent is fully customized, and it may be a text, HTML, or even the contents of an URL. Attachments can also be included, and the “tag válidas” field shows how to enter values in record fields.
![email](//images.contentful.com/alneenqid6w5/KsQUtktQoECEMiKEY6EU8/89d9d75e4cfdb2fd539dece5a542f8ce/email.png)

#### Assigning points to the Score field

A score field includes a special type of data about 3 information: Key, Points and Effectiveness. You may establish a value for each of these points and save it in a Score-type field. 

#### Generating a QRCode

generates a QRCode with the content entered. This QRCode must be entered in some file-type field of the record.

More than one action can be set up, but we recommend including up to 3 actions per trigger. The actions have to be set up according to a priority, or, in case of failure in the settings of an event, the subsequent events will not be triggered.

#### Sending an HTTP request

Send an HTTP request and save the response information in the Master Data.

Fill in the **Request data** section with the information of the request to be sent. In the **Response action** section, you can indicate how the response information should be saved in the Master Data.

![Master Data v1 send http request screenshot](https://images.ctfassets.net/alneenqid6w5/5uIXuDHBecTzuJxi0mnjWv/74bc888f1f8b2a901e642d9809207fd5/mdv1_trigger_http_request.PNG)

To configure the **Response action**, select the desired data entity and set the corresponding JSON path in the response for each field to be saved.

### Actions in negative case

Some events are set off when a record does not go through the additional filters of the trigger. The same events of the “Actions in positive case” can be set up.

<!--
## For example:

Watch the video indicated below, which shows the settings for the following scenario: Sending of an e-mail welcoming the new customers of the store. Except if the customer is included in a cluster. In this case, the initial approach to customers will be made by phone. So, “Cluster 1” customers should not receive a welcome e-mail.

<iframe width="840" height="473" src="https://www.youtube.com/embed/A6UrxcYIq5E?feature=oembed" frameborder="0" allowfullscreen></iframe>
-->

## Examples

- [Setting up Cart Abandonment (Trigger)
](https://help.vtex.com/en/tutorial/configurando-carrinho-abandonado--tutorials_740)
