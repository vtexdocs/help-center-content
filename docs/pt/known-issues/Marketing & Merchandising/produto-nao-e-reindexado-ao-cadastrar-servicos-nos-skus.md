---
title: "Produto não é reindexado ao cadastrar serviços nos SKUs"
id: 3shcZ8gz2MM8QUyGiS0qUq
status: PUBLISHED
createdAt: 2018-06-28T23:47:58.354Z
updatedAt: 2022-12-22T20:45:27.132Z
publishedAt: 2022-12-22T20:45:27.132Z
firstPublishedAt: 2018-06-28T23:55:09.347Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: produto-nao-e-reindexado-ao-cadastrar-servicos-nos-skus
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao se cadastrarem serviços nos SKUs, o trigger para que o produto seja enviado para a fila de reindexação não é disparado. Logo, o serviço não é aplicado para os produtos em questão.

## Simulação

1. Acessar o catálogo
2. Navegar até Produtos > Produtos e SKUs > __Cadastro de Produtos e SKUs__
3. Na listagem de produtos, clique na seta para baixo ao lado de Alterar e clicar em __SKU__
4. Na listagem que carregar na seta ao lado de Alterar, clique em __Serviços__
5. Clicar no botão __Novo Serviço__
6. Preencher os dados e salvar o serviço

## Workaround

Para forçar a reindexação do produto que teve serviços cadastrados em seus SKUs, basta acessar a página de produto no Admin, inserir um espaço na descrição do produto e então salvá-lo.

