---
title: 'Instalar o Intelligent Search'
id: 4mwZGH252R3CCPRim8v0F3
status: PUBLISHED
createdAt: 2024-09-06T20:00:06.864Z
updatedAt: 2024-09-06T20:39:37.552Z
publishedAt: 2024-09-06T20:39:37.552Z
firstPublishedAt: 2024-09-06T20:07:32.752Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: installing-intelligent-search
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Para configurar e começar a utilizar o Intelligent Search, é necessário ter alguns aplicativos de busca instalados:

* `admin-search`: aplicativo que permite configurar todas as funcionalidades disponibilizadas no Admin pelo Intelligent Search.  
* `search-resolver`: aplicativo principal de backend para o Intelligent Search, responsável por lidar com todas as consultas de busca.

Algumas lojas possuem os aplicativos por padrão, enquanto outras precisam seguir as etapas de instalação. Veja a seguir como verificar se os apps estão instalados e, se necessário, prosseguir com a instalação.

## Verificar o Edition App

Um [Edition App](https://developers.vtex.com/docs/guides/vtex-io-documentation-edition-app) é um conjunto predefinido de aplicativos essenciais que facilitam o desenvolvimento de uma loja. A depender do Edition App da sua loja, você pode ter os aplicativos do Intelligent Search por padrão ou precisar instalá-los, conforme a tabela:

| Edition App | Descrição |
| :---- | :---- |
| `vtex.edition-store@5.x` | O Intelligent Search já está incluído, por isso não é necessário instalar os aplicativos deste guia. Prossiga para [Iniciar integração com o Catálogo](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/2wBsO1AKTQZ04idbTKszI4). |
| `vtex.edition-store@4.x` | Você precisa instalar os aplicativos de busca manualmente. Siga as instruções para [Instalar os aplicativos de busca](#instalar-os-aplicativos-de-busca). |
| `vtex.edition-store@3.x` | Você precisa instalar os aplicativos de busca manualmente. Siga as instruções para [Instalar os aplicativos de busca](#instalar-os-aplicativos-de-busca). |
| Versões anteriores da `vtex.edition-store` | Não são compatíveis com o Intelligent Search. Se você deseja migrar para uma versão compatível, entre em contato com o [Suporte](/pt/support). |
| `vtex.edition-business@0.x` | Não é compatível com o Intelligent Search. Se você deseja migrar para uma versão compatível, entre em contato com o [Suporte](/pt/support). |

Consulte a sua equipe de desenvolvimento para verificar qual é o Edition App atual da sua loja. Para isso, é necessário utilizar o comando `vtex edition get` no [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), conforme a [referência de comandos](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-command-reference\#edition-get) disponível no Developer Portal.

## Instalar os aplicativos de busca

Se a sua loja utiliza `vtex.edition-store@3.x` ou `vtex.edition-store@4.x`, solicite à sua equipe de desenvolvimento a instalação do `admin-search` e do `search-resolver`.

Para instalar os aplicativos, é necessário utilizar o comando `vtex install vtex.admin-search vtex.search-resolver` no [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference), conforme o [guia para implementação do Intelligent Search](https://developers.vtex.com/docs/guides/vtex-io-documentation-2-prerequesites\#step-2-implementing-the-vtex-intelligent-search).

