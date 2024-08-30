---
title: 'O modal de ponto de coleta não utiliza geoCoordinates sem uma chave do Google Maps'
id: 5aPNjLlsVVeyGe0Vywt0H9
status: PUBLISHED
createdAt: 2024-05-29T20:31:46.863Z
updatedAt: 2024-07-03T15:56:30.595Z
publishedAt: 2024-07-03T15:56:30.595Z
firstPublishedAt: 2024-05-29T20:31:47.737Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-modal-de-ponto-de-coleta-nao-utiliza-geocoordinates-sem-uma-chave-do-google-maps
locale: pt
kiStatus: Backlog
internalReference: 1041462
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A inserção de um código postal no modal do seletor de ponto de coleta aciona uma solicitação para obter os SLAs disponíveis para esse local. Se a conta não tiver uma chave de API do Google Maps definida em suas configurações de Checkout, essa solicitação não incluirá informações de geoCoordinates. Isso pode fazer com que os pontos de coleta dentro de um intervalo válido não sejam exibidos, como aqueles cujas tabelas de frete são baseadas em polígonos.

## Simulação



1. Use uma loja que não tenha uma chave de API do Google Maps definida.
2. Configure um ponto de coleta e vincule-o a uma transportadora cuja tabela de frete seja baseada em polígonos.
3. Adicione um produto ao seu carrinho.
4. Na visualização da remessa, selecione a opção de coleta e insira um código postal que tenha disponibilidade para o ponto de coleta que você criou.
5. Inspecione a solicitação shippingData gerada por essa ação. Ela não conterá geoCoordinates.

## Workaround


Defina uma chave de API do Google Maps nas configurações de checkout da loja.





