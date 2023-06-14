---
title: 'GIFs animados não funcionam no Google Chrome'
id: 62tEP9HJo4e4i202mmi0W0
status: PUBLISHED
createdAt: 2017-08-16T21:33:58.098Z
updatedAt: 2022-12-22T14:55:57.949Z
publishedAt: 2022-12-22T14:55:57.949Z
firstPublishedAt: 2017-08-16T21:49:12.726Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Portal
slug: gifs-animados-nao-funcionam-no-google-chrome
kiStatus: Fixed
internalReference: 
---

## Sumário

Em navegadores compatíveis, as imagens do site são convertidas para o formato WEBP. O formato permite mais compactação sem perda expressiva de qualidade, melhorando a velocidade de carregamento das páginas. A conversão é feita antes da entrega dos arquivos (server side).

Arquivos do tipo GIF que possuem animação estão tendo problemas na conversão, aonde somente o primeiro frame é exibido, perdendo a animação.

## Simulação

1. Fazer upload de um GIF animado;
2. Acessar pelo Google Chrome.

## Workaround

A fim de evitar a perda de contexto quando não houver animação, sugerimos que o primeiro quadro (frame) do GIF seja uma imagem completa, servindo de fallback ao cenário acima.

Um GIF em loop, por exemplo, pode ter um quadro do meio da animação como o primeiro da sequência, de modo a iniciar a apresentação da animação pelo meio, mas sem afetar a ideia ao qual ele se propõe.

### Atualização: problema resolvido

Como medida imediata, não há mais conversão de GIF para WEBP, evitando assim os problemas acima expostos. O formato WEBP animado existe e é suportado, podendo ser disponibilizado em um momento futuro.

Por serem arquivos estáticos, as imagens possuem um cache de tempo indefinido enquanto não são alteradas. Por este comportamento, os GIFs existentes no sistema serão entregues em WEBP enquanto houver cache.

Para forçar a renovação do cache, é necessário reenviar o arquivo de imagem através do CMS (upload de imagens). Feito o upload, em até 1 hora o cache irá expirar e o GIF deixará de ser fornecido como WEBP.

