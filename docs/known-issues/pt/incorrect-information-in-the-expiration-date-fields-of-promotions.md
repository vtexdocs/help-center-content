---
title: Informações incorretas nos campos de datas de expiração das promoções
id: 1iyo8L4y8A4ygwUI9f8tHA
status: PUBLISHED
createdAt: 2022-07-05T17:19:07.753Z
updatedAt: 2022-11-25T22:12:13.810Z
publishedAt: 2022-11-25T22:12:13.810Z
firstPublishedAt: 2022-07-05T17:19:08.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slug: informacoes-incorretas-nos-campos-de-datas-de-expiracao-das-promocoes
kiStatus: Backlog
internalReference: 611284
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Intermitentemente, quando abrimos uma promoção, os campos Data de Início e Data Final exibem a data atual, e os campos Hora de Início e Hora Final exibem as 12:00 horas da manhã. Apesar das informações incorretas na IU, as datas definidas na promoção não são afetadas.



## Simulação


Este cenário pode acontecer de forma aleatória, no entanto, nós o encontramos com mais freqüência no navegador Safari. Para reproduzir:
1. Abrir uma promoção
2. Verifique o formulário Data de Vencimento



## Workaround


Recarregar a página é suficiente para corrigir as informações sobre a IU

