---
title: 'Configurar pagamento com Flywire'
id: 12nQ0teCWM1UUtd2Fo6lzO
status: PUBLISHED
createdAt: 2023-04-03T13:05:10.955Z
updatedAt: 2024-01-25T18:15:31.540Z
publishedAt: 2024-01-25T18:15:31.540Z
firstPublishedAt: 2023-04-03T13:32:26.361Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-flywire
locale: pt
legacySlug: configurar-pagamento-com-flywire
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Flywire. Por meio deste provedor, sua loja pode realizar vendas por meio de promissórias e do Flywire.

Para configurar Flywire, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Flywire__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__, __Application Token__, __Recipient__, __Locale__, __Provider__ e __Callback version__ com as informações da sua conta 
Flywire.
5. Em __Environment__, escolha uma das duas opções: __Demo__ ou __Production__.
6. Em __Display Payer Information__, escolha uma das duas opções: __True__ ou __False__.
7. Clique em `Salvar`.

## Configurar condição de pagamento Promissória

Caso deseje utilizar o Flywire com promissória e ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

Depois, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Customizado__, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione __flywirepartnermx-payment-provider-config-v0__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

## Configurar condição de pagamento Flywire

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Flywire__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, Flywire pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

