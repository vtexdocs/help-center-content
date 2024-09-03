---
title: 'Setting up Sitef gateway'
id: 1y3gqmbb6wgwscW8yeccAc
status: ARCHIVED
createdAt: 2018-03-05T17:07:51.846Z
updatedAt: 2024-03-18T20:02:31.580Z
publishedAt: 
firstPublishedAt: 2018-03-05T17:35:10.870Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: setting-up-sitef-gateway
locale: en
legacySlug: setting-up-sitef-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ This payment integration can no longer be configured on the platform due to the [legacy provider removal process](https://help.vtex.com/en/announcements/legacy-payment-connectors-will-be-discontinued-in-2024--4R5YIjUu1IWkiOHzXtQU14) and the article will soon be removed from the Help Center. Check with your provider for more information about developing the new payment integration and the steps required for migrating settings in your store.

In VTEX, you can configure the Sitef gateway. To configure it, follow the steps below:

1. In the VTEX Admin, go to __Store Settings > Payment > Providers__, or type __Providers__ in the search bar at the top of the page.
2. On the providers screen, click the `New Provider` button.
3. Type the name __Sitef__ in the search bar and click on the name of the provider.
4. In the __Store ID__ field , fill in your MerchantId in Sitef. 
5. In __Access Key__ , fill in the MerchantKey provided by Sitef.
6. In __Advanced security capture__ , choose how long to capture the value after the transaction is approved.
7. Click `Save`.

## Setting up the payment condition

In VTEX, Sitef connector processes mainly __credit cards__. To learn how to set up the payment methods to be processed by Sitef gateway, [check our tutorial](/en/tutorial/how-to-configure-payment-conditions).
