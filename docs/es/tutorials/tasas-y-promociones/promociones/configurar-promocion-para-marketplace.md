---
title: 'Configurar promoción para marketplace'
id: tutorials_406
status: PUBLISHED
createdAt: 2017-04-27T22:06:28.854Z
updatedAt: 2024-11-11T16:46:25.421Z
publishedAt: 2024-11-11T16:46:25.421Z
firstPublishedAt: 2017-04-27T23:03:23.902Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-for-marketplaces
legacySlug: promocion-para-marketplace
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

VTEX permite la creación de diferentes tipos de [promociones](/es/tutorial/visao-geral-promocoes--3PeHVYcooLIDmA33IAnjhm?&utm_source=autocomplete#). Sin embargo, las promociones que se configuran en la cuenta de un seller y se utilizan en marketplaces (VTEX o externos) se limitan a algunos tipos específicos. Este tutorial explica cómo definir las promociones y condiciones que son aplicables en estos escenarios.

## Promociones disponibles de sellers para marketplaces

En marketplaces, solamente pueden aplicarse los siguientes tipos de [promociones regulares](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI):

* Envío gratis
* Envío porcentual
* Porcentaje de precio
* Tabla de precios

La [configuración disponible](#heading=h.2et92p0) para marketplaces VTEX es diferente de la que se ofrece a los marketplaces externos. Por esta razón, el comportamiento de las promociones en otros marketplaces es ligeramente distinto del habitual.

### Promociones de envío gratis y envío porcentual

Para este tipo de promociones es importante tener en cuenta la siguiente información:

* Algunos marketplaces utilizan sus propias tablas de envío. Esto impide que se aplique una promoción de envío a un pedido, ya que el marketplace no consulta el precio del envío registrado en VTEX.
* Para que la promoción se aplique al valor del envío, el marketplace debe simular el envío utilizando el endpoint [Fulfillment simulation - External Marketplace](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/checkout/pub/orderForms/simulation).
* La promoción no se aplicará al valor del producto si el marketplace utiliza el endpoint [List Freight Values](https://developers.vtex.com/vtex-developer-docs/reference/carriers#freightvalues) de la API de Logistics para la consulta de tarifas de envío. Este endpoint devuelve únicamente las tarifas de envío registradas en VTEX, sin considerar los efectos de la aplicación de la promoción.
* Los sellers determinan los límites de reducción de precio que el marketplace puede aplicar al valor del envío. Si el valor de la reducción supera el límite establecido, no se realizará el pedido.

### Promociones de porcentaje de precio

Para este tipo de promociones es importante tener en cuenta la siguiente información:

* Una vez que el seller crea y activa la promoción, esta no genera ningún tipo de notificación para el marketplace. Corresponde al marketplace consultar el precio promocional.
* Para que la promoción se aplique al valor del producto, el marketplace debe simular el precio del SKU utilizando el endpoint [Do OrderForm Simulation](https://developers.vtex.com/vtex-developer-docs/reference/orderform#orderformsimulation) de la API de Checkout.
* La promoción no se aplicará al valor del producto si el marketplace utiliza el endpoint [Get Price](https://developers.vtex.com/vtex-developer-docs/reference/prices-and-fixed-prices#getprice) de la API de Pricing para consulta de envíos. Este endpoint devuelve únicamente los precios registrados en VTEX, sin considerar los efectos de la aplicación de la promoción.
* Los sellers determinan los límites de reducción de precio que el marketplace puede aplicar sobre el valor total del envío. Si el valor de la reducción supera el límite establecido, no se realizará el pedido. Puedes modificar la configuración de tu tienda en la sección [Autorización de pedidos](/es/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn?&utm_source=autocomplete#divergencia-de-valores).

### Configuración disponible

Existen diferencias entre la configuración disponible para marketplaces VTEX y para marketplaces externos. Consulta en la tabla siguiente las funcionalidades que se aplican en cada caso.

> ⚠️ En el caso de las integraciones externas, las configuraciones son únicas para cada marketplace, y estos deciden qué funcionalidades utilizarán.

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

## Promociones no disponibles para marketplaces**

Consulta a continuación las promociones que no están disponibles para marketplaces:

* Descuento nominal
* Precio máximo por ítem
* Envío nominal
* Envío máximo
* Regalo
* Valor de fidelidad
* Comprar juntos
* Más por menos
* Descuento progresivo
* Compra uno y lleva uno gratis
* Promoción de campaña

### Configuración no disponible

A continuación se muestran las opciones de configuración** **no disponibles para marketplaces:

| Nombre | Descripción |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Clúster de clientes                                                  | Descuento concedido si el cliente está registrado en el [clúster](/es/tutorial/como-criar-um-cluster-de-clientes--frequentlyAskedQuestions_1724) seleccionado.                                           |
| Tag de marketing                                                     | Utilizado para restringir la activación de la promoción si la compra se realiza a través del [módulo de Suscripciones de VTEX](/es/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#). |
| UTM                                                                  | Descuento concedido en función del valor de un determinado [parámetro UTM](/es/tutorial/o-que-sao-utm-source-utm-campaign-e-utm-medium--2wTz7QJ8KUG6skGAoAQuii).                                         |
| Audiencia de campaña                                                 | Permite segmentar las promociones de tu tienda definiendo [públicos objetivos](/es/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#publico-alvo) que cumplan criterios específicos.             |
| Cupones                                                              | Código que permite aplicar promociones sobre el valor del carrito.                                                                                                                                                            |
| Valor mínimo o máximo del carrito                                    | Se aplica teniendo en cuenta el valor del carrito sin considerar ni otras promociones ni el envío.                                                                                                                            |
| Número de cuotas                                                     | Descuento concedido si el número de cuotas seleccionado por el cliente se encuentra dentro del intervalo registrado.                                                                                                          |
| Restricción por BIN                                                  | Descuento concedido si el BIN de la tarjeta figura entre los números ingresados.                                                                                                                                              |
| Medio de pago                                                        | Descuento concedido si el medio de pago seleccionado por el cliente es el mismo que el registrado en la promoción.                                                                                                            |
| Primera compra                                                       | Descuento concedido en la primera compra del cliente.                                                                                                                                                                         |
| Valor acumulado de las compras                                       | Descuento concedido si el valor total de todas las compras ya realizadas por el cliente coincide con el valor ingresado.                                                                                                      |
| Permitir acumular con precios manuales                               | Permite aplicar la promoción a productos cuyos precios han sido ingresados manualmente por el teleoperador de ventas.                                                                                                         |
| Precio "de" y "por" son iguales o Precio "de" y "por" son diferentes | Hace referencia a los valores del registro del producto.                                                                                                                                                                      |
| Filtro de sellers                                                    | Define a qué sellers se aplicará la promoción.                                                                                                                                                                                |
| Uso máximo de la promoción por cliente                               | Limita la cantidad de veces que cada cliente puede recibir la promoción.                                                                                                                                                      |
| Uso máximo de la promoción por tienda                                | Limita el número de veces que se aplicará la promoción.                                                                                                                                                                       |
| Uso máximo del cupón por producto                                    | Limita el número de veces que el cupón será válido por producto.                                                                                                                                                              |

## Definir el contexto en el que se aplicará la promoción

Los sellers pueden segmentar las promociones para mercados específicos. Hay dos modos de realizarlo:

- [Política comercial](/es/tutorial/que-es-una-politica-comercial--563tbcL0TYKEKeOY4IAgAE): se utiliza cuando todos los marketplaces objetivos comparten la misma configuración de canal de ventas (catálogo, precio y logística).
- [Afiliado](/es/tutorial/que-es-afiliado--4bN3e1YarSEammk2yOeMc0): se utiliza para seleccionar uno o más marketplaces específicos, aunque no compartan la misma configuración de canal de ventas.

### Selección por política comercial

1. Cree una [promoción regular](/es/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. En la sección **Política Comercial**, seleccione las opciones **Es igual a** y **Entregado por mí (Tienda de otros)**.
3. Luego, seleccione las políticas comerciales deseadas.
4. Haga clic en `Guardar`.

### Selección por afiliado

1. Cree una [promoción regular](/es/tracks/promotions--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI).
2. Complete el campo **Afiliados** con el nombre del afiliado relacionado al marketplace que desea.
2. En la sección **Política Comercial**, seleccione las opciones **Es igual a** y **Entregado por mí (Tienda de otros)**.
4. Haga clic en `Guardar`.

> ⚠️ Una vez creada la promoción, recuerde <a href = "/es/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802">reindexar los productos afectados</a> al inicio y al final de las promociones. De esta manera, sus productos tendrán los precios actualizados.
