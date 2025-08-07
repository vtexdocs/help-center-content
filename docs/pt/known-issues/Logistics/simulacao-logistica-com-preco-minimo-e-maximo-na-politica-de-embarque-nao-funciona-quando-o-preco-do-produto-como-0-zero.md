---
title: "Simulação Logística com preço mínimo e máximo na Política de Embarque não funciona quando o Preço do Produto como 0 (ZERO)"
id: 5gsBLbPMIZjZvkl5QHudVY
status: PUBLISHED
createdAt: 2022-03-30T20:10:30.205Z
updatedAt: 2024-02-16T20:26:15.370Z
publishedAt: 2024-02-16T20:26:15.370Z
firstPublishedAt: 2022-05-17T14:23:38.006Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: simulacao-logistica-com-preco-minimo-e-maximo-na-politica-de-embarque-nao-funciona-quando-o-preco-do-produto-como-0-zero
locale: pt
kiStatus: No Fix
internalReference: 553080
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



A simulação no módulo de logística não considera o preço do produto correspondente ao valor mínimo e máximo na Política de Embarque para fornecer as políticas de embarque disponíveis quando o preço do produto é ZERO.
Isso significa que se a simulação não tiver o preço do produto, a simulação fornece Políticas de Embarque que não podem estar realmente disponíveis devido ao valor mínimo e máximo.



## Simulação



Você deve ter uma Política de Embarque com valor mínimo e máximo configurado. Depois disso, simule-a com produto sem preço.

Exemplo:
Defina o valor mínimo como $10 e máximo como $100 na Política de Embarque.
Depois disso, na simulação não coloca o preço do produto.
Você verá a Política de Embarque como disponível para entrega.

Mas o resultado esperado para isso não mostra que a Política de Embarque porque somente produtos entre US$ 10 e US$ 100 devem ser entregues.



## Workaround


Executar a simulação com o preço do produto.

