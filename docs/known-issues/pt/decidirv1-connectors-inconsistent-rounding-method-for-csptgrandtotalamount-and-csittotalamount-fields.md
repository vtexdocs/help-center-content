---
title: "DecidirV1 Connector's Inconsistente método de arredondamento para os campos CSPTGRANDTOTALAMOUNT e CSITTOTALAMOUNT."
id: 6VcgLkWcGwMdkpuJQ14ZBt
status: PUBLISHED
createdAt: 2023-04-10T20:32:29.930Z
updatedAt: 2023-04-10T20:32:30.771Z
publishedAt: 2023-04-10T20:32:30.771Z
firstPublishedAt: 2023-04-10T20:32:30.771Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: decidirv1-connectors-inconsistente-metodo-de-arredondamento-para-os-campos-csptgrandtotalamount-e-csittotalamount
kiStatus: Backlog
internalReference: 787367
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O conector DecidirV1 antigo utiliza um método interno para calcular os campos `CSPTGRANDTOTALAMOUNT` e `CSITTOTALAMOUNT`, que é o produto entre o valor e a quantidade do produto. Esta abordagem resulta em uma cadeia com duas casas decimais. Consequentemente, quando o preço do produto contém mais de duas casas decimais, o valor do campo `CSPTGRANDTOTALAMOUNT` diverge, pois é o próprio valor do pagamento.


##

## Simulação


Faça um pedido usando Dec DecarV1 com um produto no carrinho com um preço que tenha mais de 3 decimais.


##

## Workaround


Para evitar tais discrepâncias, recomendamos o uso de produtos com no máximo duas casas decimais ou a modificação do carrinho de saída para eliminar o uso de casas decimais.





