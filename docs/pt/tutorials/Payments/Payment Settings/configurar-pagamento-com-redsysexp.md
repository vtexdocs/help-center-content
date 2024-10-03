---
title: 'Configurar pagamento com RedsysEXP'
id: 7DSQeUbDEgH6yUvtXg4wly
status: PUBLISHED
createdAt: 2024-10-02T18:59:08.362Z
updatedAt: 2024-10-02T19:25:48.987Z
publishedAt: 2024-10-02T19:25:48.987Z
firstPublishedAt: 2024-10-02T19:25:48.987Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-redsysexp
locale: pt
legacySlug: configurar-pagamento-com-redsysexp
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos RedsysEXP. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito e Bizum.

Para configurar a RedsysEXP, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __RedsysEXP__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta RedsysEXP.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor RedsysEXP na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Campos do provedor__, preencha os campos __Merchant code__, __Signature key__ e __Merchant URL__ com as informações da sua conta RedsysEXP.
8. Em __Terminal__, __Currency__, __Language__ e __3DS Enabled__ selecione as opções desejadas.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela RedsysEXP, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, RedsysEXP pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
