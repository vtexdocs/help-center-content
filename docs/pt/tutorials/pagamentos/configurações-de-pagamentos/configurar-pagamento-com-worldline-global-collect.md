---
title: 'Configurar pagamento com Worldline Global Collect'
id:
status: PUBLISHED
createdAt: 2025-12-03T00:00:00.000Z
updatedAt: 2025-12-03T00:00:00.000Z
publishedAt: 2025-12-03T00:00:00.000Z
firstPublishedAt: 2025-12-03T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-collect
legacySlug: configurar-pagamento-com-worldline-global-collect
locale: pt
subcategoryId:
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Worldline Global Collect. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como cartões de crédito, débito, PIX, Apple Pay e Worldline Global Collect.

Para configurar Worldline Global Collect, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **worldline.globalcollect** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Worldline Global Collect.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Worldline Global Collect na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Environment**, **Merchant ID**, **Webhook Key ID**, **Webhook Secret Key**, **Capture type**, **Payment Sub-domain**, **3DS mode**, e **Soft Descriptor** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Worldline Global Collect, acesse [Condições de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor Worldline Global Collect pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.