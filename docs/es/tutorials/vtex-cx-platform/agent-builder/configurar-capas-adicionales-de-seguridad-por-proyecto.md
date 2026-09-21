---
title: 'Configurar capas adicionales de seguridad por proyecto'
createdAt: 2026-09-10T14:30:00.000Z
updatedAt: 2026-09-11T13:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-extra-safety-guardrails-per-project
locale: es
---

Las **capas adicionales de seguridad** son capas adicionales de bloqueo aplicadas sobre la seguridad nativa del agente orquestador (manager) de Agent Builder para temas sensibles como política, salud, contenido sexual y discurso de odio. Hasta ahora, el tratamiento de estos temas dependía únicamente del modelo de IA en uso. Con la configuración por proyecto, tú decides qué temas el agente debe rechazar y qué mensaje recibe el cliente cuando un tema es bloqueado.

>ℹ️ Esta configuración se aplica a todos los agentes del proyecto al mismo tiempo.

En esta guía aprenderás a activar o desactivar el bloqueo de cada tema sensible y a definir el mensaje de bloqueo de tu proyecto.

## Cómo funcionan las capas adicionales de seguridad

Ten en cuenta los siguientes comportamientos al configurar los guardrails de tu proyecto:

- **Capa extra de bloqueo:** los guardrails no sustituyen la seguridad nativa del agente orquestador. Con el bloqueo de un tema activado (**Extra block on**), el agente rechaza el asunto y responde con el mensaje de bloqueo configurado. Con el bloqueo desactivado (**Extra block off**), la capa extra se elimina, pero los límites de seguridad nativos del agente continúan aplicándose.
- **Catálogo fijo de temas:** los temas disponibles son definidos y mantenidos por VTEX CX. No es posible crear temas personalizados, solo activar o desactivar el bloqueo de cada uno de ellos.
- **Configuración por proyecto:** los temas activados y el mensaje de bloqueo se aplican de forma uniforme a todos los agentes del proyecto.
- **Mensaje de bloqueo único:** el mensaje es el mismo para todos los temas. El mensaje predeterminado es "No puedo hablar sobre este tema".
- **Predeterminado por tipo de proyecto:** los proyectos creados antes de la funcionalidad tienen todos los temas desactivados, sin impacto en los flujos actuales. Los proyectos nuevos tienen todos los temas activados desde su creación.

### Temas disponibles

| Tema | Qué se bloquea |
| :--- | :--- |
| **Política** | Opiniones políticas, partidos, elecciones o temas partidarios. |
| **Salud física** | Diagnósticos, síntomas, tratamientos o consejos médicos. |
| **Contenido sexual** | Descripciones o imágenes sexuales explícitas o gráficas. |
| **Prejuicio** | Afirmaciones prejuiciosas sobre grupos con base en identidad u origen. |
| **Odio** | Discurso de odio o discriminatorio contra personas o grupos. |
| **Religión** | Doctrinas, prácticas religiosas o comparaciones entre religiones. |
| **Suicidio** | Ideación suicida, métodos o discusiones relacionadas. |
| **Autolesión** | Comportamientos o métodos de autolesión no suicida. |
| **Creencias** | Visiones del mundo, ideologías o convicciones filosóficas personales. |
| **Identidad de género** | Identidad de género, expresión de género o temas de transición. |
| **Relaciones sexuales** | Relaciones y comportamientos románticos o sexuales. |

#### Inyección de prompt

La capa **Inyección de prompt** funciona de forma diferente a los demás temas. Cuando está activada, el agente rechaza intentos de sobrescribir las instrucciones del orquestador o hacerlo actuar fuera de su función, pero la respuesta no utiliza el mensaje de bloqueo configurado: quien gestiona la respuesta es el propio agente orquestador. Cuando está desactivada, la resistencia nativa del agente a este tipo de manipulación continúa aplicándose, pero la protección extra deja de bloquear intentos que el modelo permita pasar.

### Configurar los temas bloqueados

Para activar o desactivar el bloqueo de temas sensibles en tu proyecto, sigue los pasos a continuación:

1. Accede al proyecto deseado en VTEX CX Platform.
2. En **Agent Builder**, haz clic en `Mis agentes`.
3. Haz clic en `Editar instrucciones`.
4. En la sección **Capas adicionales de seguridad**, haz clic en `Configurar`. El panel se abre con la lista de temas.
5. Utiliza el botón de alternancia para activar <i class="fas fa-toggle-on" aria-hidden="true"></i> los temas que el agente debe rechazar o desactivar <i class="fas fa-toggle-off" aria-hidden="true"></i> los temas que el agente puede abordar.
6. (Opcional) En **Intentos de manipulación**, utiliza el botón de alternancia para activar o desactivar **Inyección de prompt**.
7. Haz clic en `Guardar`.
8. Si desactivaste algún tema, se muestra una ventana de confirmación con los nombres de los temas afectados. Para confirmar, haz clic en `Remover`.

### Configurar el mensaje de bloqueo

El mensaje de bloqueo es el texto que el cliente recibe cuando aborda un tema con bloqueo activado. Para editarlo, sigue los pasos a continuación:

1. Accede al proyecto deseado en VTEX CX Platform.
2. En **Agent Builder**, haz clic en `Mis agentes`.
3. Haz clic en `Editar instrucciones`.
4. En la sección **Capas adicionales de seguridad**, haz clic en `Configurar`. El panel se abre con la lista de temas.
5. En **Mensaje de bloqueo**, escribe el mensaje que el cliente recibirá.
6. Haz clic en `Guardar`.

Después de guardar, el nuevo mensaje se utiliza en todos los agentes del proyecto, en todos los temas bloqueados, excepto cuando **Inyección de prompt** está activada.

Para saber más sobre los agentes, consulta [Agent Builder - Información general](https://help.vtex.com/es/docs/tutorials/agent-builder-informacion-general).
