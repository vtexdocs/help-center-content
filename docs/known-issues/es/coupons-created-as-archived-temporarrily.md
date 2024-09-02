---
title: 'Cupones creados como archivados temporalmente'
id: 783FJICQzATVkJ2uPgk9Mq
status: PUBLISHED
createdAt: 2023-09-01T13:34:21.842Z
updatedAt: 2023-09-01T13:34:22.607Z
publishedAt: 2023-09-01T13:34:22.607Z
firstPublishedAt: 2023-09-01T13:34:22.607Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: cupones-creados-como-archivados-temporalmente
locale: es
kiStatus: Backlog
internalReference: 892041
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando se crea un cupón, la UI/API muestra que está archivado durante unos minutos (~2) cuando en realidad (en la base de datos de precios), el cupón está activo.

Después de unos minutos, el cupón muestra sus datos correctos.

Es importante señalar que esto no afecta a la información del cupón "real", incluso cuando se muestra incorrectamente como "archivado" en la interfaz de usuario debido a este problema, será utilizable en la caja.



## Simulación


Simplemente creando un cupón y comprobando su daata ya se muestra como archivado.



## Workaround


No hay más solución que esperar un poco.





