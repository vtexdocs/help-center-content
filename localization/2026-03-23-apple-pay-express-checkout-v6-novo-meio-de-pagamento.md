---
title: 'Apple Pay Express Checkout V6: novo meio de pagamento'
status: PUBLISHED
createdAt: 2026-03-23T00:00:00.000Z
updatedAt: 2026-03-23T00:00:00.000Z
publishedAt: 2026-03-23T00:00:00.000Z
contentType: updates
productTeam: Channels
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2026-03-23-apple-pay-express-checkout-v6-new-payment-method
locale: pt
announcementSynopsisPT: 'Apple Pay Express Checkout V6 em closed beta para lojas com Checkout V6, com autenticação no dispositivo e compra mais rápida.'
---
Agora, você pode oferecer o **Apple Pay Express Checkout V6** na sua loja VTEX. Esse meio de pagamento está disponível para compras realizadas em dispositivos compatíveis com macOS e iOS e nos navegadores Safari e Google Chrome.

> ⚠️ A funcionalidade **Apple Pay Express Checkout V6** está em fase de closed beta.

## O que mudou?

Anteriormente, disponível apenas para lojas com [FastCheckout](https://help.vtex.com/pt/announcements/2024-04-03-fastcheckout-aumente-sua-conversao-com-o-novo-checkout), o [Apple Pay](https://www.apple.com/br/apple-pay/) agora também pode ser utilizado por lojas que operam com o [Checkout V6](https://help.vtex.com/pt/docs/tutorials/ativar-o-checkout-v6).

Com essa atualização, os clientes passam a contar com uma experiência de *express checkout*, sem precisar preencher os dados manualmente. Ao selecionar o Apple Pay, é possível confirmar a compra em poucos cliques.

A autenticação do pagamento é realizada diretamente no dispositivo do cliente, por meio de Face ID, Touch ID ou senha, garantindo uma jornada rápida, segura e sem fricção.

  ![Apple_Pay_Checkout_V6 _PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2026/março/apple-pay-checkout-v6.png)

### Limitações atuais

O **Apple Pay Express Checkout V6** possui as seguintes limitações nesta versão:

- Não há suporte a pagamentos parcelados ou promoções por bandeiras de cartão.
- Indisponível para entrega agendada ou [ponto de retirada](https://help.vtex.com/pt/docs/tutorials/cadastro-de-pontos-de-retirada). Nesses casos, os clientes devem utilizar outros meios de pagamento no checkout.

## O que precisa ser feito?

O **Apple Pay Express Checkout V6** está em fase de testes (Closed Beta). Caso deseje habilitar esse meio de pagamento em sua loja, siga os passos abaixo:

1. Verifique com o provedor de pagamento escolhido se há suporte a transações com cartões de crédito usando o [Device Primary Account Number (DPAN)](https://help.vtex.com/pt/docs/tutorials/dpan-e-fpan-entendendo-a-seguranca-no-fluxo-de-pagamentos-tokenizados-online). Não é necessário que haja suporte específico ao Apple Pay. O requisito é apenas que o provedor seja capaz de processar transações com DPAN.

> ⚠️ Caso o seu provedor de pagamento ainda não suporte transações com DPAN, entre em contato com o parceiro responsável pelo conector para solicitar a atualização. Se você for o parceiro responsável, implemente o suporte conforme as orientações disponíveis em [Processing DPAN cards in external connectors](https://docs.google.com/document/d/1iagUb8ISKJseTNn_KdSRqTJPQvzjEPMi6das4Q_6G1o/edit?tab=t.0#heading=h.qi06l7cy5n1b).

2. Entre em contato com o [Suporte VTEX](https://support.vtex.com/) para solicitar a habilitação do **Apple Pay Express Checkout V6** em sua loja.
