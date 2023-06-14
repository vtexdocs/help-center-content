---
title: 'Falta de validação do número de telefone nas APIs de compra permitindo dados inválidos nos pedidos'
id: 141uMln6PSWcm2YSE5UpSI
status: PUBLISHED
createdAt: 2022-10-18T22:35:54.297Z
updatedAt: 2022-11-25T21:49:30.758Z
publishedAt: 2022-11-25T21:49:30.758Z
firstPublishedAt: 2022-10-18T22:35:54.732Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: falta-de-validacao-do-numero-de-telefone-nas-apis-de-compra-permitindo-dados-invalidos-nos-pedidos
kiStatus: Backlog
internalReference: 680500
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A validação de um número de telefone é restrita ao formulário onde ele é inserido ou editado através da interface na etapa de perfil de checkout. Os valores inseridos diretamente através das APIs REST a um formulário de pedido ou a um pedido, ou que vieram do perfil do cliente (que, a seu modo, podem ser inseridos por diferentes formas) não são validados pela plataforma.

Devido à natureza desses fluxos, as origens que inserem valores inválidos não podem ser rastreadas de volta.



## Simulação



- criar um carrinho
- adiantamento até a etapa de pagamento
- mudar a propriedade "telefone" da seção "clientProfileData" de um formulário de pedido através de API para um valor inválido
- terminar a compra

O pedido será criado com o número de telefone inválido sem mais validações.



## Workaround


O número de telefone deve ser validado no lado do cliente, como na interface do usuário, suas funções personalizadas, ou qualquer middleware ou backend que faça essas solicitações ao OrderForm e encomende REST APIs ou alimente o perfil do cliente no Profile System/Master Data services.

