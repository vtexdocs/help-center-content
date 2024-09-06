---
title: 'Adaptando sua integração para a Alterar pedido (Beta)'
id: 6kGQWs0IvpwIZoyeoLMjlp
status: PUBLISHED
createdAt: 2024-06-03T18:54:30.094Z
updatedAt: 2024-07-09T17:18:19.900Z
publishedAt: 2024-07-09T17:18:19.900Z
firstPublishedAt: 2024-06-03T20:02:10.248Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slug: adaptando-sua-integracao-para-a-alterar-pedido-beta
locale: pt
legacySlug: adaptando-sua-integracao-para-a-alterar-pedido-beta
subcategoryId: 3LQ1Tl0u4frEOd45BkjFAm
---

Para evoluir a plataforma VTEX com relação a mudanças em pedidos, estamos lançando a [Alterar pedido (Beta)](https://help.vtex.com/pt/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ), uma solução muito mais completa, versátil e que proporciona uma [nova experiência no Admin VTEX](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

Após as interações entre nosso time de engenharia e clientes e parceiros que já aderiram à versão beta, elaboramos este conteúdo com boas práticas de implementação e dúvidas frequentes. O objetivo é que os próximos clientes e parceiros disponham deste material de apoio ao começarem a usar a **Alterar pedido (Beta)**.

Este artigo está organizado da seguinte forma:

* [Adaptação para diferentes casos de uso](#adaptacao-para-diferentes-casos-de-uso)
* [Alterações no request body das requisições](#alteracoes-no-request-body-das-requisicoes)
* [Requisições com erros e falhas](#requisicoes-com-erros-e-falhas)
* [Perguntas frequentes (FAQ)](#perguntas-frequentes-faq)

## Adaptação para diferentes casos de uso

As seções a seguir apresentam os principais casos de uso da **Alterar pedido (Beta)** e respectivas recomendações.

### Comunicação com cliente via email transacional

A **Alterar pedido (Beta)** utiliza novos templates para [emails transacionais](https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my) (Message Center), de forma a contemplar as funcionalidades inovadoras da solução. 

Para customizar um template de email no Admin VTEX, copie e cole o link abaixo no seu navegador, substituindo o `{accountName}` pelo [nome de conta](https://help.vtex.com/pt/tutorial/o-que-e-account-name--i0mIGLcg3QyEy8OCicEoC) da sua loja, e depois clique em `enter`:

`https://{accountName}.myvtex.com/admin/message-center/#/templates/vtexcommerce-order-changed-v2`

### Gerenciamento da alteração do pedido via Admin VTEX

Para as lojas que utilizam a versão atual para alterar pedidos via Admin VTEX, após a instalação da nova solução pela equipe da VTEX, as interfaces atualizadas estarão imediatamente disponíveis para você usar a **Alterar pedido (Beta)** via Admin VTEX. Isso inclui novo gerenciamento e comunicação do [Minha conta](https://help.vtex.com/pt/tutorial/como-funciona-a-minha-conta--2BQ3GiqhqGJTXsWVuio3Xh#pedidos) e de [templates de emails transacionais](https://help.vtex.com/pt/tutorial/templates-de-emails-transacionais--3g2S2kqBOoSGcCaqMYK2my).

### Gerenciamento da alteração do pedido via API

Para as lojas que utilizam nossas APIs, é necessário que a implementação na integração obedeça à nova arquitetura da funcionalidade. 

Na **Alterar pedido (Beta)**, o endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) funciona de forma assíncrona e o [usuário](https://help.vtex.com/pt/tutorial/gerenciando-usuarios--tutorials_512) ou integração que faz a requisição recebe da plataforma um `requestId`, que é um identificador único para acompanhar a operação para alterar o pedido. Este identificador posteriormente será utilizado em determinados endpoints. Todos os endpoints da **Alterar pedido (Beta)** são:

* [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes)
* [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview)
* [Get order change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-)
* [Get order change history](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes)
* [Retry order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry)
* [Cancel order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel)

Após alterar o pedido usando o endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), para novas requisições aos endpoints da **Alterar pedido (Beta)** existem as seguintes alternativas para o integrador:

* **Polling:** complexidade baixa.
* **Preview:** complexidade média.

A tabela a seguir apresenta cada uma:

| **Tipo de fluxo** | **Funcionamento** |
| :---: | :--- |
| **Polling**<p>Complexidade baixa</p> | <p>Após a operação de alteração do pedido é gerado um código único que identifica a alteração do pedido, o `requestId`, e com ele você pode acompanhar os detalhes da requisição pelo endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change details</a>. Neste endpoint, após a alteração do pedido, a propriedade do response body `finished` passa a ter o valor `true`.</p><p>Além disso, o <a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change details</a> também pode ser utilizado para obter informações sobre falhas e erros que resultaram no eventual cancelamento da operação de alteração do pedido, como será visto na seção <a href="#requisicoes-com-erros-e-falhas">Requisições com erros e falhas</a>.</p> |
| **Preview** <p>Complexidade média</p> | <p>Antes de fazer uma requisição ao <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a>, a integração tem a opção de fazer uma visualização prévia que vai resultar em um response body exatamente igual à requisição de alteração. Para isso, basta usar o mesmo request body no requisição ao endpoint <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a>.</p><p>Essa pré-visualização é uma simulação da alteração e não gera efeitos reais de alteração no pedido. O uso do <a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a> é útil para você obter os valores totais associados à alteração do pedido sendo feita, e também para validar os detalhes da requisição com um request body válido.</p><p>Após uma resposta de sucesso `200 OK` para obter uma visualização prévia da alteração, a integração pode prosseguir com a requisição a <a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a> para alterar o pedido.</p><p>Posteriormente, sua integração pode ser adaptada a cenários como:<ul><li><b>Criação otimista:</b> os dados das validações obtidas com a simulação da alteração cobrem a maior parte dos cenários de sucesso `200 OK`.</li><li><b>Implementação do Polling:</b> mencionado anteriormente.</li></ul></p> |

## Alterações no request body das requisições

A **Alterar pedido (Beta)** mantém alguns atributos da solução anterior, mas há outros que foram criados ou transformados, tanto em nomenclatura quanto em funcionamento. As principais mudanças foram organizadas da seguinte forma:

* [Valores manuais](#valores-manuais)
* [Adição e remoção de itens](#adicao-e-remocao-de-itens)
* [Atributos de itens obrigatórios e opcionais](#atributos-de-itens-obrigatorios-e-opcionais)
* [Responsabilidade do usuário na automatização do sistema](#responsabilidade-do-usuario-na-automatizacao-do-sistema)

### Valores manuais

* **Antes:** os campos `discountValue` e `incrementValue` definiam o valor da alteração sendo feita no pedido, respectivamente para o decréscimo ou o acréscimo de um valor. O usuário calculava o valor da alteração e o resultado era acrescido ou decrescido no valor total do pedido por meio destes campos.
  > **Exemplo:** em um pedido de 100 reais a ser alterado para se adicionar um item de 50 reais, o usuário enviava o `incrementValue` com valor de 50 reais e o sistema calculava o total do pedido como 150 reais. Se o usuário quisesse dar ao cliente um desconto de 30 reais na alteração, ele precisava enviar o `discountValue` com valor de 30 reais para que o total do pedido fosse 120 reais.
* **Agora:** os novos campos `manualDiscountValue` e `manualIncrementValue` definem valores manuais adicionais sendo acrescidos ou decrescidos do custo total do pedido independentemente das alterações sendo feitas. Como o sistema calcula de forma automática o resultado das alterações (considerando o preço e condições do fechamento da compra), o usuário pode realizar o acréscimo ou decréscimo de valores usando os campos mencionados.
  > **Exemplo:** em um pedido de 100 reais a ser alterado para se adicionar um item de 50 reais, ao se adicionar o item, o sistema calcula automaticamente o acréscimo do valor de 50 reais e o usuário não precisa enviá-lo manualmente, sendo o resultado total do pedido igual a 150 reais. Caso o usuário queira dar ao cliente um desconto de 30 reais na alteração, basta enviar o campo `manualDiscountValue` com valor de 30 reais que o total do pedido será 120 reais.

### Adição e remoção de itens

* **Antes:** os atributos utilizados para adicionar e remover itens do pedido eram os arrays `itemsAdded` e `itemsRemoved` e eles continham objetos de itens com os campos `id`, `price` e `quantity`.  
* **Agora:** os atributos para adicionar e remover itens do pedido são os objetos `add` e `remove` e eles contém um novo nível que define um objeto para cada item por meio do array `items`.

Exemplo de remoção de itens na **Alterar pedido (Beta)**:

```
{
    "remove": {
        "items": [
            {
                "id": "1",
                "quantity": 1
            }
        ]
    }
}
```

<br>

### Atributos de itens obrigatórios e opcionais

Os itens no request body das requisições precisam de menos atributos obrigatórios do que antes, são eles: `id` e `quantity`. Os demais atributos são obtidos a partir do pedido ou do sistema Catálogo.

Há outros campos que podem ser modificados para sobrepor as informações de um item sendo alterado, caso seja necessário adicionar ou alterar itens existentes. Os campos opcionais são `price`, `unitMultiplier` e `measurementUnit`. Quaisquer outros campos enviados na requisição são desconsiderados pelo sistema.

### Responsabilidade do usuário na automatização do sistema

* **Antes:** era responsabilidade do usuário calcular o valor a ser alterado no pedido. Ele enviava esse valor pelo atributo `discountValue` ou `incrementValue`, dependendo se era um acréscimo ou decréscimo no preço.
* **Agora:** o sistema é responsável pelo fornecimento de informações sobre os itens e calcula, de forma automática, o valor final do pedido com a alteração. Ou seja, o usuário agora informa o mínimo necessário e não mais calcula o valor final do pedido, o que diminui cenários de erros.

## Requisições com erros e falhas

Quando ocorre erro ou falha na requisição da **Alterar pedido (Beta)**, as informações sobre o processamento podem ser obtidas pelo endpoint [Get order change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) pelo atributo `logs`. 

Exemplo de `logs` com erro de processamento:

```
{
    "requestId": "de88ad2b-a927-47ad-b5af-a6fab4d2a22f",
    "workflowId": "418827ee-0efd-4127-87c0-6d881358b750",
    "status": "preparing",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 1000,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "add": {
        ...
    },
    "logs": [
       {
            "date": "2024-05-13T21:35:00.1952066Z",
            "message": "Automatic transition failed. Current retry counter is 1. Failed with message: Failure to run the action 'preparing'. Content: '{\"error\":{\"code\":\"001\",\"message\":\"An error has occurred\"},\"operationId\":\"f69e8934-5f93-4ba2-9ebe-408080c6733b\",\"fields\":{}}'",
            "source": "Workflow Engine",
            "status": "preparing"
        },
        {
            "date": "2024-05-13T21:35:00.1481754Z",
            "message": "OperationId:f69e8934-5f93-4ba2-9ebe-408080c6733b\nSystem.NullReferenceException: Object reference not set to an instance of an object.\n   at VTEX.SOS.Services.OrderService.OrderServiceCapabilities.ChangeOrderV2.ChangeOrderMerger.MergeWithEnrichedItemMetadata(Seller seller, OrderItem itemToEnrich, OrderItem enrichedItem)\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemMetadataAsync(IContext context, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 284\n   at VTEX.SOS.Services.OrderService.OrderService.FillAddedItemInfoAsync(IContext context, OrderSource orderOrigin, IEnumerable`1 enrichedOrderItems, Seller seller, OrderItem addedItem, String salesChannel, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 273\n   at VTEX.SOS.Services.OrderService.OrderService.EnrichItemsOnlyAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 238\n   at VTEX.SOS.Services.OrderService.OrderService.PrepareChangeOrderAsync(IContext context, Order order, ChangeOrderInput changeOrderInput, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Steps/ChangeOrderV2.Prepare.cs:line 38\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288\n   at VTEX.SOS.Services.OrderService.ChangeOrderService.PrepareChangeInternalAsync(String orderId, String changeRequestId, IContext context, CancellationToken cancellationToken) in /app/VTEX.SOS/Services/OrderService/OrderServiceCapabilities/ChangeOrderV2/Service/ChangeOrderService.cs:line 288",
            "source": "ChangeOrderService:PrepareChangeInternalAsync",
            "status": "preparing"
        }
    ]
}
```

<br>

Para cada falha no sistema (erros não tratados), o sistema realiza de forma automática novas tentativas de processamento. Se as novas tentativas não funcionarem, a requisição de alteração será cancelada e o motivo do erro pode ser encontrado usando a  [Get order change details](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-) pelo atributo `cancellationData`.

Caso a origem do erro seja por inobservância do usuário às regras de validação da requisição, a operação será cancelada automaticamente e não serão feitas novas tentativas de processamento. Neste caso, o motivo do erro é também comunicado pelo `cancellationData`. 

Exemplo do objeto `cancellationData`: _a mudança de preço solicitada na requisição ultrapassa o valor limite configurado para cancelamento de pedidos._

```
{
    "requestId": "29004325-e2b8-4b7e-a82c-f588e6d3c07f",
    "workflowId": "ea392ae2-1db5-432c-97d3-adc4436ca4aa",
    "status": "canceled",
    "finished": false,
    "reason": "test",
    "manualDiscountValue": 37500,
    "manualIncrementValue": 0,
    "totalChangeValue": 0,
    "totals": [],
    "remove": {
        ...
    },
    "cancellationData": {
        "requestedByUser": false,
        "reason": "The value of the change exceed the order's price",
        "cancellationDate": "2024-05-13T21:31:38.8596Z"
    }
}
```

<br>

## Perguntas frequentes (FAQ)

Esta seção reúne dúvidas comuns de clientes e parceiros que utilizam a **Alterar pedido (Beta)**:

[1 - Como sobrescrevo o preço de um item específico?](#1-como-sobrescrevo-o-preco-de-um-item)

[2 - Como descubro e mudo o valor total do pedido antes que ele seja alterado?](#2-como-descubro-e-mudo-o-valor-total-do-pedido-antes-que-ele-seja-alterado)

[3 - Preciso informar o preço do frete ou ele é recalculado automaticamente?](#3-preciso-informar-o-preco-do-frete-ou-ele-e-recalculado-automaticamente)

[4 - Como funcionam as promoções na Alterar pedidos (Beta)?](#4-como-funcionam-as-promocoes-na-alterar-pedidos-beta)

[5 - O que devo fazer quando a requisição resulta no status canceling ou canceled?](#5-o-que-devo-fazer-quando-a-requisicao-resulta-no-status-canceling-ou-canceled)

### 1 - Como sobrescrevo o preço de um item?

Para sobrescrever o preço de um item específico, é possível aplicar um valor manual ao item ao mesmo tempo em que sua quantidade é alterada.

No endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), o atributo `price` tem a mesma função do fluxo de fechamento de pedidos e se refere ao preço nominal do item. Por exemplo, em um pedido com um item pesável, como uma maçã, o `price` é referente ao preço do quilo da maçã.

Exemplo de sobrescrita de preço em um item pesável:

```
{
    "reason": "the client wanted to change",
    "add": {
        "items": [
            {
                "id": "1",
                "quantity": 1,
                "price": 150,
            }
        ]
}
```

<br>

### 2 - Como descubro e mudo o valor total do pedido antes que ele seja alterado? 

O endpoint [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) permite ao usuário simular qual será o resultado da alteração do pedido a ser feita com o [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), pois utiliza o mesmo request body e fornece o mesmo response body, mas sem alterar o pedido. O `totalChangeValue` é o atributo que informa qual o valor total sendo alterado no pedido, seja para um valor maior (ex: taxa ou adição de itens) ou menor (ex: redução manual do valor ou remoção de itens).

Se for desejável que a integração manipule a variação no valor do pedido alterado, é possível utilizar o mesmo request body utilizado na [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview) e utilizá-lo em uma requisição ao [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes), manipulando para mais ou para menos, respectivamente, o valor dos campos `manualIncrementValue` e `manualDiscountValue`.

### 3 - Preciso informar o preço do frete ou ele é recalculado automaticamente?

Quando há mudanças na quantidade, tamanho ou peso de itens, o custo do frete é recalculado automaticamente e o valor é somado ao novo valor total do pedido. 

A regra de cálculo do novo custo do frete obedece às mesmas condições aplicadas no fechamento do pedido.

### 4 - Como funcionam as promoções na Alterar pedidos (Beta)?

A alteração do pedido aplica de forma automática as mesmas promoções e taxas que eram válidas para os itens no fechamento da compra, mas somente replicando as condições de então. Novas promoções e taxas não são recalculadas nas condições do pedido alterado.

> **Exemplo:** em uma loja havia uma promoção "leve 3 itens e pague 2", mas o cliente comprou somente 2 itens e não foi elegível para o desconto. Quando o cliente solicitou que ao seu pedido fosse adicionado mais um item, ele passou a adquirir 3 itens, mas a promoção não seria aplicada, pois não constava no pedido original.

É possível informar a promoção de um item no momento da alteração do pedido. Isso é feito manualmente com a [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) pelo atributo `priceTags`. Este já é o comportamento padrão da plataforma. 

Exemplo de item com promoções aplicadas no pedido original:

```
{
    "reason": "teste",
    "replace": [
        {
            "from": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.5
                    }
                ]
            },
            "to": {
                "items": [
                    {
                        "id": "16",
                        "quantity": 1,
                        "measurementUnit": "kg",
                        "unitMultiplier": 0.750,
                        "price": 530,
                        "priceTags": [
                            {
                                "name": "DISCOUNT@MANUALPRICE",
                                "value": -50,
                                "isPercentual": false
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```
<br>

Neste exemplo, a tag utilizada foi de desconto manual `DISCOUNT@MANUALPRICE`. A equivalente para taxas manuais seria a `TAX@MANUALPRICE`. O endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) também permite utilizar o atributo `priceTag` de uma promoção existente e mudar seu valor na alteração do pedido.

### 5 - O que devo fazer quando a requisição resulta no status canceling ou canceled?

Os status `canceling` e `canceled` significam que a alteração do pedido não foi processada corretamente, as mudanças não foram aplicadas ao pedido e o usuário pode desconsiderar a tentativa. As falhas e erros podem ocorrer por:

* Inobservância do usuário às regras de validação da requisição.
* Número excedido de tentativas de reprocessamento automático pelo sistema.
* Outras falhas de processamento do sistema.

A recomendação geral é investigar a origem do erro e checar o request body sendo enviado pelo endpoint [Create order change](https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes) ou [Preview order change](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview). Mais informações na seção [Requisições com erros e falhas](#requisicoes-com-erros-e-falhas).

## Saiba mais

| **Help Center** | **Developer Portal** |
| :--- | :--- |
| <p>Alterar pedidos via Admin VTEX: <ul><li><a href="https://help.vtex.com/pt/tutorial/como-funciona-a-alterar-pedido-beta--56TO0bOFXsfmpc7YZ3wIUZ">Como funciona a Alterar pedido (Beta)</a></li><li><a href="https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw">Como alterar pedidos (Beta)</a></li></ul></p> | <p>Alterar pedidos via API:<ul><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#patch-/api/order-system/orders/-changeOrderId-/changes">Create order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/preview">Preview order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-">Get order change details</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#get-/api/order-system/orders/-changeOrderId-/changes">Get order change history</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/retry">Retry order change</a></li><li><a href="https://developers.vtex.com/docs/api-reference/orders-api#post-/api/order-system/orders/-changeOrderId-/changes/-changeRequestId-/cancel">Cancel order change</a></li></ul></p> |

