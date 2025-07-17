---
title: "Los cambios de RoundingMode no funcionan para los descuentos porcentuales"
id: yFJqHZeZu98rZfUnAVtR3
status: PUBLISHED
createdAt: 2025-03-12T16:53:44.101Z
updatedAt: 2025-03-12T16:53:45.144Z
publishedAt: 2025-03-12T16:53:45.144Z
firstPublishedAt: 2025-03-12T16:53:45.144Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: los-cambios-de-roundingmode-no-funcionan-para-los-descuentos-porcentuales
locale: es
kiStatus: Backlog
internalReference: 1192809
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Actualmente, cuando un usuario desea cambiar el comportamiento de cómo sus promociones redondean el descuento, la plataforma VTEX ofrece 3 opciones:

**Preciso** --> no se utiliza el redondeo
**Techo** --> los descuentos nominales se redondean hacia arriba (es decir, 14,56 se convierte en 14,6)
**Piso** --> los descuentos nominales se redondean hacia abajo (es decir, 14,56 se convierte en 14,5)

Sin embargo, se esperaba que estos redondeos también funcionaran para los descuentos porcentuales, pero no es así.


##

## Simulación


El cambio de modo de redondeo debe solicitarse en primer lugar al equipo de soporte de VTEX.

Después, cree un escenario de promoción como el descrito anteriormente, probando tanto para un descuento nominal (en el que verá que el redondeo surte efecto) como para un descuento porcentual (en el que el redondeo no surtirá efecto).



## Workaround


ninguna





