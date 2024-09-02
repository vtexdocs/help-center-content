---
title: 'A capacidade de entrega não é respeitada se houver espaço no Id da Política de Remessa'
id: 1OyY54G05o15EI2zAmW4Vq
status: PUBLISHED
createdAt: 2023-07-14T21:25:50.522Z
updatedAt: 2024-03-19T19:26:55.344Z
publishedAt: 2024-03-19T19:26:55.344Z
firstPublishedAt: 2023-07-14T21:25:51.117Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: a-capacidade-de-entrega-nao-e-respeitada-se-houver-espaco-no-id-da-politica-de-remessa
locale: pt
kiStatus: Backlog
internalReference: 862830
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Se o recurso de agendamento de entrega estiver em uso e a capacidade de entrega estiver ativada, há dois cenários conhecidos que podem tornar a janela disponível mesmo depois de ter atingido o limite máximo de capacidade configurado.
Os cenários são: O ID da política de remessa com um espaço ou um número excessivo de caracteres na cadeia de caracteres, `AccountName+ShippingPolicyId` não pode exceder 60 caracteres.

## Simulação


Crie uma política de remessa e, em seu Id, insira um espaço ou `AccountName+ShippingPolicyId` que resulte em mais de 60 caracteres, configure a entrega programada e a capacidade de entrega.
Faça os pedidos selecionando a janela registrada, verifique se será possível criar mais pedidos do que o máximo configurado na capacidade de entrega.
No checkout, quando o limite configurado for atingido, a janela não deverá ficar indisponível, mas permanecerá visível e poderá ser selecionada

## Workaround


Não registre nenhum Id com um espaço na política de envio ou com mais de 60 caracteres somando os caracteres no `AccountName+ShippingPolicyId`.





