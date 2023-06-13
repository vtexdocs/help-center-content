---
title: Produtos da "lista de produtos" que têm um duplicado de "itemAcmercadoria" quando a quantidade é aumentada
id: 4QybxJRoj7wLNvN7NG2FLA
status: PUBLISHED
createdAt: 2022-01-24T21:19:51.135Z
updatedAt: 2022-11-25T22:13:41.772Z
publishedAt: 2022-11-25T22:13:41.772Z
firstPublishedAt: 2022-06-29T13:13:18.202Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: produtos-da-lista-de-produtos-que-tem-um-duplicado-de-itemacmercadoria-quando-a-quantidade-e-aumentada
kiStatus: Backlog
internalReference: 337069
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se uma loja utiliza o componente de lista de produtos da Estrutura de Loja, utilizado no minicartão, os itens do carrinho podem ser duplicados ao aumentar a quantidade de um item que tem um anexo (itemAttachment).

Isto porque o comportamento padrão noSplitItem da solicitação API que atualiza os itens do carrinho é falso.



## Simulação



1. Em sua loja, adicione ao carrinho um item que tenha uma opção de anexo;
2. 2. Inclua um anexo ao item adicionado ao carrinho;
3. Aumentar a quantidade deste item com o pedido de atualização do item do carrinho, enviando o seguinte corpo:

    {"orderItems": {"índice": 0, "quantidade": 2 }]}

4. Observe que a API retorna a lista de itens com o produto duplicado, em vez de aumentar a quantidade.



## Workaround


Atualmente, não há nenhuma solução.

