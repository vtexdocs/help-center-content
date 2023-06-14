---
title: Configurar o adquirente Worldpay 
id: 7GCtigwhNYMi604UM0KeO6
status: PUBLISHED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2023-03-29T00:47:52.166Z
publishedAt: 2023-03-29T00:47:52.166Z
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-adquirente-worldpay
legacySlug: configurar-o-adquirente-worldpay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Worldpay é um [adquirente](/pt/tutorial/o-que-e-um-adquirente) de atuação global, capaz de processar pagamentos nos mais diversos tipos de moedas e cartões.

Para configurar o Worldpay, siga os passos abaixo:

## Configurar afiliação de gateway Worldpay

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Worldpay__.
4. Preencha os campos de cadastro com as informações da sua conta na Worldpay (campos _UserName_, _Password_, _Version_, _MerchantCode_).
5. No campo __Currency__, escolha a moeda das transações.
6. No campo __Captura de segurança antecipada__, escolha em quanto tempo você deseja que a captura seja realizada após a aprovação da tranasação e análise do antifraude. Você também pode desativar a função.
7. Clique em __Salvar__.

## Configurar condição de pagamento

Depois de seguir os passos indicados, a Worldpay vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento faça parte da rede de adquirência da Worldpay). Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
