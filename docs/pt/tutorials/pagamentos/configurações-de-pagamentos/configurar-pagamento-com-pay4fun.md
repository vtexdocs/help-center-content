---
title: 'Configurar pagamento com Pay4Fun'
id: 7xCpO35RMDRcp1UCvOGZX3
status: PUBLISHED
createdAt: 2024-02-05T14:53:57.694Z
updatedAt: 2024-03-13T15:15:38.399Z
publishedAt: 2024-03-13T15:15:38.399Z
firstPublishedAt: 2024-02-05T15:29:05.357Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pay4fun
legacySlug: configurar-pagamento-com-pay4fun
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Pay4Fun. Por meio deste provedor, sua loja pode realizar vendas por meio do PIX.

Para configurar a Pay4Fun, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Pay4Fun__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Pay4Fun.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Pay4Fun na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __PIX__.
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione a opção __p4fpartnerbr-pay4fun-v0__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Pay4Fun pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
