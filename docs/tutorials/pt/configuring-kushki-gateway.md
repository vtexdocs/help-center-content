---
title: Configurar gateway Kushki
id: 69VC8nQMkEE0yu8oIyG2wG
status: PUBLISHED
createdAt: 2018-04-24T15:50:00.468Z
updatedAt: 2023-03-29T00:41:16.269Z
publishedAt: 2023-03-29T00:41:16.269Z
firstPublishedAt: 2018-04-24T19:47:19.057Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-kushki
legacySlug: configurar-gateway-kushki
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

A Kushki é um [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) com certificação [PCI](/pt/faq/o-que-e-o-pci-ssc) e atuação focada na América Latina.

Para configurar a Kushki, siga os passos abaixo:

## Configurar afiliação de gateway Kushki
1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Afiliações de Gateways__, clique no botão __+__.
3. Clique no conector __Kushkiv2__.
4. Preencha os campos com os __dados__ fornecidos pela Kushki.
5. O campo __Application Key__ será preenchido com a __chave privada__ da Kushki.
6. O campo __Application Token__ será preenchido com a __chave pública__ da Kushki.
7. Clique no botão __Salvar__.

Depois de concluir essa configuração, você deverá criar as credenciais da VTEX para configurar a afiliação Kushki na sua loja. Confira as instruções do [guia de autenticação](https://developers.vtex.com/docs/getting-started-authentication "guia de autenticação") no nosso Developer Portal.   

## Configurar condição de pagamento
Depois de seguir os passos indicados, a Kushki vai estar configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com a Kushki). Para saber como definir condições de pagamento, acesse [este artigo](/pt/tutorial/condicoes-de-pagamento).
