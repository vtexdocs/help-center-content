---
title: "ID e nome de departamento incorretos ao exportar planilha de produtos"
id: 6Nj93lJqgwGkYwaSWUu0So
status: PUBLISHED
createdAt: 2018-06-20T14:36:47.235Z
updatedAt: 2023-04-04T19:07:34.496Z
publishedAt: 2023-04-04T19:07:34.496Z
firstPublishedAt: 2018-06-20T14:45:12.020Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: id-e-nome-de-departamento-incorretos-ao-exportar-planilha-de-produtos
locale: pt
kiStatus: Backlog
internalReference: 783363
---

## Sumário

Ao exportar uma planilha de produtos, o nome e o ID do departamento são exportados incorretamente, mesmo pertencendo a um departamento diferente no cadastro do produto ou nas consultas por meio das APIs.

## Simulação

1. Acessar o Módulo Catalog no Admin;
2. Navegar até Importar/Exportar Produtos e SKUs;
3. Exportar a planilha de produtos e SKUs.

## Workaround

Não há workaround. Porém estas informações podem ser descartadas. Ao importar uma planilha para atualização de produtos e a sua categoria, esta coluna não é levada em consideração. Somente a coluna `Id Categoria` é considerada.

