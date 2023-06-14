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
slug: a-paginacao-inteligente-dos-valores-de-campo-da-busca-inteligente-e-limitada-a-9999-itens
locale: pt
kiStatus: Backlog
internalReference: 428486
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A Intelligent Search tem um problema com a paginação de valores. Isto resulta em alguns valores não serem exibidos ao selecioná-lo em um filtro de condições, como as condições das Regras de Merchandising, por exemplo. Se o campo selecionado contiver mais de 9.999 valores, somente os primeiros 9.999 serão exibidos no dropdown de visualização.



## Simulação


Ir para uma nova página de criação de Regras de Merchandising:
https://{accountName}.myvtex.com/admin/search/custom-result/create/

No caso abaixo, o campo "marca" (marca) tem mais de 9.999 entradas, portanto, quando o valor "JEIBAO" é digitado, ele não aparece no dropdown a ser selecionado.

 ![](https://vtexhelp.zendesk.com/attachments/token/sNrA3WpRgNna0svXUmZ9zUriO/?name=inline-1946343279.png)

A consulta do graphQL que carrega esta lista em Admin só é capaz de obter um máximo de 9.999 registros.

 ![](https://vtexhelp.zendesk.com/attachments/token/4p6FFv3vW1ZPFKuvV8dbkyCCj/?name=inline-564811771.png)



## Workaround


Não há nenhuma solução disponível.

