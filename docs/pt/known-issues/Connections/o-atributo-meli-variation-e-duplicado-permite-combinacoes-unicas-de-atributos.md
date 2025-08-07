---
title: "O atributo MELI Variation é duplicado. Permite combinações únicas de atributos."
id: 7A80EYAOYmEWSlpvWrbXAT
status: PUBLISHED
createdAt: 2023-02-23T13:00:55.730Z
updatedAt: 2023-02-23T13:00:56.222Z
publishedAt: 2023-02-23T13:00:56.222Z
firstPublishedAt: 2023-02-23T13:00:56.222Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slugEN: o-atributo-meli-variation-e-duplicado-permite-combinacoes-unicas-de-atributos
locale: pt
kiStatus: Backlog
internalReference: 758331
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente temos um problema com a integração Mercado Livre, quando o vendedor mapeou um valor dentro do mapeador que permite variação, mas o valor é criado dentro do produto VTEX, o que acontece é que a integração MELI enviará o valor como variação, mas deve ser enviada como informação.

O primeiro SKU será exportado, mas depois fará com que o próximo SKU seja considerado como duplicado na MELI, pois para o mapeador a mesma especificação de produto será enviada como variação para a MELI.


##

## Simulação



Dentro do menu da ponte de produtos, você verá um erro: **O atributo da variação é duplicado. Permitidas combinações únicas de atributos.**

Importante notar que este erro pode acontecer por múltiplas razões, a variação pode realmente ser duplicada dentro do catálogo, ou mapeador. Portanto, a primeira coisa é verificar dentro da SKU se ela realmente não está duplicada.


##

## Workaround



Remova o valor dentro do mapeador que está causando a duplicação do AD.





