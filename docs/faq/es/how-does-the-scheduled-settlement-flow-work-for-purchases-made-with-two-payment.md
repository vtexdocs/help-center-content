---
title: ¿Cómo funciona el flujo de liquidación programada para las compras realizadas con dos formas de pago?
id: 32vvCkFrmbUydhI5ncFCja
status: PUBLISHED
createdAt: 2021-06-15T15:14:09.235Z
updatedAt: 2022-07-19T12:56:42.732Z
publishedAt: 2022-07-19T12:56:42.732Z
firstPublishedAt: 2021-06-15T15:20:41.908Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slug: como-funciona-el-flujo-de-liquidacion-programada-para-las-compras-realizadas-con
legacySlug: como-funciona-el-flujo-de-captura-programada-para-las-compras-realizadas-con
---

En las situaciones en las que el cliente realiza una compra utilizando dos formas de pago (tarjeta de crédito + tarjeta de regalo, por ejemplo), la liquidación de este valor se producirá de acuerdo con el plazo programado en cada una de las [afiliaciones de gateway](https://help.vtex.com/es/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete), así como con las [condiciones de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento) configuradas en su tienda.

Vea el siguiente ejemplo: 

- __Tarjeta de crédito:__ liquidación programada 4 días después de la aprobación del pago.
- __Tarjeta de regalo:__ liquidación automática (se produce automáticamente después de la aprobación del pago).

Si una compra se realiza con estas dos formas de pago, la liquidación ocurrirá exactamente de acuerdo con la configuración realizada, es decir, no se producirán conflictos entre ambas.

Esto significa que, si una compra fue realizada el __15/04__, la liquidación de la tarjeta de crédito ocurrirá el __19/04__ (4 días después de la aprobación del pago).

Y por su parte, la liquidación de la tarjeta de regalo se realizará automáticamente, tan pronto como se apruebe el pago.

