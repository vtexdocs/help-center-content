---
title: 'Interpretando os dados da barra de pedidos na tela de Todos os Pedidos'
id: tutorials_7004
status: DRAFT
createdAt: 2017-04-27T21:48:24.142Z
updatedAt: 2023-03-23T19:59:28.692Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:19.805Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: interpretando-os-dados-da-barra-de-pedidos-do-oms
legacySlug: interpretando-os-dados-da-barra-de-pedidos-do-oms
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

A plataforma VTEX oferece uma maneira simples de acompanhar a evolução do número de pedidos fechados na sua loja. 

O seguinte conjunto de dados é apresentado na tela de __Todos os pedidos__ na seção __Gerenciamento de Pedidos__, trazendo informações úteis para o monitoramento de pedidos:

- Pedidos feitos __hoje__ até o horário atual;
- Pedidos feitos __ontem__ até o mesmo horário;
- Pedidos feitos no mesmo dia da __semana passada__, até o mesmo horário;
- Pedidos feitos no mesmo dia do __ano passado__, até o mesmo horário.

Ao lado de cada um desses valores, pode-se ver uma porcentagem que representa a variação relativa aos pedidos feitos no dia de hoje.

![order-metric-pt](//images.ctfassets.net/alneenqid6w5/4H6gLOi9RSYkUG2eIM6Oc2/d6de6b0c59982229df6b5ccc152dd83a/order-metric-pt.png)

No screenshot das métricas acima, podemos ver as seguintes informações:

- Hoje a loja recebeu 2464 pedidos até 20h50;
- Ontem foram 2176 pedidos até esse mesmo horário;
- Já no mesmo dia da semana passada, também até 20h50, houve 1856 pedidos;
- Por fim, em relação a um ano atrás houve um aumento expressivo no número de pedidos: no mesmo dia do ano passado, até o mesmo horário, foram 1425 pedidos, contra os 2464 deste ano.

<div class="alert alert-info">
O cálculo de pedidos feitos no <b>ano passado</b> é feito subtraindo 52 semanas do dia atual. Dessa forma, mantém-se o dia da semana. Por exemplo: o dia 24/novembro/2017 será comparado com o dia 25/novembro/2016, aonde ambas as datas caem numa sexta-feira.
</div>

O ranking localizado no canto direito da barra com esses dados mostra a posição da loja entre todas as lojas VTEX, com a métrica ao lado indicando a evolução entre ontem e hoje.

A barra não mostra a posição exata das lojas que estão nas 5 primeiras posições: para estas, o número mostrado será sempre “Top 5”.

Para todos os dados de variações de pedidos e também para os números de evolução no ranking, a cor verde indica um resultado positivo; azul, neutro; e vermelho, negativo.

_Importante: se a comparação de pedidos é feita com base em 0 pedidos no passado, a variação é de 0%._
