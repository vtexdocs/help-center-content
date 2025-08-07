---
title: "How to turn my store's website into a PWA"
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
locale: en
legacySlug: how-to-turn-my-store-website-into-a-pwa
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div class = "alert alert-info">
  <p>This article is only valid for stores using CMS Portal (Legacy).</p>
</div>

A Progressive Web App (PWA) is a set of techniques for developing web applications that add features previously restricted to native applications.

- **Progressive:** Works in any browser.
- **Responsive:** Adapts to any device, whether desktop, tablet, or mobile.
- **Connection-independent:** Works even when the user is offline.
- **App-like experience:** Provides a user experience comparable to native applications.
- **Updated:** No need to download any updates, as the Service Worker allows the browser to automatically detect and update when needed.
- **Safe:** Requires HTTPS connection.
- **Engaging:** Allows push notifications to interact with the user.
- **Installable:** You can add an icon to the main screen of your mobile device without accessing an app store.
- **Shareable:** Sharing is facilitated through URL, without complex installation.

If you already have a website or web application, you can gradually implement the features that define a PWA, such as notifications, file caching, offline execution, and other options that make users feel like they're using a native application.

<div class="alert alert-warning">
VTEX <strong>doesn't</strong> offer native solutions for conversion to PWA in the CMS Portal (Legacy). VTEX, however, provides the basic infrastructure for manual implementation. Stores developed with the VTEX IO Store Framework have this feature natively.</div>

## Instructions

### Create the manifest.json file

The web application's `manifest.json` file provides information about an application (such as name, author, icon, and description) in a JSON text file. This file enables a web application to be installed on a smartphone.

To create the JSON, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**.
2. Click the gear icon ⚙️ for the desired site.
3. In the `Code` tab, click `New`.
4. Choose the `File` option.
5. In **File name** field, type `manifest.json`.
6. Enter the application details (such as name, icon, and description), as shown in the example below:

    ```json
    {
      "name": "My Store",
      "short_name": "Store",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#fff",
      "theme_color": "#2F3DB2",
      "icons": [{
      	"src": "/arquivos/icon.png",
      	"sizes": "192x192",
      	"type": "image/png"
      }]
    }
    ```

7. Click `Save`.

<div class="alert alert-info"> <p><strong>Tip:</strong> Use icons in a minimum resolution of 192x192px and format hexadecimal colors following your visual identity.</p> </div>

### Add the `manifest.json` file to the web application

After creating the `manifest.json` file, add the following line inside the `<head>` section of your `index.html` file:

```
<link rel="manifest" href="/arquivos/manifest.json">
```

With this, your web application will be able to open a splash screen like native applications.

### Create a Service Worker

Service Worker is a script that your browser runs in the background, separate from the web. It enables features such as periodic syncs, push notifications, and offline execution.

To create the script, follow the steps below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**.
2. Click the gear icon ⚙️ for the desired website.
3. In the `Code` tab, click `New`.
4. Choose the `File` option.
5.  In the **File name** field, type `service-worker.js`.
6.  Implement the feature as in the example below:

    ```js
    // --- CACHE SETTINGS ---
    // Defines the cache version to facilitate future updates

    const CACHE = 'cache-v1';

    // List of critical resources for pre-caching (pages, CSS, images)
    const FILES = ['/', '/files/main.css', '/files/logo.jpg'];

    // --- INSTALLATION EVENT ---
    // Executed once when the Service Worker is registered

    self.addEventListener('install', (e) => {
       // Opens the cache and stores the defined resources
      e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
    });

    // --- FETCH EVENT ---
    // Intercepts all network requests on the page

    self.addEventListener('fetch', (e) => {
      // Cache-first strategy:
      // 1. Tries to respond using cache resources.
      // 2. If not found, fetches from the network.

      e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
    });
    ```

7. Click **Save**.

Although the file is in `/files/service-worker.js`, it receives the header `Service-Worker-Allowed` with the value `/`, allowing to intercept requests from the site's root.

<div class="alert alert-warning"> <p><strong>Warning:</strong> The Service Worker will only work in HTTPS environments. Always test in production or use secure tunnels in development.</p> </div>

To learn more about service workers, see Google [Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/) documentation.

### Check your PWA implementation

To ensure that your site is on the right track when building your PWA, use inspection tools such as Google's Lighthouse.

To inspect your site using Lighthouse, follow the steps below:

1. Download the Lighthouse extension in your browser.
2. Go to your store website.
3. Click the tool widget.
4. Please wait for the analysis and view the generated result.

To learn more, see the VTEX Developer Portal guide [Getting started with Lighthouse](https://developers.vtex.com/docs/guides/storefront-getting-started-with-lighthouse).
