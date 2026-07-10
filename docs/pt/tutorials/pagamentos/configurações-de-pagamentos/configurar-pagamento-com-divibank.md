---
title: 'Configurar pagamento com Divibank'
id:
status: PUBLISHED
createdAt: 2026-06-29T00:00:00.000Z
updatedAt: 2026-06-29T00:00:00.000Z
publishedAt: 2026-06-29T00:00:00.000Z
firstPublishedAt: 2026-06-29T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-divibank
legacySlug: configurar-pagamento-com-divibank
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Divibank. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, American Express, Elo, Mastercard, BankInvoice e Pix.

Para configurar Divibank, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **divibank** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Divibank.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Divibank na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha os campos **Divibank Api Key** e **Prazo para vencimento do boleto em dias. (O padrão é 1 dia)** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Divibank, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Divibank pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

