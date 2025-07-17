---
title: "A interface do usuário altera automaticamente o SLA selecionado quando o vendedor agendou a retirada e o item não está na primeira posição"
id: 7Jcp2B8YnlWXHNqU4W0VfC
status: PUBLISHED
createdAt: 2023-06-13T23:59:24.235Z
updatedAt: 2023-06-13T23:59:24.804Z
publishedAt: 2023-06-13T23:59:24.804Z
firstPublishedAt: 2023-06-13T23:59:24.804Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-interface-do-usuario-altera-automaticamente-o-sla-selecionado-quando-o-vendedor-agendou-a-retirada-e-o-item-nao-esta-na-primeira-posicao
locale: pt
kiStatus: Backlog
internalReference: 843602
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em um carrinho em que há pelo menos dois produtos atendidos por vendedores diferentes, se ambos os vendedores tiverem agendado a retirada e o segundo item tiver várias opções de SLA, a interface do usuário se perde e seleciona automaticamente um SLA diferente e mostra a mensagem "Não há intervalos de tempo disponíveis para esta data.", não permitindo ir para a etapa de pagamento.

## Simulação



- Configure dois vendedores com coleta agendada;
- Monte um carrinho em que um vendedor cumpra o segundo item com pelo menos duas coletas agendadas;
- Selecione uma entrega em janela para o primeiro item no carrinho; a mensagem "There are no time slots available for this date." (Não há horários disponíveis para essa data) será exibida para o segundo item;
- Tente selecionar outra entrega em janela para o segundo item; a interface do usuário mudará e mostrará a mensagem novamente

## Workaround


N/A




