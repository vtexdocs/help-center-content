---
title: "Información general de Agent Builder"
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-06-15T00:00:00.000Z
publishedAt: 2025-09-08T16:21:28.723Z
firstPublishedAt: 2025-07-29T16:45:36.827Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: agent-builder-overview
legacySlug: vision-de-conjunto-del-agent-builder
locale: es
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
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
| --- | :--- |
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

- **Feedback progresivo de los agentes:** actívalo <i class="fas fa-toggle-on" aria-hidden="true"></i> si quieres que el agente envíe actualizaciones en tiempo real al usuario mientras redacta la respuesta final. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

#### Editar instrucciones

Al hacer clic en el botón `Editar instrucciones` del agente orquestador, accedes a la página **Instrucciones**, donde puedes agregar instrucciones directas para determinar cómo se comporta tu agente. No hay un límite para la cantidad de instrucciones que se pueden crear.

##### Validación por IA

Al crear instrucciones personalizadas puedes solicitar la validación de la IA, que analizará cada una de ellas e indicará posibles problemas o puntos de mejora. Además, también puedes solicitar una sugerencia automática, que revisará la instrucción y la editará según sea necesario.

Para usar la validación de instrucciones con IA al crear una instrucción sigue estos pasos:

1. Activa el botón <i class="fas fa-toggle-on" aria-hidden="true"></i> **Validar instrucción por IA**.
2. Escribe tu instrucción en **Nueva instrucción personalizada** y haz clic en `Validar instrucción`.
3. Después del análisis de la instrucción, si el resultado es **No se encontraron problemas. ¡Listo para publicar!**, haz clic en `Publicar`.

> ⚠️ Si aparece un mensaje de advertencia en **Resultados de la validación**, corrige la instrucción según las indicaciones mostradas y haz clic en `Revalidar`.

> ℹ️ Puedes crear una nueva instrucción personalizada sin la validación de la IA. Para hacerlo, desactiva la opción **Validar instrucción por IA**, escribe la instrucción y haz clic en `Publicar instrucción`.

##### Lista de instrucciones

En la **Lista de instrucciones**, puedes verificar la siguiente información:

- **Instrucciones personalizadas:** instrucciones creadas para el agente. Puedes encontrarlas usando la barra de búsqueda o copiarlas haciendo clic en el botón `Copiar instrucciones`.

- **Instrucciones predeterminadas:** comportamientos definidos por la plataforma. Estas instrucciones no se pueden editar.

- **Temas de seguridad:** asuntos que el agente no menciona durante un chat de soporte. Estos temas no se pueden editar.

Para editar o eliminar una instrucción personalizada sigue los pasos a continuación:

1. Haz clic en el botón de tres puntos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> junto a la instrucción deseada.
2. Para editarla, haz clic en `Editar instrucción`, realiza los ajustes necesarios y haz clic en `Guardar`.
3. Para eliminarla, haz clic en `Eliminar instrucción` y luego en `Eliminar`.

### Base de conocimiento

En esta página puedes agregar [archivos](#archivos), [sitios web](#sitios-web) y [textos](#textos) a la base de conocimiento de tu agente. Los agentes utilizarán los datos de estos documentos para responder a los usuarios.

#### Archivos

Para agregar un archivo a la base de datos haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar archivo`.

> ⚠️ Los archivos deben tener extensión `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` o `.xlsx` y un tamaño de hasta 50 MB.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"></i>tres puntos junto al nombre del archivo, puedes:

- Descargar el archivo.
- Remover el archivo de la base de conocimiento.

También puedes usar el campo de búsqueda para encontrar un archivo en la base de conocimiento.

#### Sitios web

Para agregar un sitio web a la base de datos del agente sigue los pasos a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar sitio web`.
2. Luego, copia la URL del sitio web que deseas agregar y pégala en el campo vacío.
3. Haz clic en `Finalizar`.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"></i>tres puntos junto al sitio web, puedes:

- Acceder al sitio web.
- Remover el sitio web de la base de conocimiento.

También puedes usar el campo de búsqueda para encontrar un sitio web en la base de conocimiento.

#### Texto

Para agregar información, haz clic en **Nuevo texto** e ingresa el contenido deseado en el cuadro de texto.

Después de ingresar el texto haz clic en `Guardar cambios`.

### Flujo de automatización

Puedes crear flujos de automatización para interactuar con un grupo de usuarios y determinar las respuestas del agente con base en los mensajes de los usuarios.

Para más información, accede a [Introducción a los flujos](https://help.vtex.com/es/docs/tutorials/introduccion-a-los-flujos).
