---
title: 'Intro to VTEX IO builders'
id: 2bWRLkhfSPAD17jfpCTLCe
status: DRAFT
createdAt: 2019-02-19T19:54:40.418Z
updatedAt: 2020-03-13T21:24:44.672Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:54:43.718Z
contentType: trackArticle
productTeam: VTEX IO
slug: intro-to-vtex-io-builders
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugEN: build-a-store-using-vtex-io
---

Apps in VTEX IO export code or configuration to provide features or alter the behaviour of the platform. For example, an app may export front end React components, or a GraphQL schema, or settings for the Checkout system that will affect its operation when installed.

These pieces of code and configuration usually require some preparation or validation in order to serve their purpose. For example, React components need to have their dependencies pulled and be compiled into JavaScript bundles. 

VTEX IO automatically takes care of all of these steps by implementing them as Builders. Once your app declares it uses a builder, the corresponding folder and its contents are processed by it upon linking. 
![builders](//images.ctfassets.net/alneenqid6w5/4giehwW3uYLEMkq42cFFiX/ba4d8c95146e19f7db0f55bd1a41c2d4/builders.svg)

The store theme project uses two main builders (`store` and `styles`), but as you create apps with more advanced functionality, you will start using other, lower-level builders such as `react`, `messages`, `graphql` and `node`.
