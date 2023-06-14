---
title: 'Configuraciones del público objetivo'
id: 4pSWJqg6EoI8mRjPhFNqLX
status: DRAFT
createdAt: 2020-06-29T21:25:09.623Z
updatedAt: 2022-07-21T22:00:34.537Z
publishedAt: 
firstPublishedAt: 2020-07-27T17:00:52.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: configuraciones-del-publico-objetivo
legacySlug: configuraciones-del-publico-objetivo
subcategory: 2cI57eZ3ZiWSeaQs26Gwys
---

Después de realizar las [configuraciones de la audiencia de campaña](https://help.vtex.com/pt/tutorial/como-criar-campanhas), es posible crearle un público objetivo.

El público objetivo segmenta los usuarios y las condiciones elegibles en la audiencia de campaña. Si la audiencia de campaña está activa y vigente, atendiendo todos los criterios definidos en el público objetivo, las promociones asociadas a esta también se activarán.

Cuando se cumple con todas las restricciones de la audiencia de campaña y la audiencia de campaña está activada y es elegible para el contexto de compra, no significa necesariamente que se apliquen las promociones de audiencia de campaña asociadas con esta. Para eso, también deben cumplirse las restricciones que se definen en la [promoción de la audiencia de campaña](https://help.vtex.com/es/tutorial/promocao-de-campanha--1ChYXhK2AQGuS6wAqS8Ume).

## Defina su público objetivo

- Nombre: nombre del público objetivo.

## Elementos que se utilizan en el público objetivo

__Categorías, Marcas, Colecciones y SKUs__: usted debe cumplir con todas las condiciones registradas. Seleccione las categorías, marcas, colecciones y los SKUs que desea incluir en la audiencia de campaña.

Ejemplo: si registra una categoría y una marca, la audiencia de campaña solo se activará si el producto cumple con esas dos condiciones.

__Al menos 'X' productos se encuadran en los criterios anteriores__: solo se puede configurar cuando todos los elementos están configurados con el valor "Iguales a".

## Condiciones para que se aplique su público objetivo

- __Valor mínimo y máximo del pedido__: la audiencia de campaña se activará si el importe total del carrito corresponde a los valores introducidos. Este total considerará la suma de precios de los productos que están en el carrito y que están contemplados en la audiencia de campaña.
- __Uso de histórico a la promoción__: en caso de seleccionarse, defina el periodo de tiempo en que debe considerarse el historial. Usted puede agregar fechas específicas o contar los días a partir de la fecha actual.
- __Valor del artículo entre__: la audiencia de campaña se activará si el valor del artículo cumple con el rango de valores introducidos.
- __Restricción de Promoción por BIN__: la audiencia de campaña se activará si el BIN de la tarjeta está entre los registrados.
- __Marketing Tags__: campo utilizado para restringir la activación de la audiencia de campaña en caso de que la compra se realice por el [sistema de suscripciones de VTEX](https://help.vtex.com/es/tutorial/setting-up-subscription-v2--1FA9dfE7vJqxBna9Nft5Sj). Para configurarlo, basta con habilitarlo e introducir el valor `vtex-recurrence`.
- __Clúster de clientes__: la audiencia de campaña se activará si el cliente está registrado en el clúster seleccionado.
- __Número máximo de cuotas__: la audiencia de campaña se activará si el número de cuotas seleccionadas por el cliente es menor o igual al número máximo registrado.
- __Solo en la primera compra__: la audiencia de campaña solo se activará si el cliente está realizando su primera compra.
- __Precio "de" y "a" son los mismos__ o __Precio "de" y "a" son diferentes__: solo se puede seleccionar una opción. Se refiere a los valores de registro del producto.
- __El código postal de entrega debe__: la audiencia de campaña se activará si el código postal cumple con la regla configurada.
- __Afiliados__: La audiencia de campaña se activará si la compra se realiza en una de las tiendas configuradas en los afiliados. __Atención__: si el afiliado no es otra tienda VTEX, esta opción no es válida.
- __utm_source__: seleccione la utm_source deseada o cree una nueva para vincularla con la audiencia de campaña.
- __utm_campaign__: seleccione la utm_campaign deseada o cree una nueva para vincularla con la audiencia de campaña.
- __Tipo de carga__: la audiencia de campaña se activará cuando el tipo de envío coincida con el registrado.
- __Aplique el descuento solo cuando el cliente seleccione uno de los transportistas anteriores__: la audiencia de campaña se activará solo después de que el cliente seleccione la forma de entrega. Mientras no lo haga, la campaña permanecerá inactiva.
- __Medio de pago__: la audiencia de campaña se activará si la forma de pago escogida por el cliente es la misma que la registrada. __Atención__: las audiencias de campañas por formas de pago o número de cuotas no se aplican a los pedidos que se pagan con dos tarjetas o con tarjeta de regalo.
