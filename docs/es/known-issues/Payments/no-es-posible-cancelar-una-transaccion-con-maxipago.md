---
title: "No es posible cancelar una transacción con MaxiPago"
id: 6HTbiKFtp2hTd080AeVk7O
status: PUBLISHED
createdAt: 2022-06-28T17:06:17.956Z
updatedAt: 2023-05-23T17:38:06.349Z
publishedAt: 2023-05-23T17:38:06.349Z
firstPublishedAt: 2022-06-28T17:06:18.268Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: no-es-posible-cancelar-una-transaccion-con-maxipago
locale: es
kiStatus: Backlog
internalReference: 507480
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>

Quando a transação não avança para o estágio autorizado há muitos dias e o cliente tenta cancelá-la, ele recebe a seguinte mensagem de erro no OMS:

     switchQualifier:cancelar-ordem Vtex.Commerce.Checkout.Services.Gateway.GatewayTransactionCancellationException: A operação de cancelamento retornou Fail.

Nos logs da transação, é possível notar que no payload a transaçãoID não foi informada/gerada, o que significa que a transação não pode ser cancelada uma vez que este campo é obrigatório para realizar esta ação no lado do MaxiPago. Esse pagamento nunca chegou ao adquirente.

Resposta do conector:

    CancelarResposta: <api-error> <erroCódigo de erro>1</erroCódigo de erro> <erroMsg>Validação da SA vertical para a transação de entrada xml falhou. Motivo Erro Parser: URI=null Line=1: cvc-complex-type.2.4.b: O conteúdo do elemento 'vazio' não está completo. Um dos elementos '{transactionID, customerId, customerIdExt, ipAddress}' é esperado.</errorMsg> </api-error>

##### Código de erro:

    Código do conector: 1 - Mensagem: Falha na validação do esquema para a SA vertical para a transação de entrada xml. Motivo do erro Parser: URI=null Line=1: cvc-complex-type.2.4.b: O conteúdo do elemento 'vazio' não está completo. Um dos elementos '{transactionID, customerId, customerIdExt, ipAddress}' é esperado. - Mensagem de origem: A validação do esquema para a SA vertical para a transação de entrada xml falhou. Motivo Erro Parser: URI=null Line=1: cvc-complex-type.2.4.b: O conteúdo do elemento 'vazio' não está completo. Um dos elementos '{transactionID, customerId, customerIdExt, ipAddress}' é esperado.


## Simulación


Este escenario no se puede reproducir.


## Workaround


Solicitud vía ticket para que VTEX cambie la base de datos para el pago cancelado

