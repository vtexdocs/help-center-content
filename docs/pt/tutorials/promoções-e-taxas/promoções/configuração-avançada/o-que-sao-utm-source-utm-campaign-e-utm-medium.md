---
title: 'Rastreamento de campanhas com parâmetros UTM'
id: 2wTz7QJ8KUG6skGAoAQuii
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.092Z
updatedAt: 2025-05-26T16:32:16.492Z
publishedAt: 2025-05-26T16:32:16.492Z
firstPublishedAt: 2019-01-24T22:11:24.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: what-are-utm-source-utm-campaign-and-utm-medium
legacySlug: o-que-sao-utm_source-utm_campaign-e-utm_medium
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

UTMs (Urchin Tracking Modules) são parâmetros de URL normalmente usados em contextos de marketing para rastrear o tráfego que chega às páginas do site.

> ℹ️ Os parâmetros UTM não são criados nem gerenciados diretamente na plataforma VTEX. Eles devem ser adicionados manualmente às URLs das campanhas de marketing. A análise dos dados de tráfego com base nesses parâmetros deve ser feita por ferramentas externas, como o [Google Analytics](https://analytics.google.com).

Por exemplo, ao clicar em um anúncio do Facebook, o usuário será direcionado para uma URL contendo o parâmetro `utm_source=fb`.

Também é possível associar promoções específicas a determinados valores de UTM. Ou seja, sempre que um cliente vier de uma URL com UTM configurada, uma promoção pode ser aplicada à compra realizada e identificada pelo marketplace.

### Tipos de UTM
É permitido usar três tipos de UTM para rastreamento do trafego:

- **utm_source:** identifica a origem do tráfego, como um site, anunciante ou publicação.
- **utm_medium:** especifica o meio de divulgação, como banner, CPC (custo por clique) ou newsletter.
- **utm_campaign:** define o nome da campanha, indicando o contexto de marketing, como natal, lançamento ou promoção.

> ℹ️ Na tela de Gerenciamento de Pedidos, apenas o parâmetro `utm_source` está [disponível para filtro](/pt/tutorial/como-filtrar-pedidos).

> ❗ Não utilize caracteres especiais nos valores de UTM, por exemplo, `utm_source=#fb`. Aceitam-se apenas caracteres alfanuméricos, hífens e underscores.

Para mais informações sobre problemas relacionados à aplicação de UTMs no carrinho, consulte o artigo [Why are the UTMs not being applied to the cart?](https://developers.vtex.com/vtex-rest-api/docs/check-marketing-utms-used-at-checkout#why-are-the-utms-not-being-applied-to-the-cart).

### Artigos relacionados
- [O que são as UTMs internas utmi_cp, utmi_pc e utmi_p](/pt/faq/o-que-sao-as-utms-internas-utmi_cp-utmi_pc-e-utmi_p)

