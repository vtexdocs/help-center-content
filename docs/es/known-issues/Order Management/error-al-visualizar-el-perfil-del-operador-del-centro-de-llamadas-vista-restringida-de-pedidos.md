---
title: 'Error al visualizar el perfil del operador del centro de llamadas (vista restringida de pedidos)'
id: 7aKQPtGvzYBaRksiuBa4YJ
status: PUBLISHED
createdAt: 2024-11-05T16:34:35.960Z
updatedAt: 2024-11-05T16:34:37.230Z
publishedAt: 2024-11-05T16:34:37.230Z
firstPublishedAt: 2024-11-05T16:34:37.230Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-when-viewing-the-call-center-operator-profile-restricted-orders-view
locale: es
kiStatus: Backlog
internalReference: 1129938
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Para limitar el acceso de un usuario de televenta a los pedidos creados por el mismo, es necesario dotar al usuario del siguiente perfil "`Operadora de call center (vista restringida de pedidos)`" Sin embargo, al acceder a la pantalla de perfiles observamos que el recurso asociado "`Mostrar sólo pedidos creados por el usuario (vía call center)`" no está seleccionado, lo que da la impresión de que el perfil no cumple con las expectativas, pero al validarlo accediendo al admin con un usuario con este perfil vemos que el comportamiento es correcto, restringiendo el acceso del usuario a los pedidos creados por el mismo.


##

## Simulación



Acceder a la pantalla de Nuevo Rol

Busque `Call center operator (restricted orders view)`_ _

Cuando acceda a los detalles del perfil, verá que la opción "`Mostrar sólo los pedidos creados por el usuario (a través del call center)`" no está marcada;

Asocie un usuario a este perfil;

Ahora, cuando acceda a OMS con el usuario que ha asociado al perfil en el paso anterior, verá que su acceso está limitado a los pedidos que él mismo ha creado, exactamente como se esperaba, aunque en la interfaz de usuario del gestor de licencias esta opción no se muestre correctamente.



## Workaround


No hay solución para este caso, pero el impacto es sólo visual, ya que la funcionalidad sigue siendo correcta.






