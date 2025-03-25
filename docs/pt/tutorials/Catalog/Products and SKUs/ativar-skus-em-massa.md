---
title: 'Ativar SKUs em massa'
id: 4uMZATlSc0kEYiewWKSwEY
status: PUBLISHED
createdAt: 2018-01-30T12:57:18.128Z
updatedAt: 2022-08-24T21:28:24.858Z
publishedAt: 2022-08-24T21:28:24.858Z
firstPublishedAt: 2018-01-30T14:20:27.722Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slugEN: activating-skus-in-bulk
locale: pt
legacySlug: ativar-skus-em-massa
subcategoryId: pwxWmUu7T222QyuGogs68
---

Na plataforma da VTEX, é possível ativar SKUs de forma massiva. Existem dois cenários possíveis:

- Ativar todos os SKUs cadastrados na loja.
- Ativar apenas um grupo de SKUs cadastrados na loja.

Veja a seguir o passo a passo para cada cenário.

## Ativar todos os SKUs 

Para ativar todos os SKUs utilizando o Admin VTEX, siga os passos abaixo:

1. Acesse a URL  `https://{accountName}.myvtex.com/admin/site/productskuactivateall.aspx `.
2. Clique em `Ativar todos os SKUs`.

>⚠️ SKUs cadastrados com dados inválidos não terão a opção de *Ativar o SKU se possível* ativada.
>
> Caso nem todos os SKUs tenham sido marcados com a opção de *Ativar o SKU se possível*, repita o processo descrito acima.

## Ativar um grupo de SKUs 

Para ativar apenas um determinado grupo de SKUs, é possível utilizar uma planilha extraída do Admin VTEX. Veja como:

1. Extraia a planilha de __Produtos e SKUs__ na plataforma. Você pode conferir o passo a passo desse processo em [Como exportar planilha de produtos
](https://help.vtex.com/pt/tutorial/como-exportar-planilha-de-produtos--2sIroGeqZqaN3NAvaSGwWV).
2. Altere na coluna __AtivarSKUSePossível__ o status dos SKUs que deseja ativar. O campo deve ser preenchido apenas com `SIM`.
3. Salve as alterações feitas no documento.
4. Importe a planilha novamente para a plataforma. Vale lembrar que a importação se dá da mesma maneira que a extração.

Além disso, caso a planilha utilizada para importar os novos dados não esteja nos padrões da plataforma, é possível baixar um modelo ajustado no formato utilizado pela VTEX.

## Saiba mais

- [How to activate an SKU](https://developers.vtex.com/vtex-rest-api/docs/how-to-activate-an-sku) (Como ativar um SKU)
