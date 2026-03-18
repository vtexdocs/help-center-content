---
title: 'Blocking customizations to troubleshoot frontend issues in the store'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2023-04-12T14:38:14.185Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-frontend-issues-in-the-store
locale: en
legacySlug: blocking-customizations-to-troubleshoot-frontend-issues-in-the-store
---

> ⚠️ This tutorial only applies to CMS Portal (Legacy) stores.

In this article, you'll learn how to check the source of a frontend issue. The first step is to block frontend customizations. Based on the site’s response, you'll be able to understand whether the issue originates from the information provided natively by VTEX or from a page customization.

To do this, we will show you how to remove the customizations using a native Chrome tool, **DevTools**.

## Configuring DevTools

To configure [Chrome DevTools](https://developer.chrome.com/docs/devtools/), follow the steps below.

1. Open [Google Chrome](https://www.google.com/chrome/) on your computer.
2. Press the `F12` button on your keyboard or right-click anywhere on the screen with your mouse and select **Inspect**.
3. Click the vertical ellipsis in the top right corner of the page, as shown in the image below.
4. Select **More tools** and then **Request conditions** to block all customizations made via CSS, JavaScript, and Google Tag Manager.

![Customizations1 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_1.png)

5. The **Request conditions** tab will open as shown in the image below:

![Customizations2 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_2.png)

6. Click `+` to set the first resource to be blocked. To add more resources, click `+` again and, after defining it, click `Add`. This configuration only needs to be set once in your browser. Include the items below:

- `*:/arquivos/*.js`
- `*:/files/*js`
- `*:/arquivos/*.css`
- `*:/files/*.css`
- `*://www.googletagmanager.com/gtm.js*`

![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-11914/docs/pt/faq/shopping/request-conditions.png)

7. Check the **Enable blocking and throttling** option and all the checkboxes next to each configured resource. This will be the default configuration, with all options enabled for blocking.
8. Now refresh the page. It will display without the custom components.

![Customizations4 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja_4.png)

Check whether the unwanted behavior you initially observed occurs only when the customization is active. If it does, contact your frontend team and have them check the behavior.

If the unwanted behavior persists even when customizations are blocked, open a ticket with [VTEX Support](https://supporticket.vtex.com/support).
