---
title: 'Cadastrar o código de barras dos SKUs para o VTEX Sales App'
id: 4eooWH0d8Aiwzparyi4Hg
status: PUBLISHED
createdAt: 2020-06-28T19:59:59.437Z
updatedAt: 2025-11-19T15:50:45.045Z
publishedAt: 2023-05-31T15:50:45.045Z
firstPublishedAt: 2020-06-28T20:04:59.879Z
contentType: trackArticle
productTeam: Shopping
slugEN: register-the-barcode-of-the-skus-for-vtex-sales-app
locale: pt
trackId: zav76TFEZlAjnyBVL5tRc
trackSlugEN: vtex-sales-app-getting-started-and-setting-up
order: 7
---

Para usar o **VTEX Sales App,** os produtos da loja física devem estar cadastrados no catálogo da sua conta na VTEX. É lá que inserimos todos os produtos e definimos suas características.

>⚠️ Os vendedores somente terão acesso aos produtos via **VTEX Sales App** quando os produtos estiverem cadastrados no catálogo da sua loja.

Entre as informações inseridas no cadastro de um produto no Catálogo, está o **EAN**, que corresponde ao código de barras do SKU. Ele permite que o vendedor adicione facilmente o produto ao carrinho no **VTEX Sales App**, bastando passar o código de barras do produto na máquina leitora. O **VTEX Sales App** também permite que o código de barras seja digitado no campo de busca.

Por padrão, o catálogo do **VTEX Sales App** é herdado do catálogo do ecommerce. É assim que o app estará configurado após o [Setup Básico](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-configuracoes-basicas). Neste cenário, os produtos já estarão cadastrados. Você precisará apenas garantir que os códigos de barra estejam corretamente cadastrados no campo **EAN** de cada SKU.

## Cadastrar o EAN dos SKUs

Para cadastrar o **EAN** dos SKUs, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo** > **Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique na linha referente ao produto desejado.
3. Clique na aba `SKUs`.
4. No campo **EAN**, preencha com o valor do código de barras.
5. Clique em `Salvar`.

> ℹ️ A informação do **EAN** pode levar até 10 minutos para ser atualizada. Feito isso, será possível adicionar o SKU ao carrinho do **VTEX Sales App** usando a máquina leitora de código de barras.

Assim como demais campos do cadastro de SKU, o **EAN** pode ser preenchido em massa por [planilha](https://help.vtex.com/pt/docs/tutorials/preencher-campos-da-planilha-de-importacao) ou por seu ERP. Saiba mais em [Integrações de backend](https://help.vtex.com/pt/docs/tracks/integracoes-de-backend).
