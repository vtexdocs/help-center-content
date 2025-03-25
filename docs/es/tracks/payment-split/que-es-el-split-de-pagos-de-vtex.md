---
title: '¿Qué es el Split de pagos de VTEX?'
id: ctgx6ulwy40P0BV07LW9y
status: ARCHIVED
createdAt: 2020-11-05T17:15:47.387Z
updatedAt: 2021-06-28T19:53:35.022Z
publishedAt: 
firstPublishedAt: 2020-11-06T19:14:25.813Z
contentType: trackArticle
productTeam: Financial
slugEN: what-is-the-payment-split
locale: es
trackId: 1ouDg8q56Kuz1AgtJUY9nv
trackSlugES: split-de-pagos
---

El split de pagos es una solución de VTEX orientada a la dinámica entre el [*marketplace*](https://help.vtex.com/es/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8 "marketplace") y [*seller*](https://help.vtex.com/pt/tutorial/o-que-e-um-seller "seller"). Es decir, a la división de pagos cuando una tienda opta por vender los productos de su catálogo en otra tienda. 

Un ejemplo es Carrefour, un *marketplace* que vende sus propios productos, así como los de otras marcas, *sellers*.

Luego de ser configurado, el split de pagos permite que el valor cobrado por una venta se divida automáticamente entre los __receptores del pago__: el *marketplace* y el (los) *seller*(s).

Sin embargo, ese monto no necesariamente se divide en partes iguales entre los receptores del pago. La división y repartición se realizará de acuerdo con las condiciones predefinidas por el *seller* y la comisión del *marketplace*.

En este documento, explicaremos cómo funciona esta solución, incluyendo algunos conceptos importantes para esa dinámica, y cómo configurarla. 

>ℹ️ Si usted ya conoce esta solución, vaya a la etapa Configurar *split* de pagos.

## Cuentas por cobrar 
Antes de continuar, es importante explicar qué es una cuenta por cobrar, un concepto que no solo es abordado en VTEX, sino también en diversos escenarios del mercado de pagos. 

Así pues, una cuenta por cobrar es el monto referente a una [transacción](https://help.vtex.com/es/tutorial/o-que-e-uma-transacao--36vMP5PES4oUWMWQuskIQ6 "transacción") realizada con éxito. Esto significa que equivale al dinero que se transferirá al administrador de la tienda. 

En el contexto del split de pagos de VTEX, ese monto se transferirá al administrador de la tienda de acuerdo con el medio de pago utilizado en la compra del pedido y al plan de pago  que acordó con el [adquirente](https://help.vtex.com/es/tutorial/o-que-e-um-adquirente--7N1oRTG8dGmOiIugC0cs4E "adquirente").

Actualmente, el split soporta los siguientes medios de pago:

- Tarjeta de crédito
- Tarjeta de débito
- Boleto bancario (exclusivo de Brasil)

>ℹ️ En el caso de la tarjeta de crédito, el *split* soporta pagos realizados con dos tarjetas.

## Transacción
Cuando un consumidor finaliza una compra y realiza el pago, ese valor no necesariamente se capturará y enviará al administrador de la tienda el mismo día.

>ℹ️ En el caso de Brasil, existen excepciones como Pix —Sistema de Pagos Instantáneos del Banco Central— en el que la transacción se realiza en segundos. 
>
> Sin embargo, la mayoría de los medios de pago que actualmente están disponibles en el mercado no realizan la acreditación automática del pago al administrador de la tienda.  

En VTEX, el comportamiento estándar es que los datos de la compra se reúnan en una transacción. Esta, por su parte, pasará por varias etapas de validación para garantizar que todos los datos sean legítimos. Ese proceso de verificación se denomina [flujo de la transacción](https://help.vtex.com/es/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y "flujo de la transación"). 

Después de que se finaliza ese proceso —cuando toda la información fue validada y el pago es aprobado y capturado— se obtiene la cuenta por cobrar.

Sin embargo, cada medio de pago tiene sus peculiaridades. Por consiguiente, el flujo de la transacción se ajusta a esas características.

Por ejemplo, en Brasil, cuando un pedido se paga con un boleto bancario, el flujo de la transacción se detiene en el status Pago pendiente hasta que el consumidor pague el boleto y el adquirente apruebe el pago. Esto puede durar algunos días. 

De igual manera, cuando el split de pagos está habilitado, el flujo de la transacción también tiene sus propias características. Explicaremos ese proceso a continuación.
