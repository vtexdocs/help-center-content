---
title: Configurar inicio de sesión con Facebook y Google
id: tutorials_513
status: PUBLISHED
createdAt: 2017-04-27T22:03:01.743Z
updatedAt: 2023-02-08T14:32:57.255Z
publishedAt: 2023-02-08T14:32:57.255Z
firstPublishedAt: 2017-04-27T23:03:27.844Z
contentType: tutorial
productTeam: Identity
author: authors_84
slug: integracion-google-y-facebook-en-smartcheckout
legacySlug: integracion-google-y-facebook-en-smartcheckout, configurar-login-con-facebook-y-google
subcategory: 14V5ezEX0cewOMg0o0cYM6
---

En VTEX, no se necesita crear una cuenta o iniciar sesión para realizar una compra. Sin embargo, si el cliente quiere efectuar alguna alteración en los datos informados durante la primera compra, debe comprobar la propiedad del correo electrónico que proporcionó.

De forma nativa, la plataforma ofrece opciones de inicio de sesión mediante correo electrónico y contraseña o un código de acceso enviado al correo electrónico del cliente. También ofrece integraciones nativas con Google y Facebook, que son opcionales y deben ser configuradas.

## Realice el registro con los proveedores

Antes de configurar nuestra integración de inicio de sesión con Google o Facebook, necesita crear credenciales de OAuth 2.0 (protocolo utilizado para la integración) en estos servicios. Para realizar esto, siga las instrucciones indicadas en los siguientes artículos: 

- [Facebook](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/pt/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

## Configure en su tienda

Después de la configuración en Facebook y/o Google, es necesario configurar la opción de inicio de sesión mediante estos proveedores en su tienda VTEX. En ambos casos, debe tener a la mano el 'Client ID' y el 'Client Secret' registrados. 

1. Acceda al módulo de VTEX ID por el panel de administración de su tienda en el menú Configuración de la Cuenta > Autenticación;
  ![Lista Autenticación](//images.ctfassets.net/alneenqid6w5/3Bnb1ifcL7krcXEnAHzxu1/d63b5b6892d8e1dfd756e2977ea753b4/autenticacao_ES.png)
2. Seleccione el proveedor y haga clic en **EDITAR**;
3. Complete el formulario ingresando el `Client ID` y el `Client Secret` registrados;
  ![Facebook OAuth ES](//images.ctfassets.net/alneenqid6w5/2mWEocn4zdG0BJVMaujzk8/ffc13a1eb81a285feea15e78a72342b9/facebook_ES.png)
4. Active la utilización del proveedor mediante el interruptor.  
  ![Lista Autenticación Switch On Highlight](//images.ctfassets.net/alneenqid6w5/4devCJpXnMWF3TV6xMDiUT/7567505995ce1af975d6b5c69159a323/switch_On_highlight_ES.png)

## Valide la configuración

Después de realizar todos los ajustes anteriores, puede probar su configuración. Recomendamos que haga esto accediendo a la URL final que sus usuarios utilizarán para ingresar a su tienda. Al intentar iniciar sesión, las opciones referentes a los proveedores activos deben estar disponibles y el proceso se debe efectuar sin ningún problema. 

