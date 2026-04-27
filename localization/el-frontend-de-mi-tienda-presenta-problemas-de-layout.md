---
title: "El frontend de mi tienda presenta problemas de layout"
createdAt: 2026-03-09T15:40:27.806Z
locale: es
slugEN: my-storefront-has-layout-issues
tags:
  - Frontend
  - CMS
  - Layout
---

Este artículo te ayuda a investigar problemas de layout en el frontend de tu tienda. Al seguir las instrucciones de esta guía podrás comparar diferentes versiones de la vitrina, aislar el origen de los problemas de layout y reunir evidencias para compartir con el Soporte de VTEX o con tu partner de implementación, si es necesario.

## Solución

Para investigar problemas de layout considera las siguientes soluciones:

- **[Bloquear personalizaciones para aislar problemas en el frontend](#bloquear-personalizaciones-para-aislar-problemas-en-el-frontend):** desactiva temporalmente las personalizaciones para comprobar si el problema es causado por código personalizado.
- **[Comparar diferentes versiones del frontend de tu tienda](#comparar-versiones-de-frontend):** compara el layout actual de tu tienda con una versión alternativa para comprobar si el problema está relacionado con alguna personalización específica.

### Bloquear personalizaciones para aislar problemas en el frontend

Esta solución te ayuda a comprobar si un problema de frontend está causado por código personalizado (por ejemplo, JavaScript, CSS o scripts de terceros), ya que, al bloquear las personalizaciones temporalmente, pruebas la tienda solo con el comportamiento nativo de VTEX.

Para ejecutar esta prueba debes remover las personalizaciones usando la herramienta de desarrollo nativa del propio navegador. Aquí mostraremos cómo hacerlo en el navegador Google Chrome, con la herramienta **DevTools**.

Para configurar [Chrome DevTools](https://developer.chrome.com/docs/devtools/) sigue los pasos a continuación.

1. Abre [Google Chrome](https://www.google.com/intl/es-419/chrome/) en tu computadora.
2. Haz clic en el botón `F12` de tu teclado o haz clic derecho con el mouse en cualquier parte de la pantalla y selecciona **Inspeccionar**.
3. Haz clic en los tres puntos verticales en la parte superior derecha de la página, como se indica en la imagen siguiente:
4. Selecciona **Más herramientas** y luego **Condiciones de la solicitud** para bloquear todas las personalizaciones hechas mediante CSS, JavaScript y Google Tag Manager.

![legado-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/legado-02.png)

5. En la pestaña **Condiciones de la solicitud**, haz clic en `Agregar regla` para definir el primer recurso que se va a bloquear. Para agregar más recursos, vuelve a hacer clic en `+` y una vez definido haz clic en `Agregar`. Esta configuración solo es necesario realizarla una vez en tu navegador. Incluye los siguientes ítems:

- `*:/arquivos/*.js`
- `*:/files/*js`
- `*:/arquivos/*.css`
- `*:/files/*.css`
- `*://www.googletagmanager.com/gtm.js*`

![request-conditions-02](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/shopping/request-conditions.png)

6. Marca la opción **Habilitar el bloqueo y la limitación** y marca todas las casillas junto a cada recurso configurado. Esta será la configuración predeterminada, con todas las opciones activadas para el bloqueo.
7. Ahora actualiza la página. Se mostrará sin los componentes personalizados.

Para volver a ver las personalizaciones, desmarca la opción **Habilitar el bloqueo y limitación** y actualiza la página.

Comprueba si el comportamiento no deseado que observaste inicialmente solo se produce con la personalización activa. Si es así, ponte en contacto con el equipo responsable de tu frontend para que verifique lo que está ocurriendo.

Si, aun con las personalizaciones bloqueadas, el comportamiento no deseado persiste, abre un ticket para el [Soporte de VTEX](https://supporticket.vtex.com/support).

### Comparar versiones de frontend

Esta solución debe usarse cuando deseas probar la URL de la página con problemas en el layout nativo de VTEX o con un layout diferente al actual, cambiando la plantilla o los controles. Para realizar esta prueba sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront > Layout > CMS** y crea una nueva plantilla en **HTML Templates**. Es importante que la nueva plantilla sea del mismo tipo que la plantilla actual utilizada en la página con problema. Por ejemplo, si el problema ocurre en una página de categoría, debes crear una nueva plantilla de categoría. Para más detalles sobre cómo crear una plantilla, consulta la guía [Crear o editar un template de página](https://help.vtex.com/es/docs/tutorials/como-crear-un-template-de-pagina).
2. En la plantilla creada, mantén la estructura básica del layout y utiliza solo los [controles nativos](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) necesarios para renderizar la página.
3. Accede a la sección de layouts en **CMS > Sites and Channels** y ubica la carpeta de la página con el problema. Por ejemplo, si el problema es en una página de categoría, debes:
   - Hacer clic en el sitio web deseado.
   - Hacer clic en la carpeta raíz (`/`).
   - Hacer clic en la carpeta **Categoría > @categoria@**.
   - En la ventana de al lado, hacer clic en `new layout` para crear un nuevo layout.
4. Asocia la plantilla creada al nuevo layout. Para más detalles, consulta la guía [Asociar un template con un layout](https://help.vtex.com/es/docs/tutorials/asociar-un-template-con-un-layout).
5. Ubica el LID en la sección **Properties** del nuevo layout.
6. Accede a la página con el problema y agrega el LID del layout creado como una `QueryString` (`?` o `&`) a la URL en la barra de direcciones del navegador.

Si el problema no ocurre en el layout nativo, indica que es debido a la personalización. Si el problema persiste abre un ticket con el [Soporte VTEX](https://supporticket.vtex.com/support).
