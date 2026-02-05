---
title: 'Importar e exportar especificações de produtos via planilha (Beta)'
id: jQcmbocCb7kjHOr1JSWIL
status: PUBLISHED
createdAt: 2025-09-26T15:11:47.384Z
updatedAt: 2025-10-13T22:44:30.267Z
publishedAt: 2025-10-13T22:44:30.267Z
firstPublishedAt: 2025-09-26T16:15:47.785Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: importing-and-exporting-product-specifications-using-a-spreadsheet-beta
legacySlug: importacao-e-exportacao-de-especificacoes-de-produtos-via-planilha-beta
locale: pt
subcategoryId: 6XPsLadoT3moZ7eTduCg3c
---

> ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com nosso [Suporte](https://supporticket.vtex.com/support).

No Admin VTEX, você pode gerenciar a importação e a exportação de especificações de produtos utilizando planilha, conforme apresentado nas seções:

* [Importar especificações de produtos via planilha](#importar-especificacoes-de-produtos-via-planilha)  
* [Exportar especificações de produtos via planilha](#exportar-especificacoes-de-produtos-via-planilha)  
* [Ver campos da planilha de especificações de produtos](#ver-campos-da-planilha-de-especificacoes-de-produtos)  

## Importar especificações de produtos via planilha

Para importações de especificações de produtos por planilha, realize os seguintes passos:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/docs/tutorials/produtos-e-skus) na barra de busca no topo da página.
2. No topo da página, clique em `Importar`.
3. Clique em `Especificações de produto`.
4. Adicione a planilha com extensão `.xls` ou `.xlsx`. Você pode arrastar o arquivo e soltá-lo sobre a área indicada, ou clicar sobre a janela e selecionar o arquivo localmente.

  > ⚠️ Para obter um modelo da planilha a ser importada, realize a [exportação das especificações de produtos](#exportar-especificacoes-de-produtos-via-planilha).

5. Quando o arquivo terminar de carregar, clique em `Importar`.

  > ❗ O tempo de importação vai depender do volume de informações sendo processado. A operação não será afetada, caso você saia da página.

Enquanto a operação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Após a conclusão, você verá a mensagem _"Especificações de produtos importadas com sucesso"_, e receberá um email de confirmação.

## Exportar especificações de produtos via planilha

Para exportar um arquivo `.xlsx` com informações sobre especificações de produtos, realize os seguintes passos:

> ℹ️ As informações exportadas correspondem aos campos apresentados na seção [Ver campos da planilha de especificações de produtos](#ver-campos-da-planilha-de-especificacoes-de-produtos).

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite [Produtos e SKUs](/pt/docs/tutorials/produtos-e-skus) na barra de busca no topo da página.
2. (Opcional) Caso queira exportar as especificações de produtos de determinados produtos, [busque](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#buscar-produtos) ou [filtre](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By#filtrar-produtos) os itens desejados. Este passo não é necessário para exportar as especificações de todos os produtos do seu catálogo.
3. No topo da página, clique em `Exportar`.
4. Clique em `Especificações de produto`.

Enquanto a exportação estiver em andamento, aparecerá a mensagem de que o arquivo está sendo processado. Mesmo que você saia da página, a operação não será interrompida. Você pode [acompanhar o andamento da exportação pela janela](/pt/tutorial/importar-e-exportar-produtos-e-skus-via-planilha-beta--5udKxWP1ZeBD7QB7Fy2BNl#acompanhar-janela-do-processo-de-exportacao) que surge na página. 

Após a finalização da exportação, você receberá um email com um link para fazer o download do arquivo. O prazo para o download pelo link é de 24 horas, após este período o link expira. Também é possível baixar o arquivo pela janela que surgiu na página.

## Ver campos da planilha de especificações de produtos

A tabela a seguir apresenta a descrição e o exemplo de preenchimento dos campos da planilha de importação de especificações de produtos. Campos obrigatórios estão marcados com um asterisco (*).

| **Campo** | **Descrição** | **Exemplo** |
| :---: | :--- | :---: |
| ID Produto* | Código numérico único identificador do produto. | 310117603 |
| Nome Produto | Nome do produto apresentado para os clientes na experiência de navegação. | Corebiz camiseta |
| Código de referência Produto | Código de referência único do produto, utilizado internamente pela loja. Para preencher este campo, use uma combinação de letras e/ou números. | camisaCor |
| ID Marca | Código numérico que identifica a [marca](/pt/docs/tutorials/o-que-e-uma-marca) do produto. Esta informação pode ser encontrada no Admin VTEX, em **Catálogo > Marcas**, ou usando o endpoint [Get brand list](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pvt/brand/list). | 2000003 |
| Marca | Nome da [marca](/pt/docs/tutorials/o-que-e-uma-marca) do produto. Uma vez preenchido, este campo não pode ser editado. | AOC |
| ID Departamento | Código numérico que identifica a categoria de maior nível hierárquico do produto. | 1000014 |
| Departamento | Nome da categoria de maior nível hierárquico do produto. | Roupas |
| ID Categoria | Número identificador único da categoria de menor nível hierárquico do produto. Essa informação pode ser encontrada no Admin VTEX, em **Catálogo > Categorias**, ou usando o endpoint [Get category tree](https://developers.vtex.com/docs/api-reference/catalog-api#get-/api/catalog_system/pub/category/tree/-categoryLevels-). | 1000014 |
| Categoria | Nome da categoria de menor nível hierárquico do produto. | Blusas |
| ID Campo | Código numérico que identifica o campo da especificação de produto para aquele produto. | 493 |
| Nome Campo | Nome do campo da especificação de produto. | Material |
| Nome Tipo Campo | [Tipo do campo da especificação de produto](/pt/tutorial/cadastrar-especificacoes-ou-campos-de-produto--tutorials_106#tipos-de-campo-de-produto), que pode ser:<ul><li>Texto</li><li>Texto Grande</li><li>Número</li><li>Combo</li><li>Radio</li><li>CheckBox</li><li>Texto Indexado</li><li>Texto Grande Indexado</li></ul>Caso você utilize a versão beta de categorias, confira os tipos de campo aceitos para [atributos](/pt/tutorial/criar-ou-editar-categorias-atributos-e-variacoes-beta--1lzs3fHjM9N7CKFOxCCYQi#adicionar-atributo). | Texto |
| ID Valor Campo | Código numérico que identifica o valor do campo. | 290 |
| Nome Valor Campo | Nome do valor do campo. | Sintético |
| Código Especificação | Código numérico que identifica a relação entre o campo e aquele produto. | 418  |
| Valor Especificação | Valor atribuído ao campo da especificação de produto. Esta é a única informação que pode ser editada via planilha. | Poliester |

## Saiba mais

* [Importar e exportar produtos e SKUs via planilha (Beta)](/pt/docs/tutorials/importar-e-exportar-produtos-e-skus-via-planilha-beta)
* [Importar e exportar especificações de SKUs via planilha (Beta)](/pt/docs/tutorials/importar-e-exportar-especificacoes-de-skus-via-planilha-beta)
* [Importar e exportar imagens de produtos e SKUs via planilha (Beta)](/pt/docs/tutorials/importar-e-exportar-imagens-de-produtos-e-skus-via-planilha-beta)
