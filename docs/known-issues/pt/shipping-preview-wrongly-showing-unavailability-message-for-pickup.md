---
title: 'Previsão de embarque mostrando erroneamente a mensagem de indisponibilidade para retirada'
id: 6ntmev0Atk04FGnEy1U3QZ
status: PUBLISHED
createdAt: 2023-03-03T19:54:08.912Z
updatedAt: 2023-03-03T19:54:48.450Z
publishedAt: 2023-03-03T19:54:48.450Z
firstPublishedAt: 2023-03-03T19:54:09.559Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: previsao-de-embarque-mostrando-erroneamente-a-mensagem-de-indisponibilidade-para-retirada
kiStatus: Backlog
internalReference: 764457
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando você adiciona a "selectedSla" (deve ser uma pick-up) e "selectedAddresses" via API em um carrinho com promoção de presentes, a loja é configurada para geolocalização e usa polígonos, a pré-visualização do envio mostrará uma mensagem de indisponibilidade para a pick-up, que foi selecionada via API. Este comportamento terá impacto no fluxo de compra, uma vez que não permitirá avançar após o envio.


##

## Simulação



- Configurar a geolocalização e os polígonos;
- Configurar uma promoção de presente para um item;
- Adicionar o item ao carrinho;
- Enviar a "selectedSla" como pick-up e "selectedAddresses" via API;
- Acesse o carrinho na interface de usuário, você verá uma mensagem de indisponibilidade mesmo que a API esteja correta.


##

## Workaround


Mudar a opção para Entrega e voltar para Pick-Up




