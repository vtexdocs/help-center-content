---
title: 'Modais Configuração de Divergências Deprecated Divergences - Política de embarque'
id: TYWgIv5xOTUBWdC63FbK5
status: PUBLISHED
createdAt: 2022-05-18T18:20:55.870Z
updatedAt: 2022-11-25T21:59:19.021Z
publishedAt: 2022-11-25T21:59:19.021Z
firstPublishedAt: 2022-05-18T18:20:56.247Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: modais-configuracao-de-divergencias-deprecated-divergences-politica-de-embarque
locale: pt
kiStatus: Scheduled
internalReference: 445866
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há um cenário relativo aos modais usados e depreciados sem igual.

A política de embarque não mostra os modais depreciados usados corretamente e está causando dúvidas nas simulações porque a política de embarque não está capacitada a lidar com isso.

Tudo parece normal na configuração da interface de usuário, mas é possível verificar a API para ver a incoerência dos modais.




## Simulação


A SKU tem um modal depreciado configurado.
Na Política de Embarque não aparece como depreciado na IU.




## Workaround


Há duas maneiras de corrigir isso, a primeira é mudar o Modal no SKU para um Suported by Shippng Policy.

Ou incluindo a depreciada sobre a Política de Embarque por API.

