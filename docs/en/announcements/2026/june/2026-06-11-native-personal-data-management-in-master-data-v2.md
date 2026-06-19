---
title: 'Native personal data management in Master Data v2'
createdAt: 2026-06-11T00:00:00.000Z
updatedAt: 2026-06-11T00:00:00.000Z
contentType: updates
productTeam: Storage
slugEN: 2026-06-11-native-personal-data-management-in-master-data-v2
locale: en
announcementSynopsisEN: 'Master Data v2 now handles personal data natively, with encryption at rest, automatic masking when reading, and support for data subject requests.'
tags:
  - New feature
  - Master Data
---

Native personal data management is now available in Master Data v2. Each data entity can now declare which fields contain personal data and who that data belongs to, enabling encryption at rest, automatic masking on read, and support for subject request workflows.

## What has changed?

Previously, stores that stored personal data in Master Data v2 needed to implement their own layers of encryption, masking, and access control. These behaviors are now native to the platform:

- **Per-entity configuration:** Each data entity can declare the fields that contain personal data and which field identifies the subject (`SubjectIdField`).
- **Data encryption and residency:** Personal field values are stored separately, with encryption and specific residency rules.
- **Masked by default:** Read operations return personal fields with masked values (for example, `j***@****.com`). To obtain the original values, you must send a specific parameter in the request.
- **Link to the subject:** Each document containing personal data is associated with the declared subject, enabling the fulfillment of rights such as access, portability, and erasure.

> ℹ️ This feature is only available for entities in Master Data v2. Master Data v1 entities are not supported.

## What needs to be done?

Master Data v2 and data entities continue to work as before.

To start using the personal data management feature, the store's technical teams need to configure which fields in each entity contain personal data and adjust read and search integrations affected by masking. See the complete steps in the guide [Managing personal data in Master Data v2](https://developers.vtex.com/docs/guides/managing-personal-data-in-master-data-v2).