---
title: 'Módulo Lançamentos (Beta)'
id: n2tN0WX5I6MJMbrJrS0Kb
status: PUBLISHED
createdAt: 2022-06-13T17:20:32.280Z
updatedAt: 2025-08-29T17:00:05.064Z
publishedAt: 2025-08-29T17:00:05.064Z
firstPublishedAt: 2022-06-13T18:10:50.488Z
contentType: tutorial
productTeam: Others
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: releases-module-beta
legacySlug: modulo-lancamentos-beta
locale: pt
subcategoryId: 3vXj7HrnYK8V5riTOwUuYv
---

> ℹ️ O módulo **Lançamentos** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Esta funcionalidade é válida somente para lojas que usam FastStore.

O gerenciamento de uma operação de ecommerce requer que o lojista faça uma série de atualizações e modificações na sua loja, que muitas vezes estão relacionadas entre si. Um exemplo é a realização de uma campanha publicitária, em que diferentes elementos do storefront precisam ser configurados.

O módulo **Lançamentos** permite ao lojista gerenciar grupos de modificações relacionadas, de forma a coordenar o planejamento, criação, agendamento e publicação das modificações na loja. Na fase em beta, as modificações que podem ser agrupadas precisam ser relacionadas ao [CMS](/pt/docs/tracks/cms-vtex-io), outros módulos da plataforma VTEX ainda não estão inclusos.

Os principais benefícios com o módulo são:

- Otimização da performance da plataforma, pois a publicação de mudanças agrupadas elimina filas de processamento.
- Simplificação da experiência de gerenciar alterações relacionadas, o que aumenta a eficiência da operação.
- Maior controle ao testar e revisar mudanças antes da publicação.
- Facilidade em agendar ou excluir grupos de modificações.

> ℹ️ Para utilizar o módulo **Lançamentos** é necessário realizar a configuração do CMS. Saiba mais em [Installing Releases on VTEX Headless CMS](https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Installing%20Releases%20on%20VTEX%20Headless%20CMS).

O artigo trata adiante dos seguintes tópicos:

- [Criar lançamentos](#criar-lancamentos)
- [Visualizar lançamentos](#visualizar-lancamentos)
- [Pesquisar lançamentos](#pesquisar-lancamentos)
- [Agendar lançamentos](#agendar-lancamentos)
- [Publicar lançamentos](#publicar-lancamentos)
- [Excluir lançamentos](#excluir-lancamentos)

## Criar lançamentos

Para criar um novo lançamento existem duas formas:

- Usando a seção **Páginas**.
- Usando o módulo **Lançamentos**.

### Criar usando a seção Páginas

Siga o passo a passo abaixo para criar um lançamento:

1. No Admin VTEX, acesse **Configurações da loja > CMS (beta) > Páginas (beta)**.
  > Se sua loja utiliza o Redesigned VTEX Admin, acesse **Storefront > Storefront > CMS**.
2. Clique no botão `CRIAR NOVO`. 
3. Clique sobre o tipo de modificação desejada:
    - Home page
    - PLP
    - Global SEO Settings
    - Institutional page
4. Após fazer as alterações desejadas na página criada, clique no botão `PUBLICAR`.
5. Selecione a opção `Adicionar a um lançamento`.
6. Clique em `Criar um lançamento`.
7. Preencha o campo _Nome_ com um nome para o lançamento.

  > ℹ️ Nesta etapa, não é obrigatório preencher os campos **Dia da publicação** e Hora</b>. Isso pode ser determinado depois, como será visto em [Agendar lançamentos](/pt/tutorial/modulo-lancamentos-beta--n2tN0WX5I6MJMbrJrS0Kb#agendar-lancamentos).

8. Clique em `Criar`.

![print_cms_paginas_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/lançamentos-beta/modulo-lancamentos-beta_1.png)

### Criar usando o módulo Lançamentos

Siga o passo a passo abaixo para criar um lançamento:

1. No Admin VTEX, acesse **Configurações da loja > Lançamentos**.
  > Se sua loja utiliza o Redesigned VTEX Admin, acesse **Storefront > Lançamentos**.
2. Clique no botão `Criar`.
3. Preencha o campo _Nome_ com um nome para o lançamento.

  > ℹ️ Nesta etapa, não é obrigatório preencher os campos **Dia da publicação** e Hora</b>. Isso pode ser determinado depois, como será visto em [Agendar lançamentos](/pt/tutorial/modulo-lancamentos-beta--n2tN0WX5I6MJMbrJrS0Kb#agendar-lancamentos).

4. Clique em `Criar`.

## Visualizar lançamentos

Todos os lançamentos criados aparecem listados no Admin VTEX, em **Configurações da loja > Lançamentos**. A página apresenta duas abas, a `AGENDADOS` e a `NÃO AGENDADOS`, dependendo se o lançamento foi criado com uma data de publicação ou não. 

![print_lancamentos_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/lançamentos-beta/modulo-lancamentos-beta_2.png)

Na aba `AGENDADOS`, a descrição de cada coluna é a seguinte:

| **Coluna** | **Descrição** |
| ---------- | ---------- |
| Nome | Nome que identifica o lançamento, definido na etapa de criação. Pode ser editado a qualquer hora, desde que o lançamento não esteja publicado. |
| Última modificação | Tempo transcorrido desde a última alteração relacionada ao lançamento, tais como atualização, acréscimo ou exclusão de conteúdo. |
| Criado por | Identificação do usuário que criou o lançamento. |
| Data de publicação | Dia e horário previstos para a publicação do lançamento. |
| Data de fim | Quando um lançamento é agendado com uma data de fim, ela aparece nesta coluna. Após a data de fim, as atualizações do lançamento são desfeitas. |
| Status | Existem cinco status possíveis para um lançamento: <ul><li>**Agendado:** existe uma data definida para o lançamento ser publicado.</li><li>**Em fila:** significa que a publicação do lançamento está em etapa de implantação. Nenhuma ação é necessária para que o lançamento passe para o status seguinte *Publicando*.</li><li>**Publicando:** a plataforma VTEX está processando a solicitação de publicação do lançamento.</li><li>**Publicado:** o conteúdo associado ao lançamento está publicado e é visível no storefront da loja para o consumidor.</li><li>**Publicação falhou:** ocorreu um erro e o lançamento não foi publicado. Ao clicar sobre o nome do lançamento, uma página de detalhes do lançamento é apresentada, com mais informações sobre o tipo de erro e como solucioná-lo.</li></ul> |

Na aba `NÃO AGENDADOS`, existem somente três colunas, com os mesmos significados descritos anteriormente:

- Nome
- Última modificação
- Criado por

Para obter mais informações sobre determinado lançamento, basta clicar sobre ele.

## Pesquisar lançamentos

Na página **Lançamentos**, é possível encontrar um lançamento pelo nome, utilizando a caixa de busca. A busca é imediatamente realizada a partir da inserção de caracteres e a grafia incorreta do nome retorna buscas sem resultados.

Outra forma de pesquisar nos lançamentos é utilizando filtros, disponíveis somente na aba `AGENDADOS`. Para isso, clique em **Filtros** e selecione a combinação desejada entre os status de um lançamento e/ou o período previsto para publicação.

## Agendar lançamentos

Na criação de um lançamento, é possível definir ou não a data de publicação, de forma que existem três ações possíveis sobre agendamentos:

- **Agendar:** definir uma data de publicação para o lançamento quando não existe nenhuma.
- **Desagendar:** cancelar a data de publicação, o que faz o lançamento passar para o status `Não agendado`.
- **Reagendar:** definir uma nova data para um lançamento que já tinha data determinada.

> ℹ️ Ao agendar ou reagendar a publicação de um lançamento, é possível selecionar a opção **Adicionar data de fim**, de forma a definir um prazo para o lançamento ser despublicado. A data fim não significa a [exclusão do lançamento](/pt/tutorial/modulo-lancamentos-beta--n2tN0WX5I6MJMbrJrS0Kb#excluir-lancamentos), e sim o seu arquivamento, podendo o lançamento ser publicado novamente a qualquer tempo.

### Agendar

Quando o lançamento está no status `Não agendado`, existem duas formas de agendar uma data para sua publicação. Agendar via módulo **Lançamentos**:

1. No Admin VTEX, acesse **Configurações da loja > Lançamentos**.
  > Se sua loja utiliza o Redesigned VTEX Admin, acesse **Storefront > Lançamentos**.
2. Clique na aba `NÃO AGENDADOS` ou [pesquise](#pesquisar-lancamentos) utilizando a barra de busca e filtros para encontrar o lançamento desejado.
3. Na linha correspondente ao lançamento, clique no ícone menu <i class="fas fa-ellipsis-v"></i>.  
4. Selecione a opção `Agendar`.
5. Defina uma data no calendário e um horário para a publicação.
6. Se desejar, selecione uma data de despublicação do lançamento, clicando em `Adicionar data de fim`.
7. Clique em `Agendar`.

Agendar via página de detalhes do lançamento:

1. Na página **Lançamentos**, clique sobre o nome do lançamento que deseja agendar.
2. Na página de detalhes do lançamento, clique no botão `Agendar`.
3. Selecione uma data no calendário e um horário para a publicação.
4. Se desejar, selecione uma data de despublicação do lançamento, clicando em `Adicionar data de fim`.
5. Clique em `Agendar`.

### Desagendar ou reagendar

Quando o lançamento está no status `Agendado`, é possível:

- Reagendar e definir uma nova data para a publicação.
- Desagendar e passar o lançamento para o status `Não agendado`. 

As duas opções são feitas conforme as instruções da seção [Agendar](#agendar-lancamentos), a diferença é que as opções de configuração disponíveis serão para `Reagendar` ou `Desagendar`.

## Publicar lançamentos

Lançamentos nos seguintes status admitem publicação:

- Não agendado
- Agendado
- Publicação falhou

Para publicar um lançamento pelo módulo **Lançamentos** e tornar as modificações visíveis no storefront da loja, siga o passo a passo abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Lançamentos**.
  > Se sua loja utiliza o Redesigned VTEX Admin, acesse **Storefront > Lançamentos**.
2. Na linha correspondente ao lançamento desejado, clique no ícone menu <i class="fas fa-ellipsis-v"></i>.
3. Clique em `Publicar agora`.
4. Clique em `Publicar`.

Outra forma de publicar é entrando na página de detalhes do lançamento, conforme o seguinte passo a passo:

1. Na página **Lançamentos**, clique sobre o nome do lançamento que deseja publicar.
2. Na página de detalhes do lançamento, clique em <i class="fas fa-ellipsis-v"></i> **Mais**.
3. Clique em `Publicar agora`.
4. Cique em `Publicar`.

## Excluir lançamentos

Siga o passo a passo abaixo para excluir um lançamento:

> ❗ Lançamentos excluídos são deletados e não podem ser recuperados. As atualizações que faziam parte do lançamento são mantidas, mas o agrupamento entre elas deixa de existir.

1. No Admin VTEX, acesse **Configurações da loja > Lançamentos.**
  > Se sua loja utiliza o Redesigned VTEX Admin, acesse **Storefront > Lançamentos**.
2. Na linha correspondente ao lançamento desejado, clique no ícone menu <i class="fas fa-ellipsis-v"></i>. 
3. Clique em `Excluir`.
4. Clique em `Deletar`.

Outra forma de excluir um lançamento é entrando na página de detalhes do lançamento, conforme o seguinte passo a passo:

1. Na página **Lançamentos**, clique sobre o nome do lançamento que deseja excluir.
2. Na página de detalhes do lançamento, clique em <i class="fas fa-ellipsis-v"></i> **Mais**.
3. Clique em `Excluir`.
4. Clique em `Deletar`.
