---
title: 'Configurar pagamento com Fpay'
id: 6BaLIO2R7tOh6E1MmNoDXj
status: ARCHIVED
createdAt: 2022-10-18T19:13:32.326Z
updatedAt: 2024-10-03T15:17:27.495Z
publishedAt: 
firstPublishedAt: 2022-10-18T19:42:03.523Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fpay
locale: pt
legacySlug: configurar-pagamento-com-fpay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o gateway Fpay. Por meio deste provedor, sua loja pode realizar vendas por meio de promissórias.

Para configurar Fpay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Fpay__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos __Application Key__ e __Application Token__ com as informações da sua conta Fpay.
5. Clique em `Salvar`.

## Configurar Promissória

Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](https://help.vtex.com/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Customizado__, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione __fpaypartnercl-fpay-v0__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Fpay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

