---
title: 'Configuring login with Facebook'
id: 3i8Cj8bC2tILvGRsdjlHly
status: PUBLISHED
createdAt: 2019-11-25T20:49:43.757Z
updatedAt: 2021-10-28T18:37:43.166Z
publishedAt: 2021-10-28T18:37:43.166Z
firstPublishedAt: 2020-01-13T14:33:41.637Z
contentType: trackArticle
productTeam: Identity
slugEN: configuring-login-with-facebook
locale: en
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugEN: contas-e-permissoes
order: 9
---

At VTEX, the customers are identified in the system through their emails. However, if they want to make any changes to the data entered during their first purchase, they must confirm the **ownership of the email account** in question.
For this, some alternatives are offered, including **Facebook**.

## Registering a Client Id and a Client Secret for login with Facebook

To configure a Facebook registration, follow the instructions detailed in [this article about the registration of Client Id and Client Secret for login with Facebook](/en/tutorial/registering-a-client-id-and-a-client-secret-for-login-with-facebook--3R7rzXWG1GswWOIkYyy8SO).

## Configuring login on VTEX

After configuring the Facebook registration, you need to configure this login option on VTEX.

1. In the **Account Settings** module, click on the **Authentications** tab.
2. Click on the **Edit** button corresponding to Facebook.
3. Fill in the fields with the _Client Id_ and _Client Secret_ registered on **Facebook**.
    ![Facebook OAuth EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tracks/vtex-modules-getting-started/contas-e-permissoes/configuring-login-with-facebook_1.png)
4. Click on the **Save** button.
5. To confirm that your login was successful, go to the front-end of your store and click on **Login**. 
6. The configured login options will be shown. Click on the **Facebook** option and check if your store name is displayed.

