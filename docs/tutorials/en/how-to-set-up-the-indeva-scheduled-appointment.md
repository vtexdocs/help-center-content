---
title: 'How to set up and use the Indeva Scheduled Appointment'
id: 4nWpoai0ChD2BKPCjcwoV0
status: DRAFT
createdAt: 2020-06-16T21:03:30.475Z
updatedAt: 2021-01-21T23:27:53.575Z
publishedAt: 
firstPublishedAt: 2020-06-16T21:22:44.494Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slug: how-to-set-up-the-indeva-scheduled-appointment
locale: en
legacySlug: how-to-set-up-the-indeva-scheduled-appointment
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

Indeva is a VTEX company already consolidated in the retails market for being one of the leading interface solutions between the end-customer and the physical store seller. The company has also created the Indeva Scheduled Appointment to meet today’s market demand for tools that enable more control and security in physical stores’ orders’ flow. 

Using this feature, your brand allows your customers to securely and reliably schedule customized visits to the nearest stores. A range of sales opportunities will be available for you via scheduled appointment.

In this article, you’ll see how this feature works and the step-by-step instructions to implement it.

<div class=”alert alert-info”>
Your store does not need to have a VTEX account to use Indeva Scheduled Appointment feature.
</div>

## Appointment form

The customer schedules the appointment using a form created by Indeva. Then you will have to embed the form on your store’s website using an iFrame.

Your customer’s schedule flow starts by choosing the physical store of his preference. In the image below, there is only one registered store. But you can register as many physical stores as you want.

![indeva1](//images.ctfassets.net/alneenqid6w5/3QXzMhoJN1qYZZ6c8mlfcB/4cf28e34420ac49bfcaa6f78a9b2951a/indeva1.png)

<div class="alert alert-info">
You can also provide your customers a link that takes them directly to a specific physical store form. You just have to add the store ID at the end of the URL. Hence, your seller can share your store’s link—for example, using a QR Code or on social media.
</div>

By clicking on a store, your customer is automatically redirected to the form. There they will find information about the store—defined in the implementation step—, and some fields to enter the information about the visit:

- Date and time
- Customer’s name
- Customer’s WhatsApp number
- Customer’s email address
- Message about the visit’s objectives
- Number of people in the visit

Finally, your customer must click on the Schedule appointment button. Now this visit will be in the appointment queue displayed in the seller’s app.

![indeva2](//images.ctfassets.net/alneenqid6w5/sD5kRl2jv7QxksElwMibF/5aa5ec8582c10891ee90bfcf556144aa/indeva2.png)

<div class=”alert alert-warning”>
For now, you will have to confirm the appointment manually in the store. Your customer does not receive automatic messages.
</div>

## Seller’s application

Indeva Store’s app organizes the appointment queue for every physical store. Sellers and managers can use it to control the next appointments and view the history of already done visits. 

![indeva3](//images.ctfassets.net/alneenqid6w5/71ZOQFSA8uKJKMdjrfsaX1/ae2b7836ab6e76efe752cfd3cdca0dd4/indeva3.png)

By selecting a specific appointment, the seller can see all appointment details: date and time of the visit, customer’s name, the message they sent, the number of people, and the customer’s phone number.

If you want to contact your customer through this screen, you just have to click on the Open WhatsApp button. Then you will be redirected to a chat with that specific customer on the messaging app.

![indeva4](//images.ctfassets.net/alneenqid6w5/6xnGRcIBINTYj7n9HDnTJ4/97e54074b046a5295936d66bd17761fe/indeva4.png)

<div class=”alert alert-info”>
You can install the app on multiple devices of the same store, but we recommend that your team use one app per store, not one per seller. 
</div>

## Implementation

### Registering physical stores in Indeva Admin

The first step to implement the Scheduled Appointment feature is to register the physical stores in the Indeva administrative dashboard.

There you must define the information to be displayed in your appointment form:

- Event description
- Duration of each appointment
- Maximum number of appointments at the same time
- Tolerance time (in days)
- Minimum time in advance for each appointment
- Store opening hours

<div class=”alert alert-info”>
Make sure every physical store is registered and individually configured.
</div>

### Implementing the online store form

<div class=”alert alert-info”>
This orientation is aimed to focus on stores that use the VTEX platform. In other platforms, the form implementation method is different.
</div>

To embed the iFrame with the form in your VTEX store, you have to create a new page containing this iFrame.

There are two options for creating this page:
- Via VTEX CMS.
- Using an installable component via VTEX IO (in this case, your store must use the VTEX IO structure).

To create a page in CMS, follow the steps below: 
In the VTEX administrative dashboard, access CMS and [create a page template](https://help.vtex.com/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/Y6dPEF6GzROQ8PuYKxrKe) with the iFrame code. [Associate this template with a layout](https://help.vtex.com/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/53N9sPOOOCqBRaoqmqTAOw).

For the stores that use VTEX IO, there is a component that allows users to enter iFrame in a store’s page. See how to implement it in [vtex.iframe component documentation](https://vtex.io/docs/components/all/vtex.iframe@0.2.0/).

### App installation

The app for store’s sellers and managers is available for both Android and iOS. Simply download and install the application from the Android or iPhone app stores.

> App name: __Indeva Store__

After installing and opening the app, the seller must inform a 10-digit token to synchronize the device and log in.

![indeva5](//images.ctfassets.net/alneenqid6w5/8K9WlmZVH3omGfWus5jke/ce2eb6f9b3b9ba58ba119d285184aca5/indeva5.png)

To receive the token, please contact the Indeva support team via:
- __Phone__: +55(21)3609-2830
- __Email__: suporte@indeva.com.br

If your store is an Indeva client, you can also contact them via chat in the Indeva platform’s administrative dashboard.
