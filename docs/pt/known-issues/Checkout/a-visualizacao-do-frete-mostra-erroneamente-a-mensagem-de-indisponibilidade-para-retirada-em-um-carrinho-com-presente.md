---
title: "A visualização do frete mostra erroneamente a mensagem de indisponibilidade para retirada em um carrinho com presente"
id: 6ntmev0Atk04FGnEy1U3QZ
status: PUBLISHED
createdAt: 2023-03-03T19:54:08.912Z
updatedAt: 2025-01-29T14:16:52.862Z
publishedAt: 2025-01-29T14:16:52.862Z
firstPublishedAt: 2023-03-03T19:54:09.559Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: a-visualizacao-do-frete-mostra-erroneamente-a-mensagem-de-indisponibilidade-para-retirada-em-um-carrinho-com-presente
locale: pt
kiStatus: Backlog
internalReference: 764457
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você adiciona "selectedSla" (deve ser uma retirada) e "selectedAddresses" via API em um carrinho com promoção de presente, a loja está configurada para geolocalização e usa polígonos, a visualização do envio mostrará uma mensagem de indisponibilidade para a retirada, que foi selecionada via API. Esse comportamento afetará o fluxo de compra, pois não permitirá avançar após o envio.

## Simulação



- Configure a geolocalização e os polígonos;
- Configurar uma promoção de presente para um item;
- Adicionar o item ao carrinho;
- Enviar o "selectedSla" como retirada e "selectedAddresses" via API;
- Ao acessar o carrinho na interface do usuário, você verá uma mensagem de indisponibilidade, embora a API esteja correta

## Workaround


Altere a opção para Delivery e volte para Pick-Up




