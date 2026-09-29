---
title: 'Configurar pagamento com Lifemiles'
id: 2lDOH2llXO9dQukJfWkwzD
status: PUBLISHED
createdAt: 2025-08-25T12:17:16.100Z
updatedAt: 2025-08-25T12:40:56.814Z
publishedAt: 2025-08-25T12:40:56.814Z
firstPublishedAt: 2025-08-25T12:40:48.557Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-lifemiles
legacySlug: configurar-pagamento-com-lifemiles
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Lifemiles. Por meio deste provedor, sua loja pode realizar vendas por meio de promissórias.

Para configurar Lifemiles, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Lifemiles** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Lifemiles.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Lifemiles na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Partner Code**, **Payment currency 1**, **Website currency identifier 1**, **Payment currency 2**, **Website currency identifier 2**, **Payment currency 3**, **Website currency identifier 3** e **Webhook Status** conforme orientações do provedor.
8. Clique em `Salvar`.

## Configurar condição de pagamento Promissória

Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](/pt/docs/tutorials/configurar-pagamentos-com-promissoria).

Depois, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Em **Pagamento Customizado**, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo **Status**.
5. Em **Processar com o provedor**, selecione **lifemilespartnerco-lifemiles-v0**.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Lifemiles pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

