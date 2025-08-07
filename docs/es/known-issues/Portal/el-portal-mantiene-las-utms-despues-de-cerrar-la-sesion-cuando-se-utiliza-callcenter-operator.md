---
title: "El portal mantiene las UTM's después de cerrar la sesión cuando se utiliza Callcenter Operator."
id: 4dogeU7iMoTXBWwv5DyR8u
status: PUBLISHED
createdAt: 2022-03-18T19:04:54.519Z
updatedAt: 2024-02-16T20:27:34.500Z
publishedAt: 2024-02-16T20:27:34.500Z
firstPublishedAt: 2022-03-18T19:04:55.239Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: el-portal-mantiene-las-utms-despues-de-cerrar-la-sesion-cuando-se-utiliza-callcenter-operator
locale: es
kiStatus: No Fix
internalReference: 534838
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El portal mantiene las UTM's después de cerrar la sesión cuando se utiliza Callcenter Operator.



## Simulación



- Inicie sesión con un operador de centro de llamadas;
- Con este Operador del Centro de Llamadas, inicie la sesión con la información del cliente;
- Utilizar una utmi_cp en la URL;
- Cerrar la sesión de este cliente/usuario (manteniendo la sesión del operador del centro de llamadas);
- Inicie la sesión con otro cliente/usuario;
- Comprobar que este nuevo usuario tendrá la misma utmi_cp insertada para el último usuario.



## Workaround



- Utilice cartman para eliminar la información de la UTM.

