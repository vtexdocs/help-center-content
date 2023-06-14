---
title: 'El número de itens en el filtro de precios no se corresponde con el número correcto'
id: 1FyjpY1K6JfAQ0gRIuXyuO
status: PUBLISHED
createdAt: 2022-03-16T19:37:02.943Z
updatedAt: 2022-11-25T22:12:33.361Z
publishedAt: 2022-11-25T22:12:33.361Z
firstPublishedAt: 2022-03-16T19:37:03.370Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-numero-de-itens-en-el-filtro-de-precios-no-se-corresponde-con-el-numero-correcto
kiStatus: Backlog
internalReference: 371405
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En la interfaz de usuario de precios, podemos filtrar por marca o categoría. Después de hacer un filtro, la UI devuelve sólo los productos en el filtro, pero el total de artículos devueltos en el menú es en realidad el total sin ningún filtro, y los datos mostrados están filtrados como se esperaba.




## Simulación


- Vaya a `.myvtex.com/admin/pricing/#/prices`.
- Haga un filtro por marca o categoría;
- Compruebe el valor de los artículos;


## Workaround


A pesar de la información errónea de la UI, si exportamos el filtro, éste devolverá sólo los productos filtrados. Es sólo una información errónea sobre el número de artículos en la UI.

