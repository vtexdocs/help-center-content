---
title: "Creating a custom page in Legacy CMS stores"
createdAt: 2026-04-27T19:13:21.674Z
locale: en
slugEN: "creating-a-custom-page-in-legacy-cms-stores"
contentType: tutorial
---

This guide describes how to create a custom page in stores developed with [CMS Portal (Legacy)](https://help.vtex.com/docs/tracks/legacy-cms-portal). By following these instructions, you'll be able to set up a new page, link a template, and make it available in a custom URL.

## Instructions

### Configure the template

1. In the VTEX Admin, go to **Storefront > Layout**.
2. In the **Layout** section, click **CMS > HTML Templates**.
3. Decide whether you will:
   * Reuse an existing template that already has the necessary layout.
   * Create a specific new template for the custom page. If you want to create a new template, follow the instructions in the guide [Creating and editing a page template](https://help.vtex.com/docs/tutorials/how-to-create-a-page-template).
4. Open the template that will be used on the custom page and configure the structure per the desired design:
   * Add placeholders or content components, such as banners, HTML boxes, and product shelves.
   * Configure the required options, such as title, meta tags, or layout options provided by the [native controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) of Legacy CMS.
5. Click `Save Template` to save the template.

> ℹ️ Learn more in [What are templates?](https://help.vtex.com/docs/tutorials/what-are-templates)

![new-layout-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/storefront/cms-portal-legacy/layout/new-layout-en.png)

### Create the custom page URL

Now, you need to create the custom page URL path:

1. In the VTEX Admin, go to **Storefront > Layout**.
2. In the **Layout** section, go to **CMS > Sites and Channels**.
3. Click the desired website.
4. Click the root folder (`/`).
5. On the right side of the screen, click `new folder`.
6. Complete the fields based on the guidelines below:
   * **Folder Name:** URL path.
   * **Marketing Context (Default):** Defines whether the page can be accessed by [UTM](https://help.vtex.com/docs/tutorials/what-are-utm-source-utm-campaign-and-utm-medium) parameters. This field is optional.
   * **Search Context (Default):** Adds search parameters.
   * **Protocol:** Defines the communication protocol between a web server and a web browser. Recommended: `HTTPS`.
   * **Cache Type:** Defines the browser cache storage behavior. Recommended: `Local and Remote`.
   * **Authentication Required?:** Defines whether the page can be accessed only after user authentication. If this option is enabled, only authenticated users can access the page.
7. Click `Save Folder` to save the new page.

![new-folder-en](https://cdn.jsdelivr.net/gh/vtexdocs/help-center-content@main/docs/en/tutorials/storefront/cms-portal-legacy/layout/new-folder-en.gif)

### Create the layout for the new page

Now, you need to create a layout and link it to the template you configured in the [first step](#configure-the-template):

1. Click the folder created in the [previous step](#create-the-custom-page-url).
2. On the right side of the screen, click `new layout` to create a new layout.
3. Complete the fields based on the guidelines below:
   * **Layout name:** Layout name in the CMS.
   * **Body Class:** (Optional) Defines a CSS class applied to the page `<body>` element used to customize the style on the frontend.
   * **Template:** Select the HTML template configured in the [first step](#configure-the-template).
   * **Active:** If you check this box, the page becomes active and visible through the URL.
   * **Default page:** If you check this box, the page will be considered as the default page for the folder (for example, the homepage of a specific directory).
4. Click `Save Layout` at the top of the page to save the layout.

To learn more, see the guide [Associating a template with a layout](https://help.vtex.com/docs/tutorials/associating-a-template-with-a-layout).
