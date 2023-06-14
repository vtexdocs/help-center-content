---
title: 'O calendário de desempenho de vendas tem um problema com alguns fusos horários europeus'
id: 23RDaWJO0UQr0QxtTi24is
status: PUBLISHED
createdAt: 2023-03-06T16:20:46.718Z
updatedAt: 2023-03-06T16:20:47.593Z
publishedAt: 2023-03-06T16:20:47.593Z
firstPublishedAt: 2023-03-06T16:20:47.593Z
contentType: knownIssue
productTeam: Analytics
author: 2mXZkbi0oi061KicTExNjo
tag: Analytics
slug: o-calendario-de-desempenho-de-vendas-tem-um-problema-com-alguns-fusos-horarios-europeus
locale: pt
kiStatus: Backlog
internalReference: 718470
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em nosso Painel de Controle de Desempenho de Vendas*** disponibilizamos, dentro dos filtros, a possibilidade de selecionar um período personalizado para validar as informações correspondentes. No entanto, neste momento temos um problema com nosso calendário quando se trata de alguns **fusos horários europeus*** (até agora identificamos o problema apenas em **Reino Unido e Portugal***).

O problema é que para o mês de **outubro***, especificamente, o **30º** está sendo ocultado, além disso, no caso de selecionar um período que inclua esse dia em nível geral, gera um problema na análise dos dados para o período selecionado.


##

## Simulação



1. Você precisa mudar seu fuso horário em seu computador para o Reino Unido ou Portugal
2. Depois, vá para o calendário em **Dashboard de vendas especificamente em outubro***.
3. Tente encontrar o dia **30** no calendário.


##

## Workaround


Quando você estiver em um fuso horário que apresente este problema, é recomendável selecionar um período diferente para evitar o mau comportamento dos resultados.

