---
title: 'Configurar pagamento com Fiserv AR'
createdAt: 2024-10-07T20:10:41.652Z
updatedAt: 2026-11-05T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-fiserv-ar
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Fiserv AR. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, cobranded, private labels, boletos, Fiserv e meios de pagamento locais como Naranja, Cabal, OCA, Creditel, Club del Este, Lider, Passcard, ANDA, Creditos Directos, Edenred e Sodexo.

Para configurar a Fiserv AR, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Fiserv AR__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Fiserv.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Fiserv na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Campos do provedor__, preencha os campos __Ingrese su Store ID__, __Ingrese su API Key Pública__ e __Ingrese su API Key Privada__ com as informações da sua conta Fiserv.
8. Em __3DS - Visa__, __3DS - Mastercard__, __Autorización y captura diferidos__, __Plan Gobierno__, __Plan Z - Naranja__ e __Soft Descriptor__, selecione ou preencha as opções desejadas.
9. Caso sua loja processe pagamentos no Uruguai, preencha o campo __Legislación aplicable (Aplica solo para Uruguay)__ de acordo com as instruções do provedor.
10. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Fiserv AR, acesse [Configurar condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Fiserv AR pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
