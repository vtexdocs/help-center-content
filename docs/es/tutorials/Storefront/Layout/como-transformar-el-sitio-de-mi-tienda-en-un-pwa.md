---
title: 'Cómo transformar el sitio de mi tienda en un PWA'
id: 3i8VmYeToAUGKgo2kKK6I2
status: PUBLISHED
createdAt: 2018-03-19T18:20:25.794Z
updatedAt: 2025-02-27T19:52:00.583Z
publishedAt: 2025-02-27T19:52:00.583Z
firstPublishedAt: 2018-03-20T14:54:55.189Z
contentType: tutorial
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slugEN: how-to-turn-my-store-website-into-a-pwa
locale: es
legacySlug: como-transformar-el-sitio-de-mi-tienda-en-un-pwa
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-info">
  <p>Este artículo solo es válido para tiendas CMS Portal Legado.</p>
</div>

Progressive Web App (PWA) es un conjunto de técnicas utilizadas para desarrollar aplicaciones web y utilizar funcionalidades que de otro modo estarían restringidas a aplicaciones nativas.

- **Progresiva:** funciona en cualquier navegador.
- **Responsiva:** se adapta a cualquier dispositivo: escritorio, tablet o móvil.
- **No depende de conexión a internet:** funciona incluso cuando el usuario está offline.
- **Similar a la aplicación:** ofrece una experiencia de uso comparable a las aplicaciones nativas.
- **Actualizada:** no es necesario descargar actualizaciones, ya que el service worker permite que el navegador detecte y realice actualizaciones automáticamente cuando sea necesario.
- **Segura:** requiere conexión HTTPS.
- **Interactiva:** permite notificaciones push para interacción con el usuario.
- **Instalable:** es posible agregar un ícono en la pantalla principal del dispositivo móvil, sin necesidad de acceder a una tienda de aplicaciones.
- **Compartible:** se puede compartir por URL, sin instalación compleja.

Si ya tienes un sitio o aplicación web, puedes implementar poco a poco las características que definen una PWA, como notificaciones, caché de archivos, ejecución offline y otras cosas que hagan al usuario sentirse como si estuviera utilizando una aplicación nativa.

<div class="alert alert-warning">
VTEX <strong>no</strong> ofrece soluciones nativas para conversión a PWA en el CMS Portal Legado, aunque sí tiene la infraestructura básica para una implementación manual. Las tiendas desarrolladas con VTEX IO Store Framework tienen este recurso de forma nativa.</div>

## Instrucciones

### Crea el archivo manifest.json

El archivo `manifest.json` de una aplicación web proporciona información sobre la aplicación (como nombre, autor, ícono y descripción) en un archivo de texto JSON. Se crea para transformar una aplicación web en una entidad que se puede instalar en un smartphone.

Para crear el archivo JSON, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**.
2. Haz clic en el ícono del engranaje ⚙️ del sitio web deseado.
3. En la pestaña `Código`, haz clic en `Nuevo`.
4. Selecciona la opción `Archivo`.
5. En el campo **Nombre del archivo**, ingresa `manifest.json`.
6. Ingresa la información de la aplicación (como nombre, ícono y descripción), siguiendo el ejemplo a continuación:

    ```json
    {
      "name": "Mi tienda",
      "short_name": "Tienda",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#fff",
      "theme_color": "#2F3DB2",
      "icons": [{
        "src": "/archivos/icon.png",
        "sizes": "192x192",
        "type": "image/png"
      }]
    }
    ```

7. Haz clic en `Guardar`.

<div class="alert alert-info"> <p><strong>Consejo:</strong> Utiliza íconos con una resolución mínima de 192x192 px y prepara colores hexadecimales que se ajusten a tu identidad visual.</p> </div>

### Agrega el archivo `manifest.json` a la aplicación web

Después de crear el archivo `manifest.json`, agrega la siguiente fila dentro de la sección `<head>` de tu archivo `index.html`:

```
<link rel="manifest" href="/arquivos/manifest.json">
```

Esto permite que tu aplicación web abra una pantalla de presentación (splash screen) idéntica a la de aplicaciones nativas.

### Crea un service worker

Un service worker es un script que el navegador ejecuta en segundo plano, separado de la web, que habilita recursos como sincronización periódica, notificaciones push y ejecución offline.

Para crear el script, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**.
2. Haz clic en el ícono del engranaje ⚙️ del sitio web deseado.
3. En la pestaña `Código`, haz clic en `Nuevo`.
4. Selecciona la opción `Archivo`.
5.  En el campo **Nombre del archivo**, ingresa `service-worker.js`.
6.  Programa la funcionalidad siguiendo el ejemplo a continuación:

    ```js
    // --- CONFIGURACIÓN DE LA CACHÉ ---
    // Define la versión de la caché para facilitar actualizaciones futuras

    const CACHE = 'cache-v1';

    // Lista de recursos críticos para almacenamiento previo en caché (páginas, CSS, imágenes)
    const FILES = ['/', '/archivos/main.css', '/archivos/logotipo.jpg'];

    // --- EVENTO DE INSTALACIÓN ---
    // Se ejecuta una vez cuando se registra el service worker

    self.addEventListener('install', (e) => {
       // Abre la caché y almacena los recursos definidos
      e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
    });

    // --- EVENTO DE FETCH ---
    // Intercepta todas los requests de red de la página

    self.addEventListener('fetch', (e) => {
      // Estrategia cache first:
      // 1. Intenta responder con recurso de la caché
      // 2. Si no lo encuentra, busca en la red

      e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
    });
    ```

7. Haz clic en **Guardar**.

Aunque esté ubicado en `/archivos/service-worker.js`, el archivo recibe el encabezado `Service-Worker-Allowed` con valor `/`, lo que permite interceptar requests de la raíz del sitio web.

<div class="alert alert-warning"> <p><strong>Atención:</strong> El service worker solo funciona en entornos HTTPS. Siempre debes realizar pruebas en producción o utilizar tunnels seguros en el entorno de desarrollo.</p></div>

Para saber más sobre los service workers, consulta la documentación de Google [Web Fundamentals](https://developer.chrome.com/docs/workbox/service-worker-overview?hl=es-419).

### Verifica la implementación de la PWA

Para garantizar el desarrollo correcto de tu sitio web para que funcione como una PWA, utiliza herramientas de inspección, como Google Lighthouse.

Para inspeccionar tu sitio web con Lighthouse, sigue los pasos a continuación:

1. Descarga la extensión de Lighthouse en tu navegador.
2. Accede al sitio web de tu tienda.
3. Haz clic en el widget de la herramienta.
4. Espera el análisis y abre el feedback generado.

Para saber más, consulta la guía [Getting started with Lighthouse](https://developers.vtex.com/docs/guides/storefront-getting-started-with-lighthouse) en VTEX Developer Portal.
