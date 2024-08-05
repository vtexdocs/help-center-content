---
title: " La función 'Producto visitado' no funciona correctamente"
id: 5AiCVwLkGToEgtLkZVPe5i
status: PUBLISHED
createdAt: 2022-11-25T18:45:15.389Z
updatedAt: 2024-02-16T20:27:41.835Z
publishedAt: 2024-02-16T20:27:41.835Z
firstPublishedAt: 2022-11-25T18:45:15.854Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: la-funcion-producto-visitado-no-funciona-correctamente
locale: es
kiStatus: No Fix
internalReference: 701169
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El activador de producto visitado, que utiliza los datos capturados por Request Capture, está configurado con el filtro "checkout" establecido en "null". Sin embargo, Request Capture necesita pasar por la caja para capturar los datos de usuario y de navegación y rellenarlos en los Datos Maestros. Como resultado, el activador no funciona correctamente porque RC no puede rellenar los datos antes de la salida.


##

## Simulación



1. Configure el activador siguiendo la documentación: https://help.vtex.com/en/tutorial/configuring-product-visited--tutorials_3136
2. Navega hasta la página de un producto
3. Espere al menos 2 horas para que se envíe el correo electrónico



## Workaround


No hay solución

