---
title: 'Cálculo do prazo de entrega de um pedido'
id: 7IkKo1XSxiBj30hdn37oOE
status: ARCHIVED
createdAt: 2019-10-23T15:25:20.218Z
updatedAt: 2022-03-08T18:48:05.968Z
publishedAt: 
firstPublishedAt: 2019-10-23T20:05:01.736Z
contentType: trackArticle
productTeam: Post-purchase
slug: calculo-do-prazo-de-entrega-de-um-pedido
locale: pt
trackId: 13TFDwDttPl9ki9OXQhyjx
trackSlugPT: logistica-101
---

O prazo de entrega de um pedido leva em consideração os __tempos de custo__ definidos para as três etapas da rota de logística, além dos Feriados e horários de corte cadastrados:
- Estoque.
- Doca.
- Transportadora.
- Feriados.
- Horários da Transportadora (entenda em detalhes o que são no tutorial [Configurar o horário da transportadora](https://help.vtex.com/pt/tutorial/configurar-horario-de-funcionamento-para-transportadoras--2oGpbInIgdxSWUi3TZjdCS)

Para cada uma das três etapas da rota logística, você pode definir um tempo de custo - e o prazo de entrega que o seu cliente verá no checkout é a soma desses tempos de custo (+ feriados, e ainda considerando os horários de corte).

![deliveryCostTimes](//images.contentful.com/alneenqid6w5/hA6N4VPj440AEqEecIUck/0a6784f0c3d6f6d88b65547762600a7d/deliveryCostTimes.png)

Os tempos de custo do __estoque__ e da __doca__ são definidos nas telas de configuração de cada uma dessas etapas, no módulo Estoque & Entrega > Painéis.

![calculoPrazoEntrega1](//images.contentful.com/alneenqid6w5/4QgQlroxxCK4iu6YoU2uIQ/a2df01bdbe2449e924a6380b5a39a19b/calculoPrazoEntrega1.png) 

![calculoPrazoEntrega2](//images.contentful.com/alneenqid6w5/6xAiBHXxwA2cMIaaK4AKm2/bfff8d81b7363121cc84de1149cfd587/calculoPrazoEntrega2.png)

O tempo de custo da __transportadora__ é definido na tabela de frete, enviada à VTEX por meio da tela de configuração da transportadora, também no módulo Estoque & Entrega.

![calculoPrazoEntrega3](//images.contentful.com/alneenqid6w5/2bL9Gw0AeswGAeKSqYCYw4/57c492eb08239d61e463839a768101ad/calculoPrazoEntrega3.png)

## Exemplos

### Exemplo 1

Pedido feito na segunda-feira.

- Tempo de custo do Estoque: 2 dias
- Tempo de custo da Doca: 1 dia
- Tempo de custo da Transportadora: 5 dias
- Feriados cadastrados: Não
- Horário de corte (11h de segunda-feira) inferior ao horário do pedido aprovado (15h da mesma segunda-feira)

Neste caso, a soma dos tempos de custo das três etapas da rota logística (Estoque + Doca + Transportadora) é de 8 dias.

Como não há feriado cadastrado, nenhum dia extra é somado a esse tempo.

Mas como o pedido só foi aprovado após o horário de corte, a segunda-feira não entra na contagem do prazo de entrega. O dia 0 da contagem (D0) será, portanto, a terça-feira; e o prazo de entrega será de __8 dias após essa terça-feira__.

### Exemplo 2

Pedido feito na segunda-feira.

- Tempo de custo do Estoque: 3 dias
- Tempo de custo da Doca: 0 dias
- Tempo de custo da Transportadora: 2 dias
- Feriados cadastrados: Sim, há um feriado na quarta-feira seguinte ao dia do pedido
- Horário de corte (18h de segunda-feira) superior ao horário do pedido aprovado (15h da mesma segunda-feira)

Neste caso, a soma dos tempos de custo das três etapas da rota logística (Estoque + Doca + Transportadora) é de 5 dias.

Como há feriado cadastrado, adiciona-se um dia extra a esse tempo. Portanto, o prazo passa a ser de 6 dias (5 dias + 1 dia de feriado).

Como o pedido foi aprovado antes do horário de corte, a segunda-feira entra na contagem do prazo de entrega como dia 0 (D0). O prazo de entrega, portanto, será de __6 dias após a segunda-feira__.
