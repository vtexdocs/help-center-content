---
title: 'Configurar pagamento com Retrypay'
id: 3QGioVKVI1Qnk3JbbJlJVY
status: PUBLISHED
createdAt: 2023-03-30T19:35:06.661Z
updatedAt: 2023-03-30T20:01:51.283Z
publishedAt: 2023-03-30T20:01:51.283Z
firstPublishedAt: 2023-03-30T20:01:51.283Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-retrypay
legacySlug: configurar-pagamento-com-retrypay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Retrypay. Com este conector, sua loja pode realizar vendas por meio de promissórias e do Retrypay.

Para configurar a afiliação Retrypay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão `+`.
3. Clique no conector __RetryPay__.
4. Preencha os campos __Application Key__, __Application Token__, __Tenant__, __Retripay Merchant API Key__ e __Retripay Hook Token__ com as informações da sua conta Retrypay.
5. Em __Payment Method__, escolha uma das duas opções: __Redirect__ ou __Payment App__.
6. Em __Environment__, escolha uma das duas opções: __Demo__ ou __Production__.
7. Clique em `Salvar`.

## Configurar condição de pagamento Promissória

Caso deseje utilizar o Retrypay com promissória e ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

Depois, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Customizado__, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione __retrypaypartnermx-payment-provider-v1__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

## Configurar condição de pagamento Retrypay

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __RetryPay__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Retrypay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

