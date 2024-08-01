---
title: '[MELI] O atributo está sendo enviado para o MELI sem ser mapeado pelo vendedor'
id: CILYWlvEAlXkcvEYuZ99m
status: PUBLISHED
createdAt: 2023-10-30T10:09:31.578Z
updatedAt: 2023-11-30T11:05:05.907Z
publishedAt: 2023-11-30T11:05:05.907Z
firstPublishedAt: 2023-10-30T10:09:32.150Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: meli-o-atributo-esta-sendo-enviado-para-o-meli-sem-ser-mapeado-pelo-vendedor
locale: pt
kiStatus: Fixed
internalReference: 791380
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, temos um problema que ainda precisa de mais investigação e detalhes, mas há algumas categorias mapeadas dentro do recurso Mapper e alguns atributos que não foram mapeados, mas estão sendo enviados para o MELI.

Isso fará com que algumas SKUs sejam exportadas e outras não, pois a primeira SKU inclui um atributo indesejado e a segunda SKU não será exportada, pois o MELI tem regras que exigem que todas as variações dentro do mesmo produto tenham as mesmas combinações de atributos.

## Simulação



Dentro do menu do produto bridge, você verá um erro para alguns SKUs, conforme mostrado abaixo:
**Variações com diferentes combinações de atributos não são permitidas.**

Isso se deve ao fato de a primeira SKU ter sido exportada com um atributo indesejado, e o restante das SKUs não está sendo enviado para esse atributo.



## Workaround


Existe uma solução alternativa para esse bug? Se sim, descreva-a aqui. Caso contrário, escreva "N/A" ou "Não há nenhuma solução alternativa disponível". Não remova esta seção se não houver solução alternativa, por favor.





