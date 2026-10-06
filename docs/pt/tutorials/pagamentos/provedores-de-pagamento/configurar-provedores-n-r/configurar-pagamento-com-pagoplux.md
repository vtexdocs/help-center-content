---
title: 'Configurar pagamento com Pagoplux'
createdAt: 2026-07-08T00:00:00.000Z
updatedAt: 2026-07-08T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-pagoplux
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Pagoplux. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, Mastercard, American Express, Diners e Discover.

Para configurar o Pagoplux, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Pagoplux** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Pagoplux.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Pagoplux na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Caso deseje utilizar o split de pagamento em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos** (marketplace, sellers ou marketplaces e sellers).
7. Em **Campos do provedor**, preencha ou selecione os campos **Merchant's custom field** e **Merchant's custom select field** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Pagoplux, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector Pagoplux pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
