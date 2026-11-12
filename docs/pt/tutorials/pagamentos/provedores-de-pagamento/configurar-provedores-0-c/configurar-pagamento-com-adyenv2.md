---
title: 'Configurar pagamento com AdyenV2'
id:
status: PUBLISHED
createdAt: 2026-06-18T00:00:00.000Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2026-06-18T00:00:00.000Z
firstPublishedAt: 2026-06-18T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-payments-with-adyenv2
legacySlug: configurar-pagamento-com-adyenv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento AdyenV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Pix e Privatelabels.

Para configurar AdyenV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __AdyenV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta AdyenV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor AdyenV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Campos do provedor__, selecione ou preencha os campos __Adyen Merchant Endpoint Prefix__, __Alelo - merchantKey__, __Alelo - merchantId__, __Edenred - tokenRequestorId__, __Edenred - merchantId__, __Vale Refeição - CNPJ (SOMENTE NUMEROS)__ e __Adyen merchant ID__ conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela AdyenV2, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor AdyenV2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

