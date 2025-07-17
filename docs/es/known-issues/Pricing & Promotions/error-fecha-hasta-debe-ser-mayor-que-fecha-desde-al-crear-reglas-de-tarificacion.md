---
title: 'Error "Fecha hasta" debe ser mayor que "Fecha desde" al crear reglas de tarificación'
id: 6jEbSXEvjfJMGros69POZ7
status: PUBLISHED
createdAt: 2024-10-10T13:21:06.386Z
updatedAt: 2024-10-10T13:21:07.751Z
publishedAt: 2024-10-10T13:21:07.751Z
firstPublishedAt: 2024-10-10T13:21:07.751Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: error-fecha-hasta-debe-ser-mayor-que-fecha-desde-al-crear-reglas-de-tarificacion
locale: es
kiStatus: Backlog
internalReference: 1114921
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al crear una nueva regla de precios en https://{accountName}.myvtex.com/admin/pricing/#/trade-policies-rules, el vendedor puede seleccionar el intervalo de fechas en el que se aplicará esta regla.
A veces aparece el error "El valor TO debe ser mayor que FROM" al seleccionar una fecha final, incluso cuando el valor ya es mayor.


##

## Simulación



1. Ir a reglas de precios
2. Cree una nueva regla con un intervalo de fechas válido (seleccione un intervalo de semanas, por ejemplo)
3. Compruebe que aparece el error.



## Workaround


Seleccionar fechas finales mayores suele solucionar el problema (como un año por delante).





