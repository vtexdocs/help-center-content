---
title: 'El informe de exportación de pedidos no funciona correctamente debido al doble espacio en el nombre de la promoción.'
id: 3dVPZEs544WyPDBNzTesWx
status: PUBLISHED
createdAt: 2023-04-06T20:22:47.489Z
updatedAt: 2023-04-06T20:22:48.141Z
publishedAt: 2023-04-06T20:22:48.141Z
firstPublishedAt: 2023-04-06T20:22:48.141Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-informe-de-exportacion-de-pedidos-no-funciona-correctamente-debido-al-doble-espacio-en-el-nombre-de-la-promocion
kiStatus: Backlog
internalReference: 786216
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Para la promoción de pedidos, no es correcto el uso de doble espacio o carácter especial en los nombres, esto puede romper el filtro o la falta de algunos pedidos en el informe de exportación de pedidos.
Nombre en el array "ratesAndBenefitsData".


##

## Simulación


Crear un pedido usando una promoción con un nombre incorrecto, por ejemplo con doble espacio en el nombre.
Después de esto, vaya a la gestión de pedidos y ejecute un filtro con esta promoción como condición.
En ese momento se puede ver el pedido en la lista de pedidos filtrado, pero al elegir el informe de exportación no aparecerá el pedido con la promoción con doble espacio.



## Workaround


No hay ninguna solución disponible.





