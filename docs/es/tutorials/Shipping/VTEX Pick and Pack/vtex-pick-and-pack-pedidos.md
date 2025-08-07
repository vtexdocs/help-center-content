---
title: 'VTEX Pick and Pack: Pedidos'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2024-01-05T17:31:16.218Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
locale: es
legacySlug: vtex-pick-and-pack-pedidos
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

<div class = "alert alert-info">
Esta función se encuentra en fase beta cerrada, por lo que sólo los clientes seleccionados pueden acceder a ella ahora. Si desea implementarla en el futuro, rellene nuestro <a href="https://vtex.com/co-es/contacto/">formulario</a> apontaby introduciendo el nombre del producto en el campo <code>Comentarios</code>.
</div>

**Pedidos** es una página del Admin VTEX que muestra información sobre los pedidos realizados y gestionados por [VTEX Pick and Pack](/es/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU).

Esta página te permite realizar las siguientes acciones:

* [Consultar pedidos](#consultar-pedido) 
* [Buscar pedidos](#buscar-pedido) 
* [Filtrar pedidos](#filtrar-pedidos) 
* [Exportar pedidos](#exportar-pedidos)

![pick-and-pack-pedidos-ES](https://images.ctfassets.net/alneenqid6w5/7oIngXdaDwQP0CQSHlQaPO/0b19e96e2057462deca476086792e17d/image.png)

La página presenta la siguiente información en forma de tabla: 

| Campo de la tabla | Descripción                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| ID del pedido     | Número de identificación del pedido. También indica la fecha en que fue creado.                        |
| Facturas          | Status de facturación del pedido, con los siguientes valores posibles: **Facturado** y **No facturado**.       |
| Items             | Número de ítems que componen el pedido.                                                                |
| Envío             | Tipo de envío del pedido, con los siguientes valores posibles **Entrega al cliente** y **Recogida en tienda**. |
| Pago              | Medio de pago utilizado para realizar el pedido.                                                       |
| Tags              | Tags relacionadas con el pedido, como UTM o uso de cupones.                                            |
| Fecha de entrega  | Fecha de entrega o recogida del pedido.                                                                |
| Status            | Etapa del proceso de fulfillment del pedido.                                                           |

## Consultar pedido

Puedes optimizar la consulta de pedidos desde las siguientes secciones: 

* **Todos:** todos los pedidos realizados.
* **Pendientes:** pedidos pendientes, ítems listos para alistar y en preparación.
* **A enviar:** pedidos listos para envío.
* **Entregados:** pedidos que han sido entregados al cliente, ya sea por recogida en tienda o por la transportadora.
* **Cancelados:** pedidos cancelados.
* **Rechazados:** pedidos rechazados.

También puedes acceder a información más detallada sobre cada pedido haciendo clic en el pedido en la tabla.

![pick-and-pack-pedidos-2-ES](https://images.ctfassets.net/alneenqid6w5/2X9tIEvxpMKtTTCMC7NF9N/8307fcdea5832aa1a653f812c0eaba02/image.png)

Al seleccionar el pedido deseado, se mostrará la siguiente información:

* **Ítems:** lista de ítems que componen el pedido. Puedes buscar un ítem ingresando el ID del SKU o el nombre del ítem en la barra de búsqueda. También puedes hacer clic en el ítem para acceder a información más detallada.
* **Observaciones del pedido:** observaciones que el retailer agregó al pedido.
* **Información de envío:** información sobre el envío del pedido, incluido el status del envío.
* **Información de pago:** información sobre el pago del pedido.
* **Información adicional:** información adicional del pedido.
* **Logs:** línea de tiempo con el historial de actualizaciones del pedido.

## Buscar pedido

Puedes buscar un pedido utilizando la barra de búsqueda. Ingresa el ID del pedido en la barra de búsqueda, como en este ejemplo: `SLR-1341470502250-01`. 

## Filtrar pedidos

Puedes refinar la búsqueda y visualización de pedidos seleccionando la opción **Filtrar**. Filtra los pedidos utilizando las siguientes opciones:

* **Fecha de creación:** selecciona la fecha de creación del pedido.
* **Fecha de entrega:** selecciona la fecha en que se entregó el pedido.
* **Categorías:** selecciona la categoría de los ítems del pedido.
* **Medios de pago:** selecciona el medio de pago utilizado en el pedido.
* **Estrategia de envío:** selecciona la estrategia de envío utilizada en el pedido.
* **Método de envío:** selecciona el método de envío utilizado en el pedido.

Haz clic en `Limpiar filtros` para remover los filtros seleccionados.

## Exportar pedidos

Puedes exportar pedidos siguiendo los pasos a continuación:

1. Haz clic en `Exportar`.
2. Selecciona los datos que deseas exportar: `Informe de paquetes` o `Informe de pedidos`.
    - En el caso de `Informe de paquetes`, debes seleccionar el periodo que deseas exportar, el tipo y el método de envío.
    ![pick-and-pack-pedidos-3-ES](https://images.ctfassets.net/alneenqid6w5/4e3Zjkh9zuwmcPNe0CKJQU/ab4c8bcb38a8ab892c57aeeec869dac8/image.png)
3.  Haz clic en `Exportar`.
