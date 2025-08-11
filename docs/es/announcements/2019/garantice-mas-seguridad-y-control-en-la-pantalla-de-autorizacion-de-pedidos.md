---
title: 'Garantice más seguridad y control en la pantalla de Autorización de Pedidos'
id: 2CQWK0yFoBVjCHQGvChC7B
status: PUBLISHED
createdAt: 2019-06-06T17:24:29.977Z
updatedAt: 2021-03-22T20:31:43.835Z
publishedAt: 2021-03-22T20:31:43.835Z
contentType: updates
productTeam: Post-purchase
author: 5DnIDwto7E6PRpdH1Kpdyu
slugEN: ensure-more-safety-and-control-on-your-order-authorization-screen
locale: es
legacySlug: garanta-mais-seguranca-e-controle-na-tela-de-autorizacao-de-pedidos
announcementImageID: ''
announcementSynopsisES: 'Posibilidad de limitar perfiles de acceso a la pantalla de Autorización de Pedidos'
---

> ⚠️ A partir del 25 de junio de 2019, el usuario que no tenga acceso vinculado al perfil con el producto `Order Authorization` no tendrá permiso para visualizar o editar la pantalla Autorización de Pedidos.

Con el fin de garantizar una mayor seguridad, creamos la posibilidad de limitar perfiles de acceso a la pantalla de Autorización de Pedidos, permitiendo que solo algunos usuarios puedan visualizar o editar las informaciones. Para saber más sobre la Autorización de Pedidos, acceda a  nuestro [comunicado sobre el lanzamiento de la feature](https://help.vtex.com/es/announcements/aumente-sus-ventas-con-la-nueva-pantalla-autorizacion-de-pedidos--7EXIgaESHfI46lkaZw9jrQ) o el [tutorial que explica su funcionamiento](https://help.vtex.com/es/tutorial/como-funciona-la-autorizacion-de-pedidos--3MBK6CmKHAuUjMBieDU0pn).
  
## Principales Ventajas 

Ahora es posible restringir el acceso a la funcionalidad, evitando que usuarios sin permiso aprueben pedidos o modifiquen las reglas de autorización. Además, esta nueva versión asegura un mayor control sobre los cambios que se realizan en la página Autorización de Pedidos, ya que es posible elegir quién accede y quién edita.

## ¿Qué necesita hacer?

Si desea permitir que un usuario visualice o modifique las reglas de la pantalla de Autorización de Pedidos, deberá asociar a este usuario a un perfil con acceso al recurso `Order Authorization`.
Para hacer esto es necesario añadir un producto llamado `Order Authorization` al perfil deseado. Para esto, debe acceder a:

 1. Gestión de la cuenta
 2. Perfiles de acceso
 3. Haga clic en **Nuevo perfil** o haga clic en algún perfil ya registrado.
 4. Haga clic en **Configurar otro producto**.
 5. En el menú desplegable, seleccione la opción `Order Authorization`.
 6. Elija el tipo de permiso que desea: `Save Configuration`, para permitir al usuario editar y guardar modificaciones, o `View Configuration`, para permitirle la visualización de la página de Autorización de Pedidos.
 7. Haga clic en **Guardar**.

![GIT-OrderAutho.es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/announcements/2019/garantice-mas-seguridad-y-control-en-la-pantalla-de-autorizacion-de-pedidos_1.gif)

Después de añadir este nuevo producto a un perfil, asegúrese de que los usuarios deseados están asociados a este perfil de acceso.
