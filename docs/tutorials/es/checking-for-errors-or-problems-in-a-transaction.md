---
title: 'Comprobar errores o problemas en una transacción'
id: 3QecZEdmzumGKe8WGmeI8a
status: PUBLISHED
createdAt: 2019-01-24T21:38:42.709Z
updatedAt: 2023-03-29T01:18:23.081Z
publishedAt: 2023-03-29T01:18:23.081Z
firstPublishedAt: 2019-01-24T21:38:43.264Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: comprobar-errores-o-problemas-en-una-transaccion
locale: es
legacySlug: comprobar-errores-o-problemas-en-una-transaccion
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Para poder resolver un posible problema que involucra transacciones en Pagos, el primer paso es __verificar el log de esta transacción__. Los logs son los registros de las interacciones entre el módulo de Pagos de VTEX y los sistemas de nuestros socios (otros gateways, adquirentes, antifraudes etc). [Haga clic aquí](/es/tutorial/como-visualizar-detalle-del-pedido/) para saber cómo buscar una transacción en Pagos. A continuación, veremos cómo analizar los detalles de la transacción para verificar si algún error está ocurriendo.

Los logs de una transacción se registran en una línea de tiempo, con las interacciones más recientes mostradas en la parte superior de la pantalla y las interacciones más antiguas en la parte inferior.

El gateway de VTEX puede comunicarse con adquirentes, subadquirentes, antifraudes y otros gateways. Los __cambios de status en la transacción__ y los __mensajes de respuesta de los socios__ se muestran en cuadros en la pantalla de detalles de transacción.

<div class="alert alert-info">
<a href="https://help.vtex.com/es/faq/tarjeta-de-credito-flujo-basico-de-un-pago">Haga clic aquí</a> para saber cómo funciona el flujo básico de una transacción de tarjeta de crédito. Usted puede también acceder a <a href="https://help.vtex.com/es/faq/boleto-bancario-registrado-flujo">nuestro artículo</a> con el esquema básico de una transacción con boleto bancario.
</div>

## Comprobar el status de la transacción

Para comprobar el __status actual__ de una transacción, basta con buscar en la línea de tiempo por la *caja en la parte superior de la pantalla con un círculo verde del lado izquierdo*. [En este artículo](https://help.vtex.com/es/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ?locale=es "En este artículo"), hay la explicación de cada uno de los status de una transacción exitosa. Si la transacción tiene algún problema, su status final será __Cancelled__.

## Comprobar los mensajes de respuesta de los socios

Básicamente, una transacción *cambia su status* después de que VTEX reciba una notificación del sistema asociado. Para comprobar qué respuestas son enviadas por el socio, basta con buscar las cajas que tienen *el nombre del socio (Cielo V3, eRedev3, GetNet, Sitef, ClearSale y etc)*. Son estas respuestas que nos informan lo que realmente está ocurriendo con la transacción.

Muchas veces las cancelaciones ocurren porque el banco emisor no autorizó la transacción o porque el antifraude bloqueó el pago.

En otras ocasiones, puede producirse un fallo de comunicación entre VTEX y el socio. Existen recursos de seguridad activos, como reintentos automáticos, pero también pueden existir errores humanos. Por ejemplo, el socio puede realizar una actualización en su plataforma y no actualizar la integración con VTEX. Casos como éste generan logs o mantiene el pedido en un loop.

Estas situaciones generalmente se indican con un `.` en la respuesta del socio. En estos casos, VTEX se queda a la espera de la respuesta del socio para que la transacción pueda hacer el cambio al siguiente status. En escenarios de este tipo, recomendamos ponerse en contacto con el socio para resolver el problema de comunicación.

## Entrar en contacto con el socio

Si usted encuentra en los logs de Pagos un error en la respuesta de algún socio, nuestra recomendación es entrar en contacto con él para que el problema sea solucionado. [Busque el TID](/es/faq/como-encontrar-nsu-y-tid-del-pedido) de la transacción. Este es el número que se debe utilizar para identificar la transacción en el sistema del socio.
