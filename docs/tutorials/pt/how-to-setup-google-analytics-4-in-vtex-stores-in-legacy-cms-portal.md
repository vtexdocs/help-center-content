---
title: Configurar Google Analytics 4 em loja VTEX no CMS Portal Legado
id: 1uGePrN9CGLdrmGAqP44Qq
status: DRAFT
createdAt: 2023-04-06T14:19:57.340Z
updatedAt: 2023-04-14T13:24:52.178Z
publishedAt: 
firstPublishedAt: 2023-04-06T14:27:39.314Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: configurar-google-analytics-4-em-loja-vtex-no-cms-portal-legado
legacySlug: configurar-google-analytics-4-em-loja-vtex-no-cms-portal-legado
subcategory: 1luKrYptdi8WoMYckakUaM
---

<div class="alert alert-info">
  <p>Este artigo se aplica somente a lojas que utilizam o <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj">CMS - Portal Legado</a>.</p>
</div>

O [Google Analytics 4](https://support.google.com/analytics/answer/10089681) (GA4) é a versão atual da ferramenta de análise de dados do Google.  Para obter dados sobre a navegação em sua loja VTEX pelo Google Analytics 4, você precisa:

- [Configurar Google Analytics 4](#configurar-google-analytics-4)
- [Editar configurações do Checkout](#editar-configuracoes-do-checkout)

<div class="alert alert-warning">
  <p>A partir de 1º de julho de 2023, o Google Analytics 4 vai substituir o Universal Analytics, versão anterior da ferramenta. Portanto, é necessário seguir este tutorial para adaptar a sua loja. Confira detalhes sobre a mudança <a href="https://support.google.com/analytics/answer/11583528">neste comunicado do Google</a>.</p>
</div>

## Configurar Google Analytics 4

Se você já utilizava a versão anterior do Google Analytics (Universal Analytics) na sua loja, é necessário adicionar uma propriedade do GA4. Para isso, siga esta documentação do Google: [Adicionar uma propriedade do Google Analytics 4 (a um site que já tenha o Google Analytics)](https://support.google.com/analytics/answer/9744165?hl=pt-BR&ref_topic=9303319#zippy=%2Cneste-artigo).

Se a sua loja não tem a versão anterior do Google Analytics configurada, siga as instruções descritas nesta documentação do Google: [[GA4] Configurar o Google Analytics para um site e/ou app](https://support.google.com/analytics/answer/9304153).

Em ambos os casos, armazene o código de identificação da propriedade no Google Analytics, no formato `G-xxxxxxx`, obtido no Google Analytics. Ele será utilizado na etapa seguinte, durante as configurações do Checkout da VTEX.

## Editar configurações do Checkout

Feitas as configurações necessárias na sua conta Google Analytics, será preciso alterar as configurações do Checkout no Admin VTEX para detectar os eventos da sua loja. Siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Checkout**, ou digite **Checkout** na barra de busca no topo da página.
2. Clique no ícone de engrenagem do site desejado.
3. Clique em **Checkout**.
4. No campo **Google Analytics 4**, insira o código de identificação da propriedade no Google Analytics, no formato `G-xxxxxxx`. Para saber como encontrar esse código, confira a [documentação do Google](https://support.google.com/analytics/answer/9304153#zippy=%2Cencontrar-seu-id-da-tag-do-google-para-qualquer-plataforma-que-aceite-um-id-g-:~:text=Se%20voc%C3%AA%20quiser%20usar%20o%20Google%20Analytics%20em%20um%20servi%C3%A7o%20ou%20plataforma%20que%20aceita%20um%20ID%20de%20tag%20do%20Google%20(na%20maioria%20dos%20casos%2C%20um%20ID%20%22G%2D%22)%2C%20siga%20estas%20instru%C3%A7%C3%B5es%20para%20encontrar%20o%20c%C3%B3digo.%20Em%20seguida%2C%20insira%20o%20ID%20%22G%2D%22%20no%20campo%20que%20a%20plataforma%20ou%20o%20servi%C3%A7o%20oferece).
5. Clique em `Salvar`.
