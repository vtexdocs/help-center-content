---
title: 'Agente de gestión de contratos'
createdAt: 2026-03-06T00:00:00.000Z
updatedAt: 2026-04-02T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugES: contract-manager-agent
locale: es
---

> ⚠️ Esta funcionalidad está disponible solo para tiendas que usan B2B Buyer Portal, y por el momento, únicamente para cuentas seleccionadas.

El **Agente de gestión de contratos** ayuda a los operadores B2B a gestionar [contratos](https://help.vtex.com/es/docs/tutorials/contratos-b2b-es) usando lenguaje natural. En vez de actualizar manualmente cada contrato, puedes describir lo que deseas cambiar, revisar el plan propuesto y ejecutarlo directamente desde la interfaz.

En las siguientes secciones de esta guía se detalla el funcionamiento del **Agente de gestión de contratos**:

- [Casos de uso](#casos-de-uso)
- [Gestionar contratos con el agente](#gestionar-contratos-con-el-agente)
  - [Solicitar una tarea al agente](#solicitar-una-tarea-al-agente)
  - [Seguimiento de tareas e historial](#seguimiento-de-tareas-e-historial)

## Casos de uso

El agente utiliza lenguaje natural para interpretar tus instrucciones y automatizar actualizaciones de contratos a escala, reduciendo el esfuerzo manual y errores operativos. Estos son algunos escenarios comunes:

- **Conceder acceso a nuevos surtidos de productos:** cuando lanzas una nueva colección (por ejemplo, "Especial de Verano 2026"), puedes agregarla a varios contratos de compradores al mismo tiempo en vez de editar cada contrato individualmente.
- **Restringir la visibilidad de productos:** si una línea de productos ya no debe estar disponible para ciertos compradores, puedes remover la colección asociada de sus contratos.
- **Actualizar condiciones comerciales:** al renegociar términos, puedes agregar o remover tablas de precios y medios de pago, o reorganizar la prioridad de las tablas de precios entre contratos.
- **Aplicar cambios en masa:** si cientos de contratos requieren el mismo ajuste, puedes describir la modificación una sola vez y el agente la aplicará a todos los contratos correspondientes.

## Gestionar contratos con el agente

Puedes acceder al agente en el Admin VTEX. Accede a **Apps > Customers > Contracts Manager Agent** o escribe **Contracts Manager Agent** en la barra de búsqueda en la parte superior de la página.

En la pantalla principal, se muestra el campo de texto `Ask the agent`, acciones sugeridas (como `Add collections`, `Remove payment methods` o `Change price table position`) y la sección `Most recent tasks`, que muestra tus operaciones más recientes.

### Solicitar una tarea al agente

1. En el campo `Ask the agent`, escribe tu solicitud en lenguaje natural. Por ejemplo:
   - "Add Office Supplies and Tools collections to ACME Corp and Daily Planet."
   - "Remove all collections from contract X."
   - "Add price table B2B-2026 to contracts A and B."
2. Envía la solicitud. El agente interpretará la instrucción y generará un plan de acción propuesto.
3. Haz clic en el botón del plan (por ejemplo, `Add collections`) para abrir un panel lateral con los detalles completos.
4. En el panel lateral, verifica los contratos y condiciones listados (colecciones, tablas de precios o medios de pago).
   > ⚠️ Siempre confirma que los contratos y condiciones afectados sean correctos antes de continuar. Los cambios afectan lo que los compradores pueden ver, comprar y las respectivas condiciones comerciales.
5. Haz clic en `Start Update`. Cuando todas las actualizaciones estén completas, verás un mensaje de confirmación.

> ℹ️ El tiempo que el agente tarda en completar las tareas solicitadas depende de la escala de los cambios. Por ejemplo, agregar colecciones a cientos de contratos puede tardar unos minutos, mientras que agregar colecciones a tres contratos normalmente solo toma unos segundos.

Mientras el agente ejecuta la tarea, puedes navegar a otras páginas y volver después para verificar los resultados.

También puedes iniciar nuevas tareas en conversaciones separadas mientras una operación anterior aún está en curso. Cada conversación funciona de manera independiente, permitiéndote poner varios cambios en la cola sin tener que esperar a que cada uno termine.

Para ejecutar nuevas tareas, puedes continuar la conversación en el mismo diálogo o volver a la pantalla principal de **Contracts Manager Agent** haciendo clic en el ícono de flecha <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i> en la esquina superior izquierda.

### Seguimiento de tareas e historial

1. Haz clic en `View tasks` en la esquina superior derecha.
2. En el panel lateral, revisa las tareas de los últimos 7 días, incluyendo el nombre de la operación y los identificadores de los contratos relacionados.

> ℹ️ Para gestionar contratos vía API, consulta la documentación para desarrolladores de la [API de contratos B2B](https://developers.vtex.com/docs/api-reference/).
