---
title: Previsão incorreta de embarque quando os itens são entregues programados
id: 32RG7BjY9cScxj9e9bcDPS
status: DRAFT
createdAt: 2022-09-09T18:25:35.348Z
updatedAt: 2023-02-01T21:09:01.732Z
publishedAt: 
firstPublishedAt: 2022-09-09T18:25:35.902Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: previsao-incorreta-de-embarque-quando-os-itens-sao-entregues-programados
kiStatus: Backlog
internalReference: 545697
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A exibição dos valores de entrega na visualização de remessa (carrinho) está incorreta quando os itens são entregues programados e todos esses itens deixam o mesmo SLA. Mesmo com a API devolvendo o valor correto, a IU não reflete esta informação e exibe o valor incorreto.



## Simulação


Adicione dois ou mais itens no carrinho com entrega programada, a IU mostrará um valor diferente do que a devolução API



## Workaround


N/A

