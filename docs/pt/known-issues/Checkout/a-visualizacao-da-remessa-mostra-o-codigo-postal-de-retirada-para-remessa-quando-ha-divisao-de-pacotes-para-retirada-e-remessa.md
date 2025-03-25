---
title: 'A visualização da remessa mostra o código postal de retirada para remessa quando há divisão de pacotes para retirada e remessa'
id: 7gGu9EUZGGXp4dRCCGipsA
status: PUBLISHED
createdAt: 2024-06-26T20:36:39.627Z
updatedAt: 2024-06-26T20:36:40.541Z
publishedAt: 2024-06-26T20:36:40.541Z
firstPublishedAt: 2024-06-26T20:36:40.541Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: shipping-preview-shows-pickup-postal-code-for-shipping-when-there-is-package-split-for-pickup-and-shipping
locale: pt
kiStatus: Backlog
internalReference: 938124
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Na visualização do envio, ao selecionar a retirada na loja, mas nem todos os itens estão disponíveis para essa retirada, o endereço exibido para envio é o da retirada escolhida, e não é possível alterá-lo. No formulário de pedido, o endereço selecionado para envio está correto.

## Simulação



- Adicione itens ao carrinho em que pelo menos um não esteja disponível para retirada;
- Adicionar um código postal ao carrinho;
- Alterar para retirada na loja;
- O código postal mostrado para envio é o da retirada escolhida

## Workaround


Altere o código postal na etapa de envio.



