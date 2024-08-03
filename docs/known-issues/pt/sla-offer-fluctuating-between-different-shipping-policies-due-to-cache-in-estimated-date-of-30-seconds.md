---
title: 'Oferta de SLA flutuante entre diferentes políticas de envio devido ao cache na data estimada de 30 segundos'
id: 2uN3bVrxHhj6Xs6TeQTJDr
status: PUBLISHED
createdAt: 2024-05-21T19:34:50.437Z
updatedAt: 2024-05-21T19:38:10.682Z
publishedAt: 2024-05-21T19:38:10.682Z
firstPublishedAt: 2024-05-21T19:34:53.918Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: oferta-de-sla-flutuante-entre-diferentes-politicas-de-envio-devido-ao-cache-na-data-estimada-de-30-segundos
locale: pt
kiStatus: Backlog
internalReference: 1036916
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


A simulação de logística pode oscilar entre a oferta de SLAs se o cliente tiver políticas de remessa com o mesmo preço, tempo de entrega, SlaType, custo de doca e configuração de armazém, mas prioridade de doca diferente.
Temos um cache que armazena o tempo de entrega por 30 segundos, portanto, quando uma nova simulação é feita, outra política de remessa com as mesmas configurações que tem um tempo de doca mais longo pode ser oferecida quando não deveria.


## Simulação


Políticas de remessa A e B com o mesmo tempo total de entrega (1 dia, por exemplo), preço, custo de doca e depósito, mas com prioridades de doca diferentes.
Faça uma cotação às 16:00:00 em que a política de remessa A com prioridade de doca mais baixa será oferecida, então o resultado da estimativa seria para o dia seguinte às 16:01:00, esses dados são armazenados em cache por 30 segundos;
Ao fazer uma nova cotação às 16:00:10, por exemplo, será oferecida a política de remessa B com uma prioridade de doca mais alta, porque na primeira cotação o tempo de entrega seria, por exemplo, às 16:01:00, armazenado em cache por 30 segundos, enquanto a segunda cotação B é escolhida porque também tem a estimativa para o dia seguinte, mas às 16:00:00.




## Workaround


Não há nenhuma solução alternativa para um cenário com as mesmas configurações descritas acima.





