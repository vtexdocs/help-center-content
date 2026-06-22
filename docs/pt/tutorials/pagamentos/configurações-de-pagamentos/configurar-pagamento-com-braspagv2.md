---
title: 'Configurar pagamento com BraspagV2'
id:
status: PUBLISHED
createdAt: 2026-06-18T00:00:00.000Z
updatedAt: 2026-06-18T00:00:00.000Z
publishedAt: 2026-06-18T00:00:00.000Z
firstPublishedAt: 2026-06-18T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: setting-up-payments-with-braspagv2
legacySlug: configurar-pagamento-com-braspagv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento BraspagV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, Mastercard, American Express, Discover, JCB, Diners, Elo, Hipercard, Aura, Banricompras, Credz, VirtualDebitElo, Cabal, Visa Electron, Maestro, Mastercard Debit e Privatelabels.

Para configurar BraspagV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __BraspagV2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta BraspagV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor BraspagV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Em __Campos do provedor__, selecione ou preencha os campos __Provider__, __IsSplit__, __UseMpi__, __MpiClientId__, __MpiClientSecret__, __MpiMerchantName__, __MpiMCC__ e __MpiEstablishmentCode__ conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela BraspagV2, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, BraspagV2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
