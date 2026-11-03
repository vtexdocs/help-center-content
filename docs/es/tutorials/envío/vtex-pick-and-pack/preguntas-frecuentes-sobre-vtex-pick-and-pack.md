---
title: 'Preguntas frecuentes sobre VTEX Pick and Pack'
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2026-10-23T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-faq
locale: es
hidden: false
---

Esta guía tiene como objetivo responder las preguntas más frecuentes sobre VTEX Pick and Pack. Este artículo se divide en las siguientes secciones:

- [Configuración general](#configuracion-general)
  - [¿VTEX Pick and Pack está habilitado de forma predeterminada en mi tienda?](#vtex-pick-and-pack-esta-habilitado-de-forma-predeterminada-en-mi-tienda)
  - [¿Quién puede acceder a VTEX Pick and Pack en el Admin VTEX?](#quien-puede-acceder-a-vtex-pick-and-pack-en-el-admin-vtex)
  - [¿VTEX Pick and Pack va a procesar todos los pedidos de mi tienda?](#vtex-pick-and-pack-va-a-procesar-todos-los-pedidos-de-mi-tienda)
  - [¿Los alistadores preparan un solo pedido por vez o varios al mismo tiempo?](#los-alistadores-preparan-un-solo-pedido-por-vez-o-varios-al-mismo-tiempo)
- [Alistamiento](#alistamiento)
  - [¿Puede el alistador modificar el pedido durante el alistamiento?](#puede-el-alistador-modificar-el-pedido-durante-el-alistamiento)
  - [Si el alistador puede agregar, reemplazar o remover ítems, ¿necesita la aprobación de un administrador?](#si-el-alistador-puede-agregar-reemplazar-o-remover-items-necesita-la-aprobacion-de-un-administrador)
  - [Si se permiten modificaciones en el pedido, ¿habrá un límite de cambios que se pueden realizar?](#si-se-permiten-modificaciones-en-el-pedido-habra-un-limite-de-cambios-que-se-pueden-realizar)
  - [¿Cómo ubica el alistador los ítems que debe alistar?](#como-ubica-el-alistador-los-items-que-debe-alistar)
- [Empaque](#empaque)
  - [¿Cuáles son los tamaños y tipos de paquetes que pueden utilizarse?](#cuales-son-los-tamanos-y-tipos-de-paquetes-que-pueden-utilizarse)
  - [¿Quién imprime las etiquetas de los paquetes?](#quien-imprime-las-etiquetas-de-los-paquetes)
- [Entrega y recogida](#entrega-y-recogida)
  - [¿Cómo confirma el cliente la recogida del pedido en la tienda?](#como-confirma-el-cliente-la-recogida-del-pedido-en-la-tienda)
  - [¿Puedo registrar nuevas transportadoras en Last Mile?](#puedo-registrar-nuevas-transportadoras-en-last-mile)
  - [¿Puedo usar el módulo Last Mile sin Pick and Pack?](#puedo-usar-el-modulo-last-mile-sin-pick-and-pack)
- [Integraciones](#integraciones)
  - [¿Puedo automatizar el proceso de facturación con Pick and Pack?](#puedo-automatizar-el-proceso-de-facturacion-con-pick-and-pack)
  - [¿Puedo darle al cliente más detalles sobre la preparación del pedido?](#puedo-darle-al-cliente-mas-detalles-sobre-la-preparacion-del-pedido)

## Configuración general

### ¿VTEX Pick and Pack está habilitado de forma predeterminada en mi tienda?

No. **VTEX Pick and Pack** no se activa automáticamente en el Admin VTEX. Para usarlo en tu tienda ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/support), que activará la funcionalidad y te guiará en los siguientes pasos de configuración.

Para explorar las páginas y funcionalidades de la solución antes de solicitar la activación consulta el artículo [VTEX Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack).

### ¿Quién puede acceder a VTEX Pick and Pack en el Admin VTEX?

Los alistadores registrados en la pestaña **Usuarios** de la página **Configuración** solo tienen acceso a la [aplicación móvil Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack-mobile). Los usuarios que monitorean la operación en el Admin VTEX dependen de [roles](/es/docs/tutorials/roles) y [recursos del License Manager](/es/docs/tutorials/recursos-del-license-manager), y no se gestionan en esta pestaña.

Recomendamos crear un rol dedicado a la operación de fulfillment y asignarlo a los usuarios responsables de su gestión. Para que estos usuarios vean la página [Insights](/es/docs/tutorials/vtex-pick-and-pack-insights), el rol debe incluir el recurso **Insights Metrics** del producto **Insights**. Para más información consulta el artículo [Acceder a VTEX Pick and Pack en el Admin VTEX](/es/docs/tutorials/vtex-pick-and-pack-configuracion#acceder-a-vtex-pick-and-pack-en-el-admin-vtex).

### ¿VTEX Pick and Pack va a procesar todos los pedidos de mi tienda?

No. Como solución nativa de VTEX, VTEX Pick and Pack recibe los pedidos directamente de la plataforma, sin necesidad de integraciones externas. Sin embargo, una vez activado en tu tienda, solo se le envían los pedidos que coinciden con los filtros configurados. Para definir estos filtros sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Pedidos > General**.
3. Llena los [filtros](/es/docs/tutorials/vtex-pick-and-pack-configuracion#filtros) disponibles.
4. Haz clic en `Guardar`.

### ¿Los alistadores preparan un solo pedido por vez o varios al mismo tiempo?

Puedes definir si el flujo de la hoja de trabajo se realizará con un pedido por vez o con múltiples pedidos. Para configurar cómo se realizará la preparación de pedidos sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > General**.
3. Elige la opción que deseas configurar:
   - **Pedido único:** preparación individual de cada pedido.
   - **Múltiples pedidos:** opción que permite gestionar varios pedidos en una misma hoja de trabajo.
4. Haz clic en `Guardar`.

## Alistamiento

### ¿Puede el alistador modificar el pedido durante el alistamiento?

El alistador puede agregar, reemplazar y rechazar ítems del pedido, así como aumentar la cantidad o ajustar el precio de un ítem. Sin embargo, es necesario activar los permisos para que el alistador pueda realizar estas acciones. Para configurar los permisos en la pestaña [Alistamiento](/es/docs/tutorials/vtex-pick-and-pack-configuracion#alistamiento) sigue estos pasos:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > Alistamiento**.
3. Selecciona las acciones que el alistador puede ejecutar:
   - **Permitir observaciones en los ítems**
   - **Pedir confirmación para alistar ítems**
   - **Permitir agregar nuevos SKUs**
   - **Permitir reemplazo de ítems**
   - **Permitir rechazar ítems**
   - **Permitir cambios de precio de ítems**
   - **Permitir cambios en la cantidad de ítems**
4. Haz clic en `Guardar`.

### Si el alistador puede agregar, reemplazar o remover ítems, ¿necesita la aprobación de un administrador?

La aprobación de un administrador no es obligatoria durante la modificación de un pedido, pero puede activarse en la pestaña [Alistamiento](/es/docs/tutorials/vtex-pick-and-pack-configuracion#alistamiento) siguiendo los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > Alistamiento**.
3. Activa la opción **Activar flujo de aprobaciones**.
4. Haz clic en `Guardar`.

Con el flujo de aprobaciones activado, las solicitudes de los alistadores que requieren autorización se muestran en la pestaña **Aprobaciones** de los [detalles de la hoja de trabajo](/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo#aprobaciones).

### Si se permiten modificaciones en el pedido, ¿habrá un límite de cambios que se pueden realizar?

Sí. En la pestaña [Alistamiento](/es/docs/tutorials/vtex-pick-and-pack-configuracion#alistamiento) cada tipo de modificación tiene su propio límite porcentual, definido en un control deslizante de −100% a 100%, calculado según el precio original del ítem, la cantidad original del ítem o el valor original del pedido, según el tipo. El control solo se muestra cuando la opción correspondiente está activada:

- **Límite de cambios en el precio de ítems de pedidos:** porcentaje máximo de variación en el precio de un ítem. Se muestra cuando la opción **Permitir cambios de precio de ítems** está activada.
- **Límite de cambios en la cantidad de ítems en pedidos:** porcentaje máximo de variación en la cantidad de unidades o el peso del ítem, según corresponda. El mismo límite define cuánto puede aumentar o disminuir el alistador las unidades o el peso del ítem. Se muestra cuando la opción **Permitir cambios en la cantidad de ítems** está activada.
- **Límite de cambios totales en el pedido:** porcentaje de variación permitido en el valor total del pedido, que define los límites mínimo y máximo para el monto final. El alistador puede hacer varias modificaciones, siempre que el valor total del pedido se mantenga dentro de estos límites. Se muestra cuando la opción **Limitar cambios totales en el pedido** está activada.

Para definir un límite sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > Alistamiento**.
3. Activa la opción correspondiente al límite que deseas aplicar.
4. Arrastra el control deslizante hasta el porcentaje deseado.
5. Haz clic en `Guardar`.

### ¿Cómo ubica el alistador los ítems que debe alistar?

La ubicación de los ítems se refiere al lugar específico donde está cada ítem en el almacén, facilitando y simplificando el proceso de alistamiento. Para activar la ubicación de los ítems sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Ítems > General**.
3. Activa la opción **Activar ubicación del ítem**.
4. Haz clic en `Guardar`.

Después de activar la opción, usa el endpoint [Create bin location](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api#post-/-skuId-/warehouses/-warehouseId-) de Pick and Pack Order Changes API para registrar dónde está cada SKU dentro del almacén.

## Empaque

### ¿Cuáles son los tamaños y tipos de empaque que pueden utilizarse?

Los tipos y tamaños de empaques utilizados por la tienda deben estar registrados en la pestaña [Empaque](/es/docs/tutorials/vtex-pick-and-pack-configuracion#empaque) de la página **Configuración**. Para agregar un empaque sigue los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > Empaque > Tipos de empaque**.
3. Haz clic en `Crear tipo de empaque`.
4. Llena el formulario con la información del empaque, como nombre, tipo, descripción, código, dimensiones y peso máximo.
5. Haz clic en `Guardar`.

> ℹ️ Las opciones de tipo de empaque disponibles son `Caja`, `Bolsa`, `Empaques`, `Cinta`, `Papel` y `Otros`.

### ¿Quién imprime las etiquetas de los paquetes?

La impresión de las etiquetas de los paquetes la realiza el alistador en la [aplicación móvil Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack-mobile#empaque), no el retailer ni el operador del Admin VTEX. Durante el empaque el alistador accede a la pestaña **Ítems empacados**, hace clic en el menú <i class="fas fa-ellipsis-v"></i> del paquete deseado y selecciona `Imprimir etiquetas`.

Para que la etiqueta esté disponible para el alistador, actívala en la pestaña [Empaque](/es/docs/tutorials/vtex-pick-and-pack-configuracion#empaque) y define la información que se mostrará en ella siguiendo los pasos a continuación:

1. En el Admin VTEX accede a **Envío > Pick and Pack > Configuración** o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Accede a **Hojas de trabajo > Empaque > General**.
3. Habilita la opción **Activar etiquetas de empaque**.
4. En la sección **Impresión** selecciona y llena toda la información que desees mostrar en la etiqueta.
5. Haz clic en `Guardar`.

> ℹ️ La etiqueta de empaque es diferente de la etiqueta de seguimiento, que Last Mile genera y el retailer descarga en el [panel de detalles del servicio](/es/docs/tutorials/vtex-pick-and-pack-last-mile#consultar-detalles-de-un-servicio). La plantilla de la etiqueta de seguimiento no se puede personalizar en el Admin VTEX, pero mediante una integración puedes recibir una etiqueta con la plantilla de la transportadora.

## Entrega y recogida

### ¿Cómo confirma el cliente la recogida del pedido en la tienda?

Para los pedidos con recogida en la tienda, [Last Mile](/es/docs/tutorials/vtex-pick-and-pack-last-mile#confirmar-recogida-en-tienda) genera un código de seis dígitos que autentica la entrega al cliente. El flujo funciona de la siguiente manera:

1. El alistamiento y el empaque del pedido se completan y se crea el servicio de recogida.
2. VTEX Pick and Pack envía al cliente un email con el código de recogida.
3. El cliente va a la tienda e informa el código.
4. El operador de la tienda valida el código en el servicio y completa la recogida.
5. El servicio pasa al status `Entregado` y se registra la fecha de confirmación. Después de este evento, la facturación del pedido puede activarse automáticamente según la integración configurada.

El email se envía a través del [Centro de mensajes](/es/docs/tutorials/como-funciona-el-message-center), usando una plantilla dedicada al código de recogida. Si el cliente no recibió el mensaje, puedes [enviar un nuevo código por email](/es/docs/tutorials/vtex-pick-and-pack-last-mile#enviar-nuevo-codigo-por-email) desde el panel de detalles del servicio.

### ¿Puedo registrar nuevas transportadoras en Last Mile?

Sí. Para registrar una nueva transportadora abre un ticket con el [Soporte VTEX](https://help.vtex.com/es/support) para solicitar el registro de credenciales y proporcionar los detalles de integración. Este registro no tiene costo adicional.

### ¿Puedo usar el módulo Last Mile sin Pick and Pack?

Por el momento, no es posible usar el módulo Last Mile sin Pick and Pack. Estamos registrando el interés por esta opción. Para enviar tu feedback abre un ticket con el [Soporte VTEX](https://help.vtex.com/es/support).

## Integraciones

### ¿Puedo automatizar el proceso de facturación con Pick and Pack?

Sí. Puedes usar el [webhook](/es/docs/tutorials/vtex-pick-and-pack-configuracion#webhook) de Pick and Pack para identificar cuándo se completa el proceso en la aplicación e integrarlo con una automatización existente. Debes implementar esta automatización por tu cuenta.

### ¿Puedo darle al cliente más detalles sobre la preparación del pedido?

Sí. El [webhook](/es/docs/tutorials/vtex-pick-and-pack-configuracion#webhook) devuelve las modificaciones de status del pedido durante las etapas de alistamiento, empaque y entrega. Cuando Last Mile está activo, el nivel de detalle de la información de entrega depende del sistema de la transportadora. Puedes usar estos datos para crear flujos de notificación para el cliente.

## Más información

- [VTEX Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack)
- [VTEX Pick and Pack: Configuración](/es/docs/tutorials/vtex-pick-and-pack-configuracion)
- [VTEX Pick and Pack: Hojas de trabajo](/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo)
- [VTEX Pick and Pack: Last Mile](/es/docs/tutorials/vtex-pick-and-pack-last-mile)
- [VTEX Pick and Pack Mobile](/es/docs/tutorials/vtex-pick-and-pack-mobile)
