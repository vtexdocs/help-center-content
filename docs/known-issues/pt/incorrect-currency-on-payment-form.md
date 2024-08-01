---
title: 'Moeda incorreta no formulário de pagamento'
id: 636reFJs0MeHQJO0NlQV7Z
status: PUBLISHED
createdAt: 2022-03-13T21:29:33.920Z
updatedAt: 2024-02-16T20:27:07.481Z
publishedAt: 2024-02-16T20:27:07.481Z
firstPublishedAt: 2022-03-13T21:29:34.493Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: moeda-incorreta-no-formulario-de-pagamento
locale: pt
kiStatus: No Fix
internalReference: 449286
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O checkout `orderForm` está mostrando moeda errada (BRL ao invés de USD) quando temos duas regras diferentes para duas políticas comerciais (Brasil e EUA) com conector PayPal. Os clientes não são capazes de mudar para corrigir a moeda. Portanto, ao fazer o pedido, mesmo que a regra correta seja igualada, temos um erro:

_(400) Má solicitação, detalhe: _
_{{"mensagem": "A moeda de captura deve ser a mesma que a moeda da autorização"...}_



## Simulação



N/A



## Workaround



N/A

