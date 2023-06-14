---
title: 'O hub do Gift Card está adicionando uma contrabarra extra ("/") ao ligar para os fornecedores.'
id: 2ZstMKKGUbrdXGuhS2Rr1f
status: PUBLISHED
createdAt: 2022-09-30T21:07:47.856Z
updatedAt: 2022-11-25T22:04:08.181Z
publishedAt: 2022-11-25T22:04:08.181Z
firstPublishedAt: 2022-09-30T21:07:48.985Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: o-hub-do-gift-card-esta-adicionando-uma-contrabarra-extra-ao-ligar-para-os-fornecedores
locale: pt
kiStatus: Backlog
internalReference: 669575
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Nossa API do hub Gift Card está adicionando uma contrabarra extra ao pedido ao ligar para os fornecedores. Isto é causado pela forma como convertemos o serviçoUrl e o concatenamos com a URL fornecida pelo conector.



## Simulação


Registre um novo fornecedor em /giftcardproviders e realize uma solicitação em um dos APIs, por exemplo /giftcards/_serach. O centro chamará o provedor e adicionará um "/" como https://baseUrl**//**giftcard/_serach.



## Workaround


É necessário tratar deste assunto do lado do fornecedor.

