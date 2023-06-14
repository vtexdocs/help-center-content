---
title: 'Introducción a VTEX IO builders'
id: 2bWRLkhfSPAD17jfpCTLCe
status: DRAFT
createdAt: 2019-02-19T19:54:40.418Z
updatedAt: 2020-03-13T21:24:44.672Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:54:43.718Z
contentType: trackArticle
productTeam: VTEX IO
slug: introduccion-a-vtex-io-builders
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

Las apps de VTEX IO exportan código o configuración para proporcionar features o cambiar el comportamiento de la plataforma. Por ejemplo, una aplicación puede exportar componentes React front-end o un Schema GraphQL, o aún configuraciones para el sistema de Checkout que afectarán su operación cuando instaladas.

Estos pedazos de código y configuración generalmente requieren alguna preparación o validación para servir a su propósito. Por ejemplo, los componentes React deben tener sus dependencias extraídas y compiladas en paquetes JavaScript.

El VTEX IO se encarga automáticamente de todos estos pasos, implementándolos como builders. Una vez que su app declara que utiliza un builder, la carpeta correspondiente y su contenido son procesados por él cuando se realiza el link.
![builders](//images.ctfassets.net/alneenqid6w5/4giehwW3uYLEMkq42cFFiX/ba4d8c95146e19f7db0f55bd1a41c2d4/builders.svg)

El proyecto store theme utiliza dos builders principales (`store` y `styles`), pero a medida que cree apps con funciones más avanzadas, usted comenzará a usar otros builders de nivel más bajo, como `react`, `messages`, `graphql` y `node`.
