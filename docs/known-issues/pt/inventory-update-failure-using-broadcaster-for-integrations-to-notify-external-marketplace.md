---
title: Falha na atualização do inventário usando Broadcaster for Integrations para Notificar o Mercado Externo
id: 25IVNGiJJYIl8Ppb3UuNqo
status: PUBLISHED
createdAt: 2022-03-24T19:30:24.948Z
updatedAt: 2022-11-25T21:59:06.502Z
publishedAt: 2022-11-25T21:59:06.502Z
firstPublishedAt: 2022-05-18T18:06:41.252Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: falha-na-atualizacao-do-inventario-usando-broadcaster-for-integrations-para-notificar-o-mercado-externo
kiStatus: Fixed
internalReference: 549645
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Há um fluxo no caso de contas VTEX que utilizem Maketplaces externos e essa conta deve notificar esse Mercado externo a respeito da atualização do inventário da SKU. E o devido cache ou fila completa que as informações sincrônicas não vão adiante corretamente.
Atualmente no fluxo ItemAvailability, se houver um erro para salvar na busca elástica, um trabalhador irá salvá-la em seu lugar. Se por algum motivo a fila estiver cheia e um item demorar mais tempo para ser continuado na busca elástica, as informações no cache podem se tornar inconsistentes.




## Simulação



Não há como simular o erro, mas você verá a atualização incorreta do lado da integração com o valor anterior do inventário.




## Workaround



Não há nenhuma solução disponível.

