---
title: 'Configurar pagamento com Netopia Marketplace'
id: 7GFXyr1JjK6YRdBknHK4jV
status: PUBLISHED
createdAt: 2025-10-17T17:55:57.674Z
updatedAt: 2025-10-17T17:57:25.749Z
publishedAt: 2025-10-17T17:57:25.749Z
firstPublishedAt: 2025-10-17T17:57:03.141Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-netopia-marketplace
legacySlug: configurar-pagamento-com-netopia-marketplace
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Netopia Marketplace. Por meio deste provedor, sua loja pode realizar vendas por cartões de crédito, débito, promissórias, e carteiras digitais.

Para configurar Netopia Marketplace, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __NetopiaMarketplace__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Netopia Marketplace.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Netopia Marketplace na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](/pt/docs/tutorials/split-de-pagamento) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Em __Campos do provedor__, selecione ou preencha os campos __POS ID__, __Environment__, __Delay to auto cancel (hours)__, e __Delay to auto capture (minutes)__ conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Netopia Marketplace, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Netopia Marketplace pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
