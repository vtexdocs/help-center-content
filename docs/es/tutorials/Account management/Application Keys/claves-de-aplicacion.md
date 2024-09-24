---
title: 'Claves de aplicación'
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2023-10-17T20:17:39.441Z
publishedAt: 2023-10-17T20:17:39.441Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: application-keys
locale: es
legacySlug: claves-de-aplicacion
subcategoryId: 5GYFjiMQg0qIKpnnQY2qjh
---

Cada integración por API utilizada para conectar tu cuenta VTEX con sistemas externos requerirá la creación de una clave de aplicación (_application key_ o _app key_).

Estas credenciales de [autenticación](https://developers.vtex.com/docs/guides/authentication) se utilizan para dar acceso seguro a los datos que deseas compartir con las integraciones, sin exponer tu cuenta a aplicaciones o usuarios no autorizados.

## Tipos de claves de aplicación

Existen dos tipos de claves de aplicación: [internas](#claves-de-aplicacion-internas) o [externas](#claves-de-aplicacion-externas). Esta definición depende de la cuenta que crea, gestiona y utiliza la credencial.

### Claves de aplicación internas

Las claves de aplicación internas son credenciales generadas y gestionadas en tu cuenta VTEX. Esto significa que debes tener acceso a todos los pares de claves y tokens de aplicación (el equivalente a los nombres de usuario y las contraseñas para las integraciones de API).

### Claves de aplicación externas

Las claves de aplicación externas son credenciales generadas y administradas por otras cuentas VTEX. Al agregar [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) a las claves de aplicación (el equivalente a los nombres de usuario) proporcionadas por terceros, tienes la opción de permitir que accedan a recursos específicos de tu cuenta.

## Gestionar claves de aplicación

>⚠️ Se requiere un [rol](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) con el recurso [](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) **Save user** para gestionar usuarios y claves de aplicación. El rol predeterminado para este fin es [User Administrator - RESTRICTED](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted), pero también es posible [crear un rol personalizado](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol) con este recurso.

En la página **Claves de aplicación** puedes gestionar las claves de aplicación [internas](#claves-de-aplicacion-internas) y [externas](#claves-de-aplicacion-externas) que tienen acceso a tu cuenta, incluyendo:

- [Generar claves de aplicación internas](#generar-claves-de-aplicacion-internas)
- [Agregar claves de aplicación externas](#agregar-claves-de-aplicacion-externas)
- [Gestionar permisos de las claves de aplicación](#gestionar-permisos-de-claves-de-aplicación)
- [Activar o desactivar claves de aplicación](#activar-o-desactivar-claves-de-aplicacion)
- [Exportar claves de aplicación con acceso a tu cuenta](#exportar-claves-de-aplicación-con-acceso-a-tu-cuenta)

Para acceder a esta página, en la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** (marcado con la inicial de tu email) y luego en **Configuración de la cuenta** > **Claves de aplicación**.

>ℹ️ Consulta este artículo para saber más sobre [buenas prácticas para el uso de claves de aplicación.](https://help.vtex.com/es/tutorial/boas-praticas-chaves-de-aplicacao--7b6nD1VMHa49aI5brlOvJm)

## Generar claves de aplicación internas

Como las claves de aplicación permiten que sistemas externos accedan a tu cuenta, solo pueden ser creadas por usuarios con el recurso `License Manager / Services access control / Save user` en sus [roles](https://help.vtex.com/es/tutorial/roles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc).

Para crear claves de aplicación internas en tu cuenta sigue los pasos a continuación:

1. Para acceder a esta página, en la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** (marcado con la inicial de tu email) y luego en **Configuración de la cuenta** > **Claves de aplicación**.
2. Haz clic en el botón `Administrar mis claves`.

    Se te redirigirá a la página **Mis claves**, ilustrada a continuación,  donde podrás consultar todas las [claves de aplicación internas](#claves-de-aplicacion-internas).

    ![Mis Claves](https://images.ctfassets.net/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/68300cda392cc27ff02bc50af0bc2b7e/mis-claves-es.png)

    Estos son los campos visibles en la página **Mis claves**:

    - **Etiqueta:** texto que describe la finalidad de la clave de aplicación.
    - **Clave:** identificador único para la clave de aplicación.
    - **Status:** status actual de la clave de aplicación, que puede ser activa o inactiva.

3. Haz clic en el botón `+ Generar nueva`.
2. (Opcional) Rellena la **Etiqueta** con una descripción de la finalidad de la clave de aplicación. Este campo es inmutable y solo puede definirse durante la creación de la clave de aplicación. Si se deja en blanco, el campo se rellenará automáticamente con el valor del campo **Clave** de la clave de aplicación generada.
3. (Opcional) Haz clic en `+ Agregar roles` para [gestionar los permisos de la clave de aplicación](#gestionar-permisos-de-las-claves-de-aplicacion).
4. Haz clic en el botón `Agregar rol`.
5. Haz clic en <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> para copiar el **Token de aplicación**. _Este secreto se mostrará una vez.  Guárdalo en un lugar seguro._

>⚠️ Protege tus pares de claves y tokens de aplicación como lo harías con otras credenciales, como nombres de usuario y contraseñas. Si sospechas que una clave de aplicación está comprometida, debes desactivarla inmediatamente en tu cuenta. Para más detalles, consulta la sección [Activar o desactivar claves de aplicación](#ativar-ou-desativar-chaves-de-aplicacao) de este artículo.

## Agregar claves de aplicación externas

Para agregar claves de aplicación de terceros sigue los pasos a continuación:

1. Para acceder a esta página, en la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** (marcado con la inicial de tu email) y luego en **Configuración de la cuenta** > **Claves de aplicación**.
2. Haz clic en el botón `+ Agregar clave de app externa`.
3. Rellena el campo \{b\>Clave\<b\} con la clave de aplicación proporcionada por la aplicación externa.
4. Haz clic en `+ Agregar roles` para [gestionar los permisos de la clave de aplicación](#gestionar-permisos-de-las-claves-de-aplicacion). Agrega roles para otorgarles el acceso a los recursos que desees.
5. Haz clic en `Guardar`.

## Gestionar los permisos de las claves de aplicación

Para que una clave de aplicación pueda realizar requests de API a tu cuenta, debe estar activa y tener [roles](https://help.vtex.com/es/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que especifiquen los recursos de la cuenta a los que puede acceder. 

>❗ El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas al filtrarse las credenciales de inicio de sesión.

Las claves de aplicación se crean, de manera predeterminada, sin permisos para acceder a ningún recurso de la cuenta.

Hay tres maneras de llegar a la página donde se pueden editar los roles de una clave de aplicación:

- Haciendo clic en el botón `+ Agregar roles` para [generar claves de aplicación](#generar-claves-de-aplicacion-en-tu-cuenta) en tu cuenta.
- Haciendo clic en el botón `+Agregar clave de app externa` en la página **Claves de aplicación**.
- Haciendo clic en el botón `፧` y seleccionando la opción **Editar** en las páginas **Claves de aplicación** o **Mis claves**.

Al editar una clave de aplicación, puedes: 

- Agregar roles de acceso haciendo clic en el botón `+ Agregar roles`, seleccionando uno o más roles y haciendo clic el botón `Agregar roles`. 
- Eliminar roles de acceso marcando las casillas de selección y haciendo clic en el botón `Eliminar roles`.
- Guardar los cambios haciendo clic en el botón `Guardar`.

Tras agregar los roles de acceso a una clave de aplicación, esta aparecerá en la página **Claves de aplicación**.

![Claves de aplicación](//images.ctfassets.net/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/931a3bd780840b11e47bf7d2a84ff718/claves-es.png)

Consulta a continuación los campos visibles en la página **Claves de aplicación**:

- **Clave:** identificador único para la clave de la aplicación.
- **Cuenta:** cuenta VTEX responsable de gestionar la clave de aplicación.
- **Status:** status actual de la clave de aplicación, que puede ser activa o inactiva.

>ℹ️ Observa que el campo **Etiqueta** no se muestra en la página **Claves de aplicación**. Para ver la descripción de la finalidad de una clave de aplicación interna, utiliza el valor de la**Clave** para encontrarla en la página **Mis claves**. No es posible agregar etiquetas a claves de aplicación externas.

## Activar y desactivar claves de aplicación

Si una clave de aplicación que tiene acceso a tu cuenta se ve comprometida, debes cancelar su acceso inmediatamente. Si cometes un error puedes volver a activarla para restablecer la integración afectada. La forma de hacerlo dependerá del [tipo de clave de aplicación](#tipos-de-clave-de-aplicacion).

>⚠️ Vuelve a activar una clave de aplicación solamente si estás seguro de que no ha sido comprometida. Cualquier usuario con el token de aplicación asociado recuperará el acceso privilegiado a tu cuenta.

### Desactivar clave de aplicación interna

Para desactivar una clave de aplicación interna sigue los pasos a continuación: 

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, con la inicial de tu email, y luego en **Configuración de la cuenta** > **Claves de aplicación**.
2. Haz clic en el botón `Administrar mis claves`.
3. En la lista, busca la clave de aplicación que deseas desactivar y haz clic en el botón `፧`.
4. Haga clic en la opción **Desactivar**.

### Desactivar clave de aplicación externa

Para desactivar una clave de aplicación externa sigue los pasos a continuación: 

1. Para acceder a esta página, en la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** (marcado con la inicial de tu email) y luego en **Configuración de la cuenta** > **Claves de aplicación**.
2. En la lista, busca la clave de aplicación que deseas desactivar y haz clic en el botón `፧`.
3. Haz clic en la opción **Desactivar**.

### Activar clave de aplicación interna

Para reactivar claves de aplicación internas que se habían desactivado previamente sigue los pasos a continuación:

1. Para acceder a esta página, en la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil** (marcado con la inicial de tu email) y luego en **Configuración de la cuenta** > **Claves de aplicación**.
2. Haz clic en el botón `Administrar mis claves`.
3. En la lista, busca la clave de aplicación que deseas reactivar y haz clic en el botón `፧`.
4. Haz clic en la opción **Activar**.

### Activar clave de aplicación externa

Para reactivar las claves de aplicación externas que se hayan desactivado previamente, deberás repetir las instrucciones descritas en [agregar claves de aplicación externas](#agregar-claves-de-aplicacion-externas).

## Exportar claves de aplicación con acceso a tu cuenta

Si es necesario para una auditoría de seguridad, puedes exportar un archivo CSV que contenga los valores **Clave** de todas las claves de aplicación internas y externas que actualmente tienen acceso a tu cuenta, es decir, con roles asociados a la misma.

Para exportar las claves, accede a _Configuración de la cuenta > Claves de aplicación > <span style="display: inline-block;"><img src="https://images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Exportar</strong></span>.

