---
title: 'Cómo instalar un Service Worker'
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2023-04-05T17:55:03.904Z
publishedAt: 2023-04-05T17:55:03.904Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-instalar-un-service-worker
legacySlug: como-instalar-un-service-worker
subcategory: 
---

Service Worker es un script que su navegador ejecuta en segundo plano, independiente de la Web, permitiendo recursos como sincronización periódica, notificaciones push e incluso ejecución en modo off-line.

Para crear el script, siga el paso a paso abajo:

1. En el Admin VTEX, acceda al módulo __Portal__.
2. Haga clic en el icono de __Configuración__.
3. Después, en la pestaña __Código__.
4. Haga clic en __Nuevo__ y luego en __Archivo__.
5. Incluya el nombre del archivo exactamente como: `service-worker.js`.
6. Programe la __funcionalidad__.
7. Para finalizar, haga clic en __Guardar__.

A pesar de que el archivo se encuentra en `/files/service-worker.js`, recibe el header` Service-Worker-Allowed` con valor `/`, lo que permite interceptar requests desde la raíz del sitio.

Para [más información](https://developers.google.com/web/fundamentals/primers/service-workers/), consulte el Web Fundamentals de Google Developers.

### Artículos relacionados
- [Cómo transformar mi tienda en un PWA](https://help.vtex.com/es/tutorial/como-transformar-el-sitio-de-mi-tienda-en-un-pwa--3i8VmYeToAUGKgo2kKK6I2)
