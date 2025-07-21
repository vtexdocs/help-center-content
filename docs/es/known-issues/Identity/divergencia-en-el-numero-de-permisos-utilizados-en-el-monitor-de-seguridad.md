---
title: "Divergencia en el número de permisos utilizados en el Monitor de Seguridad"
id: 21Ugmdg5V0529OWGgt8HuU
status: PUBLISHED
createdAt: 2025-05-07T20:02:19.848Z
updatedAt: 2025-05-07T20:02:20.531Z
publishedAt: 2025-05-07T20:02:20.531Z
firstPublishedAt: 2025-05-07T20:02:20.531Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slugEN: divergencia-en-el-numero-de-permisos-utilizados-en-el-monitor-de-seguridad
locale: es
kiStatus: Backlog
internalReference: 1222306
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El Security Monitor muestra un número divergente de permisos utilizados en el _encuentro de Permisos Excesivos_ para App Keys compartidas entre cuentas y subcuentas (arquitectura multicuenta).


##

## Simulación


Condiciones para reproducir el problema:

- Cuenta con arquitectura multicuenta;
- Existe App Key compartida entre la cuenta y su(s) subcuenta(s);
- Cuenta que utiliza el VTEX Shield y tiene el Security Monitor;
- Esta App Key compartida está siendo reportada como un hallazgo de tipo Permiso Excesivo en el Security Monitor.

Pasos a seguir:
En las cuentas con la App Key compartida

- Abra el Security Monitor;
- En cualquiera de las pestañas (Open, Snoozed y Closed) inserte la App Key en la barra de búsqueda;
- Pulsa sobre el resultado con el tipo _Excessive Permissions_;
- Verá en el modal abierto que el número de _permisos utilizados_ es divergente entre las cuentas.

Como se trata de una App Key compartida, debería mostrar el número de _permisos utilizados_ en todas las cuentas/subcuentas, no sólo el número relativo a la cuenta donde estamos mirando.



## Workaround


No hay ninguna solución disponible.





