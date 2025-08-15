---
title: 'Configurar pagamento com PayPalCheckout'
id: 16hMsDk96fEeIH6n34NA9N
status: PUBLISHED
createdAt: 2025-02-04T18:12:01.558Z
updatedAt: 2025-04-09T18:10:22.507Z
publishedAt: 2025-04-09T18:10:22.507Z
firstPublishedAt: 2025-02-04T18:26:28.114Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-paypalcheckout
legacySlug: configurar-pagamento-com-paypalcheckout
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PayPalCheckout. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como PayPalCheckout, PayPalRT, PayPalOXXO, PayPalBCDC, PayPalACDC e PaypalACDCV2.

Para configurar PayPalCheckout, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **PayPalCheckout** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta PayPalCheckout.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PayPalCheckout na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **FraudNet - Source Web Id**, **Enable STC**, **High Risk Transaction**, **STC Merchant Id**, **Vertical**, **Locale**, **Sandbox**, **Force login (ACDC)**, **Display Powered by PayPal Logo (ACDC)**, **Language**, **AutoClick (Checkout & BCDC)**, **Installments rules**, **T&C Checkbox identifier**, **Invoice ID**, **Account type** e **Groceries or Subscriptions** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela PayPalCheckout, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor PayPalCheckout pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

