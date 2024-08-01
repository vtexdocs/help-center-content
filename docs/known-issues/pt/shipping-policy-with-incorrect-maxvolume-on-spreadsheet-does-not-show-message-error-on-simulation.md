---
title: 'Política de envio com MaxVolume incorreto na planilha não mostra erro de mensagem na simulação'
id: 7zIbmadcOfI3oHmkm8LmkY
status: PUBLISHED
createdAt: 2022-05-18T18:19:04.901Z
updatedAt: 2024-02-16T20:25:21.794Z
publishedAt: 2024-02-16T20:25:21.794Z
firstPublishedAt: 2022-05-18T18:19:05.868Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: politica-de-envio-com-maxvolume-incorreto-na-planilha-nao-mostra-erro-de-mensagem-na-simulacao
locale: pt
kiStatus: No Fix
internalReference: 380471
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando a Política de Embarque tem o MaxVolume abaixo na planilha, não há erro de mensagem a respeito disso na Simulação.
Portanto, a conta não sabe porque esta política de embarque é descartada.



## Simulação


Para ver o problema, o valor MaxVoume na planilha deve ser menor do que o cálculo do volume do produto.
Neste cenário, o valor abaixo no campo MaxVolume não permite a política de embarque e isto está ok! O problema é que o sistema não mostra nenhum erro de mensagem relacionado a esta Política de Embarque.



## Workaround


Não há solução para este caso.

