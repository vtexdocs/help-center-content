---
title: 'VTEX Sales App - Configuración básica'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2024-09-05T16:26:14.722Z
publishedAt: 2024-09-05T16:26:14.722Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slugEN: instore-basic-settings
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugES: instore-primeros-pasos-y-configuracion
---

VTEX Sales App es uno de los principales productos de VTEX para las operaciones de [comercio unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv). Es una aplicación que permite a tu tienda ofrecer una verdadera experiencia <i>omnichannel</i>, integrando perfectamente tus canales <i>online</i> y físicos y poniendo a tus clientes en el centro del negocio.

>ℹ️ Comprueba que tu tienda cumple todos los [requisitos para utilizar VTEX Sales App](https://help.vtex.com/pt/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u) antes de empezar a configurarla.

Para utilizar VTEX Sales App, debes seguir los pasos descritos a continuación en tu cuenta principal.

>⚠️ No es necesario instalar o configurar VTEX Sales App en las cuentas franquicia que representan tiendas físicas. Solo debes realizar el procedimiento descrito en este artículo en la cuenta principal de la marca.

## Instalar VTEX Sales App

El primer paso es instalar la aplicación gratuita [VTEX Sales App Setup](https://apps.vtex.com/vtex-assisted-sales-admin/p), disponible en VTEX App Store, en la cuenta principal de la marca.

1. Accede a la página de [VTEX Sales App Setup](https://apps.vtex.com/vtex-assisted-sales-admin/p) en VTEX App Store.
2. Haz clic en `Obtener app`.
3. Introduce el nombre de tu cuenta principal VTEX y haz clic en `Confirmar`.
4. Haz clic en `Finalizar compra`.
5. Haz clic en `Ir a la página de instalación`. Serás dirigido a la página de la aplicación VTEX Sales App Setup en el Admin.
6. Haz clic en `Instalar`.

Al instalar VTEX Sales App, la página de `checkout/instore` y sus respectivos archivos (`checkout-instore-custom.js` y `checkout-instore-custom.css`) se crean automáticamente en el sitio web `default` dentro de **Checkout**. Por defecto, VTEX Sales App siempre debe utilizarse en el sitio web `default` de la cuenta principal para simplificar la operación de comercio electrónico y evitar errores.

Para verificar el sitio web `default`, accede a **Configuración de la tienda** > **Checkout** y haz clic en <i class="fas fa-cog"></i>. Comprueba que la URL contenga la palabra `default`, como en el ejemplo: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Otra opción es ir a **Configuración de la tienda** > **CMS** > **Layout** > **CMS** > **Sites and channels**.

## Configurar VTEX Sales App

Después de la instalación, deberás realizar la configuración básica de la aplicación VTEX Sales App en el Admin VTEX de la cuenta principal, como se describe a continuación.

1. En el Admin VTEX, accede a **Apps** > **Mis Apps**, o escribe **Mis Apps** en la barra de búsqueda en la parte superior de la página.
2. Busca la aplicación VTEX Sales App y haz clic en <i class="fa-solid fa-gear"></i> `Configuración`.
3. Haz clic en `Avanzado`.
4. [Registra la dirección de la tienda](#cadastre-o-endereco-da-loja).
5. [Registra el email y el nombre del vendedor](#registre-o-email-e-nome-do-vendedor).
6. [Configura los métodos de pago](#configure-os-meios-de-pagamento).

### Registrar la dirección de la tienda

![cadastrar-loja-pt](//images.contentful.com/alneenqid6w5/51ICHIzuWsMAwPCVwQuQoB/071ec5240f968e662badf4e828954072/cadastrar-loja-pt.png)

En esta página, introduce el nombre de la primera tienda física donde se utilizará VTEX Sales App y la dirección completa de la tienda. Cuando hayas rellenado todos los campos, haz clic en `Confirmar`.

Después, puedes [añadir otras tiendas](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN) si lo deseas.

Si decides `Saltar este paso`, se creará una tienda ficticia con fines de prueba.

### Registrar el email y el nombre del vendedor

![registrar-vendedor-pt](//images.contentful.com/alneenqid6w5/5PvZutdPYWkm7rj4HCrlPC/0316ea7fd74dae942a64e5fdb22f3807/registrar-vendedor-pt.png)

Es necesario registrar un email y un nombre que se utilizarán como credenciales de inicio de sesión del vendedor. Haz clic en `Confirmar`.

>⚠️ El email registrado en esta página **no** puede ser un email ya en uso en el Admin de la plataforma VTEX. Utiliza los emails de vendedores que no tienen acceso al Admin.

En esta etapa, debes registrar solo a uno de tus vendedores. Después de realizar la configuración básica, puedes [añadir otros vendedores](https://help.vtex.com/pt/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

Si decides `Saltar este paso`, se creará un vendedor ficticio con el email `instorevendedor@gmail.com` y el nombre `Vendedor inStore`. Estos datos son válidos para entrar en la aplicación VTEX Sales App y pueden utilizarse con fines de prueba.

### Configurar métodos de pago

El siguiente paso es configurar los métodos de pago que aceptarás en VTEX Sales App. Activa las opciones deseadas utilizando el botón <i class="fas fa-toggle-on"></i> como se ilustra a continuación.

![configurar-meios-de-pagamento-pt](//images.contentful.com/alneenqid6w5/3kjTg7Y2tUI5UErQBsGc02/5174724afd2987a4b8f578c1d74b87b9/configurar-meios-de-pagamento-pt.gif)

Hay dos opciones:

* **Efectivo**\: activa esta opción si deseas aceptar pagos en efectivo.
* **Tarjeta**\: si ya tienes un contrato con un adquirente para recibir pagos con tarjeta de crédito o débito, puedes seleccionarlo en el menú desplegable. De lo contrario, desactiva esta opción por el momento.

Después de seleccionar las opciones deseadas, haz clic en `Confirmar`. Verás el siguiente mensaje de confirmación:

![sucesso-instore-pt](//images.contentful.com/alneenqid6w5/nVSjiQuE0EXIYecELJJFQ/79a0d24adb51e7ad68f371afe5ca0491/sucesso-instore-pt.png)

## Configurar condiciones de pago

Después de realizar la configuración básica, debes configurar las condiciones de pago para VTEX Sales App en el módulo de **Pagos**. Para ello, lee la guía [Configurar métodos de pago para inStore](https://help.vtex.com/pt/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Configurar logística

Además, para empezar a utilizar inStore, también debes realizar las configuraciones de __Logística__ según las estrategias que quieres aplicar. Para más información, lee las guías sobre [Comercio unificado](https://help.vtex.com/pt/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) y [Logística](https://help.vtex.com/pt/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx).
