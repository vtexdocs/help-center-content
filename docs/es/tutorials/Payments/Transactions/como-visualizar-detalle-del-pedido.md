---
title: 'Visualizar detalles del pedido en Pedidos'
id: tutorials_452
status: PUBLISHED
createdAt: 2017-04-27T22:04:24.036Z
updatedAt: 2023-03-30T14:56:10.230Z
publishedAt: 2023-03-30T14:56:10.230Z
firstPublishedAt: 2017-04-27T23:03:26.583Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-view-the-orders-details
legacySlug: como-visualizar-detalle-del-pedido
locale: es
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

El objetivo de este artículo es indicar el camino para ver y analizar una transacción en el módulo **Pedidos**.

Pedidos muestra toda la ruta recorrida por una transacción en su tienda. Con ello, en las interacciones, se exhiben las aprobaciones, las cancelaciones, el retorno del antifraude, etc. Es decir, todos los retornos de los sistemas de pago y antifraude están registrados en el detalle del pedido.

Para acceder a esta información, siga estos pasos.

1. En el Admin VTEX, accede a **Pedidos > Transacciones**, o escribe **Transacciones** en la barra de búsqueda en la parte superior de la página.
2. Realice una búsqueda o haga clic en la transacción deseada.

Al entrar en la transacción, usted encuentra dos cajas que contienen las principales informaciones referentes al pago del pedido. Esta información se actualiza a medida que la transacción avanza en el flujo de pago del Pagos.

En el lado derecho hay un cuadro que contiene el valor total del pedido, los datos del cliente, el ID del pedido y el número de identificación del antifraude (si existe en la operación).

El ID se refiere a la transacción en el Pagos de la plataforma VTEX, y es incluso parte de la URL.

![pci](https://images.contentful.com/alneenqid6w5/65oy7tCoAoCMgGIi4CYau6/69e8caa34812349a09014157d0d27e33/pci.png)

Por encima de esta caja, hay un enlace al pedido en el módulo **Pedidos**.

En el cuadro de la izquierda se concentran las informaciones relacionadas con el medio de pago.

Para tansaciones con tarjeta de crédito, cada pago (pueden ser dos tarjetas) tiene un ID generado por VTEX. El adquirente también crea una, llamada Transaction ID (TID). La TID es específica para cada tarjeta, es decir, si un pedido se paga con dos tarjetas, habrá dos transacciones y luego dos TIDs.

<div class="alert alert-warning">
En transacciones que no tienen TID, se puede interpretar que el adquirente no procesó el pago, es decir, que no tiene TID. Ocasionalmente esto puede generar un error, y una forma rápida de identificarlo es comprobar si hay una TID.
</div>

La parte más importante de esta pantalla es el registro de interacciones de la transacción. Aquí se registra toda la comunicación de VTEX con los afiliados registrados - antifraude, gateways y adquirentes -, incluyendo mensajes de éxito y error, con sus respectivos códigos.

A continuación se muestran ejemplos de cómo ver los escenarios más comunes que requieren análisis en el Pagos.

## Ejemplos
*Cada caja es el log que contiene la respuesta de la iteración hecha entre VTEX y el sistema asociado. En la parte superior de la caja aparece el nombre del sistema que generó el mensaje.*

### Evento de aprobación

![](https://images.contentful.com/alneenqid6w5/2P90PVqJl6qOWGkc6icoss/fba44bb1bd12c7e42d1658d91d6edd73/2.jpg)

En este ejemplo, vemos la aprobación de un pago. Es decir, vemos que la operadora autorizó el cierre de la compra con estos datos de pago.

### Evento de aprobación de antifraude

![](https://images.contentful.com/alneenqid6w5/2kCKR8mx3KUGW60cSs0wmo/d4cb6c1271069fd4f85e8ccb0813ef27/3.jpg)

En este ejemplo, vemos el retorno del antifraude recibiendo la transacción y posteriormente el retorno con el análisis de riesgo realizado, aprobando la misma. En casos de reprobación, el registro mostrará la información `RiskRejected`.

### Evento de factura

![](https://images.contentful.com/alneenqid6w5/5v6fzCwSCkeqO8g24kSkqS/5e8d39795949ce428153a0e18bcdf558/4.jpg)

En este ejemplo, la operadora regresa con el evento de liquidación del valor, o sea, informa que realizó la factura del pedido.

### Error de procesamiento

El ejemplo siguiente muestra una transacción de tarjeta de crédito que generó un error al procesar el adquirente Redecard. Los afiliados suelen devolver un código (`ConnectorCode`) junto a un mensaje. Para encontrar información detallada del error, se recomienda consultar la documentación del adquirente. A través de una búsqueda rápida en Google, usted puede encontrar la lista de códigos y mensajes de cada afiliado.

![2017-01-26 20_23_37-634883 _ VTEX PCI Gateway](https://images.contentful.com/alneenqid6w5/4CR2xqOZMkEEKoq0Q4008W/0088088b1a2167314ee31ab1078435b6/2017-01-26-20_23_37-634883-_-VTEX-PCI-Gateway.png)

## Liquidación automática programada

La liquidación automática es una feature que programa la liquidación aunque la factura no se ha emitido. Por lo tanto, es una garantía de la liquidación del valor, incluso si no hubo la factura del pedido.

Si se cancela el pedido, la anulación se producirá normalmente.

Vea abajo la fecha de la programación de la liquidación automática:

![](https://images.contentful.com/alneenqid6w5/3cUrT8OgtiiiKGiaySoO4Q/5abbea075f47b3c3334954a3fa53f006/5.jpg)

## TID de pago

La TID de pago es el código que identifica la compra. Este código no se genera en VTEX, sino es enviado por la operadora en el momento de la autorización. Es decir, VTEX envía los datos del pedido y el gateway o la operadora devuelve la TID.

Esta información es importante siempre que sea necesario confirmar algo con la operadora, ya que será necesario informar este código para identificar la transacción.

Para encontrar este código en la transacción, vea la siguiente ilustración.

![](https://images.contentful.com/alneenqid6w5/4UGw2BvqvewicmA4sYq64a/488e64d672529ed30b56e364efd4e89f/6.jpg)

## IP del cliente

El IP del cliente se recolecta en el momento de la compra y puede ser visto en el campo superior de la pantalla de la transacción, conforme imagen abajo.

![](https://images.contentful.com/alneenqid6w5/3luCOyDKZ2a22y2q26S6E/1b77e158a83d51f43a4e9bb74981a512/7.jpg)

## ID del antifraude

Es el ID de la transacción para el antifraude. Para las búsquedas en el antifraude, se debe consultar este valor en el PCI Gateway.

![IDAntifraude](https://images.contentful.com/alneenqid6w5/6KrRXQocKWy6kQosaOgiyU/77e8ae4f52c586280a17a08373675301/IDAntifraude-1.gif)

## Más informaciones

Además de la información anterior, hay otros datos extraídos de las interacciones con la operadora, el gateway y/o con el antifraude que se identifican y se ofrecen de forma más clara en el cuadro **+ información** justo debajo de la parte superior de la información. En la siguiente imagen se muestra cómo:

![](https://images.contentful.com/alneenqid6w5/2fHaJACApyyUsIGueGkckU/edade2f60187dc9aed87942e8030d938/8.jpg)
