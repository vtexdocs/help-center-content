---
title: "A função addToCart não funciona corretamente com anexos e com o anexo do componente 'opções de montagem'."
id: 6I8vn2K7PWLRwIj2YTY7nZ
status: PUBLISHED
createdAt: 2023-05-23T15:40:36.343Z
updatedAt: 2023-05-23T15:40:37.588Z
publishedAt: 2023-05-23T15:40:37.588Z
firstPublishedAt: 2023-05-23T15:40:37.588Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: a-funcao-addtocart-nao-funciona-corretamente-com-anexos-e-com-o-anexo-do-componente-opcoes-de-montagem
locale: pt
kiStatus: Backlog
internalReference: 830495
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A função addToCart não funciona corretamente quando um produto tem opções de montagem e anexos configurados e um dos componentes das opções de montagem também tem anexos. Somente o anexo do componente será adicionado ao carrinho.

## Simulação



- Configurar um anexo para um produto;
- Configurar opções de montagem para o mesmo produto no qual um dos componentes tem anexos;
- Adicionar o produto ao carrinho, selecionando os anexos do produto e do componente;
- Acessar o checkout e verificar se o anexo do produto não foi adicionado

## Workaround


N/A




