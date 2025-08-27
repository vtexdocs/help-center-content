---
title: 'Configurar pagamento com Cielo Orquestrador'
id: 24Ybk800ZUS2t04dBHnisz
status: PUBLISHED
createdAt: 2025-07-16T20:57:08.050Z
updatedAt: 2025-07-16T21:08:45.560Z
publishedAt: 2025-07-16T21:08:45.560Z
firstPublishedAt: 2025-07-16T21:08:45.560Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-cielo-orquestrador
legacySlug: configurar-pagamento-com-cielo-orquestrador
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o Cielo Orquestrador. Por meio deste sistema, sua loja pode oferecer pagamento por meio de cartões de crédito, débito, private labels, Pix, Bitcoin, Nubank, Google Pay, Apple Pay e OXXXO.

Para configurar Cielo Orquestrador, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **OrquestradorCielo** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Cielo Orquestrador.
5. Caso deseje modificar o nome de identificação a ser exibido para o Cielo Orquestrador na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos (marketplace, sellers ou marketplaces e sellers)**.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados por Cielo Orquestrador, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Cielo Orquestrador pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
