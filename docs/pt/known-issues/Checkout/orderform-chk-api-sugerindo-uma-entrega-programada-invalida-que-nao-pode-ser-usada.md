---
title: "orderForm (Chk API) sugerindo uma entrega programada inválida que não pode ser usada"
id: 7e2bSJSJa938QCrOHkRibZ
status: PUBLISHED
createdAt: 2022-01-24T20:20:11.732Z
updatedAt: 2023-12-01T14:08:09.892Z
publishedAt: 2023-12-01T14:08:09.892Z
firstPublishedAt: 2023-03-21T19:26:09.280Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: orderform-chk-api-sugerindo-uma-entrega-programada-invalida-que-nao-pode-ser-usada
locale: pt
kiStatus: Backlog
internalReference: 298665
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um carrinho/formulário de pedido tem vários itens com entrega programada do mesmo vendedor, as opções programadas com o mesmo ID (consideradas o mesmo método de envio) precisam ter as mesmas janelas de entrega entre elas. Se não houver interseção, o método de envio será descartado para alguns itens.

O problema é que, em alguns fluxos, como a API "GET orderForm", esse comportamento de filtragem não está sendo aplicado, oferecendo uma entrega agendada inválida (sem interseção). Em outros fluxos, como na "simulação do orderForm" ou ao selecionar o método de envio, a opção oferecida será corretamente filtrada/removida.

Efeito colateral: a interface do usuário do Chk tentará usar/simular a opção inválida e poderá ficar travada em um **requests loop** porque o método de envio está disponível no primeiro momento, mas não pode ser usado em um segundo momento, e a interface do usuário tenta a primeira etapa novamente ao revisar as opções disponíveis no orderForm.

## Simulação



- No mesmo vendedor, configure duas políticas de remessa diferentes (transportadoras) com o mesmo "tipo de frete" (que define o "slaId");
- Ambas têm entrega programada, mas com uma janela de entrega diferente entre elas;
- Adicione 2 itens ao carrinho, um item de cada política de envio.

A interface do usuário pode ficar travada em um loop devido à divergência entre o "GET orderForm" e a "simulação do orderForm"

## Workaround


É necessário corrigir a janela de entrega entre os métodos de envio com o mesmo ID (para ter as mesmas janelas de entrega) ou tratá-los como métodos de envio diferentes, usando IDs diferentes.





