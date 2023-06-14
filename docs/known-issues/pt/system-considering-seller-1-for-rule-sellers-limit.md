---
title: 'Sistema considerando vendedor 1 para limite de vendedores de regras'
id: 1bUax0hSCVrnFPZ4g1VWOa
status: PUBLISHED
createdAt: 2022-04-20T20:43:57.392Z
updatedAt: 2022-11-25T21:52:50.788Z
publishedAt: 2022-11-25T21:52:50.788Z
firstPublishedAt: 2022-04-20T20:43:57.844Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: sistema-considerando-vendedor-1-para-limite-de-vendedores-de-regras
kiStatus: Backlog
internalReference: 564614
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Hoje, em um cenário onde temos uma conta que usa uma arquitetura no modelo MOI (marketplace/multilevel seller), o sistema considera o vendedor 1 como parte do cálculo para limitar o número de vendedores no carrinho que pode ser configurado usando a chave maxNumberOfWhiteLabelSellers



## Simulação


Para replicar o cenário é necessário ter configurado a conta com o fluxo MOI;

No nível de vendedor, a limitação do número de vendedores no carrinho deve ser configurada;

Eles devem ter no carrinho itens cujas entregas são feitas pelo primeiro vendedor e pelo vendedor com o selo branco vinculado a este mesmo vendedor;

Ao preencher os dados e tentar fechar o pedido, será exibido um erro ligado à limitação do número de vendedores no carrinho



## Workaround


N/A

