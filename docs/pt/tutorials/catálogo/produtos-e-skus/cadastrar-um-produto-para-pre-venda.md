---
title: 'Cadastrar um produto para pré-venda'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2025-11-06T15:35:57.132Z
publishedAt: 2025-11-06T15:35:57.132Z
firstPublishedAt: 2021-09-14T16:54:57.039Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-a-product-for-presale
legacySlug: cadastrar-um-produto-para-pre-venda
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

Na plataforma VTEX, os lojistas podem definir a data prevista para a chegada de um produto e ofertá-lo em modo de pré-venda. A pré-venda permite ao cliente reservar o produto mediante pagamento antes da sua data de disponibilização no mercado.

Neste artigo iremos abordar os seguintes tópicos:

- [Criar produto para a pré-venda](#criar-produto-para-a-pre-venda)
- [Agendar preços](#agendar-precos)
- [Agendar conteúdo](#agendar-conteudo)

> ⚠️ Configurar o campo **Data de lançamento** para um produto não impacta sua visibilidade na frente de loja, que é determinada pela ativação ou desativação do campo **Mostrar no site**.

## Criar produto para a pré-venda

Para disponibilizar um produto para pré-venda, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique em `+ Adicionar produto`.
3. Na seção **Frente de loja**, no campo **Data de lançamento**, selecione a data em que lançará o produto. 

  > ℹ️ Este campo é utilizado para auxiliar na ordenação do resultado de busca do site. Por meio da querystring `O=OrderByReleaseDateDESC`, é possível puxar esse valor e mostrar a ordem de exibição por data de lançamento. Além disso, o valor deste campo influencia a criação de [coleções automáticas](/pt/docs/tutorials/cadastrar-colecoes-beta) e determina a data de [indexação](/pt/docs/tutorials/entendendo-o-funcionamento-da-indexacao) do produto.

4. Preencha os demais campos para a criação do produto. Saiba mais em [Adicionar ou editar produto](/pt/docs/tutorials/adicionar-ou-editar-produto).
5. Clique em `Salvar`.
6. Clique na aba `SKUs`.
7. Clique no sinal `+` **> Adicionar novo SKU**.
8. Na seção **Estratégia comercial**, no campo **Data de pré-venda**, selecione a data prevista para a chegada do item nas lojas e sua disponibilização para venda.

  > ℹ️ Para realizar essa configuração, é preciso considerar tanto a data de lançamento do item quanto o cálculo do envio do item para os clientes: `tempo final de entrega = SLA de entrega + prazo de recebimento do lote de abastecimento`.

9. Preencha os demais campos para a criação do SKU. Saiba mais em [Adicionar ou editar SKU](/pt/docs/tutorials/adicionar-ou-editar-sku).
10. Clique em `Salvar`.

> ⚠️ O pedido do item em pré-venda só deverá ser faturado a partir da data de lançamento, isto é, quando houver sua disponibilidade para vendas.

## Agendar preços

Para agendar os preços fixos da sua loja para a pré-venda de um produto, siga os passos descritos em [Agendar preços](/pt/docs/tutorials/agendar-preco). 

## Agendar conteúdo

Para aumentar o sucesso na etapa de pré-venda e obter um maior alcance de clientes, é importante potencializar a divulgação do produto que será lançado. Para isso, vale agendar conteúdo sobre o lançamento, conforme explicado no artigo [Agendamento para eventos especiais](/pt/docs/tutorials/agendamento-para-eventos-especiais#agendar-conteudo).
