---
title: 'Boleto Bancário Registrado - Fluxo básico de pagamento'
id: 1WlPkeueWQiykUwW8mcM4S
status: PUBLISHED
createdAt: 2019-01-24T21:38:41.612Z
updatedAt: 2019-12-31T15:22:32.884Z
publishedAt: 2019-12-31T15:22:32.884Z
firstPublishedAt: 2019-01-24T21:38:41.989Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: registered-ticket-flow
locale: pt
legacySlug: boleto-bancario-registrado-fluxo-basico-de-um-pagamento
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

O boleto bancário registrado é um dos __meios de pagamento__ que pode ser utilizado para o fechamento de compras em sua loja. Ele é composto por campos específicos que asseguram que o pagamento chegue corretamente ao seu destino final. 

Para emitir estes títulos, sua loja deve entrar em contato com alguma instituição financeira que possa emitir os boletos registrados.

A seguir, veremos como funciona o fluxo básico de um pagamento com boleto registrado. O fluxo é dividido em duas partes: __Emissão do Boleto__ e __Conciliação Bancária__.
 
## Emissão do Boleto

![Frame 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments overview/boleto-bancario-registrado-fluxo-basico-de-um-pagamento_1.png)

1. Seu __e-commerce__ informa ao __Gateway__ que um pedido será pago através de boleto bancário.
2. O gateway entra em contato com o __Banco__ para realizar o registro do boleto.
3. O banco emite o boleto e envia suas informações para o gateway.
4. O gateway gera o link do boleto e envia para sua loja.
5. Sua loja envia o link do boleto para seu cliente realizar o pagamento.

Neste momento, o boleto ainda não foi pago pelo cliente.

## Pagamento do Boleto e Conciliação Bancária

![Frame 2.1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payments overview/boleto-bancario-registrado-fluxo-basico-de-um-pagamento_2.png)

1. O __Cliente__ paga o boleto diretamente ao __Banco__.
2. O banco envia para o __Gateway__ os arquivos de [conciliação bancária](/pt/tutorial/conciliacoes-bancarias) com as informações sobre o status de pagamento dos boletos.
3. O gateway notifica seu __e-Commerce__ sobre os boletos pagos.

Nesta etapa, a entrega do pedido já pode prosseguir normalmente.
