---
title: Gerenciando content types do tipo Singleton
id: VBibMN1BqV2OFmavUFCdo
status: PUBLISHED
createdAt: 2023-04-05T17:55:26.748Z
updatedAt: 2023-04-06T19:11:57.614Z
publishedAt: 2023-04-06T19:11:57.614Z
firstPublishedAt: 2023-04-06T19:11:57.614Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: gerenciando-content-types-do-tipo-singleton
legacySlug: gerenciando-content-types-do-tipo-singleton
subcategory: 27t6x0lngvjI3bnUg5AgEO
---

Content types do tipo Singleton permite a criação e gerenciamento de uma única página, garantindo que apenas uma página desse content type exista no Headless CMS.

Esse content type evita conflitos e inconsistências que podem ocorrer quando várias páginas do mesmo content type são criadas. Por exemplo, você poder usar o Singleton para a Página Inicial (Home) da sua loja, garantindo que exista apenas uma Página Inicial e todas as atualizações e solicitações feitas a essa página sempre retornem o mesmo resultado.
![singleton-br](https://images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/7030fc9c4424018f377c56ad3c02c25e/singleton-br.gif)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Para criar um content type Singleton, verifique com o seu time de desenvolvimento se a propriedade <i>isSingleton</i> já está implementada ou peça para que o time siga as intruções em <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using `isSingleton` in a content type</a> para adicioná-la ao content type desejado.
</div>

## Criando o Singleton
1. Acesse o **Admin > Storefront > Headless CMS**.
2. Selecione `CRIAR NOVO` e escolha o nome do content type singleton, por exemplo, **Home**.
3. Edite a página como desejar com novas seções.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
É possível criar o Singleton apenas uma vez. Se você já criou a página Singleton, ela não aparecerá mais na lista de content types.
</div>

Após terminar de editar a página, você pode publicar o conteúdo selecionando `Publicar` ou salvando a página como rascunho.
Para editar ou excluir um conteúdo, verifique as seções a seguir.

## Editando o Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Selecione o Singleton criado, por exemplo **Home**.
3. Na página **Home**, edite como desejar adicionando novas seções.

## Deletando o Singleton
1. Na página do Singleton, selecione `mais`(menu kebab) e clique `Excluir`.
2. Clique  `EXCLUIR` e, depois, clique em `VOLTAR PARA PÁGINAS`. 

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
  Se você deseja restaurar a página e seu conteúdo, clique <i>RESTAURAR</i>.
</div>

