---
title: 'Tabela de preços de exportação filtrada por marca não traz todos os skus'
id: 3Z1A0Jpua28QNbwrEhPKxw
status: PUBLISHED
createdAt: 2022-08-23T16:07:14.755Z
updatedAt: 2022-12-12T14:49:00.132Z
publishedAt: 2022-12-12T14:49:00.132Z
firstPublishedAt: 2022-08-23T16:07:15.222Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: exported-price-table-filtered-by-brand-does-not-bring-all-the-skus
locale: pt
kiStatus: Fixed
internalReference: 594075
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Ao exportar a tabela de preços filtrada pela Marca para obter um resultado mais específico, a planilha está ficando incompleta para o cliente.

Somente os skus com preço mostrado na primeira página (quando a página é definida com o máximo de 20 resultados) são exportados.
 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Pricing & Promotions/tabela-de-precos-de-exportacao-filtrada-por-marca-nao-traz-todos-os-skus_1.png)


##

## Simulação



1. Ir para a Lista de Preços da conta;
2. Filtrar os resultados por uma marca específica (e atualizar a página)
3. Exportação "Tabela de preços base" ou "Tabela de preços fixos".
4. Verifique se faltam os skus


##

## Workaround


Outra maneira de obter uma informação de preço do sku é usando API: https://developers.vtex.com/vtex-rest-api/reference/getprice

