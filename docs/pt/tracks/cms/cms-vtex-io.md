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
trackSlugPT: cms
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

O **[Site Editor](/pt/tutorial/site-editor-overview--299Dbeb9mFczUTyNQ9xPe1)** é uma interface gráfica para o gerenciamento do conteúdo do storefront (frente de loja). Ele permite criar, editar, publicar e agendar mudanças nos seus componentes e no comportamento do storefront.

Por meio de uma interface intuitiva diretamente no Admin VTEX, o Site Editor reflete os blocos definidos no [Store Theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-store-theme), possibilitando que qualquer pessoa altere o conteúdo e o layout da loja sem precisar editar o código.

![site-editor-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/cms-vtex-io_1.png)

## Layout - Sites and Channels

Lojas desenvolvidas com Store Framework também devem configurar o [binding da loja](/en/tutorial/what-is-cms-layout--EmO8u2WBj2W4MUQCS8262#binding), através da pasta **[Sites and channels](/pt/tutorial/o-que-e-o-cms-layout--EmO8u2WBj2W4MUQCS8262#sites-and-channels)** na seção **Layout** do Admin VTEX.

Binding é o processo utilizado para vincular o seu site a uma loja. Para mais detalhes, consulte o artigo [Vincular uma loja a uma estrutura de pastas do CMS (binding)](/pt/tutorial/vincular-um-account-name-a-um-website-binding).

![layout-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/cms-vtex-io_2.png)

<div class = "alert alert-info"> Com exceção da pasta <b>Sites and channels</b>, todos os demais recursos da seção <b>Layout</b> do Admin VTEX estão disponíveis apenas para lojas CMS Portal Legado. </div> 

## Banners

Banners é a funcionalidade responsável por exibir banners, como ações promocionais, na página de resultado de busca do cliente. Isso é feito por meio da associação entre as palavras e filtros selecionados na busca e da configuração de banners na sua loja.

Para saber como utilizar esse módulo, acesse o tutorial de [Banners](/pt/v4/docs/banners--51nNoJABZ5NtvJQCucCXCy ).

## Páginas

O módulo **Páginas** é onde as páginas do seu site são gerenciadas. No Admin VTEX, as páginas são divididas em **Padrão**, **Produto**, **Coleções de produtos** e **Não encontrado (404)**, nas quais você pode criar novas URLs e vinculá-las a um template já definido no [código do tema da loja](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-4-configuringtemplates).

![cms-store-framework-paginas-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/cms-vtex-io_3.gif)

Essa seção também contém a página **Redirecionamentos**, que permite configurar redirecionamentos de uma URL da loja para outra mais relevante. 

![cms-store-framework-redirecionamentos-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/cms-vtex-io_4.png)

Para saber mais sobre este módulo, acesse o tutorial de [Páginas](/pt/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc).

## Estilos

Esta funcionalidade permite que você defina a tipografia e a paleta de cores do site da sua loja.

<div class="alert alert-warning">Esse recurso só funciona em <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-creating-a-production-workspace">workspaces de produção</a>.</div>

Para saber como utilizar esse módulo, acesse o tutorial de [Estilos](/pt/tutorial/estilos-visao-geral--v0Db5ohEKSFIkTzSwCjVi).

## Mídia

Mídia é o módulo responsável por gerenciar os arquivos de mídia de sua loja, como imagens e vídeos.

![cms-store-framework-media-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/cms/cms-vtex-io_5.png)

Para saber mais sobre este módulo, acesse [Mídia- Visão geral](/pt/tutorial/midia-visao-geral--31fhjHTt4TBoo50AmGQ9b2).

## Saiba mais

- **[Gerenciando conteúdo de página e template](/pt/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37):** Construa a frente de sua loja de acordo com as necessidades de seu negócio, usando uma interface amigável a seu favor.

- **[Gerenciando conteúdo por binding](/pt/tutorial/gerenciando-conteudo-por-binding--5CZjZPMqi0ZNpuqzF6AUOn):** Personalize estrategicamente a aparência da sua loja de acordo com a localização dos usuários para aumentar o acesso e as taxas de vendas.
