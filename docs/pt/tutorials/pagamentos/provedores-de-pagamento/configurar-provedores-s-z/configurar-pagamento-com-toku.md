---
title: 'Configurar pagamento com Toku'
createdAt: 2026-10-28T00:00:00.000Z
updatedAt: 2026-10-28T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-toku
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Toku. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Bank Transfer e Toku.

Para configurar Toku, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Toku** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Toku.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Toku na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha os campos **Toku X API Key**, **Toku Account ID**, **Toku Public API Key**, **Toku Webhook Secret**, **Toku Flow Name** e **Dummy Flow** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Toku, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor Toku pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
