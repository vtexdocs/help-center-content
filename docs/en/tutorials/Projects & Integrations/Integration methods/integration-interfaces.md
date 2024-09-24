---
title: 'How VTEX integration interfaces work'
id: tutorials_743
status: ARCHIVED
createdAt: 2017-04-27T21:59:00.743Z
updatedAt: 2020-06-04T01:31:18.846Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:41.246Z
contentType: tutorial
productTeam: Channels
author: authors_84
slug: integration-interfaces
locale: en
legacySlug: integration-interfaces
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

Integration with an ERP system enables control of your inventory regarding orders made, reserves write-offs, and price handling, both for definition of table values and application of promotional campaigns, in addition to invoicing, associating a tax invoice to the purchase, dispatching and other different resources. That is, it enables management of products, prices, inventories, orders, carriers, and others, through your ERP.

On the VTEX system, you will be able to integrate your ERP through several interfaces: __API REST__ (JSON language) and __WebService__ (SOAP – XML language) – which is already out of use.

![ERP-VTEX-Integration](//images.contentful.com/alneenqid6w5/2wnH4XIbPmqqkCIKGMywo/aacb3904d7c7af2dbee7a182459d9203/ERP-VTEX-Integration.png)

In addition to ERP, for the transmission to occur, there must be a system in place to support the communication between ERP and VTEX. This system is named as “__Integrator__”. In general, ERP develops its own integrator, but it may also be developed by the store itself, or by an agency contracted by the store.

To integrate ERPs into VTEX, use our [specific guide](/en/tutorial/integration-guide-for-erps).

## Interfaces

### API REST

This is the most up-to-date interface, being the most recommended for use together with the VTEX system.

Exclusively regarding the Catalog (Categories, Brands, Products and SKUs), the WebService may carry out some actions that APIs are not able to perform yet. However, new APIs are made available quite often, and they can be followed on our [Developer Docs](https://help.vtex.com/developer-docs).

Since it uses the Json language, its processing structure is considerably lighter and simpler, enabling handling of a greater number of requests, and even developing B.I. feeding flows. This is the language used in the communication among VTEX modules.

This interface has some peculiarities regarding authentication, structuring of search parameters, request bodies, requests that do not require a body, and others. Additionally, each VTEX module (Orders Management, Payments, MasterData, and others) has its own API library with a specific function.

See below the documentation required to help start integration through the API REST Interface:

- [APIs Library by Module](https://help.vtex.com/developer-docs)
- [Authentication with User and Password on the API REST Interface](https://help.vtex.com/tutorial/creating-appkeys-and-apptokens-to-authenticate-integrations--43tQeyQJgAKGEuCqQKAOI2)
- [Using Orders Management filters in your API](/en/tutorial/using-oms-filters-in-api/)
- [Orders Status Table (All interfaces)](https://help.vtex.com/tutorial/from-to-for-order-status?locale=en)

### Web Service

>⚠️ The use of the VTEX Web Service in integration processes should be avoided as much as possible.

Except for the Catalog (Categories, Brands, Products and SKUs), whose API REST is being developed, all other VTEX modules have well defined and high performance API RESTs.

Our webservice works with a complete WSDL library that can be easily adapted to integrations made through different programming types. It will include all methods currently available for different applications regarding the resources of your organization.

Just as the API REST interface, this interface has some peculiarities regarding authentication, versions and data types, among others.

See below the documentation required to help start integration through the WebService Interface:

- [Integration of ERPs to VTEX stores](http://vtex.github.io/docs/integracao/erp/index.html)
- [How to set up the access to the Web Service](/en/faq/como-criar-usuario-webservice)
- [Use of SOAPui to reproduce a WebService scenario](/en/tutorial/testing-webservice-using-soapui/)
- [Manual of Classes and Methods used in the WebService](/en/tutorial/manual-of-classes-and-methods-used-on-webservice/)


