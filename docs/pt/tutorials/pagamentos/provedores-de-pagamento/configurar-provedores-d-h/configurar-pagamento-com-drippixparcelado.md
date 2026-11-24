---
title: 'Configurar pagamento com DripPixParcelado'
createdAt: 2026-11-17T00:00:00.000Z
updatedAt: 2026-11-17T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-drippixparcelado
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos DripPixParcelado. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Pix e Drip.

Para configurar DripPixParcelado, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **DripPixParcelado** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, clique em **Autorizar via OAuth**. Neste momento, você será redirecionado para a página do DripPixParcelado, onde deverá acessar a sua conta, e autorizar a conexão da VTEX na sua conta do DripPixParcelado. Após o processo de autorização, você retornará automaticamente para o Admin VTEX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor DripPixParcelado na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela DripPixParcelado, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor DripPixParcelado pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
