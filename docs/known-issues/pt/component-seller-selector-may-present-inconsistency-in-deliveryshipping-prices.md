---
title: 'O seletor de componentes do vendedor pode apresentar inconsistência nos preços de entrega/remessa'
id: 2agLvjXgT76ngdu3YsA6uh
status: PUBLISHED
createdAt: 2022-09-14T22:26:22.177Z
updatedAt: 2022-11-25T22:13:07.124Z
publishedAt: 2022-11-25T22:13:07.124Z
firstPublishedAt: 2022-09-14T22:26:22.762Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: o-seletor-de-componentes-do-vendedor-pode-apresentar-inconsistencia-nos-precos-de-entregaremessa
kiStatus: Backlog
internalReference: 658452
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O componente Seletor do Vendedor apresenta inconsistência nos preços de entrega/remessa com base no valor do pedido.

Exemplo:
Promoção regular:
Quando o cliente faz um pedido acima do valor X, o valor do frete será gratuito.

Com base em um cenário com a configuração acima, ao realizar uma simulação de envio usando o Seletor de Vendedores, o componente utilizará uma consulta de envio GraphQL, equivalente a uma solicitação da API de Simulação, porém, para cada vendedor que o produto estiver disponível, com base no código postal do cliente, a consulta receberá um item como parâmetro, configurando assim um "carrinho com vários itens", portanto, dependendo do valor do pedido, excedendo o valor limite da promoção e aplicando o envio gratuito.



## Simulação


Com base no exemplo acima:
Crie uma promoção onde o tipo e o valor do desconto será "Frete grátis";
Testar o componente Seller Selector em um PDP com um produto que esteja relacionado com a promoção acima e disponível em vários vendedores diferentes.



## Workaround


N/A

