---
title: 'HUB Giftcard definindo "R$" como a moeda automática na IU'
id: 2ODtc4t1GSo3iUjT9Gk0uk
status: PUBLISHED
createdAt: 2022-11-03T12:57:31.895Z
updatedAt: 2022-11-25T22:03:58.981Z
publishedAt: 2022-11-25T22:03:58.981Z
firstPublishedAt: 2022-11-03T12:57:32.512Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: hub-giftcard-definindo-r-como-a-moeda-automatica-na-iu
locale: pt
kiStatus: Backlog
internalReference: 690794
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Na página de transação UI na administração, podemos ver a lista de todas as transações feitas na conta. Podemos ver que todas as formas de pagamento mostram a moeda correta do país da conta, exceto nos casos dos Giftcards, a partir do conector GiftcardHUB. Se a transação for feita com Giftcard + outra forma de pagamento, será aplicada a moeda correta. O bug só ocorre quando a transação é feita exclusivamente com o Giftcard. Neste cenário, a moeda apresentada é a moeda real brasileira (R$), independentemente do país da conta.

Este bug não tem impacto sobre o fluxo transacional. Isto significa que as transações feitas com o giftcard ainda podem ser autorizadas, aprovadas, capturadas e concluídas sem problemas. É apenas um problema de IU que pode causar confusão para o usuário do administrador (comerciante).



## Simulação



Entre na página Transaction UI e filtre por Giftcard.



## Workaround





Tanto quanto pudemos ver, não há solução para esta situação.

