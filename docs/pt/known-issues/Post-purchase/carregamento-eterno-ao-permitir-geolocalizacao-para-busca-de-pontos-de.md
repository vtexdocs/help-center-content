---
title: 'Carregamento eterno ao permitir geolocalização para busca de pontos de retirada'
id: 9HACCiPSeJY9174Qh9FQb
status: PUBLISHED
createdAt: 2021-09-08T18:11:35.333Z
updatedAt: 2021-10-19T13:09:47.890Z
publishedAt: 2021-10-19T13:09:47.890Z
firstPublishedAt: 2021-09-08T19:28:29.303Z
contentType: knownIssue
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
tag: Checkout
slugEN: geolocation-search-for-pickup-points-loading-indefinitely
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

Durante o checkout, se a localização do cliente é obtida pela permissão de localização do navegador, o mapa fica preso com a informação "Aguardando permissão para obter sua localização atual" indefinidamente.


## Simulação


Caso precise simular um cenário que precise mudar a localização capturada pelo navegador, recomendamos utilizar a substituição de localização do navegador. Para testes no Google Chrome, confira  [Substituição de localização do Chrome](https://developer.chrome.com/docs/devtools/device-mode/geolocation/).

Se a localização do seu navegador satisfaz a condição acima, siga com estes passos:

1. Acesse a loja;
2. Adicione produtos ao carrinho;
3. Siga para o checkout;
4. Habilite a localização no navegador;
5. Durante o checkout, selecione a opção de entrega: ponto de retirada. 
6. Verifique que a tela apresenta uma mensagem contínua sobre carregamento da localização.

![erro PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Workaround

Não existe workaround para este cenário. 


