---
title: Detalles de reembolso de PayU Rumania
id: 29N1K0IzzGs2a6S2OyyqEi
status: PUBLISHED
createdAt: 2018-08-20T18:40:53.455Z
updatedAt: 2019-12-31T15:23:53.456Z
publishedAt: 2019-12-31T15:23:53.456Z
firstPublishedAt: 2018-08-20T18:55:19.400Z
contentType: tutorial
productTeam: Financial
author: authors_24
slug: detalles-de-reembolso-de-payu-rumania
legacySlug: detalles-de-reembolso-de-payu-rumania
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

<div class = "alerta alerta-alerta">
Este artículo se aplica solo a los pagos en <b> Rumania </b>.
</div>

Las cancelaciones de pago (también llamadas nulas, se pueden colocar solo por el monto total) o los reembolsos (totales o parciales) no se procesan de forma inmediata, sino que se cancelan.

Aquí está la lógica del [sistema PayU](/es/tutorial/configurar-gateway-payu-global):
PayU espera __6 horas__ desde el momento en que se recibió la solicitud nula (lo que significa desbloquear el dinero de la cuenta bancaria del cliente) o desde el momento en que se recibió la solicitud de reembolso (es decir, la devolución total o parcial del dinero después de que se haya efectuado el pago). completado / terminado). Esta es una medida de seguridad (tanto para PayU como para el cliente) para los casos en los que la solicitud se realiza por accidente o si el cliente cambia de opinión y ya no desea una cancelación o reembolso.

Si un pedido se finaliza / finaliza hoy y PayU recibirá una solicitud de reembolso total o parcial hoy, VTEX esperará 24 horas antes de que enviemos la solicitud al banco emisor para evitar posibles problemas operativos.

Desde la experiencia de PayU, ha habido casos en que el banco se confundió con este tipo de solicitudes. Es por eso que se implementó esta medida de seguridad.

Si estamos hablando de un pedido completado ayer o hace varios días, con una solicitud de reembolso presentada hoy, solo esperaremos las 6 horas especificadas anteriormente antes de comunicarnos con el banco emisor.

Todo lo anterior se aplica tanto a solicitudes manuales (colocadas desde PayU cPanel) como a solicitudes de servidor a servidor (VTEX) (anulaciones o reembolsos).

Si alguna vez necesitamos eliminar una solicitud de pago del sistema antes de que caduque el tiempo de espera, el procedimiento es que identifique el pago en el Panel de PayU, haga clic en el número de referencia para abrir la ventana con detalles del pedido, vaya a la pestaña __Refinir Detalles__ y haga clic en el botón __Delete__.

Si el botón Eliminar no está activo y el tiempo de espera no ha caducado, puede enviar rápidamente una solicitud por correo electrónico a `help@payu.ro` para que el personal de PayU pueda eliminar la solicitud de cancelación / reembolso directamente del sistema, pero solo si aún no ha sido enviado al banco emisor.

Si el sistema ya ha enviado la solicitud de reembolso o anulación al banco emisor, ya no podremos eliminarlo / detenerlo de ninguna manera.

![PayU Romania](//images.ctfassets.net/alneenqid6w5/eR53ZeK0Le8UMeQQs2osq/03a5bad4e5f9269dc12159b28fd27dd8/PayU_Romania.png)

Una vez que PayU haya enviado la solicitud de cancelación o reembolso al banco emisor, el estado de la orden se actualizará en el panel de PayU como "REVERSE" (para anulaciones) o "REFUND". Y VTEX va a recibir un webhook de PaymentsOS, por lo que el estado del pedido también puede actualizarse en la plataforma (en Pagos y, por lo tanto, reflejado en el OMS).

La cantidad de tiempo de desbloqueo o devolución del dinero a la cuenta del cliente variará de acuerdo con el sistema y los procedimientos internos de cada banco emisor. Algunos bancos operan dichas solicitudes dentro de 1 a 2 días después de recibirlas de PayU, mientras que otros pueden esperar hasta 2 semanas.
