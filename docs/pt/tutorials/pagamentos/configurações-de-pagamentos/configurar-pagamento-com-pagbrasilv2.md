---
title: 'Configurar pagamento com PagBrasilV2'
id: 5ONHAWmRbZpNIDPXCkNJXD
status: PUBLISHED
createdAt: 2024-03-13T16:31:07.244Z
updatedAt: 2025-10-17T12:42:23.555Z
publishedAt: 2025-10-17T12:42:23.555Z
firstPublishedAt: 2024-03-13T22:21:24.967Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-pagbrasilv2
legacySlug: configurar-pagamento-com-pagbrasilv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PagBrasilV2. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de débito e crédito, carteiras digitais, boleto, promissórias e PIX.

Para configurar o PagBrasilV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagBrasil-v2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta PagBrasilV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PagBrasilV2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __External Service Url__ (URL externa do serviço), insira a URL externa que vai estar associada a `/pvt/payments?an={AccountName}`.
7. Em __Transparent Checkout__, preencha as informações conforme orientação do provedor PagBrasilV2.
8. Em __SoftDescriptor__ (Descrição da transação), indique qual informação deverá aparecer para identificar a transação realizada na sua loja.
9. Em __Captura antecipada__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude). Esta função também pode ser desativada.
10. Clique em __Salvar__.

Para configurar os métodos de pagamento a serem processados pela PagBrasilV2, acesse [Configurar condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, PagBrasilV2 pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
