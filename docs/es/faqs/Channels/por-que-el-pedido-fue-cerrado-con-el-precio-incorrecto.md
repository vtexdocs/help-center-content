---
title: '¿Por qué el pedido fue cerrado con el precio incorrecto?'
id: frequentlyAskedQuestions_708
status: PUBLISHED
createdAt: 2017-04-27T22:28:49.849Z
updatedAt: 2021-03-23T20:08:37.325Z
publishedAt: 2021-03-23T20:08:37.325Z
firstPublishedAt: 2017-04-27T23:02:33.393Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-was-the-order-closed-with-the-wrong-price
locale: es
legacySlug: por-que-el-pedido-fue-cerrado-con-el-precio-incorrecto
---

En la sección de Integraciones, dentro de [aba de Pedidos](https://help.vtex.com/es/tutorial/verificando-integracao-no-bridge?locale=pt), se informan el status de los pedidos cerrados por marketplaces certificados. Algunas veces, el motivo para que un pedido no se haya integrado es porque el valor del pedido en el marketplace no es el mismo valor esperado por VTEX. 

`El pago total (311,77) difiere del valor pretendido por la tienda (313,61)`

Cuando el pedido se integra, dentro de sus detalles en la Gestión de Pedidos se muestra el siguiente mensaje:

`El marketplace XXX decidió vender este pedido con un valor menor que el practicado por su tienda. Vea el descuento.`

Dentro de los detalles del pedido, nosotros incluso evidenciamos este punto en un card escrito "valor asumido por el afiliado". Pero tanto este card como el "DISCOUNT@SHIPPINGMARKETPLACE" en el JSON del pedido son __meramente informativos__. Pues, en realidad, esto no es exactamente un descuento. Lo que usted debe considerar, de hecho, en su ERP es solo el valor total del pedido.

O el valor del pedido puede estar influenciado por la **Tasa de Divergencia de Precio**, que es la tasa de aceptación de la diferencia de valor de un pedido. Cualquier pedido que tenga una diferencia entre el precio de venta en el marketplace y el precio determinado por el seller será comparado con ese valor. Si la divergencia, en porcentual, es menor que el valor definido en ese campo, el pedido se integrará normalmente. En caso contrario, el pedido no se integrará y usted podrá verlo en la pestaña de pedidos [dentro de la sección de integraciones en el Admin](https://help.vtex.com/es/tutorial/checking-integrations-in-bridge).

Este artículo tiene como objetivo aclarar el motivo de la ocurrencia de ese escenario. Existen tres posibilidades:

## Precio del producto asumido por el marketplace
Este escenario ocurre cuando hay algún problema al enviar el precio en VTEX para el marketplace. Esto puede ocurrir debido a algún error en la integración, que será reportado en el [painel de integrações](/pt/tutorial/verificando-integracao-no-bridge/#preco), o porque el marketplace tuvo algún problema para calcular el nuevo precio (incluso después de haber recibido con éxito la actualización de VTEX).

## Coste de envío calculado en el marketplace

En las configuraciones de la logística para las ventas por el Marketplace, es posible realizar la [configuración de flete](/es/tutorial/como-configurar-logistica-para-politica-comercial) por el partner. Es decir, el coste de envío no es calculado en VTEX. Sin embargo, este escenario puede causar diferencia de precio en caso de que la promoción de envío gratis no haya sido configurada. 

Además, es posible que la consulta al valor del coste de envío no fue realizada por el Marketplace u [ocurrió algún problema en el proceso](/es/faq/por-que-el-pedido-fue-cerrado-sin-stock) y por eso, se asumió el valor del coste de envío del marketplace. 

De esta manera, la consulta del Marketplace puede no ser exitosa – pudiendo haber fallado desde el propio Marketplace o VTEX –  y para no permitir la pérdida del pedido, el partner utiliza valores internos de contingencia. Esto puede conllevar a diferencias en los valores registrados originalmente en VTEX, implicando un error.

Además, algunos marketplaces consultan el coste de envío en VTEX al momento de finalizar la compra y otros no. Los marketplaces que no realizan esta consulta tienen más posibilidades de aparecer en este escenario.

Los marketplaces que consultan el coste de envío en VTEX al momento de finalizar la compra son:

- Walmart
- Via Varejo
- B2W
- Netshoes
- Carrefour

Los marketplaces que no consultan el coste de envío en VTEX al momento de finalizar la compra son:

- Buscapé
- Mercado Livre
- Magazine Luiza
- Amazon

## Valor del SKU alterado antes de la integración del pedido

Esta opción es más rara que las anteriores, y se produce cuando se cierra el pedido e, inmediatamente después, se altera el precio del SKU. Como la integración del pedido finalizado toma algunos minutos, cuando se realice la integración, el precio del SKU será otro y el cálculo en VTEX no dará el mismo resultado del cálculo del marketplace y el pedido quedará en la fila de error del Integraciones.

## Cómo resolverlo

En todos los casos, se podrá integrar el pedido [reprocesándolo en el bridge](/es/tutorial/como-verificar-la-integracion-en-bridge). Esto significará que VTEX acepta el pedido con un valor diferente al esperado.

También se recomienda que se configure la tasa de divergencia de precio, que es el porcentaje de diferencia de precio aceptable para la integración. Esta configuración se realiza en el bridge, cuando se configura su marketplace.

