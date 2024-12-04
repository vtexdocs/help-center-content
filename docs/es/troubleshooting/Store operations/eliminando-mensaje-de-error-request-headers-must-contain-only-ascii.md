---
title: "Cómo remover el mensaje de error 'Request headers must contain only ASCII characters'"
id: 19psKZvLXrBqqK1bPaTIHG
status: PUBLISHED
createdAt: 2024-07-25T16:54:41.663Z
updatedAt: 2024-11-08T19:21:54.243Z
publishedAt: 2024-11-08T19:21:54.243Z
firstPublishedAt: 2024-07-25T21:21:03.197Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: removing-error-message-request-headers-must-only-contain-ascii
locale: es
legacySlug: eliminando-mensaje-de-error-request-headers-must-contain-only-ascii
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  Request headers, UTM, Javascript personalizado
---

El mensaje "__Request headers must contain only ASCII characters__" puede mostrarse en el navegador del usuario cuando esté navegando por la tienda e intente acceder a una nueva página o realizar una acción en el sitio web, como por ejemplo, agregar ítems al carrito.

Este escenario se produce si la página o funcionalidad solicitada contiene una cookie con caracteres especiales (no ASCII).

![ascii_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/eliminando-mensaje-de-error-request-headers-must-contain-only-ascii_1.png)

Según las normas de la [IETF](https://www.ietf.org/) (Internet Engineering Task Force), institución responsable de documentar los estándares utilizados en internet, las cookies deben estar compuestas únicamente por caracteres ASCII estándar y deben evitar incluir caracteres especiales (no ASCII). Para más información sobre los caracteres aceptados en cookies y encabezados, accede a [IETF - Request for Comments 7230 - Section 3.2.6 - Field Value Components](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2.6). 

## Soluciones

Para remover el mensaje de error y permitir que el usuario vuelva a acceder a la página o funcionalidad, deben realizarse las siguientes acciones:

- [Identificar cookies con caracteres especiales](#identificar-cookies-con-caracteres-especiales)
- [Desactivar cookies con caracteres especiales](#desactivar-cookies-con-caracteres-especiales)
- [Crear script para limpiar la caché](#crear-script-para-remover-cookies)

### Identificar cookies con caracteres especiales

En la página en la que se muestra el mensaje "__Request headers must contain only ASCII characters__", sigue los pasos a continuación para identificar la cookie que contiene caracteres especiales:

<blockquote><ui>1. Accede al <a href="https://help.vtex.com/pt/tutorial/products-and-skus-beta--2ig7TmROlirWirZjFWZ3By">DevTools</a> en tu navegador pulsando <b>F12</b> o haciendo clic con el botón derecho del mouse y eligiendo la opción <b>Inspect</b>.</ui>

  <blockquote><ui>2. En la barra superior de la pantalla, accede a la pestaña <b>Network</b> y ordena los requests haciendo clic en <b>Status</b>. La información <b>400</b> en el estado indica que la solicitud no se procesó correctamente, lo que puede deberse a errores como cookies incorrectas.</ui>  

![ascii 2ascii_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/eliminando-mensaje-de-error-request-headers-must-contain-only-ascii_2.png) 

<blockquote><ui>3. Haz clic en un request y después en la pestaña <b>Preview</b> para identificar si el error encontrado se refiere al mensaje "<b>Request headers must contain only ASCII characters</b>".</ui>

![ascii 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/eliminando-mensaje-de-error-request-headers-must-contain-only-ascii_3.png)

<blockquote><ui>4. Haz clic en la pestaña <b>Headers</b> y copia los datos de la cookie.</ui>  

![ascii 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/eliminando-mensaje-de-error-request-headers-must-contain-only-ascii_4.png)

<blockquote><ui>5. Accede a un <a href="https://pages.cs.wisc.edu/~markm/ascii.html">validador online de caracteres ASCII</a> e ingresa la información de la cookie. Si se identifican uno o varios caracteres especiales, los tipos y posiciones se mostrarán en la parte inferior del validador de caracteres.</ui>     

![ascii 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/troubleshooting/Store%20operations/eliminando-mensaje-de-error-request-headers-must-contain-only-ascii_5.png)

<blockquote><ui>6. Repite los pasos 3 a 5 con todos los requests de error para identificar los que contienen cookies con caracteres especiales.</ui>      

### Desactivar cookies con caracteres especiales

Una vez identificadas las cookies que contienen caracteres especiales, debe verificarse su origen para removerlas de la página. Las fuentes más comunes de cookies incorrectas son:

- [Parámetros UTMs](https://help.vtex.com/es/tutorial/que-son-las-utms-internas--5Pvo8ufYWs00AUeCCEY68a) creados en tu tienda o en campañas de anuncios de Google, Meta, entre otros, que contengan caracteres acentuados. Ejemplo de parámetro UTM utilizado en una fecha conmemorativa: `www.site.com?utm_source=día-de-la-madre`.
- Javascripts personalizados, donde las implementaciones de frontend utilizadas para almacenar datos u otros tipos de funciones pueden contener caracteres especiales.
- Scripts de clientes partners que crean cookies con caracteres especiales.

Una vez identifiques el origen de la cookie, realiza los procedimientos necesarios para removerla de la página o solicita al cliente partner que interrumpa el envío de la cookie a tu tienda.

### Crear script para remover cookies  

Al remover la cookie con caracteres especiales, la página o funcionalidad debería restaurarse y ya no se mostrará el mensaje "__Request headers must contain only ASCII characters__". Sin embargo, este escenario solo afectará a los nuevos usuarios de la página, es decir, aquellos clientes que aún no hayan accedido durante el tiempo en que la cookie incorrecta estuvo activa.

Los usuarios que accedieron a la página o funcionalidad mientras la cookie incorrecta estaba activa seguirán viendo en su navegador el mensaje de error "Request headers must contain only ASCII characters". Esto se debe a que la cookie se almacenó en la memoria caché del navegador del usuario.

Para resolver este problema y permitir que todos los usuarios accedan correctamente a la tienda, es necesario crear un script en la página que se ejecute en el navegador del usuario (lado del cliente) para que la cookie incorrecta expire.

El script debe configurar la cookie para que expire en una fecha previa (cualquier fecha anterior a la creación del script). Observa el ejemplo a continuación:

`document.cookie = "cookiename= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"`  

Si lo deseas, también puedes incluir las siguientes funciones en el script:
- Interceptar valores de cookies durante el request de la página
- Validar caracteres ASCII en las cookies
- Hacer que las cookies que contengan caracteres especiales expiren automáticamente
- Activar la recarga de la página mediante la función `window.location.reload()`  

>⚠️ Remover las cookies mediante script no es una solución definitiva. Como se describe en la sección **Desactivar cookies con caracteres especiales**, es necesario identificar su origen e interrumpir el proceso de envío de cookies con caracteres especiales.