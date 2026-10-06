---
title: 'Configurar pagamento com Koin-PaymentsV2'
id:
status: PUBLISHED
createdAt: 2026-06-16T00:00:00.000Z
updatedAt: 2026-06-16T00:00:00.000Z
publishedAt: 2026-06-16T00:00:00.000Z
firstPublishedAt: 2026-06-16T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-koin-paymentsv2
legacySlug: configurar-pagamento-koin-paymentsv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Koin-PaymentsV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, Diners, Hipercard, Mastercard, American Express, Visa Electron, Maestro, Discover, Elo, Mastercard Debit, Pix, Cabal, BoletoParceladoKoin e Naranja.

Para configurar Koin-PaymentsV2, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Koin-Payments-V2** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Koin-PaymentsV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Koin-PaymentsV2 na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Clique em `Salvar`.

Para configurar os meios de pagamento a serem processados pela Koin-PaymentsV2, acesse [Condições de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os meios de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o conector Koin-PaymentsV2 pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.