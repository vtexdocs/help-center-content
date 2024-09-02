---
title: 'Retirada en la tienda'
id: 43NDZ5mCzCSagk880MeYIC
status: DRAFT
createdAt: 2018-06-22T14:41:52.415Z
updatedAt: 2020-08-03T19:56:41.373Z
publishedAt: 
firstPublishedAt: 2018-06-22T17:08:22.081Z
contentType: trackArticle
productTeam: Shopping
slug: retirada-en-la-tienda
locale: es
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

>ℹ️ Atención: Esa documentación está en proceso de actualizarse para reflejar los cambios del término Paneles a [estratégia de envío](https://help.vtex.com/announcements/estoque-e-entrega-entenda-o-que-mudou-na-aba-paineis--1YNfaeNG206XKI2UbGBRSl).

Para configurar el inStore con el modo de __Retirada en la tienda__, es decir, para considerar el inventario de su tienda física, usted depende de dos factores:

- Configurar la logística para el inStore
- Configurar el checkin en inStore

## Configurar la logística para el inStore

Para que el inStore funcione correctamente, es necesario registrar una logística específica para él. El inStore debe configurarse con un __punto de retirada__. El registro de la logística sigue dos etapas:

- Registro del muelle
- Registro del inventario

Para configurar la logística de inStore, siga estos pasos.

### Registro de la doca

- Acceda al módulo __Logistics__.
- Haga clic en la pestaña __Dashboard__.
- Haga clic en el botón __Nuevo muelle__.
- Rellene los campos de registro detallados abajo.
- Haga clic en __Guardar__.

#### Campos de registro

__Id (opcional)__: Campo identificador del muelle. Si no se rellena, se creará automáticamente.

__Nuevo muelle__: Rellene con el nombre del muelle.

__Política Comercial__: Seleccione la política comercial de inStore y haga clic en Añadir.

Marque la casilla __Configurar como punto de retirada__. Se abrirá una caja para que rellene los datos de su tienda de inStore.

En __Tipo de entrega__, llene con el tipo entrega de los pedidos hechos en su tienda. En el caso del inStore, como los pedidos se harán en la propia tienda, le sugerimos que llene con términos como "Self-Service", "Retirada en la tienda" o "Retirada inmediata".

En __Tienda__, seleccione la tienda donde se realizará la venta. Esta es la tienda registrada en el Master Data.

En __Instrucciones para retirada__, llene con las orientaciones necesarias para que su cliente pueda realizar la compra.

### Registro del inventario

- Acceda al módulo __Logistics__.
- Haga clic en la pestaña __Dashboard__.
- Haga clic en el botón __Nuevo Inventario__.
- Rellene los campos de registro detallados abajo.
- Haga clic en __Guardar__.

#### Campos de registro

__Id (Opcional)__: Campo identificador de inventario. Si no se rellena, se creará automáticamente.

__Nombre__: Nombre del inventario.

__Muelle de destino__: Seleccione el muelle registrado en inStore y haga clic en el botón Añadir.

## Configurar CheckIn en inStore

Si configuró su tienda siguiendo el flujo de Easy Setup, su inStore ya está con las tiendas registradas y habilitadas para funcionar como puntos físicos de venta y recogida, también conocidos como Pickup Points.

Ahora, se necesita configurar el CheckIn. Esta etapa de la instalación consiste en asociar las ventas de una tienda a un determinado Pickup Point.

Una vez que concluya esta etapa, el sistema mostrará la opción "Ítems para llevar ahora" en inStore, lo que permite al consumidor retirar el producto de la tienda tan pronto como realice el pago.

<div class=“alert alert-info”>
<strong>Atención</strong>: Si el Pickup Point de su elección está registrado en una cuenta franquicia, también es necesario registrar el ID del seller en las configuraciones del admin de la tienda.
</div>

Para realizar esta integración, verifique el procedimiento:

* Acceda a __https://accountname.myvtex.com/admin/vtable__;
* Seleccione la opción __Admin de las tiendas__;
* Al lado del número de la línea, haga clic en el ícono azul"__Lápiz__";
* Ingrese el Id del __Pickup Point__ escogido, conforme configurado en el sistema de Logística;
* Si fuera necesario, rellene el campo __Cuenta franquicia__ con el Id del seller, de acuerdo con lo que se explicó en el último párrafo;
* Haga clic en el ícono gris "__X__" para salir del campo de edición;
* Haga clic en el botón azul __Guardar__.

De este modo, si la logística está configurada correctamente, inStore funcionará en el modo __Recogida en la tienda__.

## Pickup Points

Esta es otra de las nuevas funcionalidades que el __Checkout V6__ proporciona. Con ella habilitada en inStore, un cliente consigue comprar productos en una tienda física pero sacarlos en otra tienda.

Para activar esta función, póngase en contacto con el equipo de VTEX.
