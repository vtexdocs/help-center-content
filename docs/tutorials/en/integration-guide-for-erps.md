---
title: Integration guide for ERPs
id: 3VuOwNLmb624ImooEIIkmO
status: DRAFT
createdAt: 2017-09-11T20:55:01.200Z
updatedAt: 2020-06-04T01:06:47.552Z
publishedAt: 
firstPublishedAt: 2017-09-11T22:05:36.380Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: integration-guide-for-erps
legacySlug: integration-guide-for-erps
subcategory: 5fKgQZhrCw88ACy6Su6GUc
---

<div class="alert alert-danger" role="alert">
   This integration guide is outdated and will be archived in <strong>June 2020</strong>. We do not recommend using Webservice since the launch of the <a href="https://developers.vtex.com/changelog/new-endpoints-available-in-catalog-api" target="_blank">new Catalog API</a>. Check out the <a href="https://developers.vtex.com/docs/erp-integration-guide" target="_blank">new ERP integration guide</a> available in our Developer Portal.
</div>

The integration of ERPs with VTEX stores is made through a webservice (SOAP: xml) and the REST API (JSON). The [VTEX webservice](https://vtexhelp.myvtex.com/tutorial/manual-of-classes-and-methods-used-on-webservice--tutorials_749) must be used as less as possible to the integration processes. Currently, on exception the catalog, that has its REST API being developed, all the other VTEX modules have REST APIs well defined and with high performance.

Know more about our [integration interfaces](http://help.vtex.com/en/tutorial/integration-interfaces).


## Catalog fast integration

An express integration with basic and necessary flows. Find out more [here](/en/tutorial/integration-guide-for-erps-express-catalog).

## Catalog complete integration

A complete integration, most flows, involve more effort on the implementation. Find out more [here](/en/tutorial/integration-guide-for-erps-full-catalog).

## Price integration

Pricing updates must be done with the Pricing REST API, available at [Developer Docs](https://developers.vtex.com/reference/pricing-api-overview).

## Inventory integration

Inventory updates must be done with the Logistics REST API, available at [Developer Docs](http://help.vtex.com/developer-docs/).

## Orders integration 

The ERP, searches in a list of ready orders to the ERP, searches each order on VTEX and insert it in the ERP, notify the VTEX that the order is in the ERP. After the ERP sends the invoice and Tracking to the VTEX. Find out more [here](/en/tutorial/integration-guide-for-erps-orders).


### Pooling

The sending or data consumption in an integration process must be executed only when it's necessary, what means that the data only must be sent from the ERP to the VTEX platform when it really got changed.

It's advised **DO NOT MAKE** an integration that scans entire entities from the ERP and updates every data from the VTEX platform periodically. Besides it consumes and processes data unnecessarily, it wouldn't work to the stores with more than 5 thousand SKUs in the catalog.

### Support Tools to the Integrator

We recommend some tools that are too important to any integrator:

#### SoapUI

This tool is very important in the integration process, because it allows simulate the webservice methods, generating the XML request automatically. In this tool is possible to do requests to the REST APIs too.

Find out more: [Testing Web Service using SoapUI](/en/tutorial/testing-webservice-using-soapui)


#### Postman

Chrome browser extension, in this tool is possible to test, store history, save access requests collections from all APIs of the VTEX modules (OMS, Logistics, Pricing, GCS, etc). 

It's very important the integrator get the knowledge of this kind of tools, or other similar tools before start an integration process using SOAP webservice or REST VTEX APIs.

## Access and Credentials

Every call made to the webservice must be in “https” and a username and password are required to start the connection. The calls to the REST APIs must be made in “https” and must have in its header the authentication keys.

The webservice endpoint for working with catalog methods is `https://webservice-ACCOUNTNAME.vtexcommerce.com.br/service.svc?wsdl`. The REST APIs have their own endpoints behind `https://api.vtex.com`.

- [How to create a Web Service user](/en/faq/como-criar-usuario-webservice)
- [How to authenticate in the REST APIs](/en/faq/how-do-you-authenticate-in-the-api)

For traceability purposes, each ERP must have its key of exclusive access.

Note: The VTEX webservice works with scheduling scheme on demand, thus being able to scale new machines according to access demand. That's why clients installed on operating systems that do long caches of DNS are not supported (Windows XP, Windows Server 2003, old versions of Apache).
