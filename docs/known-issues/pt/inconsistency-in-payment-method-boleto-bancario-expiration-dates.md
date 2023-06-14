---
title: 'Inconsistência na forma de pagamento boleto bancário datas de expiração'
id: 771mUo6KdQP0pCTq5F5E0m
status: PUBLISHED
createdAt: 2022-03-28T01:17:58.206Z
updatedAt: 2022-11-25T22:06:07.068Z
publishedAt: 2022-11-25T22:06:07.068Z
firstPublishedAt: 2022-03-28T01:17:58.704Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: inconsistencia-na-forma-de-pagamento-boleto-bancario-datas-de-expiracao
kiStatus: Backlog
internalReference: 489460
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Alguns Boleto Bancário gerados a partir do conector ItauShopLine podem ter um prazo de validade diferente daquele configurado na afiliação

Isto acontece porque, para determinar a data de expiração, procuramos um campo em nosso código que diz a data e a hora exata do momento da criação do boleto e então somamos o número de dias permitidos para que o boleto expire. Entretanto, utilizando o fuso horário GMT+0 e não o fuso horário brasileiro (GMT-3) e depois o boleto gerado a partir das 21h em diante considere o dia seguinte como o dia base para este cálculo, fazendo com que alguns Boletos Bancários tenham mais um dia no cálculo da data de vencimento

Este problema foi mapeado a partir de um caso com ItauShopLine, mas pode acontecer com outros conectores, dependendo do país de compra e também do funcionamento particular de cada conector.



## Simulação



1. Ir para as filiações e montar o ItauShopLine com o `expireDays = 1`.
2. Criar uma Condição de Pagamento para o Método de Pagamento Boleto Bancário a ser processado pela ItauShopLine
3. Depois das 21h, vá ao check-out e faça uma compra com Boleto Bancário Método de Pagamento
4. Abra o boleto bancário e observe a data de expiração



## Workaround


N/A

