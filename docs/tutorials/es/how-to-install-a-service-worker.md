---
title: 'Cómo instalar un Service Worker'
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2024-01-19T12:54:32.525Z
publishedAt: 2024-01-19T12:54:32.525Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 2AhArvGNSPKwUAd8GOz0iU
slug: como-instalar-un-service-worker
locale: es
legacySlug: como-instalar-un-service-worker
subcategory: 7ogirQ8NClawO2X6xdgCKc
---

Service Worker es un script que su navegador ejecuta en segundo plano, independiente de la Web, permitiendo recursos como sincronización periódica, notificaciones push e incluso ejecución en modo off-line.

Para crear el script, siga el paso a paso abajo:

1. En el Admin VTEX, acceda **Configuración de la tienda > Escaparate > Pagar**, o escriba **Pagar** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el icono de <i class="fas fa-cog"></i> del sitio deseado.
3. En la pestaña `Código`, haga clic en el botón `Nuevo`.
4. Luego haga clic en `Archivo`.
5. Rellene el nombre del archivo exactamente como: `service-worker.js`.
6. Haga clic en el botón `Crear`.
7. Programa la funcionalidad.
8. Clic en `Guardar`.

A pesar de que el archivo se encuentra en `/archivos/service-worker.js`, recibe el header `Service-Worker-Allowed` con valor `/`, lo que permite interceptar requests desde la raíz del sitio.

Para más información, consulte el [Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/) de Google Developers.

### Artículos relacionados

- [Cómo transformar mi tienda en un PWA](https://help.vtex.com/es/tutorial/como-transformar-el-sitio-de-mi-tienda-en-un-pwa--3i8VmYeToAUGKgo2kKK6I2)
