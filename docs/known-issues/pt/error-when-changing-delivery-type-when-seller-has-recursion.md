---
title: 'Erro ao mudar o tipo de entrega quando o vendedor tem recorrência'
id: 7JLnqVWHz94sQZKMOGUkKC
status: PUBLISHED
createdAt: 2022-06-14T14:07:38.881Z
updatedAt: 2022-11-25T21:52:59.031Z
publishedAt: 2022-11-25T21:52:59.031Z
firstPublishedAt: 2022-06-14T14:07:39.358Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: erro-ao-mudar-o-tipo-de-entrega-quando-o-vendedor-tem-recorrencia
locale: pt
kiStatus: Backlog
internalReference: 597915
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


No cenário em que o vendedor tem recorrência, ao chegar na fase de checkout e mudar o tipo de entrega da entrega para a retirada, o usuário recebe o erro "Incapaz de se comunicar com o vendedor ....", mas na verdade o erro é "O endereço não pode ser usado para o canal de entrega dado". Isto é devido à recorrência onde a API não sabe como lidar com este tipo de cenário e a UI não seleciona um canal de entrega.



## Simulação


No cenário de recorrência, vá para a etapa de checkout e escolha mudar o tipo de entrega da entrega para o pickup, ao fazer esta mudança o erro ocorre.



## Workaround


N/A

