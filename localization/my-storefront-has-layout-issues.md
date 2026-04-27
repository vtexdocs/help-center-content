---
title: "My storefront has layout issues"
createdAt: 2026-03-09T15:40:27.806Z
locale: en
slugEN: my-storefront-has-layout-issues
tags:
  - Frontend
  - CMS
  - Layout
---

This article helps you investigate layout issues in your storefront. By following the instructions in this guide, you will be able to compare different versions of the product listing page, isolate the root causes of layout issues, and gather evidence to share with VTEX Support or your implementation partner if needed.

## Solution

To investigate layout issues, consider the following solutions:

- **[Blocking customizations to isolate frontend issues](#blocking-customizations-to-isolate-frontend-issues):** Temporarily disable customizations to check if the problem is caused by custom code.
- **[Comparing different versions of your storefront](#comparing-storefront-versions):** Compare your store's current layout with an alternative version to see if the issue is related to a specific customization.

### Blocking customizations to isolate storefront issues

This solution helps determine whether a storefront issue is caused by custom code (such as JavaScript, CSS, or third-party scripts). By temporarily blocking customizations, you test the store using only VTEX native behavior.

To run the test, you must remove the customizations using the browser's own native developer tool. Below are the instructions for doing it in Google Chrome using **DevTools**.

To configure [Chrome DevTools](https://developer.chrome.com/docs/devtools/), follow the steps below.

1. Open [Google Chrome](https://www.google.com/chrome/) on your computer.
2. Press the `F12` button on your keyboard or right-click anywhere on the screen with your mouse and select **Inspect**.
3. Click the vertical ellipsis in the top right corner of the page, as shown in the image below.
4. Select **More tools** and then **Request conditions** to block all customizations made via CSS, JavaScript, and Google Tag Manager.

![legado-02-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/shopping/legado-02-en.png)

5. On the **Request conditions** tab, click `Add rule` to define the first resource to be blocked. To add more resources, click `+` again and, after defining it, click `Add`. This configuration only needs to be set once in your browser. Include the items below:

- `*:/arquivos/*.js`
- `*:/files/*js`
- `*:/arquivos/*.css`
- `*:/files/*.css`
- `*://www.googletagmanager.com/gtm.js*`

![request-conditions-02-en](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/en/faq/shopping/request-conditions-02-en.png)

6. Check the **Enable blocking and throttling** option and all the checkboxes next to each configured resource. This will be the default configuration, with all blocking options enabled.
7. Now refresh the page. It will display without the custom components.

To view the customizations again, uncheck the **Enable blocking and throttling** option and refresh the page.

Check whether the unwanted behavior you initially observed occurs only when the customization is active. If so, contact your storefront team and have them investigate the behavior.

If the unwanted behavior persists even when customizations are blocked, open a ticket with [VTEX Support](https://supporticket.vtex.com/support).

### Comparing storefront versions

This solution should be used when you want to test a page URL that has a problem with the VTEX native layout or with a different layout by changing the template or controls. To perform this test, follow the steps below:

1. In the VTEX Admin, go to **Storefront > Layout > CMS** and create a new template in **HTML Templates**. Make sure the new template is the same type as the one currently used on the affected page. For example, if the issue occurs on a category page, you should create a new category template. For more details on how to create a template, see the guide [Creating and editing a page template](https://help.vtex.com/docs/tutorials/how-to-create-a-page-template).
2. In the created template, keep the basic layout structure and use only the [native controls](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) required to render the page.
3. Go to the layouts section in **CMS > Sites and channels** and locate the folder for the page with the issue. For example, if the problem is on a category page, you should:
   - Click the desired website.
   - Click the root folder (`/`).
   - Click the **Category > @category@** folder.
   - In the window on the side, click `new layout` to create a new layout.
4. Associate the created template with the new layout. For more details, see the guide [Associating a template with a layout](https://help.vtex.com/docs/tutorials/associating-a-template-with-a-layout).
5. In the **Properties** section of the new layout, find the LID.
6. Go to the page with the issue and add the layout's LID as a `QueryString` (`?` or `&`) to the URL in the browser's address bar.

If the problem doesn't occur with the native layout, it's a customization issue. If the issue persists, open a ticket with [VTEX Support](https://supporticket.vtex.com/support).
