---
title: Publicar una app en el registro de la cuenta actual
id: 4YZ1gbhtxmC4cYUmIaOs2Y
status: DRAFT
createdAt: 2018-02-22T01:46:04.405Z
updatedAt: 2020-03-13T21:25:00.136Z
publishedAt: 
firstPublishedAt: 2018-02-22T01:49:05.945Z
contentType: tutorial
productTeam: VTEX IO
author: authors_24
slug: publicar-una-app-en-el-registro-de-la-cuenta-actual
legacySlug: publicar-la-app-en-el-registro-de-la-cuenta-actual
subcategory: Z46a6rHVAaAucoiW0skQQ
---

Cuando esté satisfecho con una versión de su aplicación, es el momento de publicarla.

__Importante!__
- Usted debe haber hecho login en la cuenta en la que desea publicar la aplicación
- Asegurarse de que el `vendor` de su aplicación __es igual__ al `account`
 
Para publicar la aplicación en el registro de la cuenta en la que está trabajando, basta con usar el siguiente comando:

`vtex publish`

En caso de que su aplicación __no__ tenga `billingOptions`, al publicarla ella estará visible en `/admin/apps` y disponible para ser instalada sólo por usuarios con acceso a la cuenta en la que se publicó la aplicación.

De lo contrario, su aplicación estará disponible para instalación por CLI independientemente del modelo de facturación especificado.

[Haga clic aquí](/es/tutorial/modelos-de-precios-de-aplicaciones) para más información sobre `billingOptions` y modelos de cobro.
