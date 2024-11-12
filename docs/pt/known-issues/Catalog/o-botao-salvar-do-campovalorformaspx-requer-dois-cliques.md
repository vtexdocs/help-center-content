---
title: 'O botão Salvar do CampoValorForm.aspx requer dois cliques'
id: G0YtmOpdB4nNdw8w87ZNz
status: PUBLISHED
createdAt: 2022-02-16T13:28:52.922Z
updatedAt: 2024-02-16T20:26:25.672Z
publishedAt: 2024-02-16T20:26:25.672Z
firstPublishedAt: 2022-02-16T13:28:53.505Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: campovalorformaspx-save-button-requires-two-clicks
locale: pt
kiStatus: No Fix
internalReference: 525616
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Atualmente, ao acessar a IU da página de catálogo para salvar valores de especificação (https://myaccount.myvtex.com/admin/Site/CampoValor.aspx), o botão salvar só está funcionando quando clicado duas vezes, o que pode, para conexões de internet mais lentas, enganar o usuário de que os dados não estão sendo salvos.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)





## Simulação


1) Ir para Categorias -> Especificações SKU -> Valores -> Salvar novo valor
2) Tente clicar no botão salvar após inserir um valor uma vez, nada acontecerá
3) Clique nele uma segunda vez e os dados serão salvos





## Workaround


Esteja ciente deste comportamento e clique exatamente duas vezes (e não mais) e/ou use nosso catálogo APIs para valores de especificação: https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-specification

