---
title: 'Páginas não encontradas não fornecem HTTP Status 404'
id: 45TCR3O8V2uyWcwmqYs4qS
status: PUBLISHED
createdAt: 2017-10-14T20:05:49.329Z
updatedAt: 2022-12-22T20:45:04.470Z
publishedAt: 2022-12-22T20:45:04.470Z
firstPublishedAt: 2017-10-14T20:23:53.353Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: paginas-nao-encontradas-nao-fornecem-http-status-404
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao acessar páginas inexistentes do site o usuário é encaminhado para `/sistema/404` ou `/sistema/buscavazia` conforme o contexto, mas estas páginas não respeitam a especificação HTTP, retornando status "200 OK" ai invés de "404 Not found", especificando que o conteúdo desejado não foi encontrado.

Um dos casos relevantes é a correta interpretação do Google ao indexar a página, de modo que páginas com conteúdo não encontrado não devem se manter indexadas.

## Simulação

Acessar qualquer página inexistente da loja, ou diretamente `/sistema/404` ou `/sistema/buscavazia`, e verificar o status de resposta HTTP da requisição, que será "200 OK".

## Workaround

Em caso de paginas sendo recorrentemente indexadas pelo Google, a melhor opção é criar um [mapeamento de URL](http://help.vtex.com/pt/faq/mapeamento-de-urls-redirecionamento-301), direcionando o conteúdo da página inexistente para uma página relevante.

