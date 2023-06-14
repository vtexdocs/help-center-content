---
title: Registrar Client Id y Client Secret para inicio de sesión con Facebook
id: 3R7rzXWG1GswWOIkYyy8SO
status: PUBLISHED
createdAt: 2017-08-29T17:46:04.080Z
updatedAt: 2023-02-08T14:33:31.750Z
publishedAt: 2023-02-08T14:33:31.750Z
firstPublishedAt: 2017-08-29T17:51:41.650Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: registrar-client-id-y-client-secret-para-login-con-facebook
legacySlug: registrar-client-id-y-client-secret-para-login-con-facebook
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

Para activar el inicio de sesión de OAuth2 vía Facebook, usted necesita acceder a VTEX ID desde su Admin y rellenar los campos `Client ID` y `Client Secret`, como se explica [en este artículo](/pt/tutorial/integracao-google-e-facebook-para-login).

![Facebook OAuth ES](https://images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/ffc13a1eb81a285feea15e78a72342b9/facebook_ES.png)

Para obtener estos valores, siga los pasos a continuación:

1. Entre en el link [`https://developers.facebook.com/`](https://developers.facebook.com/);
2. Cree una cuenta de desarrollador de Facebook;
3. Cree una aplicación de Inicio de sesión con de Facebook;
4. En la parte superior derecha, haga clic en __Mis apps__;
 ![Mis Apps Facebook ES](https://images.ctfassets.net/alneenqid6w5/2XUFbJ20Z1Op022DLzNru7/7f96fc5e36e1f32d338d8f3cad63b2d8/Meus_Aplicativos_Facebook_ES.png)
5. Haca clic en Crear app;
6. Elija __Administrar integraciones comerciales__;  
    ![Criar ID Aplicativo Facebook ES](https://images.ctfassets.net/alneenqid6w5/4nEHH7m3rzaIjNyXCS7jwQ/db4a8fc8aec751ce1ed1c7e89c1c9407/Facebook_Login_App_Type_ES.png)
7. En __Nombre para mostrar de la app__, ingrese el nombre que corresponda a su tienda;
8. De las dos opciones disponibles en __Propósito de la app__, elija la que mejor se adapte a las necesidades de su tienda;
9. Haga clic en __Crear identificador de la app__;
    ![Configurar Criação ID Aplicativo Facebook ES](https://images.ctfassets.net/alneenqid6w5/aJ4qEYEBdQXp3IkQwcwBe/d1b7193d89c798ea761aa8f533624930/App_details_ES.png)
10. Seleccione __Configurar__ en __Inicio de sesión con Facebook__;
    ![Adicionar Configuração Login Facebook ES](https://images.ctfassets.net/alneenqid6w5/4Kz42ev7FSm0uEYIYwQ8C8/369bbf953861b544ab04c86e6e3d7d87/add_products_ES.png)
11. En __Productos__, en el panel lateral izquierdo, haga clic en __Inicio de sesión con Facebook > Configuración__.
    ![Login Configurações Menu Facebook ES](https://images.ctfassets.net/alneenqid6w5/7CosZB53qkywCS1NG3Cj0r/04980ce0595cfcbe1dc4d392236a42ee/menu_configura____es_ES.png)
    Defina los estados como se indica en la imagen a continuación.
    ![Configuração URI OAuth Facebook ES](https://images.ctfassets.net/alneenqid6w5/5Y82HZJjF3ZDIVE5WD4Lvt/1e318e6f8fb6c7465445f7c25fddf883/configuracoes_Oauth_ES.png)
    Ingrese las URL a continuación en __URI de redireccionamiento de OAuth válidos__, reemplazando `{{HOST_URL}}` por la URL base de su tienda y `{{accountName}}` por el nombre de su cuenta de acuerdo con lo descrito en el menú de administración de la tienda:
    - `https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx`
    - `https://{{HOST_URL}}/api/vtexid/pub/authentication/oauth/authorizationcode`
    - `https://{{accountName}}.myvtex.com/api/vtexid/pub/authentication/oauth/authorizationcode`

12. Al final de la página, haga clic en el botón __Guardar cambios__.
    ![Guardar cambios ES](https://images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/efeb20d6725434cede246d12262f18f7/Salvar_Altera____es_ES.png)

13. Acceda a __Configuración > Básica__ en el panel lateral izquierdo.
    ![Menu Configurações Aplicativo Facebook ES](https://images.ctfassets.net/alneenqid6w5/2hW7fOAt85ErH30RUI9KLA/43d7a90387cae90c6083b60a27cad765/menu_configura____es_b__sica_ES.png)

14. En __Clave secreta de la aplicación__, haga clic en el botón __Mostrar__.
    - Copie el campo __Identificador de la aplicación__ y péguelo en el campo `Client ID` en el Admin de VTEX ID.
    - Copie el campo __Clave secreta de la aplicación__ de la Aplicación de Facebook y péguelo en el campo `Client Secret` en el Admin de VTEX ID.
    ![ID Clave Facebook ES](https://images.ctfassets.net/alneenqid6w5/1kQRsAhb9kEaXHgIzIm4ba/52d539cc7b482efc811c229213348700/ID_Chave_Facebook_ES.png)

15. Ingrese un ícono para su aplicación de exactamente 1024x1024 píxeles y con fondo transparente;
16. Agregue la __URL de la Política de privacidad__ de su tienda;
    ![Configuración Básica Facebook ES](https://images.ctfassets.net/alneenqid6w5/66rxFKyvG7eCptwC7BdSWT/bf35bc1ed1326cb9f798f5c98a5a73a7/Configura____o_B__sica_Facebook_ES.png)
17. Seleccione una __Categoría__. Para tiendas, sugerimos utilizar __Compras__;
    ![Categoría Facebook ES](https://images.ctfassets.net/alneenqid6w5/20X5DqI7WEuGwksOO6cMS2/d33b98069ae6e0aee3888c173a524f3b/Categoria_Facebook_ES.png)
18. En la parte inferior del formulario, ingrese la __Información de contacto del delegado de protección de datos__ con los datos de la empresa responsable de la tienda;
    ![Dirección Facebook ES](https://images.ctfassets.net/alneenqid6w5/3TenJ8YunJ6gFRs0aZQkp7/81405fa9f3849e91bea5363f3a6ce239/Endere__o_Facebook_ES.png)
19. Al final de la página, haga clic en __Guardar cambios__;
    ![Guardar Cambios ES](https://images.ctfassets.net/alneenqid6w5/6xrSjyVnjTdpMwK6mmg7qQ/efeb20d6725434cede246d12262f18f7/Salvar_Altera____es_ES.png)
