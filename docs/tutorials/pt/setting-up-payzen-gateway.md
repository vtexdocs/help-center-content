---
title: 'Configurar o gateway PayZen'
id: 3v3n5eQvxem8MQOCkugk24
status: PUBLISHED
createdAt: 2018-03-13T19:39:04.093Z
updatedAt: 2023-03-29T00:56:10.654Z
publishedAt: 2023-03-29T00:56:10.654Z
firstPublishedAt: 2018-03-13T22:27:11.198Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-o-gateway-payzen
legacySlug: configurar-o-gateway-payzen
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode configurar o [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) PayZen na sua loja. De fácil integração, ele segue os padrões de segurança definidos pelo [Pagamentos](/pt/faq/o-que-e-o-pci-ssc).

Para configurar o PayZen, siga os passos abaixo:

## Configurar afiliação de gateway PayZen
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __PayZen__.
4. Preencha os campos _Id da Loja_ e _Certificado_ com os dados fornecidos pelo PayZen.
5. No campo __Moeda da transação__, preencha com o código [ISO 4217](http://pt.wikipedia.org/wiki/ISO_4217) referente à moeda que será utilizada nos pagamentos.
6. Em __Registered bank invoice__, escolha se vai utilizar boletos bancários registrados ou não.
7. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de seguir os passos indicados, o PayZen vai estar configurado na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ele vai estar disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o PayZen). 
Para saber como definir condições de pagamento, acesse [este artigo do Help](/pt/tutorial/condicoes-de-pagamento).
