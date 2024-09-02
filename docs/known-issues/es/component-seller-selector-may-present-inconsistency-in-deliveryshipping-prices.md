---
title: 'El selector de vendedores de componentes puede presentar incoherencias en los precios de entrega/envío'
id: 2agLvjXgT76ngdu3YsA6uh
status: PUBLISHED
createdAt: 2022-09-14T22:26:22.177Z
updatedAt: 2024-02-16T20:28:08.976Z
publishedAt: 2024-02-16T20:28:08.976Z
firstPublishedAt: 2022-09-14T22:26:22.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: el-selector-de-vendedores-de-componentes-puede-presentar-incoherencias-en-los-precios-de-entregaenvio
locale: es
kiStatus: No Fix
internalReference: 658452
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El componente Selector de Vendedor presenta incoherencias en los precios de entrega/envío en función del importe del pedido.

Ejemplo:
Promoción regular:
Cuando el cliente realiza un pedido por encima del valor X, el valor del envío será gratuito.

Partiendo de un escenario con la configuración anterior, al realizar una simulación de envío utilizando el Selector de Vendedor, el componente utilizará una consulta de envío GraphQL, equivalente a una petición de la API de Simulación, sin embargo, para cada vendedor que el producto esté disponible, en función del código postal del cliente, la consulta recibirá un artículo como parámetro, configurando así un "carrito con múltiples artículos", por lo tanto, en función del valor del pedido, superando el valor límite de la promoción y aplicando el envío gratuito.



## Simulación


Basado en el ejemplo anterior:
Cree una promoción en la que el tipo y el importe del descuento sea "Envío gratuito";
Pruebe el componente Selector de Vendedor en una PDP con un producto que esté relacionado con la promoción anterior y disponible en varios vendedores diferentes.



## Workaround


N/A

