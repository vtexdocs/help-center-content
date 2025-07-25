---
title: 'Blocking customizations to troubleshoot front-end issues'
id: 5c1a4bvVK8rAvKLczhkCnY
status: PUBLISHED
createdAt: 2020-04-20T12:59:14.576Z
updatedAt: 2023-04-12T14:38:14.185Z
publishedAt: 2023-04-12T14:38:14.185Z
firstPublishedAt: 2020-04-20T13:31:24.105Z
contentType: frequentlyAskedQuestion
productTeam: Shopping
author: 4iKDU1m0huXy1qFWff7vY5
slugEN: blocking-customizations-to-troubleshoot-front-end-issues
locale: en
legacySlug: como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja
---

<div class="alert alert-warning">
  Tutorial valid only for Legacy CMS Stores.
</div>

In this article, you will learn how to find the origin of the problem. The first step is to block front-end customizations. Depending on the website’s response, you will be able to identify whether the problem is in the information that VTEX delivers natively or in your page customization.

To do that, we will show you how to remove the customizations using a Chrome native tool: **DevTools**. You can also use Chrome’s apps and extensions for removing them. However, the native solution tends to be more secure and efficient.

## How to configure DevTools

1. To open DevTools, open Chrome and click **F12** or **right-click** anywhere on the page and select **Inspect**.

![Customizations1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_1.png)

2. Search for the **Request Blocking** function to block all customizations made via CSS, JavaScript, and Google Tag Manager. Click on the three vertical dots on the top right of the page, as indicated in the image below. Select **More Tools** and then **Request Blocking**.

![Customizations2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_2.png)

3. A box will be displayed, as in the image below:

![Customizations3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_3.png)

4. Click on the **Request Blocking** tab.

Now you will determine the features you want to block. This configuration must be done only once.

5. Click on the “+” signal and include the following items one by one:
- `*/arquivos/*.js`
- `*/files/*js`
- `*/arquivos/*.css`
- `*/files/*.css`
- `*gtm.js*`

The box will finally be displayed as in the image below:

![Customizations4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_4.png)

Please remember that this configuration must be done only __once__.

## How to block customizations using DevTools

1. Select the checkbox **Enable request blocking** and enable all checkboxes.

2. This configuration will be set by default, with all options for blocking enabled.

![Customizations5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_5.png)

3. Now refresh the page by clicking on **F5**. The page will be displayed without custom components.

![Customizations6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/Shopping/blocking-customizations-to-troubleshoot-front-end-issues_6.png)

4. To view customizations again, deselect the checkbox **Enable request blocking** and refresh the page.

Check if the unexpected behavior you initially observed only happens when customization is enabled. If that is the case, contact the team responsible for your front-end to investigate the problem.

If the unexpected behavior persists even after blocking customizations, open a ticket to the VTEX support explaining the problems you are experiencing.

