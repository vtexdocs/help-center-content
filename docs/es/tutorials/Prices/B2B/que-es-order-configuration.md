---
title: 'Qué es Order Configuration'
id: 2t6UQoFrFSSGW8CGEbA0r5
status: PUBLISHED
createdAt: 2020-08-20T16:17:38.285Z
updatedAt: 2020-09-04T16:29:27.110Z
publishedAt: 2020-09-04T16:29:27.110Z
firstPublishedAt: 2020-09-04T16:23:11.568Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: what-is-order-configuration
locale: es
legacySlug: que-es-order-configuration
subcategoryId: 1GujN7Pa7NESCz0sB8srX4
---

El escenario B2B exige diferentes configuraciones del B2C. En este contexto, los pedidos se orientan a diversos fines, como la reventa y el consumo propio. Por eso, es ideal tener precios diferenciados para cada caso de compra.

Order Configuration es la funcionalidad que proporciona una experiencia más personalizable para la tienda B2B. Se encarga de personalizar los precios para cada circunstancia en la que se facturará el pedido. Usted puede definir cualquier criterio para determinar los perfiles de consumo dentro de la tienda.

Si aún no sabe qué criterios configurar, le recomendamos que use el predeterminado:

- __Tipo de pedido:__ cuál es el tipo de consumo del pedido.
- __Estado:__ en el caso de Brasil, los estados tienen diferentes impuestos para los productos. Esto permite la aplicación diferenciada de las tablas de precios para cada estado.

### ¿Cómo funciona?

Para instalar la aplicación de Order Configuration en su Admin, acceda a [nuestra documentación de VTEX IO](https://vtex.io/docs/components/content-blocks/vtex.order-configuration/readme/).

Una vez instalada, la configuración de uso de Order Configuration se establece en la [API Price Simulations](https://developers.vtex.com/reference/price-simulations-api-overview).

Por API, usted debe asociar una [tabla de precios](/es/tracks/prices-101--6f8pwCns3PJHqMvQSugNfP/1wAm5m3IUfIj6maBdaRJt8) con cada escenario, creando una correlación entre ambos. De esta manera, cuando el usuario configure sus condiciones de compra, recibirá los precios que se refieren a esa regla.

Si el usuario configura un escenario que no tiene asociada ninguna tabla de precios, se utilizará una tabla de precios predeterminada.
<div class = "alert alert-info">
  <p>Es importante tener en cuenta que el usuario necesita estar conectado para utilizar Order Configuration y poder ver los diferentes precios basados en su configuración</p>
</div>

