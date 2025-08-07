---
title: 'Configurar fluxo de autenticação 3DS 2'
id: 58XMn5LOA6fwrSkoDoAsg2
status: PUBLISHED
createdAt: 2020-11-26T18:03:32.678Z
updatedAt: 2025-06-02T17:06:50.600Z
publishedAt: 2025-06-02T17:06:50.600Z
firstPublishedAt: 2020-12-22T12:00:47.453Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: setting-up-3ds-2-authentication-flow
legacySlug: configurar-fluxo-de-autenticacao-3ds-2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O 3D Secure 2.0 (3DS 2) é um fluxo de autenticação que aumenta a segurança nos pagamentos realizados com cartões de crédito e débito, por meio da análise interna de uma grande quantidade de dados presentes em cada transação.

<div class="alert alert-warning">
O 3DS 2 é suportado somente por alguns conectores na VTEX e deve ser implementado via <a href="https://developers.vtex.com/docs/guides/payments-integration-payment-app#scenario-2-payment-app-and-3d-secure-2">Payment App</a>. Verifique junto ao seu provedor de pagamentos se esta funcionalidade está disponível e os passos necessários para realizar a sua configuração.
</div>

<div class = "alert alert-warning">
Na VTEX, o 3DS 2 não permite realizar compras utilizando dois cartões. Caso um pedido seja realizado nessas condições, o pagamento será cancelado.
</div>
