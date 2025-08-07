---
title: "Kit criado por integração não recebe uma tabela de valores"
id: 1IhCGsM5a48Ai6IESYCeGQ
status: PUBLISHED
createdAt: 2017-03-29T23:46:50.768Z
updatedAt: 2022-12-22T20:56:06.125Z
publishedAt: 2022-12-22T20:56:06.125Z
firstPublishedAt: 2017-03-29T23:48:14.222Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog
slugEN: kit-criado-por-integracao-nao-recebe-uma-tabela-de-valores
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

O kit criado por integração não está criando uma tabela de valores mesmo após ser adicionado um componente com preço. 

Esse comportamento é em parte devido ao fato de que a feature não aceita um valor default na criação do kit. Pois uma das características de um kit é o lojista poder praticar um preço diferente daquele do componente.

## Simulação

Criar um Kit via Web Service (Soap) (Apenas possível via Web Service)

**Passo 1**:
[Fazer download do manual de integração](https://help.vtex.com/pt/tutorial/manual-das-classes-e-metodos-usados-no-webservice)

**Passo 2**: 
Executar rota de criação de kit: `StockKeepingUnitKitInsertUpdate`

## Workaround

Para contornar esse problema, o caminho é bem simples. Olhando o kit, siga o caminho descrito abaixo:

Setinha Azul > SKU > Setinha Cinza (editar) > Kit > Alterar > Salvar

O componente precisa ter um preço já cadastrado. Estamos aqui apenas salvando novamente o form para forçar a indexação. Para conferir, basta ver a tabela de valores associada ao SKU Kit.

Para resolver esse problema por API, basta adicionar uma rota de criação de tabela de valores para SKU (após já ter criado o kit): https://documenter.getpostman.com/view/101975/vtex-pricing-api/6YsWxKT#06450a0e-a7b4-360c-7058-3095cd03ef08

