---
title: "Política de embarque não priorizada devido ao 'Motivo': Dispensada como prioridade' mesmo com melhor custo"
id: p1oTHG7CuYITViV4uFZEQ
status: PUBLISHED
createdAt: 2022-05-10T18:05:57.097Z
updatedAt: 2022-11-25T22:00:01.499Z
publishedAt: 2022-11-25T22:00:01.499Z
firstPublishedAt: 2022-05-10T18:05:57.473Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: politica-de-embarque-nao-priorizada-devido-ao-motivo-dispensada-como-prioridade-mesmo-com-melhor-custo
locale: pt
kiStatus: Backlog
internalReference: 379685
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente estabelece um custo do armazém até o cais na taxa de embarque, isso pode afetar a seleção da política de embarque. Isto pode acontecer porque o custo da doca não está incluído na priorização das políticas de embarque. Portanto, uma política de embarque mais cara para o consumidor pode ser priorizada, já que o cálculo do valor do frete não levou em consideração o custo do cais.



## Simulação


Não é simples simular este comportamento. Aqui está um exemplo:

Temos duas políticas de embarque diferentes com o mesmo método de embarque: **X*** e **Y****. A política de remessa **Y*** foi priorizada em relação à **X***, embora seja mais cara para o consumidor.


- **X**: $7.00 frete +$0.00 doca = **$7.00 <-- CHEAPEST***
- **Y**: $6,00 de remessa +$2,00 de doca = **$8,00 <-- SELECIONADO***

Neste caso, a política de embarque **Y*** foi selecionada, o que pelos cálculos não faria sentido, já que o custo final é superior a **X****. Mas como a matemática não considera o custo da doca, assim:

- **X**: $7,00 de remessa
- **Y**: US$ 6,00 de remessa **-- CHEAPEST & SELECTED***



## Workaround



Não há solução disponível para esta questão.

