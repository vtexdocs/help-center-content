---
title: "A priorização do armazém não é determinística durante a simulação de expedição"
id: 6nl1LuyYD9NhQEaDyFmdZU
status: PUBLISHED
createdAt: 2025-07-30T14:51:46.357Z
updatedAt: 2025-07-30T14:51:47.055Z
publishedAt: 2025-07-30T14:51:47.055Z
firstPublishedAt: 2025-07-30T14:51:47.055Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: a-priorizacao-do-armazem-nao-e-deterministica-durante-a-simulacao-de-expedicao
locale: pt
kiStatus: Backlog
internalReference: 1268196
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Atualmente, a logística nem sempre escolhe o depósito com as melhores condições, como o menor tempo de processamento ou custo de remessa, ao dividir quantidades da mesma SKU em vários depósitos. Em vez disso, o processo de seleção do depósito que atenderá a cada item baseia-se na ordem em que os depósitos aparecem no sistema. Essa ordem vem do serviço de disponibilidade, que, por sua vez, não é ordenado, o que torna a seleção não determinística. Como resultado, o simulador pode selecionar um depósito com tempo de processamento e taxa extra mais altos, mesmo quando há opções melhores disponíveis (por exemplo, preferir um depósito com 3 dias de processamento e uma taxa extra de US$ 5,00 a um com 2 dias e uma taxa extra de US$ 1,00).

## Simulação



Para reproduzir o problema:

- Configure o estoque de modo que nenhum depósito possa atender à quantidade total solicitada para uma SKU específica (por exemplo, você precisa de 3 unidades, mas cada depósito só tem 1 ou 2 disponíveis).
- Prepare dois ou mais armazéns qualificados para atender à quantidade que falta, mas com tempos de processamento e taxas de remessa diferentes.
- Execute uma simulação de remessa usando o administrador de logística da plataforma para essa SKU/quantidade.
- Observe que o simulador pode selecionar um depósito com custo/tempo pior (mais alto), mesmo que exista uma opção melhor.



## Workaround


Não há nenhuma solução alternativa disponível.






