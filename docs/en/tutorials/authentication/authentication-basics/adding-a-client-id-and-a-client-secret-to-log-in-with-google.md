---
title: 'Adding a Client Id and a Client Secret to log in with Google'
id: 1lBgDmetUM4goie6mYEOK6
status: PUBLISHED
createdAt: 2017-08-29T14:13:01.769Z
updatedAt: 2023-02-08T14:32:35.437Z
publishedAt: 2023-02-08T14:32:35.437Z
firstPublishedAt: 2017-08-29T15:11:54.862Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: adding-a-client-id-and-a-client-secret-to-log-in-with-google
legacySlug: registering-a-client-id-and-a-client-secret-for-login-with-google
locale: en
subcategoryId: 14V5ezEX0cewOMg0o0cYM6
---

To activate Google login with OAuth2, you must access the VTEX ID in your admin and fill in the `Client ID` and `Client Secret` fields, as described [in this article](/en/tutorial/configuring-user-id-with-facebook-and-google).

![Google OAuth](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_1.png)

These values are derived from a project that needs to be created in the Google Cloud Platform API service.

To get these values, do the following:

> ⚠️ The steps mentioned below describe a third-party platform and may therefore be outdated. For the latest information related to these steps, please access the following Google articles: [Setting up OAuth 2.0](https://support.google.com/cloud/answer/6158849) and [OpenID Connect](https://developers.google.com/identity/protocols/oauth2/openid-connect).

1. Access the link [`https://console.developers.google.com/`](https://console.developers.google.com/);
2. In the side tab, click on __Credentials__;
3. Click on __Create Project__;
    ![Criar Projeto Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_2.png)
4. Name the project and click on __Create__;
    ![Novo Projeto Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_3.png)
5. Click on __Create credentials__;
    ![Criar Credenciais Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_4.png)
6. Select the __OAuth client ID__ option;
    ![ID cliente OAuth Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_5.png)
7. Click on __Configure consent screen__;
    ![Configurar Tela Consentimento Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_6.png)
8. Choose the type of user for your store(__Internal__ or __External__) and click on __Create__;
    ![Tipo usuário Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_7.png)
9. __Application name__: will be shown to clients when logging in;
10. __User support email__: for users to contact you with question about their consent;
11. __App logo__: corresponds to your store logo;
12. __Authorized Domains__: domains that may interact with this API should be included. These should be, at least, the domain of your store and the VTEX domain:
    - `store.com`, as the example, always without "www" or its equivalent
    - `vtex.com.br`, regarding our backend servers
13. __Developer contact information__: these email addresses are for Google to notify you about any changes to your project;
14. Click on __Save and continue__;
    ![Configurações Tela Consentimento EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_8.png)
13. In the left side menu, click on __Credentials__;
14. In Type of application, click on __Web Application__;
    ![Credenciais Aplicativo Web Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_9.png)
15. __Name__: for internal identification;
16.  __Authorized JavaScript origins__: add the exact addresses that can use this authentication method, corresponding to your site; for example `https://www.mystore.com`. We also recommended that you add the address `https://{{accountName}}}.myvtex.com` of your account, where `{{accountName}}` is your account name as described in the store's admin menu;
17. __Authorized redirect URIs__: add the VTEX service URL:
    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    ![Configurações Aplicativo Web Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_10.png)

18. After you complete these steps, your credentials will be displayed:
    ![Cliente OAuth criado Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_11.png)
    - Copy the __Client ID__ from Google and paste it into the `Client Id' field in the VTEX ID admin.
    - Copy the __client secret key__ from Google and paste it into the `Client Secret` field in the VTEX ID admin.
    ![Google OAuth](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_12.png)    
    Then, save the changes.
