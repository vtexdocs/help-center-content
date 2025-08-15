---
title: 'VTEX Pick and Pack: Pedidos'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2024-01-05T17:31:16.218Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
legacySlug: vtex-pick-and-pack-pedidos
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, preencha nosso [formulário](https://vtex.com/br-pt/contato/) apontando no campo `Comentários` o nome do produto desejado.

**Pedidos** é uma página do Admin VTEX que exibe as informações dos pedidos realizados e gerenciados pelo [VTEX Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack--1OOops3WrUyz7e0bnhkfXU).  

Esta página permite que você realize as seguintes ações: 

* [Consultar pedido](#consultar-pedido)
* [Buscar pedido](#buscar-pedido)
* [Filtrar pedidos](#filtrar-pedido)
* [Exportar pedidos](#exportar-pedidos)

![pick-and-pack-pedidos-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_1.png)

A página apresenta as seguintes informações em uma tabela: 

| Campo da tabela | Descrição                                                                             |
| --------------- | ------------------------------------------------------------------------------------- |
| ID do pedido    | Número identificador do pedido. Indica também a data de criação do pedido.            |
| Faturas         | Situação de fatura do pedido, com valores possíveis **Faturados** e **Não faturados**.        |
| Item(ns)        | Quantidade de itens que compõe o pedido.                                              |
| Envio           | Tipo de envio do pedido, com valores possíveis **Entrega ao cliente** e **Retirada na loja**. |
| Pagamento       | Meio de pagamento utilizado para realizar o pedido.                                   |
| Tags            | Tags relacionadas à venda do pedido, como UTM ou cupons.                              |
| Prazo           | Prazo de entrega ou retirada do pedido.                                               |
| Status          | Etapa do processo de fulfillment do pedido.                                           |

## Consultar pedido

Você pode otimizar a consulta de pedidos a partir das seguintes abas:

* **Todos:** todos os pedidos realizados.
* **Pendente:** pedidos pendentes, em separação de itens e em preparação.
* **Para envio:** pedidos que estão aguardando o envio.
* **Entregue:** pedidos que foram entregues ao cliente, seja por retirada em loja ou entregue pela transportadora.
* **Cancelado:** pedidos cancelados.
* **Rejeitado:** pedidos rejeitados.

Você também pode acessar informações mais detalhadas sobre cada pedido clicando no respectivo pedido na tabela.

![pick-and-pack-pedidos-2-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_2.png)

Ao selecionar o pedido desejado, você terá acesso às seguintes informações:

* **Item(ns):** lista de itens que compõem o pedido. É possível buscar por um item digitando o SKU ID ou nome do item na barra de busca. Além disso, é possível clicar no item para acessar informações mais detalhadas sobre ele.
* **Observações do pedido:** observações adicionadas pelo lojista.
* **Informações do envio:** informações sobre o envio do pedido, incluindo o status do envio. 
* **Informações de pagamento:** informações sobre o pagamento realizado no pedido.
* **Informações adicionais:** informações adicionais do pedido.
* **Logs:** linha do tempo com o histórico de atualizações do pedido.

## Buscar pedido

Você pode buscar um pedido utilizando a barra de busca. Para isso, digite o ID do pedido na barra de busca, por exemplo `SLR-1341470502250-01`. 

## Filtrar pedido

Você pode refinar a busca e a visualização dos pedidos, selecionando a opção **Filtrar**. Filtre os pedidos utilizando as seguintes opções:  

* **Data de criação:** selecione a data de criação do pedido.
* **Data de entrega:** selecione a data de criação do pedido.
* **Categorias:** selecione a categoria que os itens do pedido estão contidos.
* **Meios de pagamento:** selecione o meio de pagamento utilizado no pedido.
* **Estratégia de envio:** selecione a estratégia de envio utilizada no pedido.
* **Tipo de envio:** selecione o tipo de envio utilizado no pedido.

Clique em `Limpar tudo` para remover os filtros selecionados.

## Exportar pedidos

Você pode exportar os pedidos seguindo os passos abaixo:

1. Clique em `Exportar`.
2. Selecione os dados que deseja exportar: `Relatório de pacotes` ou `Orders Reports`.
    * No caso de `Relatório de pacotes`, você deve selecionar o período que deseja exportar, o tipo e o método de envio.
  ![pick-and-pack-pedidos-3-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_3.png)
3. Clique em `Exportar`.
