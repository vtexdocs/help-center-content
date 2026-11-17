---
title: 'Configurar barreras de seguridad por proyecto'
createdAt: 2026-09-10T14:30:00.000Z
updatedAt: 2026-09-11T13:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-extra-safety-guardrails-per-project
locale: es
---

Las **barreras de seguridad** son una capa adicional de bloqueo, aplicada sobre la seguridad nativa del agente orquestador (manager) de Agent Builder, para temas sensibles como política, salud, contenido sexual y discurso de odio. Hasta ahora, el tratamiento de estos temas dependía únicamente del modelo de IA en uso. Con la configuración por proyecto, tú decides los temas que debe rechazar el agente y el mensaje que recibe el cliente cuando se bloquea un tema.

>ℹ️ Esta configuración se aplica a todos los agentes del proyecto al mismo tiempo.

En esta guía aprenderás a activar o desactivar el bloqueo de cada tema sensible y a definir el mensaje de bloqueo de tu proyecto.

## Cómo funcionan las barreras de seguridad

Considera los siguientes comportamientos al configurar las barreras de seguridad de tu proyecto:

- **Capa adicional de bloqueo:** las barreras de seguridad no sustituyen la seguridad nativa del agente orquestador. Cuando activas el bloqueo de un tema (**Bloqueo extra activado**), el agente rechaza el tema y responde con el mensaje de bloqueo configurado. Cuando desactivas el bloqueo (**Bloqueo extra desactivado**), se remueve la capa adicional, aunque se siguen aplicando los límites de seguridad nativos del agente.
- **Catálogo fijo de temas:** los temas disponibles son definidos y mantenidos por VTEX CX Platform. No puedes crear temas personalizados, solo activar o desactivar el bloqueo de cada uno.
- **Configuración por proyecto:** los temas activados y el mensaje de bloqueo se aplican de forma uniforme a todos los agentes del proyecto.
- **Mensaje de bloqueo único:** el mensaje es el mismo para todos los temas. El mensaje predeterminado es "No puedo hablar sobre ese tema."
- **Predeterminado por tipo de proyecto:** los proyectos creados antes de la funcionalidad tienen todos los temas desactivados; los flujos actuales no se ven afectados. Los proyectos nuevos, o sin configuración previa, tienen todos los temas activados desde su creación.

### Temas disponibles

| Tema | Qué se bloquea |
| :--- | :--- |
| **Política** | Opiniones políticas, partidos, elecciones o temas partidistas. |
| **Salud física** | Diagnósticos, síntomas, tratamientos o consejos médicos. |
| **Contenido sexual** | Descripciones e imágenes sexuales explícitas o gráficas. |
| **Prejuicio** | Declaraciones prejuiciosas sobre grupos según identidad u origen. |
| **Odio** | Incitación al odio o a la discriminación contra personas o grupos. |
| **Religión** | Doctrinas, prácticas religiosas o comparaciones entre religiones. |
| **Suicidio** | Ideación suicida, métodos o discusiones relacionadas. |
| **Autolesión** | Conductas o métodos de autolesión no suicida. |
| **Creencias** | Cosmovisiones personales, ideologías o convicciones filosóficas. |
| **Identidad de género** | Identidad de género, expresión o temas de transición. |
| **Relaciones sexuales** | Relaciones y conductas románticas o sexuales. |

#### Inyección de prompt

La capa **Inyección de prompt** funciona de forma diferente a los demás temas. Cuando está activada, el agente rechaza intentos de sobrescribir las instrucciones del orquestador o de hacerlo actuar fuera de su rol, pero la respuesta no usa el mensaje de bloqueo configurado: quien gestiona la respuesta es el propio agente orquestador. Cuando está desactivada, la resistencia nativa del agente a este tipo de manipulación sigue vigente, pero la protección adicional deja de bloquear los intentos que el modelo permita pasar.

### Configurar temas bloqueados

Para activar o desactivar el bloqueo de temas sensibles en tu proyecto, sigue estos pasos:

1. Accede al proyecto deseado en VTEX CX Platform.
2. En **Agent Builder**, haz clic en `Mis agentes`.
3. Haz clic en `Editar instrucciones`.
4. En la sección **Barreras de seguridad**, haz clic en `Configurar`. Se abrirá un panel con la lista de temas.
5. Usa el botón de alternancia para activar <i class="fas fa-toggle-on" aria-hidden="true"></i> los temas que el agente debe rechazar o desactivar <i class="fas fa-toggle-off" aria-hidden="true"></i> los temas que el agente puede abordar.
6. (Opcional) En **Intentos de manipulación**, usa el botón de alternancia para activar o desactivar **Inyección de prompt**.
7. Haz clic en `Guardar`.
8. Si desactivaste algún tema, se muestra una ventana de confirmación con el nombre de los temas afectados. Para confirmar, haz clic en `Eliminar`.

### Configurar mensaje de bloqueo

El mensaje de bloqueo es el texto que recibe el cliente cuando aborda un tema con bloqueo activado. Para editarlo, sigue los pasos a continuación:

1. Accede al proyecto deseado en VTEX CX Platform.
2. En **Agent Builder**, haz clic en `Mis agentes`.
3. Haz clic en `Editar instrucciones`.
4. En la sección **Barreras de seguridad**, haz clic en `Configurar`. Se abrirá un panel con la lista de temas.
5. En **Mensaje de bloqueo**, ingresa el mensaje que recibirá el cliente.
6. Haz clic en `Guardar`.

Después de guardar, todos los agentes del proyecto usarán el nuevo mensaje para todos los temas bloqueados, excepto cuando la opción **Inyección de prompt** esté activada.

Para saber más sobre los agentes, consulta [Agent Builder - Información general](https://help.vtex.com/es/docs/tutorials/agent-builder-informacion-general).
