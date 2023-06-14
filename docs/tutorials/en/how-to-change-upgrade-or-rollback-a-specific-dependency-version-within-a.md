---
title: 'How to change (upgrade or rollback) a specific dependency version within a workspace'
id: 3GxKR5gWesEOmUkOW864sg
status: DRAFT
createdAt: 2019-01-14T11:58:42.128Z
updatedAt: 2020-03-13T21:24:57.600Z
publishedAt: 
firstPublishedAt: 2019-01-14T12:19:43.139Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: how-to-change-upgrade-or-rollback-a-specific-dependency-version-within-a
locale: en
legacySlug: how-to-change-upgrade-or-rollback-a-specific-dependency-version-within-a
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Sometime during your app's development process, you might face the need to alter the version of a specific dependency inside a workspace.  This is especially useful when troubleshooting for errors by forcing a rollback.

To obtain a list of all of your app's dependencies and their respective versions inside a workspace, execute the following command:

`vtex deps ls -k`

To change versions, execute the command like so:
`vtex deps update vtex.{NomeDaDependencia}@<version>`

The command would look like this for example:
`vtex deps update vtex.styleguide@7.6.7`
