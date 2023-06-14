---
title: 'Pedidos com itens de modificação não podem ser faturados com referência aos itens'
id: 1g1t65544sXbvfY62dAS1n
status: PUBLISHED
createdAt: 2023-04-04T15:06:49.163Z
updatedAt: 2023-04-04T15:07:03.429Z
publishedAt: 2023-04-04T15:07:03.429Z
firstPublishedAt: 2023-04-04T15:06:49.853Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedidos-com-itens-de-modificacao-nao-podem-ser-faturados-com-referencia-aos-itens
locale: pt
kiStatus: Backlog
internalReference: 784171
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Hoje, ao remover um item de um pedido através do fluxo de itens de modificação, a expectativa é que o item não seja exibido durante o fluxo de itens da fatura;
entretanto, devido à forma como o fluxo de mudança age no pedido json, mesmo que o item tenha sido removido do pedido, ele ainda é exibido quando o usuário executa o processo Submeter fatura referenciando itens;

E por esta razão a IU retorna uma mensagem impedindo o usuário de continuar com este fluxo de faturas;


##

## Simulação


1 - Tenha um pedido no status "Manuseio de embarque" e selecione "Mudar item";
2 - Remover uma ou mais unidades de uma SKU existente do pedido;
3 - Faturar o pedido (via UI), selecionando a opção fatura - Enviar fatura referenciando itens;
4 - E então, podemos observar que o item removido do pedido ainda está disponível para seleção nesta área;
5 - Ao tentar realizar o fluxo de itens da fatura referenciando itens escolhendo ou não o item que foi removido, a IU retorna um erro, impedindo assim que o usuário continue com o fluxo de item referenciando fatura;



##

## Workaround



Enviar a fatura via API ou enviar a fatura sem fazer referência aos itens.




