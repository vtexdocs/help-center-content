---
title: "A API de checkout pode não agrupar pacotes quando dois ou mais vendedores podem atender"
id: 3nTRP8r3ZvoZ6UqC1RTbIb
status: PUBLISHED
createdAt: 2023-05-03T22:24:43.036Z
updatedAt: 2023-05-08T18:33:00.831Z
publishedAt: 2023-05-08T18:33:00.831Z
firstPublishedAt: 2023-05-03T22:24:44.282Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-api-de-checkout-pode-nao-agrupar-pacotes-quando-dois-ou-mais-vendedores-podem-atender
locale: pt
kiStatus: Backlog
internalReference: 802156
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando dois ou mais vendedores podem preencher um carrinho com mais de um item, a API do Checkout pode não agrupar pacotes selecionando vendedores diferentes para cada produto. Isso aumenta o valor do frete para o comprador.

Esse comportamento foi observado quando dois itens foram adicionados ao carrinho; um dos itens podia ser atendido por apenas um vendedor, e uma divisão de pacote acontecia mesmo que o outro item pudesse ser atendido pelo mesmo vendedor. Mas isso não se limita a esse cenário.

## Simulação


Não há uma maneira fácil de replicar o cenário, mas consulte os pedidos/carrinhos em que o problema ocorreu.



## Workaround


N/A




