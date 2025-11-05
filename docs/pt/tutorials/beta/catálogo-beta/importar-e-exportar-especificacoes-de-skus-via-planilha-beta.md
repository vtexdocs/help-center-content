---
title: 'Importar e exportar especificações de SKUs via planilha (Beta)'
id: 5EAioeC33wHpIxKHaGQzbV
status: PUBLISHED
createdAt: 2025-09-26T15:29:35.015Z
updatedAt: 2025-10-13T22:58:33.129Z
publishedAt: 2025-10-13T22:58:33.129Z
firstPublishedAt: 2025-09-26T16:15:50.391Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-sku-specifications-using-a-spreadsheet-beta
legacySlug: importacao-e-exportacao-de-especificacoes-de-skus-via-planilha-beta
locale: pt
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

No Admin VTEX, você pode gerenciar a importação e a exportação de especificações de SKUs utilizando planilha, conforme apresentado nas seções:

* [Importar especificações de SKUs via planilha](#importar-especificacoes-de-skus-via-planilha) 
* [Exportar especificações de SKUs via planilha](#exportar-especificacoes-de-skus-via-planilha) 
* [Ver campos da planilha de especificações de SKUs](#ver-campos-da-planilha-de-especificacoes-de-skus)  

## Importar especificações de SKUs via planilha

Para importações de especificações de SKUs por planilha, realize os seguintes passos:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. No topo da página, clique em `Importar`.
3. Clique em `Especificações de SKU`.
4. Adicione a planilha com extensão `.xls` ou `.xlsx`. Você pode arrastar o arquivo e soltá-lo sobre a área indicada, ou clicar sobre a janela e selecionar o arquivo.

  > ⚠️ Para obter um modelo da planilha a ser importada, realize a [exportação das especificações de SKUs](#exportar-especificacoes-de-skus-via-planilha).

5. Quando o arquivo terminar de carregar, clique em `Importar`.

  > ❗ O tempo de importação vai depender do volume de informações sendo processado. A operação não será afetada, caso você saia da página.

Enquanto a operação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Após a conclusão, você verá a mensagem _"Especificações de SKUs importadas com sucesso"_, e receberá um email de confirmação.

## Exportar especificações de SKUs via planilha

Para exportar um arquivo `.xlsx` com informações sobre especificações de SKUs, realize os seguintes passos:

> ℹ️ As informações exportadas correspondem aos campos apresentados na seção [Ver campos da planilha de especificações de SKUs](#ver-campos-da-planilha-de-especificacoes-de-skus).

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) na barra de busca no topo da página.
2. (Opcional) Caso queira exportar as especificações de SKUs de determinados itens, [busque](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#buscar-produtos) ou [filtre](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-produtos) conforme desejado. Este passo não é necessário para exportar as especificações de SKUs de todo o seu catálogo.
3. No topo da página, clique em `Exportar`.
4. Clique em `Especificações de SKU`.

Enquanto a operação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Mesmo que você saia da página, a operação não será interrompida. Você pode [acompanhar o andamento da exportação pela janela](/pt/tutorial/importar-e-exportar-produtos-e-skus-via-planilha-beta--5udKxWP1ZeBD7QB7Fy2BNl#acompanhar-janela-do-processo-de-exportacao) que surge na página. 

Após a finalização da exportação, você receberá um email com um link para fazer o download do arquivo. O prazo para o download pelo link é de 24 horas, após este período o link expira. Também é possível baixar o arquivo pela janela que surgiu na página.

## Ver campos da planilha de especificações de SKUs

A tabela a seguir apresenta a descrição e o exemplo de preenchimento dos campos da planilha de importação de especificações de SKUs. Campos obrigatórios estão marcados com um asterisco (*). 

| **Campo** | **Descrição** | **Exemplo** |
| :---: | :--- | :---: |
| ID SKU* | Código numérico único que identifica o SKU. | 310119261 |
| Nome SKU | Nome do SKU, ou seja, que identifica a variação do produto. | M |
| Código de referência SKU | Código único de referência do SKU, criado para auxiliar o lojista na gestão do catálogo. Após ser criado, não é possível editá-lo pela planilha.Este campo é obrigatório, a menos que o campo **EAN/UPC** tenha sido preenchido. | camisa-cor |
| ID Marca | Código numérico que identifica a [marca](/pt/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) do SKU. Esta informação pode ser encontrada no Admin VTEX, em **Catálogo > Marcas**, ou usando o endpoint [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list). | 2000003 |
| Marca | Nome da [marca](/pt/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) do SKU. Uma vez preenchido, este campo não pode ser editado. | AOC |
| ID Departamento | Código numérico que identifica a categoria de maior nível hierárquico do produto. | 1000014 |
| Departamento | Nome da categoria de maior nível hierárquico do produto. | Roupas |
| ID Categoria | Número identificador único da categoria de menor nível hierárquico do SKU. Essa informação pode ser encontrada no Admin VTEX, em **Catálogo > Categorias**, ou usando o endpoint [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-). | 1000014 |
| Categoria | Nome relacionado à categoria de menor nível hierárquico do SKU. | Blusas |
| ID Campo | Código numérico que identifica o campo da especificação de SKU para aquele SKU. | 892 |
| Nome Campo | Nome do campo da especificação de SKU. | Coloração |
| Nome Tipo Campo | [Tipo do campo da especificação de SKU](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-sku--tutorials_119#tipos-de-campo-de-sku), que pode ser:<ul><li>Combo</li><li>Radio</li></ul>Caso você utilize a versão beta de categorias, confira os tipos de campo aceitos para [variações](/pt/tutorial/criar-ou-editar-categorias-atributos-e-variacoes-beta--1lzs3fHjM9N7CKFOxCCYQi#adicionar-variacao). | Radio |
| ID Valor Campo | Código numérico que identifica o valor do campo. | 689 |
| Nome Valor Campo | Nome do valor do campo. | Cor |
| Código Especificação | Código numérico que identifica a relação entre o campo e aquele SKU. | 397 |
| Valor Especificação  | Valor atribuído ao campo da especificação de SKU. Esta é a única informação que pode ser editada via planilha. | Azul |

## Saiba mais

* [Importar e exportar produtos e SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-produtos-e-skus-via-planilha-beta--5udKxWP1ZeBD7QB7Fy2BNl)
* [Importar e exportar especificações de produtos via planilha (Beta)](/pt/tutorial/importar-e-exportar-especificacoes-de-produtos-via-planilha-beta--jQcmbocCb7kjHOr1JSWIL)
* [Importar e exportar imagens de produtos e SKUs via planilha (Beta)](/pt/tutorial/importar-e-exportar-imagens-de-produtos-e-skus-via-planilha-beta--6zBisMdxDYeBF49LPzvfqt)
