---
title: 'Facebook: preguntas frecuentes'
id: 3t2RoCcVfXgmGrQ70PmPxr
status: PUBLISHED
createdAt: 2021-06-16T19:36:32.098Z
updatedAt: 2021-06-16T19:43:11.993Z
publishedAt: 2021-06-16T19:43:11.993Z
firstPublishedAt: 2021-06-16T19:43:11.993Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: facebook-faq
legacySlug: facebook-preguntas-frecuentes
locale: es
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

Esta guía tiene como objetivo presentar soluciones a los problemas que pueden surgir en la integración con Facebook. Utilice el siguiente índice para navegar por el contenido.

## [Publicaciones y productos](#publicaciones-y-productos)
1. [¿Cómo resolver problemas de SKU con errores en el puente. Mensaje de error: «Unsupported post request. Object with ID “XXXXX” does not exist...»?](#como-resolver-problemas-de-sku-con-errores-en-el-puente-mensaje-de-error-unsupported-post-request-object-with-id-xxxxx-does-not-exist)
2. [¿Cómo resolver problemas de SKU con errores en el puente. Mensaje de error: «El SKU no posee un precio de venta registrado en VTEX. Este es un valor obligatorio» ??](#como-resolver-problemas-de-sku-con-errores-en-el-puente-mensaje-de-error-el-sku-no-posee-un-precio-de-venta-registrado-en-vtex-este-es-un-valor-obligatorio)

## [Configuraciones](#configuraciones)
1. [¿Cómo volver a realizar el proceso de autentificación?](#como-volver-a-realizar-el-proceso-de-autentificacion)
2. [¿Cómo configurar el inicio de sesión con Facebook y Google?](#como-configurar-el-inicio-de-sesion-con-facebook-y-google)

## Publicaciones y productos

### ¿Cómo resolver problemas de SKU con errores en el puente. Mensaje de error: «Unsupported post request. Object with ID “XXXXX” does not exist...»?

Es necesario validar con el cliente si la información registrada en la tarjeta de configuración de Facebook, como email del afiliado o ID del Business Manager, es válida.

### ¿Cómo resolver problemas de SKU con errores en el puente. Mensaje de error: «El SKU no posee un precio de venta registrado en VTEX. Este es un valor obligatorio»?

Lo primero que debe verificar en este escenario es si el SKU realmente no posee un precio registrado para la política comercial de Facebook.

En el caso de que el SKU posea un precio, verifique el status del SKU porque el error también puede estar relacionado con la situación de activo/inactivo. La mejor manera de hacerlo es realizando una simulación de checkout:

![face faq01](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visión-de-conjunto-de-integraciones/facebook-preguntas-frecuentes_1.JPG)

En esta simulación es importante analizar los campos:  

1. Message
2. Price
3. Stock

Si todo es válido, abra un ticket de soporte. 

## Configuraciones

### ¿Cómo volver a realizar el proceso de autentificación?

Este proceso es recomendado cuando la integración está teniendo algún problema de autenticación con Facebook o si, a pesar de ser autenticada con éxito, presenta un error de permisos en el envío o actualización del catálogo.

#### Eliminar la App de integración de VTEX en Facebook 
1. Acceda a Facebook utilizando su cuenta vinculada a VTEX. 
2. En la esquina superior derecha de la pantalla, haga **clic en el botón** <img class="shadow-4" src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visión-de-conjunto-de-integraciones/facebook-preguntas-frecuentes_2.JPG" />
3. Seleccione la opción **Configuración y privacidad**, luego haga clic en **Configuración**.
4. Haga clic en **Integraciones comerciales**.
5. Seleccione la opción **VTEX Integration** y haga clic en **Eliminar**.

#### Eliminar el catálogo VTEX existente 
1. Acceda a la página de [Facebook Business Manager](https://business.facebook.com/).
2. Seleccione la opción **Más herramientas**.
3. Haga clic en **Configuración del negocio**.
4. Seleccione el catálogo de VTEX que desea eliminar y haga clic en la papelera <img class="shadow-4" src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/visión-de-conjunto-de-integraciones/facebook-preguntas-frecuentes_3.JPG" />
5. Haga clic en **Confirmar**.

#### Eliminar la configuración de integración de Facebook en VTEX
1. Acceda al Admin, seleccione la opción **Integraciones**.
2. Haga clic en **Configuración**.
3. En la integración Facebook, haga clic en el ícono de engranaje <i class="fas fa-cog"></i>
4. Elija la opción **Editar configuración**.
5. En integración, seleccione la opción **Desactivar**.
6. Haga clic en **Guardar configuración**.

#### Volver a configurar la integración de Facebook en VTEX
1. En el menú del Admin, haga clic en **Integraciones**.
2. Haga clic en **Configuración**.
3. En la tarjeta de Facebook, haga clic en **Integrar**.
4. Complete los campos que se muestran en la pantalla (vea el [detalle de los campos](/es/docs/tracks/definir-la-politica-comercial)).

Después de volver a realizar la configuración, es muy importante que los permisos solicitados por la APP sean otorgados, sin excepciones, en la etapa de autenticación con Facebook.

### ¿Cómo configurar el inicio de sesión con Facebook y Google?

En VTEX, no es necesario crear una cuenta o iniciar sesión para realizar una compra. Sin embargo, si el cliente desea modificar alguno de los datos introducidos durante la primera compra, es necesario que compruebe que es propietario del email en cuestión.

De forma nativa, la plataforma ofrece opciones de inicio de sesión con email y contraseña, así como el inicio de sesión con un código de acceso enviado al email del cliente.  Además, ofrecemos integraciones nativas opcionales con Google y Facebook, que deben ser configuradas.

#### Realice el registro con sus proveedores
Antes de configurar nuestra integración de inicio de sesión con Google y Facebook, se debe crear credenciales OAuth 2.0 (protocolo utilizado para la integración) en estos servicios. Para eso, realice los pasos detallados en los siguientes artículos:

- [Facebook](/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-facebook)
- [Google](/es/tutorial/cadastrar-client-id-e-client-secret-para-login-com-google)

#### Configure en su tienda
Después de realizar la configuración en Facebook y/o Google, debe configurar la opción de iniciar sesión a través de estos proveedores en su tienda. En ambos casos, deberá tener a mano el `Client ID` y `Client Secret` que se registraron.
1. Acceda el módulo de VTEX ID por el panel de administración de su tienda en el menú **Configuraciones de la cuenta > Autenticación**.
2. Seleccione el proveedor y **Editar**.
3. Complete el formulario con el `Client ID` y `Client Secret` registrados.
4. Active el botón del proveedor para habilitar su uso.

#### Verifique la configuración
Después de configurar todo, puede probar su configuración. Recomendamos que lo haga a través de la URL final que sus usuarios utilizarán para acceder a su tienda. Al intentar iniciar sesión, las opciones referentes a los proveedores activos deben estar disponibles y el proceso tiene que realizarse sin problemas.
