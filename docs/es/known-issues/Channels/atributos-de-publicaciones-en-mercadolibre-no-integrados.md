---
title: 'Atributos de Publicaciones en MercadoLibre no integrados'
id: 4CxNV3zIh28wk2a6weQcK
status: PUBLISHED
createdAt: 2018-01-29T17:57:35.003Z
updatedAt: 2022-12-22T15:09:25.045Z
publishedAt: 2022-12-22T15:09:25.045Z
firstPublishedAt: 2018-01-29T18:13:16.746Z
contentType: knownIssue
productTeam: Channels
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Connections
slugEN: publication-attributes-in-mercado-livre-are-not-integrated
locale: es
kiStatus: Fixed
internalReference: 
---

## Sumario

Las publicaciones de MercadoLibre, con excepción de la categoría de Moda, no tienen integración de atributos, con lo cual, estos no quedan catalogados de modo ilustrativo como MercadoLibre lo solicita, para facilidad de lectura del cliente final.

Al no tener esta integración de atributos, deben ser incluidos en el contenido de texto plano de la descripción, sin ser esta la solución indicada por MercadoLibre como la óptima para búsquedas y lectura.

## Simulación

No es reproducible, ya que la configuración de MercadoLibre en VTEX Bridge no contiene la funcionalidad para subir la información de atributos de las categorías, excepto las de moda.

## Workaround

Se consigue realizar esta integración por fuera de VTEX Bridge, utilizando las APIs de Atributos de MercadoLibre, disponibles en https://developers.mercadolibre.com/

Se consigue también cargar los atributos manualmente en MercadoLibre.

>ℹ️ Este problema ya ha sido resuelto por nuestro equipo. [Sepa más.](https://help.vtex.com/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA)

