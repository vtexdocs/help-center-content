---
title: 'Configurar pago con easypay seller'
id: 5mYMCM1tiRiZO6PozuUncE
status: PUBLISHED
createdAt: 2023-09-19T00:16:47.408Z
updatedAt: 2023-09-28T11:36:30.237Z
publishedAt: 2023-09-28T11:36:30.237Z
firstPublishedAt: 2023-09-19T00:26:38.480Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay-seller
legacySlug: configurar-pago-con-seller
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, los sellers pueden integrar sus productos en un marketplace integrado con el proveedor de servicios de pago easypay. A través de este conector, tu tienda puede vender utilizando easypay, MB Way y Multibanco.

Para utilizar la afiliación easypay en tu marketplace, es necesario:

- [Instalar la aplicación easypay seller account](#instalar-la-aplicacion-easypay-seller-account)
- [Configurar la aplicación easypay seller account](#configurar-la-aplicacion-easypay-seller-account)

> ⚠️ Si deseas configurar easypay para un contexto distinto al de seller, consulta los artículos [Configurar pago con easypay](https://help.vtex.com/es/tutorial/configurar-pago-con-easypay--3xJQqjMIn0ARDI1HcwK88J) o [Configurar pago con easypay marketplace](https://help.vtex.com/es/tutorial/configurar-pago-con-easypay-marketplace--3YllWiITcPEOpteuToEdO7).

## Instalar la aplicación easypay seller account

Para instalar o app Easypay Seller Account, siga os passos abaixo:

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta el comando `vtex login nombredelacuenta` para iniciar sesión.
2. Instala la aplicación easypay ingresando el comando `vtex install easypaypartnerpt.easypay-seller`. 

## Configurar la aplicación easypay seller account

Después de instalar la aplicación easypay seller account, debes configurarla. Para acceder a la pantalla de configuración, sigue estos pasos:

<blockquote><ui>1. En el Admin VTEX, ve a **Hub de extensiones > Gestión de aplicaciones**, o ingresa **Gestión de aplicaciones** en la barra de búsqueda de la parte superior de la página.</ui>

<blockquote><ui>2. Busca la aplicación **Easypay Seller Account** y haz clic en **Configuración**.</ui>

<blockquote><ui>3. En la pantalla **Easypay Seller Account**, rellena los siguientes campos::</ui>

<blockquote><ui>- **VTEX Marketplace Account**: URL de la cuenta VTEX a la que estás vinculado. Ejemplo: https://{nombre-de-tu-cuenta}.myvtex.com/admin</ui> 

<blockquote><ui>- **Easypay Account UID**: identificación de la cuenta seller en la que se abonarán los valores de la compra de productos adquiridos en la tienda. Para obtener esta información, accede al [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la esquina superior de la pantalla y, a continuación, en la cuenta deseada. Copia y guarda la información **Account UID**.</ui> 

![easypay_pt_18](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay-seller_1.PNG)

<blockquote><ui>4. Haz clic en **Guardar**.</ui>

