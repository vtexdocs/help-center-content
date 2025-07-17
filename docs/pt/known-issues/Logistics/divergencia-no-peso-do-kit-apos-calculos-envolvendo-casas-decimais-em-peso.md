---
title: "Divergência no peso do kit após cálculos envolvendo casas decimais em peso"
id: 4wWyTmTAd2h2oxw5HtGn6V
status: PUBLISHED
createdAt: 2022-09-13T19:31:43.534Z
updatedAt: 2022-11-25T21:58:57.873Z
publishedAt: 2022-11-25T21:58:57.873Z
firstPublishedAt: 2022-09-13T19:31:44.068Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: divergencia-no-peso-do-kit-apos-calculos-envolvendo-casas-decimais-em-peso
locale: pt
kiStatus: Backlog
internalReference: 657186
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Em certos casos envolvendo kits, a política de embarque pode não estar disponível, isto pode acontecer devido à lógica usada para os cálculos que envolvem o peso.
Inicialmente dividimos o peso total do kit pela quantidade dos itens, o resultado é tomado como o peso unitário de cada item, e este valor é apresentado com 7 pontos decimais após a vírgula. Em um segundo momento, fazemos o cálculo inverso, multiplicando o peso unitário pela quantidade de itens, mas usando apenas 4 pontos decimais, o que gera um resultado diferente do primeiro cálculo, e pode levar o sistema a considerar um valor diferente do valor real do peso do kit.



## Simulação


Acrescente o SKU de um kit à simulação,
Divida o valor total do peso por cada item, considere o uso de 7 pontos decimais aqui;
Agora com o valor resultante da conta acima, faça o seguinte cálculo; multiplique o peso unitário pela quantidade de itens, considere aqui 4 pontos decimais;
Note que o valor do peso considerado pelo sistema será diferente;



## Workaround


Não tem solução

PS.: Adicione imagens e anexos para reforçar sua descrição

