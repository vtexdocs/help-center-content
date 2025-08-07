---
title: "Valor incorreto para preçoDefinição na ordem da cadeia para um mercado multinível"
id: 75qEjhgv1tTQNho0MArnJo
status: PUBLISHED
createdAt: 2023-11-27T13:50:18.505Z
updatedAt: 2023-11-27T13:51:42.434Z
publishedAt: 2023-11-27T13:51:42.434Z
firstPublishedAt: 2023-11-27T13:51:42.434Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: valor-incorreto-para-precodefinicao-na-ordem-da-cadeia-para-um-mercado-multinivel
locale: pt
kiStatus: Backlog
internalReference: 663203
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A propriedade "priceDefinition" para pedidos no nível "chain" em um marketplace multinível não está seguindo o "sellingPrice" como esperado. Em vez disso, está seguindo a propriedade "price".

## Simulação


Crie um pedido com um desconto aplicado desde a camada do marketplace (nível 1), em relação à camada do vendedor (cadeia, nível 2), em um relacionamento multinível. A camada de atendimento (nível 3) apresentará os valores corretamente, mas a "cadeia" não

## Workaround


Evite usar a propriedade "priceDefinition" nesses tipos de pedidos e faça as contas usando as propriedades price, quantity, unitMultiplier e priceTag - para evitar problemas com o "sellingPrice", que não é um valor preciso.





