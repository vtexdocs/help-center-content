---
title: 'O que são as UTMs internas utmi_cp, utmi_pc e utmi_p'
id: 5Pvo8ufYWs00AUeCCEY68a
status: PUBLISHED
createdAt: 2019-01-24T20:45:40.618Z
updatedAt: 2023-03-29T00:26:24.796Z
publishedAt: 2023-03-29T00:26:24.796Z
firstPublishedAt: 2019-01-24T22:01:12.633Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: o-que-sao-as-utms-internas-utmi-cp-utmi-pc-e-utmi-p
locale: pt
legacySlug: o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi-p
subcategory: 7ogirQ8NClawO2X6xdgCKc
---

As `UTMi`s são UTMs internas, ou seja, parâmetros de URL que têm o objetivo de rastrear o tráfego entre páginas do seu site. Por meio delas, você pode marcar a navegação e definir contextos onde determinadas ações devem ser aplicadas.  

Portanto, elas __não__ têm o objetivo de rastrear o tráfego que vem de sites ou serviços externos, com propósitos ligados ao contexto de marketing. Esta é uma função exercida pelas UTMs, como explicado no artigo [O que são utm_source, utm_campaign e utm_medium](/pt/faq/o-que-sao-utm_source-utm_campaign-e-utm_medium).

Normalmente, as UTMs internas são usadas como __causa de promoção__. No módulo Promoções e Taxas, você pode definir que apenas os pedidos fechados com determinada UTM aplicada na URL receberão a promoção. Veja abaixo o campo para escolher ou criar essa UTM interna no cadastro de uma promoção regular.

No modulo Gerenciamento de Pedidos,dentro da tela de detalhes do pedido, você pode girar o card de Valor Total para ver os dados de __Promoções e Parcerias__. Nele consta o valor de __Audiência de campanha Interna__, que é o valor do parâmetro da UTM interna usada na promoção.

A VTEX trabalha com três tipos de UTMs internas:
- `utmi_cp`
- `utmi_pc`
- `utmi_p`

Como visto acima, a `utmi_cp` é usada pelo módulo de promoções. Mas você pode usar esta e as outras duas de acordo com sua necessidade. Outro uso possível, por exemplo, é rastrear o fluxo de usuários que clicam em um banner da loja.

No orderForm, os campos populados pelos valores dessas UTMs são os seguintes:
- `utmi_cp`: __utmiCampaign__
- `utmi_pc`: __utmiPart__
- `utmi_p`: __utmiPage__

Eles ficam dentro do nó `marketingData`.

### Artigos relacionados

- [O que são utm_source, utm_campaign e utm_medium](/pt/faq/o-que-sao-utm_source-utm_campaign-e-utm_medium)
