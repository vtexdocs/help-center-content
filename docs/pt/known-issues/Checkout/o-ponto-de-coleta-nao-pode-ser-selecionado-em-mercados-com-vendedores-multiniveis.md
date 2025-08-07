---
title: "O ponto de coleta não pode ser selecionado em mercados com vendedores multiníveis"
id: 1DGiyBrbw9qXGVMhX3k5gs
status: PUBLISHED
createdAt: 2023-01-11T19:57:54.964Z
updatedAt: 2023-01-11T19:57:55.883Z
publishedAt: 2023-01-11T19:57:55.883Z
firstPublishedAt: 2023-01-11T19:57:55.883Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: o-ponto-de-coleta-nao-pode-ser-selecionado-em-mercados-com-vendedores-multiniveis
locale: pt
kiStatus: Backlog
internalReference: 524073
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um mercado com uma relação multinível (MOI), quando um ponto de coleta é selecionado, o mercado retorna um erro de comunicação com o vendedor, impedindo o uso de pontos de coleta no mercado junto com esses vendedores.

No segundo nível (Vendedor Direto), o erro interno é "O endereço não pode ser usado para o canal de entrega dado (código de status: 400)".

Este comportamento acontece porque a IU envia o pedido com uma combinação de `"selectedDeliveryChannel": null` e `"addressType": "search"`.


##

## Simulação



- Acessar uma conta no mercado que tenha vendedores regulares usando o relacionamento multinível (MOI)
- Procure um endereço que tenha recolhas que cubram o local
- Uma mensagem de erro de comunicação do vendedor aparecerá


##

## Workaround


N/A




