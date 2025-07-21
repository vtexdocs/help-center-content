---
title: "Comportamento inesperado ao registrar vários feriados em sequência"
id: 5UzQbnc6CUdY4sGSLSe4LG
status: PUBLISHED
createdAt: 2025-03-31T21:30:53.666Z
updatedAt: 2025-03-31T21:30:54.311Z
publishedAt: 2025-03-31T21:30:54.311Z
firstPublishedAt: 2025-03-31T21:30:54.311Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: comportamento-inesperado-ao-registrar-varios-feriados-em-sequencia
locale: pt
kiStatus: Backlog
internalReference: 1202478
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Ao registrar vários feriados em sequência, ocorrerão alguns comportamentos inesperados, pois alguns feriados registrados anteriormente podem ser excluídos e alguns novos feriados podem não ser registrados.

## Simulação


Isso pode ser facilmente reproduzido, basta registrar alguns feriados múltiplos em sequência, equivalente a 10.



## Workaround


Será necessário espaçar a criação de feriados, definindo um intervalo de pelo menos 1 minuto entre os registros.





