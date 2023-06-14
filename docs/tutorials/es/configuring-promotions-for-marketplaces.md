---
title: 'Configurar promoción para marketplace'
id: tutorials_406
status: PUBLISHED
createdAt: 2017-04-27T22:06:28.854Z
updatedAt: 2023-01-26T18:41:34.664Z
publishedAt: 2023-01-26T18:41:34.664Z
firstPublishedAt: 2017-04-27T23:03:23.902Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurar-promocion-para-marketplace
legacySlug: promocion-para-marketplace
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

El módulo de promociones de VTEX permite la creación de diferentes tipos de promoción, desde las más clásicas hasta las más innovadoras. Sin embargo, su utilización en marketplaces está restringido a algunos tipos específicos. Este tutorial explica cómo definir los marketplaces en los que se aplicará una promoción y cuáles son las condiciones que son aplicables en ese escenario. 

## Promociones disponibles para marketplaces

Solo los siguientes tipos de [promociones regulares](https://help.vtex.com/es/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) funcionan en los marketplaces:

- Promoción de flete gratis.
- Promoción de flete porcentual.
- Promoción de precio porcentual.

La configuración disponible para marketplaces VTEX es diferente a la ofrecida para marketplaces externos, y el comportamiento de esas promociones es ligeramente diferente a lo habitual. 

### Promociones de flete gratis y porcentual

Para este tipo de promoción se debe considerar la siguiente información: 

- Algunos marketplaces utilizan su propia tabla de fletes. Esto impide que una promoción de flete gratis sea aplicada en un pedido, ya que el marketplace no consulta el valor del flete registrado en VTEX.  
- Para que la promoción afecte al valor del flete, el marketplace debe simular el flete utilizando el endpoint `POST` `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`.
- La promoción no afectará al valor del producto si el marketplace utiliza el endpoint [List Freight Values](https://developers.vtex.com/docs/api-reference/logistics-api#get-/logistics/pvt/configuration/freights/-carrierId-/-cep-/values) de Logistics API para la consulta de fletes. Este endpoint solo devuelve los fletes registrados en VTEX, sin considerar los efectos de las promociones.
- Los sellers determinan los límites de reducción de precio que el marketplace puede aplicar sobre el flete cobrado. En caso de que sobrepase el límite establecido, el pedido no es rechazado.

### Promoción de precio porcentual

Para este tipo de promoción se debe considerar lo siguiente: 

- El marketplace no recibe la promoción en sí, solamente una notificación por API que indica que el precio sufrió alteraciones. Por ello, al marketplace le corresponde consultar el precio promocional. 
- Para que la promoción afecte al valor del producto, el marketplace debe simular el precio del SKU utilizando el endpoint [Do OrderForm Simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) de Checkout API.
- La promoción no afectará al valor del producto si el marketplace utiliza el endpoint [Get Price](https://developers.vtex.com/docs/api-reference/pricing-api#get-/prices/-itemId-) de Pricing API para consultas de precios. Este endpoint solo devuelve los precios registrados en VTEX, sin considerar los efectos de las promociones. 
- Los sellers determinan los límites de reducción de precio que el marketplace puede aplicar sobre el valor total del pedido. En caso de que sobrepase el límite establecido, el pedido es rechazado. Usted puede modificar la configuración de su tienda en la sección [Autorización de Pedidos](https://help.vtex.com/es/tutorial/como-funciona-la-autorizacion-de-pedidos--3MBK6CmKHAuUjMBieDU0pn#divergencia-de-valores).

### Configuraciones disponibles

Existen diferencias entre la configuración que está disponible para marketplaces VTEX y para marketplaces externos. Vea las funcionalidades que aplican a cada caso en la siguiente tabla.  

<div class = "alert alert-warning">
  <p><b>Importante:</b>en el caso de las integraciones externas, las configuraciones son únicas para cada marketplace, y estos deciden qué funcionalidades utilizarán.</p>
</div>

| Nombre  | Descripción      | ¿Disponible para marketplaces VTEX? | ¿Disponible para marketplaces externos? |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------ |
| Nombre| Nombre de la promoción| Sí| Sí|
| Status| Opción que define si la promoción está activa o inactiva| Sí| Sí|
| Descripción| Descripción interna de la promoción| Sí| Sí|
| Permitir acumular promociones   | Permite que se conceda más de una promoción al mismo tiempo, independientemente del tipo de descuento| Sí| Sí|
| Descuento Nominal| Descuento que se concederá al valor total del carrito| Sí| Sí|
| Validad| Fecha y hora de inicio y de fin de la promoción| Sí| Sí|
| Flete porcentual| Porcentaje de descuento que se concederá al valor del flete| Sí| Sí|
| Tabla de precios promocionales | Los valores de la tabla de precios se pueden utilizar como promoción. El precio promocional de cada SKU será el correspondiente en la tabla de precios seleccionada | Sí| Sí|
| Service Level Agreement (SLA) | Especificación de todos los servicios de VTEX. Aquí se incluyen los posibles tipos de entrega| Sí| No|
| El código postal de entrega debe   | El descuento se concederá si el código postal está de acuerdo con la regla configurada| Sí| No|
| Se aplicará a la Marca| El descuento se aplicará a las marcas seleccionadas| Sí| Sí|
| Se aplicará a la Categoría    | El descuento se aplicará a las categorías seleccionadas| Sí| Sí|
| Se aplicará al Producto| El descuento se aplicará a los Productos seleccionados| Sí| Sí|
| Se aplicará a los SKUs| El descuento se aplicará a los SKUs seleccionados| Sí| Sí|
| Afiliados| Identificador de pedidos del marketplace. El descuento se aplicará a los afiliados seleccionados| Sí| Sí|
| Canales de venta| La promoción se aplicará a una lista de canales de venta| Sí| Sí|
| Valor del ítem entre| Establece las políticas comerciales válidas para la promoción| Sí| Sí|

## Definiendo dónde se aplicará la promoción

Si es necesario, se puede segmentar promociones para marketplaces específicos. Existen dos opciones que se pueden utilizar para obtener ese resultado:

- [Política comercial](https://help.vtex.com/es/tutorial/que-es-una-politica-comercial--563tbcL0TYKEKeOY4IAgAE): se utiliza cuando todos los marketplaces objetivos comparten la misma configuración de canal de ventas (catálogo, precio y logística).
- [Afiliado](https://help.vtex.com/es/tutorial/que-es-afiliado--4bN3e1YarSEammk2yOeMc0): se utiliza para seleccionar uno o más marketplaces específicos, aunque no compartan la misma configuración de canal de ventas.

### Selección por política comercial

1. Cree una [promoción regular](https://help.vtex.com/es/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. En la sección **Política Comercial**, seleccione las opciones **Es igual a** y **Entregado por mí (Tienda de otros)**.
3. Luego, seleccione las políticas comerciales deseadas.
4. Haga clic en `Guardar`.

### Selección por afiliado

1. Cree una [promoción regular](https://help.vtex.com/es/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. Complete el campo **Afiliados** con el nombre del afiliado relacionado al marketplace que desea.
2. En la sección **Política Comercial**, seleccione las opciones **Es igual a** y **Entregado por mí (Tienda de otros)**.
4. Haga clic en `Guardar`.

<div class = "alert alert-warning">
  <p>Una vez creada la promoción, recuerde <a href = "https://help.vtex.com/es/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802">reindexar los productos afectados</a>. De esta manera, sus productos tendrán los precios actualizados.</p>
</div>
