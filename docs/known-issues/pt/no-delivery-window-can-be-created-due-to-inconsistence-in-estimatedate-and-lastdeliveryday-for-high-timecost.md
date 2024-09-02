---
title: 'Nenhuma janela de entrega pode ser criada devido à inconsistência em estimateDate e lastDeliveryDay para timecost alto'
id: 3E5ZPyrjSOPD68vH4SXunM
status: PUBLISHED
createdAt: 2024-03-06T19:38:26.954Z
updatedAt: 2024-03-06T19:38:27.765Z
publishedAt: 2024-03-06T19:38:27.765Z
firstPublishedAt: 2024-03-06T19:38:27.765Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: nenhuma-janela-de-entrega-pode-ser-criada-devido-a-inconsistencia-em-estimatedate-e-lastdeliveryday-para-timecost-alto
locale: pt
kiStatus: Backlog
internalReference: 995491
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O `estimateDate` leva em conta o tempo total de entrega, mas considerando apenas os dias em que a transportadora entrega, portanto, no caso deste exemplo, não considera os finais de semana.
Já o `lastDeliveryDay` é calculado como dias corridos (dias consecutivos), que é `data de hoje + tempo de entrega + número máximo de dias` configurado para entrega programada, pois ao contar dias consecutivos, considerará os finais de semana.

Para que o sistema monte a janela de entrega disponível, ele comparará se:

    lastDeliveryDay > estimateDate : TRUE


E somente se essa condição for atendida, ele criará a janela de entrega.

Mas com um `timecost` de trânsito total excessivamente alto, há uma inconsistência com a variável `estimateDate` e `lastDeliveryDay`, a condição retornará `false` e, portanto, nenhuma janela de entrega será criada.


## Simulação



Altere a configuração de envio para o seguinte:

- Dias e horas de processamento do depósito com 100 dias;
- Timecost no arquivo de taxa da planilha com 1 dia;
- Remova os finais de semana e feriados da configuração da política de remessa;
- Agendar a entrega para segunda a sexta-feira, das 0h às 23h59;
- Tempo máximo de entrega na configuração Programar entrega para 5 dias;

Pois essa configuração levará a `lastDeliveryDay=10/05/2024` e a `estimateDate=14/06/2024`;
E, portanto, a condição será falsa:

    10/05/2024 > 14/06/2024 : FALSO


e nenhuma janela de entrega será criada;




## Workaround


Não há nenhuma solução alternativa disponível.






