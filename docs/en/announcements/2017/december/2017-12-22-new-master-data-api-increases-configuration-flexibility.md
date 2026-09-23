---
title: 'Master Data: New Master Data API increases configuration flexibility'
id: 46r2SSSWz6QQWyYwGyGwme
status: PUBLISHED
createdAt: 2017-12-22T14:29:00.901Z
updatedAt: 2020-02-20T18:38:20.999Z
publishedAt: 2020-02-20T18:38:20.999Z
contentType: updates
productTeam: Master Data
author: authors_24
slugEN: 2017-12-22-new-master-data-API-increases-configuration-flexibility
locale: en
legacySlug: new-master-data-api-improves-setup-flexibility
announcementImageID: 'undefined'
announcementSynopsisEN: 'The new version adds features that allow more flexibility in configuring the structures stored in Master Data.'
---

We have released version 2.0 of the Master Data API - the dynamic, flexible and scalable VTEX data repository.

This new release brings features that allow more configuration flexibility of structures stored in Master Data: entities, triggers and indexes.

And it is backward compatible with the previous version. That is, there's no break in compatibility with version 1.

## What has changed?

Here are some of the features that version 2.0 of the Master Data API brings:
- Now you can save complex JSONs.
- The store can automate the replication process of the structures in the setup of its products that use Master Data via API (e.g., agencies that implement Contact Us and Wish List).
- Entity names can be longer than 2 characters.
- A setup phase is no longer required to start using the API. Just send the request and the configuration will be applied automatically.
- Filters now support objects and object arrays (up to the second level).
- The default cache can now be disabled.

Also, the API now supports complex validations using JSON Schema. For each entity, there can be up to 10 validations, with the following characteristics:
- Validation by range (e.g., age between 18 and 25).
- Validation of objects and object arrays.
- A string can be a regex.
- The string size can be configured as the store prefers.

## What needs to be done?

See the documentation for the new features in the [VTEX Help article](/en/tutorial/master-data-v2).
