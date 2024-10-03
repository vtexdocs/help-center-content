---
title: "A caixa de seleção para 'Aplicar desconto somente com a operadora selecionada' não persiste na interface do usuário"
id: 2gcsCgGhE4V1Hbp4ZkNO78
status: PUBLISHED
createdAt: 2024-08-21T20:17:29.685Z
updatedAt: 2024-08-21T20:17:30.499Z
publishedAt: 2024-08-21T20:17:30.499Z
firstPublishedAt: 2024-08-21T20:17:30.499Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: checkbox-for-apply-discount-only-with-selected-carrier-does-not-persist-in-ui
locale: pt
kiStatus: Backlog
internalReference: 1085241
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Há um problema no módulo de impostos em que a opção "Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente" não permanece marcada na interface do usuário, embora esteja corretamente definida via API.

## Simulação



1. Navegue até o módulo de impostos no administrador.
2. Tente marcar a opção "Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente".
3. Salve as alterações e observe que a caixa de seleção não permanece marcada.
4. Verifique por meio da API se a opção está corretamente marcada como "true"

## Workaround


O problema é puramente visual. O estado da caixa de seleção é refletido corretamente por meio da API, e o desconto é aplicado conforme esperado durante o checkout. Portanto, nenhuma solução alternativa é necessária, pois a funcionalidade não é prejudicada.





