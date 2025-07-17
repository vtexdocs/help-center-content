---
title: 'isBillingAddressDifferent": falso quando deveria ser verdadeiro em uma primeira compra como ponto de coleta'
id: 5eGvyWw2uJewXwUKlUczZx
status: PUBLISHED
createdAt: 2025-02-21T14:51:59.999Z
updatedAt: 2025-02-21T14:52:00.918Z
publishedAt: 2025-02-21T14:52:00.918Z
firstPublishedAt: 2025-02-21T14:52:00.918Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: isbillingaddressdifferent-falso-quando-deveria-ser-verdadeiro-em-uma-primeira-compra-como-ponto-de-coleta
locale: pt
kiStatus: Backlog
internalReference: 1183699
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes, quando uma primeira compra é feita como pick-up, o objeto `shippingData` dentro da transação recebe o endereço de cobrança, mesmo que os dois sejam diferentes. Além disso, o `"isBillingAddressDifferent"` nos detalhes do pagamento recebe false, quando deveria receber true.

## Simulação


Não há como reproduzir o erro de forma assertiva, pois ele é intermitente.



## Workaround


Não há solução alternativa para esse bug.




