---
title: 'Las promociones por orden de formas de pago no aparecen en la página del producto'
id: HZ5IoCFFOhuxU0jQWkMPp
status: PUBLISHED
createdAt: 2019-08-13T20:45:50.232Z
updatedAt: 2023-03-31T15:44:56.958Z
publishedAt: 2023-03-31T15:44:56.958Z
firstPublishedAt: 2019-08-13T21:10:58.244Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: las-promociones-por-orden-de-formas-de-pago-no-aparecen-en-la-pagina-del-producto
kiStatus: Backlog
internalReference: 781523
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La página del producto sólo muestra el precio SKU con algunas promociones, que no incluyen las condiciones específicas de los métodos de pago ni el número de plazos. Estos sólo se aplican durante el pago, después de que el usuario haya optado explícitamente por utilizar una determinada condición de pago.



##

## Simulación




1. Crear una promoción que conceda un 5% de descuento por el pago mediante "boleto" (popular medio de pago offline brasileño).
2. Acceder a la página del producto
3. Tenga en cuenta que el valor mostrado no tiene en cuenta el descuento establecido. El descuento aparecerá después de elegir "boleto" como método de pago en la caja.




## Workaround



Este escenario puede resolverse fácilmente implementando un Javascript front-end que calcule el precio e incluya el porcentaje de descuento debido, mostrando después un elemento con este precio adicional en la página del producto.








