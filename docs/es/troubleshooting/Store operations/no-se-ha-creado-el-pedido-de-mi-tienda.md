---
title: 'No se ha creado el pedido de mi tienda'
id: 7xQZqkMHXkHCEEZl5UlX8I
status: PUBLISHED
createdAt: 2024-07-18T20:10:20.933Z
updatedAt: 2024-11-08T18:57:41.671Z
publishedAt: 2024-11-08T18:57:41.671Z
firstPublishedAt: 2024-07-18T20:56:20.706Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: my-store-order-was-not-created
locale: es
legacySlug: no-se-ha-creado-el-pedido-de-mi-tienda
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Pedidos, Integración, Integración XML, Producto, Stock

Cuando un cliente intenta realizar una compra y se produce un error al crear el pedido, esto puede deberse a varias razones, como problemas relacionados con el pago, logística o [integración del backend](/es/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) con sistemas ERP (sistemas de planificación de recursos empresariales).

Antes de considerar razones complejas para errores en pedidos no creados, aplica los procesos de resolución de problemas (troubleshooting) presentados en este artículo. Algunos de los escenarios de error más comunes son:

* El ítem no estaba disponible en el [stock](/es/tutorial/inventory-management--tutorials_139) y la tienda no estaba configurada para vender productos sin stock (agotados).
* La integración XML no estaba configurada para enviar información sobre productos sin stock (agotados).

## Soluciones

Considera los siguientes procesos de solución de problemas para errores en la creación de pedidos:

* [Gestionar el stock](#gestionar-el-stock): si no tienes ítems en stock y tu tienda no está configurada para vender productos sin stock (agotados).
* [Revisar integración XML](#revisar-integracion-xml): si tu integración XML no está configurada para enviar información sobre productos sin stock (agotados).

### Gestionar stock

Hay dos formas de gestionar el [stock](/es/tutorial/inventory-management--tutorials_139):

* **Vía API:** utilizando el endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).
* **Vía Admin VTEX:** accediendo a _Catálogo > Stock > Gestión del stock_.

Las siguientes soluciones se centran en la gestión del stock a través del Admin VTEX:

* **Actualizar recuento de stock:** en la fila correspondiente al SKU y almacén deseados, en la columna _Actualizar recuento_, ingresa el número de ítems disponibles para la venta y haz clic en `Guardar`. Este número debe ser positivo; lo contrario resultaría en un [stock negativo](/es/faq/why-is-my-stock-negative--frequentlyAskedQuestions_159).
* **Configurar stock ilimitado:** en la fila correspondiente al SKU y almacén deseados, en la columna _Stock ilimitado_, haz clic en el botón de activación y después en `Guardar`. Cuando se activa esta configuración, el ítem se considera siempre disponible para la venta y la tienda nunca presentará productos sin stock (agotados).

<div class = "alert alert-info">
Para realizar la configuración y que los productos sin stock (agotados) se muestren en tu storefront, accede al <b>Admin VTEX > Catálogo > Todos los productos</b> y en la página de configuración del producto, en la pestaña <b>Producto</b>, marca la opción <b>Sí</b> en el campo <i>Mostrar producto sin stock (agotado)</i>.
</div>

### Revisar la integración XML

XML es un lenguaje de marcado que define y almacena datos de forma compatible. Si la [integración XML de tu tienda](/es/tutorial/configurando-xml--tutorials_242) no tiene definidas ciertas configuraciones, es posible que no pueda exportarse la información del producto.

Puede ocurrir un error debido a la falta de información del producto cuando no hay stock de ese producto y la integración no está configurada para enviar productos _sin stock (agotados)_. Para activar la configuración, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Canales > Integración XML** o ingresa **Integración XML** en la barra de búsqueda de la parte superior de la página.
2. En la fila de la integración XML deseada, haz clic en `Editar`.
3. En la pestaña `Editar XML`, en la opción **Mostrar SKU no disponibles,** selecciona la casilla `Mostrar SKU sin stock (agotados) en los resultados`.
4. Haz clic en `Guardar`.

<div class="alert alert-warning">
Pueden ocurrir errores al intentar facturar un pedido si hay información XML incorrecta o faltante.
</div>

