---
title: 'Precio Fijo – Definición de Concepto'
id: 3HxF2u5VwidqnUGnFoKdDy
status: PUBLISHED
createdAt: 2019-07-04T13:53:27.780Z
updatedAt: 2021-05-26T17:20:58.165Z
publishedAt: 2021-05-26T17:20:58.165Z
firstPublishedAt: 2019-07-17T19:42:19.813Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: preco-fixo-definicao-de-conceito
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
order: 9
---


## Definiciones 

El __precio fijo__ es un precio que se sobrepone a todas las demás configuraciones de precios existentes en una tabla de precios.

De este modo, el precio fijo se sobrepone al __precio base__, incluso en los casos en que se haya configurado una __regla de precio__.

Esto significa que el precio fijo tiene una prioridad sobre el precio base y la regla de precio definida para una tabla.

> ⚠️ Solo los [precios fijos](/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj) se utilizan en nuestras integraciones nativas con marketplaces. Los otros escenarios previstos en la [arquitectura del sistema de precios](/es/tracks/precios-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx) solo están disponibles para marketplaces VTEX-VTEX.

## Funcionalidades 

El precio fijo cuenta con tres funcionalidades:

- Programación 
- Cantidad mínima de ítems en el carrito
- Precio de lista

La __Programación__ permite que un precio fijo sea válido por un determinado periodo de tiempo. Después de la fecha final de la programación, la configuración anterior de precio vuelve a valer como precio computado.  

Ya la __Cantidad mínima de ítems en el carrito__ determina que un precio fijo se activará cuando el cliente incluya un cierto número de ítems en el carrito. Si elige rellenar el campo de __cantidad mínima__ con el valor __1__, el precio fijo se mostrará en la vitrina como el precio de venta del SKU. Sin embargo, si elige un valor mayor a __1__, el precio fijo se aplicará apenas cuando la cantidad escogida de ítems se agregue al carrito.

Finalmente, tenemos el __Precio de lista__. Este precio funciona como un valor sugerido por el cual un SKU podría venderse. La idea es presentar el precio de lista junto al __precio de venta__, para mostrar al consumidor que el SKU se está vendiendo por un precio __abajo__ del sugerido. Normalmente, el precio de lista es conocido como el __“precio de”__. Ya el precio de venta es denominado __“precio por”__.  

## Programación 

Digamos que tiene una tienda de ropa y quiere hacer una liquidación de una colección de antigua de camisetas. El objetivo es vender el máximo de ítems lo antes posible.

Un posible uso de la programación sería establecer un nuevo precio para sus SKUs durante 48 horas.

De este modo, al final del período, los ítems volverían a su configuración de precio inicial.

## Ítem Mínimo en el Carrito

Ahora, la situación es que usted es dueño de una tienda que vende artículos para mascotas. Digamos que desea crear una acción para fomentar la venta de una nueva marca de alimentos para mascotas.

En este caso, puede establecer un precio fijo para que un ítem se compre en grandes cantidades. De esta manera, los clientes que compran cinco o más paquetes de alimento reciben un descuento en el precio unitario de cada ítem:

- Precio unitario del paquete: $ 100.00;
- Precio unitario del paquete cuando se colocan cinco o más ítems en el carrito: $ 85.00.

## Precio de lista

Vamos a analizar un escenario en el que usted compre sus SKUs al por mayor y que su proveedor le recomiende un valor de $ 100.00 como precio de venta para cada ítem. Sin embargo, puede optar por vender cada SKU por $ 80.00, un precio inferior al sugerido. De este modo, el __precio de lista__ se mostraría en la vitrina como __De: $ 100.00__ y el __precio fijo__ se presentaría como __Por: $ 80.00__.

## Competencia entre Precios Fijos

Es posible definir más de un precio fijo para la misma tabla de precios. __Si existe una competencia de los mismos criterios en la aplicación del precio, la regla general es que el sistema exhiba el precio fijo más bajo para el cliente__.

Si dos precios fijos fueran elegibles para una *misma fecha de programación*, el sistema va a escoger el  __menor precio__ entre los dos precios fijos. De la misma manera, si se pueden aplicar dos precios a *una misma cantidad de ítems en el carrito*, el sistema elegirá como precio de venta el __precio fijo de menor valor__.

### Competencia por el Criterio de Programación 

Digamos que se registren dos precios fijos para el mismo SKU. Además, ambos tienen programaciones diferentes, *pero con algunos horarios en común*. Dado que existe una competencia de precios, el menor valor se considerará como el precio para esta fecha en común.

Por ejemplo: el primer precio fijo es __$ 50.00__ y ​​su programación va de __10h a 16h__. Ya el segundo es __$ 25.00__, solo que está programado de __12h a 20h del mismo día__. En este caso, *entre las 12h y las 16h*, los dos precios fijos compiten entre sí. Por lo tanto, el valor de __$ 25.00__ será el precio de venta del SKU en este horario en común.

![fixed price - example2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/precios-101/precio-fijo-definicion-de-concepto_1.svg)

### Competencia por el Criterio de Ítems Mínimos en el Carrito 

En el caso de dos precios fijos registrados con intersección en el criterio de __ ítems mínimos en el carrito__, el precio de venta será el precio más bajo.

Imagine que registramos un precio fijo de $ 200.00 para __dos o más ítems en el carrito__ y otro precio fijo de $ 100.00 para __cinco o más ítems__. Podemos ver que existe una competencia de precios, ya que hay una intersección entre las reglas de ítem mínimo en el carrito.

¿Cuál sería el precio aplicado para 5 o más ítems? El precio de venta será de $ 100.00, visto que el sistema prioriza el valor más bajo.

![fixed price - example1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/m%C3%B3dulos-vtex-primeros-pasos/precios-101/precio-fijo-definicion-de-concepto_2.svg)

## Ejemplos

Supongamos que tiene una tienda que vende electrodomésticos. Usted creó __tres tablas de precio para políticas comerciales__ y __dos tablas para otros contextos__ en el módulo de precios.

Ha registrado un __precio base__ de $ 2000.00 para el SKU de un refrigerador. De esta manera, *en este momento*, todas sus tablas de precio tienen un __precio de venta__ de $ 2000.00 para este SKU.

Sin embargo, usted desea *practicar un precio más alto* para un determinado canal de ventas. Así, puede registrar un __precio fijo__ de $ 2500.00 en la tabla de la política comercial referente a este canal de ventas. Con esto, el __precio de venta__ para este canal de ventas será de $ 2500.00, pues *el precio fijo se sobrepone al precio base en una tabla de precios*.
