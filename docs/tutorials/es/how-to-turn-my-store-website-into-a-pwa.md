---
title: 'Cómo transformar el sitio de mi tienda en un PWA'
id: 3i8VmYeToAUGKgo2kKK6I2
status: PUBLISHED
createdAt: 2018-03-19T18:20:25.794Z
updatedAt: 2023-03-29T13:18:46.962Z
publishedAt: 2023-03-29T13:18:46.962Z
firstPublishedAt: 2018-03-20T14:54:55.189Z
contentType: tutorial
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slug: como-transformar-el-sitio-de-mi-tienda-en-un-pwa
legacySlug: como-transformar-el-sitio-de-mi-tienda-en-un-pwa
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

PWA es la abreviatura en inglés de Progressive Web App - un conjunto de técnicas usadas para desarrollar aplicaciones web y añadir funcionalidades que antes solo eran posibles en apps nativas.

Si ya tiene un sitio web o una aplicación web, puede implementar poco a poco las características que definen un PWA, como notificaciones, caché de archivos, ejecución en modo off-line y otras posibilidades que hacen que el usuario se sienta en una aplicación nativa.

<div class="alert alert-warning">
La plataforma VTEX <strong>no</strong> posee características nativas para transformar su tienda en PWA. Esta apenas ofrece las condiciones para que se realice esa implementación. Las tiendas desarrolladas con VTEX IO Store Framework tienen este recurso nativamente.
</div>

## Google define con exactitud lo que se espera de un PWA:

__Progresivo:__ para cualquier usuario, independientemente del navegador.

__Responsivo:__ se adecua a cualquier dispositivo: desktop, tablet y mobile.

__Independiente de conexión:__ funciona incluso cuando el usuario está desconectado.

__Semejante a app:__ el usuario se siente en una aplicación nativa.

__Actualizado:__ no es necesario descargar actualizaciones, el navegador simplemente detecta y actualiza cuando es necesario, gracias al Service Worker.

__Seguro:__ proporcionado apenas con HTTPS.

__Envolvente:__ a través de notificaciones push, el usuario tiene que ser involucrado constantemente.

__Instalable:__ es posible añadir un ícono en la pantalla principal del smartphone, sin tener que acceder a una tienda de aplicaciones.

__Compartible:__ fácil de compartir por URL, sin instalación compleja.

## Cómo crear su PWA desde cero

Antes de comenzar, usted debe tener la aplicación que agregará las técnicas necesarias para que su sitio web o aplicación web se transforme en un PWA.

### Primer paso
Debe crear el archivo manifest.json. El manifiesto de la aplicación web proporciona información sobre una aplicación (como nombre, autor, ícono y descripción) en un archivo de texto JSON. El propósito del archivo manifest es transformar una aplicación web en algo instalable en un smartphone.

__Para crear el JSON, realice el siguiente procedimiento: __

1. En el Admin VTEX, accede a **Storefront > Layout**.
2. Haga clic en **CMS**.
3. Después, en la pestaña __Código__.
4. Haga clic en __Nuevo__ y luego en __Archivo__.
5. Incluya el nombre del archivo exactamente como: __manifest.json__
6. Ingrese la información de la aplicación (como nombre, autor, ícono y descripción).
7. Para finalizar, haga clic en __Guardar__.

__Su archivo debe ser importado en index.html, así:__

`<link rel="manifest" href="/files/manifest.json">`

Después de eso, su aplicación web podrá abrir una pantalla de bienvenida exactamente igual a las apps nativas.

### Segundo paso
Usted debe crear un Service Worker para tener la opción de manipular las solicitudes que son hechas por su aplicación y con eso posibilitar recursos que beneficien a su PWA, como sincronización periódica, notificaciones push y hasta ejecución en modo off-line.

__Para crear el script, realice el procedimiento a continuación:__

1.En el Admin VTEX, accede a **Storefront > Layout**.
2. Haga clic en **CMS**.
3. Después, en la pestaña __Código__.
4. Haga clic en __Nuevo__ y luego en __Archivo__.
5. Incluya el nombre del archivo exactamente como: __service-worker.js__
6. Programe la funcionalidad.
7. Para finalizar, haga clic en __Guardar__.

A pesar de que el archivo se encuentra en `/files/service-worker.js`, este recibe el header `Service-Worker-Allowed` con valor `/`, lo que permite interceptar requests desde la raíz del sitio web.

### Tercer paso
La forma fácil de saber si usted está en el camino correcto en la construcción de su PWA es usar alguna herramienta de inspección, como Lighthouse de Google.

Solo tiene que descargar la extensión, entrar en el sitio web de su tienda y hacer clic en el widget. A continuación, espere el resultado y vea la retroalimentación de la herramienta. Lo ideal es ir inspeccionando poco a poco, para saber qué ítems faltan.

Haciendo esto, usted tendrá una versión de su sitio web con apariencia de app, por un costo mucho más bajo.
