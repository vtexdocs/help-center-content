---
title: 'Split de pagos'
id: 6k5JidhYRUxileNolY2VLx
status: PUBLISHED
createdAt: 2021-04-06T20:03:53.443Z
updatedAt: 2025-01-17T18:57:31.739Z
publishedAt: 2025-01-17T18:57:31.739Z
firstPublishedAt: 2021-04-07T18:57:19.713Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: split-payment
legacySlug: split-de-pagos
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

> ⚠️ Esta es una solución de pagos para marketplace.

Para garantizar que nuestros clientes de [marketplace](https://help.vtex.com/es/tutorial/que-es-un-marketplace--680lLJTnmEAmekcC0MIea8) automáticamente dividan el pago entre todos los [sellers](https://help.vtex.com/es/tutorial/que-es-un-seller--5FkLvhZ3Few4CWWIuYOK2w), establezcan comisiones basadas en un porcentaje fijo y permanece operando de acuerdo con las regulaciones vigentes, VTEX ofrece el __Split de pagos__.

A continuación se muestran dos ejemplos de escenarios de aplicación de split de pagos en los que un consumidor agrega productos de diferentes vendedores al mismo carrito:

1. Cuando el marketplace es responsable de procesar el pago de la compra, VTEX automáticamente divide este pago para que cada beneficiario reciba su parte directamente en su propia cuenta bancaria, realizando así el [Split de cobros](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx#split-de-cobros).
2. Cuando el carrito involucra sellers que son responsables de procesar su propio método de pago (sin depender del marketplace), VTEX crea diferentes transacciones de pago para el marketplace y los sellers, realizando el [Split de transacción](https://help.vtex.com/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx#split-de-transaccion).

<div class="alerta alerta-advertencia">
La distribución de los importes de las compras siempre se lleva a cabo de acuerdo con acuerdos de porcentaje de comisión predefinidos entre el marketplace y los sellers.
</div>

Consulte a continuación para obtener más detalles sobre cada uno de los modelos de split de pagos:

| Características    | Split de cobros     | Split de transacción     |
| ---------- | ---------- | ---------- |
| __Proveedor de pagos__       | Proveedor de pagos del *marketplace*.       | Proveedor de pagos del seller.       |
| __Cantidad de transacciones__       | Solo una transacción.       | Una transacción por cada seller.       |
| __Cantidad de compras en el estado de cuenta de la tarjeta de crédito del consumidor__       | Solo una.       | Una compra por cada seller. <li>Esta manera de procesamiento puede ocasionar malentendidos y aumentar las disputas y contracargos.</li>       |
| __Negociación de cuotas__  | El marketplace es responsable de negociar todas las cuotas. <li>Al escalar, esto puede ser una ventaja pues se tiene mayor capacidad de negociación.</li>       | Cada parte escoge su proveedor de pagos y negocia sus cuotas.       |
| __Evaluación antifraude__      | Como solo se genera una transacción, el pedido entero lo analiza un solo antifraude.       | Como se generan varias transacciones, cada una ejecuta un análisis diferente. Si se deniega una transacción, todas las demás también se deniegan automáticamente.       |
| __Proveedores de pagos integrados__       | Verifique qué proveedores de pago usan Split de cobros en la [Lista de Proveedores de Pago por País](https://help.vtex.com/es/tutorial/lista-de-proveedores-de-pago-por-pais--2im3BEGXxSAcRuxEaIHPvp) | Todos los proveedores de pago con integración en VTEX.       |
| __Costo__       |Los costos dependen de la cuota negociada. <ul><li>Usualmente cuesta más que las transacciones que no se dividen.</li><li>Los carritos que contengan productos del marketplace solamente también se procesan según la cuota negociada, lo que podría aumentar el costo.</li></ul>       | No hay costos adicionales. Los clientes de VTEX solo serán responsables por las cuotas habituales de los proveedores de pago.       |
| __Experiencia de checkout__       | No hay limitaciones con respecto a los medios de pago y las condiciones de pago. Serán definidos por el marketplace.  <ul><li>El proveedor de pagos debe admitir split para medios de pagos específicos (Pix, por ejemplo). Actualmente, nuestros partners admiten split con una o dos tarjetas de crédito, tarjetas de débito y boleto (Brasil).</li></ul>      | Solo muestra los métodos de pago aceptados por todos los vendedores que completan el pedido. Es decir, los pagos con tarjeta de crédito, efectivo o card promissory (pagaré que acepta el pago a plazos), solo estarán disponibles si todos los vendedores involucrados en el pedido los aceptan. Incompatible con:<ul><li>Boleto (Brasil).</li><li>Pix (Brasil).</li></ul><ul><li>Tarjetas con 3DS2 o cualquier autenticación.</li></ul> |
| __Ideal para__       | <ul><li>Los marketplaces que desean cobrar comisiones automáticas y evitar el riesgo de morosidad.</li><li>Los marketplaces cuyos sellers no tengan un proveedor de pagos.</li></ul><ul><li>Los marketplaces que deseen tener más control del flujo de pago de los sellers.</li><li>  Los marketplaces que deseen procesar las transacciones con Pix (Brasil), boleto (Brasil) y tarjetas de crédito con 3DS2 u otra autenticación.</li></ul>       | <ul><li> Los marketplaces que no deseen ser comerciantes registrados (común para empresas B2B de Europa y Estados Unidos).</li><li> Casos en los que el seller tiene más poder de decisión que el marketplace y solo acepta que el pago se procese a través de su proveedor de pagos.</li></ul><ul><li> Los marketplaces que tienen urgencia de implementar split y no tengan partners que acepten split en su país.</li><li>Los *marketplaces* que no quieran asumir todos los riesgos de contracargos.</li></ul>       |
| __Beneficios__ | <ul><li>Los marketplaces automáticamente definen las comisiones.</li><li>Experiencia optimizada: solo una compra en el estado de cuenta de la tarjeta de crédito.</li></ul><ul><li>El marketplace tiene más control sobre el flujo de pago.</li><li>Compatible con Pix (Brasil), boleto (Brasil) y tarjetas con 3DS2 o cualquier autenticación.</li></ul><ul><li>El marketplace puede definir medios de pago aplicables a cualquier pedido, independientemente de los sellers involucrados.</li></ul>       | <ul><li>Mayor flexibilidad para que cada seller escoja su proveedor antifraude.</li></ul><ul><li>La liquidación de pagos puede ocurrir en diferentes momentos para cada participante.</li><li>El marketplace no es responsable de los contracargos.</li></ul>|

## Split de cobros

Este modelo de split de pagos permite a los clientes de marketplace tener más control y visibilidad sobre los cobros y comisiones. Además, le da más control sobre el flujo de pago, ya que VTEX retiene el pago del seller hasta que se factura el pedido.

Los marketplaces pueden indicar cómo se debe dividir el importe de compra y qué porcentaje está reservado para el propio marketplace al definir comisiones automáticas por costo total de productos, flete o categoría de SKU para cada seller. En este caso, la transacción solo la procesa el proveedor de pagos del marketplace que será responsable de pagarle a cada seller.

Por ejemplo, un comprador agrega dos productos al mismo carrito de compras. El marketplace entregará uno de ellos mientras que el otro pertenece a un seller llamado Seller A. Sin embargo, solo se genera una transacción, lo que significa que el consumidor solo verá una línea en el estado de cuenta de la tarjeta de crédito. 

El pago se distribuye de la siguiente manera.

![Split de cobros](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/payment-settings/split-de-pagos_1.png)

Como puede ver, nuestro gateway calcula y distribuye los cobros de cada parte cuando se factura el pedido y se envía la información al proveedor de pagos. La distribución se realiza según la cantidad destinada a cada comerciante en el pedido y la comisión del marketplace.

![Afiliaciones](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/payment-settings/split-de-pagos_2.png)

Nuestra solución de split de cobros tiene algunas limitaciones que se deben tener en cuenta:

- __Medios de pago combinados:__ no es compatible cuando uno de los dos no admite split. Ejemplo: tarjeta de regalo + tarjeta de crédito (la tarjeta de regalo no es compatible con split).  Actualmente, solo se puede utilizar el split de pagos cuando los medios combinados son dos tarjetas de crédito debido a una limitación de checkout.
- __Cambios al pedido:__ no funciona cuando se cambian los valores o los ítems después de que se completa el pedido. Los pedidos que contengan split se pueden reembolsar parcialmente, pero no cancelar.
- __Suscripciones VTEX:__ no admite pedidos de marketplace.
- __ID de seller:__ el nro. de registro de persona jurídica es la clave principal para realizar el split, por lo que las dos partes (marketplaces y sellers) deben ser entidades jurídicas.
- __Mismo nro. de registro de persona jurídica:__ ya que el nro. de registro de persona jurídica es la clave principal para realizar el split, no es posible reconocer a dos o más beneficiarios/participantes de la venta que tengan el mismo número de registro como «entidades» distintas. 
- __Combinar modelos de split:__ cuando el modelo de split de transacción se combina con el otro modelo, el split de transacción tomará prioridad. Es decir, para los sellers que decidan utilizar su medio de pago, su porción de la transacción se procesará en su propio gateway mientras que los valores de los demás participantes de la venta los procesará el marketplace.
- __Partes involucradas:__ no se permite dividir el pago con beneficiarios que no vendan alguno de los productos que estén en el carrito. Por ejemplo: dividir el flete directamente con la transportadora.
- __Cuotas nominales:__ no permite cuotas nominales. Actualmente, solo es posible aplicar comisiones porcentuales en productos y/o fletes.
- __Asignar transacciones al proveedor:__ actualmente, solo es posible asignar una afiliación preferida en el gateway para procesar el split utilizando condiciones comerciales para los SKU que el seller vende. Sin embargo, hay algunas limitaciones:
    - Si el seller y el marketplace tienen el mismo SKU, el carrito siempre se procesará con el método de split de pagos.
    - La lista de SKU debe actualizarse constantemente.

- __Interés de la transacción:__ no es posible seleccionar quién recibirá la información de intereses (marketplace o seller). Todas las transacciones en las que el cliente realizó pagos de intereses se envían automáticamente al marketplace.

## Split de transacción

En el __split de transacción__, el marketplace no centraliza los cobros. Justo después de que el comprador completa la compra, nuestro sistema de checkout crea la transacción o transacciones (una por seller). 

El pago no siempre lo procesa el proveedor de pagos del marketplace, sino que lo procesan los proveedores de cada comerciante (el proveedor de pagos de cada *seller* es responsable de procesar su porción de la transacción).

Lo que significa que el marketplace tiene menos control sobre el flujo de pago. A diferencia del otro modelo, VTEX no mantiene el pago hasta que se factura el pedido, cada porción se envía automáticamente al participante respectivo justo después del checkout.

Por ejemplo, un comprador agrega dos productos al mismo carrito de compras. El marketplace entregará uno de ellos y el otro le pertenece al seller llamado Seller A.

![Transacción](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/payment-settings/split-de-pagos_3.png)

En el __split de transacción__, el marketplace no tiene que realizar ninguna configuración. El seller es el que tiene que configurar su medio de pago en la afiliación con un determinado marketplace. Obtenga más información en [Enviar los medios de pago del Seller White Label al Marketplace](https://help.vtex.com/es/tutorial/enviar-los-medios-de-pago-del-seller-white-label-al-marketplace--bfvtPzZyikacSqgkgeGW).

![Afiliación1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Payments/payment-settings/split-de-pagos_4.png)

El split de transacción tiene algunas limitaciones que deben tomarse en cuenta.

- __Establecer comisiones:__ en este modelo, los marketplaces no pueden recibir comisiones automáticamente porque la transacción no la procesa su proveedor de pagos. Los marketplaces tienen que manualmente cobrar sus comisiones a los sellers, lo que podría aumentar el riesgo de incumplimiento para el marketplace.
- __Medios de pago:__ no es compatible con boleto (Brasil), Pix (Brasil), Payment Apps y tarjetas de crédito con 3DS2 o cualquier medio de pago que tenga autenticación.
- __Filtrar los medios de pago:__ filtra los medios de pago, es decir, solo muestra pagos con tarjeta de crédito, efectivo y pagaré si todos los comerciantes los aceptan.
- __Mitigación de fraude:__ cada comerciante tiene que analizar el riesgo de fraude independientemente. Si uno de los proveedores de protección de fraude de los comerciantes deniega una transacción, todas las demás transacciones también serán rechazadas.
- __Sellers externos a VTEX:__ si el seller es externo a VTEX, tiene que utilizar una cuenta de gateway, un tipo de cuenta que le permite al seller configurar medios de pago. 
- __Suscripciones VTEX:__ No permite pedidos del marketplace.
- __Partes involucradas:__ no se permite dividir el pago con beneficiarios que no vendan alguno de los productos que estén en el carrito. Por ejemplo: dividir el flete directamente con la transportadora.

## Combinar modelos de split

Cuando el modelo de split de transacción se combina con el modelo de split de cobros, el split de transacción tomará prioridad. Es decir, para los sellers que decidan utilizar su medio de pago, su porción de la transacción se procesará en su propio gateway mientras que los valores de los demás participantes de la venta los procesará el marketplace.
