---
title: 'Configurar pagamento com FastPayBrasil'
createdAt: 2026-10-27T00:00:00.000Z
updatedAt: 2026-10-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-fastpaybrasil
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos FastPayBrasil. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Pix, Visa, Mastercard, American Express, Elo e Apple Pay.

Para configurar FastPayBrasil, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **FastPayBrasil** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta FastPayBrasil.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor FastPayBrasil na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha o campo **applePayToken** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela FastPayBrasil, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor FastPayBrasil pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
