---
title: Preços de exportação gerados com um formato que não é aceito pelo processo de importação
id: 4qOqpaZe1aIrfgo7mXL15K
status: PUBLISHED
createdAt: 2022-05-24T18:13:38.306Z
updatedAt: 2022-11-25T22:12:17.633Z
publishedAt: 2022-11-25T22:12:17.633Z
firstPublishedAt: 2022-05-24T18:13:38.769Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: precos-de-exportacao-gerados-com-um-formato-que-nao-e-aceito-pelo-processo-de-importacao
kiStatus: Fixed
internalReference: 584975
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Às vezes (há 50% de chance) os preços são exportados usando um novo formato que não é aceito pelo preço de importação.




## Simulação


-Exportar uma planilha de preços fixos



## Workaround


** Enquanto trabalhamos em uma solução para esta questão, uma solução é:**
1. adicionar uma nova linha no topo da folha de preços com o texto "FixedPrices" (Preços Fixos) na primeira célula
2. alterar o formato da data das colunas De e Até para o seguinte formato 2022-05-24T07:20:50.52Z

Se você precisar de mais informações sobre o formato, este é o formato RFC3339

