---
title: '¿Qué ajustes de logística impactan la disponibilidad del producto en el carrito?'
id: NAyBFToRdvlDyOzeeAeNw
status: PUBLISHED
createdAt: 2024-09-27T14:02:13.369Z
updatedAt: 2024-11-04T21:10:23.340Z
publishedAt: 2024-11-04T21:10:23.340Z
firstPublishedAt: 2024-09-27T14:48:21.163Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: which-logistics-settings-can-impact-the-product-availability-in-the-cart
legacySlug: que-ajustes-de-logistica-impactan-la-disponibilidad-del-producto-en-el-carrito
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

En algunas ocasiones, un producto correctamente configurado y que [se muestra como disponible en la vitrina](/es/faq/por-que-el-producto-no-aparece-en-el-sitio-web) puede mostrarse indisponible al agregarlo al carrito. Varios aspectos de [logística](/es/docs/tutorials/fulfillment-logistica-vtex) pueden afectar la disponibilidad del producto en el carrito. Los siguientes temas permiten identificar las posibles causas:

* [Simulador de envío](#simulador-de-envio)
* [Stock](#stock)
* [Estrategia de envío](#estrategia-de-envio)
* [Configuración de la política de envío:](#configuracion-de-la-politica-de-envio)
    * [Transportadora y plantilla de envío](#transportadora-y-plantilla-de-envio)
    * [Dimensiones y factor volumétrico de peso](#dimensiones-y-factor-volumetrico-de-peso)
    * [Modalidad](#modalidad)

> ⚠️ Si la tienda utiliza la funcionalidad de [regionalización de sellers](/es/docs/tutorials/configurar-la-regionalizacion-del-seller), los sellers que tienen la capacidad de enviar el producto a la ubicación del cliente deben tenerlo disponible para la venta. Además, el status de los sellers debe ser Activo, ya que los productos de sellers inactivos no se consideran como disponibles.

## Simulador de envío

Un producto podría aparecer indisponible en el carrito porque la [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) de la tienda no permite enviar a la ubicación del cliente o porque el producto no tiene suficiente cantidad para la venta en el [stock](/es/docs/tutorials/gestionar-items-en-inventario).

El **Simulador de envío** permite probar la existencia de rutas viables, validar la configuración de logística de la tienda y consultar el stock.

> ℹ️ Para ver todos los pasos para simular el envío de un producto, consulta el artículo [Simulador de envío](/es/docs/tutorials/simulador-de-envio).

## Stock

Adoptando cualquiera de las siguientes estrategias, mantendrás la disponibilidad del producto en el carrito en lo que respecta al stock:

* Garantizar suficiente cantidad de ítems para la venta (los ítems [reservados](/es/docs/tutorials/como-se-maneja-la-reserva) no se consideran como disponibles).
    * En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, edita el valor en la columna `Actualizar recuento` en la fila del producto correspondiente.
* Activar la opción [stock ilimitado](/es/docs/tutorials/gestionar-items-en-inventario) para el producto.
    * En el Admin VTEX, accede a **Catálogo > Stock > Gestión del stock**, activa el botón de alternancia de la columna `Stock ilimitado` en la fila del producto correspondiente.

Si el [stock futuro](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/items/-skuId-/warehouses/-warehouseId-/supplyLots/-supplyLotId-) está configurado para el SKU, el suministro del ítem podría tardar más de lo esperado. Durante ese periodo, la indisponibilidad podría deberse a la falta del stock del producto.

> ⚠️ Si tu tienda tiene [cuentas franquicia](/es/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl#tipos-de-conta-na-vtex), para que el stock de las cuentas esté disponible para la venta, los productos deben estar asociados a la misma [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) de la vitrina.

## Estrategia de envío

En VTEX, la [estrategia de envío](/es/docs/tutorials/estrategia-de-envio) es el nombre de la relación entre la política de envío, almacén y muelle. Para que una ruta de envío sea válida cuando la plataforma realiza el [cálculo de envío](/es/docs/tutorials/como-funciona-el-calculo-del-envio) del pedido, debe existir al menos una combinación de entidades logísticas que permitan el envío del producto.

A continuación se listan las principales causas de indisponibilidad del producto en el carrito relacionadas con la estrategia de envío:

* La [política de envío](/es/docs/tutorials/politica-de-envio) está inactiva.
* El [almacén](/es/docs/tutorials/almacen) está inactivo.
* El [muelle](/es/docs/tutorials/muelles) está inactivo.
* El almacén y el muelle no están asociados.
* El muelle y la política de envío no están asociados.
* El muelle y la [política comercial](/es/docs/tutorials/como-funciona-una-politica-comercial) que define los productos de la vitrina no están asociados. 

> ℹ️ Estos escenarios deben considerarse en el contexto de venta. Tener un almacén inactivo no causa indisponibilidad del producto. Sin embargo, si ese es el único almacén que da servicio a la ruta de envío y está inactivo, el producto se mostrará como indisponible en el carrito.

## Configuración de la política de envío

La [política de envío](/es/docs/tutorials/politica-de-envio) es un conjunto de reglas y configuración que definen las opciones de envío que se mostrarán a los clientes en el carrito. Los principales elementos de la política de envío que afectan la disponibilidad del producto en el carrito son:

* [Transportadora y plantilla de envío](#transportadora-y-plantilla-de-envio)
* [Dimensiones y factor volumétrico de peso](#dimensiones-y-factor-volumetrico-de-peso)
* [Modalidad](#modalidad)

En el Admin VTEX, estos ajustes se configuran en **Envío > Estrategia de envío** dentro de la pestaña `Políticas de envío`, es decir, en la página de [edición de la política de envío](/es/docs/tutorials/crear-una-politica-de-envio). Para crear o editar una política de envío a través de API, utiliza los endpoints[ Create shipping policy](https://developers.vtex.com/docs/api-reference/logistics-api#post-/api/logistics/pvt/shipping-policies) y[ Update shipping policy by ID](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/shipping-policies/-id-).

### Transportadora y plantilla de envío

Todas las políticas de envío están asociadas a una [plantilla de envío](/es/docs/tutorials/plantilla-de-flete), que es donde se registra la [transportadora](/es/docs/tutorials/transportadoras-en-vtex) y sus valores de envío.

A continuación se listan las principales causas de indisponibilidad del producto en el carrito relacionadas con la configuración de la transportadora:

* El valor del carrito no alcanza el valor mínimo de envío.
* El valor del carrito excede el valor máximo de envío.
* La cantidad de ítems en el carrito es inferior al número mínimo de ítems para el envío.
* El código postal/ubicación del cliente está fuera de la zona de entrega de la transportadora.

> ℹ️ Los escenarios antes mencionados deben considerarse en el contexto de venta. Si solo hay una política de envío elegible para el envío y las características del producto no cumplen con las condiciones de la transportadora, no se encontrará ninguna ruta de envío válida y el producto se mostrará como indisponible.

Otros ajustes de la transportadora que pueden afectar la disponibilidad del producto pueden ser el peso y volumen de los ítems según se describe a continuación.

### Dimensiones y factor volumétrico de peso

Para que el [factor volumétrico de peso](/es/docs/tutorials/como-se-calcula-el-peso-cubico) no afecte la disponibilidad del producto, se debe garantizar que el producto esté dentro de las **dimensiones del paquete** configuradas en la política de envío:

* Suma de las dimensiones
* Longitud máxima
* Factor de peso volumétrico
* Factor de peso mínimo

Si el producto no cumple con los límites configurados, se mostrará como indisponible en el carrito.

> ⚠️ Si hay dos políticas de envío válidas para el pedido, una de tipo envío y otra de tipo [recogida](/es/docs/tutorials/puntos-de-recogida), y el producto no cumple con los límites de dimensiones de paquete de una de ellas, solo se mostrará una opción en el checkout. Por ejemplo, si el peso del producto es menor que el valor de peso mínimo de la política de envío de entrega, pero está dentro de los límites configurados para recogida, el cliente solo verá la opción de recoger el pedido.

### Modalidad

La [modalidad](/es/docs/tutorials/como-se-maneja-el-modal) es un ajuste de la política de envío que establece que los productos con características especiales los entreguen transportadoras especializadas. Por ejemplo, solo las transportadoras que ofrezcan refrigeración pueden enviar productos que se deben mantener refrigerados.

A continuación se mencionan las causas de indisponibilidad del producto en el carrito relacionadas con la modalidad:

* No hay una política de envío que corresponda al tipo de modalidad configurada en el producto.
* El producto no tiene modalidad configurada, pero no hay una política de envío válida para enviarlo, ya que las políticas aplicables están configuradas para entregar únicamente productos con modalidad.

