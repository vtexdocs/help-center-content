---
title:  Cómo funciona el flete cuando la entrega es hecha por el marketplace (FOB)
id: EY1l6tYW3IUquwwwcQqwQ
status: PUBLISHED
createdAt: 2017-08-28T23:17:57.225Z
updatedAt: 2021-08-11T17:11:00.299Z
publishedAt: 2021-08-11T17:11:00.299Z
firstPublishedAt: 2017-08-29T20:09:40.790Z
contentType: tutorial
productTeam: Channels
author: authors_4
slug: como-funciona-el-flete-cuando-la-entrega-es-hecha-por-el-marketplace
legacySlug: como-funciona-el-flete-fob-cuando-la-entrega-es-hecha-por-el-marketplace
subcategory: 5m1qqfnmfYKsO0KiOQC8Ky
---

Pedidos realizados vía marketplace que tienen flete tipo FOB (Free on board, Mercado Full Envios, B2W Entrega), donde la definición de tipo de entrega, su cobro y la emisión de etiqueta son todos realizados por el marketplace, no determinan una transportadora al integrarse en VTEX.

Este flujo evita validaciones innecesarias del pedido, simplifica la configuración de la integración y evita la falta de integración por bloqueo en estos detalles. Sin embargo, puede causar algunas dudas e incluso la necesidad de adecuación de la integración con el ERP para los pedidos del marketplace.

## Stock

La regla para elegir el stock que servirá al SKU siempre será de la siguiente manera:

1. Mayor cantidad disponible del SKU.
2. Menor tiempo de ruta entre stock y muelle.
3. Menor precio de ruta entre stock y muelle.

Si hay más de un stock disponible siguiendo estos criterios y prioridades, la elección final será aleatoria.

Si el pedido tiene varias unidades de un SKU, es necesario que alguno de los stocks tenga la cantidad total, o entonces VTEX impedirá el pedido, que informará falta de stock.

## Gestión de Pedidos 

Como la entrega será realizada por el marketplace, el OMS no traerá información del valor del flete, ya que esto quedó acordado entre el marketplace y el comprador del producto, no acarreando cargo a la tienda. La información de plazo que aparece en el pedido no es la que el marketplace informó a VTEX, sino una simulación de flete hecha en el momento de integrar el pedido.  

En el lugar de las identificaciones de transportadora y tipo de entrega se presenta la información `vtex:fob_1111`, donde `1111` corresponderá al ID del stock en el que se reservó el SKU.

## API

Al igual que en la interfaz del OMS, la API trae la información `vtex:fob_1111` para los campos __selectedSla__, __deliveryCompany__ y __courierName__. El tiempo para __shippingEstimate__ será `0bd`.

Es importante que el ERP sea adecuado para recibir los datos en este formato.

![](https://images.ctfassets.net/alneenqid6w5/5jPtBeUPHCUvgMco9FoKuZ/add1ce05e78a216f0aa7074c3ae4d444/slack-imgs.com.png)

## Etiqueta

El pedido se envía en un contrato con la oficina de correos del propio marketplace. En este escenario, ellos emiten la etiqueta para que la tienda la imprima y la use en sus paquetes, sin la necesidad de más procesos con la oficina de correos, faltando solo realizar el envío.

Es posible acceder a la etiqueta directamente por el OMS, debajo de los ítems del pedido. Basta hacer clic en el link y se abrirá una nueva ventana ya con el PDF de la etiqueta.

![Etiqueta de entrega por Correios (BR) - Marketplace](https://images.ctfassets.net/alneenqid6w5/3Xc7eqzjetqNwScoZxkWOK/f715c425b47359c8d8735cde8aac8377/Screen_Shot_2020-03-25_at_11.44.05.png)

En el caso de que se quiera aprovechar la etiqueta dentro del ERP, esta también está disponible en la [API de Pedidos](https://developers.vtex.com/reference/orders#getorder), en el array `trackingHints` que se encuentra en el objecto `shippingData`.
