---
title: 'Flujo de una transacción'
id: 1xjzgJZvqwaI1rfxLMCC3Y
status: PUBLISHED
createdAt: 2019-11-26T17:45:13.678Z
updatedAt: 2022-07-19T14:29:24.191Z
publishedAt: 2022-07-19T14:29:24.191Z
firstPublishedAt: 2019-11-26T18:08:32.132Z
contentType: trackArticle
productTeam: Financial
slug: flujo-de-una-transaccion
locale: es
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugES: pagos
---

El camino que recorre el dinero cuando se intercambia por un producto o servicio es lo que llamamos __transacción__.

En una tienda VTEX, una transacción comienza cada vez que un usuario elige una [condición de pago](https://help.vtex.com/es/tutorial/diferencia-entre-medios-de-pago-y-condiciones-de-pago) y cierra su pedido. A partir de ahí, los datos de compra se envían para validación de cada uno de los integrantes del proceso.

Las transacciones realizadas por el módulo de pagos de VTEX pasan por diversos status, desde el inicio del proceso de autorización, pasando por la liquidación del valor y llegando hasta la finalización de la transacción.

Vea abajo un ejemplo de la línea de tiempo con los status de la transacción.

![Transaction Flow](//images.contentful.com/alneenqid6w5/4AvpkJnEN2ImKkIgQQoIKK/e031cc030d5e1da745fac51137c4d4b2/Transaction_Flow.jpg)

1. __Authorizing__: Este es el primer status de una transacción en Pagos. En esta etapa, Pagos indica que se ha iniciado el proceso de envío de información a un adquirente o a otro gateway.
2. __Authorized__: Una vez iniciado el proceso de autorización, el adquirente u otro gateway envía la información de la transacción al banco emisor. El banco responde si la transacción debe ser o no autorizada. Si niega la transacción, el pago es __cancelado__. Si la autoriza, el status de la transacción pasa a __Authorized__.
3. __Analyzing Risk (opcional)__: Después de la autorización del banco emisor, el __antifraude__ actúa analizando el riesgo de la transacción. Este paso es opcional. Sin embargo, recomendamos el uso de un sistema de antifraude para verificar sus transacciones.
4. __Risk Approved (opcional)__: Si el antifraude responde positivamente, la transacción pasa al status __riesgo aprobado__. Si el antifraude identifica algún indicio de fraude, la transacción es __cancelada__.
5. __Approved__: Este status indica que la transacción ha pasado por todas las verificaciones posibles. Fue autorizada por el banco emisor y fue aprobada por el antifraude. Con esto, la transacción gana el status de __aprobada__.
6. __Settlement of $__: Este status indica que se iniciará el proceso de __liquidación__ de un valor específico. Es importante señalar que, en esta etapa, el valor __aún no se ha liquidado__. Lo que existe es apenas un aviso de que el proceso de liquidación de ese valor se realizará en los próximos status.
7. __Settling__: En este status, se inicia efectivamente el intento de __liquidación__ del valor. Los sistemas responsables inician el proceso para liquidar el valor de la transacción.
8. __Settled__: Cuando la transacción llegue a este status, esto indica que el valor fue __liquidado con éxito__. A partir de aquí, el flujo es responsabilidad exclusiva del __conector__. Corresponde al administrador de la tienda acompañar si el importe del pago se depositará correctamente en su cuenta.
9. __Finished__: La transacción llega al status __finished__ cuando la factura con el valor del pago se emite y se vincula al pedido en el OMS. Es importante prestar atención a este status, ya que incluso después de la liquidación correcta del valor, [es necesario incluir la factura en el pedido](/es/faq/por-que-una-transaccion-fue-capturada-con-exito-pero-no-fue-finalizada-en-el-pci-gateway).
