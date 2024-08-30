---
title: 'Configurar Feed v3 do módulo de Gerenciamento de pedidos '
id: 5qDml3cQypWDRTgw69s4C1
status: DRAFT
createdAt: 2019-01-30T20:34:24.388Z
updatedAt: 2021-09-09T18:30:06.744Z
publishedAt: 
firstPublishedAt: 2019-01-30T20:37:00.666Z
contentType: tutorial
productTeam: Post-purchase
author: 6AcGyun1hSWewU8YcaQiO
slug: configurar-feed-v3-do-modulo-de-gerenciamento-de-pedidos
locale: pt
legacySlug: feed-v3-de-gerenciamento-de-pedidos
subcategory: 3Y8xzVGMXcuPTuzfFI0vUp
---

A nova versão do feed proporciona melhor performance de operação para a sua loja através das suas novas funcionalidades que garantem agilidade na gestão dos eventos dos seus pedidos. 

## Configuração do Feed

O Feed v3 possibilita a personalização do feed com filtros e intervalos necessários para a sua operação.

Isso quer dizer que é possível definir quais status estarão visíveis no feed de eventos da sua loja através da [API Feed Configuration](https://developers.vtex.com/reference/feed-v3#feedconfiguration). A lista com os possíveis status de pedido pode ser vista no artigo [Fluxo de pedido em Gerenciamento de pedidos](https://help.vtex.com/pt/tutorial/fluxo-de-pedido/#entendendo-os-status).

>ℹ️ Se o objeto `filter` não for configurado na API, as atualizações de **todos** os status serão enviadas ao feed.

>ℹ️ A AppKey que será usada na integração deve ser a mesma usada na configuração inicial.

Um exemplo de body seria o seguinte:

```
{
   “filter”: {
       “status”: [“order-completed”,“start-handling”,“handling”,“ready-for-handling”,“cancel”]
   },
   “queue”:{
       “visibilityTimeoutInSeconds”: 250,
       “MessageRetentionPeriodInSeconds”:345600
   }
}

```

O campo `visibilityTimeoutInSeconds` configura um tempo de espera em segundos para a reexibição dos eventos no feed depois de serem consultados. Ao fazer uma chamada para leitura do seu feed, __todos__ os eventos retornados são omitidos para serem _commitados_, não aparecendo em nenhuma consulta durante o tempo de espera definido no campo. Caso não sejam _commitados_, os eventos voltam a aparecer no feed depois do tempo configurado.

O tempo de espera _default_ definido no campo é de 30 segundos, mas ele poderá ser configurado para até 43200 segundos (12 horas).

O tempo de permanência de um evento no seu feed é definido em segundos no campo `MessageRetentionPeriodInSeconds`. Se um evento não receber interações dentro do tempo configurado, ele será excluído da fila do feed e os dados referentes a ele serão perdidos. O tempo máximo a ser definido no campo é de até 345600 segundos (4 dias). 

>ℹ️ Para configurar e usar o Feed v3, é necessário ter um [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc?locale=pt) habilitado com o recurso `Feed v3 and Hook`, dentro do produto de **OMS**.

## Como funcionam as APIs do Feed v3

O Feed v3 trabalha com duas chamadas: uma para a sua leitura e outra para informar que um evento já foi lido e deve ser excluído.

>⚠️ Não se esqueça de configurar o Feed antes de usar!

### Get feed order status

A [chamada de leitura do feed](https://developers.vtex.com/reference/feed-v3#getfeedorderstatus1) retorna a sua fila de eventos, isso é, retorna as alterações de status dos pedidos. __Cada evento corresponde a uma alteração de status.__

O parâmetro `maxLot` indica o número máximo de eventos que serão retornados a cada chamada. No feed v3, você pode especificar __até 10 eventos__. 

>⚠️ Toda vez que uma chamada de leitura do feed é feita, **todos** os eventos retornados ficam invisíveis no feed pelo tempo definido no campo `visibilityTimeoutInSeconds` da API de Feed Configuration. 

### Confirm item feed order status

Depois que você fez a leitura do feed, é hora de [_commitar_ os eventos](https://developers.vtex.com/reference/feed-v3#commititemfeedorderstatus).

No body do _commit_ deve ser passado o valor do `handles`. Esse valor é retornado pela API do feed quando você faz a chamada para a sua leitura e é por meio dele que a API vai saber a qual evento você está se referindo quando faz o _commit_. 

No body, cada _array_ pode conter quantos `handles` forem necessários. Isso significa que é possível _commitar_ mais de um evento por vez.

>ℹ️ O campo `visibilityTimeoutInSeconds` indica o tempo máximo para realizar um <i>commit</i> de um evento. 

Não existem casos em que um evento do feed não deva ser _commitado_. Seu sistema deve _commitar_ todos os eventos da sua fila. __Uma vez que um evento foi _commitado_, não é possível recuperá-lo no feed com o mesmo appkey.__

>⚠️ Todos os possíveis status de pedido (considerando a filtragem, quando aplicável) devem ser tratados na integração para evitar a ocorrência de erros. Atenção especial deve ser dada ao status `Status Null`, que pode não ser identificado e acabar sendo mapeado como outro status, possivelmente gerando erros. 

Para entender mais sobre o funcionamento do feed, acesse nosso artigo sobre [como funciona o feed do módulo de Gerenciamento de pedidos](https://help.vtex.com/pt/tutorial/como-funciona-o-feed-v3-do-modulo-de-gerenciamento-de-pedidos--5SzSKee2f666YCoWkm0eQC).

## Hook

Saiba mais sobre como é a [configuração e o funcionamento do Hook](https://help.vtex.com/pt/tutorial/configurar-hook-do-feed-v3--6JkYQpIlU8ptysUiGIp4Px), alternativa ao Feed para operações robustas com integrações complexas.

