---
title: 'O filtro de pedidos não funciona corretamente devido a aspas duplas (") no nome da promoção ou no nome da SKU'
id: 4Qm0akQTQXR8sSbkTDiBL7
status: PUBLISHED
createdAt: 2024-06-06T15:42:19.747Z
updatedAt: 2024-06-06T15:42:20.627Z
publishedAt: 2024-06-06T15:42:20.627Z
firstPublishedAt: 2024-06-06T15:42:20.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: o-filtro-de-pedidos-nao-funciona-corretamente-devido-a-aspas-duplas-no-nome-da-promocao-ou-no-nome-da-sku
locale: pt
kiStatus: Backlog
internalReference: 1045623
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Atualmente, o sistema de filtro de pedidos não retorna os pedidos com promoções que contenham aspas duplas `"` em seus nomes, o que também se aplica ao nome da SKU.

## Simulação


Para reproduzir esse cenário, siga as etapas abaixo.

1. Crie uma promoção/sku com aspas duplas `"` no nome;
Exemplo: Nome da promoção como `10% de desconto usando o cupom "DIAGEO" (8)`
2. Crie um pedido de teste:

  1. No ambiente da loja (storefront), selecione um item e adicione-o ao carrinho;
  2. Certifique-se de que a promoção seja aplicada;
  3. Vá para o checkout e faça o pedido.
3. Vá para **Orders > Order management**;
4. Clique em "Todos os pedidos";
5. Use o **filtro** para selecionar a promoção que você adicionou;
6. Observe que nenhum pedido é encontrado com o filtro selecionado, e a mensagem retornada na interface do usuário é: `Nenhum pedido encontrado. Limpe seus filtros e tente uma pesquisa diferente.



## Workaround


Não há nenhuma solução alternativa disponível.





