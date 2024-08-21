---
title: 'Cupons criados como arquivados temporariamente'
id: 783FJICQzATVkJ2uPgk9Mq
status: PUBLISHED
createdAt: 2023-09-01T13:34:21.842Z
updatedAt: 2023-09-01T13:34:22.607Z
publishedAt: 2023-09-01T13:34:22.607Z
firstPublishedAt: 2023-09-01T13:34:22.607Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: cupons-criados-como-arquivados-temporariamente
locale: pt
kiStatus: Backlog
internalReference: 892041
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Atualmente, quando um cupom é criado, a interface do usuário/API mostra que ele está arquivado por alguns minutos (~2) quando, na verdade (no banco de dados de preços), o cupom está ativo.

Após alguns minutos, os cupons exibem seus dados corretos.

É importante observar que isso não afeta as informações "reais" do cupom, mesmo que ele seja exibido incorretamente como "arquivado" na interface do usuário devido a esse problema, ele poderá ser usado no checkout.

## Simulação


A simples criação de um cupom e a verificação de seus dados já o mostra como arquivado.



## Workaround


Não há outra solução além de esperar por um curto período de tempo.





