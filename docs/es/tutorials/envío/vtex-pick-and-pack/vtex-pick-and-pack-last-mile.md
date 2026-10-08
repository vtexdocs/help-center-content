---
title: 'VTEX Pick and Pack: Last Mile'
createdAt: 2023-04-10T16:01:14.613Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-last-mile
locale: es
hidden: false
---

> ℹ️ Si te interesa adoptar esta funcionalidad en tu negocio, completa nuestro [formulario](https://vtex.com/es-mx/contacto/) indicando en el campo `Comentarios` el nombre del producto deseado.

**Last Mile** es la página del Admin VTEX que sigue la etapa final del fulfillment de los pedidos procesados por [VTEX Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack): el envío al cliente por las transportadoras integradas y la recogida de pedidos en la tienda.

Cada movimiento se representa mediante un **servicio**, que es el registro que reúne el origen, el destino, los paquetes y el historial de status de uno o más pedidos. La página está organizada en dos pestañas, una para cada tipo de servicio:

- [Envíos](#envios)
- [Recogida en tienda](#recogida-en-tienda)

En estas pestañas puedes realizar las siguientes acciones:

- [Crear servicio](#crear-servicio)
- [Consultar detalles de un servicio](#consultar-detalles-de-un-servicio)
- [Confirmar recogida en tienda](#confirmar-recogida-en-tienda)

El módulo también tiene las siguientes páginas de configuración:

- [Integraciones](#integraciones)
- [Configuración de Last Mile](#configuracion-de-last-mile)

## Envíos

La pestaña **Envíos** muestra los servicios asignados a transportadoras y las actualizaciones de status que devuelven hasta la entrega al cliente.

![vtex-pick-and-pack-last-mile_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_1.png)

La tabla contiene la siguiente información:

| Campo de la tabla | Descripción                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Transportadora    | [Transportadora](/es/docs/tutorials/transportadoras-en-vtex) responsable del envío, con su logotipo y el identificador del servicio en la transportadora. |
| ID del servicio   | Número identificador del servicio en Last Mile.                                                                                                           |
| Tags              | Tags asociadas al servicio.                                                                                                                               |
| Origen - Destino  | Ubicación de origen y destino del envío.                                                                                                                  |
| Fecha de entrega  | Fecha prevista para la entrega del pedido.                                                                                                                |
| Status            | Etapa actual del servicio.                                                                                                                                |

Para buscar un servicio específico usa la barra de búsqueda en la parte superior de la página. También puedes refinar la vista con los siguientes filtros:

- **Fecha de entrega:** rango de fechas previstas para la entrega.
- **Transportadora:** transportadora responsable del envío.
- **Status:** etapa actual del servicio. Puedes seleccionar más de un status.
- **Instalaciones:** tienda o centro de distribución de origen del servicio.
- **Medios de pago:** [medio de pago](/es/docs/tutorials/diferencia-entre-medios-de-pago-y-condiciones-de-pago) utilizado en el pedido.

Para deshacer una selección abre el filtro y haz clic en `Limpiar`.

### Status del servicio

Los status disponibles dependen de la configuración de la integración con la transportadora. La siguiente tabla muestra los status que se pueden aplicar a los servicios de ambas pestañas. Los filtros muestran solo los status enviados por la transportadora. Por ejemplo, puede que una transportadora solo envíe los status **Creado** y **Entregado**.

| Status        | Descripción                                                                                                                                                                                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creado        | Status interno de validación de los datos, asignado en el momento en que se crea el servicio.                                                                                |
| Pendiente     | El sistema envió la información a la transportadora y el servicio se creó en su sistema.                                                                                     |
| Asignado      | La transportadora designó un repartidor para el servicio.                                                                                                                    |
| Recolectado   | La transportadora recolectó los paquetes en la ubicación de origen.                                                                                                          |
| En ruta       | Los paquetes están en tránsito hacia el destino.                                                                                                                             |
| Entregado     | El pedido se entregó al cliente en la dirección indicada, en un [punto de recogida](/es/docs/tutorials/puntos-de-recogida) o en la tienda, en el caso de recogida en tienda. |
| Incidente     | La transportadora reportó un problema durante el recorrido.                                                                                                                  |
| En espera     | La transportadora interrumpió temporalmente el servicio, por ejemplo, por una falla en el vehículo.                                                                          |
| Devuelto      | El pedido regresó a la ubicación de origen, por ejemplo, porque no se localizó al cliente o porque el cliente rechazó el pedido.                                             |
| Transferencia | El servicio corresponde a una transferencia de ítems entre instalaciones de la operación.                                                                                    |
| Cancelado     | El servicio se canceló.                                                                                                                                                      |

> ℹ️ En los servicios de envío, la transportadora actualiza los status mediante [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api). En los servicios de recogida, el status lo actualiza el operador de la tienda en el Admin VTEX.

## Recogida en tienda

La pestaña **Recogida en tienda** muestra los pedidos que el cliente va a buscar a la tienda y es donde se confirma la recogida.

![vtex-pick-and-pack-last-mile_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_2.png)

La tabla contiene la siguiente información:

| Campo de la tabla    | Descripción                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| ID de pedido         | Número de identificación del pedido.                                                      |
| Cliente              | Nombre del cliente que realizó el pedido.                                                 |
| Fecha de recolección | Fecha y hora previstas para que el cliente recoja el pedido.                              |
| Tienda               | Tienda donde se recogerá el pedido.                                                       |
| Status               | Etapa actual del servicio, según la tabla de [status del servicio](#status-del-servicio). |

Para buscar un pedido específico usa la barra de búsqueda en la parte superior de la página. También puedes refinar la vista con los filtros **Fecha de recolección**, **Status** e **Instalaciones**.

## Crear servicio

Los servicios se pueden crear de forma automática o manual:

- **Automáticamente:** configura una regla en la sección **Automatización > Servicios de envío** de la [Configuración](/es/docs/tutorials/vtex-pick-and-pack-configuracion) de Pick and Pack para que el servicio se cree cuando se cumplan las condiciones definidas.
- **Manualmente:** crea el servicio en la página **Last Mile**.

Para crear un servicio manualmente sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Last Mile > Servicios de envío**.

2. Haz clic en `Crear servicio`.

3. En **Selecciona un tipo de servicio**, selecciona el tipo de servicio:
   - **Envío:** una transportadora entregará el pedido en la dirección del cliente o en un [punto de recogida](/es/docs/tutorials/puntos-de-recogida).
   - **Recogida:** el cliente recogerá el pedido en la tienda.

4. Haz clic en `Continuar`.

   ![vtex-pick-and-pack-last-mile_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_3.png)

5. Selecciona los pedidos que formarán parte del servicio. La lista muestra solo los pedidos elegibles para el tipo de servicio seleccionado e incluye la siguiente información:

   - **ID del pedido:** identificador y fecha de creación del pedido.
   - **Ítem(s):** cantidad de ítems y de unidades del pedido.
   - **Envío:** tipo de envío del pedido, `Entrega al cliente` o `Recogida en tienda`.
   - **Status:** etapa del pedido en el flujo de VTEX Pick and Pack.
   - **Instalación:** tienda o centro de distribución responsable del pedido.

   Los pedidos elegidos se muestran en **Pedidos seleccionados**, y el bloque **Resumen** consolida la cantidad de pedidos, de ítems y las instalaciones. Para buscar un pedido usa la barra de búsqueda o los filtros **Status**, **Instalaciones** y la fecha, que se muestra como **Fecha de entrega** en los servicios de envío y **Fecha de recolección** en los servicios de recogida.

   ![vtex-pick-and-pack-last-mile_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_4.png)

6. Haz clic en `Continuar`.

7. Revisa los paquetes de cada pedido y los ítems, la cantidad y las dimensiones de cada uno.

   ![vtex-pick-and-pack-last-mile_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_5.png)

8. Haz clic en `Continuar`.

9. Define la información de origen y destino del servicio. Este paso varía según el tipo de servicio elegido, como se describe en [Servicios de recogida](#servicios-de-recogida) y [Servicios de envío](#servicios-de-envio).

10. Haz clic en `Crear servicio`.

En cualquier etapa puedes hacer clic en `Atrás` para revisar la información ya ingresada. Durante todo el proceso, el resumen lateral acumula los datos ya definidos, como los pedidos seleccionados, los paquetes, las direcciones y la transportadora.

### Servicios de recogida

En los servicios de recogida:

1. En la ventana **Crear servicio de recogida**, selecciona la **Instalación** donde estará disponible el pedido e ingresa la **Fecha de recogida esperada**. La dirección correspondiente se muestra en el resumen lateral, en **Recogida**.
2. Haz clic en `Continuar`.
3. Haz clic en `Crear servicio`.

![vtex-pick-and-pack-last-mile_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_6.png)

> ⚠️ La recogida en tienda no utiliza transportadoras externas ni sistemas de gestión de transporte (TMS), ya que el cliente recoge el pedido directamente en la tienda. Estos servicios utilizan la integración `Manual`, que registra el movimiento sin activar una transportadora. Si la integración `Manual` no está activa, no es posible crear un servicio de recogida.

### Servicios de envío

En los servicios de envío:

1. En **Información de recogida**, selecciona la **Instalación** e ingresa la **Fecha prevista de recolección**. La opción `Crear a partir del pedido` completa el origen con los datos del pedido.

   ![vtex-pick-and-pack-last-mile_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_7.png)

2. Haz clic en `Continuar`.

3. En **Información de entrega**, revisa el destino e ingresa la **Fecha prevista de entrega**. La dirección de destino se muestra en el resumen lateral, en **Enviar a**.

   ![vtex-pick-and-pack-last-mile_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_8.png)

4. Haz clic en `Continuar`.

5. Selecciona la **Transportadora** responsable del envío entre las integraciones activas. La transportadora seleccionada se muestra en el resumen lateral.

6. Haz clic en `Crear servicio`.

## Consultar detalles de un servicio

Para ver más información sobre un servicio haz clic en la fila correspondiente de la tabla. Los detalles se muestran en un panel lateral, organizado en las pestañas **Detalles**, **Seguimiento**, **Adjuntos** y **Observaciones**.

![vtex-pick-and-pack-last-mile_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_9.png)

En la parte superior del panel se muestran el identificador del pedido y el status actual del servicio. El menú de tres puntos, a la derecha, permite descargar la etiqueta de seguimiento generada por Last Mile. El modelo de la etiqueta es predeterminado y no se puede personalizar.

El contenido del panel varía según el tipo de servicio y la información enviada por la integración. El panel está organizado en las pestañas **Detalles**, **Seguimiento**, **Adjuntos** y **Observaciones**.

La pestaña **Detalles** reúne la siguiente información:

- **ID del pedido:** número identificador del pedido.
- **Datos del comprador:** nombre, teléfono e email del cliente.
- **Información de recogida:** rango de fecha y hora previstos para la recogida en los servicios de recogida.
- **Tienda:** tienda de recogida, incluye la dirección completa en los servicios de recogida.
- **Información de recogida y entrega:** direcciones y fechas correspondientes a cada etapa en los servicios de envío.
- **Paquete(s):** paquetes del servicio, con el tipo de empaque y la cantidad de ítems. Haz clic en el paquete para ver los ítems que contiene.
- **Línea de tiempo:** historial del servicio, con fecha, hora y autor de cada evento, desde la creación hasta la última actualización de status.

La pestaña **Seguimiento**, cuando está disponible, muestra información adicional de seguimiento enviada por la integración.

La pestaña **Adjuntos** permite ver etiquetas y fotos del comprobante de entrega enviadas por la integración, cuando están disponibles.

La pestaña **Observaciones** reúne alertas de ruta y mensajes enviados en tiempo real por la integración, cuando están disponibles.

## Confirmar recogida en tienda

En los pedidos con recogida en tienda, Last Mile genera un código de seis dígitos que autentica la entrega al cliente. El flujo funciona de la siguiente manera:

1. El alistamiento y el empaque del pedido se completan y se crea el servicio de recogida.
2. VTEX Pick and Pack envía al cliente un email con el código de recogida.
3. El cliente va a la tienda e informa el código.
4. El operador de la tienda valida el código en el servicio y completa la recogida.
5. El servicio pasa al status `Entregado` y se registra la fecha de confirmación. Después de este evento, la facturación del pedido puede activarse automáticamente, según la integración configurada.

El email se envía a través de [Message Center](/es/docs/tutorials/como-funciona-el-message-center), el módulo de emails transaccionales de VTEX, basado en una plantilla dedicada al código de recogida. Además del código, el mensaje incluye la identificación del pedido, la tienda de recogida y la fecha prevista para la recogida.

> ℹ️ La plantilla y el remitente del email se configuran por cuenta. En operaciones con varias cuentas, como las de sellers white label, es necesario configurar la plantilla en cada una de ellas. Para saber cómo personalizar el contenido y el layout del mensaje consulta [Plantillas de emails transaccionales](/es/docs/tutorials/plantillas-de-emails-transaccionales-del-pedido).

### Enviar nuevo código por email

Si el cliente no recibió el email o ya no tiene acceso a él, puedes enviar un nuevo código desde el servicio.

Para enviar un nuevo código sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Last Mile > Servicios de envío**.
2. Haz clic en la pestaña **Recogida en tienda**.
3. Haz clic en el pedido deseado.
4. En la parte inferior del panel de detalles, haz clic en `Enviar nuevo código por email`.

El mensaje `Nuevo código enviado al email del cliente` confirma que el nuevo código se envió al email del cliente.

![vtex-pick-and-pack-last-mile_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_10.png)

Hay un intervalo mínimo entre envíos. Mientras no termina ese intervalo, la opción permanece no disponible y la parte inferior muestra el conteo en segundos hasta el próximo envío permitido en el formato `Reintentar en {segundos}s`. Esta restricción no se puede desactivar. Su objetivo es prevenir el envío excesivo de mensajes al cliente.

![vtex-pick-and-pack-last-mile_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_11.png)

### Validar el código y finalizar la recogida

Para confirmar la recogida del pedido sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Last Mile > Servicios de envío**.

2. Haz clic en la pestaña **Recogida en tienda**.

3. Haz clic en el pedido deseado.

4. En la parte inferior del panel de detalles, haz clic en `Iniciar despacho`.

5. En la pantalla **Ingresar código de recogida**, ingresa el código de seis dígitos proporcionado por el cliente.

   ![vtex-pick-and-pack-last-mile_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_12.png)

6. Haz clic en `Finalizar despacho`.

Para volver al panel de detalles sin confirmar la recogida haz clic en `Volver a los detalles`.

Si el código es incorrecto, la pantalla indica el error y permite un nuevo intento. Tras la confirmación, el panel muestra el mensaje `Recogida finalizada`, el servicio pasa al status `Entregado` y la fecha de confirmación queda registrada en la **Línea de tiempo**.

![vtex-pick-and-pack-last-mile_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_13.png)

> ❗ El código de recogida es un dato sensible: es la garantía de que el pedido se entregó a la persona correcta. Comparte el código solo con el cliente que realizó el pedido.

## Integraciones

En **Envío > Last Mile > Integraciones**, registras y activas las empresas que pueden recibir los servicios de Last Mile. Las integraciones están organizadas en dos grupos:

- **Transportadoras:** empresas que realizan el envío directamente. Este grupo incluye la integración `Manual` utilizada en los servicios de recogida en tienda.
- **Agregadores logísticos:** brokers logísticos que reúnen varias transportadoras y permiten acceder a todas mediante una única integración.

Cada tarjeta muestra el nombre de la empresa, los países atendidos y el status de la integración, que puede ser `Activo` o `Inactivo`. Solo se pueden seleccionar las integraciones activas al crear un servicio.

![vtex-pick-and-pack-last-mile_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_14.png)

Para agregar una integración sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Envío > Last Mile > Integraciones**.

2. Haz clic en `Agregar integración`.

3. En la ventana **Agregar integración**, selecciona la empresa deseada. Las empresas ya integradas en la cuenta se muestran como no disponibles para selección.

   ![vtex-pick-and-pack-last-mile_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_15.png)

4. Haz clic en `Continuar`.

5. Habilita la opción **Activo** y completa los campos de configuración.

   > ℹ️ Cada empresa tiene sus propios campos de configuración, y algunos datos deben obtenerse directamente de su sistema. Si es necesario, ponte en contacto con el soporte de la transportadora.

   > ℹ️ Algunas integraciones requieren el envío de credenciales a VTEX. En ese caso ponte en contacto con el [Soporte VTEX](https://help.vtex.com/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex) para recibir orientación sobre cómo enviar la información necesaria.

   ![vtex-pick-and-pack-last-mile_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_16.png)

6. Haz clic en `Crear`.

Para editar una integración existente haz clic en la tarjeta correspondiente, realiza los cambios deseados y haz clic en `Actualizar`.

> ℹ️ Para integrar una transportadora que no está en la lista consulta [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api) y la guía [VTEX Pick and Pack Carriers Integration Protocol](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-carriers-integration-protocol).

## Configuración de Last Mile

En **Envío > Last Mile > Configuración**, en la sección **Información > General**, defines la ubicación de la tienda y los datos de contacto utilizados en los servicios de envío.

![vtex-pick-and-pack-last-mile_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_17.png)

En **Ubicación de la tienda** completa el país, estado, ciudad, código postal, calle y zona horaria de la tienda. También puedes utilizar el campo **Buscar una dirección** para buscar la dirección y llenar los campos automáticamente, incluyendo la latitud y la longitud. En **Información de contacto**, ingresa el nombre y el teléfono de la persona responsable. Para guardar los cambios, haz clic en `Guardar`.

> ⚠️ La aplicación móvil de Last Mile para repartidores de la flota propia de la tienda se descontinuó en 2024. La configuración relacionada con la flota propia ya no está en uso, y el seguimiento de los envíos depende de las transportadoras integradas.

## Más información

- [VTEX Pick and Pack](/es/docs/tutorials/vtex-pick-and-pack)
- [VTEX Pick and Pack: Pedidos](/es/docs/tutorials/vtex-pick-and-pack-pedidos)
- [VTEX Pick and Pack: hojas de trabajo](/es/docs/tutorials/vtex-pick-and-pack-hojas-de-trabajo)
- [VTEX Pick and Pack: Configuración](/es/docs/tutorials/vtex-pick-and-pack-configuracion)
- [VTEX Pick and Pack: Insights](/es/docs/tutorials/vtex-pick-and-pack-insights)
- [Flujo y status de pedidos](/es/docs/tutorials/flujo-y-status-de-pedidos)


