---
title: 'Rendering the app content in the admin panel'
id: 7dMDCQlF84iAy2QKkCoW6A
status: DRAFT
createdAt: 2018-06-06T19:08:57.429Z
updatedAt: 2020-08-17T14:20:55.283Z
publishedAt: 
firstPublishedAt: 2018-06-07T13:45:22.125Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: bringing-app-content-into-the-admin-panel
locale: en
legacySlug: bringing-app-content-into-the-admin-panel
subcategory: Z46a6rHVAaAucoiW0skQQ
---

## Correcting the URL

After creating a React application, the URL is unsatisfyingly not pointing correctly to the Admin URL.

To fix this we will need to change the pages.json file inside our application’s folder accordingly.

Open up your favorite text editor and navigate to your project’s folder.

Adding a simple `“admin/“` to the beginning of the page name as well as to the route path should make it look like this:

![2 pages](https://images.ctfassets.net/alneenqid6w5/1JbyPjpfd2m2Qg6YuIG0WG/c2e98ed69b39f41703c49cda8ee6f578/2_pages.png)

## Fixing dependencies

We must now navigate to the manifest.json file where we list all of our dependancies.

Let’s add `vtex.admin: “1.x”` to out dependencies. VTEX IO is strict about requiring explicit version.

![3 manifest](https://images.ctfassets.net/alneenqid6w5/m02IxioqqcMgEygiOkakI/1bf3d7cf52f72a46a5d3f2a9afaeb40a/3_manifest.png)

## The final touches

If we save and wait for our page to refresh we should notice that:
- Our “Hello World” string is rendered beautifully inside the Admin panel.
- The loading bar sequence never fully stops.

To give our React app a nice finishing touch and to leverage on the power of lifecycle management we will be adding a simple React component that will tell VTEX that our component mounted successsfully.

Navigate to index.js and add the `componentDidMount()` lifecycle method above the render function call.

Your React application should now have the proper URL path, the correct dependencies and an index.js that makes use of React’s lifecycle method to communicate with VTEX (through `window.postmessage`) to terminate the loading process.

![4 final touches](https://images.ctfassets.net/alneenqid6w5/3FhYXrK6qAeW6U8AK8S2uI/adca7a874c3a7fd5f1d0558c1664a54b/4_final_touches.png) 
![5 completo](https://images.ctfassets.net/alneenqid6w5/2u3bfIpopSSeqiq6o0KW2q/1173fb70b77505ec92ab126efd908d63/5_completo.png)
