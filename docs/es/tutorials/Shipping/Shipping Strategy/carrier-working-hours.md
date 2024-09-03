---
title: 'Horario de atención de las transportadoras'
id: 2oGpbInIgdxSWUi3TZjdCS
status: PUBLISHED
createdAt: 2019-02-06T16:21:24.412Z
updatedAt: 2024-04-11T00:33:50.619Z
publishedAt: 2024-04-11T00:33:50.619Z
firstPublishedAt: 2019-02-06T18:25:37.545Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: horario-de-atencion-de-las-transportadoras
locale: es
legacySlug: configurar-horario-de-funcionamiento-para-transportistas, configurar-los-horarios-de-la-transportadora
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

En VTEX, es posible determinar los horarios de atención de las [transportadoras](https://help.vtex.com/es/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE) de tu tienda a través de configuraciones de la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), en la que defines los períodos laborales para que la transportadora recolecte y envíe los pedidos.

Para configurar el horario laboral, an el Admin VTEX acceda a **Envío > Estrategia de envío** y cree una [nueva política de envío](https://help.vtex.com/es/tutorial/criar-uma-politica-de-envio--66rJO4LKBdyMJOH6Z3dsaT) o [edite](https://help.vtex.com/es/tutorial/gerenciar-politicas-de-envio--30nynylgbWieimhaMtGTIE) una existente.

La configuración del horario laboral influye en el cálculo del tiempo de entrega y se encuentra en la parte inferior de la página de detalles de la política de envío seleccionada, cuenta con las siguientes opciones:

* **[Ventana de envío](#ventana-de-envio)**: periodos en que la transportadora envía ítems a los clientes.
* **[Hora de recogida](#hora-de-recogida)**: horarios en que la transportadora realiza la recolección de ítems para entrega.

## Ventana de envío

1. En la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), en la seción **Horario laboral**, haga clic en `Ventana de envío`.
2. Si quieres activar la opción `Aceptar compras fuera del horario laboral`, activa el interruptor. De lo contrario, déjelo desactivado.

  >❗ Para autorizar la transportadora a recibir pedidos los fines de semana, este interruptor debe estar marcado como `Activo`. Incluso si los sábados y domingos están configurados como ventanas válidas, activar el interruptor es obligatorio para autorizar al transportista a recibir pedidos fuera del horario laboral.

  >ℹ️ Cuando esta opción está habilitada, el [cálculo del envío](https://help.vtex.com/es/tutorial/how-shipping-calculation-works--tutorials_116) del pedido se ve influenciado y al tiempo total de envío se suma el tiempo desde que se realiza el pedido hasta la hora de apertura del transportista.

3. Seleccione el `Día de la semana`, así como la `Hora de inicio` y `Hora de fin` del periodo de envío, considerando que:
    * **Día de la semana:** los días de la semana en que la transportadora realiza entregas.
    * **Hora de inicio:** la hora en que comienza el periodo de envío.
    * **Hora de fin:** la hora en que finaliza el periodo de envío.
4. Para añadir un nuevo periodo, haga clic en `Agregar ventana de envío`.
5. Haga clic en `Guardar cambios`.

## Hora de recogida

1. En la [política de envío](https://help.vtex.com/es/tutorial/politica-de-envio--tutorials_140), en la seción **Horario laboral**, haga clic en la ventana `Hora de recogida`.
2. Seleccione el `Día de la semana`.
3. Seleccione la `Hora de recogida`. 
4. Para añadir un nuevo horario, haga clic en `Agregar hora de recogida`.
5. Haga clic en el botón `Guardar cambios`.
