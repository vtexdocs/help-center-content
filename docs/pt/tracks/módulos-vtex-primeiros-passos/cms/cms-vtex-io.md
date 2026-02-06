---
title: 'Store Framework CMS'
id: 4yB9wSl79cArd68aRBnBZ2
status: PUBLISHED
createdAt: 2022-01-10T17:28:27.583Z
updatedAt: 2024-11-18T18:06:20.182Z
publishedAt: 2024-11-18T18:06:20.182Z
firstPublishedAt: 2022-01-10T20:13:28.409Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: cms-vtex-io
locale: pt
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugEN: cms
order: 2
---

Lojas desenvolvidas com Store Framework possuem integração com [Site Editor](https://developers.vtex.com/docs/guides/working-with-site-editor), que funciona como um Content Management System - CMS (Sistema de Gerenciamento de Conteúdo, em português). Além disso, outras funcionalidades estão disponíveis, como o gerenciamento de Páginas, Estilos e Banners.

Para criar e configurar o site da sua loja Store Framework usando o CMS, você usará os seguintes recursos:

- [Site Editor](#site-editor)
- [Layout - Sites and Channels](#layout-sites-and-channels)
- [Banners](#banners)
- [Páginas](#paginas)
- [Estilos](#estilos)
- [Mídia](#midia)

## Site Editor

O **[Site Editor](/pt/docs/tutorials/site-editor-visao-geral)** é uma interface gráfica para o gerenciamento do conteúdo do storefront (frente de loja). Ele permite criar, editar, publicar e agendar mudanças nos seus componentes e no comportamento do storefront.

Por meio de uma interface intuitiva diretamente no Admin VTEX, o Site Editor reflete os blocos definidos no [Store Theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-store-theme), possibilitando que qualquer pessoa altere o conteúdo e o layout da loja sem precisar editar o código.

![site-editor-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-vtex-io_1.png)

## Layout - Sites and Channels

Lojas desenvolvidas com Store Framework também devem configurar o [binding da loja](/pt/docs/tutorials/o-que-e-o-cms-layout#binding), através da pasta **[Sites and channels](/pt/docs/tutorials/o-que-e-o-cms-layout#sites-and-channels)** na seção **Layout** do Admin VTEX.

Binding é o processo utilizado para vincular o seu site a uma loja. Para mais detalhes, consulte o artigo [Vincular uma loja a uma estrutura de pastas do CMS (binding)](/pt/docs/tutorials/vincular-um-account-name-a-um-website-binding).

![layout-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-vtex-io_2.png)

> ℹ️ Com exceção da pasta **Sites and channels**, todos os demais recursos da seção **Layout** do Admin VTEX estão disponíveis apenas para lojas CMS Portal (Legado). 

## Banners

Banners é a funcionalidade responsável por exibir banners, como ações promocionais, na página de resultado de busca do cliente. Isso é feito por meio da associação entre as palavras e filtros selecionados na busca e da configuração de banners na sua loja.

Para saber como utilizar esse módulo, acesse o tutorial de [Banners](/pt/v4/docs/banners--51nNoJABZ5NtvJQCucCXCy).

## Páginas

O módulo **Páginas** é onde as páginas do seu site são gerenciadas. No Admin VTEX, as páginas são divididas em **Padrão**, **Produto**, **Coleções de produtos** e **Não encontrado (404)**, nas quais você pode criar novas URLs e vinculá-las a um template já definido no [código do tema da loja](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-4-configuringtemplates).

![cms-store-framework-paginas-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-vtex-io_3.gif)

Essa seção também contém a página **Redirecionamentos**, que permite configurar redirecionamentos de uma URL da loja para outra mais relevante. 

![cms-store-framework-redirecionamentos-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-vtex-io_4.png)

Para saber mais sobre este módulo, acesse o tutorial de [Páginas](/pt/docs/tutorials/paginas-visao-geral).

## Estilos

Esta funcionalidade permite que você defina a tipografia e a paleta de cores do site da sua loja.

> ⚠️ Esse recurso só funciona em [workspaces de produção](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-production-workspace).

Para saber como utilizar esse módulo, acesse o tutorial de [Estilos](/pt/docs/tutorials/estilos-visao-geral).

## Mídia

Mídia é o módulo responsável por gerenciar os arquivos de mídia de sua loja, como imagens e vídeos.

![cms-store-framework-media-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/cms/cms-vtex-io_5.png)

Para saber mais sobre este módulo, acesse [Mídia- Visão geral](/pt/docs/tutorials/midia-visao-geral).

## Saiba mais

- **[Gerenciando conteúdo de página e template](/pt/docs/tutorials/gerenciando-conteudo-de-pagina-e-template):** Construa a frente de sua loja de acordo com as necessidades de seu negócio, usando uma interface amigável a seu favor.

- **[Gerenciando conteúdo por binding](/pt/docs/tutorials/gerenciando-conteudo-por-binding):** Personalize estrategicamente a aparência da sua loja de acordo com a localização dos usuários para aumentar o acesso e as taxas de vendas.
