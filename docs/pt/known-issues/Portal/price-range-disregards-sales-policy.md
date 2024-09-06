---
title: 'A faixa de preço desconsidera a política de vendas'
id: 4isnfk4T2UB3CId8bXcvFT
status: DRAFT
createdAt: 2022-03-16T16:35:57.963Z
updatedAt: 2024-01-19T19:13:41.739Z
publishedAt: 
firstPublishedAt: 
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: a-faixa-de-preco-desconsidera-a-politica-de-vendas
locale: pt
kiStatus: Backlog
internalReference: 322764
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


O filtro de faixa de preço, que é configurado na categoria de opções, considera o preço registrado em todas as políticas de vendas da loja, o que significa que ele sempre exibirá o menor valor registrado de qualquer política de vendas, possivelmente exibindo um produto que não está na faixa de preço dessa política de vendas específica.

## Simulação



1. Registre preços diferentes em políticas de vendas diferentes para a mesma SKU;
2. Crie faixas de preço na categoria em que os preços registrados têm faixas diferentes;
3. Na política de vendas da SKU com o preço mais alto, filtre por faixa de preço
4. Observe que o valor da SKU considerado pertence a outra política de vendas, porque o filtro só considera o valor mais baixo de qualquer política.



## Workaround


Não há nenhuma solução alternativa disponível para esse cenário.

