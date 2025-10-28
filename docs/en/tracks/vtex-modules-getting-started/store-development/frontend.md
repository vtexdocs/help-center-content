---
title: 'Frontend'
id: 5DTcawNjc5MovtD7HNqURl
status: PUBLISHED
createdAt: 2022-12-21T20:43:31.083Z
updatedAt: 2023-04-25T19:15:45.158Z
publishedAt: 2023-04-25T19:15:45.158Z
firstPublishedAt: 2022-12-22T19:57:08.694Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: frontend
locale: en
trackId: 3fHF3GIjK8UugnQKIakpl9
trackSlugEN: store-development
order: 2
---

The storefront is the presentation layer for the user. It defines their experience on the platform and is a key factor when deciding whether to complete a purchase or not. For a digital business to remain relevant and competitive, this layer must offer elements such as a great user experience (via desktop and mobile), omnichannel capability, customized shopping experience, and outstanding web performance. 

To achieve these goals, VTEX provides different technologies for store frontend development. Depending on the project, one technology may be more suitable than the others.

## Store Framework

Store Framework is based on composability, which allows the combination of different content, services, and data. So, in addition to integrations and API orchestration, VTEX offers the right tools to meet the most specific business needs.

The way this feature extension happens is through VTEX apps that are available globally.

Store Framework is a solution for building storefronts that leverages VTEX IO. Using it, you can rely on the user-friendly interface of [Site Editor](/en/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1) and easily manage store content.

![vtex io](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/store-development/frontend_1.png)

Stores created with Store Framework also include: 
- **[Intelligent Search](/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)**: Search tool that corrects spelling errors and enables conditional rules for displaying the search result.
- **[Multi-language](/en/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO?&utm_source=autocomplete)**: VTEX IO enables the configuration of automatic translation into other languages in the store.
- **[Cross-border](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-cross-border-stores)**: Allows a [VTEX multi-store](/en/tutorial/creating-multi-store-multi-domain--tutorials_510?locale=en&_ga=2.139338803.1060780652.1642427010-1001456323.1619912759) to operate in different countries with an approach specific to each of them.

## FastStore

While Store Framework focuses on composability, FastStore was built with a performance focus and is based on the Jamstack (standing for JavaScript, API, and Markup) architecture. In Jamstack websites, the application logic generally lies on the client side without being tightly coupled to the backend server.

The intention is to leverage the Jamstack architecture to deliver storefronts quickly, securely, and reliably. In addition, it comes with many tools and features designed for this purpose, including WebOps pipelines and performance-optimized starter packs.

In this way, FastStore can integrate with any CMS and any development platform, but to benefit from the guarantees and support provided by VTEX, the FastStore, Webops, and Headless CMS is required.

Some features are not available, such as My Account customizations and full integration with IO apps and Intelligent Search.

## CMS Portal (Legacy)

The CMS Portal is a legacy VTEX technology mainly responsible for managing the website's source code, which is the module containing the content displayed in the store. 

For the Legacy CMS, an important concept is Controls, which are snippets of code that render native VTEX data. Controls help the retailer natively create content and embed tools on the site using what VTEX already offers. For this customization to happen, CSS, HTML, and JavaScript are used in the development, allowing you to create layouts and templates.

Due to the use of outdated technologies, when you need to make any changes in the legacy CMS, you have to access the codes internally and make the changes in the Layout field. Thus, CMS becomes more difficult to use and maintain, making it harder to keep up performance as more customizations are made. 

