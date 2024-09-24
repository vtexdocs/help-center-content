---
title: 'O seletor do método de entrega não aparece em alguns cenários'
id: 3TmHGPquZnxXZnnnNrofSi
status: PUBLISHED
createdAt: 2022-07-22T14:03:10.696Z
updatedAt: 2022-11-25T21:49:57.025Z
publishedAt: 2022-11-25T21:49:57.025Z
firstPublishedAt: 2022-07-22T14:03:11.255Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: delivery-method-selector-does-not-appear-in-some-scenarios
locale: pt
kiStatus: Fixed
internalReference: 293784
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


As lojas que têm opções de entrega programada podem ter um mau funcionamento em relação à seleção do método de entrega. Isto pode acontecer com ou sem o uso do Envio Lean.
Geralmente, após desmarcar a opção "programar tudo" (que é naturalmente verificada) nenhuma outra opção de SLA é exibida.



## Simulação


**Para lojas que não utilizam o transporte enxuto:**

- criar um carrinho onde haja itens com o SLA de entrega programada
- No checkout, na etapa de envio, preencha todos os dados necessários - Note que após o "cálculo" da entrega a opção "programar tudo" será verificada, entretanto, mostrará opções não programadas (o botão deve ser desmarcado)
- desmarque e marque "programar tudo" para ver as opções de programação
- escolha uma opção de programação (com data e janela de entrega)
- remover "programar tudo" para retornar ao não programado - nenhum formulário de entrega será exibido

**Para lojas que utilizam o transporte enxuto:**

- criar um carrinho onde haja itens com o SLA de entrega programada
- No checkout, na etapa de envio, preencha todos os dados necessários - Note que após o "cálculo" da entrega, a opção "programar tudo" será verificada
- escolha uma opção de programação (com data e janela de entrega)
- remover "programar tudo" para retornar ao não programado - nenhum formulário de entrega será exibido



## Workaround


Não há nenhuma solução conhecida.

