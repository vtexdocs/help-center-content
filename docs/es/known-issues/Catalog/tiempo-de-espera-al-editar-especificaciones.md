---
title: "Tiempo de espera al editar especificaciones"
id: 3RFLaSJjeoQ92V8uCwjAYp
status: PUBLISHED
createdAt: 2025-04-01T17:28:10.733Z
updatedAt: 2025-04-01T17:30:33.011Z
publishedAt: 2025-04-01T17:30:33.011Z
firstPublishedAt: 2025-04-01T17:28:11.957Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: tiempo-de-espera-al-editar-especificaciones
locale: es
kiStatus: Backlog
internalReference: 1192667
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Se espera que el usuario pueda editar especificaciones por API y admin sin errores. Sin embargo, al editar una especificación de producto en la estructura de categorías, una cuenta con un gran volumen de productos en el catálogo puede experimentar eventos de tiempo de espera durante el proceso de edición, lo que hace imposible cambiar esta información.



## Simulación



1. Accede a las especificaciones de una categoría concreta;
2. Intentar guardar un cambio (ya sea a través de la interfaz de usuario o de la API);
3. Ver un error de tiempo de espera en la respuesta (UI o API).



## Workaround


Póngase en contacto con el soporte de VTEX para editar la información.





