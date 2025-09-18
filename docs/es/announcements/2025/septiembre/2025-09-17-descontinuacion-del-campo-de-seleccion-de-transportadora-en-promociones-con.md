---
title: 'Descontinuación del campo de selección de transportadora en promociones con método de envío'
id: 2jA6SUpunQlVwHoru1OnCZ
status: PUBLISHED
createdAt: 2025-09-17T10:41:12.993Z
updatedAt: 2025-09-17T10:53:14.410Z
publishedAt: 2025-09-17T10:53:14.410Z
contentType: updates
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: 2025-09-17-carrier-selection-field-will-be-discontinued-in-promotions-with-shipping
locale: es
legacySlug: descontinuacion-del-campo-de-seleccion-de-transportadora-en-promociones-con
announcementImageID: 'undefined'
announcementSynopsisES: 'Campo de transportadora desactivado en promociones con método de envío a partir de julio 2025.'
---

El equipo de desarrollo de VTEX desactivó y descontinuó el campo `isSlaSelected` para facilitar la configuración de métodos de envío. Además, la descontinuación de esta configuración manual ayuda a garantizar un comportamiento predecible.

## ¿Qué cambió?
Antes, las promociones basadas en métodos de envío se podían controlar manualmente al marcar o desmarcar el campo de selección de transportadora. Ahora este comportamiento se determina automáticamente con base en el beneficio configurado. El objetivo del cambio es estandarizar el uso del campo y evitar incoherencias en la experiencia del cliente en el checkout.

## ¿Qué se necesita hacer?
Desde el 23 de julio de 2025, el sistema configura este campo automáticamente según el tipo de beneficio de la promoción.

Las promociones activas no requieren ninguna acción. Las promociones que ya tenían el campo configurado se mantendrán igual hasta que se vuelvan a guardar. En ese momento el sistema empezará a controlar el valor. Por otro lado, la configuración manual ya no está disponible en nuevas promociones.

