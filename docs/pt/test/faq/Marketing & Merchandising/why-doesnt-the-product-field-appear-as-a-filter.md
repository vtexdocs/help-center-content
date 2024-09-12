---
title: 'Por que campo de produto não aparece como filtro?'
id: frequentlyAskedQuestions_376
status: PUBLISHED
createdAt: 2017-04-27T22:36:38.251Z
updatedAt: 2019-12-31T14:24:57.361Z
publishedAt: 2019-12-31T14:24:57.361Z
firstPublishedAt: 2017-04-27T23:01:46.278Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: authors_3
slug: por-que-campo-de-produto-nao-aparece-como-filtro
locale: pt
legacySlug: por-que-campo-de-produto-nao-aparece-como-filtro
---

Em categoria, existe a possibilidade do cadastro de campo de produto &#8211; ou especificação de produto. Nele, é possível marcar duas opções de filtro: **Link no Menu Superior **e **Link no Menu Lateral. **Esses links formarão os filtros nos menus principal ou lateral. Porém, para que isso  aconteça, é necessário que o campo criado esteja nos seguintes tipos:

- **Combo**
- **Radio**
- **CheckBox**

_Tipos de texto não são criados como filtro, pois podem conter valores muito grandes, assim como HTML, dificultando a navegação do cliente final._

Importante lembrar que esses recursos estarão disponíveis no Menu caso existam produtos ativos. O controle SearchNavigator identifica no produto a existência do filtro. Caso não existam produtos com esse atributo o Menu não renderiza essa opção.

Para clientes que integram produtos de outras lojas em seu catálogo, é necessário indexar o produto após sua adição ao catálogo para que o indexador sobrescreva as especificações do seller.

Para entender mais sobre a criação de campos de produto, leia o artigo [Campo de Produto](/pt/tutorial/criando-um-campo-de-produto "Campo de Produto") que explica como e onde é cadastrada essa configuração.
