---
title: "marketingData no se guarda en los pedidos cuando se utiliza la función de cupones múltiples y utms"
id: OUMc8x9sEcdp8ZbLIka4b
status: PUBLISHED
createdAt: 2023-11-22T21:53:36.924Z
updatedAt: 2024-04-09T13:33:02.091Z
publishedAt: 2024-04-09T13:33:02.091Z
firstPublishedAt: 2023-11-22T21:53:37.493Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: marketingdata-no-se-guarda-en-los-pedidos-cuando-se-utiliza-la-funcion-de-cupones-multiples-y-utms
locale: es
kiStatus: Fixed
internalReference: 936458
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se utiliza la función de cupones múltiples y hay cupones y utms, o 'marketingTags', en el 'orderForm', no se guarda ningún 'marketingData' en el pedido.



## Simulación



- Tiene una cuenta que utiliza la función de cupones múltiples;
- Utilice un cupón y establezca cualquier utm o 'marketingTags', ambos deben estar en el orderForm;
- Finalice la compra; no habrá ningún 'marketingData' en el pedido.



## Workaround


N/A




