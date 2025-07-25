---
title: 'Including order variables in email template'
id: fLMUCPArCYB9vcTZEZ6bi
status: PUBLISHED
createdAt: 2020-01-10T13:43:21.220Z
updatedAt: 2020-11-25T01:12:13.540Z
publishedAt: 2020-11-25T01:12:13.540Z
firstPublishedAt: 2020-01-13T14:38:37.451Z
contentType: trackArticle
productTeam: Post-purchase
slugEN: including-order-variables-in-email-template
locale: en
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

![EN Incluir variáveis do pedido no template de e-mail - 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/transactional-emails/including-order-variables-in-email-template_1.png)

The value entered for this property is just an example, but you can use it in the __HTML__ field so that when the email is sent, the customer will see the carrier actually responsible for delivering the order.

Note that the `courier` property is inside the `package` object. Therefore, you need to enter it as follows:

`{{package.courier}}`

![EN Incluir variáveis do pedido no template de e-mail - 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/transactional-emails/including-order-variables-in-email-template_2.png)

See that the example value ("Carrier Teste Courier S.A.") was inserted in the preview screen, below the __HTML__ and __JSON Data__ fields.
