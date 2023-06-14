---
title: '¿Qué es el VTEX Render?'
id: E2lhiEJdoyEgQmKisIi42
status: DRAFT
createdAt: 2019-01-24T20:45:34.528Z
updatedAt: 2020-03-13T21:24:57.466Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:55:12.448Z
contentType: tutorial
productTeam: VTEX IO
author: 4tz85APeKIwMEk6amWS0ou
slug: que-es-el-vtex-render
legacySlug: que-es-el-vtex-render
subcategory: 5eBwrcLFVSwYGSOQqGKQYW
---

__Render__ es un framework web basado en React, always-live que se ejecuta en la plataforma VTEX IO. Los desarrolladores usan la __VTEX Toolbelt CLI__ para sincronizar archivos y escribir código, no configuración. Esto permite soporte inmediato para HMR, SSR, minificación, code splitting, HTTP/2, edición WYSIWYG y 30-second deploy.

Los sitios del Render se componen de __Apps__ que exponen los componentes React y pueden depender de otras aplicaciones o de cualquier módulo npm. Durante el build, todas las aplicaciones instaladas se fusionan y generan un único sitio optimizado. Los usuarios no técnicos pueden componer múltiples aplicaciones en puntos de extensión o crear nuevas rutas desde cero. Estas configuraciones generan nuevos builds under the hood, por lo que todo se mantiene optimizado.

## Principales features

Al controlar los ciclos de compilación y renderización, podemos ofrecer algunas funciones out-of-the-box como server-side rendering, minificación, code splitting por ruta, tree shaking, soporte a HTTP/2, sensible caching e incluso distribución CDN.
