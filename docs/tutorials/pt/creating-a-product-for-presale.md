---
title: 'Cadastrar um produto para pré-venda'
id: 4o6cUJ4gIg0MQWW8WfN34K
status: PUBLISHED
createdAt: 2021-09-08T16:32:39.818Z
updatedAt: 2023-03-29T18:23:13.300Z
publishedAt: 2023-03-29T18:23:13.300Z
firstPublishedAt: 2021-09-14T16:54:57.039Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: cadastrar-um-produto-para-pre-venda
locale: pt
legacySlug: cadastrar-um-produto-para-pre-venda
subcategory: pwxWmUu7T222QyuGogs68
---

Na plataforma VTEX, operadores de loja podem definir a data prevista de chegada de um produto e ofertá-lo em modo pré-venda. A pré-venda permite a reserva mediante pagamento de produtos antes da data efetiva de lançamento e da disponibilidade no mercado.

Neste artigo iremos abordar os seguintes tópicos:

- [Criar produto para a pré-venda](#criar-um-produto-para-a-pre-venda)
- [Agendar preços](#agendar-precos)
- [Agendar conteúdo](#agendar-conteudo)

## Criar um produto para a pré-venda

Para disponibilizar um produto via pré-venda, siga os passos abaixo.

1. No Admin VTEX, acesse __Catálogo__, ou digite __Catálogo__ na barra de busca no topo da página.
2. Clique na aba **Todos os produtos**.
3. Clique no botão `Adicionar Produto`.
4. No campo **Data de lançamento no mercado** coloque a data que pretende lançar o produto no formato `dd/mm/aaaa`. Esse campo é um critério de ordenação de produtos da loja. Para saber mais sobre ordenação de produtos, leia o artigo [Posso ordenar os produtos de acordo com o critério da loja?](https://help.vtex.com/pt/tutorial/posso-ordenar-os-produtos-de-acordo-com-o-criterio-da-loja--qfWKX2ZekoEoayiyo0uuA).
5. Preencha os [restantes campos do produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke).
6. Clique em `Salvar e Cadastrar um novo SKU`.
7. Na página de criação do SKU, preencha o campo **Data Previsão Chegada (pré-venda)** com a data em que o produto estará disponível para entrega pela loja no formato `dd/mm/aaaa`.
>ℹ️ É preciso levar em consideração tanto a data de lançamento quanto o cálculo do frete para o cadastro da data de chegada: `tempo final de entrega = SLA de entrega + prazo de recebimento do lote de abastecimento`
8. Preencha os [restantes campos do SKU](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-sku--21DDItuEQc6mseiW8EakcY).
9. Clique em `Salvar` para finalizar.

>ℹ️ O pedido do item em pré-venda só deverá ser faturado a partir da data de lançamento, isto é, quando haverá a disponibilidade real de estoque do produto.

## Agendar preços
Para agendar os preços fixos da sua loja para a pré-venda de um produto, siga os passos descritos no artigo [Agendar preços](https://help.vtex.com/pt/tutorial/agendar-preco--4vVha6TGzYkguWuMOqCcCk). 

## Agendar conteúdo
É importante potencializar a divulgação do produto que será lançado para aumentar o alcance de clientes. Desenvolver um conteúdo dedicado a um novo produto permite que as taxas de sucesso na pré-venda aumentem.

Para agendar o conteúdo, siga os passos descritos na seção [Agendar conteúdo](https://help.vtex.com/pt/tutorial/scheduling-features-for-special-events--2nd50tPWdKK4waXRZLg0JI#agendar-conteudo) do artigo [Agendamento para eventos especiais](https://help.vtex.com/pt/tutorial/agendamento-para-eventos-especiais--2nd50tPWdKK4waXRZLg0JI).
