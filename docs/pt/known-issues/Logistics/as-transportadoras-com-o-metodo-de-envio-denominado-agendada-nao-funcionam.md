---
title: 'As transportadoras com o método de envio denominado "Agendada" não funcionam'
id: 6tFzzGMkqU5lD06m2evOLm
status: PUBLISHED
createdAt: 2025-04-08T18:54:41.289Z
updatedAt: 2025-04-08T18:54:41.826Z
publishedAt: 2025-04-08T18:54:41.826Z
firstPublishedAt: 2025-04-08T18:54:41.826Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: as-transportadoras-com-o-metodo-de-envio-denominado-agendada-nao-funcionam
locale: pt
kiStatus: Backlog
internalReference: 1207733
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



**Este KI ocorre apenas para lojas que usam o "idioma português". **

Se o "Shipping Method" da transportadora for nomeado com algo que tenha "Agendada", e essa transportadora não utilizar a função "Schedule delivery", a Logística entende que essa transportadora deve ter janelas disponíveis, e se essas janelas não forem encontradas, o sistema não consegue calcular o SLA, e o retorno da simulação fica vazio. Portanto, a transportadora não funcionará!

## Simulação


Você só precisa nomear o "Shipping Method" com algo que tenha "Agendada"

## Workaround


Basta remover a palavra "Agendada" para que funcione corretamente.





