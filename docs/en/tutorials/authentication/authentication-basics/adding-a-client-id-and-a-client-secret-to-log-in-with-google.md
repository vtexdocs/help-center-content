---
title: "Adding a Client Id and a Client Secret to log in with Google"
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
2. In the side tab, click on **Credentials**;
3. Click on **Create Project**;
   ![Criar Projeto Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_2.png)
4. Name the project and click on **Create**;
   ![Novo Projeto Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_3.png)
5. Click on **Create credentials**;
   ![Criar Credenciais Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_4.png)
6. Select the **OAuth client ID** option;
   ![ID cliente OAuth Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_5.png)
7. Click on **Configure consent screen**;
   ![Configurar Tela Consentimento Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_6.png)
8. Choose the type of user for your store(**Internal** or **External**) and click on **Create**;
   ![Tipo usuário Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_7.png)
9. **Application name**: will be shown to clients when logging in;
10. **User support email**: for users to contact you with question about their consent;
11. **App logo**: corresponds to your store logo;
12. **Authorized Domains**: domains that may interact with this API should be included. These should be, at least, the domain of your store and the VTEX domain:
    - `store.com`, as the example, always without "www" or its equivalent
    - `vtex.com.br`, regarding our backend servers
13. **Developer contact information**: these email addresses are for Google to notify you about any changes to your project;
14. Click on **Save and continue**;
    ![Configurações Tela Consentimento EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_8.png)
15. In the left side menu, click on **Credentials**;
16. In Type of application, click on **Web Application**;
    ![Credenciais Aplicativo Web Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_9.png)
17. **Name**: for internal identification;
18. **Authorized JavaScript origins**: add the exact addresses that can use this authentication method, corresponding to your site; for example `https://www.mystore.com`. We also recommended that you add the address `https://{{accountName}}}.myvtex.com` of your account, where `{{accountName}}` is your account name as described in the store's admin menu;
19. **Authorized redirect URIs**: add the VTEX service URL: -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    ![Configurações Aplicativo Web Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_10.png)

20. After you complete these steps, your credentials will be displayed:
    ![Cliente OAuth criado Google EN](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_11.png)
    - Copy the **Client ID** from Google and paste it into the `Client Id` field in the VTEX ID admin.
    - Copy the **client secret key** from Google and paste it into the `Client Secret` field in the VTEX ID admin.
      ![Google OAuth](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/en/tutorials/authentication/authentication-basics/adding-a-client-id-and-a-client-secret-to-log-in-with-google_12.png)  
      Then, save the changes.
