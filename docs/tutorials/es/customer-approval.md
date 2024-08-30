---
title: 'Aprobación de clientes'
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2024-06-18T22:16:38.698Z
publishedAt: 2024-06-18T22:16:38.698Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: aprobacion-de-clientes
locale: es
legacySlug: aceptacion-clientes, aprobacion-clientes
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

La aprobación de clientes se lleva a cabo en Master Data y puede realizarse a través del Admin o a través de API. Consulte a continuación las instrucciones sobre cada una de las dos formas de aprobación.

## Aprobar clientes vía Admin

Para aprobar clientes en Admin, siga los pasos que se indican a continuación:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Dentro de __Profile System__, haga clic en el ícono <i class="fas fa-bars"></i> junto a __Clientes__.
3. Haga clic en la línea correspondiente al cliente que desea aprobar.
4. En la parte inferior de la página, haga clic en el botón `Editar`.
5. Seleccione la __casilla__ del campo «Aprobado».
6. En la parte inferior de la página, haga clic en el botón `Guardar`.

De este modo, el contenido de la tienda se mostrará a los clientes seleccionados. 

## Aprobar clientes vía API

Puede aprobar varios clientes a la vez a través de una ruta de [API de Master Data](https://developers.vtex.com/docs/api-reference/masterdata-api).

Toda la información relacionada con un cliente puede interpretarse como un documento en [entidad de datos](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265) __Cliente__. Por lo tanto, la ruta [PATCH Update partial document](https://developers.vtex.com/docs/api-reference/masterdata-api#patch-/api/dataentities/-acronym-/documents/-id-) debe ser utilizada para cambiar masivamente el valor relacionado con el campo __Aprobado__.

Consulte el artículo [Importar datos de clientes](https://developers.vtex.com/docs/guides/import-customer-data) para saber qué campos deben crearse para un documento específico de persona física.
