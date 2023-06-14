---
title: 'Por que os Cookies não suportam caracteres especiais'
id: 6hs7MQzTri6Yg2kQoSICoQ
status: PUBLISHED
createdAt: 2019-01-24T20:45:50.126Z
updatedAt: 2021-11-17T17:57:16.625Z
publishedAt: 2021-11-17T17:57:16.625Z
firstPublishedAt: 2019-01-24T21:55:08.804Z
contentType: tutorial
productTeam: Reliability
author: authors_35
slug: cookie-nao-suporta-caracteres-especiais
legacySlug: cookie-nao-suporta-caracteres-especiais
subcategory: 1luKrYptdi8WoMYckakUaM
---

De acordo com as normas do IETF (Internet Engineering Task Force), instituição responsável por documentar os padrões utilizados na internet, cookies não podem ter caracteres especiais em sua composição, incluindo caracteres não-ASCII.

Essa norma consta nos RFC (Requests For Comments) - documentos técnicos periodicamente atualizados pelo próprio IETF. Para saber mais, [acesse o artigo do próprio IEFT sobre caracteres aceitos em headers e cookies](https://tools.ietf.org/html/rfc7230#section-3.2.6 "acesse o artigo do próprio IEFT sobre caracteres aceitos em headers e cookies"). 

Desse modo, esse comportamento é adotado pela maioria dos produtos e serviços digitais que existem no mercado. Tanto é que esse também é o comportamento esperado da plataforma VTEX. 

Por conta disso, o uso de caracteres especiais na criação de cookies pode gerar alguns bugs no funcionamento de uma loja. 

A seguir, selecionamos dois cenários possíveis: 

## Exemplos

### Google Analytics vs UTM
Uma das formas de criar um cookie inválido é utilizando uma UTM que tenha caracteres especiais.

Digamos que você crie uma UTM que tenha caracteres acentuados, como 
`www.site.com?utm_source=dia-das-mães`.

Nesse caso, o link não será captado corretamente pelo Google Analytics, o que gera um cookie inválido. Isso afeta diretamente o funcionamento da loja, pois não existe nenhuma maneira do lojista apagar os cookies do usuário. 

Logo, essas informações ficam armazenadas no browser até o usuário apagá-las ou o cookie vencer - de acordo com a data de validade expressada pelo criador do cookie. 

### Javascripts customizados

Muitas implementações de front-end criam cookies através de Javascript para armazenar dados para as mais diversas finalidades. 

É fundamental que tanto a validação quanto a conversão *(encoding)* dos dados faça parte dessa rotina, a fim de não criar Cookies inválidos que impedem a navegação na loja.

Mas é importante notar que, além de oferecer riscos como esse, a criação de cookies pode prejudicar a loja também de outras formas. 

