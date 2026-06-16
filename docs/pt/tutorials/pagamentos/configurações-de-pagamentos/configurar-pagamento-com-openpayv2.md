---
title: 'Configurar pagamento com OpenpayV2'
id:
status: PUBLISHED
createdAt: 2026-16-06T00:00:00.000Z
updatedAt: 2026-16-06T00:00:00.000Z
publishedAt: 2026-16-06T00:00:00.000Z
firstPublishedAt: 2026-16-06T00:00:00.000Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-openpayv2
legacySlug: configurar-pagamento-openpayv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento OpenpayV2. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como American Express, Cobranded, Diners, Maestro, Mastercard, Mastercard Debit, Privatelabels, Promissories, SPEI, Visa e Visa Electron.

Para configurar OpenpayV2, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **OpenpayV2** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta OpenpayV2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor OpenpayV2 na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Campos do provedor**, selecione ou preencha os campos **Country**, **Processing Mode** e **Affiliation Name** conforme orientações do provedor.
8. Clique em `Salvar`.

Para configurar os meios de pagamento a serem processados pela OpenpayV2, acesse [Condições de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os meios de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o conector OpenpayV2 pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.

