---
title: "As promoções de campanha não estão funcionando na Pesquisa quando várias campanhas são aplicáveis"
id: 6IAkiAoVsWqB7m3lzKlin8
status: PUBLISHED
createdAt: 2025-04-08T19:07:00.428Z
updatedAt: 2025-04-08T19:07:01.316Z
publishedAt: 2025-04-08T19:07:01.316Z
firstPublishedAt: 2025-04-08T19:07:01.316Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: as-promocoes-de-campanha-nao-estao-funcionando-na-pesquisa-quando-varias-campanhas-sao-aplicaveis
locale: pt
kiStatus: Backlog
internalReference: 1207746
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando mais de um valor de campanha está presente na sessão/segmento, as promoções não são acionadas corretamente. Nenhuma das campanhas será considerada.

## Simulação



- Crie duas campanhas para um determinado contexto;
- Crie uma promoção com um desconto percentual para qualquer uma dessas campanhas;
- Faça login com um cliente que possa receber as duas campanhas;
- Observe o cookie Segment com duas campanhas, seguindo o padrão `"aaaaaaaaa-aaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaaa,bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbb"` para sua string;
- Observe que a promoção não será aplicada aos produtos esperados.



## Workaround


Não há nenhuma solução alternativa disponível, mas a promoção funcionará corretamente se apenas uma única campanha for aplicada ao contexto.





