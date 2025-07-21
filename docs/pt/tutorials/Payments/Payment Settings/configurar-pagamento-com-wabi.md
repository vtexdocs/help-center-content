---
title: 'Configurar pagamento com Wabi'
id: 2H3myi3n1MQ60UN5QFpLsN
status: PUBLISHED
createdAt: 2025-02-26T18:23:04.579Z
updatedAt: 2025-02-26T18:55:43.933Z
publishedAt: 2025-02-26T18:55:43.933Z
firstPublishedAt: 2025-02-26T18:55:43.933Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-wabi
locale: pt
legacySlug: configurar-pagamento-com-wabi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Wabi. Por meio deste provedor, sua loja pode realizar vendas por meio de promissórias.

Para configurar Wabi, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Wabi** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Wabi.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Wabi na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Clique em `Salvar`.

## Configurar condição de pagamento Promissória

Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

Depois, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Em **Pagamento Customizado**, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo **Status**.
5. Em **Processar com o provedor**, selecione **wabipartnerbo-wabi-v0**.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Wabi pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

