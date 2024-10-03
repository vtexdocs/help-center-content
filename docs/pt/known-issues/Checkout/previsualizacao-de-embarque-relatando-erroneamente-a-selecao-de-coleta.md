---
title: 'Pré-visualização de embarque relatando erroneamente a seleção de coleta'
id: 1KfCAK44prpDXLKUSVmm7O
status: PUBLISHED
createdAt: 2022-03-30T17:47:49.278Z
updatedAt: 2022-11-25T21:53:29.124Z
publishedAt: 2022-11-25T21:53:29.124Z
firstPublishedAt: 2022-03-30T17:47:49.699Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-wrongly-reporting-pickup-selection
locale: pt
kiStatus: Backlog
internalReference: 552912
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No carrinho, ao informar sua localização, a visualização da remessa informa erroneamente qual pickup foi selecionado para esta pickup. Quando de fato, duas opções de coleta devem ser exibidas (houve uma quebra de pacote neste exemplo). E ao chegar na caixa, a informação é fornecida corretamente, com as retiradas nas respectivas pick-ups corretas.



## Simulação


Quando há uma pausa para pegar os itens em duas coletas diferentes, ao chegar no carrinho e digitar o código postal, a visualização do envio informa apenas uma dessas coletas como selecionada. O correto seriam as duas pickups.



## Workaround


N/A

