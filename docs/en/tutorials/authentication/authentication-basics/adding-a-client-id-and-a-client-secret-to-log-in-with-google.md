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

![Google OAuth](//images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/1dd69d7f89b79cbca4c0d3265e800c3c/google_EN.png)

These values are derived from a project that needs to be created in the Google Cloud Platform API service.

To get these values, do the following:

<div class="alert alert-warning" role="alert">
The steps mentioned below describe a third-party platform and may therefore be outdated. For the latest information related to these steps, please access the following Google articles: <a href="https://support.google.com/cloud/answer/6158849">Setting up OAuth 2.0</a> and <a href="https://developers.google.com/identity/protocols/oauth2/openid-connect">OpenID Connect</a>.
</div>

1. Access the link [`https://console.developers.google.com/`](https://console.developers.google.com/);
2. In the side tab, click on __Credentials__;
3. Click on __Create Project__;
    ![Criar Projeto Google EN](//images.ctfassets.net/alneenqid6w5/7d7axXgcKs8SKcG0YekU8m/6aa68d7e981fd534a35ef3046b8d4cc2/Criar_Projeto_Google_EN.png)
4. Name the project and click on __Create__;
    ![Novo Projeto Google EN](//images.ctfassets.net/alneenqid6w5/1PB6BTeU4I6YOqySuwcS4W/aba1e15eee652b262a3932ffa87cdf02/Novo_Projeto_Google_EN.png)
5. Click on __Create credentials__;
    ![Criar Credenciais Google EN](//images.ctfassets.net/alneenqid6w5/5bGcIsahuvFskIQBn8X8bl/b5916fc567067ef1c3dcb464d392be4f/Criar_Credenciais_Google_EN.png)
6. Select the __OAuth client ID__ option;
    ![ID cliente OAuth Google EN](//images.ctfassets.net/alneenqid6w5/5CBmKjKYTYOMkkQImIMcI4/66104a80f14e2ea12cd894435ddf0843/ID_cliente_OAuth_Google_EN.png)
7. Click on __Configure consent screen__;
    ![Configurar Tela Consentimento Google EN](//images.ctfassets.net/alneenqid6w5/3mprVJpYy6wdtJJEhhbi1s/5b057c3ce55c3207415d1b37117b5ac1/Configurar_Tela_Consentimento_Google_EN.png)
8. Choose the type of user for your store(__Internal__ or __External__) and click on __Create__;
    ![Tipo usuário Google EN](//images.ctfassets.net/alneenqid6w5/yxxE4AdTY0yuNClfZwXHL/2f15aac33884886b494137342ebadaf6/Tipo_usu__rio_EN.png)
9. __Application name__: will be shown to clients when logging in;
10. __User support email__: for users to contact you with question about their consent;
11. __App logo__: corresponds to your store logo;
12. __Authorized Domains__: domains that may interact with this API should be included. These should be, at least, the domain of your store and the VTEX domain:
    - `store.com`, as the example, always without "www" or its equivalent
    - `vtex.com.br`, regarding our backend servers
13. __Developer contact information__: these email addresses are for Google to notify you about any changes to your project;
14. Click on __Save and continue__;
    ![Configurações Tela Consentimento EN](//images.ctfassets.net/alneenqid6w5/2jKyTCl5FeeMsS2iAw0aKa/4d3a9c16d4a83dfc8559f8ddab04cd6f/Configura____es_Tela_Consentimento_EN.png)
13. In the left side menu, click on __Credentials__;
14. In Type of application, click on __Web Application__;
    ![Credenciais Aplicativo Web Google EN](//images.ctfassets.net/alneenqid6w5/1sq6ByDBoYtGLeiU3Xsmgx/68c4968faa050c891f7501420d7fc6c8/Credenciais_Aplicativo_Web_Google_EN.png)
15. __Name__: for internal identification;
16.  __Authorized JavaScript origins__: add the exact addresses that can use this authentication method, corresponding to your site; for example `https://www.mystore.com`. We also recommended that you add the address `https://{{accountName}}}.myvtex.com` of your account, where `{{accountName}}` is your account name as described in the store's admin menu;
17. __Authorized redirect URIs__: add the VTEX service URL:
    -`https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    ![Configurações Aplicativo Web Google EN](//images.ctfassets.net/alneenqid6w5/4HsRII0LeoGMYqWoioWi0o/9e9b216146ef6285903e647722080234/Configura____es_Aplicativo_Web_EN.png)

18. After you complete these steps, your credentials will be displayed:
    ![Cliente OAuth criado Google EN](//images.ctfassets.net/alneenqid6w5/58KAqlnXhKoAqgq6Gcc80K/b2db65f7598baba9de8f6ecd7d3aa70e/Cliente_OAuth_criado_Google_EN.png)
    - Copy the __Client ID__ from Google and paste it into the `Client Id' field in the VTEX ID admin.
    - Copy the __client secret key__ from Google and paste it into the `Client Secret` field in the VTEX ID admin.
    ![Google OAuth](//images.ctfassets.net/alneenqid6w5/67wXwVN1RaDZ5oOy6XrTSe/1dd69d7f89b79cbca4c0d3265e800c3c/google_EN.png)    
    Then, save the changes.
