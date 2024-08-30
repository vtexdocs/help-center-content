---
title: 'O que são utm_source, utm_campaign e utm_medium'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2022-11-28T19:10:34.068Z
publishedAt: 2022-11-28T19:10:34.068Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: o-que-sao-utm-source-utm-campaign-e-utm-medium
locale: pt
legacySlug: o-que-sao-utm_source-utm_campaign-e-utm_medium
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

UTMs (Urchin Tracking Modules) são parâmetros de URL normalmente usados em contextos de marketing para rastrear o tráfego que chega às páginas do site.

Você pode, por exemplo, definir que sempre que um usuário chegar à sua loja vindo de um clique num anúncio do Facebook, a URL será montada com o parâmetro `utm_source=fb`. 

Ou então você pode definir que, para essa mesma UTM, determinada promoção será aplicada. Ou seja, sempre que um cliente vier do Facebook, será aplicada determinada promoção no pedido feito por ele.

Com isso, a plataforma permite que você tome determinadas ações de acordo com a origem do tráfego da loja.

>ℹ️ Na tela de **Gerenciamento de Pedidos**, apenas o utm_source está [disponível para filtro](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos).

### Tipos de UTM

Conceitualmente, a VTEX trabalha com três tipos de UTM:
- __utm_source__: a origem do tráfego, ou seja, de qual site, anunciante ou publicação veio o usuário.
- __utm_medium__: a mídia de publicidade ou marketing usada para chegar ao seu site (exemplos: banner, cpc, newsletter).
- __utm_campaign__: o nome da campanha que define determinado contexto de marketing (exemplos: natal, lancamento, promo01).

Mas você pode usar essas UTMs da maneira que melhor atender suas regras de negócio.

Portanto, na prática, o que importa é definir a ação correta para os valores desses parâmetros.

>❗ Atenção: caracteres **especiais não** devem ser utilizados em UTMs. Essas variáveis  só funcionam corretamente caso sejam utilizados caracteres ** alfanuméricos, hífens e underscore **.

Para maiores informações sobre problemas de adicionar UTMs no carrinho, acesse [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Artigos relacionados

- [O que são as UTMs internas utmi_cp, utmi_pc e utmi_p](/pt/faq/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p)
