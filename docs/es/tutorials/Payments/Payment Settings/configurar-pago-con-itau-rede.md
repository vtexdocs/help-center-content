---
title: 'Configurar pago con Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-04-25T15:26:44.454Z
publishedAt: 2024-04-25T15:26:44.454Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
locale: es
legacySlug: configurar-pago-con-itau-rede
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX es posible la integración con el proveedor de pagos Itaú Rede. Con este proveedor, su tienda puede realizar ventas a través de tarjetas de crédito.

Para utilizar Itaú Rede, debes:

- [Obtener credenciales en el entorno de Userede](#obtener-credenciales-en-el-entorno-de-userede)
- [Configurar Itaú Rede en VTEX](#configurar-itau-rede-en-vtex)
- [Configurar condición de pago](#configurar-condicion-de-pago)  

## Obtener credenciales en el entorno de Userede

>⚠️ Las configuraciones realizadas en un entorno externo a VTEX podrán ser discontinuadas o modificadas sin previo aviso. Consulta tu cuenta de Itaú Rede para obtener información actualizada.

Para obtener las credenciales __Clave de aplicación__ y __Token de aplicación__ necesarias para configurar Itaú Rede en VTEX, siga los pasos a continuación:

<blockquote><ui>1. Acceda al <a href="https://meu.userede.com.br/login">Portal Userede</a> con los datos de su cuenta Itaú Rede.</ui>

<blockquote><ui>2. Seleccione la cuenta en la que desea realizar pagos en VTEX y haga clic en <b>Aplicar</b>. Guarde el número de cuenta, ya que debe ser utilizado en el campo <b>Clave de aplicación</b> de la sección <a href="#configurar-itau-rede-en-vtex">Configurar Itaú Rede en VTEX</a>.</ui>

![Itaú Rede_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_1.PNG)

<blockquote><ui>3. Después de que la pantalla se actualice a la cuenta deseada, en el menú <b>para vender</b>, seleccione la opción <b>e-commerce</b>.</ui>

![Itaú Rede_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_2.PNG)

<blockquote><ui>4. En la página <b>e-commerce</b>, haga clic en la tarjeta <b>chave de integração</b>.</ui>

![Itaú Rede_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_3.png)

<blockquote><ui>5. Después de leer la información de la "chave de integração", haga clic en <b>li, estou ciente</b>.</ui>

![Itaú Rede_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_4.png)

<blockquote><ui>6. Haga clic en el botón <b>gerar nova chave</b>.</ui>

![Itaú Rede_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_5.png)

<blockquote><ui>7. Verifique la información descrita en la ventana <b>gerar nova chave de integração</b> y haga clic en <b>gerar nova chave</b>.</ui>

![Itaú Rede_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/Payment%20Settings/configurar-pago-con-itau-rede_6.png)

<blockquote><ui>8. Después de crear la nueva clave, haga clic en <b>copiar</b> y conserve la información en un lugar seguro. Esta clave debe ser utilizada en el campo <b>Token de aplicación</b> de la sección <a href="#configurar-itau-rede-en-vtex">Configurar Itaú Rede en VTEX</a>.</ui>

<blockquote><ui>>⚠️ Una vez que se crea una "chave de integração" en el entorno de red, no se puede volver a acceder a ella desde otras ubicaciones. Registre la información de la clave en una ubicación protegida y, si se pierde, repita el proceso para generar una nueva clave.</ui></blockquote>

## Configurar Itaú Rede en VTEX

Para configurar Itaú Rede siga los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __ItauRede__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En __Autorización del proveedor__, rellene los campos de registro __Clave de aplicación__ y __Token de aplicación__ obtenidas en los pasos 2 y 8 de la sección [Obtener credenciales en el entorno de Userede](#obtener-credenciales-en-el-entorno-de-userede).
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor Itaú Rede en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. En __merchantName__, ingresa el nombre de tu tienda.
8. En __SoftDescriptor__, describe el mensaje de identificación que se mostrará en la transacción realizada en tu tienda.
9. En el campo __delayToAutoSettle__, escoja en cuánto tiempo desea que la captura sea realizada (después de la aprobación de la transacción y del análisis del antifraude).
10. Haga clic en `Guardar`.

## Configurar condición de pago

1. En el Admin de VTEX, acceda a __Configuración de la Tienda > Pago > Configuración__, o escriba __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Condiciones de pago__, haga clic en el botón `+`.
3. Haga clic en el nombre de la marca de tarjeta de crédito deseada.
4. Active la condición en el campo __Status__.
5. Si desea utilizar un sistema antifraude, seleccione la opción __Utilizar antifraude__.
6. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).
7. Haga clic en `Guardar`.

Después de seguir los pasos indicados, Itaú Rede puede tardar hasta 10 minutos en aparecer en el checkout de tu tienda como una opción de pago.
