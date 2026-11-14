---
title: 'Erro ao tentar importar SKUs por planilha no Admin VTEX'
id: 1TDF87s7P1UJT1hNDGZsuk
status: PUBLISHED
createdAt: 2024-07-01T15:07:50.982Z
updatedAt: 2026-11-05T17:25:00.000Z
publishedAt: 2025-08-14T22:09:55.424Z
firstPublishedAt: 2024-07-01T18:24:23.096Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: error-when-trying-to-import-skus-via-spreadsheet-in-the-vtex-admin
legacySlug: erro-ao-tentar-importar-skus-por-planilha-no-admin-vtex
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
domainFilters:
  - Catálogo
  - Admin
symptomFilters:
  - Erro de validação
---

Após a definição da árvore de categorias e o cadastro de [especificações de produtos e de SKUs](/pt/docs/tracks/especificacoes-definicao-de-conceito) na sua loja, você precisa preencher os valores das especificações criadas. No Admin VTEX, é possível fazer isso por meio de uma planilha ou manualmente, no cadastro do [produto](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-produto#cadastro-do-produto) e no cadastro do [SKU](/pt/docs/tutorials/cadastrar-especificacoes-ou-campos-de-sku#cadastro-do-sku).

Se, ao realizar a [importação de SKUs por planilha](/pt/docs/tutorials/importar-e-exportar-especificacoes-de-skus-via-planilha), aparecer a mensagem:

`"An error occurred in the data writing process. Make sure your worksheet data is consistent with the instructions and try again."`

Pode ser que:

- [Especificações obrigatórias de SKU](/pt/docs/tracks/especificacoes-definicao-de-conceito) não estejam preenchidas.
- O arquivo esteja na formatação errada.

## Solução

O arquivo precisa seguir regras específicas de formatação e ser salvo no formato `.xls` ou `.xlsx`. Para modificá-lo e importá-lo novamente, siga as instruções abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/docs/tutorials/produtos-e-skus) na barra de busca no topo da página.
2. [Exporte as especificações de SKUs](/pt/docs/tutorials/importar-e-exportar-especificacoes-de-skus-via-planilha#exportar-especificacoes-de-skus-via-planilha) para obter o modelo da planilha.
3. Preencha a planilha conforme a seção [Ver campos da planilha de especificações de SKUs](/pt/docs/tutorials/importar-e-exportar-especificacoes-de-skus-via-planilha#ver-campos-da-planilha-de-especificacoes-de-skus).

    > ❗ Não modifique o template da importação. Caso contrário, haverá um erro de processamento e a operação não será realizada.

4. Salve a planilha no formato `.xls` ou `.xlsx`.
5. No topo da página **Produtos e SKUs**, clique em `Importar`.
6. Clique em `Especificações de SKU`.
7. Adicione a planilha. Você pode arrastar o arquivo e soltá-lo sobre a área indicada, ou clicar sobre a janela e selecionar o arquivo.
8. Quando o arquivo terminar de carregar, clique em `Importar`.
9. Confira se a importação foi finalizada.

Caso o erro persista após a modificação do arquivo, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).