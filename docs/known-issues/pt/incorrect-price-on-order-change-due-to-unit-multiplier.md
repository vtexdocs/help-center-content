---
title: 'Preço incorreto na mudança de pedido devido ao multiplicador de unidade'
id: 50OfQDGWS0XTWEGsBdIOmV
status: PUBLISHED
createdAt: 2022-05-30T19:26:35.327Z
updatedAt: 2022-12-15T19:33:22.546Z
publishedAt: 2022-12-15T19:33:22.546Z
firstPublishedAt: 2022-05-30T19:26:36.303Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: preco-incorreto-na-mudanca-de-pedido-devido-ao-multiplicador-de-unidade
kiStatus: Fixed
internalReference: 371066
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se você adicionar ou remover uma SKU de um pedido existente (o processo de pedido de modificação) e a SKU tiver uma unidade multiplicadora diferente de 1, o multiplicador de unidade não é considerado para o cálculo do novo valor do pedido.


##

## Simulação


- Adicionar ou remover o sku com um multiplicador de unidade diferente de 1 para um pedido existente. Você pode conferir mais sobre o processo aqui: Mudança de itens de um pedido concluído.
- Observe que o multiplicador de unidade não é considerado ao calcular o valor da SKU e o valor total do pedido.


##

## Workaround


O pedido de mudança pode ser feito via API "Register change on order", e a loja é responsável por inserir os valores corretamente, de acordo com o valor e o multiplicador de unidade.

