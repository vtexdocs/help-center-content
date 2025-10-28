---
title: 'Accessing the beta environment through the myvtex.com domain'
id: 3BHM289568gcSwk2O80Asu
status: PUBLISHED
createdAt: 2018-07-26T18:09:29.968Z
updatedAt: 2024-03-13T12:00:57.622Z
publishedAt: 2024-03-12T19:18:51.136Z
firstPublishedAt: 2018-07-26T18:43:10.906Z
contentType: tutorial
productTeam: Reliability
author: authors_59
slugEN: accessing-the-beta-environment
legacySlug: accessing-the-beta-environment
locale: en
subcategoryId: Se4oi5LroIII2Ei0uGAoE
---

On VTEX, all stores have a beta environment, where platform users (sales associates, developers, or other authorized users) can run tests to validate new settings or versions of applications/services before making changes to the stable environment.

> ℹ️ The beta environment is an exact replica of the stable environment, including store data and configurations.

In this way, **changing data in the beta environment will also affect data in the stable environment**.

## Accessing the beta environment
To access the beta environment in your store, enable the `vtex-commerce-env` cookie as follows: 

<ol start="1">
  <li>In the VTEX Admin, access the Dev. Tools in your browser by pressing the `F12` key or right-clicking and choosing the **Inspect** option.
.</li>
  <li>In the top bar of the screen, go to the **Application** tab, and in the left sidebar, under Cookies, click your store's URL.
</li>
  <li>In the table, enter the information below in the cells of the last row:
</li>
  <ul>
<li>Name: `vtex-commerce-env`</li>
<li>Value: `beta`
</li>
</ul>

![beta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/about-the-admin/admin-overview/accessing-the-beta-environment_1.png)

<li>Refresh the page by pressing `F5` or clicking the refresh button in your browser. Once the page has loaded, the store's Admin will already be in beta. 
</li>
</ol>

> ℹ️ To go back to the main store environment, return to the Dev. Tools panel in your browser and remove the vtex-commerce-env cookie. Refresh the page again to switch back to the **stable** environment.
