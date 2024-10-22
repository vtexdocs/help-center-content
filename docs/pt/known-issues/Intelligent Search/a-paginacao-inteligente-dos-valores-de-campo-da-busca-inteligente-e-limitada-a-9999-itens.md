---
title: 'A paginação inteligente dos valores de campo da Busca Inteligente é limitada a 9.999 itens'
id: 1AH9HOWWqOnENncdxIBszv
status: PUBLISHED
createdAt: 2022-03-21T17:42:26.464Z
updatedAt: 2022-11-25T21:57:37.901Z
publishedAt: 2022-11-25T21:57:37.901Z
firstPublishedAt: 2022-03-21T17:42:26.905Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: intelligent-searchs-pagination-of-field-values-is-limited-to-9999-items
locale: pt
kiStatus: Backlog
internalReference: 428486
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


A Intelligent Search tem um problema com a paginação de valores. Isto resulta em alguns valores não serem exibidos ao selecioná-lo em um filtro de condições, como as condições das Regras de Merchandising, por exemplo. Se o campo selecionado contiver mais de 9.999 valores, somente os primeiros 9.999 serão exibidos no dropdown de visualização.



## Simulação


Ir para uma nova página de criação de Regras de Merchandising:
https://{accountName}.myvtex.com/admin/search/custom-result/create/

No caso abaixo, o campo "marca" (marca) tem mais de 9.999 entradas, portanto, quando o valor "JEIBAO" é digitado, ele não aparece no dropdown a ser selecionado.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Intelligent Search/a-paginacao-inteligente-dos-valores-de-campo-da-busca-inteligente-e-limitada-a-9999-itens_1.png)

A consulta do graphQL que carrega esta lista em Admin só é capaz de obter um máximo de 9.999 registros.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Intelligent Search/a-paginacao-inteligente-dos-valores-de-campo-da-busca-inteligente-e-limitada-a-9999-itens_2.png)



## Workaround


Não há nenhuma solução disponível.

