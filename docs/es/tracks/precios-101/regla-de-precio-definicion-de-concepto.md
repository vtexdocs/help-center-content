---
title: 'Regla de Precio – Definición de Concepto'
id: 2rBirbpB7wLnei4dQ9KGMW
status: PUBLISHED
createdAt: 2019-07-04T13:52:56.900Z
updatedAt: 2020-02-13T15:43:50.011Z
publishedAt: 2020-02-13T15:43:50.011Z
firstPublishedAt: 2019-07-17T19:42:03.230Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: regra-de-preco-definicao-de-conceito
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
---

## Definición 

Como mencionamos anteriormente, todo SKU debe tener un *precio base* registrado. Sin embargo, existe una funcionalidad en el módulo de Precios que posibilita la *modificación de un precio base para determinadas tablas de precios*. Estos modificadores son las __reglas de precio__.

Las reglas de precio permiten que cambie el precio de un SKU para apenas una tabla de precio, __sin alterar el precio base de las demás__. Para esto, es necesario registrar una regla de precio asociada a la tabla deseada.

Por tanto, cuando combinamos esta regla con el precio base de un SKU, tenemos un nuevo valor. Este será el __precio calculado__ de un SKU dentro de una tabla.

<div class="alert alert-info">
El uso de las reglas de precio es <strong>opcional</strong>. Si algún SKU no tiene ningún modificador asociado, su precio para la tabla de precios en cuestión será el precio base registrado. 
</div>

Las reglas de precio funcionan a partir de __cinco condiciones de configuración__: 

- Tabla de precios
- SKUs
- Programación 
- Rango de markup 
- Variación de precio

La *tabla de precios*, los *SKUs*, la *programación* y el *rango de markup* determinan el universo en el que se aplicará la regla de precio. Ya la *variación de precio* es el modificador que va a alterar los precios de los SKUs.

## Ejemplos


Supongamos un escenario en el que desee vender sus SKUs de la __categoría de electrónicos__ en un marketplace externo. Para esto, pretende crear una __regla de precio específica para ese contexto__.

Digamos que uno de los televisores de esta categoría tiene un __precio base de R$1000.00__. Si su estrategia define una __variación de precio de 20%__, este porcentaje se aplicará en el precio base. Por tanto, __el precio de venta en el Marketplace externo será de R$1200.00__.

Para configurar esta regla, el primer paso es decidir en cuál __tabla de precios__ se aplicará. Esta tabla debe estar asociada a la política comercial que envía informaciones al marketplace externo.

Como su estrategia pretende modificar los precios __apenas de la categoría de electrónicos__, es necesario indicar esto en el registro de la regla.

Finalmente, también debe decidir cuál __variación de precio__ se aplicará por esta regla. En nuestro escenario, el modificador es de __20%__. Esta alteración se aplicará al precio de __todos los SKUs de la categoría electrónicos__. 
