---
title: 'Por que um pedido não foi enviado para o antifraude?'
excerpt: "Se o conector de pagamento falha nas validações iniciais, o pedido é cancelado e nunca vai para o antifraude. Pedidos cancelados não podem ser reenviados."
id: 5zznO7GMtUYKCkIKyc84II
status: PUBLISHED
createdAt: 2018-02-16T15:50:02.020Z
updatedAt: 2026-10-07T00:00:00.000Z
publishedAt: 2019-12-31T14:25:21.793Z
firstPublishedAt: 2018-02-16T16:16:00.358Z
contentType: frequentlyAskedQuestion
productTeam: Payments
author: authors_59
slugEN: why-was-not-an-order-sent-to-the-anti-fraud
locale: pt
legacySlug: por-que-um-pedido-nao-foi-enviado-para-o-antifraude
---

Sempre que um pagamento é realizado, o conector do gateway de pagamento realiza algumas validações iniciais para prosseguir com o pagamento. Neste ponto, o conector aguarda as respostas em relação às suas validações. 

Após diversas tentativas, caso não obtenha as respostas esperadas, o pagamento e o pedido são cancelados. Os pedidos nesta situação não são enviados para o antifraude.

> ⚠️ Não é possível reenviar um pedido cancelado para o antifraude.

> ℹ️ O [VTEX Copilot](/pt/docs/tutorials/vtex-copilot-no-admin-vtex), no Admin VTEX, pode ajudar a entender este caso: envie o número do pedido e ele consulta a transação e a resposta da adquirente, além de verificar quais provedores antifraude estão configurados na sua loja.
