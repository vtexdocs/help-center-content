---
title: 'Lista de pedidos'
id: tutorials_200
status: ARCHIVED
createdAt: 2017-04-27T22:13:59.387Z
updatedAt: 2023-03-23T15:40:06.912Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:02:48.509Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: orders-list
locale: es
legacySlug: listado-de-pedidos
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

Es a través de la lista de pedidos de Gestión de Pedidos que el administrador de la tienda puede acompañar las compras concretadas en su tienda. La lista está disponible en la primera pantalla del módulo de __Gestión de pedidos__.

![todosospedidos.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

En la vista predeterminada se muestran todos los pedidos de la tienda desde el más reciente. Usted puede cambiar el orden haciendo clic en el nombre de las columnas, así como buscar o filtrar los pedidos por datos específicos, y también exportar estos datos.

- [Cómo buscar pedidos](/es/tutorial/como-buscar-el-pedido/)
- [Cómo filtrar pedidos](/es/tutorial/como-filtrar-pedidos/)

Al hacer clic en cualquier pedido, el usuario es dirigido a la página de detalles del pedido.

- [Información dentro del pedido](/es/tutorial/informaciones-dentro-del-pedido)

Siempre que el módulo de Gestión de Pedidos esté abierto y se hayan realizado nuevos pedidos, se mostrará una indicación, permitiendo que se haga clic para actualizar la lista de pedidos.

![novopedido.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

A continuación, se muestran más detalles sobre las columnas de la lista:

## Nº (Secuencial)

No es nada más que el número de pedido (mostrado al cliente), el sufijo y el código secuencial de la transacción (para uso interno).

![nsequecial.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

### Número del pedido

El número de pedido es el que recibe el cliente en la pantalla de confirmación de compra y en los e-mails transaccionales. Es este el número que debe ser utilizado en las comunicaciones entre tienda y comprador.

Este número puede tener dos formatos:

- 12 dígitos numéricos.
- Orden alfanumérico. Por estándar, generalmente sigue la letra "v" (estándar VTEX), seguida de 6 dígitos numéricos y hasta 4 letras (generalmente consonantes derivadas del nombre de la tienda). Pero la letra puede elegirse según la preferencia de la tienda.

Independientemente del formato, los números siguen un estándar creciente, pero la diferencia entre un número y otro (incremento) es aleatoria. Esto garantiza que nadie fuera de la tienda pueda estimar cuántos pedidos se han hecho en un período determinado.

*El administrador de la tienda tiene la opción de cambiar este valor. Para esto, póngase en contacto con el soporte VTEX. Sin embargo, el número es único por AccountName. No es posible tener una secuencia para cada dominio.*

### Sufijo

El sufijo siempre está presente luego del número de pedido, separado por guion. Tiene la función de discernir cuando el pedido se ha abierto a más de un seller a través de un mismo marketplace. Esto sucede cuando un mismo pedido en el marketplace tiene productos de diferentes sellers, de forma que cada seller recibirá un pedido con sufijo diferente.

Por ejemplo: en el marketplace el pedido v511223vtx está compuesto por los productos A, B y C. Cada producto pertenece a un seller. El seller del producto A recibirá el número de pedido como v511223vtx-01, el seller del producto B recibirá el número v511223vtx-02 y el del producto C recibirá el número v511223vtx-03.

### Código secuencial

El código secuencial es una identificación interna de la transacción, y se utiliza para la comunicación entre módulos y otros recursos de la plataforma.

El primer pedido de la tienda normalmente comienza en 500001, y su incremento es aleatorio, así como el número de pedido. Cuando el número de pedido sigue el segundo estándar (iniciado en "v"), los dígitos numéricos son los mismos entre los campos.

## Fecha

Es la fecha y hora en que el pedido fue realizado por el cliente.

## Cliente

Trae siempre el nombre y el apellido del cliente que efectuó la compra, aunque el pedido haya sido hecho por persona jurídica. También muestra una vista previa del último e-mail que pasó en el [Conversation Tracker](/es/tutorial/conversation-tracker) de ese pedido.

## Productos

Expone cuántos productos diferentes existen en el pedido (sin considerar la cantidad comprada de cada ítem). Al pasar el ratón es posible ver cuáles fueron los productos comprados.

![oms produtos do pedido](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

## Valor

Valor total del pedido, ya considerando descuentos, impuestos y flete.

## Origen

Distingue el pedido en dos posibles orígenes:

- **Marketplace**: si el pedido ha sido hecho en el sitio de su tienda, siempre aparecerá como marketplace, pues fue a través de donde el cliente visualizó y compró el producto de hecho.
- **Fulfillment**: significa que el producto es suyo, pero la compra fue realizada por el sitio de otra tienda que está exponiendo y vendiendo sus productos.

## Pago

Representación de la forma de pago que se utilizó en la compra.

## Estado 

Identifica en qué etapa del flujo se encuentra el pedido.

