---
title: 'No se puede filtrar por campo de texto'
id: 3dsPrybpGgmwiuyAcq0Gl2
status: ARCHIVED
createdAt: 2019-08-05T20:19:42.133Z
updatedAt: 2022-02-14T22:43:11.713Z
publishedAt: 
firstPublishedAt: 2019-08-05T21:36:56.236Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slugEN: unable-to-filter-by-text-field
locale: es
kiStatus: Open
internalReference: 
---

## Sumario

Aunque un campo de texto se puede configurar como __Público para Filtrar__, el usuario siempre recibirá el siguiente mensaje de error: `Cannot filter by private fields`.

## Simulación

- Visite el Dynamic Storage de su cuenta `https://{account}.ds.vtexcrm.com.br`;

- Acceda a la pestaña `Entidade de dados`, elija una entidad y configure un campo de texto para que sea público para filtrar.

Al consultar este campo a través de la API, siempre recibirá un mensaje de error.

## Workaround

Puede configurar el campo para que sea un Varchar 750. Esto le permitirá filtrar normalmente.

