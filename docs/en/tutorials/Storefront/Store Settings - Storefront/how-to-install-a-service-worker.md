---
title: 'How to install a Service Worker'
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2024-01-19T12:54:32.525Z
publishedAt: 2024-01-19T12:54:32.525Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 2AhArvGNSPKwUAd8GOz0iU
slug: how-to-install-a-service-worker
locale: en
legacySlug: how-to-install-a-service-worker
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Service Worker is a script that your browser runs in the background, separate from the Web, enabling features such as periodic synchronization, push notifications and even running offline.

To create the script, follow the step-by-step instructions below:

1. In the VTEX Admin, go to **Store Settings > Storefront > Checkout**, or type **Checkout** in the search bar at the top of the page.
2. Click the <i class="fas fa-cog"></i> icon of the desired site.
3. In the `Code` tab, click the `New` buttton.
4. Then click on `File`.
5. Fill in the file name exactly like: `service-worker.js`.
6. Click the `Create` button.
7. Set the feature.
8. Click the `Save` button.

Although the file is in `/files/service-worker.js`, it receives the `Service-Worker-Allowed` header with the value `/`, which allows you to intercept requests from the site root.

For more information, see Google Developers [Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/).

### Related articles

- [How to turn my store into a PWA](https://help.vtex.com/en/tutorial/how-to-turn-my-store-website-into-a-pwa--3i8VmYeToAUGKgo2kKK6I2)
