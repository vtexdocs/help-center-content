---
title: 'Descontinuação do Feed v1 e v2 do módulo de Gerenciamento de pedidos'
id: 4zoxe3FihrNs0yQ1g1JyG4
status: CHANGED
createdAt: 2019-06-12T18:01:18.416Z
updatedAt: 2020-11-27T19:40:20.157Z
publishedAt: 2020-09-22T00:53:40.981Z
contentType: updates
productTeam: Post-purchase
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: order-management-module-feed-v1-and-v2-discontinuation
locale: pt
legacySlug: descontinuacao-do-feed-v1-e-v2-do-modulo-de-gerenciamento-de-pedidos
announcementImageID: ''
announcementSynopsisPT: ' O Feed v1 e v2 do módulo de Gerenciamento de pedidos será descontinuado'
---

>⚠️ A partir do dia 25 de julho de 2019, o Feed v1 e v2 do módulo de Gerenciamento de pedidos será descontinuado. Isso significa que, após esta data, somente será possível usar o Feed v3.

## Por que a VTEX está removendo as antigas versões? 

As novas funcionalidades do Feed v3 garantem uma melhor performance de operação para a sua loja, ganhando consistência na integração dos pedidos. 

A nova versão traz mais rapidez e facilidade para o controle dos registros do seu feed de pedidos. No Feed v3, é possível utilizar filtros em suas chamadas e configurar o tempo de espera para a exibição de um evento. 

O Feed v3 também permite que o seu sistema escute os eventos que desejar. Assim, é possível configurar de maneira diferente a escuta dos eventos para cada appKey. Dessa forma, uma appKey que realiza a integração com um ERP pode ler os eventos de maneira independente de uma appKey que realizar a integração com um sistema de BI, por exemplo.

O Feed v3 também possui uma funcionalidade de Hook para consumir os dados da fila de pedidos. Caso a sua loja decida por utilizar o Hook, são enviadas notificações dos eventos escolhidos na configuração do Hook para o endpoint desejado.

## O que você precisa fazer? 

Primeiramente, é necessário configurar o Feed v3 para que consumir os dados da fila de pedidos. Acesse nosso artigo para [realizar a configuração do feed](https://help.vtex.com/pt/tutorial/feed-v3-de-gerenciamento-de-pedidos--5qDml3cQypWDRTgw69s4C1).

Para entender mais sobre o funcionamento do feed, acesse nosso artigo sobre [como funciona o feed do módulo de Gerenciamento de pedidos](https://help.vtex.com/pt/tutorial/como-funciona-o-feed-v3-do-modulo-de-gerenciamento-de-pedidos--5SzSKee2f666YCoWkm0eQC).

Caso deseje utlilizar a funcionalidade de Hook, acesse nosso artigo para saber mais sobre a [configuração e o funcionamento do Hook do Feed v3](https://help.vtex.com/pt/tutorial/configurar-hook-do-feed-v3--6JkYQpIlU8ptysUiGIp4Px).

