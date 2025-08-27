---
title: 'Configurar PWA en tu tienda Store Framework'
id: 1xWVQTONeROlSOXG8lSyKV
status: PUBLISHED
createdAt: 2024-06-18T14:58:53.804Z
updatedAt: 2024-06-20T12:15:54.742Z
publishedAt: 2024-06-20T12:15:54.742Z
firstPublishedAt: 2024-06-18T15:49:26.862Z
contentType: tutorial
productTeam: Others
author: YRJ73j8mt38D5TUleocQB
slugEN: configuring-pwa-in-your-store-framework-store
legacySlug: configurar-pwa-en-tu-tienda-store-framework
locale: es
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

Las tiendas creadas con VTEX IO Store Framework incorporan de forma nativa una aplicación web progresiva (PWA), la cual brinda una experiencia de usuario similar a la de una aplicación nativa, pero se ejecuta directamente en un navegador web.

<div style="background-color:#DBEAFE; border-left: 2px solid ##1E3A8A; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Para tiendas CMS Portal Legado, consulta la guía [Cómo transformar el sitio web de mi tienda en una PWA](https://help.vtex.com/es/tutorial/how-to-turn-my-store-website-into-a-pwa--3i8VmYeToAUGKgo2kKK6I2).
</div>

Para configurar una PWA en tu tienda, accede a Configuración de la tienda > **Storefront > Tienda** en el Admin VTEX, y sigue los pasos que se indican a continuación:

1. Haz clic en la pestaña **PWA**.
2. Define **Color del tema**, **Color de fondo**, y agrega el **ícono del logotipo Android (512x512, PNG)** y **el del logotipo iOS (512x512, PNG)**. Los colores deben especificarse en código hexadecimal (por ejemplo, #F71963) y los íconos deben tener un tamaño de 512x512 px y una extensión `.png`.

  ![pwa-settings-1-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuraci%C3%B3n-de-la-tienda---storefront/configurar-pwa-en-tu-tienda-store-framework_1.png)

3. Desplázate hacia abajo hasta el campo **Otras configuraciones de PWA**. Haz clic en la flecha para mostrarlas.

  ![pwa-settings-2-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuraci%C3%B3n-de-la-tienda---storefront/configurar-pwa-en-tu-tienda-store-framework_2.png)

4. En **Otras configuraciones de PWA**, rellena los campos según las directrices que se indican a continuación:

    - **URL de inicio**: URL de la página de inicio de la PWA.
    - **Orientación de la pantalla**: formato en el que se muestra el contenido en la PWA. Se puede asignar uno de los siguientes valores: Cualquiera, Natural, Horizontal, Horizontal (primaria), Horizontal (secundaria), Vertical, Vertical (primaria), Vertical (secundaria).

    | **Orientación de la pantalla** | **Descripción** |
    |--------------------------------|-----------------|
    | Cualquiera                     | La página puede verse en cualquier orientación, y el contenido se ajusta automáticamente a la posición actual del dispositivo. |
    | Natural                        | Configuración predeterminada del dispositivo. |
    | Horizontal                     | El contenido solo se muestra en posición horizontal. Es útil para aplicaciones o juegos optimizados para una vista más amplia. |
    | Horizontal (primaria)          | Posición horizontal con la parte superior del dispositivo alineada a la izquierda. |
    | Horizontal (secundaria)        | Posición horizontal con la parte superior del dispositivo alineada a la derecha. |
    | Vertical                       | El contenido solo se muestra en posición vertical. Esta es la configuración predeterminada de la mayoría de las aplicaciones para teléfonos celulares. |
    | Vertical (primaria)            | En posición vertical, el botón de inicio o la parte inferior del dispositivo apunta hacia abajo. |
    | Vertical (secundaria)          | En posición vertical invertida, el botón de inicio o la parte inferior del dispositivo apunta hacia arriba. Es útil cuando los dispositivos se utilizan en posición contraria. |

    - **Visualización**: modos de visualización del contenido de la PWA. Se puede asignar uno de los siguientes valores: Pantalla completa, Independiente (agregar a la pantalla de inicio), UI minimalista (no admitida por Chrome), Navegador.

    | **Visualización**                     | **Descripción** |
    |---------------------------------------|-----------------|
    | Pantalla completa                     | La PWA ocupa toda la pantalla del dispositivo, ocultando todos los elementos de la interfaz de usuario del navegador, como la barra de direcciones y otras notificaciones del sistema. Es ideal para juegos o aplicaciones que requieren una inmersión total, maximizando el espacio disponible en pantalla. |
    | Independiente (agregar a la pantalla de inicio) | La PWA se comporta como una aplicación nativa ya que se ejecuta en una ventana independiente del navegador y no muestra los elementos usuales del mismo, como la barra de direcciones. Cuando se agrega a la pantalla de inicio del dispositivo, la presencia de la PWA es casi indistinguible de una aplicación nativa. |
    | UI minimalista (no admitida por Chrome) | La PWA muestra un mínimo de elementos de la interfaz de usuario del navegador, como la barra de direcciones y algunos controles adicionales. Es un término medio entre el modo Aplicación y el modo Navegador. |
    | Navegador                            | La PWA se abre como una página convencional del navegador, mostrando todas las funciones habituales, como la barra de direcciones, las pestañas y otros controles de la interfaz. No cambia la forma estándar en que el usuario interactúa con el contenido web y proporciona una experiencia menos inmersiva en comparación con otros modos de visualización. |

    - **Agregar a la pantalla de inicio**: cuando se activa, permite que la PWA la instale el usuario.
    - **Mostrar promt "Agregar a la pantalla de inicio"**: define el momento en que se le sugerirá al usuario instalar la PWA. Se puede asignar uno de los siguientes valores: En la primera visita, En el primer ítem agregado al carrito o Al finalizar la primera compra. Esta opción solo es aplicable cuando la opción **Agregar a pantalla de inicio** está activada.

    ![pwa-settings-3-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/configuraci%C3%B3n-de-la-tienda---storefront/configurar-pwa-en-tu-tienda-store-framework_3.png)

5. Haz clic en `Guardar`.

## Utilizar un service worker personalizado

Nuestro service worker (trabajador de servicios) admite pulsaciones nativas para instalar la aplicación en la primera visita, el primer artículo añadido al carrito o la primera compra. Puedes personalizar las notificaciones en la PWA de tu tienda mediante el uso de tu propio service worker, que operará en conjunto con el nuestro.

Para saber cómo crear tu propio service worker, consulta la documentación [Cómo instalar un service worker](https://help.vtex.com/es/tutorial/como-instalar-um-service-worker--2H057iW0mQGguKAciwAuMe).

Para aprender a utilizar el service worker builder para agrupar varios service workers en tu tienda, consulta la documentación [Using several service workers in your store](https://developers.vtex.com/docs/guides/vtex-io-documentation-using-several-service-workers-in-your-store).
