---
title: 'Variables Glossary'
id: MOTwhIJlY251TLzK3UUPl
status: PUBLISHED
createdAt: 2025-09-16T16:20:16.591Z
updatedAt: 2025-10-03T14:20:04.252Z
publishedAt: 2025-10-03T14:20:04.252Z
firstPublishedAt: 2025-10-03T14:20:04.252Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: variables-glossary
legacySlug: variables-glossary
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### Overview

Variables are created to store values on the platform, allowing data to be saved even after a flow has ended.

To use a variable, you should type `@`, and the expression will be replaced by the actual value of the variable, provided it is properly created.

Below, we will list how to reference all types of variables available on Weni Platform:
  * Contacts and Contact Fields
  * Results and Flows
  * Globals

#### Contacts and Contact Fields

`@contact`: Variables to save values directly related to the contact. Below is a list of commonly used sub-variables:
  * `@contact.name`: Full name of the contact.

  * `@contact.first_name`: First name of the contact.

  * `@contact.urns`: List of URNs for the contact. It can also be accessed with **@urns**.

  * `@contact.uuid`: Unique ID of the contact.

  * `@contact.created_on`: Date when the contact was created.

  * `@contact.language`: Preferred language of the contact.

  * `@contact.channel`: Preferred channel name of the contact.

  * `@contact.groups`: Names of the groups the contact is part of.

  * `@contact.fields`: Custom contact fields. To access them, use `@contact.fields.field_name` or `@fields.field_name`.

#### Results and Flows

`@results`: Variables to save values directly related to flow results. To access a result, use `@results.result_name`. Below is a list of commonly used sub-variables:
`@results.result_name.category`: Category/route to which the result belongs.

`@results.result_name.value`: Exact text value of the result.

`@results.result_name.extra`: Non-text values a result may have, such as attachments or request information.

`@input`: Variables containing the input value from the contact. Below is a list of commonly used sub-variables:
`@input.text`: Text value entered by the contact during their last interaction with the platform.

`@input.attachments`: Attachments submitted by the contact in their last interaction.

`@child`: Allows you to reference all variables from the child flow, i.e., the flow called by the **Enter Flow** action card, within the parent flow. If you want to access a result from the child flow after its completion, for example, use `@child.results.result_name`. Using another **Enter another Flow** card will overwrite the value of `@child`.

`@parent`: Allows you to reference all variables from the parent flow, i.e., the flow that called the **Enter another Flow** action card, within the child flow. If you want to access a result from the parent flow during the execution of the child flow, use `@parent.results.result_name`.

#### Globals

Global variables, or **globals** , are variables that can be accessed from any flow at any time, but their value cannot be modified during the flow's execution. They are widely used when the same information needs to be sent to multiple flows, and later that value needs to be updated practically across all the flows where it is used.

To create a global, go to the general settings of your organization and scroll to the bottom of the page, where you will find the section for globals.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/variables-glossary_1.png)

After that, click on **Create Global** , enter the name of the global along with its value.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/variables-glossary_2.png)

Thus, it will become accessible in any flow using the variable `@globals.global_name`.
