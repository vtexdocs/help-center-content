---
title: 'Las promociones Buy Together con restricción de rango de precios repercuten en las promociones de regalos'
id: 6tjViVNzlWgfLOLsUEtYSF
status: PUBLISHED
createdAt: 2022-10-11T19:54:05.862Z
updatedAt: 2022-11-25T22:11:38.748Z
publishedAt: 2022-11-25T22:11:38.748Z
firstPublishedAt: 2022-10-11T19:54:06.433Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: las-promociones-buy-together-con-restriccion-de-rango-de-precios-repercuten-en-las-promociones-de-regalos
locale: es
kiStatus: Backlog
internalReference: 676382
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Para que este escenario se produzca, se debe establecer lo siguiente:

1. Crear una promoción de Comprar juntos con una restricción de rango de precios, como valor de precio mínimo.
2. Crear una promoción de regalo.
3. El regalo de la segunda promoción debe ser uno de los productos Buy Together de la primera promoción.

Cuando se establece esto, cuando el cliente está en la caja intentando añadir la promoción de regalo, recibe un error:

    message="Ocorreu um erro de comunicação com o Rates and Benefits"


Esto sucede porque ahora el sistema está tratando de reconocer la restricción del rango de precios cuando no debería.



## Simulación


Vuelva a realizar los pasos mencionados anteriormente.
PD: escenarios relacionados - https://help.vtex.com/known-issues/regular-promotion-using-gift-conflicts-with-value-filters-on-the-cart--oUDvaZPL0fjbN3v18QQIM



## Workaround


Elimine la restricción de rango de precios en la promoción "Comprar juntos".

