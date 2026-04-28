---
title: 'Configurar pagamento com Orkesta'
id: 8SLAr08K4kIfYKMCUS0Wf
status: PUBLISHED
createdAt: 2025-06-12T14:47:02.940Z
updatedAt: 2025-06-12T14:58:26.076Z
publishedAt: 2025-06-12T14:58:26.076Z
firstPublishedAt: 2025-06-12T14:58:26.076Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-orkesta
legacySlug: configurar-pagamento-com-orkesta
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Orkesta. Por meio deste provedor, sua loja pode oferecer pagamento por meio de cartões de crédito, débito, OrkestaPay Card e OrkestaPay Checkout.

Para configurar Orkesta, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Orkesta** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Orkesta.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Orkesta na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, preencha o campo **Webhook signing secret** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Orkesta, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Orkesta pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
