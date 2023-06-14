---
title: 'Configurar o Google Tag Manager'
id: frequentlyAskedQuestions_616
status: PUBLISHED
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2023-05-12T15:09:43.299Z
publishedAt: 2023-05-12T15:09:43.299Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: integracao-com-o-google-tag-manager
locale: pt
legacySlug: integracao-com-o-google-tag-manager
subcategory: 6XAvmMxp7yyY06ewYMuggs
---

<div class="alert alert-warning">
Se sua loja é desenvolvida com base no <a href="https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2">VTEX IO</a>, para fazer a integração funcionar em todas as páginas é necessário também instalar o aplicativo do pixel do Google Tag Manager. Veja como fazer isso na <a href="https://developers.vtex.com/vtex-developer-docs/docs/google-tag-manager">documentação sobre a app</a>.
</div>

O Google Tag Manager é um sistema de gerenciamento de tags criado pelo Google para gerenciar tags JavaScript e HTML usadas para tracking e analytics de sites da web.

Na VTEX, a integração com o Google Tag Manager é nativa, o que simplifica a configuração da ferramenta para analisar dados de navegação da loja.Este artigo explica os pré-requisitos e os passos necessários para essa configuração, nas seções a seguir:

- [Pré-requisitos](#pre-requisitos)
- [Configurar tags no Google Tag Manager](#configurar-tags-no-google-tag-manager)
- [Editar configurações de Checkout](#editar-configurações-de-checkout)
- [VTEX IO: instalar pixel app do Google Tag Manager](#vtex-io-instalar-pixel-app-do-google-tag-manager)

## Pré-requisitos

Antes de iniciar a configuração do Google Tag Manager, você precisa realizar os seguintes passos:

- Criar uma conta no [Google Tag Manager](http://www.google.com/tagmanager).
- Configurar Google Analytics 4, ou seja, realizar a primeira etapa descrita no guia [Configurar Google Analytics 4 em loja VTEX](https://help.vtex.com/pt/tutorial/como-configurar-google-analytics-em-loja-vtex).

## Configurar tags no Google Tag Manager

Por meio das tags, o Google Analytics permite que você acesse dados importantes a respeito da performance de sua loja, tais como, número de visitas e conversões. Para mais informações, acesse [Setting up GA4 event](https://developers.vtex.com/docs/guides/vtex-io-documentation-setting-up-google-tag-manager#step-by-step).

## Editar configurações de Checkout

Depois, você deve configurar o código de identificação da loja no Tag Manager na VTEX seguindo os passos abaixo: 

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. No campo __Google Tag Manager__, insira o código de identificação da loja, no formato `GTM-XXXX`, ilustrado na imagem abaixo.
5. Clique em `Salvar`. 

![Google Tag Manager](https://images.ctfassets.net/alneenqid6w5/2AVIJtSgxsTDl4mVRORj41/193fa3039dd13eba99544247affae5a6/Google_Tag_Manager_-_PT.PNG)

Para verificar eventos (acionadores) e variáveis disponíveis nas páginas, que serão usados nas tags, você pode utilizar o modo de visualização do Google Tag Manager. Consulte a [documentação do Google Tag Manager](https://support.google.com/tagmanager/answer/6107056?hl=pt-BR) para mais detalhes.

<div class="alert alert-info">
É possível usar o *pixel app* do Facebook junto ao Google Tag Manager da sua loja para acompanhar e otimizar os resultados das suas campanhas de marketing na rede social. Aprenda o passo a passo <a href="https://www.facebook.com/business/help/1021909254506499">na documentação do Facebook</a>.
</div>

## VTEX IO: instalar pixel app do Google Tag Manager

Se a sua loja utiliza [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), além da configuração, será necessário instalar uma nova versão do app Google Tag Manager. Para mais informações, acesse [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

Esta etapa não é necessária para lojas que utilizam [CMS - Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

