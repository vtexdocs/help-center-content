---
title: 'Remover anexo de SKU por importação de produtos via planilha não surte efeito'
id: 3BgRi2HNCwYEAKuOc0G4Se
status: PUBLISHED
createdAt: 2018-05-03T19:24:21.455Z
updatedAt: 2022-12-22T20:46:01.489Z
publishedAt: 2022-12-22T20:46:01.489Z
firstPublishedAt: 2018-05-03T19:34:26.219Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: removing-an-sku-attachment-by-importing-products-via-spreadsheet-has-no-effect
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao importar uma planilha de produtos e SKUs, removendo-se o anexo de um SKU (ou seja, deixando-se a coluna "\_Anexos" em branco na planilha), esta mudança não é refletida no cadastrado do SKU. Ele permanece com o anexo vinculado.

## Simulação

1. Acessar o catálogo.
2. Navegar até Cadastro de Produtos > Produtos e SKUs > Importar/Exportar Produtos e SKUs.
3. Abrir o dropdown Exportação / Importação > Importar.
4. Selecionar uma planilha de produtos e SKUs que contenha SKUs com anexos previamente vinculados e deixar o valor de \_Anexos em branco.
5. Clique em importar

## Workaround

Primeiramente, [crie um novo anexo](/pt/tutorial/cadastrar-um-anexo) e deixe este anexo inativo. Então, preencha a planilha com o valor do novo anexo criado e realize a importação dos produtos.

