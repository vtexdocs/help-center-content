---
title: 'Pix (Brasil): preguntas frecuentes'
createdAt: 2020-11-18T20:17:08.672Z
updatedAt: 2026-10-21T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: pix-faq
locale: es
hidden: false
---

Pix es el medio de pago instantáneo del [Banco Central de Brasil](https://www.bcb.gov.br/) (Bacen). Las tiendas VTEX pueden configurar Pix como medio de pago y ofrecerlo a los clientes en el checkout.

Este artículo responde a las principales dudas sobre la elección del partner que procesa los pagos de tu tienda de ecommerce, la integración de ese partner con VTEX vía [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol), la configuración de Pix en el Admin VTEX y la experiencia de pago de tus clientes.

## Partners e integración

### ¿Necesito un partner de pagos para aceptar Pix?

Sí. Para que los pagos vía Pix se procesen necesitas tener un partner de pagos, que puede ser un banco, un adquirente o un gateway.

### ¿Cuáles son los proveedores de pago disponibles?

Los proveedores que procesan pagos vía Pix en VTEX se muestran en la opción **Procesar con el proveedor** durante la [configuración de Pix](/es/docs/tutorials/configurar-pix-como-medio-de-pago). Si tu banco, adquirente o gateway no se encuentra en esa lista significa que aún no está integrado con VTEX para ese medio de pago. En ese caso, ponte en contacto con el partner y solicita que realice la integración vía [Payment Provider Protocol](https://developers.vtex.com/docs/guides/payments-integration-payment-provider-protocol) siguiendo la [documentación de integración específica para Pix](https://developers.vtex.com/docs/guides/payments-integration-pix-instant-payments-in-brazil).

### ¿Cómo muestra la plataforma el código QR de mi tienda al cliente? ¿Cómo funciona esta integración?

Al momento de finalizar la compra, el partner de pagos integrado con VTEX envía el código QR al sistema interno de VTEX mediante una llamada a la API, y VTEX muestra ese código QR en el checkout para que el cliente pague el pedido.

### ¿Puedo usar Pix en un marketplace con split de pagos?

No. Pix no es compatible con marketplaces que realizan split de transacción. Para ver los modelos de split disponibles y los medios de pago compatibles con cada uno, consulta [Split de pagos](/es/docs/tutorials/split-de-pagos).

### ¿Los pagos mediante Pix se ven afectados por el Contingency Mode?

No. [Contingency Mode](/es/docs/tutorials/mode-off-faq) no bloquea transacciones vía Pix. Sin embargo, otros problemas pueden interrumpir el procesamiento del pago y, en esos casos, los nuevos intentos suelen ocurrir cada 5 minutos.

## Configuración

### ¿Cómo puedo configurar Pix en mi tienda de ecommerce?

Una vez que tu partner de pagos complete la integración vía Payment Provider Protocol, puedes configurar Pix como medio de pago en el Admin VTEX siguiendo el tutorial [Configurar Pix como medio de pago](/es/docs/tutorials/configurar-pix-como-medio-de-pago).

### ¿Puedo aceptar pagos con Pix usando Mercado Pago?

Sí. Para aceptar Pix con Mercado Pago Pro, necesitas [configurar Mercado Pago Pro como medio de pago](/es/docs/tutorials/como-configurar-mercado-pago-pro-como-medio-de-pago) y registrar una clave Pix en Mercado Pago.

### ¿Hay algún costo adicional por aceptar Pix en mi tienda de ecommerce?

No. VTEX no cobra cargos adicionales por los pagos vía Pix. El costo de procesamiento de este medio de pago debe negociarse con el proveedor de pagos elegido, ya sea un gateway, un adquirente o un banco.

### ¿Puedo ofrecer descuento para pagos vía Pix?

Sí. Al [crear una promoción regular](/es/docs/tutorials/registro-promocion-regular), usa la condición **Medios de pago** y selecciona Pix. La promoción solo se aplica cuando el pedido usa un único medio de pago; por lo tanto, no se aplica a pedidos divididos entre Pix y tarjeta de regalo.

### ¿Puedo aceptar Pix en la tienda física con VTEX Sales App?

Sí, en tiendas en Brasil. Además de configurar la condición de pago vía Pix, debes definir que Pix se muestre en la aplicación. Consulta las instrucciones en [Configurar Pix](/es/docs/tracks/configuracion-de-pix) en VTEX Sales App.

## Experiencia del cliente

### ¿Cómo es la pantalla de pago de Pix que verá mi cliente?

La opción de pagar vía Pix se muestra en la lista del checkout, junto con las demás opciones de pago. Cuando el cliente selecciona Pix, se genera un código QR con la información de la compra, y el cliente tiene hasta el vencimiento del código QR para pagar en la institución financiera de su preferencia.

![Checkout_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_1.png)

![QRCode_Pix](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/meios-e-condições-de-pagamento/pix/pix-faq_2.png)

### ¿Qué sucede con el pedido cuando el código QR vence?

El tiempo de vencimiento del código QR lo informa el proveedor de pagos en cada transacción y puede variar de 15 a 60 minutos. Si el cliente no realiza el pago dentro de ese plazo, el pedido se cancela y debe realizarse una nueva compra. Para cambiar el tiempo de vencimiento en tu tienda ponte en contacto con tu proveedor de pagos.

### ¿Cuándo un pedido pagado con Pix entra en los ingresos aprobados?

A diferencia de los pedidos pagados con tarjeta de crédito, que entran en los ingresos aprobados cuando el adquirente valida el saldo y los datos de la tarjeta, los pedidos pagados con Pix solo entran después de la confirmación del pago. Para más información, consulta [Explicación del valor de ingresos aprobados](/es/docs/tutorials/comprenda-el-valor-de-los-ingresos-aprobados).

### ¿Es posible dividir un pago entre Pix y otro medio de pago?

Actualmente en VTEX solo es posible dividir un pago entre Pix y [tarjeta de regalo](/es/docs/tutorials/gift-card).

### ¿Cómo funciona el reembolso de un pago vía Pix?

El reembolso de pagos vía Pix depende del proveedor de pagos. Si el proveedor procesa reembolsos de Pix automáticamente mediante la integración con VTEX, el reembolso se completa en la propia plataforma. De lo contrario, el proveedor indica a VTEX que el reembolso debe hacerse manualmente, y debes completarlo directamente con el proveedor, fuera de la plataforma. Para saber más sobre reembolsos totales y parciales, consulta [Reembolso de pagos](/es/docs/tutorials/reembolso-de-pagos).

## Referencia de API

### ¿Cómo se identifica el medio de pago Pix en el JSON del endpoint Get order?

En el JSON de respuesta del endpoint [Get order](https://developers.vtex.com/docs/api-reference/orders-api#get-/api/oms/pvt/orders/-orderId-) de Orders API, Pix se identifica en `paymentData.transactions[].payments[]` mediante el campo `paymentSystemName`, con el valor `Pix`, y mediante el campo `group`, con el valor `instantPayment`.
