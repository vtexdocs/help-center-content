---
title: 'Sistema que considera al vendedor 1 para el límite de vendedores de la regla'
id: 1bUax0hSCVrnFPZ4g1VWOa
status: PUBLISHED
createdAt: 2022-04-20T20:43:57.392Z
updatedAt: 2022-11-25T21:52:50.788Z
publishedAt: 2022-11-25T21:52:50.788Z
firstPublishedAt: 2022-04-20T20:43:57.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: sistema-que-considera-al-vendedor-1-para-el-limite-de-vendedores-de-la-regla
kiStatus: Backlog
internalReference: 564614
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hoy en día, en un escenario en el que tenemos una cuenta que utiliza una arquitectura en el modelo MOI (marketplace/vendedor multinivel), el sistema considera al vendedor 1 como parte del cálculo para limitar el número de vendedores en el carro que se puede configurar utilizando la clave maxNumberOfWhiteLabelSellers



## Simulación


Para replicar el escenario es necesario haber configurado la cuenta con el flujo MOI;

En el vendedor de nivel, se debe configurar la limitación del número de vendedores en el carro;

Deben tener en el carrito los artículos cuyas entregas son realizadas por el primer vendedor y por el vendedor de etiqueta blanca vinculado a este mismo vendedor;

Al rellenar los datos e intentar cerrar el pedido, se mostrará un error vinculado a la limitación del número de vendedores en el carrito



## Workaround


N/A

