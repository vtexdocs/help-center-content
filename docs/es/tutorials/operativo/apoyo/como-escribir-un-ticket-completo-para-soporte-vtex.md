---
title: 'Buenas prácticas para abrir un ticket con el soporte VTEX'
id: 6u4ehk6F0ksuDgYuCbFDRX
status: PUBLISHED
createdAt: 2023-03-23T22:00:24.560Z
updatedAt: 2025-02-27T12:14:39.320Z
publishedAt: 2025-02-27T12:14:39.320Z
firstPublishedAt: 2023-03-23T22:57:50.828Z
contentType: tutorial
productTeam: Others
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: writing-an-effective-ticket-to-vtex-support
legacySlug: como-escribir-un-ticket-completo-para-soporte-vtex
locale: es
subcategoryId: 1yB08KlKzqJOdc0bn38HaY
---

Todos los clientes y partners tienen acceso al servicio prestado por el equipo de especialistas de [soporte VTEX](/es/docs/tutorials/como-funciona-el-soporte-de-vtex). Para ponerse en contacto con ellos, debes abrir un ticket a través del sistema de tickets.

Los especialistas están preparados para proporcionar la mejor experiencia posible para solucionar los tickets. Sin embargo, para garantizar un servicio más rápido y objetivo, hay algunas guías que debes seguir al abrir un ticket.

Recuerda que mientras más contexto los especialistas tengan, más rápido podrán encontrar una solución al problema.

Este artículo es una guía para que los clientes y partners abran los tickets con información pertinente para agilizar el proceso de investigación de nuestros especialistas. Se divide en las siguientes secciones:

- [Antes de abrir un ticket](#antes-de-abrir-un-ticket)
- [Rellenar un ticket](#rellenar-un-ticket)

Para aprender a abrir un ticket en VTEX, consulta el artículo [Abrir tickets para el soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex).

## Antes de abrir un ticket

Antes de abrir un ticket, verifica si el problema está relacionado con las personalizaciones de la tienda. Si el origen del problema es una personalización, debes ponerte en contacto con el equipo responsable de la misma. 

### Carrito y Checkout y Tiendas en CMS

Es importante comprobar que el problema se produce sin personalizaciones activas en la tienda. Para realizar esta prueba, desactiva las personalizaciones (JS y CSS) e intenta reproducir el error según se explica en el artículo [Cómo bloquear personalizaciones para investigar problemas en el frontend de la tienda](/es/faq/como-bloquear-personalizaciones-para-investigar-problemas-en-el-front-end-de-la-tienda). 

### Store Framework
Para comprobar si el problema está asociado a IO, sigue los pasos a a continuación:

1.	Abre la línea de comandos e inicia sesión en tu tienda utilizando VTEX IO CLI.
2. Accede a un workspace de desarrollo ejecutando el siguiente comando:
    ```
    vtex use {workspace}
    ```
3.	Si tu tienda tiene un tema de Store Framework instalado, desinstálalo utilizando el siguiente comando:
    ```
    vtex uninstall {tema}
    ```
    > ℹ️ Puedes comprobar si hay algún tema instalado utilizando el comando `vtex list`, que muestra una lista de todas las aplicaciones instaladas en la tienda.
4.	Clona el tema predeterminado de Store Framework en tu computadora.
5.	En la línea de comandos, accede a la carpeta del tema predeterminado.
6.	Ejecuta el comando:

    ```
    vtex link
    ```

    > ⚠️ Si tu tienda no tiene la aplicación Reviews and Ratings instalada, puede aparecer un error al intentar establecer el vínculo. Para evitar este problema, remueve esta aplicación de la lista de `peer dependencies` del archivo `manifest.json` del tema predeterminado.

7.	Accede al storefront de tu workspace mediante la URL:
    ```
    https://{workspace}--{nombreDeLaCuenta}.myvtex.com
    ```
8.	Intenta reproducir el error.

Si el error no se produce después del bloqueo de los archivos o en el tema predeterminado de Store Framework, el error está asociado a las personalizaciones del sitio web. Para solucionarlo, debes ponerte en contacto con el equipo responsable del frontend de tu tienda.

## Rellenar un ticket

Si, después de seguir todos los pasos de troubleshooting indicados anteriormente, el problema persiste, abra un ticket con el [Soporte VTEX](/es/support?/cultureInfo=pt-br) siguiendo las indicaciones de la tabla a continuación.

| Información | Guías |
| ----------- | ----------- |
| Asunto y descripción del problema |  - Resume el problema o duda en pocas palabras. Rellena el campo **Asunto de la solicitud** de forma concisa y directa para ayudar al equipo de especialistas a entender rápidamente el escenario.   - Rellena el campo **Asunto de la solicitud** con una descripción completa de lo observado e incluye qué, cómo y dónde está ocurriendo el problema para que el equipo de especialistas pueda investigar y reproducir el escenario. No olvides informar si los pasos para reproducir el problema incluyen alguna acción atípica que se deba realizar o algún permiso de acceso restringido.   |
| Pruebas | Incluye cualquier material que permita observar el problema, si está disponible. Por ejemplo, capturas o grabaciones de pantalla, [archivos HAR](/es/docs/tutorials/generar-archivo-har), logs generados por la plataforma, respuestas del servidor o el texto o ID del error mostrado. |
| Escenario esperado | Proporciona los detalles del escenario esperado, en comparación con lo que está ocurriendo. |
| Pruebas y validaciones | Si ya intentaste solucionar el problema, detalla las acciones que ya hayas realizado, qué documentación consultaste y los resultados. |
| Alcance del ticket |  - No abordes más de un problema en un mismo ticket.   - No crees más de un ticket para el mismo problema.  |
| Prioridad | 
Comprueba la [prioridad](/es/tutorial/vtex-support-brazil--bxOl9e62rq0ZZMsGodchd#prioridade-de-chamados) según la naturaleza del problema. Lea mas en [¿Como funciona el soporte de VTEX?](/es/faq/como-funciona-el-soporte-de-vtex--3kACEfni4m8Yxa1vnf2ebe?&utm_source=autocomplete)|
 | Información pertinente sobre el producto | 
Consulta la siguiente tabla para ver la información pertinente dependiendo del producto en el que se produzca el error.

### Información pertinente sobre el producto

Hay varios escenarios que pueden dar lugar a la apertura de un ticket. En esta sección, se enumeran los escenarios más comunes y la información básica necesaria para abrir un ticket en cada uno.

Puedes adaptar esta información a tu escenario específico y también utilizarla como guía en tu propia investigación antes de abrir un ticket.

| Escenarios | Información |
| ----------- | ----------- |
| Pedidos |  - ID del pedido o ` orderForm `.   - URL del pedido en ** Gestión de pedidos ** en o ** Bridge ** (para los pedidos de marketplaces con integraciones nativas).  |
| Checkout |  - URL del carrito generada por [Cartman](/es/docs/tutorials/configurar-cartman).   - ID de los SKU y código postal para reproducir el carrito. 
| Logística |  - ID del seller.   - URL del almacén, muelle o transportadora del seller.   - Información para simular el envío, como ID de los SKU y código postal.  |
| Pagos |  - ID de la transacción.   - Link de la transacción al acceder al Admin VTEX en * Pagos > Transacciones. * 
| VTEX IO |  - Nombre y versión de la aplicación utilizada.   - Workspace utilizado.   - Archivo ZIP con el [store-theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-3-settingyourstoretheme) en caso de tema vinculado y no instalado.  |
| Promociones |  - Nombre de la promoción.   - URL de la promoción.   - Producto y código postal aplicables a la promoción para las pruebas.  |
| Integraciones (aplicable a los partners de integración) |  - Explicación del producto y su función en VTEX.   - Tu objetivo final antes de que ocurriera el problema.   - En caso de llamadas fallidas a las API VTEX: endpoint utilizado, cuerpo del request y cuerpo de la respuesta.   - ID y URL del afiliado (si el problema es la integración con un marketplace externo). 

#### Más información

- [Abrir un ticket para el soporte VTEX](/es/docs/tutorials/abrir-tickets-para-el-soporte-vtex)
- [¿Cómo funciona el soporte de VTEX?](/es/docs/tutorials/como-funciona-el-soporte-de-vtex)
