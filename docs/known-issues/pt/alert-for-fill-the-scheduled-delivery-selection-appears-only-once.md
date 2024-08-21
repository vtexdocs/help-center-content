---
title: 'Alerta para preencher a seleção de entrega programada aparece apenas uma vez'
id: f668KUV24RqlpUvDvoIEm
status: PUBLISHED
createdAt: 2022-04-25T14:49:29.983Z
updatedAt: 2024-02-16T20:26:02.010Z
publishedAt: 2024-02-16T20:26:02.010Z
firstPublishedAt: 2022-04-25T14:49:30.465Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: alerta-para-preencher-a-selecao-de-entrega-programada-aparece-apenas-uma-vez
locale: pt
kiStatus: No Fix
internalReference: 565982
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Quando o usuário chega à etapa de seleção da data para a entrega programada, se ele não selecionar nenhuma data e prosseguir para a etapa de pagamento, o alerta e a abertura do pop para selecionar aparece como esperado. Entretanto, este comportamento só acontece uma vez, se ele preencher os dados do endereço e ainda assim continuar com a data sem escolha, o pop não abre mais para a seleção e com isso o usuário não pode prosseguir para a etapa de pagamento sem saber que é necessário selecionar uma data, gerando assim uma má experiência de usabilidade e talvez até um impedimento para fechar a compra.



## Simulação



Quando chegar à etapa de seleção da data, não faça a seleção e tente prosseguir para a etapa de pagamento, preencha todos os dados necessários, exceto a data desejada.



## Workaround


N/A

