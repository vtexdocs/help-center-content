---
title: "A mutação ValidateCart retorna 500 quando as personalizações afetam a disponibilidade do produto"
id: TmV61O5LTdZFGZ4zBjj5P
status: PUBLISHED
createdAt: 2025-07-11T14:18:35.610Z
updatedAt: 2025-07-11T18:49:40.369Z
publishedAt: 2025-07-11T18:49:40.369Z
firstPublishedAt: 2025-07-11T14:18:36.287Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: a-mutacao-validatecart-retorna-500-quando-as-personalizacoes-afetam-a-disponibilidade-do-produto
locale: pt
kiStatus: Backlog
internalReference: 1258650
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um produto não está disponível, nosso comportamento padrão é retornar o último carrinho válido e os erros no `cart.messages`. Os produtos já adicionados ao carrinho podem ficar indisponíveis devido a personalizações manuais do comerciante (por exemplo, alterar manualmente os pontos de retirada/vendedor no carrinho). Esse comportamento pode levar a um erro 500 na mutação validateCart, tornando o carrinho indisponível para ações do cliente, como excluir o produto do carrinho.

## Simulação


Não é um contexto fácil de simular; pode envolver personalização no lado da loja.
Mas um exemplo seria mudar de um ponto de coleta em que o produto estava disponível para um em que ele não está mais.



## Workaround


Como solução alternativa, a equipe desenvolveu um sinalizador de recurso para alterar o comportamento padrão do carrinho de retornar erros do lado do servidor, permitindo produtos indisponíveis no carrinho e transferindo a responsabilidade de lidar com cenários de erro para o lado do cliente por meio de personalizações do comerciante.
https://github.com/vtex/faststore/pull/2938





