---
title: 'Repetidas actualizaciones de UTM no se guardan en el cookie'
id: 7CVw4A7scMoKag4UsScSkM
status: PUBLISHED
createdAt: 2018-06-28T22:14:17.988Z
updatedAt: 2022-12-22T20:45:23.945Z
publishedAt: 2022-12-22T20:45:23.945Z
firstPublishedAt: 2018-06-28T22:16:35.648Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: repeated-utm-updates-are-not-saved-in-the-cookie
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al actualizar más de dos veces el valor de la misma UTM, este valor no se guarda en el cookie, no siendo relevante para la compra.

## Simulación

1. Acceda a un ambiente con utm_source=1. El cookie IPS se actualizará a parceiro=1.
2. Después, acceda al ambiente con utm_source=2. El cookie se actualizará a parceiro=2.
3. Entonces, si usted hace login con utm_source=3, el cookie permanecerá siendo parceiro=2, pero con validez actualizada.

## Workaround

No hay solución de contorno actualmente para este escenario.


