---
title: 'Erro 400 (Bad Request) ao acessar página de filtro com caracter especial no valor'
id: 1mHUPIG42A0UUoAwac8IYE
status: PUBLISHED
createdAt: 2017-09-18T19:12:57.298Z
updatedAt: 2022-12-22T20:45:33.631Z
publishedAt: 2022-12-22T20:45:33.631Z
firstPublishedAt: 2017-09-18T19:28:01.968Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog,Portal (CMS)
slug: erro-400-bad-request-ao-acessar-pagina-de-filtro-com-caracter-especial-no-valor
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao aplicar um filtro por especificação (menu lateral) com caracter especial, o sistema retorna tela branca com o seguinte erro 400: "Bad Request! Scripts are not allowed!"

![Filtro com erro 400](//images.contentful.com/alneenqid6w5/zFVBtySVCoYSoCqEQioOw/b0ac0afcad2eb753d0c02cf14850e087/erro_400.png)

## Simulação

Para simular o comportamento:

1. Configure um valor de campo (especificação de produto ou SKU) com caracter especial (parêntestes, por exemplo) em qualquer categoria;
2. No catálogo, selecione um produto da categoria e o configure com o valor de especificação criado no primeiro passo. Salve o produto.;
3. Aguarde a indexação;
4. Acesse a categoria diretamente pelo site;
5. No filtro lateral (controle SearchResult), clique no valor de especificação (filtro) configurado com o caracter especial;
6. Erro 400: Bad Request! Scripts are not allowed!

## Workaround

Para contornar o problema, evite utilizar caracteres especiais nos valores de especificação de produto e/ou SKU.

