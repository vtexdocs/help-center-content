---
title: "Tag canonical em páginas customizadas"
id: 70PufEhKCcgmOQo6CkAEAc
status: PUBLISHED
createdAt: 2017-12-24T16:14:54.951Z
updatedAt: 2022-12-22T20:45:32.625Z
publishedAt: 2022-12-22T20:45:32.625Z
firstPublishedAt: 2017-12-24T16:30:01.966Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slugEN: tag-canonical-em-paginas-customizadas
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A tag canonical em páginas customizadas, quando do segundo nível em diante, direciona apenas para o primeiro nível.

Exemplo:

A pasta `/institucional`, diretamente na raiz do site, terá a canonical apontada corretamente para `www.site.com/institucional`.

A pasta `/institucional/nossas-lojas`, sendo uma subpasta dentro de outra, terá a canonical apontada incorretamente para `www.site.com/institucional`, enquanto deveria apontar para `www.site.com/institucional/nossas-lojas`.

## Simulação

- Acessar o __CMS__;
- Em Layout, criar duas pastas quaisquer, uma contida dentro da outra;
- associar templates HTML para ter conteúdo;
- acessar a página no front-end da loja;
- verificar a tag canonical que foi impressa na segunda pasta da hierarquia.

## Workaround

Por se tratar de um conteúdo customizado, a melhor forma de contornar este problema é desabilitando a tag canonical com o uso do [controle](http://help.vtex.com/pt/tutorial/lista-de-controles-para-templates) `<vtex.cmc:canonicalPage disable="true"/>	`, em seguida criar a tag canonical manualmente para cada página.

Sugestão: utilizar [placeholders](http://help.vtex.com/pt/tutorial/como-personalizar-uma-pagina-usando-placeholder) no template, para ter um campo de configurações em cada layout/pasta que utilizar estes templates.

