---
title: "Creando un canal de Slack"
id: 6At6Ne3yXdVJqEVR8mUzC8
status: PUBLISHED
createdAt: 2025-09-15T14:30:28.340Z
updatedAt: 2025-10-03T14:20:32.860Z
publishedAt: 2025-10-03T14:20:32.860Z
firstPublishedAt: 2025-10-03T14:20:32.860Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-slack-channel
legacySlug: creando-un-canal-de-slack
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

1. Con tu cuenta y workspace ya creados, accede a <https://api.slack.com/apps> y pulsa el botón para crear una nueva aplicación.
2. Selecciona la opción **From scratch**.
3. Nombra la aplicación y selecciona el workspace.
4. En **App Home**, haz clic en el botón indicado.
5. Se abrirá una nueva ventana, desplázate hacia abajo hasta **Scopes** y haz clic en el botón indicado.
6. Para el **Bot Token Scopes**, añade los siguientes permisos: `chat:write`, `files:read`, `files:write`, `users:read`.
7. Para el **User Token Scopes**, añade los siguientes permisos: `files:read` e `files:write`.
8. Desplázate hacia arriba hasta encontrar el botón **Install to Workspace** y haz clic en él para instalar la aplicación del bot en tu workspace.
9. Se abrirá una nueva ventana. Haz clic en el botón **Permitir**.
10. En **OAuth & Permissions**, copia y guarda el **Bot User OAuth Token** y el **User OAuth Token**.
11. En **Basic Information**, copia y guarda el **Verification Token**.
12. En la plataforma, accede a tu proyecto, haz clic en **Aplicaciones** > **Descubrimientos** > **App Slack** > **Añadir**.
13. Después de añadir la aplicación, ve a **Mis Aplicaciones** y haz clic en el **App**. Se abrirá una nueva ventana.
14. Rellena el formulario con la información que copiaste durante la configuración del bot en Slack.
15. Después de completar el formulario de registro, copia la URL que aparecerá en la pantalla de configuración del canal en la pestaña "Otras aplicaciones".
16. En las configuraciones del bot en Slack, haz clic en **Event subscription** > **Habilita el botón** > Pega la **URL**.
17. Haz clic en **Subscribe to bot events** y añade los siguientes eventos:
18. Después de guardar los cambios, aparecerá una barra amarilla. Haz clic en el enlace indicado.
19. Se abrirá una nueva ventana. Haz clic en **Permitir**.
20. Haz clic en **App Home**, desplázate hacia abajo y marca la casilla indicada.

## Cómo activar respuestas rápidas/botones en Slack

En Slack, debes habilitar el envío de respuestas rápidas. Ve a **Features** > **Interactivity & Shortcuts**. En la pestaña de **Interactivity**, añade en el campo **Request URL** la URL de callback del Flows.
