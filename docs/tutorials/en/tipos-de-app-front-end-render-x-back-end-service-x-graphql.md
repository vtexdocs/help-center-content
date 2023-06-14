---
title: ''
id: SEMAaDZ9YccEAsuuumCqQ
status: DRAFT
createdAt: 2017-11-22T15:53:58.850Z
updatedAt: 2020-03-06T13:55:14.854Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 
slug: tipos-de-app-front-end-render-x-back-end-service-x-graphql
locale: en
legacySlug: tipos-de-app-front-end-render-x-back-end-service-x-graphql
subcategory: 
---

GraphQL is a recently developed framework. It facilitates communication between the front-end and the backend by declaring what we call "schemas", which work as communication protocols.

Example: Through the GraphQL schemas, the front-end knows that if you make a `getUser` call it needs to call the endpoint `http://apps-graphql.vtex.aws-us-east-1.vtex.io/test/user/query/getUser?__v=0.9.1` and receive a response with type `{name, email, address, phone_number}`.

So, in addition to "mapping routes", GraphQL makes it easier for the front-end to call complex URLs.

Because GraphQL apps define types and fields that model the requests and responses exchanged between front-end and back-end, requests get lighter, which leads to performance improvement.
