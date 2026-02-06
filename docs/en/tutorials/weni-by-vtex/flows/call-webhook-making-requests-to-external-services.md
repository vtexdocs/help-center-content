---
title: 'Call Webhook: Making requests to external services'
id: 2KRA2c41CskapG2IrqMhnO
status: PUBLISHED
createdAt: 2025-09-17T14:00:42.361Z
updatedAt: 2025-10-03T14:20:03.772Z
publishedAt: 2025-10-03T14:20:03.772Z
firstPublishedAt: 2025-10-03T14:20:03.772Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: call-webhook-making-requests-to-external-services
legacySlug: call-webhook-making-requests-to-external-services
locale: en
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### What is an API?

The acronym API corresponds to “Application Programming Interface“. They are a way of integrating systems, enabling benefits such as data security and ease of exchanging information

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/call-webhook-making-requests-to-external-services_1.png)

Today, the ability to connect and integrate with other systems is an essential feature for most solutions today. For this reason, we have an action card to use in flows precisely for this function: Call Webhook

### Call Webhook

The Call Webhook card is responsible for the connection between the platform and other external systems, below, we have a little about her anatomy:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/call-webhook-making-requests-to-external-services_2.png)

  1. Request method: Where you define what will be the method for your API request (GET, POST, PUT or DELETE);
  2. Request URL: Where you place the request URL for the API;
  3. Request header: Where you place the request header along with information such as authorization tokens and content types;
  4. Request body: Where you add a body for your request (used for POST and PUT);

### How to format the request body correctly

Normally, for the POST and PUT requests body we use JSON notation to send the information requested by the API. Below is an example of a JSON body:
`{""platform"": ""push"", ""author"": ""john""}`

How can we reproduce this notation using the webhook call card? On the platform, we use the functions `@json` and `@object` for this construction, the first to signal which notation we will translate the values, and the second to signal the beginning and end of our keys. Translating the example above to the notation used on the platform, we have:
`@(json (object (""platform"", ""push"", ""author"", ""john"")))`

If you want to use a variable such as `@contact.name` for the ""author"" field in our example, we have:
`@(json (object (""platform"", ""push"", ""author"", contact.name)))`

The request body accepts all variables and expressions supported on the platform.

#### Navigating a Webhook

After making the request, you can use some expressions to query information from the response.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/weni-by-vtex/flows/call-webhook-making-requests-to-external-services_3.png)

  * **@results**
`@results.[name of the result from the Call Webhook card]`: To check the request status, such as 200, 400, 500.

  * **@webhook**
This expression is used to retrieve values returned from the last webhook call made in the flow. For example:
    * `@webhook`: The value of this variable is the full response from the last request made.
    * `@webhook.results.client`: Name of the client returned by the API, if only one object is returned.
    * `@webhook.results.0.client`: Name of the client returned by the API. If the response is in an array, you need to specify the position of the array, such as 0, 1, 2, and so on.

To store the values in other variables, you can save them as a [contact field](/en/docs/tutorials/contact-fields) or [flow result](/en/docs/tutorials/variables-glossary).",

