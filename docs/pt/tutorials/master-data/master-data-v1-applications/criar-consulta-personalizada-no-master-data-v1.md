---
title: 'Criar consulta personalizada no Master Data v1'
id: tutorials_799
status: PUBLISHED
createdAt: 2017-04-27T21:57:44.496Z
updatedAt: 2024-07-17T13:34:47.245Z
publishedAt: 2024-07-17T13:34:47.245Z
firstPublishedAt: 2017-04-27T23:03:43.119Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-custom-queries-in-master-data-v1
legacySlug: criando-uma-consulta-personalizada-no-master-data
locale: pt
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

Uma consulta personalizada no Master Data é um filtro ou combinação de filtros que pode ser salva e acessada diretamente na listagem de registros de um formulário. 

## Pré-requisitos

Antes de criar uma consulta, você precisa seguir os passos descritos em [Filtrar dados no Master Data](https://help.vtex.com/pt/tutorial/filtrando-dados-no-master-data--tutorials_778) para configurar um filtro na entidade de dados e no formulário.

## Salvar uma consulta

Siga o passo a passo abaixo para filtrar os registros de um formulário e salvar uma consulta personalizada.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Certifique-se de que você está na aba **Aplicações**.
3. Na aplicação desejada, identifique o formulário que deseja visualizar e clique no ícone de listagem <i class="fas fa-bars"></i>.

    Você será direcionado(a) para a listagem de registros desse formulário. Na lateral, você verá os filtros configurados. 

4. Para filtrar, selecione o nome do filtro e seu valor e, em seguida, clique em `Filtrar`.

    É possível filtrar por vários campos ao mesmo tempo e vários valores no mesmo campo. Para retirar um filtro, clique no `X` ao lado do valor.

5. Clique no botão `Salvar consulta`.
6. Nomeie a consulta personalizada.
7. Clique em `OK`.
8. Clique em `OK` novamente.
9. Clique na aba **Aplicações**.
10. Clique no botão `Recarregar aplicações`.

Após seguir as instruções acima, a consulta vai aparecer como uma opção de visualização na listagem do formulário.

![consultas-2-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-applications/criar-consulta-personalizada-no-master-data-v1_1.png)

Você também pode acessar as consultas salvas clicando no botão Consultas, na listagem do formulário:

![consultas-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/master-data-v1-applications/criar-consulta-personalizada-no-master-data-v1_2.png)

## Configurar uma consulta padrão

Para determinar que um formulário sempre abra a listagem com uma consulta personalizada em vez de exibir todos os registros, você pode configurar uma consulta padrão. Para isso, siga o passo a passo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Certifique-se de que você está na aba **Aplicações**.
3. Na aplicação em que deseja alterar o formulário, clique no símbolo de engrenagem <i class="fas fa-cog"></i>.
4. Clique no ícone de edição <i class="fas fa-edit"></i> na linha do formulário em que deseja adicionar a consulta padrão.
5. Na opção **Consulta padrão**, selecione a consulta personalizada que deseja exibir sempre que abrir a lista de registros do formulário.
6. Clique no botão `Salvar`.
