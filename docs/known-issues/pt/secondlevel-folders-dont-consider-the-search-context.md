---
title: "Pastas de segundo nível não consideram o 'contexto de busca'"
id: 6WvlorgpBEeIuKk2mprMXm
status: PUBLISHED
createdAt: 2019-02-17T19:55:07.529Z
updatedAt: 2022-12-22T20:43:19.617Z
publishedAt: 2022-12-22T20:43:19.617Z
firstPublishedAt: 2019-02-17T20:10:48.567Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: pastas-de-segundo-nivel-nao-consideram-o-contexto-de-busca
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

<div class = "alert alert-warning">
  <strong>Atenção</strong>: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.
</div>

Pastas de segundo nível não estão considerando o "contexto de busca" que foi cadastrado para ela. O _slug_ do segundo nível da URL está atuando como um filtro da primeira pasta (com base no contexto dela).

## Simulação

1. No CMS, criar uma pasta na raiz do website e definir um contexto de busca para ela;
2. Criar uma segunda pasta dentro da anteriormente criada, com um contexto de busca diferente;
3. Acessar essa segunda pasta no site e observar que o seu conteúdo não corresponde ao esperado.

Exemplo prático:

- pasta `/promocao-especial` que tem a coleção 111 como contexto de busca
- pasta `/alguns-produtos` cadastrada dentro da pasta anterior com a coleção 222 como contexto de busca

A segunda pasta pode ser acessada no endereço `www.site.com/promocao-especial/alguns-produtos`, porém ela não trará os produtos da coleção 222, e sim uma busca pelo termo "alguns produtos" dentro da coleção 111 (da primeira pasta).

## Workaround

Nos casos em que o contexto de busca é relevante para o cenário, é necessário trabalhar somente com pastas de primeiro nível.

