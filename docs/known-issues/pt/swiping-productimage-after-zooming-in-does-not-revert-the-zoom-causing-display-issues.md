---
title: 'Passar a imagem do produto depois de aumentar o zoom não reverte o zoom, causando problemas de exibição'
id: 41UVOcLabjyv29Buupj1MO
status: PUBLISHED
createdAt: 2024-01-29T18:05:22.470Z
updatedAt: 2024-01-29T18:05:23.035Z
publishedAt: 2024-01-29T18:05:23.035Z
firstPublishedAt: 2024-01-29T18:05:23.035Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: passar-a-imagem-do-produto-depois-de-aumentar-o-zoom-nao-reverte-o-zoom-causando-problemas-de-exibicao
locale: pt
kiStatus: Backlog
internalReference: 491180
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao usar o vtex.store-components product-image, ao deslizar uma imagem para o lado depois de clicar nela para aumentar o zoom, a primeira imagem continuará ampliada, causando problemas de renderização quando o usuário deslizar de volta para ela.

## Simulação


Em um PDP que usa vtex.store-components product-image, acesse a versão móvel de um produto com pelo menos duas imagens.
Clique para ampliar a primeira imagem e, em seguida, passe para a próxima.
Clique para ampliar a segunda e deslize de volta para a primeira.
Fazer isso para frente e para trás acabará causando alguns problemas de exibição na imagem atualmente ampliada.
Clicar na imagem novamente para reduzir o zoom a redefine de volta ao normal.



## Workaround


Use setas para navegar entre as imagens e reduzir a chance de os usuários optarem por deslizá-las.

Defina a propriedade "zoomMode": "hover" ou "zoomMode": "open-modal". Isso impede o deslizamento quando a imagem é ampliada, mas altera ligeiramente o comportamento.

