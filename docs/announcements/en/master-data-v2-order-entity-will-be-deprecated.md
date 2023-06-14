---
title: Master Data v2 order entity will be deprecated
id: 2A1FAUTdp2AgDNw9O2Y9za
status: CHANGED
createdAt: 2023-04-10T14:41:54.108Z
updatedAt: 2023-04-18T20:22:09.303Z
publishedAt: 2023-04-11T12:53:40.163Z
contentType: updates
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: master-data-v2-order-entity-will-be-deprecated
legacySlug: master-data-v2-order-entity-will-be-deprecated
announcementImageID: 
announcementSynopsisEN:  VTEX will deprecate the order entity of Master Data v2 in October 2023. Learn how to adapt your store integrations.
---

[Master Data v2](https://help.vtex.com/en/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) is a highly customizable database solution from the VTEX platform. One of its native data entities stores order information, and some developers use it to perform order integrations with external services such as inventory or resource management systems.

However, VTEX already provides [order feed and hook](https://developers.vtex.com/vtex-rest-api/docs/orders-feed), a solution better suited for developing this type of integration.

## What has changed?

This change will occur in two phases, [some VTEX accounts no longer have access to the feature](#accounts-already-impacted), while [others will have until the end of September 2023 to comply](#accounts-that-will-be-impacted). Check the details below to find out which group you belong to.

For both groups, losing this feature means, for now, only that VTEX no longer populates the entity with account order data. Impacted accounts in each phase will still be able to view previously recorded information in the Master Data v2 order entity.

### Accounts already impacted

Accounts that previously used this feature and did not interact with the Master Data v2 order entity in 2022 have already been impacted. This means that VTEX will no longer record orders in this entity, but users can still view previously recorded orders.

### Accounts that will be impacted

As of October 2023, the Master Data v2 order data entity will be deprecated for all accounts. This includes accounts that have never interacted with the entity and those that have recently interacted.

This means that VTEX will no longer record order data in the entity, and you will still be able to view previously recorded information.

## What needs to be done?

Please contact your store's development team to make sure your order integrations will not depend on the Master Data v2 order data entity by the end of September 2023.

Accounts that have already been impacted did not interact with the order entity in 2022, so they probably do not have any integrations that depend on this feature. However, we recommend that you contact your development team to ensure your order integrations are in compliance.

If your operation has this type of integration, your store's development team will need to adapt it to use the order feed or hook, as described in the following technical documents:
- [Order feed and hook](https://developers.vtex.com/vtex-rest-api/docs/orders-feed)
- [Implementing order integrations](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-set-up-order-integration)

