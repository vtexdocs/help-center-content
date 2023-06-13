---
title: How to install a Service Worker
id: 2H057iW0mQGguKAciwAuMe
status: PUBLISHED
createdAt: 2018-03-13T14:53:11.260Z
updatedAt: 2023-04-05T17:55:03.904Z
publishedAt: 2023-04-05T17:55:03.904Z
firstPublishedAt: 2018-03-13T17:48:34.728Z
contentType: tutorial
productTeam: Financial
author: 7FpKZ0rc6k4WqeymES80cw
slug: how-to-install-a-service-worker
legacySlug: how-to-install-a-service-worker
subcategory: 
---

Service Worker is a script that your browser runs in the background, separate from the Web, enabling features such as periodic synchronization, push notifications and even running offline.

To create the script, follow the step-by-step instructions below:

1. In the VTEX Admin, access the module __Portal__.
2. Click the __Settings__ icon.
3. Then click on the __Code__ tab.
4. Click __New__ and then __File__.
5. Include the file name exactly as: ` service-worker.js`.
6. Set the __feature__.
7. To finish, click __Save__.

Although the file is in `/files/service-worker.js`, it receives the `Service-Worker-Allowed` header with the value `/`, which allows you to intercept requests from the site root.

For [more information](https://developers.google.com/web/fundamentals/primers/service-workers/), see Google Developers Web Fundamentals.

### Related articles
- [How to turn my store into a PWA](https://help.vtex.com/en/tutorial/how-to-turn-my-store-website-into-a-pwa--3i8VmYeToAUGKgo2kKK6I2)
