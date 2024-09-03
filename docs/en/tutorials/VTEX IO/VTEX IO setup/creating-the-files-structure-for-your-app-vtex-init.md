---
title: 'Creating the files structure for your app (vtex init)'
id: 7MEnnC356Me8yswoK4o0e
status: ARCHIVED
createdAt: 2018-02-21T23:00:47.117Z
updatedAt: 2020-03-13T21:24:59.887Z
publishedAt: 
firstPublishedAt: 2018-02-21T23:02:06.319Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: creating-the-files-structure-for-your-app-vtex-init
locale: en
legacySlug: creating-the-files-structure-for-your-app-vtex-init
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

After logging in and creating a development workspace, you need to create the app folder and files structure.

VTEX IO will do it automatically for you. You only need to go to the folder you'd like to be the root for your app and type the command below:

`vtex init`

IO will ask you a few questions in order to define important parameters for your files:

- __What's your VTEX app name?__: the name should only contain numbers, lowercase letters, underscores or hiphens.

- __What's your VTEX app vendor?__: your company name. The name should only contain numbers, lowercase letters, underscores or hiphens.

- __What's your VTEX app title?__: this is how the name will be shown publicly. This name can contains upper case letters, spaces, etc.

- __What's your VTEX app description?__: your app description.

IO will confirm that your manifest.json has been successfully generated and asks for the VTEX service that you want to use. 

>ℹ️ For front-end development, the service should be react

Done! Your files and folders structure will be created.
