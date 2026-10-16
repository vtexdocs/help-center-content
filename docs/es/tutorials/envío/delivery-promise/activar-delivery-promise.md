---
title: 'Activar Delivery Promise'
createdAt: 2026-10-05T12:00:00.000Z
updatedAt: 2026-10-05T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: activate-delivery-promise
locale: es
subcategoryId: 13sVE3TApOK1C8jMVLTJRh
---

La activación de [Delivery Promise](https://help.vtex.com/es/docs/tutorials/delivery-promise) se hace directamente en el Admin VTEX, en un flujo guiado. En este flujo, pruebas la funcionalidad sin afectar la tienda en producción, revisas las opciones de envío usadas en los filtros, configuras los componentes en el storefront y, por último, publicas Delivery Promise para tus clientes.

En este artículo, verás cada paso de la activación:

1. [Activar el modo de prueba](#paso-1-activar-el-modo-de-prueba): selecciona las políticas comerciales y confirma las condiciones de uso para probar Delivery Promise sin afectar la tienda en producción.
2. [Revisar las Opciones de envío](#opcional-paso-2-revisar-las-opciones-de-envío): elige qué opciones de envío podrán usar los clientes como filtros en la tienda.
3. [Configurar la tienda](#paso-3-configurar-la-tienda): implementa o configura los componentes de Delivery Promise según la tecnología de tu tienda.
4. [Publicar en producción](#paso-4-publicar-en-producción): publica la versión de la tienda con los cambios y activa Delivery Promise para los clientes.

También encuentras [cómo desactivar Delivery Promise](#desactivar-delivery-promise) y [qué hacer cuando la cuenta no es compatible](#cuenta-no-compatible-con-delivery-promise).

## Antes de comenzar

Revisa los siguientes puntos antes de iniciar la activación:

* **Compatibilidad de la cuenta:** al acceder a la página **Delivery Promise** en el Admin VTEX, la plataforma verifica automáticamente si la cuenta cumple los [requisitos de Delivery Promise](https://help.vtex.com/es/docs/tutorials/delivery-promise#requisitos). Consulta esos requisitos para verificar si tu cuenta es compatible. Si es elegible, puedes usar Delivery Promise sin costo adicional.
* **Acceso al código de la tienda:** los [pasos 3](#paso-3-configurar-la-tienda) y [4](#paso-4-publicar-en-producción) requieren cambios en el código del storefront. Para acceder a él, ponte en contacto con el equipo responsable del desarrollo de la tienda o con un [partner de implementación](https://help.vtex.com/es/docs/tracks/cuentas-y-arquitectura#partners-de-implementacion). Si no tienes acceso al código, pide al equipo responsable que haga los cambios necesarios.
* **Permiso para publicar:** solo los usuarios con el rol Super Admin de la cuenta pueden publicar Delivery Promise en producción. Obtén más información en [Roles](https://help.vtex.com/es/docs/tutorials/roles).

Para comenzar, en el Admin VTEX, accede a **Storefront > Delivery Promise**. En esa página, puedes verificar la compatibilidad de la cuenta e iniciar el flujo de activación.

>ℹ️ Puedes salir del flujo y volver después. Los pasos completados quedan marcados en el lateral izquierdo de la página, con un resumen de las elecciones hechas, como las políticas comerciales seleccionadas y las opciones de envío destacadas.

## Paso 1: Activar el modo de prueba

En este paso, eliges dónde se usará Delivery Promise y confirmas las condiciones de uso. El modo de prueba no afecta tu tienda en producción.

Completa las siguientes secciones:

1. **Políticas comerciales:** selecciona las [políticas comerciales](https://help.vtex.com/es/docs/tutorials/como-funciona-una-politica-comercial) en las que se usará Delivery Promise. Puedes seleccionar hasta cuatro políticas comerciales.
2. **Condiciones de uso:** marca la opción **Entiendo que no podré activar estas funcionalidades mientras Delivery Promise esté activo**. Delivery Promise no es compatible con las siguientes funcionalidades, y usarlas puede causar problemas en el funcionamiento de la tienda:
    * [Multilevel Omnichannel Inventory](https://help.vtex.com/es/docs/tutorials/multilevel-omnichannel-inventory)
    * [Capacidad operativa](https://help.vtex.com/es/docs/tutorials/capacidad-operativa)
    * VTEX Shipping Network
    * [Assembly Options](https://help.vtex.com/es/docs/tutorials/assembly-options) para sellers externos

    Para entender el impacto de cada funcionalidad no compatible en tu tienda y qué hacer para usar Delivery Promise, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support).
3. **Integración de sellers externos:** marca la opción **Estoy de acuerdo con esta necesidad**. Si tu cuenta tiene sellers externos, deben informar la disponibilidad de los productos mediante la [Delivery Promise Notification API](https://developers.vtex.com/docs/api-reference/delivery-promise-notification-api). Sin esta integración, los productos de esos sellers pueden no estar disponibles en la tienda.
4. Haz clic en `Activar`.

>⚠️ Después de completar este paso, no es posible cambiar las políticas comerciales desde el Admin. Para incluir más políticas comerciales o cambiar las seleccionadas, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support).

## (Opcional) Paso 2: Revisar las Opciones de envío

Este paso es opcional para activar Delivery Promise. Sin embargo, para mostrar filtros de plazo de envío en la tienda, debes configurar las Opciones de envío.

Delivery Promise usa las [Opciones de envío](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta) registradas en tu cuenta para armar los filtros que se muestran a los clientes. En este paso, revisa y activa las sugerencias:

1. Haz clic en `Ir a Opciones de envío`.
2. En la pantalla de preferencias de Opciones de envío, elige qué opciones deben aparecer como filtro en la tienda (hasta tres) y define el orden de visualización. La primera opción de la lista se destaca más cuando el filtro se activa en el storefront.
3. Guarda los cambios y vuelve a la página **Delivery Promise**.
4. Haz clic en `Continuar`.

## Paso 3: Configurar la tienda

En este paso, configuras Delivery Promise en el storefront. Las instrucciones varían según la tecnología que usa tu tienda. Selecciona la pestaña correspondiente: **VTEX IO**, **FastStore** o **Headless**.

>⚠️ Para este paso, es necesario tener acceso al código de la tienda.

### Store Framework (VTEX IO)

1. **Activa en la versión de prueba:** crea un workspace de desarrollo y, en la app **GraphQL resolver for the VTEX store APIs**, habilita la opción `enableDeliveryPromisePreview`. Para eso, accede a la siguiente URL, reemplazando `{workspace}` por el nombre del workspace y `{cuenta}` por el nombre de tu cuenta:

    ```
    https://{workspace}--{cuenta}.myvtex.com/admin/apps/vtex.search-resolver/setup
    ```

2. **Instala los componentes y adáptalos al tema de tu tienda:** elige qué componentes aparecerán en la tienda, como selección de ubicación, forma de entrega y punto de recogida, y ajusta el comportamiento de cada uno, por ejemplo, si el código postal es obligatorio o si se permite la ubicación geográfica. Obtén más información en [Setting up Delivery Promise components](https://developers.vtex.com/docs/guides/setting-up-delivery-promise-components).

### FastStore

>⚠️ FastStore no tiene una versión de prueba aislada. Para ver Delivery Promise en funcionamiento en la tienda, debes completar el [paso 4](#paso-4-publicar-en-producción).

1. **Activa en el código de la tienda:** activa Delivery Promise en el archivo `discovery.config.js` de la tienda. Obtén más información en [Delivery Promise for FastStore](https://developers.vtex.com/docs/guides/faststore/features-delivery-promise).
2. **Instala los componentes y adáptalos al tema de tu tienda:** en el Headless CMS, elige qué componentes aparecerán en la tienda, como selección de ubicación, forma de entrega y punto de recogida, y ajusta el comportamiento de cada uno, por ejemplo, si el código postal es obligatorio o si se permite la ubicación geográfica.

### Headless

1. **Implementa la API en modo de prueba:** en las búsquedas que hace la tienda, incluye el parámetro `dpPreview=true` junto con los parámetros de ubicación del cliente (`deliveryZonesHash` y `pickupPointsHash`). Así, visualizas Delivery Promise activo en prueba. Ve un ejemplo:

    ```
    https://{{accountName}}.vtexcommercestable.com.br/api/intelligent-search/v1/product-search?sc=1&deliveryZonesHash=0ecce2ea9d3b57d4ef994efba4fe3ee9&pickupPointsHash=0b79d8a9979a5f4f5f30a7849da5da16&dpPreview=true
    ```

    Los valores del ejemplo son ilustrativos. Los parámetros de ubicación se generan a partir de la ubicación informada por el cliente.

    >❗ Usa el parámetro `dpPreview=true` solo en un entorno de prueba, nunca en llamadas de producción.

2. **Implementa los componentes:** implementa la captura de la ubicación del cliente para generar los parámetros de Delivery Promise y arma la interfaz de filtros de entrega y recogida con los datos que devuelve la Intelligent Search API. Obtén más información en [Delivery Promise for headless stores](https://developers.vtex.com/docs/guides/delivery-promise-for-headless-stores).

Al terminar la configuración, haz clic en `Continuar`.

## Paso 4: Publicar en producción

En este paso, publicas Delivery Promise para los clientes de tu tienda.

>⚠️ Para este paso, es necesario tener acceso al código de la tienda. Solo los usuarios con el rol Super Admin de la cuenta pueden publicar Delivery Promise en producción.

1. **Publica la versión de tu tienda en producción:** publica la versión de la tienda que contiene el componente de captura de código postal, para que el código postal del cliente se informe en la búsqueda.
2. **Activa Delivery Promise en producción en la búsqueda:** marca la opción **Entiendo que los sellers externos deben informar la disponibilidad mediante el protocolo para que Delivery Promise funcione correctamente**.
3. Haz clic en `Activar en producción`.
4. En la ventana de confirmación, haz clic en `Publicar`.

>⚠️ Delivery Promise se publica en todos los storefronts de las políticas comerciales seleccionadas en el paso 1. No es posible publicar en un solo storefront a la vez. Para saber cómo revertir la publicación, consulta [Desactivar Delivery Promise](#desactivar-delivery-promise).

La activación puede tardar hasta cinco minutos. Al finalizar, la página muestra el mensaje **Delivery Promise está en producción en la tienda**, con la lista de las políticas comerciales en las que la funcionalidad está activa. Haz clic en `Finalizar` para concluir.

A partir de ese momento, cuando la tienda identifica la ubicación del cliente (por el código postal o por otros datos de ubicación), los resultados de la búsqueda muestran solo los productos disponibles para entrega en esa dirección.

>ℹ️ Si la activación falla, la página muestra el mensaje **Algo salió mal**. Haz clic en `Intentar de nuevo`. Si el error continúa, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support).

Para activar Delivery Promise en otras políticas comerciales, ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support).

## Desactivar Delivery Promise

Por el momento, no es posible desactivar Delivery Promise desde la página **Delivery Promise** en el Admin. Para revertir la publicación, realiza una de las siguientes acciones:

* Ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support) y solicita la desactivación.
* Quita del storefront el componente de captura de código postal, o deja de enviar el código postal y los parámetros de ubicación del cliente en la búsqueda. Para eso, es necesario tener acceso al código de la tienda.

## Cuenta no compatible con Delivery Promise

Si tu cuenta no cumple los requisitos de Delivery Promise, la página muestra el mensaje **Tu cuenta no es compatible con Delivery Promise en este momento**, y los pasos de activación no están disponibles. La siguiente tabla muestra los motivos posibles y qué hacer en cada caso:

| Motivo | Qué hacer |
| ----- | ----- |
| La cuenta no usa [Intelligent Search](https://help.vtex.com/es/docs/tutorials/intelligent-search-vision-general). | Empieza a usar Intelligent Search y solicita la activación de nuevo. |
| La funcionalidad [Capacidad operativa](https://help.vtex.com/es/docs/tutorials/capacidad-operativa) está activada. | Desactiva la Capacidad operativa y ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support) para solicitar una nueva evaluación. |
| Uno o más sellers conectados a la cuenta no son compatibles con Delivery Promise. | Ajusta la configuración de los sellers y ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support) para solicitar una nueva evaluación. |

## Más información

* [Delivery Promise](https://help.vtex.com/es/docs/tutorials/delivery-promise)
* [Delivery Promise: preguntas frecuentes](https://help.vtex.com/es/docs/tutorials/delivery-promise-faq)
* [Opciones de envío (beta)](https://help.vtex.com/es/docs/tutorials/opciones-de-envio-beta)
