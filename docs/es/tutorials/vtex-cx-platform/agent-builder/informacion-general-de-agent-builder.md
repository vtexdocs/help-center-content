---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-12T18:32:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: es
---

**Agent Builder** es una herramienta de conversación con el cliente basada en inteligencia artificial. Con esta funcionalidad, puedes personalizar agentes para interactuar con tus clientes y responder solicitudes relacionadas con pedidos en curso, el catálogo de tu tienda o la cancelación de pedidos.

La funcionalidad se centra en un agente orquestador (o manager), que es el punto de contacto con el cliente y gestiona el chat. Este agente orquestador activa agentes colaboradores que devuelven datos e información según las necesidades del usuario.

> ℹ️ Para saber más sobre los agentes colaboradores, consulta el artículo [Agentes oficiales de VTEX CX Platform](https://help.vtex.com/es/docs/tutorials/agentes-oficiales-de-vtex-cx-platform).

Además de asignar y probar estos agentes, también puedes crear agentes propios que atiendan necesidades específicas de tu empresa.

> ⚠️ Para crear agentes personalizados, usa la CLI de VTEX CX Platform. Consulta la [documentación](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli) para crear tu propio agente.

## Agent Builder

Para acceder a **Agent Builder** selecciona la organización en la página de inicio de VTEX CX Platform y después el proyecto que deseas gestionar.

En **Agent Builder** están disponibles las siguientes páginas:

- [**Mis agentes**](#mis-agentes)
- [**Base de conocimiento**](#base-de-conocimiento)
- [**Flujo de automatización**](#flujo-de-automatizacion)

### Mis agentes

> En esta página puedes asignar y probar agentes para tu tienda, además de editar el manager y las instrucciones que debe seguir.

Aprende más consultando el artículo [Asignar y probar un agente](https://help.vtex.com/es/docs/tutorials/asignar-y-probar-agentes).

#### Editar manager

La opción **Editar manager** del agente orquestador tiene las siguientes pestañas:

- [Perfil](#perfil)
- [Motor](#motor)

##### Perfil

En esta pestaña encontrarás campos configurables para definir la identidad y el comportamiento de tu agente orquestador.

Para personalizar tu agente completa los siguientes campos:

- **¿Qué nombre usa el agente para presentarse?:** nombre del agente que se mostrará a los clientes.
- **¿Cuál es la función principal del agente?:** función principal del agente para que los usuarios entiendan su especialidad (por ejemplo: representante).
- **¿Cuál es el objetivo principal del agente?:** objetivo principal del agente (por ejemplo: ayudar a resolver dudas).
- **¿Cuál es el tono de voz del agente?:** tono de voz que el agente va a usar para comunicarse con los usuarios. Selecciona uno de los tonos de voz predefinidos.

Consulta a continuación la descripción detallada de cada tono de voz:

| Tono de voz del agente | Descripción |
| --- | --- |
| Amigable | Interactúa de forma cálida y acogedora, haciendo que el cliente se sienta cómodo y bienvenido, estableciendo una conexión con empatía y comprensión. |
| Sistemático | Con un método claro y bien estructurado, sigue pasos definidos para resolver problemas. Usa un enfoque lógico y organizado, con consistencia y precisión en la comunicación y en el soporte al cliente. |
| Analítico | Garantiza que toda la información se muestre de forma clara y accesible. Es lógico y objetivo, guiando al cliente por cada etapa de manera metódica, para que ningún detalle se pierda. |
| Creativo | Utiliza la imaginación para comunicarse, priorizando soluciones originales. Ofrece respuestas únicas y adapta el lenguaje para hacer el contenido más relevante e impactante para el cliente. |
| Informal | Es ligero, energético e informal. Mantiene un tono más accesible y humano. |

##### Motor

En **Fuente del motor**, puedes seleccionar el modelo de agente nativo de VTEX CX Platform o un modelo de LLM para el que tengas una clave API registrada. Si deseas usar el modelo externo, selecciona la opción **Clave API propia** y completa los siguientes campos:

- **Proveedor**: empresa propietaria del modelo.
- **Modelo**: versión disponible del modelo.
- **API key**: tu clave de API registrada en el proveedor del modelo.

> ℹ️ Para activar cualquier modificación realizada en la información de las pestañas **Perfil** o **Motor**, debes hacer clic en `Guardar cambios`.

Si seleccionaste el motor nativo de la plataforma, podrás elegir en **Versión del manager** entre dos opciones de agente orquestador:

- **Manager 2.7** (recomendado).
- **Manager 2.6** (modelo legado).

En **Vista previa de los agentes**, existen dos configuraciones posibles:

- **Formato de mensaje múltiple:** actívalo <i class="fas fa-toggle-on" aria-hidden="true"></i> si deseas que el agente envíe varios mensajes, como respuestas rápidas, listas, catálogo. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Feedback progresivo de los agentes:** actívalo <i class="fas fa-toggle-on" aria-hidden="true"></i> si quieres que el agente muestre actualizaciones breves mientras prepara la respuesta final. Estas actualizaciones no cambian la respuesta final ni requieren desarrollo adicional en la tienda. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

> ⚠️ Las opciones **Feedback progresivo de los agentes** y **Formato de mensaje múltiple** no se pueden activar al mismo tiempo.

En **Mensajes del sistema** puedes personalizar el mensaje de error enviado al cliente cuando un error de API impide al agente generar una respuesta. Cada proyecto puede tener su propio mensaje, adaptado al tono de voz de la marca.

> ⚠️ El mensaje de error se envía exactamente como se configuró y no se traduce automáticamente. Ingresa el texto en el idioma en que tu agente atiende a los clientes.

Para guardar tus ajustes haz clic en `Guardar cambios`.

#### Editar instrucciones

Al hacer clic en el botón `Editar instrucciones` del agente orquestador, accedes a la página **Instrucciones**, donde puedes agregar instrucciones directas para determinar cómo se comporta tu agente. No hay un límite para la cantidad de instrucciones que se pueden crear.

Toda instrucción personalizada es revisada por IA antes de guardarse. La revisión analiza la instrucción en busca de problemas, sugiere una reescritura cuando es necesario y asigna una categoría para que puedas organizar las instrucciones relacionadas.

##### Crear una instrucción

Para crear una instrucción personalizada, sigue estos pasos:

1. En la página **Instrucciones**, haz clic en `Nueva instrucción`.
2. Ingresa la instrucción.
3. Haz clic en `Validar`.
4. En **Categoría sugerida**, mantén la categoría asignada por la IA, selecciona otra en **Otras categorías** o selecciona **Sin categoría**.
5. Haz clic en `Guardar`.

> ℹ️ El botón `Guardar` queda disponible cuando termina la revisión por IA. Cuando no se encuentran problemas, **Problemas encontrados** muestra **Todo bien. No se encontraron problemas.** Para agregar una categoría antes de guardar, consulta [Crear una categoría](#crear-una-categoria).

> ⚠️ Si **Problemas encontrados** indica algún problema, actualiza la instrucción o haz clic en `Aplicar` en **Sugerencia de reescritura**. Haz clic en `Deshacer` para restaurar el texto anterior. Después de cambiar el texto, haz clic en `Revalidar` y, luego, en `Guardar`.

##### Crear una categoría

Puedes crear una categoría al crear o editar una instrucción y reutilizarla después en otras instrucciones.

Para crear una categoría, sigue estos pasos:

1. En el panel lateral de la instrucción, abre **Categoría** o **Categoría sugerida**.
2. Haz clic en `Nueva categoría`.
3. En **Nombre de la categoría**, ingresa un nombre.
4. Haz clic en `Crear`.
5. Haz clic en `Guardar` para almacenar la instrucción en esa categoría.

> ℹ️ El nombre de la categoría puede tener hasta 50 caracteres e incluir letras, números, espacios y guiones. Usa un nombre único. **Sin categoría** está reservado para instrucciones sin categoría. Una categoría creada en el panel lateral queda marcada con la tag **Nuevo** hasta que guardes la instrucción.

##### Componentes interactivos

Con **Manager 2.7**, el agente orquestador puede responder usando componentes interactivos nativos de WhatsApp:

| Componente | Descripción |
| --- | --- |
| Respuestas rápidas (`quick_reply`) | Botones con opciones predefinidas para que el cliente elija. |
| Botones de acción (`call_to_action`) | Botones que dirigen al cliente a un enlace externo. |
| Mensaje con lista (`list_message`) | Menú con una lista de opciones seleccionables. |

Para orientar al agente a usar un componente, menciónalo directamente en una instrucción personalizada. Por ejemplo: "Al preguntar sobre el status del pedido, usa el componente `quick_reply` con las opciones Rastrear pedido, Cancelar pedido y Hablar con un representante".

> ℹ️ Para que el agente envíe componentes interactivos, la opción **Formato de mensaje múltiple** debe estar activada en **Editar Manager > Motor**.

> ⚠️ El catálogo de productos no es un componente nativo de Manager 2.7. Cuando hay un agente Concierge asignado al equipo, el orquestador activa al Concierge para enviar el catálogo. Los agentes Concierge oficiales de VTEX ya tienen esta capacidad.

##### Visualizar instrucciones

Selecciona `Categorías` o `Lista` para cambiar cómo se muestran las instrucciones:

- **Categorías:** agrupa las instrucciones por categoría. Una categoría personalizada sin instrucciones permanece visible y muestra **Aún no hay instrucciones en esta categoría**.

- **Lista:** muestra cada instrucción existente con su categoría.

Usa el campo de búsqueda para encontrar una instrucción. Para descargar las instrucciones, haz clic en `Exportar instrucciones`.

La página incluye los siguientes grupos:

- **Sin categoría:** instrucciones personalizadas que no tienen categoría. Puedes editarlas y eliminarlas. Este grupo no se puede eliminar.

- **Instrucciones predeterminadas:** comportamientos definidos por la plataforma. Estas instrucciones no se pueden editar ni eliminar.

Para editar o eliminar una instrucción personalizada, sigue estos pasos:

1. Haz clic en el botón de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> junto a la instrucción.
2. Para editarla, haz clic en `Editar instrucción`, cambia el texto o la categoría y haz clic en `Guardar`.
3. Para eliminarla, haz clic en `Eliminar instrucción` y confirma la eliminación.

> ℹ️ **Categoría** está disponible en cuanto abres la instrucción. Haz clic en `Revalidar` para revisar el texto de nuevo. La revalidación mantiene la categoría ya seleccionada.

> ⚠️ Eliminar una instrucción es permanente, y el agente deja de seguirla.

Para eliminar una categoría personalizada, sigue estos pasos:

1. Selecciona `Categorías`.
2. Abre el menú de acciones de la categoría.
3. Haz clic en `Eliminar categoría` y confirma la eliminación.

> ℹ️ Las instrucciones de una categoría eliminada se mueven a **Sin categoría**. Una categoría vacía se elimina de la lista.

Para elegir qué temas sensibles debe rechazar el agente, consulta [Configurar barreras de seguridad por proyecto](https://help.vtex.com/es/docs/tutorials/configurar-capas-adicionales-de-seguridad-por-proyecto).

### Base de conocimiento

En esta página puedes agregar [archivos](#archivos), [sitios web](#sitios-web) y [textos](#textos) a la base de conocimiento de tu agente. Los agentes utilizarán los datos de estos documentos para responder a los usuarios.

#### Archivos

Para agregar un archivo a la base de datos haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Agregar archivo`.

> ⚠️ Los archivos deben tener extensión `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` o `.xlsx` y un tamaño de hasta 50 MB.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"></i>tres puntos junto al nombre del archivo, puedes:

- Descargar el archivo.
- Remover el archivo de la base de conocimiento.

También puedes usar el campo de búsqueda para encontrar un archivo en la base de conocimiento.

#### Sitios web

Para agregar un sitio web a la base de datos del agente sigue los pasos a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Agregar sitio web`.
2. Luego, copia la URL del sitio web que deseas agregar y pégala en el campo vacío.
3. Haz clic en `Finalizar`.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"></i>tres puntos junto al sitio web, puedes:

- Acceder al sitio web.
- Remover el sitio web de la base de conocimiento.

También puedes usar el campo de búsqueda para encontrar un sitio web en la base de conocimiento.

#### Textos

En esta pestaña puedes agregar contenido a la base de conocimiento, organizado en bloques de texto, cada uno con su propio título. La lista se ordena de la edición más reciente a la más antigua e indica cuándo se modificó cada texto.

Para crear un texto, sigue los pasos a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i> `Nuevo texto`.
2. Ingresa un título para identificar el texto.
3. Ingresa el contenido en la caja de texto.
4. Haz clic en `Guardar`.

Haciendo clic en los tres puntos verticales <i class="fas fa-ellipsis-v" aria-hidden="true"></i> junto al texto, puedes:

- Editar el contenido.
- Cambiar el nombre del título.
- Eliminar el bloque. La eliminación requiere confirmación.

También puedes usar el campo de búsqueda para encontrar un texto por el título.

> ℹ️ Las bases de conocimiento creadas antes de organizar el contenido de esta forma mantienen el texto original como un único texto, con un título predeterminado. No se pierde ningún contenido. Dividir el contenido en varios textos es solo un cambio de interfaz y no afecta la forma en que el agente usa el contenido de la base de conocimiento.

### Flujo de automatización

Puedes crear flujos de automatización para interactuar con un grupo de usuarios y determinar las respuestas del agente con base en los mensajes de los usuarios.

Para más información, accede a [Introducción a los flujos](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos).
