---
title: 'Configurar pagamento com Payway'
id: wHkvX7olfPPsAdeFq7obp
status: PUBLISHED
createdAt: 2024-03-07T17:04:59.563Z
updatedAt: 2024-03-13T15:29:48.955Z
publishedAt: 2024-03-13T15:29:48.955Z
firstPublishedAt: 2024-03-07T19:10:55.092Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payway
locale: pt
legacySlug: configurar-pagamento-com-payway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Payway. Por meio deste provedor, sua loja pode realizar vendas por meio de PayWay, cartões de crédito, débito, private label, co-branded, promissórias e boleto bancário. 

Para configurar o Payway, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Payway__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Payway.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Payway na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Campos do provedor__, insira as informações do __User ID__, __Consume Username (PUBLIC)__ e __Consume Username (PRIVATE)__ conforme as informações da sua conta Payway.
8. Em __Payment type__, selecione a opção __Simple Payment__ ou __Two Steps Payment__.
9. Em __Do you use Cybersource?__, selecione se deseja utilizar a Cybersource como provedor de antifraude.
10. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Worldpay, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Payway pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
