---
title: 'Valor incorrecto para el precioDefinición en el orden de la cadena para un mercado multinivel'
id: 75qEjhgv1tTQNho0MArnJo
status: PUBLISHED
createdAt: 2023-11-27T13:50:18.505Z
updatedAt: 2023-11-27T13:51:42.434Z
publishedAt: 2023-11-27T13:51:42.434Z
firstPublishedAt: 2023-11-27T13:51:42.434Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: valor-incorrecto-para-el-preciodefinicion-en-el-orden-de-la-cadena-para-un-mercado-multinivel
locale: es
kiStatus: Backlog
internalReference: 663203
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La propiedad "priceDefinition" para órdenes en el nivel "cadena" en un mercado multinivel no está siguiendo el "sellingPrice" como se esperaba. En su lugar, está siguiendo la propiedad "precio".


##

## Simulación


Crear un pedido con un descuento aplicado desde la capa de marketplace (nivel 1), en relación con la capa de vendedor (cadena, nivel 2), en una relación multinivel. La capa de cumplimiento (nivel 3) presentará los valores correctamente, pero la "cadena" no.



## Workaround


Evite utilizar la propiedad "priceDefinition" en este tipo de pedidos y haga los cálculos utilizando las propiedades price, quantity, unitMultiplier, y priceTag - para evitar problemas con el "sellingPrice", que no es un valor preciso.





