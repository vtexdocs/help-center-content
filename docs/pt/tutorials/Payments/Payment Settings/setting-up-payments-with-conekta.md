---
title: 'Configurar pagamento com Conekta'
id: 7kiAD3SlnABF75xLSL3eSA
status: PUBLISHED
createdAt: 2022-08-11T12:41:42.110Z
updatedAt: 2024-09-13T16:42:16.752Z
publishedAt: 2024-09-13T16:42:16.752Z
firstPublishedAt: 2022-08-11T12:54:43.579Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-conekta
locale: pt
legacySlug: configurar-pagamento-com-conekta
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Conekta. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, transferência bancária e Efectivo (cash).

Para configurar Conekta, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ConektaMX__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Conekta.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Conekta na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Habilitar meses sin intereses (MSI)__, selecione se deseja ativar opção de permitir aos clientes dividir as compras em pagamentos mensais (sem juros).
8. Em __Indicar número de MSI (3, 6, 9, 12)__, insira o número de meses em que os clientes poderão dividir o pagamento (sem juros).
9. Em __Indicar la duración del checkout en días (1 - 30)__, insira o número máximo de dias para vencimento do pedido (aplicável para pagamentos via Efectivo). 
10. Em __Tarjetas__, __Transferencia Bancaria__ e __Efectivo__, selecione se deseja utilizar estes meios de pagamento em sua loja.
11. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Conekta, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Conekta pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
