---
title: 'La limpieza completa del catálogo no desencadena una nueva indexación de la Búsqueda Inteligente'
id: 3QAE7sE58h96m4mw2Xv4qw
status: PUBLISHED
createdAt: 2022-11-25T15:09:58.987Z
updatedAt: 2023-03-13T12:35:14.659Z
publishedAt: 2023-03-13T12:35:14.659Z
firstPublishedAt: 2022-11-25T15:09:59.567Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: catalog-fullcleanup-does-not-trigger-a-new-intelligent-search-indexation
locale: es
kiStatus: Fixed
internalReference: 449763
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al ejecutar una limpieza completa (https://{AccountName}.myvtex.com/admin/Site/fullcleanup.aspx) en el catálogo, la emisora no envía la notificación de actualización al indexador de búsqueda inteligente, y los datos de los productos pueden quedar obsoletos, lo que provoca discrepancias entre el contenido de PDP y PLP.



##

## Simulación


Ejecute una limpieza completa en Catálogo, y los productos eliminados seguirán activos en Búsqueda Inteligente.




## Workaround


VTEX no recomienda borrar productos del Catálogo, una mejor manera de lidiar con este escenario es marcar los productos como Inactivos.

Si es necesaria una limpieza completa, llame al Soporte de VTEX y solicite una indexación forzada en la Búsqueda Inteligente.





