---
title: 'Integration methods with the catalog through Web Service will be discontinued'
id: 1GmJhvCNvKAYWwwIEeyOey
status: PUBLISHED
createdAt: 2018-08-21T22:22:45.403Z
updatedAt: 2019-12-31T15:13:37.967Z
publishedAt: 2019-12-31T15:13:37.967Z
contentType: updates
productTeam: Others
author: authors_24
slugEN: 2018-08-21-integration-methods-with-the-catalog-through-web-service-will-be
locale: en
legacySlug: integration-methods-with-the-catalog-through-web-service-will-be
announcementImageID: 'undefined'
announcementSynopsisEN: 'On 10/29, we will discontinue some Web Service methods for integration with the catalog.'
---

> ℹ️ The change described here only impacts your operation if your store uses **Web Service integration** and this integration uses some of the methods listed below. Otherwise, you do **not** need to take any action.

As of __October 29__, VTEX will discontinue the following methods of integration by Web Service, with the aim of improving the platform performance.

```
StockKeepingUnitGetAllFromUpdatedDate
StockKeepingUnitGetAllFromUpdatedDateAndId
IntegrationSettings
IntegrationErrorGetAllByErrorTypeAndId
IntegrationLogEvent
IntegrationLogError
IntegrationLog
IntegrationLogError
IntegrationInterfaceGetAll
IntegrationLogErrorInsertUpdate
IntegrationErrorCheckInstanceExists
```

Of these methods, only the first two have effect today:
- __StockKeepingUnitGetAllFromUpdatedDate__: Gets all SKUs sorted by update date.
- __StockKeepingUnitGetAllFromUpdatedDateAndId__: Gets all SKUs sorted by update date and ID.

The other methods listed above no longer have any practical application - that is, for all intents and purposes, are already discontinued.

If your store uses any of these methods, you need to evaluate the scenario and redo the solution through API integration. To assist you in this task, we prepare a catalog integration guide with external services, covering all possible scenarios currently served by the methods that will be discontinued: [Integration Guide - Consuming catalog information for use in an External Service](/en/tutorial/integration-guide-consuming-catalog-information-for-use-in-an-external-service).

- __What will happen__: The Web Service methods listed above will be discontinued.
- __When__: October 29, 2018.
- __What do I need to do?__: First, identify if your store uses any of these methods. If you use, your store needs to replace them with solutions via API.
- __How I do this__: Read our [catalog integration guide with external services](/en/tutorial/integration-guide-consuming-catalog-information-for-use-in-an-external-service).
