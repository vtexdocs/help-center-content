---
title: Including order variables in email template
id: fLMUCPArCYB9vcTZEZ6bi
status: PUBLISHED
createdAt: 2020-01-10T13:43:21.220Z
updatedAt: 2020-11-25T01:12:13.540Z
publishedAt: 2020-11-25T01:12:13.540Z
firstPublishedAt: 2020-01-13T14:38:37.451Z
contentType: trackArticle
productTeam: Post-purchase
slug: including-order-variables-in-email-template
trackId: 6IkJwttMw5T84mlY9RifRP
trackSlugEN: transactional-emails
---

In **Message Center**, within the __Templates__ tab, you will find the transactional email templates sent to your customers.

You can customize all Message Center templates, and there's a number of variables that allow you to dynamically add data to the email.

These variables are JSON properties in the __JSON Data__ field and can be used in the email HTML. Just insert them into double braces using the following format: `{{variable}}`

### Example

<div class="alert alert-warning">
JSON Data examples will only appear in templates when you complete the desired action in your store. If you have not transacted an order, recurrence or any other action, JSON Data will appear blank.
</div>

Let's say you want to enter the carrier's name in the order sent email.

To do this, go to the order sent template and, in the __JSON Data__ field, look for the `courier` property.

![EN Incluir variáveis do pedido no template de e-mail - 1](https://images.ctfassets.net/alneenqid6w5/3lkYWEKSwjz99oSGDCpapE/338873a8e5b2558b0fa0df9c2bc3b4c6/EN_Incluir_vari__veis_do_pedido_no_template_de_e-mail_-_1.png)

The value entered for this property is just an example, but you can use it in the __HTML__ field so that when the email is sent, the customer will see the carrier actually responsible for delivering the order.

Note that the `courier` property is inside the `package` object. Therefore, you need to enter it as follows:

`{{package.courier}}`

![EN Incluir variáveis do pedido no template de e-mail - 2](https://images.ctfassets.net/alneenqid6w5/5MhBjWokAHVHZKXgvswn6X/cf78d7e9f4408c7eec101e5768aaef4b/EN_Incluir_vari__veis_do_pedido_no_template_de_e-mail_-_2.png)

See that the example value ("Carrier Teste Courier S.A.") was inserted in the preview screen, below the __HTML__ and __JSON Data__ fields.
