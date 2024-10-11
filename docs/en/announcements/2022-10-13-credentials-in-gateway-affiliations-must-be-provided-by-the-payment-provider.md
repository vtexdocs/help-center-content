---
title: 'Credentials in gateway affiliations must be provided by the payment provider'
id: 6RsAtRDmehojI076vYBpog
status: PUBLISHED
createdAt: 2022-10-13T20:36:50.162Z
updatedAt: 2023-04-03T14:13:18.199Z
publishedAt: 2023-04-03T14:13:18.199Z
contentType: updates
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
slugEN: 2022-10-13-credentials-in-gateway-affiliations-must-be-provided-by-the-payment-provider
locale: en
legacySlug: credentials-in-gateway-affiliations-must-be-provided-by-the-payment-provider
announcementImageID: ''
announcementSynopsisEN: 'Credentials in gateway affiliations created in the Admin must be replaced by October 31 for security reasons'
---

When configuring [gateway affiliations](https://help.vtex.com/en/tutorial/registering-gateway-affiliations--tutorials_444) in the Admin to make payments available in your store, you must enter the following credentials to identify your store for the payment provider: **Application Key** and **Application Token**. These credentials have the same function as user and password and must be provided by the payment provider.

## What has changed?

These credentials should not be mistaken for the [Application Key and Application Token credentials used in VTEX APIs for integrations](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet). In this case, credentials are generated in the Admin and used to identify external systems that access VTEX stores' services. You can identify an **Application Key** generated in the Admin by having `vtexappkey-` at its beginning.

If your store has any gateway affiliations configured with a pair of **Application Key** and **Application Token** generated in the Admin, you must replace them by April 30, 2023.

## Why did we make this change?

Using the **Application Key** and **Application Token** generated in the Admin in gateway affiliations can pose a security risk, as keys are being shared to access services from a VTEX store. The [role](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) assigned to a credential defines which [store resources](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) a given user can access. Depending on the role, anyone with access to the credentials can access the allowed resources improperly. You can check the instructions in the [Application Keys](https://help.vtex.com/en/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) article to disable an **Application Key** if needed.

## What needs to be done?

The payment provider must provide the credentials for the affiliation being configured. The keys must be replaced by April 30, 2023. You can find the instructions for configuring them in the [Registering gateway affiliations](https://help.vtex.com/en/tutorial/registering-gateway-affiliations--tutorials_444) article.
