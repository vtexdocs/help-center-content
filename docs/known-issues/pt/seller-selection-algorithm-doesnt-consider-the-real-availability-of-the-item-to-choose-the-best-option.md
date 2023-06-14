---
title: O algoritmo de seleção do vendedor não considera a disponibilidade real do item para escolher a melhor opção
id: 4wT0pC5gzxFvh7nAy7CHK7
status: PUBLISHED
createdAt: 2022-07-07T17:40:45.874Z
updatedAt: 2022-11-25T21:51:20.721Z
publishedAt: 2022-11-25T21:51:20.721Z
firstPublishedAt: 2022-07-07T17:40:46.790Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-algoritmo-de-selecao-do-vendedor-nao-considera-a-disponibilidade-real-do-item-para-escolher-a-melhor-opcao
kiStatus: Backlog
internalReference: 360097
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O algoritmo de seleção do vendedor considera o estoque dos itens a fim de selecionar o melhor vendedor de whitelabel para um determinado contexto.
O problema é que este API não leva em conta se a quantidade está vindo de um armazém válido para o canal de vendas, com uma estratégia de embarque válida, e não mesmo se o armazém estiver habilitado. Portanto, o contexto é pobre para selecionar o mais vendido.
Em um segundo momento, o checkout faz uma simulação completa no vendedor selecionado, e somente aqui descobrirá que na verdade o item não está disponível. Mas, neste momento, um vendedor alternativo de whitelabel não pode mais ser aplicado.



## Simulação



- Ter uma loja com vendedores de whitelabel
- Ter mais de um vendedor:
  - Vendedor A com uma grande quantidade em estoque, mas o armazém desativado
  - vendedor B com uma baixa quantidade em estoque, mas o armazém permitiu e com uma estratégia de embarque válida
- Faça uma simulação e observe que a caixa escolherá o vendedor A em vez do vendedor B



## Workaround


A loja precisa garantir que, se algum vendedor estiver habilitado, ele deve ter uma estratégia de embarque válida para cada armazém. Se algum armazém não for utilizado, seu saldo deve ser atualizado para zero. Caso contrário, há o risco de selecionar um vendedor que não consiga preencher o item.

