---
title: "As parcelas que usam Crédito do cliente não são exibidas como uma opção no checkout."
id: 1bfMjWdCLGo5VdX2atDQc9
status: PUBLISHED
createdAt: 2024-08-09T14:43:33.140Z
updatedAt: 2024-08-09T14:43:34.333Z
publishedAt: 2024-08-09T14:43:34.333Z
firstPublishedAt: 2024-08-09T14:43:34.333Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: as-parcelas-que-usam-credito-do-cliente-nao-sao-exibidas-como-uma-opcao-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 1078804
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao registrar uma regra com uma opção de parcelamento, ela não aparece no checkout.
Isso acontece porque as parcelas exibidas no checkout são provenientes da chamada de parcelas do gateway, que, no caso de crédito do cliente, considera todas as parcelas até o valor da maior parcela registrada.

Em outras palavras, mesmo que você registre apenas uma opção de parcelamento de 4x, serão consideradas as opções de 1 a 4 parcelas.
O comportamento nativo é que, se o aumento do número de parcelas não reduzir o valor da parcela, a parcela não será considerada.


## Simulação



1. Crie uma regra de crédito de cliente com a opção de apenas 4 parcelas.
2. Defina uma taxa de juros alta (>50%).
3. Verifique se essa opção de parcelamento não aparece no checkout.

Exemplo:

Número de parcelas Taxa (%) Valor da parcela (R$)
1x 0% 150
2x 0% 75
3x 0% 50
4x 100% 187,50


Nenhuma dessas parcelas será mostrada porque não traz nenhuma vantagem para o comprador, já que o objetivo de quem paga em parcelas é reduzir o valor da parcela.

## Workaround


Registre todas as parcelas, mas para aquelas que você não quer que apareçam no checkout, defina uma taxa de juros muito alta.





