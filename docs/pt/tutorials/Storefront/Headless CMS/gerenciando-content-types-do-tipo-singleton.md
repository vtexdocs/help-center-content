---
title: 'Gerenciando content types do tipo Singleton'
id: VBibMN1BqV2OFmavUFCdo
status: PUBLISHED
createdAt: 2023-04-05T17:55:26.748Z
updatedAt: 2024-06-05T19:07:02.549Z
publishedAt: 2024-06-05T19:07:02.549Z
firstPublishedAt: 2023-04-06T19:11:57.614Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: managing-singleton-content-types
locale: pt
legacySlug: gerenciando-content-types-do-tipo-singleton
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Content types do tipo Singleton permitem a criação e o gerenciamento de uma única página, garantindo que apenas uma página desse content type exista no Headless CMS.

Esse content type evita conflitos e inconsistências que podem ocorrer quando várias páginas do mesmo content type são criadas. Por exemplo, você poder usar o Singleton para a Página Inicial (Home) da sua loja, garantindo que exista apenas uma Página Inicial e todas as atualizações e solicitações feitas a essa página sempre retornem o mesmo resultado.
![singleton-br](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Storefront/Headless%20CMS/gerenciando-content-types-do-tipo-singleton_1.gif)

<div class="alert alert-warning">
Para criar um content type Singleton, verifique com o seu time de desenvolvimento se a propriedade <i>isSingleton</i> já está implementada ou peça para que o time siga as intruções em <a href="https://v1.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using isSingleton in a content type</a> para adicioná-la ao content type desejado.
</div>

## Criando o Singleton
1. Acesse o **Admin > Storefront > Headless CMS**.
2. Selecione `CRIAR NOVO` e escolha o nome do content type singleton, por exemplo, **Home**.
3. Edite a página como desejar com novas seções.

<div class="alert alert-warning">
É possível criar o Singleton apenas uma vez. Se você já criou a página Singleton, ela não aparecerá mais na lista de content types.
</div>

Após terminar de editar a página, você pode publicar o conteúdo selecionando `Publicar` ou salvando a página como rascunho.
Para editar ou excluir um conteúdo, verifique as seções a seguir.

## Editando o Singleton
1. Access the **Admin > Storefront > Headless CMS**.
2. Clique no projeto onde está o Singleton criado.
3. Selecione o Singleton criado, por exemplo **Home**.
4. Na página **Home**, edite como desejar adicionando novas seções.

## Despublicando o Singleton
1. Acesse **Admin > Storefront > Headless CMS**.
2. Clique no projeto em que o Singleton foi criado.
3. Clique em `Despublicar` > `Despublicar agora`.

<div class="alert alert-warning">
Antes de despublicar, certifique-se de que não há nenhum rascunho existente. Caso contrário, não será possível continuar. Se houver rascunhos, exclua-os ou agende-os para publicação.
</div>

4. Uma mensagem pop-up aparecerá para você confirmar a despublicação da página.
5. Mantenha o botão `DESPUBLICAR` clicado para despublicar o conteúdo.

## Deletando o Singleton
1. Na página do Singleton, selecione `mais`(menu kebab) e clique `Excluir`.
2. Clique  `EXCLUIR` e, depois, clique em `VOLTAR PARA PÁGINAS`. 

<div class="alert alert-warning">
  Se você deseja restaurar a página e seu conteúdo, clique <i>RESTAURAR</i>.
</div>

