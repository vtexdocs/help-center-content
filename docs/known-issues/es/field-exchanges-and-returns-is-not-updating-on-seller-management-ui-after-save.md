---
title: 'El campo "Cambios y devoluciones" no se actualiza en la interfaz de usuario de gestión de vendedores después de guardar.'
id: 1z8LrsbGk5B2ejZ1PV9vaB
status: PUBLISHED
createdAt: 2022-11-01T17:47:30.359Z
updatedAt: 2023-10-30T19:28:26.143Z
publishedAt: 2023-10-30T19:28:26.143Z
firstPublishedAt: 2022-11-01T17:47:31.132Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slug: el-campo-cambios-y-devoluciones-no-se-actualiza-en-la-interfaz-de-usuario-de-gestion-de-vendedores-despues-de-guardar
locale: es
kiStatus: Fixed
internalReference: 689886
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Después de guardar el campo "Cambios y devoluciones" en la UI la información se actualiza por primera vez pero si intentamos salir del área de gestión o refrescar la página la información se pierde.

La información que se muestra en la UI es la misma que la del campo "Política de envíos".

Sin embargo, esto parece estar ocurriendo sólo en la interfaz de usuario, a través de la API la información es correcta.


##

## Simulación



1. Introduzca un vendedor en el área de gestión de vendedores;
2. Cambia la información del campo "Cambios y devoluciones" y guarda;
3. 3. Vuelva a introducir el mismo vendedor y compruebe que la información es correcta.



## Workaround


No hay necesidad de solución, la información es correcta en el backend del sistema.





