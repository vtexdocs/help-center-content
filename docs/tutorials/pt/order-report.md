---
title: 'Relatório de pedidos'
id: 31m1ewsmsEe0WS4So2aGMY
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.311Z
updatedAt: 2024-08-06T15:12:56.223Z
publishedAt: 2024-08-06T15:12:56.223Z
firstPublishedAt: 2019-01-24T22:03:18.967Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: planilha-de-pedidos
locale: pt
legacySlug: planilha-de-pedidos
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

A exportação de pedidos na página [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi) gera um relatório no formato `.csv` que contém uma série de detalhes sobre os pedidos da sua loja.

Cada linha da planilha refere-se a um [SKU](https://help.vtex.com/pt/tutorial/o-que-e-um-sku--1K75s4RXAQyOuGUYKMM68u). Se no mesmo pedido existem, por exemplo, 3 SKUs, esse pedido vai ser referenciado em 3 linhas no relatório, cada uma delas com dados referentes a um SKU do pedido.

>ℹ️ O link do relatório de pedidos fica disponível para download por seis horas.

As colunas correspondem a uma informação específica sobre o pedido, conforme descrito abaixo.

*   **Origin**: indica se a origem do pedido é [marketplace ou fulfillment](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402).
*   **Order**: ID do pedido, que aparece na tela de atributos do pedido, no módulo Gerenciamento de Pedidos.
*   **Sequence**: sequência numérica da transação do pedido.
*   **Creation Date**: data e hora em que o pedido foi feito pelo cliente.
*   **Client Name**: primeiro nome do cliente que fez o pedido.
*   **Client Last Name**: sobrenome do cliente que fez o pedido.
*   **Client ID**: número de CPF do cliente que fez o pedido.
*   **Email**: email do cliente que fez o pedido.
*   **Phone**: telefone do cliente que fez o pedido.
*   **UF**: estado do cliente que fez o pedido.
*   **City**: cidade do cliente que fez o pedido.
*   **Address Identification**: ID do endereço de envio do pedido.
*   **Address Type**: tipo de endereço de entrega (residencial ou pickup point).
*   **Receiver Name**: Nome da pessoa que vai receber a entrega do pedido.
*   **Street**: logradouro do endereço de entrega.
*   **Number**: número do endereço de entrega.
*   **Complement**: informação complementar do endereço de entrega.
*   **Neighborhood**: bairro do endereço de entrega.
*   **Reference**: referência do endereço de entrega.
*   **Postal  Code**: CEP do endereço de entrega.
*   **SLA Type**: tipo de entrega (convencional, retirada em loja, entrega rápida).
*   **Courier**: transportadora responsável pela entrega.
*   **Estimate Delivery Date**: prazo de entrega.
*   **Delivery Deadline**: tempo total de entrega do pedido em dias úteis (5bd = 5 business days, ou dias úteis).
*   **Status**: status do pedido no momento da exportação da planilha.
*   **Last Change Date**: última data e horário em que houve alteração no status do pedido.
*   **UtmMedium**: utm_medium do pedido, caso haja.
*   **UtmSource**: utm_source do pedido, caso haja.
*   **UtmCampaign**: utm_campaign do pedido, caso haja.
*   **Coupon**: ID do cupom do pedido, caso haja.
*   **Payment System Name**: meio de pagamento usado no pedido.
*   **Installments**: número de parcelas do pedido.
*   **Payment Value:** valor pago pelo cliente pelo pedido, já com os descontos e promoções aplicados.
*   **Quantity_SKU**: quantidade de itens do mesmo SKU.
*   **ID_SKU**: ID do SKU.
*   **Category Ids Sku**: IDs das categorias em que se encontra o SKU. Esta informação é apresentada seguindo a árvore de departamento/categoria/subcategoria. Por exemplo, se o valor é /1000003/1000016/, isto significa que o SKU está na categoria 1000016, que por sua vez faz parte do departamento 1000003.
*   **Reference Code**: código de referência do SKU.
*   **SKU Name**: nome do SKU conforme cadastrado no catálogo.
*   **SKU Value**: preço cadastrado para o SKU.
*   **SKU Selling Price**: preço pelo qual o SKU foi vendido de fato, já com os descontos e promoções aplicados.
*   **SKU Total Price**: valor total do SKU no pedido, considerando todos os itens do SKU.
*   **SKU Path**: URL onde o SKU está armazenado no sistema VTEX.
*   **Item Attachments**: anexos do SKU.
*   **List ID**: ID da lista, caso o SKU esteja em alguma.
*   **List Type Name**: nome do tipo de lista em que o SKU está, caso esteja em alguma.
*   **Service (Price/ Selling Price)**: serviço atrelado ao SKU no pedido, caso haja.
*   **Shipping List Price**: valor do frete por SKU.
*   **Shipping Value**: valor do frete por SKU realmente aplicado ao pedido.
*   **Total Value**: valor total do pedido. Atenção: não é o valor do SKU, mas sim do pedido total. Se existem outros SKUs no mesmo pedido, o valor deles também é considerado nesse total.
*   **Discounts Totals**: valor total dos descontos aplicados ao pedido.
*   **Discounts Names**: promoções aplicadas ao pedido.
*   **Call Center Email**: email do operador de televendas que fez o pedido, se for o caso.
*   **Call Center Code**: ID do operador de televendas que fez o pedido, se for o caso.
*   **Tracking Number**: número de rastreio do pedido.
*   **Host**: host, configurado no License Manager, que recebeu o pedido.
*   **GiftRegistry ID**: ID do vale-presente do pedido, caso haja.
*   **Seller Name**: nome do seller do pedido.
*   **Status TimeLine**: linha do tempo dos status do pedido, desde a criação até o momento da exportação da planilha.
*   **Obs**: observação incluída pelo cliente no pedido, caso haja.
*   **UtmiPart**: é a UTM utmi_pc, para rastreamento interno de tráfego no site - por exemplo, para rastrear origem em determinado clique em um banner da própria loja.
*   **UtmiCampaign**: é a UTM utmi_cp, para rastreamento interno de tráfego no site - por exemplo, para rastrear origem em determinado clique em um banner da própria loja.
*   **UtmiPage**: é a UTM utmi_p, para rastreamento interno de tráfego no site - por exemplo, para rastrear origem em determinado clique em um banner da própria loja.
*   **Seller Order Id**: ID do pedido no seller, caso tenha sido uma venda como marketplace.
*   **Acquirer**: adquirente que atuou na transação.
*   **Authorization ID**: ID da autorização.
*   **TID**: [Transaction ID](https://help.vtex.com/pt/tutorial/como-achar-nsu-e-tid-do-pedido--frequentlyAskedQuestions_477) do pedido.
*   **NSU**: [Número sequencial único](https://help.vtex.com/pt/tutorial/como-achar-nsu-e-tid-do-pedido--frequentlyAskedQuestions_477) do pedido.
*   **Card First Digits**: seis primeiros dígitos do cartão usado na compra.
*   **Card Last Digits**: quatro últimos dígitos do cartão usado na compra.
*   **Payment Approved By**: email da pessoa que aprovou o pagamento (aplicado quando a aprovação é feita manualmente).
*   **Canceled By**: email do usuário que realizou o cancelamento do pedido.
*   **Cancellation Reason**: corresponde ao campo `cancelReason` apresentado na [API de Orders](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). Essa coluna apresenta apenas valores nulos. Recomendamos consultar a coluna **Cancellation Data** para mais informações sobre o cancelamento.
*   **Gift Card Name**: nome do vale-presente usado no pedido, caso algum tenha sido usado.
*   **Gift Card Caption**: descrição do vale-presente, caso algum tenha sido usado.
*   **Authorized Date**: data e horário em que a transação do pedido foi autorizada.
*   **Corporate Name**: razão social, quando o pedido é feito por empresa.
*   **Corporate Name**: número do CNPJ, quando o pedido é feito por empresa.
*   **TransactionID**: ID da transação.
*   **PaymentID**: ID do pagamento.
*   **SalesChannel**: ID da política comercial do pedido.
*   **marketingTags**: campo que pode ser usado pelo sistema da loja para rastrear ações distintas. O sistema de recorrência da VTEX popula esse campo com o valor vtexrecurrence.
*   **Delivered**: indica se o pedido já foi entregue (true) ou se ainda não foi entregue (false), para o caso de lojas que enviam essa informação para o sistema da VTEX.
*   **SKU RewardValue**: pontuação do SKU no programa de fidelidade da loja.
*   **Is Marketplace certified**: sinaliza se o pedido foi realizado através de um marketplace certificado (true) ou não (false).
*   **Is checked in**: sinaliza se o pedido foi feito em loja física através do VTEX Sales App (true) ou não (false).
*   **Currency Code**: código que representa a moeda em que a venda foi realizada (por exemplo: BRL ou USD).
*   **Taxes**: resultado da soma entre Tax e CustomTax, as taxas atribuídas ao SKU. Se ambos os valores não existirem, a coluna estará vazia.
*   **Invoice Numbers**: número da nota fiscal do pedido.
*   **Country**: país em que o pedido foi realizado.
*   **Input Invoices Numbers**: números de nota fiscal do tipo Output, ou seja, referente a uma compra.
*   **Output Invoices Numbers**: números de nota fiscal do tipo Input, ou seja, referente a uma devolução.
*   **Status raw value (temporary)**: o valor do status de um pedido sem nenhum tratamento específico, ou seja, o estado de um pedido como uma string não tratada. Por exemplo: o status de um pedido pode aparecer na interface como `Manuseando` e nesse campo estaria `handling`.
*   **Cancellation Data**: motivo indicado pelo cliente final para o cancelamento do pedido, conforme apresentado no campo `Reason` do objeto `cancellationData` apresentado na [API de Orders](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/cancel). Caso o usuário não preencha esse campo no momento do cancelamento, essa coluna estará vazia no relatório.
