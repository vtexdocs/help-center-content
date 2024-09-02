---
title: 'A UI não atualiza a melhor escolha de SLA no carrinho'
id: 5H05jLUJA0gmSDTO6nMsPE
status: PUBLISHED
createdAt: 2022-03-26T02:30:36.692Z
updatedAt: 2024-02-16T20:26:13.531Z
publishedAt: 2024-02-16T20:26:13.531Z
firstPublishedAt: 2022-03-26T02:30:37.014Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: a-ui-nao-atualiza-a-melhor-escolha-de-sla-no-carrinho
locale: pt
kiStatus: No Fix
internalReference: 550201
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando temos dois SKUs no carrinho cujo SLAID dos itens tem uma interseção, este é o SLA que será oferecido no carrinho com o leanShipping ativo;
Entretanto, se um destes SKUs for removido e o melhor sla do SKU deixado no carrinho for diferente do escolhido anteriormente, a IU não recalcula para mostrá-lo como uma opção para o usuário, a IU continuará a mostrar o SLA escolhido quando ainda houver outros itens no carrinho;



## Simulação


Para simular este cenário, é necessário que tenhamos dois SKUs em um carrinho;
Esses dois SKUS devem ter pelo menos um SLA que seja a interseção entre eles;
Um desses SKUs deve ter dois SLA's, um com melhores termos e preços além do SLA que compartilha com o outro SKU;

Ao colocá-los no carrinho, é possível ver que o carrinho o exibirá como uma opção, pois é o valor de interseção para os dois;
Ao remover a SKU que tem apenas um SLA, o sistema não selecionará novamente o melhor SLA, mantendo a escolha anterior



## Workaround


N/A

