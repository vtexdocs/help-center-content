---
title: 'Rendering the app content in the admin panel'
id: 7dMDCQlF84iAy2QKkCoW6A
status: ARCHIVED
createdAt: 2018-06-06T19:08:57.429Z
updatedAt: 2020-08-17T14:20:55.283Z
publishedAt: 
firstPublishedAt: 2018-06-07T13:45:22.125Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slugEN: bringing-app-content-into-the-admin-panel
locale: en
legacySlug: bringing-app-content-into-the-admin-panel
subcategoryId: Z46a6rHVAaAucoiW0skQQ
---

## Correcting the URL

After creating a React application, the URL is unsatisfyingly not pointing correctly to the Admin URL.

To fix this we will need to change the pages.json file inside our application’s folder accordingly.

Open up your favorite text editor and navigate to your project’s folder.

Adding a simple `“admin/“` to the beginning of the page name as well as to the route path should make it look like this:

![2 pages](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/VTEX%20IO/VTEX%20IO%20setup/bringing-app-content-into-the-admin-panel_1.png)

## Fixing dependencies

We must now navigate to the manifest.json file where we list all of our dependancies.

Let’s add `vtex.admin: “1.x”` to out dependencies. VTEX IO is strict about requiring explicit version.

![3 manifest](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/VTEX%20IO/VTEX%20IO%20setup/bringing-app-content-into-the-admin-panel_2.png)

## The final touches

If we save and wait for our page to refresh we should notice that:
- Our “Hello World” string is rendered beautifully inside the Admin panel.
- The loading bar sequence never fully stops.

To give our React app a nice finishing touch and to leverage on the power of lifecycle management we will be adding a simple React component that will tell VTEX that our component mounted successsfully.

Navigate to index.js and add the `componentDidMount()` lifecycle method above the render function call.

Your React application should now have the proper URL path, the correct dependencies and an index.js that makes use of React’s lifecycle method to communicate with VTEX (through `window.postmessage`) to terminate the loading process.

![4 final touches](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/VTEX%20IO/VTEX%20IO%20setup/bringing-app-content-into-the-admin-panel_3.png) 
![5 completo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/VTEX%20IO/VTEX%20IO%20setup/bringing-app-content-into-the-admin-panel_4.png)
