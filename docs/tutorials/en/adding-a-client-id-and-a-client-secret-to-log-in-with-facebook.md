---
title: Adding a Client Id and a Client Secret to log in with Facebook
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-02-08T14:33:31.750Z
publishedAt: 2023-02-08T14:33:31.750Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: adding-a-client-id-and-a-client-secret-to-log-in-with-facebook
legacySlug: registering-a-client-id-and-a-client-secret-for-login-with-facebook
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

To activate Facebook login with OAuth2, you must access the VTEX ID in your admin and fill in the `Client ID` and `Client Secret` fields, as described [in this article](/en/tutorial/configuring-user-id-with-facebook-and-google).

![Facebook OAuth EN](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/06b29f9c839316df31c736a315ba1786/facebook_EN.png)

To get these values, follow the steps below:

1. Access the link [`https://developers.facebook.com/`](https://developers.facebook.com/);
2. Create a Facebook developer account;
3. Create a Facebook login application;
4. At the top right, click on __My apps__;
    ![Meus Aplicativos Facebook EN](//images.ctfassets.net/alneenqid6w5/2XUFbJ20Z1Op022DLzNru7/4ffc7fddf5e06de99b4901bc6a940fe2/Meus_Aplicativos_Facebook_EN.png)  
5. Click on Create App;
6. Choose the __Manage Business Integrations__ option;
    ![Criar ID Aplicativo Facebook EN](//images.ctfassets.net/alneenqid6w5/4nEHH7m3rzaIjNyXCS7jwQ/ef467a17654f0eccc57811bbfcd79e7c/Facebook_Login_App_Type_EN.png)
7. Fill in the __App Display Name__ field with your store's name;
8. In __App Purpose__, choose the option that best meets the needs of your store;
9. Click on __Create App ID__;  
    ![Configurar Criação ID Aplicativo Facebook EN](//images.ctfassets.net/alneenqid6w5/aJ4qEYEBdQXp3IkQwcwBe/6dfdb4e775e1c317d707796192577558/App_details_EN.png)
10. Select __Set up__ in the __Facebook Login__ option;
    ![Adicionar Configuração Login Facebook EN](//images.ctfassets.net/alneenqid6w5/4Kz42ev7FSm0uEYIYwQ8C8/189d96e7550b9334931049e6e4ec41e2/add_products_EN.png)

11. In __Products__, on the left side dashboard, click __Facebook Login > Settings__.
    ![Login Configurações Menu Facebook EN](//images.ctfassets.net/alneenqid6w5/7CosZB53qkywCS1NG3Cj0r/6a0236dc8c74df2661ad5faff74e6e23/menu_configura____es_EN.png)
    Set the options as in the image below:
    ![Configuração URI OAuth Facebook EN](//images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/ef5ad727b07d41fdd907cef762788dd6/configuracoes_Oauth_EN.png)
    Insert the following URLs in __Valid OAuth Redirect URIs__, replacing `{{HOST_URL}}` with your store's base URL and `{{accountName}}` with your account name as described in the store's administration menu:
    - `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    - `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
    - `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

12. At the bottom of the page, click on the __Save Changes__ button.
    ![Salvar Alterações EN](//images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/73dc3e3471df55544d445dba41ebe32f/Salvar_Altera____es_EN.png)

13. Access __Settings > Basic__ on the left side dashboard.
    ![Menu Configurações Aplicativo Facebook EN](//images.ctfassets.net/alneenqid6w5/2hW7fOAt85ErH30RUI9KLA/49da02c39bac5ba28817f7fdfb8fb24d/menu_configura____es_b__sica_EN.png)

14. In __App Secret__, click on the __Show__ button.
    - Copy the __App ID__ field and paste it in the `Client Id` field on the VTEX ID admin.
    - Copy the __App Secret__ field of the Facebook App and paste it in the `Client Secret` field in the VTEX ID admin.
    ![ID Chave Facebook EN](//images.ctfassets.net/alneenqid6w5/1kQRsAhb9kEaXHgIzIm4ba/c54a397045c8f5585e76b0b9de7c0a74/ID_Chave_Facebook_EN.png)

15. Upload an icon for your application of exactly 1024x1024 pixels and with a transparent background.
16. Add the __URL of the Privacy Policy__ of your store;
    ![Configuração Básica Facebook EN](//images.ctfassets.net/alneenqid6w5/66rxFKyvG7eCptwC7BdSWT/3b13d29d6ef24ada8e777062b2deede2/Configura____o_B__sica_Facebook_EN.png)
17. Select a __Category__. For stores, we suggest __Shopping__;
    ![Categoria Facebook EN](//images.ctfassets.net/alneenqid6w5/20X5DqI7WEuGwksOO6cMS2/48f596d2da1d4d2395424bdd2db14029/Categoria_Facebook_EN.png)
18. Below in this form, fill in the __Data Protection Officer Contact Information__ field with the data of the company responsible for the store;
    ![Endereço Facebook EN](//images.ctfassets.net/alneenqid6w5/3TenJ8YunJ6gFRs0aZQkp7/79e44d0029bb492e1a5383334f4a8f6c/Endere__o_Facebook_EN.png)
19. At the bottom of the page, click on __Save Changes__;
    ![Salvar Alterações EN](//images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/73dc3e3471df55544d445dba41ebe32f/Salvar_Altera____es_EN.png)
