---
title: 'How to turn my store's website into a PWA'
id: 3i8VmYeToAUGKgo2kKK6I2
status: PUBLISHED
createdAt: 2018-03-19T18:20:25.794Z
updatedAt: 2023-03-29T13:18:46.962Z
publishedAt: 2023-03-29T13:18:46.962Z
firstPublishedAt: 2018-03-20T14:54:55.189Z
contentType: tutorial
productTeam: Others
author: 7FpKZ0rc6k4WqeymES80cw
slug: how-to-turn-my-store-website-into-a-pwa
legacySlug: how-to-turn-my-store-website-into-a-pwa
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial valid only for Legacy CMS Stores.
</div>

PWA is the English abbreviation for Progressive Web App - a set of techniques used to develop web applications and add features that were previously only possible in native apps.

If you already have a website or web application, you can slowly implement the features that define a PWA, such as notifications, file caching, offline execution, and other features that make the user feel in a native application.

<div class="alert alert-warning">
VTEX <strong>platform</strong> does not have native features to turn your store into a PWA. It only provides the conditions for this implementation to be made. This resource is available natively for stores that were developed using VTEX IO Store Framework .
</div>

## Google defines exactly what is expected from a PWA:

__Progressive:__ for any user, regardless of the browser.

__Responsive:__ fits any device: desktop, tablet and mobile.

__Independent connection:__ works even when the user is offline.

__Similar to the app:__ the user feels in a native application.

__Updated:__ it's not necessary to download updates, the browser simply detects and updates when necessary, thanks to Service Worker.

__Safe:__ only provided with HTTPS.

__Engaging:__ through push notifications, the user may be constantly engaged.

__Installable:__ an icon may be added to the smartphone's home screen, not being necessary to enter a store.

__Sharable:__ sharing is facilitated through URL, without complex installation.

## How to create your PWA from scratch

Before you begin, you should have the application that will add the techniques necessary for your website or web application to be transformed into a PWA.

### First step
You must create the manifest.json file. The web application manifest provides information about an application (such as name, author, icon, and description) in a JSON text file. The purpose of the manifest file is to turn a web application into something installable on a smartphone.

__To create the JSON, follow the step-by-step below:__

1. In the VTEX Admin, access **Storefront > Layout**.
2. Click on the **CMS** folder.
3. Then on the __Code__ tab.
4. Click on __New__ and then on __File__.
5. Include the file name exactly as: __manifest.json__.
6. Input the app information (such as name, author, icon, and description).
7. To finish, click on __Save__.

__Your file should be imported into index.html, like this: __

`<link rel="manifest" href="/files/manifest.json">`

After that, your web application could open a screen just like native apps.

### Second step

You must create a Service Worker to have the option to handle requests that are made by your application and thus enable features that benefit your PWA, such as periodic synchronization, push notifications, and even running offline.

__To create the script, follow the step-by-step below:__

1. In the VTEX Admin, access **Storefront > Layout**.
2. Click on the **CMS** folder.
3. Then on the __Code__ tab.
4. Click on __New__ and then on __File__.
5. Include the file name exactly as follows: __service-worker.js__.
6. Program the functionality.
7. To finish, click on __Save__

Although the file is in `/files/service-worker.js`, it receives the `Service-Worker-Allowed` header with `/` value, which allows you to intercept requests from the site's root.

### Third step

The easy way to know if you are on the right track in building your PWA is to use any inspection tool, such as Google Lighthouse.

Just download the extension, go to your store's website and click on the widget. Then wait for the result and see the feedback given by the tool. The ideal is to inspect gradually, to know what items are missing.

Following the above mentioned steps, you'll get a version of your app-facing site at a much lower cost.
