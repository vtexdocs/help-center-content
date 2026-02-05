---
title: 'Configurar pago con easypay marketplace'
id: 3YllWiITcPEOpteuToEdO7
status: PUBLISHED
createdAt: 2023-09-19T12:04:31.528Z
updatedAt: 2025-09-24T19:07:24.105Z
publishedAt: 2025-09-24T19:07:24.105Z
firstPublishedAt: 2023-09-19T12:05:03.795Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-easypay-marketplace
legacySlug: configurar-pago-con-easypay-marketplace
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX, puedes realizar la integración con el proveedor de servicios de pago easypay. A través de este conector, tu tienda puede vender utilizando easypay, MB Way y Multibanco.

Para utilizar la afiliación easypay, debes:

- [Instalar la aplicación easypay](#instalar-la-aplicacion-easypay)
- [Configurar la aplicación easypay](#configurar-la-aplicacion-easypay)
- [Configurar el webhook de easypay](#configurar-el-webhook-de-easypay)
- [Configurar la afiliación de easypay](#configurar-la-afiliacion-de-easypay) 

> ⚠️ Si tu tienda no es un marketplace, consulta los artículos [Configurar pago con easypay ](/es/docs/tutorials/configurar-pago-con-easypay) o [Configurar pago con easypay seller account](/es/docs/tutorials/configurar-pago-con-easypay-seller).

## Instalar la aplicación easypay

Para instalar la aplicación easypay, sigue los pasos que se indican a continuación:

1. En [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-install), ejecuta el comando `vtex login nombredelacuenta` para iniciar sesión.
2. Instala la aplicación easypay ingresando el comando `vtex install easypaypartnerpt.payment-provider-easypay` command. 

## Configurar la aplicación easypay

Una vez instalada la aplicación easypay, debes configurarla. Para acceder a la pantalla de configuración, sigue estos pasos:

1. En el Admin VTEX, ve a __Hub de extensiones > Gestión de aplicaciones__, o ingresa __Gestión de aplicaciones__ en la barra de búsqueda de la parte superior de la página.
2. Localiza la aplicación __Easypay Payment Provider__ y haz clic en __Configuración__.

La información de configuración se divide en cuatro secciones:

- [Credenciales de easypay (obligatorio)](#credenciales-de-easypay)
- [Pago (obligatorio)](#pago)
- [Personalización del checkout de easypay (required)](#personalizacion-del-checkout-de-easypay)
- [Modo sandbox](#modo-sandbox)

![easypay_pt_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_1.png)

> ⚠️ La configuración debes realizarla en el [entorno easypay](https://backoffice.easypay.pt/). El control de estas configuraciones es responsabilidad de easypay, por lo tanto, VTEX no garantiza que los pasos a continuación estén siempre actualizados. Utiliza este artículo como referencia y consulta tu cuenta en el [entorno easypay](https://backoffice.easypay.pt/) para obtener información actualizada.

### Credenciales de easypay

La información solicitada en esta sección es obligatoria:

__Key ID y Key Value__: valor y ID de la clave easypay.

<blockquote><ui>1. En el [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la parte superior izquierda de la pantalla, y después en el ícono de flecha de la cuenta Marketplace, como figura en la imagen.</ui>

![easypay_pt_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_2.PNG)

<blockquote><ui>2. Accede a **Web Services > Configuration API 2.0 > Keys**.</ui>

<blockquote><ui>3. En el menú **Alias**, opción **Create Payment Details**, haz clic en **Keys**.</ui>

![easypay_en_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_3.png)

<blockquote><ui>4. Copia y guarda la información de **ID** y **Key** proporcionada. Si deseas crear una nueva clave, haz clic en **+ New**.</ui>

![easypay_en_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_4.png)

__Merchant account UID__: identificación de la cuenta del comerciante en la que se abonarán los valores de la compra de productos adquiridos en la tienda. Si no dispones de una cuenta comerciante independiente, puedes utilizar el "Account UID" de la cuenta donde recibirás los pagos.

<blockquote><ui>1. En el menú lateral del [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la esquina superior izquierda de la pantalla y, a continuación, en la cuenta "COMERCIANTE 1", haz clic en el ícono de la flecha.</ui>

![easypay_pt_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_5.PNG)

<blockquote><ui>2. Copia la información y guarda los datos relacionados con el **Account UID**.</ui>

![easypay_en_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_6.png)

__Margin account UID__: identificación de la cuenta de margen.

1. En el menú lateral del [entorno easypay](https://backoffice.easypay.pt/), haz clic en __Beneficiary__.
2. Copia la información y guarda la información del __Account UID__ disponible en __Margin Account__.

![easypay_en_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_7.png)

__Refund account ID y Refund account key__: ID y valor de la clave de la cuenta de reembolsos de easypay.

<blockquote><ui>1. En el menú lateral del [entorno easypay](https://backoffice.easypay.pt/), accede a **Web Services > Configuration API 2.0 > Keys**.</ui>

<blockquote><ui>2. En el menú **Alias**, opción **Margin Account**, haz clic en **Keys**.</ui>

![easypay_en_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_8.png)

<blockquote><ui>3. Haz clic en **+ New**.</ui>

![easypay_en_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_9.png)

<blockquote><ui>4. En el campo **Name**, ingresa **Refund Account**.</ui>

![easypay_en_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_10.png)

<blockquote><ui>5. Haz clic en **Save**.</ui>

<blockquote><ui>6. Copia y guarda la información de **ID** y **Key** proporcionada.</ui>

![easypay_pt_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_11.png)

> ⚠️ Los reembolsos se cargan directamente a una cuenta perteneciente al marketplace. Posteriormente, el marketplace debe solicitar al seller el valor reembolsado.

### Pago

En esta sección, debes indicar si tu tienda utilizará pagos asíncronos, síncronos o ambos. Accede a la documentación de easypay para consultar los [medios de pagos](https://docs.quality-utility.aws.easypay.pt/concepts/payment-methods) disponibles y sus respectivas [siglas](https://docs.quality-utility.aws.easypay.pt/checkout/reference) de identificación.

![easypay_es_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_12.png)

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

![easypay_es_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_13.png)

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

<blockquote><ui>1. En el [entorno easypay](https://backoffice.easypay.pt/), haz clic en el logotipo de easypay situado en la parte superior izquierda de la pantalla, y en el ícono de la flecha que señala la cuenta marketplace.</ui>

![easypay_pt_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_14.PNG)

<blockquote><ui>2. Accede a **Web Services > URL Configuration**.</ui>

<blockquote><ui>3. En **URL: Notify**, ingresa el link a continuación, modificando solamente la información del nombre real de tu tienda marketplace.</ui>

`https://{nombre-de-tu-cuenta}.myvtex.com/_v/easypaypartnerpt.payment-provider-easypay/webhook`

![easypay_es_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/configurar-pago-con-easypay-marketplace_15.png)

> ⚠️ Si tu marketplace tiene más de una cuenta de pago, agrega un link para cada una de las cuentas existentes.

<blockquote><ui>4. Haz clic en **Submit**.</ui>

## Configurar la afiliación easypay

Para configurar la afiliación easypay, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pago > Configuración__, o ingresa __Configuración__ en la barra de búsqueda en la parte superior de la página.
2. En la pestaña __Afiliaciones de Gateway__, haz clic en el botón `+`.
3. Haz clic en el conector __easypay__.
4. Rellena los campos __Clave de aplicación__ y __Token de aplicación__ con los datos de tu cuenta easypay.
5. Si desea modificar el nombre de identificación que se mostrará para el proveedor easypay en la pantalla VTEX Admin, ingrese la información en el campo __Nombre__ en __Información general__.
6. En __Control de pago__, seleccione si desea activar el proveedor en un entorno de prueba haciendo clic en __Activar modo de prueba__.
7. Si desea utilizar [Split de pagos](/es/docs/tutorials/split-de-pagos) en su tienda, seleccione la opción __Activar split de cobros y enviar destinatarios de pago__ e indique el __Responsable de cargos de procesamiento de pagos__ y el __Responsable de contracargos__ (marketplace, sellers o marketplace y sellers).
8. Haz clic en `Guardar`.

Para configurar los medios de pago que easypay procesará, accede a [Configurar condiciones de pago](/es/tutorial/condiciones-de-pago).

Para establecer condiciones especiales en los medios de pago, accede a [Configurar condiciones especiales de pago](/es/docs/tutorials/condiciones-especiales).

as seguir los pasos indicados, el conector easypay puede demorar hasta 10 minutos en aparecer en el checkout de tu tienda como medio de pago.
