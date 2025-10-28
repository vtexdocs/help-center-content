---
title: 'Configurar pago con easypay'
id: 3xJQqjMIn0ARDI1HcwK88J
status: PUBLISHED
createdAt: 2023-09-18T16:48:21.184Z
updatedAt: 2025-09-24T19:00:57.899Z
publishedAt: 2025-09-24T19:00:57.899Z
firstPublishedAt: 2023-09-18T18:53:57.235Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay
legacySlug: configurar-pago-con-easypay
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, puedes realizar la integración con el proveedor de servicios de pago easypay. A través de este proveedor, tu tienda puede vender utilizando easypay, MB Way y Multibanco.

Para utilizar easypay, debes:

- [Instalar la aplicación easypay](#instalar-la-aplicacion-easypay)
- [Configurar la aplicación easypay](#configurar-la-aplicacion-easypay)
- [Configurar el webhook de easypay](#configurar-el-webhook-de-easypay)
- [Configurar la afiliación de easypay](#configurar-la-afiliacion-de-easypay)
- [Configurar el pago con Apple Pay en easypay (opcional)](#configurar-el-pago-con-apple-pay-en-easypay-opcional)    

> ⚠️ Si eres marketplace o seller, consulta los artículos [Configurar pago con easypay en marketplace](/es/tutorial/configurar-pago-con-easypay-marketplace--3YllWiITcPEOpteuToEdO7) o [Configurar pago con easypay seller account](/es/tutorial/configurar-pago-con-easypay-seller--5mYMCM1tiRiZO6PozuUncE).

## Instalar la aplicación easypay

Para instalar la aplicación easypay, sigue los pasos que se indican a continuación:

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta el comando `vtex login nombredelacuenta` para iniciar sesión.
2. Instala la aplicación easypay ingresando el comando `vtex install easypaypartnerpt.payment-provider-easypay`. 

## Configurar la aplicación easypay

Una vez instalada la aplicación easypay, debes configurarla. Para acceder a la pantalla de configuración, sigue estos pasos:

1. En el Admin VTEX, accede a __Hub de extensiones > Gestión de aplicaciones__, o ingresa __Gestión de aplicaciones__ en la barra de búsqueda en la parte superior de la página. 
2. Busca la aplicación __Easypay Payment Provider__ y haz clic en __Configuración__.

La información de configuración se divide en cuatro secciones:

- [Credenciales de easypay (obligatorio)](#Credenciales-de-easypay)
- [Pago (obligatorio)](#pago)
- [Personalización del checkout de easypay (opcional)](#personalizacion-del-checkout-de-easypay)
- [Modo sandbox](#modo-sandbox)

![easypay_pt_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_1.png)

> ⚠️ Debes realizar la configuración en [el entorno easypay](https://backoffice.easypay.pt/). El control de estas configuraciones es responsabilidad de easypay, por lo tanto, VTEX no garantiza que los pasos a continuación estén siempre actualizados. Utiliza este documento como referencia y consulta tu cuenta en el [entorno de easypay](https://backoffice.easypay.pt/) para obtener información actualizada.

### Credenciales de easypay

La información solicitada en esta sección es obligatoria.

__Key ID y Key Value__: valor e ID de la clave easypay.

<blockquote><ui>1. En el [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la parte superior izquierda de la pantalla, y en el ícono de la flecha que señala la cuenta deseada.</ui>

![easypay_pt_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_2.PNG)

<blockquote><ui>2. Accede a **Web Services > Configuración API 2.0 > Keys**.</ui>

![easypay_es_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_3.png)

<blockquote><ui>3. Copia y guarda la información **ID** y **Key**.</ui>

![easypay_es_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_4.png)

__Merchant account UID__: identificación de la cuenta del comerciante en la que se abonarán los valores de la compra de productos adquiridos en la tienda. Si no dispones de una cuenta comerciante independiente, puedes utilizar el "Account UID" de la cuenta donde recibirás los pagos.

<blockquote><ui>1. En el [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la esquina superior izquierda de la pantalla y, a continuación, en la cuenta "COMERCIANTE 1", haz clic en la flecha.</ui>

![easypay_pt_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_5.PNG)

<blockquote><ui>2. Copia y guarda la información del **Account UID**.</ui>

![easypay_es_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_6.png)

__Margin account UID__: identificación de la cuenta de margen.

> ℹ️ Este campo solo debe rellenarse cuando la tienda es un marketplace y realiza split de pagos. Para más información, consulta el artículo [Configurar pago con easypay en marketplaces](/es/tutorial/configurar-pago-con-easypay-marketplace--3YllWiITcPEOpteuToEdO7).

__Refund account ID e Refund account key__: si no existe una cuenta específica para reembolso, el valor de __Key ID__ deberá rellenarse en el campo __Refund account ID__, y el valor de __Key value__ en __Refund account key__.

### Pago

En esta sección, debes indicar si tu tienda utilizará pagos asíncronos, síncronos o ambos. Accede a la documentación de easypay para consultar los [medios de pagos](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) disponibles y sus respectivas [siglas](https://docs.quality-utility.aws.easypay.pt/checkout/reference) de identificación.

![easypay_es_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_7.png)

__Tipos de pago asíncronos aceptados__: medios de pago asíncronos disponibles para el cliente. Ingresa solamente las siglas de los tipos de asíncronos, separadas por comas, sin puntos ni espacios.

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| mb,dd,vi | mb, dd, vi |

> ⚠️ Si se rellena este campo, también será obligatorio rellenar el campo **Días para que expiren los pagos asíncronos**.

__Tipos de pago síncronos aceptados__: medios de pago síncronos disponibles para el cliente. Ingresa solamente las siglas de los tipos de pago síncronos, separados por comas, sin puntos ni espacios.

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| cc,mbw | cc, mbw |

__Días de expiración de los pagos asíncronos__: tiempo de vencimiento (en días) de los pagos asíncronos. Ingresa solo el número de días deseados. 

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| 10 | 10 días, Dic o 10/05/2023 |

### Personalización del checkout de easypay

easypay tiene un diseño de checkout nativo configurado en la aplicación, como se muestra a continuación:

![easypay_es_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_8.png)

Si deseas realizar algún tipo de personalización en el checkout nativo de easypay, rellena uno o más campos de esta sección:

- __Checkout logo URL__: ogotipo que debe mostrarse en el checkout de easypay. Ingresa el link con la dirección de la imagen que deseas utilizar.
- __Checkout background color__: color del fondo. Ingresa el código HEX del color deseado. Predeterminado nativo: #ffffff.
- __Checkout accent color__: color de los elementos destacados, botones predeterminados y bordes de los inputs. Ingresa el código HEX del color deseado. Predeterminado nativo: #0d71f9.
- __Checkout error color__: color de los mensajes de error. Ingresa el código HEX del color deseado. Predeterminado nativo: #ff151f.
- __Checkout input background color__: color de fondo de los inputs. Ingresa el código HEX del color deseado. Predeterminado nativo: transparente.
- __Checkout input border color__: color del borde de los inputs. Ingresa el código HEX del color deseado. Predeterminado nativo: el mismo color utilizado en __accent color__.
- __Checkout input border radius__: permite definir el redondeado de los bordes de los inputs. Ingresa el valor deseado en píxeles (solo números). Predeterminado nativo: 50 píxeles.

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| 35 | 35px |

- __Checkout button background color__: color de fondo de los botones. Ingresa el código HEX del color deseado. Predeterminado nativo: el mismo color utilizado en __accent color__.
- __Checkout button border radius__: permite definir el redondeado de los bordes de los botones. Ingresa el valor deseado en píxeles (solo números). Predeterminado nativo: 50 píxeles.

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| 30 | 30px |

- __Checkout button box shadow__: opción que permite activar o desactivar la sombra de los botones.
- __Checkout font family__: fuentes utilizadas en textos. Ingresa el _generic family name_, _web safe font_ o link de la fuente. Predeterminado nativo: Overpass. Ejemplo correcto: sans-serif, verdana, ou https://fonts.gstatic.com/s/overpass/v12/qFda35WCmI96Ajtm83upeyoaX6QPnlo6_PPbM5qKl8Kuo8AzesE.woff2

- __Checkout base font size__: permite definir el tamaño de la fuente en el elemento raíz. Ingresa el valor deseado en píxeles (solo números). Predeterminado nativo: 10 píxeles.

Ejemplo:

| Correcto | Incorrecto |
| ---------------- | ---------------- |
| 11 | 11px |

> ⚠️ No utilices fuentes de más de 12 píxeles, ya que pueden distorsionar la visualización del layout.</b>

### Modo Sandbox

Para activar el entorno de pruebas de desarrollo, selecciona la opción __Enable sandbox mode__. Debes utilizar credenciales de prueba.

Una vez rellenados los campos de configuración, haz clic en __Save__.

## Configurar el webhook de easypay

Para configurar el webhook de easypay, sigue los pasos que se indican a continuación:

<blockquote><ui>1. En el [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la parte superior izquierda de la pantalla, y en el ícono de la flecha que señala la cuenta deseada.</ui>

![easypay_pt_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_9.PNG)

<blockquote><ui>2. Accede a **Web Services > URL Configuration**.</ui>

<blockquote><ui>3. En **URL: Notify**, ingresa el link a continuación, modificando solamente la información del nombre real de tu tienda marketplace.</ui>

`https://{nombre-de-tu-cuenta}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_es_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuraci%C3%B3n-de-pagos/configurar-pago-con-easypay_10.png)

<blockquote><ui>4. Haz clic en **Submit**.</ui>

## Configurar la afiliación easypay

Para configurar la afiliación easypay, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Proveedores__, o escribe __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre __easypay__ en la barra de búsqueda y haga clic en el nombre del proveedor.
4. Rellena los campos __Clave de aplicación__ y __Token de aplicación__ con los datos de tu cuenta easypay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor easypay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. Haz clic en `Guardar`.

## Configurar el pago con Apple Pay en easypay (opcional) 

Para procesar pagos con Apple Pay en easypay, primero debes realizar configuraciones para habilitar tu tienda en el entorno de Apple Pay. Obtenga más información en [Setting up Merchant ID in Apple Pay](https://developers.vtex.com/docs/guides/setting-up-merchant-id-in-apple-pay).  

Para configurar otros medios de pago que easypay procesará, accede a [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago).

Para establecer condiciones especiales en los medios de pago, accede a [Configurar condiciones especiales de pago](/es/tutorial/condiciones-especiales--tutorials_456).

as seguir los pasos indicados, el conector easypay puede demorar hasta 10 minutos en aparecer en el checkout de tu tienda como medio de pago.

