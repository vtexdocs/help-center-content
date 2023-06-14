---
title: 'Pedidos com itens em array MarketplaceItems não está abrindo em New UI Admin'
id: 3tj9AKklBHm4tCKYgrfDi5
status: PUBLISHED
createdAt: 2022-09-13T03:06:57.141Z
updatedAt: 2022-11-25T22:01:26.839Z
publishedAt: 2022-11-25T22:01:26.839Z
firstPublishedAt: 2022-09-13T03:06:57.675Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: pedidos-com-itens-em-array-marketplaceitems-nao-esta-abrindo-em-new-ui-admin
kiStatus: Backlog
internalReference: 656821
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns pedidos têm a matriz "itens de mercado" cheia de mais itens do que a matriz "itens" do pedido da json. Esta configuração é normal e diz respeito, por exemplo, à "lista de presentes de casamento".
Mas a Nova IU não está preparada para lidar com este tipo de ordem com itens em "itens de mercado" e quebrou a página com uma mensagem de erro:





"Desculpe, algo deu errado do nosso lado.

Por favor, tente novamente ou atualize a página.

Voltar para a lista".




## Simulação


Crie um pedido com catálogo usando a matriz "itens de mercado", depois disso você pode tentar ver o pedido no UI admin. A UI irá quebrar e mostrará uma mensagem de erro.




## Workaround


Use a velha UI para abrir essa ordem.

