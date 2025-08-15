---
title: 'Configurar pagamento com Barte'
id: 4KYwWluJ0pLKA6BLvNkNRS
status: PUBLISHED
createdAt: 2025-06-11T20:29:38.757Z
updatedAt: 2025-06-11T21:30:35.155Z
publishedAt: 2025-06-11T21:30:35.155Z
firstPublishedAt: 2025-06-11T21:30:35.155Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-barte
legacySlug: configurar-pagamento-com-barte
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Barte. Por meio deste provedor, sua loja pode oferecer pagamento por cartões de crédito, boleto e Pix.

Para configurar Barte, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **VtexBartePaymentProvider** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Barte.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Barte na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Verifique com o provedor Barte a necessidade de selecionar a opção **Requires document**.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Barte, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Barte pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
