---
title: "A modificação de preços por meio da rota de compatibilidade de preços postais está perdendo dados"
id: 4VqqNOUcRIGiZhxyVU4Ite
status: PUBLISHED
createdAt: 2022-03-29T19:12:47.179Z
updatedAt: 2024-12-19T19:50:09.968Z
publishedAt: 2024-12-19T19:50:09.968Z
firstPublishedAt: 2022-03-29T19:12:47.781Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-modificacao-de-precos-por-meio-da-rota-de-compatibilidade-de-precos-postais-esta-perdendo-dados
locale: pt
kiStatus: No Fix
internalReference: 487698
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Identificamos um problema com a rota de compatibilidade de preços de postagem. Quando várias solicitações de atualização de preço são enviadas em um curto espaço de tempo, o sistema pode não processar o preço mais atualizado. Isso pode resultar na aplicação de preços desatualizados ou incorretos.

## Simulação



1. Use a rota de compatibilidade de preços de postagem para enviar um lote de atualizações de preços.
2. Monitore o processo usando os logs de auditoria para rastrear se todas as atualizações foram aplicadas corretamente.
3. Repita o teste com diferentes tamanhos de lote e intervalos entre as solicitações. Observe que o problema não ocorre de forma consistente em todos os testes

## Workaround



- Faça a transição para o uso das APIs Pricing V2, que não apresentam esse problema.
- Distribua as solicitações de forma mais homogênea introduzindo atrasos, como esperar pelo menos 30 segundos entre lotes consecutivos.




