---
title: 'Erro ao tentar importar SKUs por planilha no Admin VTEX'
id: 1TDF87s7P1UJT1hNDGZsuk
status: PUBLISHED
createdAt: 2024-07-01T15:07:50.982Z
updatedAt: 2024-07-22T18:56:05.856Z
publishedAt: 2024-07-22T18:56:05.856Z
firstPublishedAt: 2024-07-01T18:24:23.096Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l3eEiSz8MpcppCxcnijGz
slug: erro-ao-tentar-importar-skus-por-planilha-no-admin-vtex
locale: pt
legacySlug: erro-ao-tentar-importar-skus-por-planilha-no-admin-vtex
subcategory: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** *Catálogo, SKU*

**Palavras-chave:** *catálogo, sku, planilha, importação*

Após a definição da árvore de categorias e o cadastro de [especificações de produtos e de SKUs](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP) na sua loja, é necessário preencher os valores das especificações criadas. No Admin VTEX, esse processo pode ser realizado através de uma planilha ou de forma manual no cadastro do [produto](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#cadastro-do-produto) e no cadastro do [SKU](https://help.vtex.com/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119#cadastro-do-sku).
Se ao realizar a [importação de SKUs por planilha](https://help.vtex.com/pt/tutorial/exportar-e-importar-especificacoes-de-produto-e-de-sku--tutorials_274?&utm_source=autocomplete), aparecer a mensagem 
`"An error occurred in the data writing process. Make sure your worksheet data is consistent with the instructions and try again."`, pode ser que:

- [Especificações obrigatórias de SKU não estejam preenchidas.](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP)
- O arquivo esteja na formatação errada.

## Solução
Para resolver esse problema, é possível:

[Modificar o arquivo](#solucao-modificar-o-arquivo): O arquivo precisa seguir regras específicas de formatação e ser salvo como uma planilha XML no formato .xls.
### Solução  - Modificar o arquivo

1. Em **Catálogo > Importação e exportação > Todos os produtos > Exportação / Importação**, clique na aba **Importar**.
2. Clique em `Clique aqui` para fazer o download da planilha de exemplo.
3. Edite a planilha de exemplo com os SKUs desejados, seguindo todas as recomendações da página [Import and Export](https://cosmetics2.myvtex.com/admin/Site/Relatorio_Skus.aspx)
4. Salvar a planilha no formato `.xls`.
5. Na mesma página, em Upload de arquivo para importação, selecione o arquivo esse clique `Importar`.
6. Cheque se a importação foi finalizada. 

Caso o erro persista após a modificação do arquivo, entre em contato com o [Nosso Suporte](https://support.vtex.com/hc/pt-br/signin?return_to=https%3A%2F%2Fsupport.vtex.com%2Fhc%2Fpt-br%2Frequests).

