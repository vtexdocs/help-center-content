---
title: 'Lançamentos: ações em lançamentos (Beta)'
id: 1zsomdifPEQkdV6RW93JyW
status: PUBLISHED
createdAt: 2022-09-19T22:17:51.049Z
updatedAt: 2023-02-08T21:18:10.818Z
publishedAt: 2023-02-08T21:18:10.818Z
firstPublishedAt: 2022-09-19T23:00:29.141Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-actions-on-releases-beta
legacySlug: planner-acoes-em-lancamentos-beta
locale: pt
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

> ℹ️ O **Lançamentos** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Esta funcionalidade é válida somente para lojas que usam [FastStore](https://www.faststore.dev/).

O módulo **Lançamentos** permite que você gerencie [lançamentos](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ) de forma a coordenar a criação, planejamento e publicação de alterações na sua loja. Um lançamento significa uma modificação ou um agrupamento de modificações que podem ser publicadas de forma conjunta.

Pelo **Lançamentos**, você pode visualizar as informações sobre lançamentos, acompanhar os [status de lançamentos](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos) e realizar uma série de ações. Este artigo apresenta quais são essas ações e como executá-las.

A funcionalidade pode ser acessada pelo menu de navegação do Admin VTEX **Lançamentos**, no qual existem as seguintes páginas:

* [Calendário](/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw)

Cada página apresenta uma visualização dos lançamentos e permite realizar ações distintas, que vão depender do [status do lançamento](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos). As principais ações são:

* [Criar lançamento](#criar-lancamento)
* [Buscar lançamento](#buscar-lancamento)
* [Agendar, reagendar ou desagendar lançamento](#agendar-reagendar-ou-desagendar-lancamento)
* [Publicar lançamento](#publicar-lancamento)
* [Excluir lançamento](#excluir-lancamento)

> ⚠️ Na fase beta, os lançamentos precisam estar relacionados ao [CMS](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/4yB9wSl79cArd68aRBnBZ2), pois outros módulos da plataforma VTEX ainda não estão inclusos. Para utilizar o **Lançamentos**, é necessário configurar o CMS conforme descrito em [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

## Criar lançamento

Para criar um lançamento pelo **Lançamentos**, siga os passos abaixo:

1. Na página [Calendário](/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C) ou [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), clique no botão `Criar lançamento`.
2. Preencha o campo **Nome** com um nome para o lançamento.
3. Em **Data da publicação**, selecione uma data para publicação do lançamento (opcional).
4. Em **Horário**, selecione um horário para a publicação (opcional).
5. Clique em `Criar lançamento`.

  > A seguinte mensagem de confirmação vai aparecer: _O lançamento foi criado e agendado_.

Ao criar o lançamento, não é obrigatório definir **Data da publicação** e **Horário**, pois um lançamento pode ser criado com [status](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos) `Não agendado` e ser [agendado](#agendar) posteriormente.

## Buscar lançamento

Na página **Lançamentos** é possível buscar lançamentos utilizando os seguintes recursos:

* **Barra de busca:** digite o nome do lançamento que deseja encontrar. 
* **Filtros:** para filtrar por [status de lançamentos](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos), clique em `Filtros` e utilize o botão `Todos os status` <i class="fas fa-angle-down"></i> para selecionar a opção desejada. Para filtrar por data de agendamento, use o botão `Todos os períodos` <i class="fas fa-angle-down"></i> para selecionar a data desejada.

## Agendar, reagendar ou desagendar lançamento

Com relação a definição de datas para publicação, existem três ações possíveis:

* [Agendar](#agendar): definir uma data de publicação para o lançamento quando não existe nenhuma.
* [Desagendar](#desagendar): cancelar a data de publicação, fazendo com que o lançamento passe para o [status](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos) `Não agendado`.
* [Reagendar](#reagendar): definir uma nova data para um lançamento que já tinha uma data determinada.

### Agendar

Para agendar um lançamento no status `Não agendado`, siga os passos abaixo:

1. Em [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), clique no ícone menu três pontos <i class="fas fa-ellipsis-v"></i> do lançamento desejado.
2. Selecione a opção <i class="fal fa-calendar"></i> `Agendar`.
3. Em **Data da publicação**, selecione uma data para publicação do lançamento.
4. Em **Horário**, selecione um horário para a publicação.
5. Clique em `Agendar`.

  > Após agendar um lançamento, a seguinte mensagem de confirmação deve aparecer: _Lançamento agendado_.

### Reagendar

Quando o status do lançamento é `Agendado`, você pode reagendar o lançamento. Os passos para reagendamento são similares aos da seção anterior, com a diferença que você deverá selecionar a opção `Reagendar` ao invés de `Agendar`.

  > Após reagendar um lançamento, a seguinte mensagem de confirmação deve aparecer: _Lançamento agendado_.

### Desagendar

Para desagendar um lançamento e fazer com que ele passe para o status `Não agendado`, siga os passos abaixo:

1. Em [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), clique no ícone menu três pontos <i class="fas fa-ellipsis-v"></i> do lançamento desejado.
2. Selecione a opção <i class="fal fa-calendar"></i> `Desagendar`.
3. Clique no botão `Desagendar`.

## Publicar lançamento

Para publicar um lançamento, é preciso que ele esteja em um dos seguintes [status](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos):

* `Não agendado`
* `Agendado`
* `Publicação falhou`

Para publicar o lançamento e tornar as modificações visíveis no storefront da sua loja, siga o passo a passo abaixo:

1. Em [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), clique no ícone menu três pontos <i class="fas fa-ellipsis-v"></i> do lançamento desejado.
2. Clique em <i class="far fa-cloud-upload"></i> `Publicar agora`.
3. Clique em `Publicar`.

## Excluir lançamento

Todos os [status de lançamentos](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos) permitem que um lançamento seja excluído, ou seja, que o lançamento seja deletado de forma permanente.

> ℹ️ Se em vez de excluir um lançamento você desejar arquivá-lo, você deve despublicar o lançamento. Assim, o lançamento não é deletado e pode ser republicado a qualquer momento.

Quando um lançamento no status `Publicado` é excluído, as modificações que ele agrupava são mantidas no storefront da loja, apenas o lançamento que agrupava as modificações deixa de existir.

Para excluir um lançamento, siga o passo a passo abaixo:

1. Em [Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw), clique no ícone menu três pontos <i class="fas fa-ellipsis-v"></i> do lançamento desejado.
2. Clique em <i class="far fa-trash-alt"></i> `Excluir`.
3. Clique novamente em `Excluir`.

  > Após excluir um lançamento, a seguinte mensagem de confirmação deve aparecer: _Lançamento deletado com sucesso_.

## Saiba mais

* [Lançamentos: conceito de lançamento](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ)
* [Lançamentos: página Calendário](/pt/tutorial/planner-pagina-calendario-beta--46wSZ7Z5xoXQPP0xHfIx9C)
* [Lançamentos: página Lançamentos](/pt/tutorial/planner-pagina-lancamentos-beta--2p7IiVD6K8i1iRiwHph5sw)
