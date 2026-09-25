---
title: 'Carteira de Crédito'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: credit-wallet
locale: pt
seeAlso:
  - "/pt/docs/tutorials/visao-geral-informacoes-de-faturamento"
  - "/pt/docs/tutorials/master-data"
  - "/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex"
---

A **Carteira de Crédito** é um crédito de faturamento concedido automaticamente à sua empresa, usado para abater a cobrança de [Master Data](/pt/docs/tutorials/master-data).

Nesse artigo, entenda como o crédito da Carteira de Crédito é calculado, como ele é aplicado à cobrança de Master Data e o que acontece com o saldo não utilizado.

> ℹ️ Para saber como consultar as informações da sua Carteira de Crédito, acesse [Consultar Carteira de Crédito](/pt/docs/tutorials/consultar-carteira-de-credito).

## Como o crédito é calculado

Quando uma empresa opera com mais de uma conta na VTEX (por exemplo, contas franquia ou ambientes adicionais), todas são agrupadas em uma empresa para fins de faturamento. É essa empresa que recebe uma fatura consolidada, e é nesse nível que o crédito da Carteira de Crédito é calculado e aplicado, e não por conta individual.

Todo mês, a VTEX soma tudo o que a empresa — ou seja, todas as contas agrupadas sob ela — pagou à VTEX no mês anterior (do dia 1 ao último dia do mês) e concede, no mês seguinte, um crédito equivalente a 2% desse valor total.

> ⚠️ Pagamentos de Ads, Professional Services e consultorias em geral não entram nessa base de cálculo.

## Como o crédito é usado

O crédito da Carteira de Crédito é aplicado exclusivamente para abater a cobrança de Master Data na fatura do mês seguinte.

O consumo de Master Data acontece dentro de cada conta, mas a VTEX soma o consumo de Master Data de todas as contas de uma empresa para calcular o custo total de Master Data. É sobre esse total consolidado que o crédito é abatido.

Se o valor do crédito for maior que a cobrança de Master Data do período, o saldo remanescente permanece disponível para uso em meses futuros. O crédito não utilizado se acumula.

> ℹ️ O crédito acumulado na Carteira de Crédito vale até o fim do ciclo contratual vigente. Ele não continua acumulando indefinidamente.
