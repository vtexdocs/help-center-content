---
title: "Os PDPs Faststore não são regionalizados"
id: 17wHyAFHm5u2tyaxJ9mXNm
status: PUBLISHED
createdAt: 2024-08-28T19:48:35.858Z
updatedAt: 2025-03-31T14:46:09.620Z
publishedAt: 2025-03-31T14:46:09.620Z
firstPublishedAt: 2024-08-28T19:48:36.848Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: os-pdps-faststore-nao-sao-regionalizados
locale: pt
kiStatus: Fixed
internalReference: 1088656
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A Fastsore usa a busca inteligente para carregar o PDP, mas não usa o regionID para carregá-lo em lojas regionalizadas. Isso leva a problemas com a disponibilidade dos itens. Além disso, usamos a propriedade `hideUnavailableItems=true` na consulta para carregar o PDP. Isso pode levar a inconsistências entre o PLP (que é regionalizado) e o PDP.

## Simulação


Tente procurar um produto que tenha estoque no regionID em que você está regionalizado. Se esse produto não tiver estoque no vendedor abrangente e apenas em vendedores específicos não relacionados a esse regionID, o PLP e o PDP poderão ter informações diferentes

## Workaround


Ative a opção "ShowIfNotAvailable" nos produtos via Catalog para minimizar os efeitos desse problema.
Adicione o vendedor como abrangente para que o produto seja devolvido




