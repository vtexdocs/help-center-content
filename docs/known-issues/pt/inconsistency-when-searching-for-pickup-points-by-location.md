---
title: 'Inconsistência na busca de pontos de retirada por localização'
id: 1izy3WCIhWVsLY7b9HOJUl
status: PUBLISHED
createdAt: 2021-09-27T19:59:47.595Z
updatedAt: 2021-11-10T21:55:05.600Z
publishedAt: 2021-11-10T21:55:05.600Z
firstPublishedAt: 2021-09-27T20:02:53.914Z
contentType: knownIssue
productTeam: Shopping
author: 2Gy429C47ie3tL9XUEjeFL
tag: Checkout
slug: inconsistencia-na-busca-de-pontos-de-retirada-por-localizacao
kiStatus: Fixed
internalReference: 
---

## Sumário

Há um comportamento inconsistente ao buscar pontos de retirada pela localização do navegador, mesmo com a localização habilitada e autorizada. Essa inconsistência faz com que, por vezes, a busca não retorne opções de pontos de retirada próximos nem atualize o mapa com a localização do usuário.

## Simulação

1. Na sua loja, adicione itens ao carrinho e prossiga para o checkout;
2. Escolha a opção de retirada;
3. Permita o uso da localização do navegador;
4. Note que será exibida uma mensagem indicando que não há pontos de retirada próximos;
5. Insira o endereço manualmente;
6. Note que a plataforma agora exibe opções de pontos de retirada.

## Workaround

Atualmente, não há workaround para este cenário.

