---
title: 'Managing URL redirects'
id: 3UJuFrU8imSVWg134mkvJV
status: PUBLISHED
createdAt: 2022-02-03T13:17:46.873Z
updatedAt: 2025-08-12T19:39:14.527Z
publishedAt: 2025-08-12T19:39:14.527Z
firstPublishedAt: 2022-02-03T14:42:10.000Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-url-redirects
legacySlug: managing-url-redirects
locale: en
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

**Redirects** is a feature that redirects the customer to any other internal or external page. It is done in the search area using selected terms or filters.

> ⚠️ **Stores using Store Framework**: This functionality is available natively. </br> **Stores using FastStore**: <ul> <li>Refer to the guide [Managing URLs with redirects and rewrite paths](https://developers.vtex.com/docs/guides/faststore/routing-managing-urls-with-redirects-and-rewrite-paths) to manage redirects.</li> <li>For projects with more than 1,024 redirects, enable the beta flow by activating the `enableRedirects` flag to use the Redirects feature in the Admin. Learn more at [(Beta) Enabling redirects using the enableRedirects flag](https://developers.vtex.com/docs/guides/faststore/routing-managing-urls-with-redirects-and-rewrite-paths#beta-enabling-redirects-using-the-enableredirects-flag).</li> </ul>

## Before you begin

To create, edit, or remove redirects, the Admin user must have a role that has the [License Manager](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **CMS Settings** resource. 

You can grant the user a role with the resource by following the instructions in the [How to manage users](https://help.vtex.com/en/tutorial/managing-users--tutorials_512#editing-users) article or create a new role including the resource by following the instructions in the [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) article.

## Creating redirects

Multiple redirects are possible in a single URL. To create a redirect, follow the instructions below. 

1. In the VTEX Admin, click **Storefront** > **Redirects**.
2. Click `New Redirect`.
3. Fill in the following fields: 
- **From**: Enter the page URL from which you want to redirect visitors. The URL should not contain the domain name, for example: `/mask-regenerator-marine-algae/p`.
- **To**: Enter the page URL to which you want visitors to be redirected. The URL must not contain the domain name, for example: `/conditioner-ultra-hydrating-milk conditioner/p`. 

> ⚠️ QueryString parameters (e.g., `?key=value`) are not forwarded in redirects by default.

4. In the checkbox, indicate whether this redirect is temporary or permanent. If it is temporary, you need to set an end date.
5. Click `Save`.

![gerenciando redirecionamentos en 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/Storefront/Pages/managing-url-redirects_1.png)

## Importing redirects

Follow the steps below to import a redirect.

1. Click <i class="fas fa-upload"></i> `Import`.
2. Choose a CSV file from your computer, making sure that the separator is a semicolon (`;`).
3. Click `Import File`.
4. Click `Save`.

> ⚠️ Please note that some editors can automatically change the separator. Therefore, before importing a file, make sure that it is correctly formatted as CSV and that it uses a semicolon (`;`) as the value separator. Files containing other separators, such as comma (`,`) or tab (`&nbsp;&nbsp;`), are not supported.<br><br> Some editors, such as Google Sheets, export CSV files using a comma (`,`) as the default separator and may not accept semicolons (`;`). In these cases, we recommend using other editors that allow you to replace separators or save the file using semicolons (`;`) as separators.

## Exporting redirects 

If you want to export your redirects, click <i class="fas fa-download"></i> `Export`, and they will be downloaded to your computer. 

<div class="alert-info">
You cannot create redirects via predefined routes like "home", "/", "login", "account", etc. We recommend creating them manually by following the instructions mentioned above.
</div>

