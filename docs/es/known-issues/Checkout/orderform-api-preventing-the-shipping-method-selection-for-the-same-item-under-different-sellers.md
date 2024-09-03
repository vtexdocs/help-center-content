---
title: 'La API de OrderForm impide la selección del método de envío para el mismo artículo con diferentes vendedores.'
id: 4dEfq7lNqTLF7SFIOaRsc2
status: PUBLISHED
createdAt: 2023-01-27T21:56:04.190Z
updatedAt: 2023-07-05T14:33:51.370Z
publishedAt: 2023-07-05T14:33:51.370Z
firstPublishedAt: 2023-01-27T21:56:04.914Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: la-api-de-orderform-impide-la-seleccion-del-metodo-de-envio-para-el-mismo-articulo-con-diferentes-vendedores
locale: es
kiStatus: Fixed
internalReference: 742139
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Aunque un orderForm soporta que el mismo SKU sea añadido múltiples veces a través de diferentes vendedores, no permite que el método de envío (SLA) sea seleccionado individualmente - donde la logística para un vendedor es completamente independiente de los demás.

A pesar de eso, después de informar a la dirección o elegir un método de envío disponible sólo para una ocurrencia específica de la SKU, las otras ocurrencias estarán bajo un SLA diferente sin que sea un problema. Así que el problema se limita a la solicitud seleccionando el SLA entre los artículos en este escenario o a través de la simulación orderForm.



## Simulación


En un carrito con el mismo artículo añadido más de una vez pero a través de diferentes vendedores, pruebe a seleccionar sus métodos de envío (SLA) a través de la API utilizando diferentes opciones para cada uno. También se puede intentar el mismo escenario a través de la API de simulación, declarando un "selectedSlaId". La API rechazará la acción presentando el mensaje "El mismo artículo no puede tener más de un SLA seleccionado".


##

## Workaround


N/A




