---
title: 'Configurando marketplace entre lojas VTEX'
id: tutorials_6520
status: CHANGED
createdAt: 2017-04-27T21:48:44.692Z
updatedAt: 2022-09-12T20:11:02.084Z
publishedAt: 2022-03-14T15:57:05.056Z
firstPublishedAt: 2017-04-27T23:11:18.934Z
contentType: tutorial
productTeam: Channels
author: authors_3
slug: configurando-marketplace-entre-lojas-vtex
locale: pt
legacySlug: configurando-marketplace-entre-lojas-vtex
subcategoryId: 2xWRgEIlR2ookieEmm4KQu
---

Toda loja VTEX já vem preparada para ser [tanto marketplace quanto seller](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402) de outras lojas VTEX, assim como de nossos marketplaces integrados. 

A integração entre lojas VTEX dispensa alguns passos necessários nas demais integrações. Abaixo estão as instruções para cada configuração.

- Quero me tornar um marketplace VTEX
- Quero me tornar um seller VTEX 

Ser um marketplace significa que seu website vai receber (e vender) produtos de outra loja (que vai funcionar como seller). Para fazer isso, você precisa seguir as [instruções para criação de seller](/pt/tutorial/configurando-seller/).

## Para lojas que querem atuar como sellers: como configurar um marketplace VTEX
Ser um seller significa que sua loja vai enviar e vender produtos por meio de outro website (que vai funcionar como marketplace). Para fazer isso, você precisa cadastrar essa loja como marketplace no seu admin. Basta seguir os passos abaixo:

1. Configure a [política comercial](/pt/tutorial/configurando-a-politica-comercial-para-marketplace/).
2. Configure a [logística](/pt/tutorial/configurando-logistica-para-marketplace/) para esta política comercial.
3. Configure o [afiliado](/pt/tutorial/como-configurar-afiliado/).

##### Sobre a integração

Depois de realizar as configurações, é necessário fazer a indexação de todos os produtos da base, para que a integração ocorra.

1. Com o [usuário titular](https://help.vtex.com/pt/tracks/contas-e-permissoes--5PxyAgZrtiYlaYZBTlhJ2A/56Bd0KpwbvAji1aFs94xdA?locale=pt), acesse o link `{nomedaloja}.vtexcommercestable.com.br/admin/Site/FullCleanUp.aspx`.
2. Clique no botão __Reindexar Base__.

[![ReindexarBase](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png)](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png "![ReindexarBase](https://images.contentful.com/alneenqid6w5/7Eg8CAclRSSqaSS8cqI66S/44944a80535a465fc449c44b8066b557/ReindexarBase.png)")

Perceba que, na URL, é preciso alterar o termo `{nomedaloja}` para o nome de sua loja.

Com essas configurações feitas, os produtos começarão a ser enviados para o marketplace. Então, o marketplace deve realizar o [mapeamento de categorias, marcas e especificações](https://help.vtex.com/pt/tutorial/mapeando-categorias-e-marcas-para-marketplace), além de aceitar os produtos enviados.
