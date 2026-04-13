---
title: "The basics of integrations"
id: 5x9gjiQTdD6lrQLJziRozj
status: PUBLISHED
createdAt: 2025-09-15T15:52:46.844Z
updatedAt: 2025-10-03T14:20:32.177Z
publishedAt: 2025-10-03T14:20:32.177Z
firstPublishedAt: 2025-10-03T14:20:32.177Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: the-basics-of-integrations
legacySlug: the-basics-of-integrations
locale: en
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Integration is the action to search, modify or send information to a service. The integrations are divided into two:

- **Native**: The VTEX CX Platform can integrate with APIs that have REST/Json format through a Webhook card or through a pre-existing application in the Integrations menu.
- **Non-native**: We do non-native integrations for APIs that are not REST/Json. However, in this case, we must analyze the effort and scope of the request, since we use external services to consume and model the API, for example [Back4app](https://www.back4app.com/#) and [Pipedream](https://pipedream.com/).

## What is an API?

It is a form of communication between systems, in which one of them provides information and services that can be used by the other (VTEX CX Platform). Typically an API has:

- URL
- Documentation explaining how it can be used
- Available endpoints/features
- Authentication forms to use the API, if necessary.

## What is webhook?

Webhook is a technology used to allow communication between two applications in real time. At VTEX CX Platform we can search and even update information in other systems through the Call Webhook card.

To pass information to a system using API you must use the body of the request (body) or pass it directly in the URL (query). The API documentation will tell you how to do this.

> The Call Webhook card allows the use of variables, such as @results, @contact, and @fields. [Learn more about variables here.](/en/docs/tutorials/expressions-and-variables-introduction)

## How to know if the API can be integrated natively?

The API documentation works as a manual that helps us understand how to integrate. It will inform you if the requests are in the native architecture of the VTEX CX Platform: REST/Json.

> ℹ️ If your API architecture is not REST/Json, it is still possible to integrate, but you will need to model this API.

## How to view API call on VTEX CX Platform?

To view the API return, access the Webhooks log in the Flows Module:

Have more questions about API? Share in our [community](https://comunidade.weni.ai/) 😉 We have an expert team to answer your questions.
