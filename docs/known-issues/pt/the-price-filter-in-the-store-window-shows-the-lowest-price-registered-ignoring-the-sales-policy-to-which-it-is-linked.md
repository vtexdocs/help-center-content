---
title: O filtro de preço na Vitrine está considerando o menor preço cadastrado sem considerar a política comercial a qual está atrelado
id: 1xbpUOsLDGIgqeQ6UCCgK0
status: PUBLISHED
createdAt: 2017-04-03T20:54:18.423Z
updatedAt: 2022-12-22T20:45:56.420Z
publishedAt: 2022-12-22T20:45:56.420Z
firstPublishedAt: 2017-04-03T21:43:41.118Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: o-filtro-de-preco-na-vitrine-esta-considerando-o-menor-preco-cadastrado-sem-considerar-a-politica-comercial-a-qual-esta-atrelado
kiStatus: Backlog
internalReference: 
---

## Sumário

O filtro de preço está considerando o menor preço cadastrado sem considerar a política comercial a qual está atrelado. Esse caso é específico para produtos que possuem múltiplas tabelas de valores (associadas a diferentes políticas comerciais).

<video preload="metadata" width="100%" controls="controls">
  <source type="video/mp4" src="//videos.contentful.com/alneenqid6w5/1VtdEXKfvekQeSKMmEeusY/d1b1d1cd6a2e902c0b297eed32ca205a/ProblemaConhecido.mp4">
</video>

Nesse cenário, o filtro foi feito considerando produtos para a região de São Paulo, mas ao buscar o preço com o desconto para o filtro, está considerando o menor preço que é o de Paraná, visto que o desconto que está de fato sendo aplicado é de 10%.

Sendo assim, se considerarmos os valores cadastrados para cada política comercial menos o desconto de 10% teríamos:

SP = R$ 58,83
MG = R$ 57,51
PR = R$ 49,41

## Simulação

- Carregar uma vitrine de produtos;
- Usar o menu lateral para filtrar por faixa de preço;


## Workaround

Não há workaround.

