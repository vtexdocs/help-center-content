---
title: 'O feriado não é mostrado na lista depois de usar o API para criar (PUT)'
id: WqzSTP6oFwk4MbGaO5mIU
status: PUBLISHED
createdAt: 2022-05-02T22:26:55.630Z
updatedAt: 2022-11-25T22:00:07.142Z
publishedAt: 2022-11-25T22:00:07.142Z
firstPublishedAt: 2022-05-02T22:26:56.888Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: o-feriado-nao-e-mostrado-na-lista-depois-de-usar-o-api-para-criar-put
locale: pt
kiStatus: Backlog
internalReference: 571040
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



O registro de férias pode ser feito tanto diretamente em nossa UI administrativa (`/admin/logística/#/holidays') como também utilizando nossa API.

Neste caso, o problema surge quando se utiliza o API e se faz várias solicitações ao mesmo tempo _(mais ou menos no mesmo segundo)_. Isto está gerando inconsistência nas informações causadas por um problema na indexação do registro uma vez que ele é criado.

Para detalhar um pouco mais este cenário, é importante fazer uma referência ao **registro individual** e ao **processamento deste registro a ser mostrado na lista*** e que nosso sistema logístico leve em conta _confirmando aqui que o feriado só será levado em conta nos cálculos logísticos se de fato este dia for mostrado na lista-_.

Quando esta questão ocorre, o registro individual é mantido, ou seja, se eles fizeram um **GET por ID de feriado**, eles receberão os detalhes, no entanto, quando eles fizeram um **GET da lista de feriados**, este registro não aparecerá, o que significa que este registro foi deixado inconsistente e não há como recuperá-lo, uma vez que cada PUT feito com o mesmo ID encontrará um registro inconsistente que não irá gerar uma atualização ou reprocessamento.



## Simulação



Para tentar simular este problema, é necessário registrar vários feriados na mesma conta ao mesmo tempo. É possível que um ou mais destes feriados sejam inconsistentes.

Depois disso, você pode:

1. Validar com o GET por ID
2. Em seguida, validar com o GET da lista de feriados ou diretamente na UI.



## Workaround



Recomendamos a revisão dos seguintes comentários:

- Por um lado, para validar a integração e as solicitações a esta API, pois para o registro de férias na mesma conta é recomendado ter processos que **garantem espaços prudentes de tempo entre cada PUT**, talvez pensando em dar um **espaço de +-15 segundos ou mesmo minutos***.
- Por outro lado, no caso de apresentar este comportamento, é possível enviar um novo registro **(PUT) modificando o ID***. Isto criará um novo registro que, se o ponto anterior for respeitado, não haverá problema e ele será mostrado na lista.

