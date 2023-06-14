---
title: Añadir vendedores
id: 6C7mb1lDhueimseg6yIAki
status: DRAFT
createdAt: 2018-06-22T14:03:43.026Z
updatedAt: 2020-08-03T19:54:34.416Z
publishedAt: 
firstPublishedAt: 2018-06-22T14:25:56.326Z
contentType: trackArticle
productTeam: Shopping
slug: anadir-vendedores
trackId: t3DOYAJjWgqAMeAKq2MWS
trackSlugES: instore-setup
---

Si usted ha configurado su tienda utilizando el flujo de __Easy Setup__, tal vez ya haya creado un vendedor para acceder a inStore, pero cuando desee agregar nuevos vendedores, tendrá que hacerlo a través del módulo VTable en el Admin de VTEX.

Al entrar en el VTable (https://{{AccountName}}.myvtex.com/admin/vtable) usted verá dos aplicaciones, __Admin de las tiendas__ y __Admin de los vendedores__:

![inStore aplicacoes vtable](https://images.ctfassets.net/alneenqid6w5/6BRkoPO2cMOQkYkuSOeCO6/641c901771af479df13a487c123aff23/inStore_aplicacoes_vtable.png)

Haga clic en __Admin de los vendedores__ para abrir la tabla donde incluiremos un nuevo vendedor.

En el caso de que ya haya registrado un vendedor a través del __Easy Setup__, simplemente haga clic en __New line__, inserte los datos del nuevo vendedor, copie el ID de la Tienda de la línea superior y haga clic en __Save__, como muestra el siguiente vídeo (haga clic en la imagen de abajo para ver):

> __IMPORTANTE__: el e-mail de cada vendedor __NO__ puede ser el mismo utilizado en la plataforma VTEX, porque su e-mail de administrador tiene permisos que un vendedor no debería tener, por lo que es necesario utilizar algún otro e-mail sin privilegios en la plataforma.

![inStore adicionando vendedor](https://images.ctfassets.net/alneenqid6w5/3WGuWnOeY8emcmuIqcE0uE/74586856739dcee97163835710a85780/inStore_adicionando_vendedor.png)

Si ha saltado el paso de creación de vendedor en el __Easy Setup__ y no tiene ningún vendedor creado, usted necesitará recoger el ID de __Tienda__ en el __Admin de las Tiendas__ en el VTable.

Después de registrar el vendedor en el Admin de VTEX, él o ella tendrá que iniciar sesión en su e-commerce para crear una contraseña para acceder al inStore.

Para definir la contraseña de ese vendedor acceda al __admin__ de su cuenta: https://{{AccountName}}.myvtex.com/admin y luego siga este artículo: https://help.vtex.com/es/faq/como-recuperar-la-contrasena
__Cómo intente definir la contraseña directamente en el sitio del e-commerce, el acceso al inStore no funcionará.

<div class="alert alert-warning">
<strong>Importante</strong>: además de configurar el vendedor en VTable, es necesario crear el usuario en el Admin, asociandole el perfil <b>inStore Sales Person</b>.
