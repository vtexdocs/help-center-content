---
title: Pedidos sem invocaçãoEndereço criado através da IU nativa
id: 1XjNZhcTJ5rZJP4w3kJtcW
status: PUBLISHED
createdAt: 2022-01-24T20:21:07.893Z
updatedAt: 2022-11-25T21:52:06.721Z
publishedAt: 2022-11-25T21:52:06.721Z
firstPublishedAt: 2022-06-27T19:49:05.878Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: pedidos-sem-invocacaoendereco-criado-atraves-da-iu-nativa
kiStatus: Backlog
internalReference: 306140
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em alguns casos ainda é possível criar pedidos sem "invoiceAddress" através da UI de checkout.
O endereço da fatura deve ser obrigatório na IU de todas as lojas que têm a funcionalidade habilitada.



## Simulação


Até agora, os passos conhecidos para reproduzir o cenário são:


1. Acessar a loja sem estar logado/identificado
2. Colocar um produto no carrinho
3. No carrinho, clique em Fechar ordem
4. Na tela de e-mail coloque um e-mail de um comprador existente - o usuário provavelmente será direcionado para a etapa de pagamento
5. Clique para editar a etapa de entrega e selecione "retirada".
6. Não preencher o endereço da nota
7. Clique para editar "Dados pessoais".
8. Você será solicitado a fazer o login.
9. Após o login, na etapa de edição de "Dados Pessoais" o botão aparecerá para ir direto para o pagamento, mesmo se o endereço da fatura não for preenchido.

Além do acima mencionado, o comportamento pode ser observado quando o usuário está na etapa de envio e ao recarregar a página, eles são automaticamente levados ao pagamento sem preencher os dados da Fatura.
Outro cenário que induz o comportamento é a troca entre a lista de endereços previamente registrados e um novo endereço, o que permite ao usuário proceder ao pagamento sem preencher o código postal (de um novo endereço).



## Workaround


Não há nenhuma solução conhecida para evitar o cenário de raiz.

