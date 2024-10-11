---
title: 'Solicitação incorreta ao tentar acessar um inventário com uma grande quantidade de itens reservados'
id: 4DujUMKeYTlx2MXAjnHlS5
status: PUBLISHED
createdAt: 2024-07-03T20:18:55.508Z
updatedAt: 2024-07-03T20:23:50.434Z
publishedAt: 2024-07-03T20:23:50.434Z
firstPublishedAt: 2024-07-03T20:18:56.626Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: bad-request-when-trying-to-access-an-inventory-with-a-huge-quantity-of-reserved-items
locale: pt
kiStatus: Fixed
internalReference: 296066
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Quando tentamos ver os detalhes das reservas de um SKU no módulo de logística, na lista de inventário de produtos (**Inventory & Shipping** > **Inventory management**), podemos ter um problema quando há muitas reservas ativas.

Não é possível acessar ou atualizar um inventário de SKU com uma grande quantidade de itens reservados, como, por exemplo, 100.000 reservas ativas.

O usuário pode ver na interface do usuário o erro: **"Erro ao tentar buscar a reserva "**

Ou, nos detalhes da resposta da API, o erro: **"Muitas reservas ativas "**

## Simulação



## Workaround



