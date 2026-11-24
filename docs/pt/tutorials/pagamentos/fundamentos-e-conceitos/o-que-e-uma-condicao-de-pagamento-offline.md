---
title: 'Condição de pagamento offline'
createdAt: 2019-01-24T20:45:37.593Z
updatedAt: 2026-09-30T20:30:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: what-is-an-offline-payment-condition
locale: pt
hidden: false
---

Condições de pagamento offline são as que dependem de uma ação do cliente fora do ambiente da loja para a transação seguir. O fluxo tem três etapas:

1. O cliente escolhe uma condição de pagamento offline.
2. O provedor de pagamento ou conector gera o boleto ou o código de pagamento.
3. O provedor confirma o pagamento à VTEX, ou a confirmação chega pelo arquivo de retorno descrito em [Como funcionam as conciliações bancárias](/pt/docs/tutorials/conciliacoes-bancarias).

Com a confirmação, a loja volta a ter controle da transação e pode concluir o pedido. Até lá, o pedido permanece com o status [**Pagamento pendente**](/pt/docs/tutorials/fluxo-e-status-de-pedidos) e, se o cliente não pagar dentro do prazo, o pedido é cancelado.

Exemplos de condições de pagamento offline:

- **Boleto bancário:** o cliente paga direto ao banco, em agência, caixa eletrônico ou aplicativo, antes de o produto seguir para a entrega. O fluxo completo está em [Boleto bancário registrado: fluxo básico de pagamento](/pt/docs/tutorials/boleto-bancario-registrado-fluxo-basico-de-um-pagamento). Para ativar o boleto na loja, veja [Configurar boleto bancário](/pt/docs/tutorials/como-configurar-boleto-bancario).
- **Ficha Depósito:** usada no México. O cliente paga em pontos autorizados. O funcionamento está em [O que é Ficha Depósito](/pt/docs/tutorials/o-que-e-ficha-deposito).
- **Condições offline do Mercado Pago:** disponíveis em países da América Latina. A configuração está em [Configurar condições de pagamento offline usando MercadoPago (América Latina)](/pt/docs/tutorials/configurar-condicoes-de-pagamento-offline-usando-mercadopago-latam).

