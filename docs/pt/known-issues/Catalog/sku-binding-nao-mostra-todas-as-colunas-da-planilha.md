---
title: "[Sku binding] Não mostra todas as colunas da planilha"
id: 1swvVyhhLKk5U9rnCumdCZ
status: PUBLISHED
createdAt: 2025-01-14T18:27:35.886Z
updatedAt: 2025-06-26T19:29:30.775Z
publishedAt: 2025-06-26T19:29:30.775Z
firstPublishedAt: 2025-01-14T18:27:36.509Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: sku-binding-nao-mostra-todas-as-colunas-da-planilha
locale: pt
kiStatus: Backlog
internalReference: 1163100
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Há dois cenários aqui

1. Na antiga IU de vinculação de sku, a planilha de exportação retornava 7 colunas; hoje, a nova IU, quando exportamos a planilha, retorna 4 colunas.
2. O nome do arquivo foi alterado para (nome da conta + nome de usuário) e, anteriormente, na IU antiga, ele era exportado com a data "SkuSeller_2025-01-14_15-1-16"

## Simulação




1. Na antiga interface de usuário de vinculação de sku, a planilha de exportação retornava 7 colunas; hoje, na nova interface de usuário, quando exportamos a planilha, retornamos 4 colunas.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/sku-binding-nao-mostra-todas-as-colunas-da-planilha_1.png)

**NOVAS COLUNAS**
StockKeepingUnitId
SellerId
SellerStockKeepingUnitId
Está Ativo

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/sku-binding-nao-mostra-todas-as-colunas-da-planilha_2.png)

**COLUNAS ANTIGAS**
SkuSellerId
SellerId
StockKeepingUnitId
SellerStockKeepingUnitId
IsActive
UpdateDate (data de atualização)
RequestedUpdateDate (data de atualização solicitada)

**2.** O nome do arquivo foi alterado para (accountname + nome de usuário) e, anteriormente, na interface de usuário antiga, ele era exportado com a data "SkuSeller_2025-01-14_15-1-16"

**NOME DO ARQUIVO ANTES | ANTIGO**

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Catalog/sku-binding-nao-mostra-todas-as-colunas-da-planilha_3.png)

**NOME DO ARQUIVO APÓS | NOVO **

 ![](https://vtexhelp.zendesk.com/attachments/token/R2WZAjWdduzMXo7mFAT8LFmN6/?name=image.png

## Workaround


Usar a IU antiga





