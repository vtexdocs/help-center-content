---
title: 'Configurar entrega programada en Buyer Portal Checkout'
status: PUBLISHED
createdAt: 2026-04-22T00:00:00.000Z
updatedAt: 2026-04-22T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: configure-scheduled-delivery-buyer-portal-checkout
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

> ℹ️ Esta funcionalidad está disponible solo para tiendas que utilizan [B2B Buyer Portal](https://help.vtex.com/es/docs/tutorials/b2b-buyer-portal-es), que actualmente está disponible para cuentas seleccionadas.

La entrega programada en Buyer Portal Checkout permite a las tiendas VTEX ofrecer a los clientes la posibilidad de elegir el mejor día y hora para recibir sus compras. Esta configuración se realiza directamente en las políticas de envío y define los periodos disponibles para las entregas.

> ⚠️ Para que la [Entrega programada](/es/docs/tutorials/entrega-programada) y la [Capacidad de entrega](/es/docs/tutorials/gestionar-capacidad-de-entrega) funcionen correctamente debes tener en cuenta que:
>
> - La suma de [`account name`](es/docs/tutorials/que-es-account-name) + `ID de la política de envío` no puede exceder los 60 caracteres.
> - No se deben utilizar espacios en el ID de las [políticas de envío](/es/docs/tutorials/crear-una-politica-de-envio).

Este artículo muestra cómo configurar la entrega programada en una política de envío ya existente o en una nueva política de envío.

![Entrega programada Buyer Portal Checkout](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/estratégia-de-envio/configurar-entrega-agendada-fastcheckout_1.png)

## Ventanas de entrega

Las ventanas de entrega definen los periodos de operación de la transportadora, es decir, los horarios en los que acepta la recepción de pedidos. Esta configuración influye directamente en el cálculo del tiempo de envío que se muestra al cliente en el proceso de pago.

### Configurar ventanas de entrega

Para configurar las ventanas de entrega en una política de envío sigue los pasos a continuación:

1. En el Admin de VTEX, accede a **Envío > Estrategia de Envío**, o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, haz clic en la política de envío deseada, o [crea una nueva política de envío](es/docs/tutorials/crear-una-politica-de-envio).
3. En la sección **Horario laboral**, haz clic en la pestaña `Ventana de entrega`.
4. Si lo deseas, activa la opción `Aceptar compras fuera del horario laboral`. Cuando está activada, el intervalo de tiempo entre el momento del pedido y el inicio del horario laboral se sumará al tiempo total de entrega.
5. Selecciona el `Día de la semana` y completa la `Hora de inicio` y `Hora de fin`.
6. Para agregar más días de la semana, haz clic en `Agregar ventana de entrega` y repite el paso 5.
7. Haz clic en `Guardar cambios`.

> ⚠️ La **Ventana de entrega** y la **Hora de recogida** son opciones excluyentes, ya que un mismo periodo no puede destinarse simultáneamente a acciones diferentes.

## Entrega programada

La funcionalidad de entrega programada permite definir periodos de entrega para que el consumidor pueda elegir el mejor día y horario para recibir el pedido. Los periodos de entrega disponibles para los consumidores se denominan ventanas de entrega.

### Configurar entrega programada

Para configurar la entrega programada en una política de envío sigue los pasos a continuación:

1. En el Admin de VTEX, accede a **Envío > Estrategia de envío**, o ingresa **Estrategia de envío** en la barra de búsqueda en la parte superior de la página.
2. En la pestaña **Políticas de envío**, haz clic en la política de envío deseada, o [crea una nueva política de envío](es/docs/tutorials/crear-una-politica-de-envio).
3. Desplázate por la página hasta la sección **Entrega programada**.
4. Activa la opción `Entrega programada`.
5. En el campo **Tiempo máximo de entrega**, establece el tiempo máximo en días que la política de envío utiliza para realizar un envío desde la confirmación del pedido hasta la confirmación de la entrega.
6. En la sección **Entrega programada**, configura las ventanas de entrega que estarán disponibles para el cliente:
   - Selecciona el `Día de la semana`.
   - Completa la `Hora de inicio` de la ventana de entrega.
   - Completa la `Hora de fin` de la ventana de entrega.
   - Si lo deseas, completa el `Valor adicional` para cobrar un valor extra en este periodo (opcional).
7. Para agregar más periodos de entrega, haz clic en `Agregar nuevo periodo de entrega` y repite el paso 6.
8. Si deseas configurar la capacidad de entrega sigue las instrucciones de la próxima sección. De lo contrario, haz clic en `Guardar cambios`.

> ℹ️ Una ventana de entrega deja de estar disponible para su selección después de haber comenzado. Solo las ventanas de entrega futuras (las que aún no han comenzado) estarán disponibles para los clientes.

### Configurar capacidad de entrega (opcional)

La capacidad de entrega permite limitar la cantidad de ítems o pedidos que se pueden enviar en cada ventana de entrega, ayudando a gestionar mejor las entregas programadas. Esta configuración es opcional y no interfiere con el funcionamiento básico de la plataforma.

Para configurar la capacidad de entrega sigue los pasos a continuación:

1. En la sección **Entrega programada**, activa la opción `Configurar capacidad de entrega`.
2. Elige la unidad de capacidad de entrega entre `Ítems` o `Pedidos`.
3. Haz clic en `Guardar cambios`.

## Más información

- [Política de envío](/es/docs/tutorials/politica-de-envio)
- [Crear una política de envío](/es/docs/tutorials/crear-una-politica-de-envio)
- [Entrega programada](es/docs/tutorials/entrega-programada)
- [Gestionar capacidad de entrega](es/docs/tutorials/gestionar-capacidad-de-entrega)
- [Estrategia de envío](es/docs/tutorials/estrategia-de-envio)
