---
title: 'Configurar pagamento com VirtusPayV2'
id: 1tbcLRNIB5Bz0oWl8LnayB
status: PUBLISHED
createdAt: 2023-03-27T12:14:53.392Z
updatedAt: 2024-01-23T21:52:05.259Z
publishedAt: 2024-01-23T21:52:05.259Z
firstPublishedAt: 2023-03-27T12:56:49.578Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-virtuspayv2
locale: pt
legacySlug: configurar-pagamento-com-virtuspayv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento VirtusPayV2. Por meio deste provedor, sua loja pode realizar vendas por meio do VirtusPay e VirtusPay Transparente.

Para configurar VirtusPayV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __VirtusPayV2__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta VirtusPay.
5. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
6. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em uma das duas condições de pagamento: __VirtusPay__ ou __VirtusPay Transparente__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector VirtusPayV2 pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
