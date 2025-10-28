---
title: 'Boleto Bancario Registrado - Flujo básico de pago'
id: 1WlPkeueWQiykUwW8mcM4S
status: PUBLISHED
createdAt: 2019-01-24T21:38:41.612Z
updatedAt: 2019-12-31T15:22:32.884Z
publishedAt: 2019-12-31T15:22:32.884Z
firstPublishedAt: 2019-01-24T21:38:41.989Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: registered-ticket-flow
legacySlug: boleto-bancario-registrado-flujo
locale: es
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

El boleto bancario registrado es uno de los __medios de pago__ que se pueden utilizar para el cierre de compras en su tienda. Se compone de campos específicos que aseguran que el pago llegue correctamente a su destino final.

Para emitir estos boletos, su tienda debe entrar en contacto con alguna institución financiera que pueda emitir los boletos registrados.

A continuación, veremos cómo funciona el flujo básico de un pago con boleto registrado. El flujo se divide en dos partes: __Emisión del Boleto__ y __Conciliación Bancaria__.
 
## Emisión del Boleto

![Frame 2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visi%C3%B3n-de-conjunto-de-pagos/boleto-bancario-registrado-flujo_1.png)

1. Su __e-commerce__ le informa al __Gateway__ que un pedido será pagado a través de boleto bancario.
2. El gateway entra en contacto con el __Banco__ para realizar el registro del boleto.
3. El banco emite el boleto y envía su información al gateway.
4. El gateway genera el link del boleto y lo envía a su tienda.
5. Su tienda envía el link del boleto a su cliente para que realize el pago.

En este momento, el boleto aún no ha sido pagado por el cliente.

## Pago del Boleto y Conciliación Bancaria

![Frame 2.1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/visi%C3%B3n-de-conjunto-de-pagos/boleto-bancario-registrado-flujo_2.png)

1. El __Cliente__ paga el boleto directamente al __Banco__.
2. El banco envía al __Gateway__ los archivos de [conciliación bancaria](/es/tutorial/conciliaciones-bancarias) con la información sobre el estado de pago de los boletos.
3. El gateway notifica su __e-Commerce__ sobre los boletos pagados.

En esta etapa, la entrega del pedido ya puede proseguir normalmente.
