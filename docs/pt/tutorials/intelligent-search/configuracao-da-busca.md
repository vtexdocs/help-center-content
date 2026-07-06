---
title: 'Configuração da busca'
id: 1yNCDwz0k77ovSGqkTbZMv
status: PUBLISHED
createdAt: 2024-06-17T14:08:59.824Z
updatedAt: 2026-07-06T00:00:00.000Z
publishedAt: 2025-04-24T15:27:15.330Z
firstPublishedAt: 2024-06-17T14:10:20.364Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: search-configuration
legacySlug: configuracao-da-busca
locale: pt
subcategoryId: 1EmKjP83dy0RWD9GzZkYsG
---

A página **Configuração da busca** compreende os ajustes globais do VTEX Intelligent Search. Para acessá-la no Admin VTEX, entre em **Configurações da loja > Intelligent Search > Configuração da busca**. Ela consiste em duas seções: [Configurações gerais](#configuracoes-gerais) e [Configurações de filtros](#configuracoes-de-filtros).

## Configurações gerais

As configurações gerais apresentam as opções a seguir, relacionadas a [especificações de produtos e de SKUs](/pt/docs/tracks/especificacoes-definicao-de-conceito):

* **Use as especificações de SKU para exibir produtos individuais nos resultados da pesquisa**: define quais especificações vão separar os SKUs no resultado de busca.

    Digamos que você tenha um produto com as cores vermelho e azul como SKUs. Se você selecionar o atributo "cor" neste campo, o resultado da pesquisa retornará dois produtos (um azul e outro vermelho) em vez de apenas um.

    Para adicionar uma especificação, clique na barra da funcionalidade e selecione a especificação desejada.

    Confira o guia [Separar SKUs por especificação](/pt/docs/tutorials/separar-skus-por-especificacao) para mais detalhes sobre o comportamento dessa configuração. 

* **Especificações pesquisáveis:** determina quais especificações terão valores pesquisáveis na busca.

    Por exemplo, se uma camisa não tiver a cor no nome do produto, por padrão, o Intelligent Search não identifica esse atributo em uma pesquisa por "camisa azul", trazendo como resultado camisas de diversas cores. Contudo, se a especificação de cor estiver configurada como pesquisável, a busca consegue trazer camisas azuis nas primeiras posições.

## Configurações de filtros

As configurações de filtros apresentam ajustes relacionados aos filtros exibidos para os clientes da sua loja durante a busca:

![Configurações de filtros](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/intelligent-search/configuracao-da-busca_1.png)

* **Ordenação dos filtros:** ordem em que os filtros serão exibidos na loja. Caso não tenha nenhum filtro selecionado na área, a ordem padrão é alfabética.

    Para adicionar um filtro, clique em `Adicionar`, selecione o filtro e clique em `Salvar` para concluir.

    Você pode alterar a ordenação arrastando o ícone de três barras <i class="fas fa-grip-vertical"></i> em cada filtro para a posição desejada.

    Para deletar um filtro, clique no ícone de lixeira <i class="fas fa-trash-alt"></i>.

* **Ocultar filtros:** seleção que permite que determinados filtros não sejam exibidos na loja. Para ocultar um filtro, clique no campo e, em seguida, clique no nome do filtro. 

    Para voltar a exibir um filtro, clique no X ao lado do nome dele. Se deseja voltar a exibir todos os filtros anteriormente ocultos, clique no X do lado direito do campo.

### Cobertura mínima de resultados para filtros

> ℹ️ Este recurso está disponível sob demanda. Para habilitá-lo, entre em contato com o [Suporte VTEX](https://supporticket.vtex.com/support).

Catálogos grandes frequentemente contêm filtros criados a partir de especificações compartilhadas por poucos produtos, poluindo o painel de filtros com opções de baixa cobertura. Com a cobertura mínima ativada, apenas filtros com cobertura significativa são exibidos por padrão.

Filtros em que nenhuma opção atinge um percentual mínimo de cobertura sobre o total de resultados da busca são ocultados automaticamente. É possível excluir filtros específicos dessa regra para que sejam sempre exibidos, independentemente da configuração.

Por exemplo, se a cobertura mínima for definida como 5%, um filtro em que todas as opções se aplicam a menos de 5% dos resultados da busca atual não será exibido. Considere uma busca por "camisa" que retorna 1.000 produtos. Com cobertura mínima de 5%, os filtros são avaliados da seguinte forma:

* O filtro **Cor** cobre 1.000 produtos (100%) e é exibido.
* O filtro **Tamanho** cobre 600 produtos (60%) e é exibido.
* O filtro **Tecido** cobre apenas 30 produtos (3%) e é ocultado automaticamente, pois nenhuma de suas opções atinge o percentual mínimo.

