---
title: 'Assinaturas quando o vendedor é um Pickup Point e não tem um dos SKUs.'
id: 4xIlZZQu8cK42otvvbjhMA
status: PUBLISHED
createdAt: 2022-10-03T12:50:59.047Z
updatedAt: 2022-11-25T22:01:08.292Z
publishedAt: 2022-11-25T22:01:08.292Z
firstPublishedAt: 2022-10-03T12:51:00.284Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: assinaturas-quando-o-vendedor-e-um-pickup-point-e-nao-tem-um-dos-skus
kiStatus: Backlog
internalReference: 666701
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Foi identificado que no pedido de recorrência de uma assinatura com o seguinte cenário:

A Assinatura tem mais de um produto/sku distinto, um destes produtos/sku não tem estoque e o vendedor é um ponto de retirada, o seguinte erro será exibido: Nenhum item preencheu as condições de simulação para fazer o pedido.



Isto ocorre porque, em todos os pedidos de assinatura, uma simulação é realizada com o Checkout e, nesta simulação, recebemos o erro de checkout de que um dos produtos não pode ser entregue.




## Simulação



Para simular este cenário, teremos que ter uma assinatura com mais de uma SKU distinta, o Vendedor tem um ponto de retirada e uma das SKUs não deve ter estoque disponível.

1- Quando a assinatura faz a simulação para a recorrência, ela terá na resposta o status= MISSING para os SKU's;



2- Verificando a simulação no checkout, teremos um erro de que um dos SKUs não pode ser entregue e o pedido parcial não será feito.



3- Veremos também que não é possível fazer a encomenda de forma parcial.




## Workaround


No momento, não temos nenhuma solução.

