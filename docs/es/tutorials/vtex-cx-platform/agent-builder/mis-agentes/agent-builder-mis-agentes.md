---
title: 'Mis agentes'
createdAt: 2026-11-27T00:00:00.000Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-my-agents
locale: es
---

En la sección **Mis agentes** de [Agent Builder](https://help.vtex.com/es/docs/tutorials/informacion-general-de-agent-builder), puedes editar el manager, que es el agente orquestador de tu operación, y las instrucciones que debe seguir. En esta página también puedes probar y asignar cada uno de los agentes colaboradores.

Aprende más consultando el artículo [Asignar y probar un agente](https://help.vtex.com/es/docs/tutorials/asignar-y-probar-agentes).

### Tipos de contenido admitidos

El agente orquestador usa la información que los clientes proporcionan en la conversación para entender el contexto de la atención y saber qué colaboradores activar. El agente orquestador puede interpretar distintos tipos de contenido:

- Mensajes de texto.
- Imágenes.
- Archivos PDF.

> ⚠️ La lectura de archivos PDF por parte del agente orquestador está limitada a documentos de hasta cinco páginas.

## Editar manager

La opción **Editar Manager** del agente orquestador tiene las siguientes pestañas:

- [Perfil](#perfil)
- [Motor](#motor)

### Perfil

En esta pestaña encontrarás campos configurables para definir la identidad y el comportamiento de tu agente orquestador.

Para personalizar tu agente, completa los siguientes campos:

- **¿Qué nombre usa el agente para presentarse?:** nombre del agente que se mostrará a los clientes.
- **¿Cuál es la función principal del agente?:** función principal del agente para que los usuarios entiendan su especialidad (por ejemplo: representante).
- **¿Cuál es el objetivo principal del agente?:** objetivo principal del agente (por ejemplo: ayudar a resolver dudas).
- **¿Cuál es el tono de voz del agente?:** tono de voz que el agente va a usar para comunicarse con los usuarios. Selecciona uno de los tonos de voz predefinidos.

Consulta a continuación la descripción detallada de cada tono de voz:

| Tono de voz del agente | Descripción |
| --- | --- |
| Amigable | Interactúa de forma cálida y acogedora, haciendo que el cliente se sienta cómodo y bienvenido, estableciendo una conexión con empatía y comprensión. |
| Sistemático | Con un método claro y bien estructurado, sigue pasos definidos para resolver problemas. Usa un enfoque lógico y ordenado, con consistencia y precisión en la comunicación y el soporte al cliente. |
| Analítico | Garantiza que toda la información se presente de forma clara y accesible. Es lógico y objetivo, guiando al cliente por cada etapa de manera metódica, para que no se pierda ningún detalle. |
| Creativo | Utiliza la imaginación para comunicarse, priorizando soluciones originales. Es capaz de ofrecer respuestas diferenciadas y adaptar el lenguaje para que el contenido sea más relevante y cautivador para el cliente. |
| Informal | Es ligero, enérgico e informal. Mantiene un tono más accesible y humano. |

### Motor

En **Fuente del motor**, puedes seleccionar el modelo de agente nativo de VTEX CX Platform o un modelo de LLM en el que tengas una clave de API registrada. Si quieres usar el modelo externo, selecciona la opción **Clave de API propia** y completa los siguientes campos:

- **Proveedor**: empresa propietaria del modelo.
- **Modelo**: versión disponible del modelo.
- **API Key**: tu clave de API registrada con el proveedor del modelo.

> ℹ️ Para activar cualquier modificación realizada en la información de las pestañas **Perfil** o **Motor**, debes hacer clic en `Guardar cambios`.

Si seleccionaste el motor nativo de la plataforma, podrás elegir, en **Versión del manager**, entre dos opciones de agente orquestador:

- **Manager 2.8** (Recomendado).
- **Manager 2.7** (Modelo heredado).

En **Vista previa de los agentes**, existen dos configuraciones posibles:

- **Formato de mensaje múltiple:** actívalo <i class="fas fa-toggle-on" aria-hidden="true"></i> si quieres que el agente envíe varios mensajes, como respuestas rápidas, listas y catálogo. De lo contrario, déjalo desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Feedback progresivo de los agentes (disponible solo para el Shopping Assistant):** actívalo <i class="fas fa-toggle-on" aria-hidden="true"></i> si quieres que el Shopping Assistant muestre actualizaciones breves mientras prepara la respuesta final. Estas actualizaciones no modifican la respuesta final ni requieren desarrollo adicional en la tienda. De lo contrario, déjalo desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

> ⚠️ Las opciones **Feedback progresivo de los agentes** y **Formato de mensaje múltiple** no pueden activarse al mismo tiempo.

En **Mensajes del sistema**, puedes personalizar el mensaje de error que se envía al cliente cuando un error de API impide que el agente genere una respuesta. Cada proyecto puede tener su propio mensaje, adaptado al tono de voz de la marca.

> ⚠️ El mensaje de error se envía exactamente como está configurado y no se traduce automáticamente. Escribe el texto en el idioma en el que tu agente atiende a los clientes.

Para guardar tus ajustes, haz clic en `Guardar cambios`.

## Editar instrucciones

Al hacer clic en el botón `Editar instrucciones` del agente orquestador, accedes a la página **Instrucciones**, donde puedes agregar instrucciones directas para determinar cómo se comporta tu agente. No hay límite para la cantidad de instrucciones que se pueden crear.

Cada instrucción personalizada es revisada por IA antes de guardarse. La revisión analiza la instrucción en busca de problemas, sugiere una reescritura cuando es necesario y asigna una categoría para que puedas organizar instrucciones relacionadas.

### Crear una instrucción

Para crear una instrucción personalizada, sigue estos pasos:

1. En la página **Instrucciones**, haz clic en `Nueva instrucción`.
2. Escribe la instrucción.
3. Haz clic en `Validar`.
4. En **Categoría sugerida**, mantén la categoría asignada por la IA, selecciona otra opción en **Otras categorías** o selecciona **Sin categoría**.
5. Haz clic en `Guardar`.

> ℹ️ El botón `Guardar` está disponible una vez que finaliza la revisión por IA. Cuando no se encuentran problemas, el campo **Problemas encontrados** muestra **Todo listo. No se encontraron problemas.** Para agregar una categoría antes de guardar, consulta [Crear una categoría](#crear-una-categoría).

> ⚠️ Si el campo **Problemas encontrados** muestra algún problema, actualiza la instrucción o haz clic en `Aplicar` en **Sugerencia de reescritura**. Haz clic en `Deshacer` para restaurar el texto anterior. Después de cambiar el texto, haz clic en `Revalidar` y luego en `Guardar`.

### Crear una categoría

Puedes crear una categoría al crear o editar una instrucción y luego reutilizarla en otras instrucciones.

Para crear una categoría, sigue estos pasos:

1. En el panel lateral de la instrucción, abre **Categoría** o **Categoría sugerida**.
2. Haz clic en `Nueva categoría`.
3. En **Nombre de la categoría**, escribe un nombre.
4. Haz clic en `Crear`.
5. Haz clic en `Guardar` para almacenar la instrucción en esa categoría.

> ℹ️ El nombre de la categoría puede tener hasta 50 caracteres e incluir letras, números, espacios y guiones. Usa un nombre único. La opción **Sin categoría** está reservada para instrucciones sin categoría. Una categoría creada en el panel lateral se marca con la etiqueta **Nuevo** hasta que guardes la instrucción.

### Componentes interactivos

El agente orquestador puede responder usando componentes interactivos nativos de WhatsApp:

| Componente | Descripción |
| --- | --- |
| Respuestas rápidas (`quick_reply`) | Botones con opciones predefinidas para que el cliente elija. |
| Botones de llamada a la acción (`call_to_action`) | Botones que dirigen al cliente a un enlace externo. |
| Lista de mensajes (`list_message`) | Menú con una lista de opciones seleccionables. |

Para indicarle al agente que use un componente, menciónalo directamente en una instrucción personalizada. Por ejemplo: "Al preguntar sobre el estado del pedido, usa el componente `quick_reply` con las opciones Rastrear pedido, Cancelar pedido y Hablar con un representante".

> ℹ️ Para que el agente envíe componentes interactivos, la opción **Formato de mensaje múltiple** debe estar activada en **Editar Manager > Motor**.

> ⚠️ El catálogo de productos no es un componente nativo del agente orquestador. Para enviar un catálogo, debes tener un agente de Concierge asignado al equipo. Los agentes Concierge oficiales de VTEX ya cuentan con esta capacidad.

### Ver instrucciones

Selecciona `Categorías` o `Lista` para cambiar el modo de visualización de las instrucciones:

- **Categorías:** agrupa las instrucciones por categoría. Una categoría personalizada sin instrucciones permanece visible y muestra **Aún no hay instrucciones en esta categoría**.

- **Lista:** muestra cada instrucción existente con su respectiva categoría.

Usa el campo de búsqueda para encontrar una instrucción. Para descargar las instrucciones, haz clic en `Exportar instrucciones`.

La página incluye los siguientes grupos:

- **Sin categoría:** instrucciones personalizadas que no tienen una categoría. Puedes editarlas y eliminarlas. Este grupo no se puede quitar.

- **Instrucciones predeterminadas:** comportamientos definidos por la plataforma. Estas instrucciones no se pueden editar ni eliminar.

Para editar o eliminar una instrucción personalizada, sigue estos pasos:

1. Haz clic en el botón de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> junto a la instrucción.
2. Para editarla, haz clic en `Editar instrucción`, cambia el texto o la categoría y haz clic en `Guardar`.
3. Para eliminarla, haz clic en `Eliminar instrucción` y confirma la eliminación.

> ℹ️ El campo **Categoría** está disponible en cuanto abres la instrucción. Haz clic en `Revalidar` para revisar el texto de nuevo. La revalidación mantiene la categoría ya seleccionada.

> ⚠️ Eliminar una instrucción es permanente, y el agente deja de seguirla.

Para eliminar una categoría personalizada, sigue estos pasos:

1. Selecciona `Categorías`.
2. Abre el menú de acciones de la categoría.
3. Haz clic en `Eliminar categoría` y confirma la eliminación.

> ℹ️ Las instrucciones de una categoría eliminada se mueven a **Sin categoría**. Una categoría vacía se quita de la lista.

Para elegir qué temas sensibles debe rechazar el agente, consulta [Configurar capas de seguridad adicionales por proyecto](https://help.vtex.com/es/docs/tutorials/configurar-capas-adicionales-de-seguridad-por-proyecto).
