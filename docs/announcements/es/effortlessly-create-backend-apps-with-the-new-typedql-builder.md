---
title: "Cree aplicaciones back-end con la practicidad del nuevo TypedQL Builder"
id: PcQomKRQjJshUVKD5QJ7m
status: DRAFT
createdAt: 2019-02-18T20:46:30.765Z
updatedAt: 2020-03-13T21:24:39.132Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: cree-aplicaciones-back-end-con-la-practicidad-del-nuevo-typedql-builder
legacySlug: cree-aplicaciones-back-end-con-la-practicidad-del-nuevo-typedql-builder
announcementImageID: ""
announcementSynopsisES: El nuevo builder de VTEX.IO disminuye la duplicidad de código en aplicaciones que utilizan GraphQL y TypeScript
---

Lanzamos un nuevo builder para facilitar el desarrollo de aplicaciones back-end que utilizan GraphQL y TypeScript. El objetivo es simplificar el proceso de desarrollo y mantenimiento del código.


## Cómo es hoy
Al desarrollar una aplicación que utiliza GraphQL y TypeScript, es necesario mantener dos declaraciones de protocolo de comunicación en la carpeta `/node`: `/graphql/schema.graphql` y `type declarations`, utilizando TypeScript.

Esto significa código duplicado, lo que dificulta el desarrollo y el mantenimiento del proyecto. Más que eso, favorece el surgimiento de inconsistencias y bugs.


## Principales ventajas del TypedQL Builder
El __TypedQL Builder__ resuelve todos los problemas de desarrollo con GraphQL y TypeScript que existen hoy:

- Generación automática del `schema.graphql`
- Traducción segura de TypeScript para GraphQL
- Aprovechamiento de recursos del lenguaje TypeScript inexistentes en el lenguaje GraphQL SDL
- Posibilidad de desarrollar una aplicación back-end entera en TypeScript


## ¿Cuál es el impacto?
Ninguno. Por ser una solución opcional, no se ve afectada ninguna funcionalidad, builder o dependencia.

Para saber todos los detalles del __TypedQL Builder__, acceda a [este artículo del Help](/en/tutorial/typeql-builder).

