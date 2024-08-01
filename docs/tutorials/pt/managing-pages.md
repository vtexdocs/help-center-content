---
title: 'Gerenciando Páginas no Headless CMS'
id: 3DO6rBhZ1p3zndnFu5BgRt
status: PUBLISHED
createdAt: 2023-03-23T19:46:08.568Z
updatedAt: 2024-06-17T12:55:20.070Z
publishedAt: 2024-06-17T12:55:20.070Z
firstPublishedAt: 2023-03-23T20:06:47.380Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: gerenciando-paginas
locale: pt
legacySlug: gerenciando-paginas-beta
subcategory: 27t6x0lngvjI3bnUg5AgEO
---

No **Headless CMS**, você pode gerenciar todas as rotas de URL e modelos de página do site da sua loja, incluindo as páginas `Global Alert Page`, `Page` and `Product Page`. Você também pode criar e associar páginas personalizadas a modelos pré-definidos e gerenciar páginas criadas diretamente no código-fonte do seu projeto de storefront.

## Visão geral

![Novas páginas ](//images.ctfassets.net/alneenqid6w5/7cftK7sS2epeqGjY6m0Cmj/5e6068b5ae50645a857916be2d6e7caa/novas_pgs._pt.png)

| Opção               | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| Criar documento   | Cria uma nova página baseada nas opções disponíveis, por exemplo, `Product Page` ou `Home`.  |
| Configurações (⚙️) | Abre um modal com as configurações do projeto separadas em três abas: <ul><li>**Geral:** permite editar o ID do projeto e as configurações de API ou arquivar o projeto.</li> <li>**Content-Types:** Salva os content types criados no código da loja.</li><li>**Build:** permite conectar o projeto CMS ao código-fonte via webhooks, configurando os tipos de conteúdo e as seções.</li></ul> |
| Pesquisar      | Pesquisa por páginas específicas dentro do projeto. |
| Status      | Filtra as páginas de acordo com o seu status: <ul><li><code>Published</code>: Páginas publicadas e já disponíveis na loja.</li> <li><code>Draft</code>: Páginas que estão em rascunho, em desenvolvimento, e ainda não foram publicadas.</li></ul>|
| Tipo      | Filtra as páginas de acordo com o tipo de conteúdo (content type). Os tipos de conteúdo são definidos no código da sua loja. Para obter mais informações, consulte [Adding Content Types to the Headless CMS](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-2-adding-content-types-to-the-headless-cms). |

## Criar uma nova página

Para criar e gerenciar uma página, siga estas etapas:

1. No Admin VTEX, acesse **Headless CMS**.
<div class="alert alert-warning">
  Certifique-se de estar no projeto correto. Caso contrário, vá até o menu <b>Projeto</b> no canto superior esquerdo, selecione o nome do projeto em que deseja criar a página e continue no passo 2.
</div>
2. Clique em `Criar documento` e selecione o tipo de página desejado. 

3. Em `Untitled`, nomeie a página.

4. Clique em **Seções** e selecione a seção desejada.
![Gif - páginas disponíveis](//images.ctfassets.net/alneenqid6w5/1JOLEO3RErUiJ8AYroKwTe/3934fab358660137fdd190830e77dc80/Portugu__s_gif_das_paginas.gif)
5. Adicione mais seções, se necessário, e preencha-as.

6. Clique em `Publicar`.

Para duplicar `Duplicar` ou `Eliminar` a página,  clique no menu **Mais ações** (`⋮`) da página.
