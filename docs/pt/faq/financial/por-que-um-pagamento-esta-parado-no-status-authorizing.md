---
title: 'Por que um pagamento está parado no status Authorizing?'
id: 3hMw16ZijKm6QmSSY0KOGk
status: PUBLISHED
createdAt: 2019-01-24T20:30:45.163Z
updatedAt: 2025-09-26T13:15:48.309Z
publishedAt: 2025-09-26T13:15:48.309Z
firstPublishedAt: 2019-01-24T20:30:45.528Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: payment-stuck-at-authorizing-status
locale: pt
legacySlug: 
---

O status __Authorizing__ é onde o Pagamentos está tentando se comunicar com os sistemas de adquirentes ou de outros gateways. Neste status, ficamos aguardando a resposta sobre a __aprovação do pagamento__.

Pode ocorrer de alguns dos sistemas dos parceiros estarem enfrentando alguma instabilidade no momento em que tentamos nos comunicar com eles. Para resolver este problema, o Pagamentos da VTEX possui uma feature automática de __retentativas__. 

Esta feature foi desenvolvida para atender aos casos em que sistemas participantes do fluxo estejam __momentaneamente fora do ar__. Desta forma, o Pagamentos preserva as informações do pagamento e aguarda para realizar uma nova tentativa. Esta feature permite que o pagamento __não seja perdido__ em caso de instabilidade de sistemas de terceiros.

Uma vez normalizada a situação do sistema parceiro, o Pagamentos envia as informações sobre o pagamento e o fluxo de aprovação pode seguir normalmente.
