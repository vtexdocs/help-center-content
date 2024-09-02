---
title: 'O checkout não é compatível com a codificação de nomes de opções de montagem'
id: 29YnOA15HDzJSRwiOLLNfR
status: PUBLISHED
createdAt: 2024-05-06T19:01:35.962Z
updatedAt: 2024-05-06T19:01:36.828Z
publishedAt: 2024-05-06T19:01:36.828Z
firstPublishedAt: 2024-05-06T19:01:36.828Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-nao-e-compativel-com-a-codificacao-de-nomes-de-opcoes-de-montagem
locale: pt
kiStatus: Backlog
internalReference: 378842
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O nome das opções de montagem é usado na rota da API. Portanto, é necessário oferecer suporte à codificação desses nomes para não criar problemas na URL com caracteres especiais, como "/". Ao adicionar uma opção de montagem com "/" no carrinho, ela simplesmente não é adicionada e também não notifica o usuário.

## Simulação



- Adicione um "/" ao nome da opção de montagem;
- Tente adicionar um produto com a opção de montagem;
- O item será adicionado ao carrinho sem a opção de montagem

## Workaround


Remova "/" do nome da opção de montagem.



