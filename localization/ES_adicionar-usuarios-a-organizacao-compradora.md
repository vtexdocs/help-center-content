---
title: 'Agregar usuarios a la organización compradora'
createdAt: '2026-03-05T10:00:00.000Z'
updatedAt: '2026-03-05T10:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: adding-users-to-buyer-organization
locale: es
---

Este artículo explica cómo un **Organization Admin** puede crear un usuario miembro de una organización compradora con permisos específicos para realizar acciones en nombre de la organización.

El usuario agregado a una organización compradora está vinculado a una unidad organizativa y tiene un rol en el storefront que le permite ejecutar acciones en la tienda.

> ⚠️ Esta funcionalidad está disponible solo para tiendas que usan B2B Buyer Portal, y por el momento, únicamente para cuentas seleccionadas.

## Antes de empezar

Para agregar un usuario, es necesario estar registrado en la tienda como miembro de la organización compradora con el rol **Organization Admin**.

## Instrucciones

Sigue las instrucciones a continuación para agregar un usuario:

1. Accede a la tienda a través del navegador e inicia sesión con tu usuario.

2. En el menú superior, haz clic en **Empresa**. Se mostrará el panel de la organización.

   ![adicionar-usuarios-a-organizacao-compradora_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/adicionar-usuarios-a-organizacao-compradora_1.png)

3. Haz clic en **Gestionar.**

4. Puedes acceder al panel de creación de usuario de dos formas:

   1. Haciendo clic en el botón **\+** y luego en **Agregar usuario**,  
      o
   2. Haciendo clic en **Usuarios** y luego en el botón **\+**.

   ![adicionar-usuarios-a-organizacao-compradora_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/b2b-buyer-portal/adicionar-usuarios-a-organizacao-compradora_2.png)

5. Completa la información del nuevo usuario:

   - **Nombre completo (opcional)**: nombre y apellido del usuario, como debe aparecer en la organización.
   - **Email (opcional)**: dirección de email que puede utilizarse para iniciar sesión y recibir comunicaciones relacionadas con el proceso de compra.
   - **Teléfono (opcional)**: teléfono de contacto del usuario. Puede utilizarse tanto para iniciar sesión como para recibir comunicaciones relacionadas con las compras realizadas.
   - **Nombre de usuario**: identificador único del usuario dentro de la organización. Utilizado para iniciar sesión en la tienda. No se permiten caracteres especiales.
   - **Roles**: define el acceso del usuario en el storefront, como Comprador, Aprobador de pedidos u Administrador de la unidad organizativa. Para más información sobre roles y permisos, consulta la documentación de [Miembros de la organización compradora](https://help.vtex.com/es/docs/tutorials/membros-da-organizacao-compradora).

     > ⚠️ Para registrar usuarios compradores, es decir, con roles que permiten realizar compras, es necesario un paso adicional. Más información en [Habilitar usuarios compradores](#habilitar-usuarios-compradores).

6. Haz clic en **Agregar** para finalizar.

   Una vez creado, se mostrará un mensaje de confirmación. Puedes hacer clic en **Ver** en ese mensaje para visualizar el usuario recién creado.

   El usuario también puede editarse en **Organización > Usuarios**.

> ⚠️ El nuevo usuario debe definir su contraseña en el primer acceso a la tienda, utilizando un código de acceso enviado al email registrado en el paso 5, si procede. Si no tiene email registrado, el código de acceso debe generarlo el administrador de la organización, como se describe en la sección [Generar código de acceso para usuarios sin email](#generar-codigo-de-acceso-para-usuarios-sin-email).

Podrá realizar operaciones dentro de la unidad organizativa a la que fue vinculado y ejecutar acciones dependiendo de su rol en el storefront y los permisos asignados.

## Generar código de acceso para usuarios sin email

Al agregar un usuario sin email registrado, como administrador de la organización, debes generar un código de acceso y proporcionarlo al usuario para que realice el primer acceso siguiendo las instrucciones a continuación:

1. Accede a **Organización > Usuarios**.
2. Haz clic en el menú ⋮ y luego en **Restablecer contraseña**.
3. Haz clic en **Restablecer** para confirmar.
4. Copia el código generado y envíaselo al usuario.

El código será válido durante 12 horas. El usuario podrá iniciar sesión por primera vez y definir su contraseña de acceso solamente utilizando este código.

## Habilitar usuarios compradores

A diferencia de otros tipos de usuarios, para registrar un usuario con permiso para realizar compras en la tienda, no basta con crear el usuario y asignarle determinados roles: también es necesario registrar al usuario como comprador vía API. Para habilitar a un usuario para hacer compras en la tienda sigue los pasos a continuación:

1. Agrega el usuario a la organización compradora como se describe en las [instrucciones](#instrucciones).
2. Asigna un rol que permita realizar compras. Consulta roles y permisos en el artículo [Miembros de la organización compradora](https://help.vtex.com/es/docs/tutorials/membros-da-organizacao-compradora).
3. Registra al usuario como comprador. Para saber cómo agregar y gestionar datos de compradores, consulta la [API de datos del comprador B2B](https://developers.vtex.com/docs/api-reference/b2b-buyer-data-api).
