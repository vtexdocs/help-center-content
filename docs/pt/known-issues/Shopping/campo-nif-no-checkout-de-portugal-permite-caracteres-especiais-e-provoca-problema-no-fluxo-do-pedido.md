---
title: 'Campo NIF no checkout de Portugal permite caracteres especiais e provoca problema no fluxo do pedido'
id: 5xQ3fPZq4oUk8QsY0KUEYm
status: PUBLISHED
createdAt: 2018-03-28T12:47:56.181Z
updatedAt: 2022-12-22T20:48:54.967Z
publishedAt: 2022-12-22T20:48:54.967Z
firstPublishedAt: 2018-03-28T13:14:18.633Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: nif-field-at-checkout-in-portugal-allows-special-characters-and-causes-problem-in-order-flow
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O campo NIF (document) do checkout de Portugal (UI) está permitindo entrada de caracteres especiais nos seus valores. No entanto, os pedidos que forem fechados com caracteres especiais ficam travados com erro no OMS.

![OMS](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Shopping/campo-nif-no-checkout-de-portugal-permite-caracteres-especiais-e-provoca-problema-no-fluxo-do-pedido_1.png)

## Simulação

Para simular o problema, basta realizar um pedido em um checkout de Portugal, incluindo um caracter especial no campo NIF (document). Em seguida, confira no OMS o erro semelhante ao exemplo acima.

## Workaround

Como solução paliativa, indicamos que o responsável técnico da loja inclua um javascript de customização no checkout, validando o valor inputado de acordo com a máscara e as regras do NIF. 

Os pedidos que já foram concluídos e encontram-se com esse erro no OMS __precisarão ser cancelados__. Por isso, sugerimos que a loja entre em contato com o cliente para  explicar a situação e ajudar a refazer o pedido.

