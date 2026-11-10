---
title: 'Configurar pagamento com Talo'
createdAt: 2026-07-31T00:00:00.000Z
updatedAt: 2026-07-31T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-talo
locale: pt
hidden: false
---
Na VTEX, é possível realizar a integração com o provedor de pagamento Talo. Por meio deste provedor, sua loja pode oferecer pagamentos com o promissórias.

Para configurar Talo, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **talopartnerar.talo-transfer** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Talo.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Talo na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **clientId**, **clientSecret**, **userId**, **useSandbox** e **integratedCheckout** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar o pagamento por meio de promissória, acesse [Configurar pagamentos com Promissória](https://help.vtex.com/pt/docs/tutorials/configurar-pagamentos-com-promissoria).

Depois de seguir os passos indicados, o provedor Talo pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.