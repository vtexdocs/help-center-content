---
title: 'Configurar pagamento com Shipay'
id: 2GVBCDdxZPexI2TikFf9Au
status: PUBLISHED
createdAt: 2023-03-27T14:40:05.161Z
updatedAt: 2024-01-23T21:27:19.732Z
publishedAt: 2024-01-23T21:27:19.732Z
firstPublishedAt: 2023-03-27T14:44:22.502Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-shipay
legacySlug: configurar-pagamento-com-shipay
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Shipay. Por meio deste provedor, sua loja pode realizar vendas pelo PIX.

Para configurar Shipay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Shipay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Shipay.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Instantâneo__, selecione a opção __Pix__.
4. Em __Processar com a afiliação__, selecione o conector __Shipay__.
5. Ative a condição no campo __Status__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Shipay pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
