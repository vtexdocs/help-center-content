---
title: 'El precio de venta sobrescribe la lógica del precio KIT'
id: 6eUXEJkxQUl6NCiFWrIiFw
status: PUBLISHED
createdAt: 2022-06-28T16:56:02.848Z
updatedAt: 2023-11-09T13:43:40.623Z
publishedAt: 2023-11-09T13:43:40.623Z
firstPublishedAt: 2022-06-28T16:56:03.203Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: el-precio-de-venta-sobrescribe-la-logica-del-precio-kit
locale: es
kiStatus: Backlog
internalReference: 404486
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La composición del precio del KIT debe basarse en el cálculo de sus componentes y sus cantidades.

Es decir, el precio de un KIT debe ser:
`Precio_KKU_KIT= (componente_1*cantidad_1) + (componente_2*cantidad_2) + (...) + (componente_n*cantidad_n)`.

Sin embargo, actualmente existe una forma de evitar esta lógica si el usuario inserta un Precio PUT directamente en el sku del kit en el Módulo de Precios.




## Simulación



1. Crea un KIT con al menos 2 componentes y establece su precio y cantidades;
2. 2. Compruebe que el precio del KIT se establece de acuerdo con la lógica mencionada anteriormente.
3. Actualice el precio del KIT en el módulo de precios insertando un PUT Price en el sku del kit;
4. 4. Verifique que aun cuando se actualicen los componentes del precio y sus cantidades, el precio del KIT permanezca como el precio put establecido anteriormente.



## Workaround


Realice cualquier cambio en los componentes, un nuevo Precio PUT con el nuevo cálculo y la lógica correcta lo sobrescribirá de nuevo, normalizando entonces el comportamiento "erróneo".





