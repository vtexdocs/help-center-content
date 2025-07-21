---
title: "Informações incompatíveis na interface de usuário do checkout levam à visualização incorreta de pacotes"
id: 4rZvjBKLiYZ2H7tW8nK14b
status: PUBLISHED
createdAt: 2025-01-28T19:09:22.628Z
updatedAt: 2025-01-28T19:09:23.318Z
publishedAt: 2025-01-28T19:09:23.318Z
firstPublishedAt: 2025-01-28T19:09:23.318Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: informacoes-incompativeis-na-interface-de-usuario-do-checkout-levam-a-visualizacao-incorreta-de-pacotes
locale: pt
kiStatus: Backlog
internalReference: 1170509
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


O componente de omnishipping da interface do usuário do Checkout espera a mesma ordenação para o objeto orderForm `items` e o objeto orderForm `shippingData.logisticsInfo`.

Quando essa ordenação não corresponde aos dois objetos, as informações do pacote do pedido podem apresentar itens e pacotes incompatíveis.

## Simulação


Não há um processo passo a passo direto para replicar esse cenário, mas ele pode ser verificado no orderForm via API.



## Workaround


N/A





