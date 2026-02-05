---
title: 'Lançamentos: página Lançamentos (Beta)'
id: 2p7IiVD6K8i1iRiwHph5sw
status: PUBLISHED
createdAt: 2022-09-19T21:56:39.252Z
updatedAt: 2023-02-08T21:20:51.145Z
publishedAt: 2023-02-08T21:20:51.145Z
firstPublishedAt: 2022-09-20T00:26:05.306Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: planner-releases-page-beta
legacySlug: planner-pagina-lancamentos-beta
locale: pt
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

> ℹ️ O **Lançamentos** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Esta funcionalidade é válida somente para lojas que usam [FastStore](https://www.faststore.dev/).

O módulo **Lançamentos** permite que você [gerencie seus lançamentos](/pt/docs/tutorials/planner-acoes-em-lancamentos-beta) de forma a coordenar a criação, planejamento e publicação das modificações na sua loja.

No Admin VTEX, no menu de navegação **Lançamentos** existem as páginas **Lançamentos** e [Calendário](/pt/docs/tutorials/planner-pagina-calendario-beta). Em **Lançamentos**, você pode criar um novo lançamento e realizar uma série de outras [ações](/pt/docs/tutorials/planner-acoes-em-lancamentos-beta).

Na página **Lançamentos**, todos os lançamentos que existem são apresentados em uma lista, sendo que a ordenação mostra primeiro os lançamentos no [status](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos) `Não agendado`, seguidos dos que estão agendados. 

A ordenação dos lançamentos agendados é feita com base na data de publicação: quanto mais longínquo no futuro é um lançamento primeiro ele aparece na listagem, e quanto mais distante no passado, por último ele aparece.

> ⚠️ Na fase beta, os lançamentos precisam estar relacionados ao [CMS](/pt/docs/tracks/cms-vtex-io), pois outros módulos da plataforma VTEX ainda não estão inclusos. Para utilizar o **Lançamentos**, é necessário configurar o CMS conforme descrito em [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

## Visualização em lista

Para acessar a página **Lançamentos** no Admin VTEX, vá no menu de navegação **Lançamentos**. A imagem a seguir apresenta a interface e identifica o que você pode realizar por meio dela:

![Releases list view v2 - PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/lançamentos-beta/planner-pagina-lancamentos-beta_1.png)

| **Campo** | **Descrição** |
|---|---|
| **Nome** | Nome que identifica o lançamento, definido na etapa de criação. Pode ser editado a qualquer momento, desde que o lançamento não esteja publicado. |
| **Última modificação** | Tempo decorrido desde a última alteração no lançamento. |
| **Criado por** | Identificação do usuário que criou o lançamento. |
| **Data de publicação** | Dia e horário de publicação ou de agendamento de publicação do lançamento. Caso o lançamento não tenha uma data definida, este campo aparece como `Não agendado`. |
| **Status** | Indicação do [status do lançamento](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos). |

Na página **Lançamentos**, você pode:

**I - Acessar detalhes do lançamento:** clique sobre um lançamento para ser redirecionado para a página de detalhes sobre o lançamento.

**II - Buscar lançamentos:** na barra de busca, digite o nome do lançamento que deseja encontrar. A busca considera todos os lançamentos existentes.

**III - Filtrar lançamentos:** para filtrar por [status de lançamentos](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos), utilize o botão `Status` <i class="fas fa-angle-down"></i> e selecione a opção desejada. Para filtrar por data de agendamento ou publicação, clique em em `Data` <i class="fas fa-angle-down"></i> e selecione a data desejada.

**IV - Criar um novo lançamento:** para criar um novo lançamento, clique no botão `Criar lançamento` e siga o passo a passo descrito em [Lançamentos: ações em lançamentos](/pt/docs/tutorials/planner-acoes-em-lancamentos-beta).

**VI - Navegar entre páginas:** para ver mais resultados de lançamentos, navegue entre as páginas de resultados utilizando as setas laterais <i class="fas fa-angle-left"></i> <i class="fas fa-angle-right"></i>.

**VII - Realizar ações no lançamento:** dependendo do [status de um lançamento](/pt/tutorial/planner-conceito-de-lancamento-beta--4pWhQTXG0aIIsi2TYxxRkZ#status-de-lancamentos), o menu três pontos <i class="fas fa-ellipsis-v"></i> vai apresentar diferentes opções de ações. Para conferir as ações possíveis, confira [Lançamentos: ações em lançamentos](/pt/docs/tutorials/planner-acoes-em-lancamentos-beta).

## Saiba mais

* [Lançamentos: conceito de lançamento](/pt/docs/tutorials/planner-conceito-de-lancamento-beta)
* [Lançamentos: ações em lançamentos](/pt/docs/tutorials/planner-acoes-em-lancamentos-beta)
* [Lançamentos: página Calendário](/pt/docs/tutorials/planner-pagina-calendario-beta)
