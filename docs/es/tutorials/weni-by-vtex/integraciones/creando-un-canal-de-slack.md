---
title: 'Creando un Canal de Slack'
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

### Aprende a crear un canal en Slack

1. Con tu cuenta y workspace ya creados, accede a <https://api.slack.com/apps> y pulsa el botón para crear una nueva aplicación.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_1.png)

2. Selecciona la opción **From scratch**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_2.png)

3. Nombra la aplicación y selecciona el workspace.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_3.png)

4. En **App Home**, haz clic en el botón indicado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_4.png)

5. Se abrirá una nueva ventana, desplázate hacia abajo hasta \*\*Scopes\*\* y haz clic en el botón indicado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_5.png)

6. Para el **Bot Token Scopes**, añade los siguientes permisos: `chat:write`, `files:read`, `files:write`, `users:read`.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_6.png)

7. Para el **User Token Scopes**, añade los siguientes permisos: `files:read` e `files:write`.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_7.png)

8. Desplázate hacia arriba hasta encontrar el botón **Install to Workspace** y haz clic en él para instalar la aplicación del bot en tu workspace.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_8.png)

9. Se abrirá una nueva ventana. Haz clic en el botón **Permitir**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_9.png)

10. En **OAuth \& Permissions**, copia y guarda el **Bot User OAuth Token** y el **User OAuth Token**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_10.png)

11. En **Basic Information**, copia y guarda el **Verification Token**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_11.png)

12. En la plataforma, accede a tu proyecto, haz clic en **Aplicaciones** > **Descubrimientos** > **App Slack** > **Añadir**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_12.png)

13. Después de añadir la aplicación, ve a **Mis Aplicaciones** y haz clic en el **App**. Se abrirá una nueva ventana.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_13.png)

14. Rellena el formulario con la información que copiaste durante la configuración del bot en Slack.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_14.png)

15. Después de completar el formulario de registro, copia la URL que aparecerá en la pantalla de configuración del canal en la pestaña ""Otras aplicaciones"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_15.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_16.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_17.png)

16. En las configuraciones del bot en Slack, haz clic en **Event subscription** > **Habilita el botón** > Pega la **URL**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_18.png)

17. Haz clic en **Subscribe to bot events** y añade los siguientes eventos:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_19.png)

18. Después de guardar los cambios, aparecerá una barra amarilla. Haz clic en el enlace indicado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_20.png)

19. Se abrirá una nueva ventana. Haz clic en **Permitir**.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_21.png)

20. Haz clic en **App Home**, desplázate hacia abajo y marca la casilla indicada.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_22.png)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_23.png)

# **Cómo activar respuestas rápidas/botones en Slack**

En Slack, debes habilitar el envío de respuestas rápidas. Ve a **Features** > **Interactivity \& Shortcuts**. En la pestaña de **Interactivity**, añade en el campo **Request URL** la URL de callback del Flows.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creando-un-canal-de-slack_24.png)
