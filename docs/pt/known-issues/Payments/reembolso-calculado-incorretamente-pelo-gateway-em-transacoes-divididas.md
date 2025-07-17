---
title: "Reembolso calculado incorretamente pelo gateway em transações divididas"
id: jiUwsWgePG1Wka7wHTPEj
status: PUBLISHED
createdAt: 2025-03-19T19:38:12.860Z
updatedAt: 2025-03-20T12:35:29.818Z
publishedAt: 2025-03-20T12:35:29.818Z
firstPublishedAt: 2025-03-19T19:38:13.414Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: reembolso-calculado-incorretamente-pelo-gateway-em-transacoes-divididas
locale: pt
kiStatus: Backlog
internalReference: 1196767
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As solicitações de reembolso do gateway têm apenas o valor do montante da comissão, mesmo que a solicitação do sistema de gerenciamento de pedidos tenha sido enviada com o valor total.

Para identificar esse problema conhecido, você deve: Verificar o valor total solicitado nos pedidos e comparar com o valor calculado e solicitado pelo gateway ao provedor. Em seguida, verificar se o valor é diferente entre eles, se o mesmo valor de comissão está no objeto do destinatário.

## Simulação


Não é possível simular.



## Workaround


Não há nenhuma solução alternativa disponível.





