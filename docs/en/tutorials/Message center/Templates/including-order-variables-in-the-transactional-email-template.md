---
title: 'Including order variables in the transactional e-mail template'
id: 694Bn8eOeAWYQeaWGaOISe
status: ARCHIVED
createdAt: 2017-12-19T14:09:17.388Z
updatedAt: 2022-09-20T15:42:07.435Z
publishedAt: 
firstPublishedAt: 2017-12-19T17:49:00.650Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: including-order-variables-in-the-transactional-email-template
locale: en
legacySlug: including-order-variables-in-the-transactional-email-template
subcategoryId: 4D5LrWwlHGmOWMomOaaGee
---

In the Message Center, under the __Templates__ tab, you will find the transactional email templates sent to your clients.

Some of them are fired when the status of an order changes. For example:
- __Confirmação de pedido ("Order Confirmation")__: E-mail sent when the order was made successfully.
- __Pedido Faturado ("Billed Order")__: Email sent when the order is billed.
- __Pedido Cancelado ("Delivery canceled")__: Email sent when the order is canceled.

You can customize all of the Message Center templates, and you have at your disposal a series of variables that allow you to dynamically add data to the email.

These variables are JSON properties that are in the __JSON Data__ field and can be used in the email's HTML. Simply insert them into double keys, using the following format: `{{variable}}`

### Example

>⚠️ Examples of JSON Data will only appear in the templates when you come up with the desired action in your store. If you have not transacted an order, a recurrence, or any other action, JSON Data will be blank.

Let's say you want to enter the name of the carrier in the "product sent" email.

To do this, enter the "product sent" template ("pedido enviado") and, in the __JSON Data__ field, search for the `courier` property.

![templateCourierMC](https://images.contentful.com/alneenqid6w5/5bUVtrYTugUiqKimU6COEK/a21db5630ee6febbd43493b2357c8172/templateCourierMC.png)

The filled-in value for this property is just an example, but you can use it in the __HTML__ field so that when the email is sent the customer sees the carrier that is actually responsible for the order delivery.

Note that the `courier` property is inside the `package` object. Therefore, you need to enter it as follows:

`{{package.courier}}`

![courier3](https://images.contentful.com/alneenqid6w5/2yzopAVuU46I2UICEQ0y2S/69e4a43fa202c90cb9996f4a3eea19aa/courier3.png)

As you see, the sample value ("Transportadora Teste Courier S.A.") was inserted in the preview screen, below the __HTML__ and __JSON Data__ fields.

### Other order email variables

Among the properties of order JSONs that can be used as variables in transactional email templates are:

- `courier`: Courier
- `invoiceNumber`: Invoice number
- `invoiceValue`: Invoice value
- `invoiceUrl`: Invoice URL
- `issuanceDate`: Date of issue
- `trackingNumber`: Order tracking number
- `invoiceKey`: Invoice access key
- `trackingUrl`: Order tracking URL (informed by the carrier)
