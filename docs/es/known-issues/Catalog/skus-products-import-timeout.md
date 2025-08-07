---
title: "SKUs & Products Import Timeout"
id: 4024mtNGbNcdAJMJT2dxge
status: PUBLISHED
createdAt: 2025-03-28T14:05:27.181Z
updatedAt: 2025-03-28T14:05:27.800Z
publishedAt: 2025-03-28T14:05:27.800Z
firstPublishedAt: 2025-03-28T14:05:27.800Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: skus-products-import-timeout
locale: es
kiStatus: Backlog
internalReference: 1201280
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, el módulo de catálogo puede presentar un timeout en cualquiera de sus operaciones si la cantidad de datos utilizados es demasiado grande.

El módulo "Importar y Exportar" es una de ellas. Dependiendo de la cantidad de productos, skus y datos relacionados en las hojas importadas, también de la cantidad de datos asociados a estos, la operación puede tardar demasiado en procesarse (más de 50s) y eventualmente dar lugar a un error de timeout.


##

## Simulación


Este problema es difícil de simular a menos que el usuario tenga una configuración de catálogo específica. Intente importar hojas grandes (más de 1k registros) para usuarios con un catálogo complejo, posiblemente, se enfrentarán al problema de tiempo de espera.



## Workaround


Divida sus datos en trozos más pequeños.





