---
title: 'VTEX Sales App - Configuración básica'
id: 4L5SoLxE8O3YkxF7FKymrO
status: PUBLISHED
createdAt: 2020-06-28T13:51:53.895Z
updatedAt: 2025-02-20T23:01:37.261Z
publishedAt: 2025-02-20T23:01:37.261Z
firstPublishedAt: 2020-06-28T14:01:36.462Z
contentType: trackArticle
productTeam: Shopping
slugEN: instore-basic-settings
locale: es
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: instore-primeros-pasos-y-configuracion
order: 2
---

VTEX Sales App es uno de los principales productos de VTEX para las operaciones de [comercio unificado](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv). Esta aplicación te permite ofrecer una experiencia omnichannel real en tu tienda, integrando los canales online y físicos y poniendo a tus clientes en el centro de tu negocio.

> ℹ️ Antes de comenzar, verifica que tu tienda cumpla con todos los prerrequisitos para utilizar VTEX Sales App [requisitos para utilizar VTEX Sales App](/es/tracks/instore-primeiros-passos--6N0QlieWqboSVU2ehgAVAb/1wtAanSRA3g2316dw7bw8u).

Para utilizar VTEX Sales App, debes seguir los pasos descritos a continuación en tu cuenta principal.

> ⚠️  No es necesario instalar o configurar VTEX Sales App en las cuentas franquicia que representan tiendas físicas. Solo debes realizar el procedimiento descrito en este artículo en la cuenta principal de la marca.

## Instalar VTEX Sales App

El primer paso es realizar la instalación de la aplicación [VTEX Sales App](https://apps.vtex.com/vtex-assisted-sales-admin/p), disponible en VTEX App Store.

1. Accede a la página de [VTEX Sales App](https://apps.vtex.com/vtex-assisted-sales-admin/p).
2. Haz clic en `Obtener app`.
3. Ingresa el nombre de tu cuenta principal VTEX y haz clic en `Confirmar`.
4. Haz clic en `Finalizar compra`.
5. Haz clic en `Ir a la página de instalación`. Se te redirigirá a la página de la aplicación VTEX Sales App en el Admin VTEX.
6. Haz clic en `Instalar`.

Al instalar VTEX Sales App, la página de `checkout/instore` y sus respectivos archivos (`checkout-instore-custom.js` y `checkout-instore-custom.css`) se crean automáticamente en el sitio web `default` dentro de **Checkout**.  La configuración predeterminada es siempre utilizar VTEX Sales App dentro del sitio web `default` de la cuenta principal para simplificar la operación de ecommerce y evitar errores.

Para verificar el sitio web `default`, accede a **Configuración de la tienda > Storefront > Checkout** y haz clic en <i class="fas fa-cog"></i>. Comprueba que la URL contenga la palabra `default`, como en este ejemplo: `https://{{accountName}}.myvtex.com/admin/portal/#/sites/default/`. Otra opción es es confirmar en **Storefront > Layout > CMS > Sites and channels**.

## Configurar VTEX Sales App

Después de la instalación, relaiza la configuración básica de la aplicación VTEX Sales App según se describe a continuación:

1. En el Admin VTEX, accede a **Apps > Hub de extensiones > Gestión de aplicaciones**, o escribe **Gestión de aplicaciones** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Instaladas**, busca VTEX Sales App y haz clic en <i class="fa-solid fa-gear"></i> `Configuración`.
4. Haz clic en `Avanzado`.
5. [Registra la dirección de la tienda](#registrar-la-direccion-de-la-tienda).
6. [Registra el vendedor](#registrar-el-vendedor).
7. [Configura los medios de pago](#configurar-los-medios-de-pago).

### Registrar la dirección de la tienda

En la pantalla **Registro tienda**, ingresa el nombre de la primera tienda física donde se utilizará VTEX Sales App y su dirección completa. Después de rellenar todos los campos, haz clic en `Continuar`.

Después puedes [agregar otras tiendas](/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN) si lo deseas.

### Registrar el vendedor

En esta sección, debes definir un email y un nombre que se utilizarán como credenciales de inicio de sesión del vendedor. Si lo deseas, puedes incluir un código de identificación. Luego, haz clic en `Continuar`.

> ⚠️ El email registrado en esta página no puede ser un email que ya esté en uso en el Admin de la plataforma VTEX. Utiliza emails de vendedores que no tengan acceso al Admin.

En esta etapa, debes registrar solo a uno de tus vendedores. Después de realizar la configuración básica, puedes [añadir otros vendedores](/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/5PSjRstg7UU4lOm0s8aqKN).

### Configurar los medios de pago

El siguiente paso es configurar los medios de pago que aceptarás en VTEX Sales App. Activa las opciones deseadas utilizando el botón <i class="fas fa-toggle-on"></i>.

Hay dos opciones:

* **Efectivo**: activa esta opción si deseas aceptar pagos en efectivo.
* **Social selling:** activa esta opción para que todos los medios de pago configurados en el checkout de tu tienda online sean válidos en VTEX Sales App al utilizar el [carrito compartido (Social Selling)](/es/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy).

Después de seleccionar las opciones deseadas, haz clic en `Continuar`.

## Configurar condiciones de pago

Después de realizar la configuración básica descrita en los pasos anteriores, debes configurar las condiciones de pago para VTEX Sales App en el módulo de **Pagos**. Para configurarlas, consulta la guía [Configuración de métodos de pago VTEX Sales App](/es/tracks/instore-pagamentos--43B4Nr7uZva5UdwWEt3PEy).

## Vincular el catálogo de productos a una vitrina de tienda

Para que el catálogo de la tienda física se refleje en VTEX Sales App, debes configurar el [binding](/es/tutorial/o-que-e-binding--4NcN3NJd0IeYccgWCI8O2W) en el CMS (Layout - [CMS Legado](/es/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj)). Esta configuración vincula la [política comercial](/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) al storefront correspondiente, garantizando que los productos se muestren correctamente en la vitrina.

Para configurar el binding y garantizar que el catálogo de la tienda se muestre en VTEX Sales App, sigue los pasos a continuación:

1. En el Admin VTEX accede a **Storefront > Layout** o escribe **Layout** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en CMS y **Sites and channels**.
3. Selecciona el website deseado en la lista.
4. En la sección **Links**, haz clic en la fila correspondiente al binding y luego haz clic en `Update`.
5. En la sección **Available sales channels**, marca la política comercial que deseas vincular al binding.
6. Haz clic en `Save Binding` para guardar.

> ⚠️ Asegúrate de que la política comercial esté configurada correctamente en tu Admin VTEX antes de vincularla al binding. Esta configuración es esencial para garantizar que el catálogo de la tienda se muestre correctamente en VTEX Sales App.

## Configurar logística

Para empezar a utilizar VTEX Sales App, también debes realizar las configuraciones de __Logística__ según las estrategias que quieres aplicar. Para más información, lee las guías sobre [Comercio unificado](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv) y [Logística](/es/tracks/logistica-101--13TFDwDttPl9ki9OXQhyjx).
