---
title: 'Configurar pagamento com PagarMeV3 (Stone)'
createdAt: 2022-06-22T17:05:12.930Z
updatedAt: 2026-11-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-pagarmev3
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Stone (antigo PagarMeV3). Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, private labels, cobranded, boletos, PIX e Safetypay.

Para configurar Stone, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Stone__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Stone.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Stone na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](/pt/docs/tutorials/split-de-pagamento) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Stone, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Stone pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
