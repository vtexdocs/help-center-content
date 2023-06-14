---
title: 'El atributo MELI Variación está duplicado. Combinaciones de atributos únicos permitidas.'
id: 7A80EYAOYmEWSlpvWrbXAT
status: PUBLISHED
createdAt: 2023-02-23T13:00:55.730Z
updatedAt: 2023-02-23T13:00:56.222Z
publishedAt: 2023-02-23T13:00:56.222Z
firstPublishedAt: 2023-02-23T13:00:56.222Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: el-atributo-meli-variacion-esta-duplicado-combinaciones-de-atributos-unicos-permitidas
locale: es
kiStatus: Backlog
internalReference: 758331
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Actualmente tenemos un problema con la integración de Mercado Livre, cuando el vendedor mapea un valor dentro del mapeador que permite variación, pero el valor es creado dentro del producto VTEX, lo que sucede es que la integración MELI enviará el valor como variación pero debería ser enviado como información.

El primer SKU será exportado, pero entonces causará que el siguiente SKU sea considerado como duplicado en MELI, ya que para mapper la misma especificación de producto será enviada como variación para MELI.


##

## Simulación



Dentro del menú del puente de productos, verá un error: **Atributo de variación está duplicado. Combinaciones de atributos únicas permitidas.**

Es importante tener en cuenta que este error puede ocurrir por múltiples razones, la variación puede realmente estar duplicada dentro del catálogo, o del mapeador. Así que lo primero es comprobar dentro de la SKU si realmente no está duplicado.



## Workaround



Eliminar el valor dentro de mapeador que está causando la duplicación de la AD.





