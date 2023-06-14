---
title: [Não foi possível criar produto.
id: 4h5FLGm6vI7VPn48agVX6X
status: PUBLISHED
createdAt: 2022-10-25T16:14:49.143Z
updatedAt: 2023-02-07T12:57:43.870Z
publishedAt: 2023-02-07T12:57:43.870Z
firstPublishedAt: 2022-10-25T16:14:50.455Z
contentType: knownIssue
productTeam: Connections
author: 2mXZkbi0oi061KicTExNjo
tag: Connections
slug: nao-foi-possivel-criar-produto
kiStatus: Fixed
internalReference: 685149
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



_**Atualizar descrição correta:**_ Mesmo com preço e estoque corretamente registrados no catálogo VTEX, alguns produtos têm um erro
na integração `Não poderia criar produto. {"error": "product.error_param", "message": "mpsku_item.AddItemRequest.SellerStock: []*openapiv2_common.StockByLocation: descodificar fatia: esperar [ ou n, mas encontrado 5, erro encontrado em #10 byte de ...|r_stock\":56,\"logisti|..., bigger context ...|age_width\":9},\"item_sku\":\"104028\",\"seller_stock\":56,\"logistic_info\":[{\"enabled\":true,\"logistic_id\":9|...","request_id":"2bd1150a865d26c243f465152084b1b6"} `


##

## Simulação



**Marketplace:** Sapato
**Produto Causa Raiz:** Integração do Catálogo
*Error:** Não foi possível criar produto {"error": "product.error_param", "message": "mpsku_item.AddItemRequest.SellerStock: []*openapenapiv2_common.StockByLocation: descodificar fatia: esperar

Admin > APP Instalado > Calçados > Gerenciar Produtos > Status de Sincronização de Produtos

 ![](https://vtexhelp.zendesk.com/attachments/token/t5CjjlTerPxIk72GBrQXTbuzh/?name=image.png)



##

## Workaround


Se o reenvio do produto não resolver o problema, é necessário esperar pela análise e investigação deste KI.

