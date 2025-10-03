---
title: 'Expressions and Variables Introduction'
id: 4MDzN6Z7Sau2Xt1eyyQ4Ik
status: PUBLISHED
createdAt: 2025-09-16T16:14:16.027Z
updatedAt: 2025-10-03T14:20:04.285Z
publishedAt: 2025-10-03T14:20:04.285Z
firstPublishedAt: 2025-10-03T14:20:04.285Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: expressions-and-variables-introduction
legacySlug: expressions-and-variables-introduction
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

The creation of a flow aims to fully connect a set of actions in order to achieve a certain result.

Variables are used to store the values and results of these steps, allowing data persistence. For example, the **Wait for Response** option below will generate a flow variable called name as the contact's response. Additionally, the variable will be used to save the data in the contact's Name field.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/expressions-and-variables-introduction_1.png)

Variables start with the symbol `@`. However, you can also move on to more complex expressions using `@(`. These expressions are modeled within specific syntaxes and are intended to handle data in order to manipulate the variables saved by the platform.

When using flow variables, it is also possible to specify subtopics you want. See the example below:

`@results.gender.category` returns the category where the contact's response was found;
`@results.gender.value` returns the complete response given by the user.

All variables and expressions show their actual value when the contact is active in the flow. If you enter a variable or expression incorrectly, the message will not be replaced, and the incorrect formula will be displayed to the user.

##### Other Variables
In addition to the `@results` expression, there are other commonly used expressions:
**`@contact`**
This expression is used to retrieve values saved in standard contact fields on the Weni Platform and is updated through the **Update Contact** card. Examples:
`@contact.name`: Contact's name
`@contact.first_name`: Contact's first name
**`@fields`**
This expression is used to retrieve values saved in non-standard contact fields on the Weni Platform, through the **Update Contact** card. Contact fields are often used to store general information about the contact, as these details can be retrieved in any flow using the **@fields** expression. Examples:
`@fields.age`: Contact's age
`@fields.email`: Contact's email, if it is being saved in a contact field instead of URN
**`@urns`**
This expression is used to retrieve the identifier of the contact's main channel on the Weni Platform (if the project is not anonymous). Examples:
`@urns.whatsapp`: WhatsApp number
`@urns.mailto`: Contact's email
**`@webhook`**
This expression is used to retrieve values returned from the last webhook call made in the flow. Examples:
`@webhook.results.cliente`: Client's name returned from the API, if it returns only one object.
`@webhook.results.0.cliente`: Client's name returned from the API. If it returns an array, you need to specify the position of the array in the expression using **0, 1, 2** , and so on.
To learn more about expressions, watch our [Ask Weni](https://comunidade.weni.ai/t/expressoes-e-variaveis/248) on this topic.
