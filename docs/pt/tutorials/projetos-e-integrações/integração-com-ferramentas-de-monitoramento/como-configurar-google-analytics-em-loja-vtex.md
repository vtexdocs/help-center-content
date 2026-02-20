---
title: 'Configurar Google Analytics 4 em loja VTEX'
id: G2P0rmSrEiqCcmUMyUUwG
status: PUBLISHED
createdAt: 2017-07-30T22:53:46.285Z
updatedAt: 2023-07-17T13:35:10.259Z
publishedAt: 2023-07-17T13:35:10.259Z
firstPublishedAt: 2017-07-30T23:24:21.394Z
contentType: tutorial
productTeam: Others
author: 523NSmHfn2IKEoiy2Q44YS
slugEN: how-to-setup-google-analytics-in-vtex-store
legacySlug: como-configurar-google-analytics-em-loja-vtex
locale: pt
subcategoryId: 1luKrYptdi8WoMYckakUaM
---

O [Google Analytics 4 (GA4)](https://support.google.com/analytics/answer/10089681) é a versão atual da ferramenta de análise de dados do Google. Para obter dados sobre a navegação em sua loja VTEX pelo Google Analytics 4, você precisa:

1. [Configurar Google Analytics 4](#configurar-google-analytics-4)
2. [Configurar Google Tag Manager](#configurar-google-tag-manager)

> ℹ️ A partir de 1º de julho de 2023, o Google Analytics 4 vai substituir o Universal Analytics, versão anterior da ferramenta. Portanto, é necessário seguir este tutorial para adaptar a sua loja. Confira detalhes sobre a mudança [neste comunicado do Google](https://support.google.com/analytics/answer/11583528).

## Configurar Google Analytics 4

Se você já utilizava a versão anterior do Google Analytics (Universal Analytics) na sua loja, é necessário adicionar uma propriedade do GA4. Para isso, siga esta documentação do Google: [Adicionar uma propriedade do Google Analytics 4 (a um site que já tenha o Google Analytics)](https://support.google.com/analytics/answer/9744165?hl=pt-BR&ref_topic=9303319#zippy=%2Cneste-artigo).

Se a sua loja não tem a versão anterior do Google Analytics configurada, siga as instruções descritas nesta documentação do Google: [GA4 - Configurar o Google Analytics para um site e/ou app](https://support.google.com/analytics/answer/9304153).

Em ambos os casos, armazene o código de identificação da propriedade no Google Analytics, no formato `G-xxxxxxx`, obtido no Google Analytics. Ele será utilizado na etapa seguinte, durante as configurações do Google Tag Manager.

## Configurar Google Tag Manager

Feitas as configurações necessárias na sua conta Google Analytics, será preciso alterar as configurações do Google Tag Manager para detectar os eventos da sua loja. Para isso, siga os passos descritos em [Configurar o Google Tag Manager](/pt/docs/tutorials/integracao-com-o-google-tag-manager).

Se a sua loja utiliza [VTEX IO - Store Framework](/pt/docs/tracks/cms-vtex-io), além da configuração, será necessário configurar uma nova versão do app Google Tag Manager. Para mais informações, acesse [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

