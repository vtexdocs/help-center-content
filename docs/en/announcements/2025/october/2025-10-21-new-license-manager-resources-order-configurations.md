---
title: 'New permissions for accessing order configurations'
id: UyJ0JRWiP9biWoAMR0ODF
status: PUBLISHED
createdAt: 2025-10-21T14:17:33.120Z
updatedAt: 2025-10-22T13:00:10.895Z
publishedAt: 2025-10-22T13:00:10.895Z
contentType: updates
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: 2025-10-21-new-license-manager-resources-order-configurations
locale: en
legacySlug: new-license-manager-resources-order-configurations
announcementImageID: 'undefined'
announcementSynopsisEN: 'New permissions required to access order configurations in the VTEX Admin'
---

To provide more secure and controlled authentication, we have updated how [License Manager](/en/docs/tutorials/roles) validates access to store order configurations. New features are now required for users to access specific pages in the VTEX Admin. 

## What has changed?

We updated which features of License Manager will be used to validate a user's authentication to access specific pages in the VTEX Admin. Now, the `Save Order Configuration` and `Save OrderForm Configuration` resources are required for the user to access the [general order configuration](/en/docs/tutorials/general-configurations-on-the-oms) and [affiliate management](/en/docs/tutorials/configuring-affiliates) pages.

## What needs to be done?

To ensure that your users can access the pages mentioned above, you must [create a custom role](/en/docs/tutorials/creating-roles#creating-custom-roles) or [edit the existing roles](/en/tracks/accounts-and-permissions--5PxyAgZrtiYlaYZBTlhJ2A/6Ymo5bNMyEYBGsTmbTC3H9#editing-roles) by adding the `Save Order Configuration` and `Save OrderForm Configuration` features to the role.

Once the resources have been added, the user will be able to access the VTEX Admin pages.

