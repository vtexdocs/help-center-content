---
title: 'Configurar pagamento com Woovi'
id: a61xxlOLJTQRrPx2MrVfs
status: PUBLISHED
createdAt: 2023-09-08T17:29:33.321Z
updatedAt: 2024-01-23T21:54:32.467Z
publishedAt: 2024-01-23T21:54:32.467Z
firstPublishedAt: 2023-09-08T17:49:01.961Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-woovi
locale: pt
legacySlug: configurar-pagamento-com-woovi
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Woovi. Por meio deste provedor, sua loja pode realizar vendas por meio do Woovi e Woovi Parcelado.

Para configurar Woovi, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __WooviConnector__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__, __Application Token__ e __App ID__ com as informações da sua conta Woovi.
5. Em __Method__, selecione __Pix__ ou __Woovi Parcelado__.
6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.
7. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Woovi__ ou __Woovi Parcelado__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Woovi pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
