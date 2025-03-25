---
title: 'Quantidade de marcas ultrapassa o limite do excel na planilha de mapeamento'
id: 4sYUppK1iceta3rO6lLO1K
status: PUBLISHED
createdAt: 2021-08-31T18:18:28.874Z
updatedAt: 2022-12-22T20:41:20.781Z
publishedAt: 2022-12-22T20:41:20.781Z
firstPublishedAt: 2021-08-31T19:03:34.028Z
contentType: knownIssue
productTeam: Channels
author: 2mXZkbi0oi061KicTExNjo
tag: Suggestions
slugEN: the-number-of-brands-in-the-mapping-template-exceeds-the-excel-maximum-limit
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Para compatibilizar os catálogos entre seller e marketplace, é necessário que seja feito o [mapeamento de categorias, marcas e especificações](https://help.vtex.com/pt/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521).

Marketplaces não conseguem exportar a [planilha de marcas](https://help.vtex.com/pt/tutorial/mapping-categories-and-brands-for-the-marketplace--tutorials_1521#mapeamento-de-marcas) de seus sellers para realizarem o mapeamento, quando o número de marcas registradas pelos sellers ultrapassa o [limite do Excel](https://support.microsoft.com/pt-br/office/especificacoes-e-limites-do-microsoft-excel-1672b34d-7043-467e-8e27-269d656771c3).

## Simulação

Esse erro ocorre quando marketplaces acessam em seu Admin VTEX: __MARKETPLACE__ > __Sellers__ > __Categorias e marcas__ e no campo __Mapear Marcas__, de sellers com alto número de marcas,  clicam em `Baixar tabela atual`. Ao invés de receber por email o arquivo Excel da tabela, recebem um email relatando "Error exporting Brands Mapping spreadsheet".

## Workaround

Quando essa situação ocorre, não é possível realizar o mapeamento de marcas. Sugerimos que marketplaces selecionem a marca manualmente ao catalogar SKUs pela página [SKUs Recebidos](https://help.vtex.com/pt/tutorial/sugerindo-e-aprovando-skus/).

