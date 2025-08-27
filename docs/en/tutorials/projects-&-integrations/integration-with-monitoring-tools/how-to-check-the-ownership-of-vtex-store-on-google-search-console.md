---
title: 'Checking the ownership of a VTEX store on Google Search Console'
id: frequentlyAskedQuestions_594
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.830Z
updatedAt: 2024-12-20T00:27:16.190Z
publishedAt: 2024-12-20T00:27:16.190Z
firstPublishedAt: 2019-01-24T22:00:50.515Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-check-the-ownership-of-vtex-store-on-google-search-console
legacySlug: how-to-check-the-ownership-of-vtex-store-on-google-search-console
locale: en
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

To access data from [Google Search Console](https://support.google.com/webmasters/answer/9128668?hl=en&ref_topic=9128571&sjid=1026872664762099007-SA), you need to verify the ownership of your store. This means providing Google with the address of your store's website, either the domain (`mystore`) or the URL (`https://mystore.com`). Once verified, you can monitor the store indexing performance on Google.

Follow the instructions in this tutorial to enable access.

## Instructions

1. Access [Google Search Console](https://search.google.com/search-console) using your Google account.
2. To add your store's property, follow the instructions in [Add a website property to Search Console](https://support.google.com/webmasters/answer/34592?hl=en).
3. After adding the property, validate it by clicking **HTML tag** under the **Other verification methods** section.
4. Copy the meta tag from step 1.
5. Choose the installation method based on your store technology:

- [Store Framework and FastStore](#store-framework-and-faststore)
- [Legacy CMS Portal](#legacy-cms-portal)

### Store Framework and FastStore

1. In the VTEX Admin, go to **Apps > Extensions Hub > App Store**.
2. Search for the **Google Search Console** app and click `Install`. You will be redirected to the app's [page in the App Store](https://apps.vtex.com/vtex-google-search-console/p).
3. Click `Get App`.
4. Enter your account name and click `Confirm`. You will be redirected to the app's checkout page.

> ℹ️ The Google Search Console app is free.

5. Click `Place Order`.
6. Click `Go to Install Page`, and you'll be redirected to the app's page in the Admin.
7. Click `Install`. An installation success message will be displayed, redirecting you to the app's configuration page in the Admin.

![Google Search Console EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/projects-&-integrations/integration-with-monitoring-tools/how-to-check-the-ownership-of-vtex-store-on-google-search-console_1.png)

8. In the **Content** field, add only the content after the `content` flag of the meta tag you copied from Google Search Console [previously](#instructions). For example, if your meta tag is `<meta name="google-site-verification" content="{contentID}" />`, add only what is inside `{contentID}`.
9. Click `Save`.
10. Go back to [Google Search Console](https://search.google.com/search-console) and click `Validate`. The verification will give you access to the store's indexing data.

### Legacy CMS Portal

1. In the Admin, go to **Storefront > Layout**.
2. Go to the `CMS > HTMLS Templates` folder and click the `Home` file.
3. Add the meta tag you copied [previously](#instructions) to the `<head>` of your store's `Home` template.
4. Go back to [Google Search Console](https://search.google.com/search-console) and click `Validate`. The verification will give you access to the store's indexing data.

