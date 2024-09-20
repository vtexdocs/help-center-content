---
title: 'Configuring login with Google'
id: 4XGFNDYBugBuEmazd0fJ3
status: PUBLISHED
createdAt: 2019-11-25T20:57:56.093Z
updatedAt: 2021-10-28T18:41:34.218Z
publishedAt: 2021-10-28T18:41:34.218Z
firstPublishedAt: 2020-01-13T14:32:39.158Z
contentType: trackArticle
productTeam: Identity
slug: configuring-login-with-google
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
---

As explained in the previous article, customers are identified by VTEX's system through their emails, and if they want to change the data entered during their first purchase, they must confirm the **email ownership** in question.

Just as the customers can login via Facebook, they can also login via **Google**.

## Adding a Client Id and a Client Secret to log in with Google

Before configuring your login information on VTEX, you must configure your Google identity platform by following the instructions detailed in [this article on how to add a Client Id and a Client Secret to log in with Google](https://help.vtex.com/en/tutorial/registering-a-client-id-and-a-client-secret-for-login-with-google--1lBgDmetUM4goie6mYEOK6).

## Configuring your login information on VTEX

After configuring your Google identity platform, you need to configure your login information on VTEX.

1. In the **Account Settings** module, click on the **Authentication** tab.
2. Click on the **Edit** button corresponding to Google.
3. Fill in the fields with the _Client Id_ and _Client Secret_ added to **Google**.
    ![Google OAuth](//images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/1dd69d7f89b79cbca4c0d3265e800c3c/google_EN.png)
4. Click on the **Save** button.
5. To confirm whether your login was successfully configured, access the front-end of your store and click on **Login**.
6. The configured login options will be shown. Click on the **Google** option and check whether your store name is displayed.

