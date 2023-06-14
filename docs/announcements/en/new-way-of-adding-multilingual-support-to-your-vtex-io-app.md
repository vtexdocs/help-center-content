---
title: 'New way of adding multilingual support to your VTEX.IO app'
id: 5ihajfKsWkq6Mc0gm2cQUK
status: DRAFT
createdAt: 2018-12-13T19:55:38.654Z
updatedAt: 2020-03-13T21:24:39.328Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: new-way-of-adding-multilingual-support-to-your-vtex-io-app
locale: en
legacySlug: new-way-of-adding-multilingual-support-to-your-vtex-io-app
announcementImageID: ''
announcementSynopsisEN: ' In the new VTEX.IO version, JSON translation files must be saved on a new folder, on the root directory.'
---

We're changing the way translation files are served through VTEX.IO. The new method uses a new builder called `messages 0.x` and requires a minor change in folder structure. That way, JSON translation files must be saved on the `messages` folder, on the root directory.


## What changes
__Previously, folders were organized as follows:__

```/
 /
 +-- react
     |
     +-- locales
         |
         +--en_us.json
         +--pt_br.json
     +-- ...

```


__In the new format (using the__ `messages 0.x` __builder), folders will be arranged this way:__

```/
 /
 +-- graphQL
 +-- react
 +-- messages
     |
     +--en_US.json
     +--pt_BR.json
     +-- ...

```


## What's the impact?
__For now, there's no impact.__ You can still use the the current method of storing your  localization files to be saved on the `react/locales` folder. The next update however, will only support usage of the__ `messages 0.x` __builder and new folder structure__

## How to update to the new format
To use the new method, follow these two simple steps:

1.  Add `messages 0.x` to your app's `manifest.json` file.
2.  Move the `locales` folder to the root directory and change its name to `messages`.
