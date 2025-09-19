---
title: 'Change seller por afiliaciones que admitan split nativo: FAQ'
id: 2TcTp83SYrZ5GK9jOUwTam
status: PUBLISHED
createdAt: 2021-02-04T17:15:55.230Z
updatedAt: 2023-03-31T12:53:55.772Z
publishedAt: 2023-03-31T12:53:55.772Z
firstPublishedAt: 2021-02-04T18:32:32.831Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: change-seller-for-affiliations-that-support-native-split-faq
locale: es
legacySlug: change-seller-por-afiliaciones-que-admitan-split-nativo-faq
---

Durante el proceso de compra en un *marketplace*, se puede presentar la necesidad de cambiar de seller —quien entrega el producto al consumidor—. Uno de los motivos más habituales es la falta de stock, lo que termina provocando la cancelación de la venta. 

Con la funcionalidad __Change Seller__ para *marketplaces* con afiliaciones que soportan *split* de pagos, es posible hacer el [cambio de seller](/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete) y asegurar que la venta se efectúe, evitando reembolsos de pagos y burocracia innecesaria.

Acceda al artículo [Afiliaciones con *split* nativo y alteración de seller](/es/announcements/afiliacoes-com-split-nativo-e-alteracao-de-seller?utm_source=newsletter-pt&utm_medium=email-text&utm_campaign=jan-2021%0A%0A) para conocer más detalles sobre el funcionamiento de la solución, y si desea saber cómo utilizarla, consulte el tutorial [Cómo utilizar Change Seller](/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

A continuación, recopilamos y aclaramos las principales dudas que pueden surgir sobre el cambio de seller:

### ¿Será posible realizar el cambio de seller utilizando los comportamientos de liquidación (captura) automática?

No. Al optar por la liquidación automática, el pago se liquida después de la autorización y/o análisis del antifraude. En ese momento enviamos la información sobre los receptores del pago y la tarifa de pago del adquirente. 

Por eso, para tener acceso al cambio de seller, la afiliación con split se debe configurar en uno de estos comportamientos de liquidación:

- __Utilizar el comportamiento recomendado del procesador de pagos__.
- __Desactivado: No se captura automáticamente__.

![Captura de Pago Automática](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/faq/financial/change-seller-por-afiliaciones-que-admitan-split-nativo-faq_1.png)

### ¿Al seleccionar el comportamiento de liquidación que no es automático, cuándo se liquidará el pago?

La liquidación se realizará cuando se facture el pedido. Si la facturación se realiza después de muchos días, la liquidación seguirá el estándar configurado en la afiliación, según lo siguiente:

1.__Utilizar el comportamiento recomendado del procesador de pagos:__ la liquidación se programa de acuerdo con el retraso especificado por el conector. Este periodo, además de indicar si el pago fue autorizado, puede especificar (o recomendar) un número de días para realizar la captura cuando el adquirente envíe la respuesta. El número de días especificado por el partner depende de un acuerdo comercial entre usted, cliente y su adquirente, proveedor de pagos. 

2.__Desactivado: No se captura automáticamente:__ la liquidación no ocurre automáticamente. 

### ¿Se podrá realizar el cambio de seller después de la liquidación del pago?

No, la ventana de tiempo para cambiar de seller será entre la autorización y liquidación. 

Cuando se liquida el pago, la información sobre los receptores y los valores es enviada al adquirente y ya no se puede alterar. 

### ¿Se podrá realizar el cambio de seller en afiliaciones con split en todos los medios de pago?

No. Los pagos con split soportan el cambio de seller solamente cuando se realizan con una o dos tarjetas. Esto sucede porque, en la mayoría de los servicios de pago, los valores de los medios como el boleto bancario (exclusivo de Brasil) y la tarjeta de débito se liquidan inmediatamente. 

Por tanto, no podemos ofrecer una ventana de tiempo para la realización del cambio de seller. 

> ⚠️ Si intenta cambiar de seller con medios de pago que no sean tarjeta de crédito, recibirá el siguiente mensaje de error en la llamada de la API: «Error when updating additional data for transaction = 722726D8B04C4AAFB1EC945076FD2913. Payout split was already done»

### ¿Se podrá realizar reembolsos parciales o totales de los pedidos?

Sí, los reembolsos parciales y totales se realizarán de forma habitual. 

### ¿Qué sucederá si el cambio de seller implica una disminución o aumento del valor de los productos y/o flete? 

El valor liquidado del pago del consumidor permanecerá igual. Por lo tanto, el *split* considerará el valor original y aplicará las reglas de comisión y división de cuentas por cobrar sobre ese valor.

En los casos en que el nuevo seller tiene un precio más alto que el del *seller* original, nuestra solución «Change Seller» posee un bloqueo de seguridad que solo permite cambiar de *seller* si la diferencia de valores (productos + flete) no supera los BRL 0,30.

Si el nuevo *seller* tiene un precio más bajo que el del *seller* original, será posible continuar con el cambio, aunque el valor liquidado siga siendo el mismo.

Como el *split* de pagos considerará el valor inicial de la liquidación, el nuevo *seller* recibirá un valor mayor que el precio al que ofrecía el producto.

## Ejemplo

### Nuevo seller con un precio más alto hasta BRL 0,30 

Se compró un producto en el *marketplace* Coinshop y el *fulfillment* (conjunto de operaciones y actividades desde la recepción del pedido hasta el momento de la entrega del producto al cliente final) tenía que ser realizado por el *seller* «Partner01», cuyo precio del producto es BRL 0,02 y el valor del flete BRL 5,00. Hay un 10% de comisión sobre los productos para Coinshop.

El valor de pago autorizado en la tarjeta del consumidor es BRL 5,02.

Sin embargo, fue necesario cambiar de *seller* y, después del cambio, el pedido se asignó a un nuevo *seller*, «Partner02», que tiene el precio BRL 0,30. 

En la pantalla del *seller* Partner02, podemos observar una reducción de BRL 0,28 en el precio del producto, que se identifica como «Descuento de Coinshop» (a pesar de que el precio para el *seller* Partner02 es BRL 0,30, el valor que se le paga es BRL 0,02). 

> ℹ️ Cabe destacar que, en este caso, cambiar de seller fue posible porque la diferencia era menor a BRL 0,30; sin embargo, si fuera BRL 0,31 o más, no se podría cambiar de seller.

Después de facturar el pedido, se liquidó el valor BRL 5,02 y se aprobó la división del pago.

El __cálculo de la división__ de estas cuentas por cobrar es el siguiente: 

| Receptores del pago     | Cálculo     | Cuentas por cobrar     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop      | Comisión sobre valor de producto = 10% (de BRL 0,02)       | 0,002 (solo ilustrativo)      |
| Partner 02      | Valor total del pedido - comisión = BRL 5,02-0,002       | 5,018 (solo ilustrativo)     |

Por tanto, aunque el precio del producto para el *seller* Parceiro02 es BRL 0,30, que sumado al flete debería dar un total de BRL 5,30, el valor dividido únicamente es BRL 5,02.

### Nuevo seller con un precio más bajo

Se compró un producto en el *marketplace* Coinshop y el *fulfillment* (conjunto de operaciones y actividades desde la recepción del pedido hasta el momento de la entrega del producto al cliente final) tenía que ser realizado por el seller «Tupinicoin», cuyo precio del producto es BRL 0,60 y el flete gratis. Hay un 10% de comisión sobre los productos para Coinshop.

Sin embargo, fue necesario cambiar de *seller* y, después del cambio, el pedido se asignó a un nuevo *seller*, «Japacoin», que tiene el precio BRL 0,04. 

En la pantalla del nuevo *seller* se puede observar un aumento de BRL 0,56 en el precio del producto, que se identifica como «Aumento de Coinshop» (a pesar de que el precio para el *seller* Japacoin es BRL 0,04, el valor que se le paga es BRL 0,60).

Con relación a la repartición de esas cuentas por cobrar con el seller, la división se realizaría de la siguiente manera:

| Receptores del pago     | Cálculo     | Cuentas por cobrar     |
| ---------- | ---------- | ---------- |
| Marketplace Coinshop      | Comisión sobre valor de producto = 10% (de BRL 0,60)       | 0,06 (solo ilustrativo)      |
| Japacoin    | Valor total del pedido - comisión = BRL 0,60-0,06       | 0,64 (solo ilustrativo)     |

> ℹ️ Es importante recordar que, si el precio que tiene el nuevo seller es más bajo que el precio del seller original, no habrá un bloqueo de seguridad de BRL 0,30.

Por tanto, aunque el precio para el seller Japacoin es BRL 0,04, el valor dividido es BRL 0,60. 

### ¿Cómo puedo tener visibilidad de las diferencias en los valores?

Durante el proceso de cambiar seller, el marketplace puede utilizar la [API](/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete) para simulación de carrito. 

Con la información de los sellers en manos, usted puede simular carritos para verificar la disponibilidad de los productos. Para más información, vea el siguiente tutorial en nuestro Centro de Ayuda: [Cómo utilizar Change Seller](/es/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete).

En la etapa de simulación, usted puede verificar el precio de los productos y del flete en el nuevo seller para decidir si quiere optar por el cambio de seller. 

Una vez que se efectúe el cambio de seller, podrá identificar las diferencias entre valores únicamente __en la pantalla de pedidos del nuevo *seller*__ al que se asignó el pedido, como se muestra en la imagen de la anterior cuestión abordada. 

