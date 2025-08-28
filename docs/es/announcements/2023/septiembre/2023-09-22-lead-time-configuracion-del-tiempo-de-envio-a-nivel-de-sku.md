---
title: 'Lead time: configuración del tiempo de envío a nivel de SKU'
id: 39Q8TeXaDCbmTXFtwpNXlf
status: PUBLISHED
createdAt: 2023-09-22T14:07:20.464Z
updatedAt: 2023-09-28T17:47:25.398Z
publishedAt: 2023-09-28T17:47:25.398Z
contentType: updates
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: 2023-09-22-lead-time-configuring-shipping-time-at-sku-level
locale: es
legacySlug: lead-time-configuracion-del-tiempo-de-envio-a-nivel-de-sku
announcementImageID: 'undefined'
announcementSynopsisES: 'Lanzamiento global del lead time, una configuración opcional del tiempo de envío a nivel de SKU.'
---

VTEX ha puesto a disposición de todas las tiendas el [lead time](https://help.vtex.com/es/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B), una configuración del tiempo de envío de un SKU en un determinado stock. En otras palabras, puedes definir a nivel de SKU un tiempo de envío adicional en el cálculo de las promesas de envío que se muestran a los clientes en el checkout.

![lead_time_image_total_time_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023/septiembre/2023-09-22-lead-time-configuracion-del-tiempo-de-envio-a-nivel-de-sku_1.png)

El uso del lead time es opcional y, cuando no se configura, el envío de pedidos de la tienda permanece sin cambios. Cabe señalar que las reglas de consolidación del checkout, que calculan el plazo de envío total del pedido tomando en consideración el tiempo más largo de uno de los ítems, se mantienen.

## ¿Qué cambió?

Antes, el [cálculo del envío de pedidos](https://help.vtex.com/es/tutorial/como-funciona-o-calculo-de-envio--tutorials_116) consideraba los periodos configurados en tu estrategia de envío a nivel de:

* [Almacenes](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb)
* [Muelles](https://help.vtex.com/es/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW)
* [Políticas de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140)

Ahora, también existe la opción de configurar el tiempo de envío a nivel de SKU, con la nueva columna de lead time en la página [Gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139), a la que puedes acceder a través del Admin VTEX > **Catálogo > Stock > Gestión del stock**, como se muestra en la imagen a continuación:

![lead_time_inventory_management_ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2023/septiembre/2023-09-22-lead-time-configuracion-del-tiempo-de-envio-a-nivel-de-sku_2.png)

> ⚠️ En el Admin VTEX, el lead time se configura en días, hasta un límite de 365. De manera predeterminada, el contaje se realiza en días laborables, pero puedes configurar tu política de envío para se [realice en días naturales](https://help.vtex.com/es/tutorial/lead-time-tempo-de-envio-a-nivel-de-sku--16yv5Mkj6bTyWR1hCN2f4B#configurar-el-contaje-del-lead-time-en-dias-naturales-opcional). Para configurar periodos en horas, minutos y segundos debes utilizar el endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

## ¿Por qué realizamos este cambio?

Los principales beneficios de la nueva configuración del lead time son:

* **Mayor flexibilidad en la gestión de stocks**, especialmente útil para negocios con productos personalizables y escenarios de _dropshipping_ (el proveedor envía el producto directamente al cliente).
* **Ajustes más precisos de los plazos de envío**, lo que facilita la gestión del stock.
* **Cálculos de promesas de envío más precisos** para los clientes, lo que contribuye a una mejor experiencia de compra.

## ¿Qué se necesita hacer?

La página [Gestión del stock](https://help.vtex.com/es/tutorial/gerenciar-inventario--tutorials_139) del Admin VTEX se ha actualizado agregando una columna de lead time en todas las tiendas, y no se requiere ninguna acción por tu parte. El uso del nuevo campo es opcional; si no lo configuras, el tiempo de envío de tus pedidos permanecerá sin cambios.
