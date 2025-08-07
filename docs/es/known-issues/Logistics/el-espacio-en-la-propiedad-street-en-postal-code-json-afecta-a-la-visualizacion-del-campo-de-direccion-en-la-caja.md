---
title: "El espacio en la propiedad street en Postal Code JSON afecta a la visualización del campo de dirección en la caja"
id: Rr3wSsdC5hxMS8ttK4kIj
status: PUBLISHED
createdAt: 2023-08-01T22:30:35.290Z
updatedAt: 2024-07-01T18:49:10.379Z
publishedAt: 2024-07-01T18:49:10.379Z
firstPublishedAt: 2023-08-01T22:30:36.187Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: el-espacio-en-la-propiedad-street-en-postal-code-json-afecta-a-la-visualizacion-del-campo-de-direccion-en-la-caja
locale: es
kiStatus: No Fix
internalReference: 872935
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al activar el uso de la API de código postal en el formulario de dirección para países que no están en el modelo BR (country, state, city, neighborhood, street), estos países que no tienen todos estos campos rellenados en la API y necesitan poder introducir el resto de datos de dirección en el formulario de dirección en el checkout, el campo street del bloque de dirección no estará disponible si la propiedad street del JSON está con espacio, ya que se entenderá como rellenado y válido, lo que no permite proceder con el pedido.



##

## Simulación


Crear un carrito en una tienda EMEA que utilice código postal y formulario de dirección y en la base de código postal el campo calle esté con espacio " " .
El campo dirección no estará disponible para ser rellenado.



## Workaround


No existe





