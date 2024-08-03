---
title: 'El informe de exportación de pedidos no funciona correctamente debido al doble espacio en el nombre de la promoción.'
id: 3dVPZEs544WyPDBNzTesWx
status: PUBLISHED
createdAt: 2023-04-06T20:22:47.489Z
updatedAt: 2024-06-28T17:44:15.662Z
publishedAt: 2024-06-28T17:44:15.662Z
firstPublishedAt: 2023-04-06T20:22:48.141Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-informe-de-exportacion-de-pedidos-no-funciona-correctamente-debido-al-doble-espacio-en-el-nombre-de-la-promocion
locale: es
kiStatus: Fixed
internalReference: 786216
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El sistema de reporte de pedidos actualmente no puede construir un archivo a partir de filtros de promoción que contengan doble espacio en sus nombres, al intentar construir el reporte el sistema genera un error y no se realiza la exportación, dando como resultado el mensaje "_Exportación completada. Se enviaron 0 pedidos a su correo electrónico"_.


##

## Simulación



Crear pedido utilizando alguna promoción cuyo nombre contenga espacios dobles;

Después de eso, vaya a la gestión de pedidos y ejecute un filtro con esta promoción como condición.

En este punto, la interfaz de usuario de OMS mostrará normalmente una lista de pedidos con la condición elegida, pero al seleccionar exportar pedidos la interfaz de usuario devolverá el siguiente mensaje "_Exportación completada. Se han enviado 0 pedidos a su correo electrónico_".



## Workaround


Filtre los pedidos en la UI por otro parámetro, por ejemplo, fecha, forma de pago, etc., luego exporte los pedidos y fíltrelos por promoción directamente en el archivo Excel generado por el sistema.




