---
title: 'Cómo funciona la transferencia de crédito entre empresas'
createdAt: '2026-11-24T00:00:00.000Z'
updatedAt: '2026-11-24T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: how-credit-transfer-between-companies-works
locale: es
subcategoryId: credit-wallet
seeAlso:
  - "/es/docs/tutorials/transferir-credito-entre-empresas-del-mismo-grupo-economico"
  - "/es/docs/tutorials/cartera-de-credito"
  - "/es/docs/tutorials/consultar-cartera-de-credito"
---

La transferencia de crédito permite que una empresa envíe parte del saldo de su [cartera de crédito](/es/docs/tutorials/cartera-de-credito) a otra empresa del mismo grupo económico. Así, el grupo aprovecha mejor el crédito disponible.

Cada empresa genera y usa su propio crédito de la cartera, que descuenta el cobro de [Master Data](/es/docs/tutorials/master-data-es) de esa misma empresa. En muchos grupos económicos, algunas empresas generan crédito excedente y otras consumen más Master Data que el crédito disponible. La transferencia resuelve este desequilibrio.

En este artículo, conoce cuándo es posible la transferencia, qué reglas se aplican, cómo afecta la factura y cómo aparece en el estado de cuenta de créditos. Para hacer una transferencia, consulta [Transferir crédito entre empresas del mismo grupo económico](/es/docs/tutorials/transferir-credito-entre-empresas-del-mismo-grupo-economico).

## Reglas de la transferencia

El crédito de la cartera pertenece a la empresa, y no a la cuenta. Por eso, la transferencia siempre ocurre entre empresas. Para entender cómo se relacionan cuenta, empresa y grupo económico, consulta [Estructura de facturación](/es/docs/tutorials/cartera-de-credito#estructura-de-facturación).

Eliges el valor y no necesitas aprobación. Sin embargo, solo puedes transferir entre empresas del mismo grupo económico y no puedes revertir la transferencia. La siguiente tabla presenta las reglas que se aplican a toda transferencia de crédito:

| Aspecto | Cómo funciona |
| --- | --- |
| Empresas permitidas | Solo entre empresas del mismo grupo económico. No puedes transferir entre grupos diferentes. |
| Grupo con una sola empresa | No existe empresa de destino, por lo que no puedes transferir crédito. |
| Origen y destino | La **empresa de origen** envía el crédito y pierde ese valor de su saldo. Es la empresa a la que pertenece la cuenta que estás usando en el Admin VTEX. La **empresa de destino** es la que recibe el crédito. |
| Destino de la transferencia | Siempre una empresa, nunca una cuenta. El nombre de una cuenta sirve solo para encontrar la empresa a la que pertenece. |
| Quién inicia | Solo la empresa de origen. La empresa de destino no puede retirar crédito de otra empresa. |
| Visibilidad del saldo | La empresa de origen no ve el saldo de la empresa de destino, y viceversa. |
| Valor | Eliges cuánto transferir. Puede ser cualquier valor mayor que cero, hasta el saldo disponible de la empresa de origen. |
| Aprobación | No hay flujo de aprobación. La transferencia se completa cuando la confirmas. |
| Reversión | No hay reversión. Para recuperar el saldo, la empresa de destino debe hacer una nueva transferencia. |
| Transferencias encadenadas | Permitidas. Por ejemplo, la empresa A transfiere a la B, y la B transfiere a la C. |
| Vencimiento del crédito recibido | Sigue la política de vencimiento de la empresa de destino. Cada empresa configura su propia política, y no cada crédito. |
| Efecto sobre el crédito del grupo | La transferencia no crea un conjunto de crédito compartido del grupo económico. Tampoco cambia cómo se genera el crédito ni cómo VTEX lo aplica al cobro de Master Data. Para saber cómo el sistema calcula y usa el crédito, consulta [Cartera de crédito](/es/docs/tutorials/cartera-de-credito). |

## Plazo para descontar la factura

El crédito aparece en la página **Créditos** a medida que los clientes de la empresa pagan a lo largo del mes. Puedes transferirlo en cuanto aparece.

VTEX genera la factura el primer día del mes siguiente, y el crédito que la empresa tiene en ese momento descuenta el cobro de Master Data. Por eso:

- Una transferencia solo descuenta la factura si el crédito llega a la empresa de destino antes de que VTEX genere la factura.
- Una transferencia posterior no modifica la factura que VTEX ya generó. Se aplica a partir de la factura siguiente.

> ℹ️ Cuando los clientes realizan pagos en los últimos días del mes, es posible que no tengas tiempo suficiente para transferir el crédito antes de que VTEX genere la factura.

## Cómo aparece la transferencia en el estado de cuenta de créditos

Cada transferencia genera dos movimientos en el **Estado de cuenta de créditos**, uno en cada empresa:

- **Empresa de origen:** muestra la transferencia enviada a la empresa de destino, con valor, fecha y quién la realizó.
- **Empresa de destino:** muestra la transferencia recibida de la empresa de origen, con valor, fecha y quién la realizó. Cuando una integración hace la transferencia, el estado de cuenta de créditos muestra la clave de API (`appKey`) en lugar del email.

Cada empresa ve solo su propio movimiento. Para saber cómo consultar el estado de cuenta de créditos, consulta [Consultar cartera de crédito](/es/docs/tutorials/consultar-cartera-de-credito).
