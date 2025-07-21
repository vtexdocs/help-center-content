---
title: 'Configurar pagamento com BluePay'
id: 26gzpfmEiwgpE8yhkaFS16
status: PUBLISHED
createdAt: 2023-04-03T14:55:51.576Z
updatedAt: 2024-07-24T13:29:26.700Z
publishedAt: 2024-07-24T13:29:26.700Z
firstPublishedAt: 2023-04-03T15:04:37.336Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bluepay
locale: pt
legacySlug: configurar-pagamento-com-bluepay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento BluePay. Por meio deste provedor, sua loja pode realizar vendas pelo PIX.

Para configurar BluePay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __BluePay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta BluePay.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Instantâneo__, selecione a opção __Pix__.
4. Em __Processar com a afiliação__, selecione o conector __bluepaypartnerbr-bluepay-v0__.
5. Ative a condição no campo __Status__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector BluePay pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
