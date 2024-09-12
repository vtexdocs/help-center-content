---
title: 'Erro ao mudar o tipo de entrega quando o vendedor tem recorrência'
id: 7JLnqVWHz94sQZKMOGUkKC
status: PUBLISHED
createdAt: 2022-06-14T14:07:38.881Z
updatedAt: 2024-02-16T20:24:13.311Z
publishedAt: 2024-02-16T20:24:13.311Z
firstPublishedAt: 2022-06-14T14:07:39.358Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: erro-ao-mudar-o-tipo-de-entrega-quando-o-vendedor-tem-recorrencia
locale: pt
kiStatus: No Fix
internalReference: 597915
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


No cenário em que o vendedor tem recorrência, ao chegar na fase de checkout e mudar o tipo de entrega da entrega para a retirada, o usuário recebe o erro "Incapaz de se comunicar com o vendedor ....", mas na verdade o erro é "O endereço não pode ser usado para o canal de entrega dado". Isto é devido à recorrência onde a API não sabe como lidar com este tipo de cenário e a UI não seleciona um canal de entrega.



## Simulação


No cenário de recorrência, vá para a etapa de checkout e escolha mudar o tipo de entrega da entrega para o pickup, ao fazer esta mudança o erro ocorre.



## Workaround


N/A

