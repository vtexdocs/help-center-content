---
title: 'Creación de un canal de Microsoft Teams'
id: 6Of4QOVgAa95Z2QjZZYeDR
status: PUBLISHED
createdAt: 2025-09-15T14:44:39.171Z
updatedAt: 2025-10-03T14:20:32.801Z
publishedAt: 2025-10-03T14:20:32.801Z
firstPublishedAt: 2025-10-03T14:20:32.801Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-a-microsoft-teams-channel
legacySlug: creacion-de-un-canal-de-microsoft-teams
locale: es
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

### **Creación de una Aplicación en Azure**

1. Para crear tu aplicación de bot, dirígete a <https://portal.azure.com/>. Necesitarás crear una cuenta si aún no tienes una.
2. Después de iniciar sesión en tu cuenta, selecciona **Crear un recurso**.
3. Busca **Azure Bot** en el cuadro de búsqueda.
4. Selecciona **Azure Bot** en el marketplace.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_1.png)

5. Selecciona **Crear**.
6. Ingresa el nombre identificador para el bot en el campo de identificación.
7. Selecciona tu firma de la lista; por defecto, parecerá una firma ya creada.
8. Selecciona tu grupo de recursos o crea uno nuevo.
9. Si deseas crear un grupo de recursos, selecciona Crear Nuevo, ingresa el nombre del recurso, selecciona Aceptar y elige la ubicación requerida en la lista desplegable de Ubicación del Nuevo Grupo de Recursos.

Selecciona el tipo de aplicación; se recomienda multiinquilino. Luego, selecciona Revisar \+ Crear.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_2.png)

10. Selecciona Crear si la validación es aprobada. Tomará unos momentos para que tu servicio de bot sea aprovisionado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_3.png)

11. Selecciona Ir al recurso. ¡Ahora tu aplicación está creada!

#### **Para crear el secreto de cliente**

1. Desde Configuración, selecciona Configuración. Guarda el ID de aplicación de Microsoft (ID de cliente) para referencia futura.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_4.png)

2. Selecciona Administrar junto al ID de aplicación de Microsoft.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_5.png)

3. En la sección Secretos de Cliente, selecciona Nuevo Secreto de Cliente. Aparecerá la ventana Agregar un Secreto de Cliente.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_6.png)

4. Ingresa una Descripción y un período para la expiración del secreto, luego selecciona Agregar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_7.png)

5. Selecciona Copiar al portapapeles en la columna de Valor y guarda el ID del secreto de cliente para referencia futura.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_8.png)

6. Necesitas buscar un dato más que necesitarás para la creación del canal en la plataforma de Weni. Para hacerlo, regresa a Inicio y selecciona tu bot. Ve a Información general en el menú de la izquierda y luego selecciona Vista JSON. Se abrirá un JSON con información sobre tu aplicación; busca el tenant id y guarda el valor.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_9.png)

#### **Para agregar el canal de Microsoft Teams**

1. Ve a Inicio.
2. En la sección de Recursos Recientes, abre tu bot.
3. Selecciona Canales en el panel de la izquierda y elige Microsoft Teams de la lista de canales disponibles.

#### **Configurar el perfil del bot**

1. Si deseas configurar el perfil del bot, en tu bot ve a Perfil del Bot en el menú de la izquierda y configúralo como desees. Puedes agregar fotos de perfil y otra información.

#### **Para agregar el canal de Microsoft Teams a tu bot**

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_10.png)

1. Selecciona la casilla para aceptar los términos de servicio y selecciona Aceptar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_11.png)

2. Selecciona Guardar.

#### **Creación de un Canal en la Plataforma de Weni**

1. Después de iniciar sesión en la plataforma, elige tu organización y proyecto, y ve a Configuración.
2. Selecciona Agregar Canal.
3. En la lista de canales, selecciona Teams.
4. Para conectar un canal, necesitarás la información sobre la aplicación que creaste anteriormente (nombre del bot, id del bot, id de la aplicación, contraseña de la aplicación y tenant id).
5. Ingresa el nombre que diste a tu bot al crear la aplicación en el campo Nombre del Bot.
6. En Id del Bot ingresa el ID de Aplicación que guardaste anteriormente al crear la aplicación.
7. En Id de Aplicación ingresa el ID de Aplicación nuevamente.
8. En Contraseña de la Aplicación ingresa el Secreto de Cliente que creaste anteriormente.
9. En Tenant id ingresa el valor de tenant id que guardaste anteriormente.
10. Ahora haz clic en Enviar.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_12.png)

11. ¡Ahora tu canal está creado!
12. En la página del canal a la que serás dirigido justo después de hacer clic en Enviar, tendrás el ID de ese canal, necesitaremos ese valor. Para obtenerlo, puedes copiar el ID largo que aparece al final de la URL de esta página. Después de leer/copiar todo este ID compuesto de números, letras y guiones, guárdalo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_13.png)

#### **Configurar el Endpoint en la Aplicación**

1. Regresa a Azure, en Inicio selecciona tu bot en Recursos Recientes y luego ve a Configuración en el menú de la izquierda.
2. En Endpoint, agrega la URL de abajo; en \[CHANNEL ID] coloca el ID que guardaste en el paso anterior.

​https://new.push.al/c/tm/\[CHANNEL ID]/receive

Ejemplo: [https://new.push.al/c/tm/37b755f9-2d97-48fd-8c46-6f0f4d102d16/receive](https://new.push.al/c/tm/37b755f9-2d97-48fd-8c46-6f0f4d102d16/receive)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/weni-by-vtex/integraciones/creacion-de-un-canal-de-microsoft-teams_14.png)

#### **Configurar el bot en Teams**

1. En la esquina inferior izquierda, selecciona Aplicaciones.
2. Usa la barra de búsqueda a la izquierda y busca App Studio. Selecciónalo, instálalo y luego haz clic en abrir.
3. Selecciona Crear una nueva aplicación.
4. En Detalles de la Aplicación, ingresa todos los datos que ya tienes, como el nombre.
5. En Identificación, ingresa el ID de la Aplicación; en Nombre del Paquete, ingresa un nombre que haga referencia a tu aplicación, por ejemplo: com.microsoft.teams.devapp
6. Para la versión, usa algo como v1\.0\.0
7. En Descripción, ingresa una descripción de tu aplicación, indicando lo que hace y para quién lo hace.
8. En Información del Desarrollador, ingresa los datos de tu empresa, como el nombre y el sitio web.
9. En URLs de la Aplicación, ingresa la URL de los términos de privacidad de tu empresa y en términos de uso ingresa la URL de tus términos.
10. En Branding, actualiza las imágenes de perfil que deseas que tenga tu bot, haz clic en actualizar y elige tus imágenes.
11. En el paso 2, bajo Capacidades, puedes establecer algunas especificaciones para tu bot; este paso no es necesario para que tu bot funcione con nuestra plataforma, por lo que omitiremos este paso.
12. Ahora, en el paso 3 del menú izquierdo, haz clic en Dominios y Permisos.
13. En Dominios Válidos, ingresa el dominio de nuestra plataforma para que tu bot pueda integrarse con nosotros (<https://new.push.al>) y haz clic en Agregar.
14. En ID de la Aplicación AAD, ingresa tu Tenant ID que guardaste anteriormente.
15. Para el último paso, haz clic en Probar y Distribuir en el paso 3 del menú izquierdo.
16. Puedes publicar tu bot en el catálogo de tu organización para que todos los que participan en tu organización puedan agregar tu bot y enviarle mensajes. Para hacer esto, haz clic en Publicar aplicación en el catálogo de mi organización y luego en Enviar.

Importante: para que tu aplicación se publique en el catálogo de tu organización, deberá ser aceptada por el administrador de TI de tu organización. Una vez aceptada, tu bot estará disponible para instalación en el catálogo de tu empresa para todos los empleados que formen parte de ella.
