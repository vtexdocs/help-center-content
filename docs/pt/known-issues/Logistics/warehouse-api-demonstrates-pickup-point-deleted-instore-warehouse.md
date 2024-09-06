---
title: 'Armazém API demonstra o ponto de retirada eliminado (inStore warehouse)'
id: obATI7B4MgRb2lNExdXcV
status: PUBLISHED
createdAt: 2022-05-10T20:45:27.127Z
updatedAt: 2022-11-25T21:59:11.134Z
publishedAt: 2022-11-25T21:59:11.134Z
firstPublishedAt: 2022-05-10T20:45:27.527Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: armazem-api-demonstra-o-ponto-de-retirada-eliminado-instore-warehouse
locale: pt
kiStatus: Fixed
internalReference: 573017
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando você apaga um ponto de coleta ligado a um depósito (inStore warehouse), o ponto de coleta permanece ligado ao depósito se você o consultar via API.



## Simulação


Para simular este comportamento, devemos:

- Criar um ponto de captação;
- Vincule este ponto de coleta a um armazém;
- Eliminar o ponto de coleta;
- Consultar (via API) o depósito, e verificar se o ponto de coleta ainda está ligado aos `pickuPointIds'.



## Workaround


Como alternativa, você pode remover este ponto de coleta do depósito através do Create/update warehouse API.

