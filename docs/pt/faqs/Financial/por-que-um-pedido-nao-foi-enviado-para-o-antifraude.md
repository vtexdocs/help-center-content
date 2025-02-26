---
title: 'Por que um pedido não foi enviado para o antifraude?'
id: 5zznO7GMtUYKCkIKyc84II
status: PUBLISHED
createdAt: 2018-02-16T15:50:02.020Z
updatedAt: 2019-12-31T14:25:21.793Z
publishedAt: 2019-12-31T14:25:21.793Z
firstPublishedAt: 2018-02-16T16:16:00.358Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: why-was-not-an-order-sent-to-the-anti-fraud
locale: pt
legacySlug: por-que-um-pedido-nao-foi-enviado-para-o-antifraude
---

Sempre que um pagamento é realizado, o conector do gateway de pagamento realiza algumas validações iniciais para prosseguir com o pagamento.  Neste ponto, o conector aguarda as respostas em relação às suas validações. 

Após diversas tentativas, caso não obtenha as respostas esperadas, o pagamento e o pedido são cancelados. Os pedidos nesta situação não são enviados para o antifraude.

>⚠️ Não é possível reenviar um pedido cancelado para o antifraude.


