---
title: 'Cómo funcionan las conciliaciones bancarias'
id: tutorials_453
status: PUBLISHED
createdAt: 2017-04-27T22:04:15.815Z
updatedAt: 2023-03-22T20:35:18.519Z
publishedAt: 2023-03-22T20:35:18.519Z
firstPublishedAt: 2017-04-27T23:03:27.431Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: conciliaciones-bancarias
locale: es
legacySlug: conciliaciones-bancarias
subcategoryId: 2tEO9ytK1aMO0i2oMayoQq
---

Es el lugar por el cual el tendero aprueba en lote los pagos de los pedidos acordados con boleto. Eso es posible a través del upload de un archivo tipo .RET en los formatos CNAB 240 y CNAB 400, que es provisto diariamente por el banco, conteniendo las informaciones referentes a la identificación del boleto, nuestro número (que es el código del pedido), fecha y valor del pago.

El flujo completo es: compra acordada con boleto en el sitio web &gt; pedido entra como Pago Pendiente &gt; boleto de pago &gt; banco envía el archivo para la tienda &gt; tendero realiza la conciliación &gt; pedido sigue el flujo para entrega.

Conforme explicado en el FAQ [¿Cuánto tiempo lleva para la cancelación de un pedido de boleto sin pago?](/hc/es-419/articles/215033318 "¿Cuánto tiempo lleva para la cancelación de un pedido de boleto sin pago?"), existe un plazo para la cancelación del pedido, caso este no sea notificado como pagado en el status de Pago Aprobado (ya sea manualmente en el OMS el por conciliación). En ese caso, el pedido permanecerá en el status de Pago Pendiente hasta que sea cancelado.

>⚠️ Los procedimientos de este artículo no se aplican a las integraciones que realizan la conciliación bancaria de forma automática.

## Cómo hacer el upload

Después de recibir el archivo del banco y guardarlo en su máquina, conforme citado más arriba, siga el paso a paso abajo para hacer la conciliación bancaria:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Conciliación bancaria** > **Conciliaciones bancarias**, o escribe **Conciliación bancaria** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Carga el archivo .RET proporcionado por el banco**.
3. Seleccione el archivo _.RET_ que guardó en su máquina.
4. Haga clic en **Abrir**.

Luego que seleccione el archivo, la plataforma empezará a procesarlo y registrará en histórico cuántos pagos se conciliaron con éxito o error. Los pagos que se concilien con éxito actualizarán los status de los pedidos para Pago Aprobado.

![upload-archivo-ret](//images.ctfassets.net/alneenqid6w5/3KDKXLTwzYy1W9PNKGfIyT/b7ee6df418b9638eaab055282675b9f6/uploadret_ES.JPG)

## Visualizar el histórico

El histórico es el registro de las conciliaciones bancarias que el tendero realizó. Él demuestra cuántos pagos giraron con éxito o error en cada conciliación, de forma resumida en la pantalla principal y detallada cuando entra en cada línea del histórico.

De entre los detalles es posible saber el banco al cual el boleto pertenece, el total de pagos implicados y exactamente cuáles cobros y sus respectivos valores tuvieron o no éxito en la conciliación. 

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Conciliación bancaria** > **Conciliaciones bancarias**, o escribe **Conciliación bancaria** en la barra de búsqueda en la parte superior de la página.
2. En **Historial**, haga clic en una de las fechas de las operaciones de conciliación bancaria realizadas.
3. En **Más detalles**, haga clic en **Conciliado Satisfactoriamente** o **No conciliados** para verificar los detalles de las transacciones realizadas en un banco en particular. 

![historico-conciliacion](//images.ctfassets.net/alneenqid6w5/7K6sF9KZlBA00tbSp4q0pC/3f2bc9203d264a3b45523211ea06ccb2/historico_conciliacao_ES.jpg)

## Payclub

Aquí es posible hacer el download de los pagos del día que se han hecho a través de la redirección, como PayPal, por ejemplo.

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Pago** > **Conciliación bancaria**, o escribe **Conciliación bancaria** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Payclub**.
3. Seleccione la fecha que desee del calendario.
4. Haga clic en **Descargar archivo**.

![descarga-archivo-conciliación](//images.ctfassets.net/alneenqid6w5/78K7wW5QAaA0tVCJTBwpDH/6c23d0bf478fdbf20d1176271a29840e/Download_Concilia____o_ES.JPG)
