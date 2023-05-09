---
title: Configurar o Google Tag Manager
id: frequentlyAskedQuestions_616
createdAt: 2019-01-24T20:45:56.745Z
updatedAt: 2023-05-03T15:25:43.535Z
publishedAt: 2023-05-03T15:25:43.535Z
firstPublishedAt: 2019-01-24T22:13:48.493Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: integracao-com-o-google-tag-manager
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

O Google Analytics deverá ser configurado em duas tags: uma para o monitoramento de visitas e outra para monitoramento das conversões do ecommerce. Cada tag possui gatilhos diferentes, que devem ser configurados conforme os procedimentos das seções abaixo.

### Visitas

Para configurar a tag de monitoramento de visitas na sua loja, siga o passo a passo abaixo:

1. No painel do [Google Tag Manager](https://tagmanager.google.com/#/home), clique em __Tags__.
2. Clique em `New`.
3. Nomeie a tag de maneira que facilite a distinção entre as demais tags, seguindo um padrão como `{nome da ferramenta} - {função} - {variação}`. Exemplo: para a tag de monitoramento de visitas, `GA - Configuration`. Para a tag de monitoramento de ecommerce, `GA - Purchase`.
4. Na configuração da Tag, clique na opção __Google Analytics: GA4 Configuration__.
5. Em __Measurement ID__, insira a ID do Google Analytics 4, no formato `G-xxxxxxx`.
6. Verifique se a opção __Send a page view event when this configuration loads__ está marcada.
7. Em __Triggering__, selecione a opção __All Pages__.
8. Também em __Triggering__, adicione a opção __All history changes__.
9. Clique em `Salvar` para finalizar a criação da Tag.

![Configuração de tag](//images.ctfassets.net/alneenqid6w5/7ugAD5EjZKtBlnLlmmtVqA/7d8c39a61470616116471ac54b1d2bc1/Tag_configuration.png)

![Configuração Google History GA4](//images.ctfassets.net/alneenqid6w5/2EvCfzzuyZ4wAMLHt5Q0aN/147cff6c63b2cd58e0c1c952adfbdacf/All_history_changes_google.png)

### Conversões

Para configurar a tag de monitoramento de Conversões na sua loja, siga o passo a passo abaixo:

1. No painel do [Google Tag Manager](https://tagmanager.google.com/#/home), clique em __Tags__.
2. Clique em `New`.
3. Nomeie a tag de maneira que facilite a distinção entre as demais tags, seguindo um padrão como `{nome da ferramenta} - {função} - {variação}`. Exemplo: para a tag de monitoramento de conversões, `GA - Purchase`.
4. Na configuração __Tag Type__, clique na opção __Google Analytics: GA4 Event__.
5. Na configuração __Configuration Tag__, escolha a tag __GA - Config__ criada anteriormente em [Visitas](#visitas).
6. Em __Event Name__, escolha a variável `{{Event}}`.
7. Em __Triggering__, clique em `+` para criar um novo gatilho.
8. Nomeie o gatilho como `orderConfirmation - orderPlaced`.
9. Escolha o tipo __Custom Event__.
10. Escreva `purchase` no campo __Event name__.
11. Em __This trigger fires on__, selecione __Some Custom Events__.
12. Em __Fire this trigger when an Event occurs and all of these conditions are true__, selecione as opções __Event__, __equals__, e __purchase__.
13. Clique em `Salvar` para finalizar a criação do gatilho.
14. Clique em `Salvar` novamente para finalizar a criação da Tag.

## Editar configurações de Checkout

Depois, você deve configurar o código de identificação da loja no Tag Manager na VTEX seguindo os passos abaixo: 

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Checkout__.
4. No campo __Google Tag Manager__, insira o código de identificação da loja, no formato `GTM-XXXX`, ilustrado na imagem abaixo.
5. Clique em `Salvar`. 

![Google Tag Manager](//images.ctfassets.net/alneenqid6w5/2AVIJtSgxsTDl4mVRORj41/193fa3039dd13eba99544247affae5a6/Google_Tag_Manager_-_PT.PNG)

Para verificar eventos (acionadores) e variáveis disponíveis nas páginas, que serão usados nas tags, você pode utilizar o modo de visualização do Google Tag Manager. Consulte a [documentação do Google Tag Manager](https://support.google.com/tagmanager/answer/6107056?hl=pt-BR) para mais detalhes.

<div class="alert alert-info">
É possível usar o *pixel app* do Facebook junto ao Google Tag Manager da sua loja para acompanhar e otimizar os resultados das suas campanhas de marketing na rede social. Aprenda o passo a passo <a href="https://www.facebook.com/business/help/1021909254506499">na documentação do Facebook</a>.
</div>

## VTEX IO: instalar pixel app do Google Tag Manager

Se a sua loja utiliza [VTEX IO](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), além da configuração, será necessário instalar uma nova versão do app Google Tag Manager. Para mais informações, acesse [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager).

Esta etapa não é necessária para lojas que utilizam [CMS - Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj).

