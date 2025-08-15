---
title: 'Flujo de la transacción en Pagos'
id: Er2oWmqPIWWyeIy4IoEoQ
status: PUBLISHED
createdAt: 2019-01-24T21:42:55.722Z
updatedAt: 2024-08-22T13:13:32.815Z
publishedAt: 2024-08-22T13:13:32.815Z
firstPublishedAt: 2019-01-24T21:42:56.197Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: transaction-flow-in-payments
legacySlug: flujo-de-la-transaccion-en-pci-gateway
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Las transacciones realizadas por el Pagos de VTEX pasan por diversos status, desde el inicio del proceso de autorización, pasando por la liquidación del valor y llegando hasta la finalización de la transacción. El objetivo de este artículo es explicar cada una de estas diferentes etapas de una transacción.

Vea abajo un ejemplo de la línea de tiempo con los estados de la transacción.

![Transaction Flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visi%C3%B3n-de-conjunto-de-pagos/flujo-de-la-transaccion-en-pagos_1.jpg)

1. __Authorizing__ (Autorizando): Este es el primer status de una transacción en Pagos. En esta etapa, Pagos indica que se ha iniciado el proceso de envío de información a un adquirente o a otro gateway.
2. __Authorized__ (Autorizado): Después del inicio del proceso de autorización, el adquirente o otro gateway envía la información de la transacción al banco emisor. El banco responde si la transacción debe ser o no autorizada. Si se niega la transacción, el pago es __cancelado__. Si lo permite, el status de la transacción pasa a __Authorized__.
3. __Analyzing Risk (opcional)__ (Análisis de riesgo - opcional): Después de la autorización del banco emisor, el __antifraude__ actúa analizando el riesgo de la transacción. Este paso es opcional. Sin embargo, recomendamos el uso de un sistema de antifraude para verificar sus transacciones.
4. __Risk Approved (octional)__ (Riesgo aprobado - opcional): Si el antifraude responde positivamente, la transacción pasa al status __risco aprobado__. Si el antifraude identifica algún indicio de fraude, la transacción es __cancelada__.
5. __Approved__ (Aprobado): Este estado indica que la transacción ha pasado por todas las comprobaciones posibles. Fue autorizada por el banco emisor y fue aprobada por el antifraude. Con ello, la transacción gana el status de __aprovada__.
6. __Settlement of $__ (Liquidación de valor): Este estado indica que se iniciará el proceso de __liquidación__ de un valor específico. Es importante resaltar que, en esta etapa, el valor no se ha liquidado. Lo que existe es sólo una advertencia de que el proceso de liquidación de ese valor se realizará en los próximos status.
7. __Settling__ (Liquidando): En este estado, se inicia efectivamente el intento de __liquidación__ del valor. Los sistemas responsables inician el proceso para que el valor de la transacción sea liquidado.
8. __Settled__ (Liquidado): Cuando la transacción llegua a este status, esto indica que __el valor se ha liquidado correctamente__. En este momento, el pago ya se ha enviado a la cuenta del comerciante.
9. __Finished__ (Finalizado): La transacción llega al status __finished__ cuando la factura con el valor del pago es emitida y vinculada al pedido en el módulo OMS. Es importante tener atención a este status, ya que incluso después de la liquidación correcta del valor, [es necesario incluir la factura en el pedido](https://help.vtex.com/es/faq/por-que-una-transaccion-fue-capturada-con-exito-pero-no-fue-finalizada-en-el-pci-gateway).
