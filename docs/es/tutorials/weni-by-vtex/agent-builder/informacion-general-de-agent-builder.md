---
title: 'Información general de Agent Builder'
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2025-09-08T16:21:28.723Z
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

**Agent Builder** es una herramienta de conversación con el cliente basada en inteligencia artificial. Con esta funcionalidad puedes personalizar agentes que interactúen con tus clientes, brindando información sobre pedidos en curso, catálogo de tu tienda y cancelación de pedidos.

La funcionalidad se centra en un agente orquestador, que es el punto de contacto con el cliente y asume el control del chat. Este agente orquestador activa agentes colaboradores que devuelven datos e información según las necesidades del usuario.

> ℹ️ Para saber más sobre agentes colaboradores, lee el artículo [Agentes oficiales de Weni by VTEX](/es/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

Además de asignar y probar estos agentes, también puedes crear agentes propios que atiendan necesidades específicas de tu empresa.

> ⚠️ Para crear agentes personalizados, utiliza la CLI de Weni by VTEX. Consulta la [documentación](https://weni-ai.github.io/weni-cli/getting-started/installation/) para crear tu propio agente.

## Agent Builder

Para acceder a **Agent Builder**, selecciona la organización en la página de inicio de Weni by VTEX y el proyecto que deseas gestionar. En el menú lateral, haz clic en **Agent Builder**.

En **Agent Builder** puedes acceder a las siguientes páginas:

- [**Supervisor**](#supervisor)
- [**Perfil**](#perfil)
- [**Agentes**](#agentes)
- [**Conocimientos**](#conocimientos)
- [**Ajustes**](#ajustes)

### Supervisor

En esta página puedes analizar y revisar las conversaciones entre agentes y clientes. Se divide en dos secciones:

- **Atendido por el agente**
- **Enviado a soporte humano**

La sección **Atendido por el agente** muestra el porcentaje de conversaciones atendidas y resueltas por agentes. **Enviado a soporte humano** muestra el porcentaje de interacciones transferidas a un especialista humano.

En el campo <i class="fas fa-search" aria-hidden="true"></i>`Buscar`, puedes buscar conversaciones y consultar los resultados.

En la parte superior se encuentran las fechas de las interacciones. Puedes hacer clic en la fecha para cambiar el periodo de tiempo y filtrar los resultados que aparecen.

![Imagem Supervisor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/agent-builder/informacion-general-de-agent-builder_1.png)

## Perfil

En esta página puedes personalizar la identidad y el comportamiento de tu agente orquestador a través de campos configurables.

Para personalizar a tu agente utiliza los siguientes campos:

- **¿Cómo se presenta el agente?:** nombre del agente que se mostrará a los clientes.
- **¿Cuál es la función principal del agente?:** función principal del agente para que los usuarios entiendan su especialidad (por ejemplo: Agente de soporte).
- **¿Cuál es el objetivo principal del agente?:** objetivo principal del agente (por ejemplo: ayudar a resolver dudas).
- **¿Cuál es el tono de voz del agente?:** tono de voz que el agente va a usar para comunicarse con los usuarios. Haz clic en este campo y selecciona uno de los tonos de voz predefinidos que aparecen en el menú desplegable.

Consulta a continuación la descripción detallada de cada tono de voz:

| Tono de voz del agente  | Descripción |
| :-------------: | :------------- |
| Amigable | Interactúa de forma cálida y acogedora, haciendo que el cliente se sienta cómodo y bienvenido, estableciendo una conexión basada en la simpatía y comprensión. |
| Cooperativo  | Trabaja en conjunto con el cliente para encontrar soluciones. Prioriza el trabajo en equipo y está enfocado en garantizar que las necesidades del cliente sean atendidas con el menor esfuerzo posible. |
| Extrovertido  | Con una personalidad animada y expresiva, se comunica de manera abierta y entusiasta. Siempre está motivado y transmite energía positiva durante las interacciones, lo que hace que las conversaciones sean dinámicas y atractivas. |
| Generoso     | Brinda información adicional y recursos que podrían ser útiles, incluso antes de que se los soliciten.   |
| Informal | Tiene un carácter tranquilo y enfrenta las situaciones difíciles con calma. Mantiene una conversación agradable y da al cliente el tiempo que necesita para procesar la información y tomar decisiones. |
| Organizado | Garantiza que toda la información se muestre de forma clara y accesible. Es meticuloso y eficaz, guiando al cliente por cada etapa de manera lógica, para que ningún detalle se pierda.  |
| Sistemático | Con un método claro y bien estructurado, sigue pasos definidos para resolver problemas. Usa un enfoque lógico y organizado, con consistencia y precisión en su forma de comunicarse y en el soporte al cliente.   |
| Innovador | Ante un problema o una situación difícil, propone nuevas soluciones y aporta ideas creativas que resultan eficaces.  |
| Creativo          | Utiliza ideas innovadoras para comunicarse. Ofrece respuestas únicas y adapta el lenguaje para hacer el contenido más relevante e impactante para el cliente.  |
| Intelectual      | Ofrece respuestas detalladas y fundamentadas. Proporciona explicaciones detalladas basadas en hechos y razonamientos, atendiendo las necesidades de los clientes que desean más claridad y comprensión.  |

En la sección **Instrucciones generales** puedes agregar directrices que determinan cómo actuará tu agente.

Si agregaste una instrucción y quieres borrarla, solo tienes que hacer clic en el botón de <i class="far fa-trash-alt" aria-hidden="true"></i> papelera al lado de la instrucción. Aparecerá un mensaje preguntándote si deseas remover la instrucción. Haz clic en `Remover` para borrarla o `Cancelar` si deseas conservarla. 

> ℹ️ No hay un límite para la cantidad de instrucciones que puedes ingresar.

Para guardar las características de tu agente, haz clic en el botón `Guardar cambios` en la esquina derecha de la pantalla.

## Agentes

En esta página puedes asignar y probar agentes para tu tienda.

Para saber más, consulta [Cómo asignar y probar un agente](/es/tutorial/atribuir-e-testar-agentes-no-agent-builder--41beBpRcBouxMywt6dUW2z).

## Conocimientos

En esta página puedes agregar archivos, sitios web y textos a la base de conocimientos de tu agente. Los agentes van a utilizar los datos de estos documentos para responder a los usuarios.

### Archivos

Para agregar un archivo a la base de datos, haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar archivo`.

> ⚠️ Solo se admiten archivos con extensión `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` o `.xlsx` y de hasta 50 MB de tamaño.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"</i>tres puntos junto al nombre del archivo puedes:

- Ver detalles (como la fecha en que se agregó y el contenido).
- Descargar el archivo.
- Remover archivo.

También puedes usar el campo de búsqueda para encontrar un archivo.

### Sitios web

Para agregar un sitio web a la base de datos del agente sigue los pasos a continuación:

1. Haz clic en <i class="fas fa-plus" aria-hidden="true"></i>`Agregar sitio web`.
2. Luego, copia la URL del sitio web que deseas añadir y pégala en el campo vacío.
3. Por último, haz clic en `Finalizar`.

Haciendo clic en los <i class="fas fa-ellipsis-v" aria-hidden="true"></i> tres puntos junto al sitio web, puedes:

- Ver detalles (como la fecha en que se agregó y el contenido).
- Acceder al sitio web.
- Remover el sitio web.

También puedes usar el campo de búsqueda para encontrar un sitio web.

### Textos

En esta página puedes ingresar contenido e información en el cuadro de texto **Escribir contenido.**

Después de ingresar un texto, haz clic en `Guardar cambios`. 

## Ajustes

En esta página puedes cambiar la configuración de tus agentes.

### Configuración

Debajo de **Vista previa de los agentes** hay dos botones de alternancia:

- **Feedback progresivo de los agentes:** activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> si deseas que el agente envíe actualizaciones en tiempo real al usuario mientras redacta la respuesta final. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>. 

![ES GIF Feedback progressivo dos agentes](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/agent-builder/informacion-general-de-agent-builder_1.gif)

- **Formato de mensaje múltiple:** activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> si quieres que el agente envíe varios mensajes, como respuestas rápidas, listas, catálogo. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

![formato de mensaje múltiple](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/agent-builder/informacion-general-de-agent-builder_2.png)

Debajo de **Soporte humano** hay un botón de alternancia:

- **Soporte humano:** activa el botón de alternancia <i class="fas fa-toggle-on" aria-hidden="true"></i> para que el agente pueda transferir la conversación a un especialista humano. De lo contrario, deja el botón de alternancia desactivado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

En la caja de texto **¿Cuándo debe el agente transferir la conversación a una persona?**, agrega una frase o texto que ejemplifique en qué momento deberá transferir la conversación.

### Credenciales

En esta sección puedes ver las credenciales utilizadas por los agentes oficiales y por los agentes personalizados.

> ℹ️ Aprende más en [Agentes oficiales de Weni by VTEX y sus credenciales](/es/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

### Historial de cambios

En esta sección puedes consultar los cambios realizados en los agentes, quién los hizo y la fecha de modificación.

Los logs indican:

- Si se incluyeron, cambiaron o eliminaron instrucciones.
- Si se incluyó, cambió o removió contenido de conocimiento.
- Si se cambió el nombre, la función u objetivo del agente.

También puedes utilizar el cuadro de filtro de la derecha para ver el tipo de cambio, por ejemplo:

- Todos los cambios
- Cambios de personalización
- Cambios de contenido
- Cambios de acciones
- Cambios de configuración
