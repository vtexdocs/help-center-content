---
title: 'Granular permissions for Seller Register and Marketplace Network'
status: PUBLISHED
createdAt: 2025-12-23T12:00:00.000Z
updatedAt: 2026-01-15T12:00:00.000Z
publishedAt: 2025-12-23T12:00:00.000Z
contentType: updates
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: granular-permissions-seller-marketplace-network
locale: en
legacySlug: 
announcementImageID: 
announcementSynopsisPT: 'New granular permissions model for Seller Register and Marketplace Network requires access profile updates.'
---

We have implemented a new explicit permission validation model for Seller and Marketplace Network services, offering greater control and security over who can view and edit seller data in your operation. This change is available to all users of the VTEX platform.

## What changed?

Previously, any authenticated user with basic account access had implicit permission to operate the Seller and Marketplace Network modules. Now, the system requires the user or application key to have specific access resources associated with their profile:

- **Seller Register:** Segregated access into "View Seller" (view) and "Save Seller" (create/edit).
- **Marketplace Network:** Access through the "Access the Marketplace Network" permission.

## Why did we make this change?

To raise the level of governance and security on the platform, aligning the modules with the principle of least privilege security. Check out the main benefits:

- **Granular access control:** Define exactly who can view and who can edit seller data.
- **Greater operational security:** Prevent accidental or unauthorized changes to critical settings.
- **Enhanced governance:** Configure restricted access profiles according to each user's responsibilities.

## What needs to be done?

To ensure your operation is not impacted, update access profiles by **March 01, 2026** following the steps below:

1. In VTEX Admin, go to **Account settings > Access profiles**.
2. Identify which profiles need to interact with seller data or access the Marketplace Network.
3. Edit the desired profile and add the necessary resources:
   - For Seller: Select "View Seller" or "Save Seller" (under "Seller Register").
   - For Marketplace Network: Select "Access the Marketplace Network" (under "Channels").
4. Save the changes and validate that users can access the modules.

>⚠️ Without updating the profiles, users will see blank screens or error messages when trying to access the Seller and Marketplace Network modules after the cutoff date.

If your operation uses VTEX IO custom apps that interact with seller data, update the `manifest.json` file by adding the required policies:

```json
"policies": [
  {
    "name": "view-seller"
  },
  {
    "name": "save-seller"
  }
]
```

For more information about managing access profiles, see the [Access profiles](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc) documentation.

