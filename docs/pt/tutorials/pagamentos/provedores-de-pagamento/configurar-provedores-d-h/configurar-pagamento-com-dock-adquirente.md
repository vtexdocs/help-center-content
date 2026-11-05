---
title: 'Configurar pagamento com Dock Adquirente'
createdAt: 2025-06-11T21:40:53.256Z
updatedAt: 2026-11-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-dock-adquirente
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Dock Adquirente. Por meio deste provedor, sua loja pode oferecer pagamento por meio de cartão de crédito, PIX, Google Pay e boleto bancário.

Para configurar Dock Adquirente, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **DockAdquirente** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Dock Adquirente.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Dock Adquirente na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha o campo **expireDays** de acordo com as instruções do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Dock Adquirente, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Dock Adquirente pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
