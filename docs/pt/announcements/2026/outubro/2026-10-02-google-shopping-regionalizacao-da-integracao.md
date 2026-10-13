---
title: 'Google Shopping: regionalização da integração'
createdAt: 2026-10-02T12:00:00.000Z
updatedAt: 2026-10-09T12:00:00.000Z
contentType: updates
productTeam: Channels
slugEN: 2026-10-09-google-shopping-regionalization-of-the-integration
locale: pt
announcementSynopsisPT: 'A integração Google Shopping passa a enviar frete, SLA, preço e disponibilidade por região a partir das zonas de logística da loja.'
tags:
  - Nova funcionalidade
  - Marketplace
---

Desenvolvemos a regionalização do Google Shopping para que os anúncios e as listagens de lojas VTEX que utilizam a integração com o Google Shopping possam enviar frete, SLA, preço e disponibilidade de acordo com a região do comprador. A funcionalidade está disponível para lojas com a [integração Google Shopping](/pt/docs/tracks/google-shopping-marketplace) configurada e com [políticas de envio](/pt/docs/tutorials/politica-de-envio) ativas, com tabela de frete, para a política comercial da integração. As zonas que recortam o país para o Google, inclusive as **Zonas comuns**, são fixas e já vêm sincronizadas da Logística.

O objetivo desta funcionalidade é disponibilizar uma experiência de compra mais fluida, em que o comprador tem acesso ao preço, à disponibilidade, ao tempo de entrega e ao frete desde o primeiro contato com o anúncio.

## O que mudou?

Antes, a integração enviava cada SKU em escopo nacional, um preço e uma disponibilidade para o país, sem frete nem SLA por região. Agora, anúncios e listagens podem apresentar frete, SLA, preço e disponibilidade de acordo com a região do comprador. Esses valores saem de uma simulação baseada nas políticas de envio da loja, por isso promoções de preço e de frete também entram no cálculo do que é enviado ao Google.

Duas opções podem ser ativadas, nesta ordem:

- **Google Shipping:** envia ao Google o frete e o SLA de entrega já calculados pela tabela de frete da VTEX, por região. O preço e a disponibilidade continuam nacionais. Os anúncios e as listagens podem exibir o valor do frete e o SLA estimado, inclusive frete grátis ou entrega rápida dependendo de promoções da loja.
- **RAAP** (Regional Availability & Pricing): regionaliza o preço e a disponibilidade de cada SKU que a integração já envia em escopo nacional. 

> O RAAP só pode ser ativado com o Google Shipping ativo e quando a loja tem variação real de preço ou estoque por região.

## O que precisa ser feito?

A funcionalidade está disponível para todas as lojas VTEX com integração ativa com o Google Shopping. Para utilizar a funcionalidade, a loja precisa ter políticas de envio com tabela de frete configurada e ativa para a política comercial da integração, e ativar as zonas desejadas na nova página.

Lojas em CMS Portal (Legado) ou headless precisam adaptar a página de produto para ler o parâmetro `region_id` que o Google acrescenta na URL. Sem essa leitura, o RAAP não se reflete no storefront. Saiba mais em [Adapting headless storefronts to Google RAAP](https://developers.vtex.com/docs/guides/adapting-headless-storefronts-to-google-raap).

Para mais informações de como realizar cada configuração, acesse o tutorial [Regionalização do Google Shopping](/pt/docs/tutorials/regionalizacao-do-google-shopping).
