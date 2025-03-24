---
title: 'Ahora es posible restringir el acceso de los usuarios en la en la pantalla de Configuración del módulo Gestión de Pedidos'
id: 6z7TjQRMNWTmR1lKivjehn
status: PUBLISHED
createdAt: 2019-06-07T14:18:18.903Z
updatedAt: 2021-03-22T20:31:47.345Z
publishedAt: 2021-03-22T20:31:47.345Z
contentType: updates
productTeam: Others
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: 2019-06-07-you-can-now-restrict-user-access-to-the-settings-screen-on-the-orders
locale: es
legacySlug: ahora-es-posible-restringir-el-acceso-de-los-usuarios-en-la-en-la-pantalla
announcementImageID: ''
announcementSynopsisES: 'Posibilidad de limitar perfiles de acceso a la pantalla Confiuración'
---

>⚠️ A partir del 25 de junio de 2019, el usuario que no tenga acceso vinculado al perfil con el producto `Checkout` no tendrá permiso para editar la pantalla **Configuración** del modulo Gestión de pedidos.

Con el fin de garantizar una mayor seguridad, creamos la posibilidad de limitar perfiles de acceso en la pantalla **Configuración**, permitiendo que solo algunos usuarios editen las informaciones.

![2019-06-07 17 24 38-Configuración.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2019-06-07-ahora-es-posible-restringir-el-acceso-de-los-usuarios-en-la-en-la-pantalla_1.png)

## Principales ventajas

Ahora es posible restringir los accesos a la pantalla, evitando que usuarios sin permiso cambien informaciones como la cantidad mínima de artículos en el carrito o el valor mínimo del carrito. Este cambio asegura un mayor control de las alteraciones que se realizan, ya que es posible elegir quién edita.

## ¿Qué necesita hacer?

Si desea permitir que un usuario modifique las configuraciones en la pantalla **Configuración** , deberá asociar a este usuario a un perfil con acceso al recurso `Checkout`.

Para hacer esto es necesario añadir un producto llamado `Checkout` al perfil deseado. Para esto, debe acceder a:

 1. Gestión de la cuenta
 2. Perfiles de acceso
 3. Haga clic en **Nuevo Perfil** o haga clic en algún perfil ya registrado.
 4. Haga clic en **Configurar otro producto**.
 5. En el menú desplegable, seleccione la opción `Checkout`.
 6. Elija el tipo de permiso deseado: `Save Order Configuration`, para permitir al usuario editar la sección **Pedidos**, o `Save OrderForm Configuration`, para permitir al usuario editar la sección **Carrito**.
 7. Haga clic en **Guardar**

![GIT-Checkout.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2019-06-07-ahora-es-posible-restringir-el-acceso-de-los-usuarios-en-la-en-la-pantalla_2.gif)

Después de añadir este nuevo producto a un perfil, asegúrese de que los usuarios deseados están asociados a este perfil de acceso.
