---
title: 'Los compradores no pueden iniciar sesión si hay una configuración incorrecta en las organizaciones/centros de costes'
id: r5p7K15FkbZUDSOUQ6hGz
status: PUBLISHED
createdAt: 2023-11-30T22:21:39.852Z
updatedAt: 2024-10-18T18:14:54.658Z
publishedAt: 2024-10-18T18:14:54.658Z
firstPublishedAt: 2023-11-30T22:21:40.638Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: buyers-cant-login-if-there-is-misconfiguration-in-organizationscost-centers
locale: es
kiStatus: Backlog
internalReference: 945609
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un usuario tiene la primera organización asignada es inválida con el id de centro de coste incorrecto el login falla sin ningún mensaje.

Aparecerá el mensaje `"App storefront-permissions failed, resulting in an error building the session"` en la respuesta de la sesión.



## Simulación



- Cree una organización con un identificador de centro de costes incorrecto;
- Inicie sesión en el sitio.



## Workaround


Corrija el identificador del centro de costes asociado a la organización o elimine la organización.



