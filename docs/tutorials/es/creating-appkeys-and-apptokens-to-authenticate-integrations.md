---
title: Crear appKey y appToken para autenticar las integraciones
id: 43tQeyQJgAKGEuCqQKAOI2
status: DRAFT
createdAt: 2017-10-24T13:30:43.908Z
updatedAt: 2020-06-04T02:30:41.953Z
publishedAt: 
firstPublishedAt: 2017-10-24T14:19:50.327Z
contentType: tutorial
productTeam: Channels
author: authors_24
slug: crear-appkey-y-apptoken-para-autenticar-las-integraciones
legacySlug: crear-appkey-y-apptoken-para-autenticar-las-integraciones
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Toda integración con APIs VTEX necesita autenticarse por medio de appKey y appToken.

<div class=“alert alert-warning”>Solo el <b>usuario Master</b> de la tienda tiene permiso para manipular tokens. El usuario Master es aquél cuyo e-mail consta en la sección <b>Contacto</b> de la pantalla Cuentas, en Gestión de la cuenta.
</div>

Para generar esas claves, sigue los pasos a continuación:

1. En el menú lateral del nuevo admin, haga clic en __Gestión de la cuenta__ y, a continuación, en __Cuentas__.
2. En el campo __Buscar__, escriba el nombre de su cuenta y presione la tecla _Enter_.
3. Al hacer clic en el nombre de su cuenta, se le redirige a la página __Editar cuenta__. 
4. En la sección __Seguridad__ haga clic en __Generar appKey y appToken__.
5. Insertar un nombre para la pareja appKey y appToken que estás creando.
6. Haga clic en __Generar nuevos tokens__.
7. En el campo que se exhibe enseguida, está el token. Por razones de seguridad el token __se exhibe solo una vez__. Copia ese token y guardalo en lugar seguro.

<div class=“alert alert-warning”><strong>Atención</strong>: toda pareja de appKey y appToken, cuando se crea, nace sin vincularse a un perfil de acceso. Entonces, tras su creación, es necesario vincularla al perfil de acceso deseado.
</div>

Para hacerlo, seguir los pasos a continuación:

1. En la sección __Seguridad__ de la pestaña __Cuentas__, copiar la appKey deseada, que se encuentra en la columna __Clave de aplicación__.
2. Aún en el License Manager, acceder a la pestaña __Usuarios__ y hacer una busca de la clave que se había copiado.
3. Entrar en el usuario encontrado y [asociarlos a los perfiles deseados](/es/tutorial/guia-para-crear-usuarios/). Esta appKey será capaz de autenticar integraciones con los módulos y funcionalidades a los que da acceso el perfil elegido.

Después de realizar estos procedimientos, se autentique en la API utilizando __x-vtex-api-appKey__ y __x-vtex-api-appToken__ de la siguiente manera:

1. Utilice x-vtex-api-appKey para la clave de aplicación informada en Gestión de la cuenta
2. Utilice el x-vtex-api-appToken para el Token que se generó en Gestión de la cuenta

En diferentes sistemas, provistos por terceiros ou não, normalmente o appKey se utiliza para el usuario y appToken à senha.
