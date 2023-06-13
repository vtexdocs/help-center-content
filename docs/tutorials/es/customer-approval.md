---
title: Aprobación de clientes
id: 2fDHMMLJl00Pm6imiACU72
status: PUBLISHED
createdAt: 2021-03-30T16:54:48.752Z
updatedAt: 2023-03-29T00:06:00.612Z
publishedAt: 2023-03-29T00:06:00.612Z
firstPublishedAt: 2021-03-30T17:14:26.769Z
contentType: tutorial
productTeam: Master Data
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: aprobacion-de-clientes
legacySlug: aceptacion-clientes, aprobacion-clientes
subcategory: 42hDtnYXHw5ExG6l19RP1l
---

La aprobación de clientes ocurre en Master Data y puede realizarse vía Admin o vía API.

## Aprobación de clientes vía Admin

Para aprobar clientes en el Admin:

1. En el Admin VTEX, accede **Configuración de la tienda** > **Storefront** > **Master Data.**
2. Dentro de __Profile System__, haga clic en el ícono <i class="fas fa-bars"></i> junto a __Clientes.__
3. Haga clic en la línea correspondiente al cliente que desea aprobar.
4. En la parte inferior de la página, haga clic en el botón azul __Editar.__
5. Seleccione la __casilla__ del campo «Aprobado».
6. En la parte inferior de la página, haga clic en el botón azul __Guardar.__

De este modo, el contenido de la tienda se mostrará a los clientes seleccionados. 

## Aprobación de clientes vía API

Puede aprobar varios clientes a la vez a través de una ruta de [API de Master Data](https://developers.vtex.com/vtex-developer-docs/reference/master-data-api-v2-overview "API de Master Data").

Toda la información relacionada con un cliente puede interpretarse como un documento en [entidad de datos «Cliente»](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265). Por lo tanto, la ruta [PATCH Create or Update partial document](https://developers.vtex.com/vtex-developer-docs/reference/documents#createorupdatepartialdocument "PATCH Create or Update partial document") debe ser utilizada para cambiar masivamente el valor relacionado con el campo «Aprobado».

Consulte el artículo [Importar datos de clientes](https://help.vtex.com/es/tutorial/importar-datos-de-clientes-brasil?locale=pt "Importar datos de clientes") para saber qué campos deben crearse para un documento específico de persona física. 
