---
title: 'Claves de aplicación'
id: 2iffYzlvvz4BDMr6WGUtet
status: PUBLISHED
createdAt: 2021-08-19T17:45:31.084Z
updatedAt: 2022-11-25T18:39:48.683Z
publishedAt: 2022-11-25T18:39:48.683Z
firstPublishedAt: 2021-08-19T18:08:07.096Z
contentType: tutorial
productTeam: Identity
author: 56yU9Wz6mLwmzo82TjgAHy
slug: claves-de-aplicacion
locale: es
legacySlug: claves-de-aplicacion
subcategory: 5GYFjiMQg0qIKpnnQY2qjh
---

Cada integración por API utilizada para conectar su cuenta VTEX con sistemas externos requerirá la creación de una clave de aplicación (también conocida en inglés como _application key_ o _app key_). Estas credenciales de [autenticación](https://developers.vtex.com/vtex-rest-api/docs/getting-started-authentication) se utilizan para dar acceso seguro a los datos que desea compartir con estas integraciones, sin exponer su cuenta a usuarios o aplicaciones no autorizados. 

En la página de **Claves de aplicación** puede gestionar las claves de aplicación [internas](#claves-de-aplicacion-internas) y [externas](#claves-de-aplicacion-externas) que tienen acceso a su cuenta, incluyendo:

- [Generar claves de aplicación en su cuenta](#generar-claves-de-aplicacion-en-su-cuenta)
- [Gestionar los permisos de las claves de aplicación](#gestionar-los-permisos-de-las-claves-de-aplicacion)
- [Activar o desactivar las claves de aplicación](#activar-o-desactivar-claves-de-aplicacion)
- [Exportar claves de aplicación con acceso a su cuenta](#exportar-claves-de-aplicacion-con-acceso-a-su-cuenta)

Para acceder a esta página, vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_.

<div class = "alert alert-info">
  Vea este artículo sobre <a href="https://help.vtex.com/es/tutorial/best-practices-application-keys--7b6nD1VMHa49aI5brlOvJm">Buenas prácticas para el uso de claves de aplicación</a>.
</div>

## Tipos de claves de aplicación

### Claves de aplicación internas

Las claves de aplicación internas son credenciales generadas en su cuenta VTEX y gestionadas por ella. Esto significa que debe tener acceso a todos los pares de claves y tokens de aplicación, que son los equivalentes a los nombres de usuario y las contraseñas para las integraciones por API.

### Claves de aplicación externas

Las claves de aplicación externas son credenciales generadas en otras cuentas VTEX y gestionadas por ellas. Al añadir [perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc) a las claves de aplicación (el equivalente a los nombres de usuario) proporcionadas por terceros, puede permitirles acceder a recursos específicos de su cuenta.

## Generar claves de aplicación en su cuenta

Para crear claves de aplicación en su cuenta, vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_ y haga clic en el botón **Administrar mis claves**. Esto le llevará a la página **Mis claves**, donde podrá encontrar todas las [claves de aplicación internas](#claves-de-aplicacion-internas).

![My Keys](//images.contentful.com/alneenqid6w5/1pSqVIzYaiCJO3RkJUoXZQ/1c98224b6f50673c4567f21e22de4978/image3.png)

Vea a continuación los campos que se muestran en la página **Mis claves**:

- **Etiqueta:** campo de texto que describe el propósito de la clave de aplicación.
- **Clave:** campo de texto que contiene el identificador único de la clave de aplicación.
- **Status:** campo booleano que indica si la clave de aplicación está activa o inactiva.

Dado que las claves de aplicación permiten que sistemas externos accedan a su cuenta, su creación está restringida a los usuarios con el recurso `License Manager / Services access control / Save user` incluidos en sus [perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc).

Para generar una nueva clave de aplicación, siga los pasos a continuación:

1. Haga clic en el botón **⊕ Generar clave**.
2. (Opcional) Rellene la **Etiqueta** con una descripción del propósito de la clave de aplicación. Este campo es inmutable y solo se puede definir cuando se está generando la clave de aplicación. Si se deja en blanco, el campo se rellenará con el valor del campo **Clave** de la clave de aplicación generada.
3. (Opcional) Haga clic en el botón **+ Agregar perfiles** para [gestionar los permisos de la clave de aplicación](#gestionar-los-permissos-de-las-claves-de-aplicacion).
4. Haga clic en el botón **Generar**.
5. Haga clic en el botón <img src="https://images.contentful.com/alneenqid6w5/3OX5lRYiaSEtQUDXoYJD32/6628b57d4ec1651bcb184ab31c4acd72/image1.png" alt="copy-button"/> para copiar el **token de aplicación** _Este secreto solo se mostrará una vez. Guárdelo en un lugar seguro._

<div class="alert alert-warning">Proteja sus pares de claves y tokens de aplicación como lo haría con otras credenciales, como nombres de usuario y contraseñas. Si sospecha que una clave de aplicación está comprometida, desactive inmediatamente la clave en su cuenta. Para saber más detalles, consulte la sección <a href="#activar-o-desactivar-claves-de-aplicacion">Activar o desactivar las claves de aplicación</a> deste articulo.</div>

## Gestionar los permisos de las claves de aplicación

Para que una clave de aplicación pueda realizar con éxito solicitudes de API a su cuenta, debe estar activa y tener [perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc) que especifiquen los recursos de la cuenta a los que puede acceder.

<div class="alert alert-danger">
<b>¡Atención!</b> El uso sin restricciones de perfiles de acceso muy permisivos aumenta el riesgo de ataques en las tiendas por la fuga de credenciales de acceso.
</div>

Las claves de aplicación se crean, por defecto, sin permiso para acceder a ningún recurso de la cuenta. 

Hay tres caminos diferentes para llegar a la página donde se pueden editar los perfiles de acceso de una clave de aplicación:

- Utilizar el botón **+ Agregar perfiles** al [generar claves de aplicación](#generar-claves-de-aplicacion-en-su-cuenta) en su cuenta.
- Utilizar el botón **⊕ Agregar** en la página **Claves de aplicación**.
- Utilizar el botón **፧** y seleccionar la opción **Editar** en las páginas **Claves de aplicación** o **Mis claves**.

Al editar una clave de aplicación, puede:

- Agregar perfiles de acceso haciendo clic en el botón **+ Agregar perfiles**, seleccionando uno o más perfiles de acceso y haciendo clic en el botón **Agregar perfiles**. 
- Eliminar perfiles de acceso utilizando las casillas para seleccionarlos y haciendo clic en el botón **Eliminar perfiles**.
- Guarde los cambios haciendo clic en el botón **Guardar**.

Después de haber añadido perfiles de acceso a una clave de aplicación, esta aparecerá en la página **Claves de aplicación**.

![Application Keys](//images.contentful.com/alneenqid6w5/2wGtLJjEnzTf1VJmkFcRhm/da66ebc249dd18cbc709d872ce78719c/image2.png)

Vea a continuación los campos que se muestran en la página  **Claves de aplicación**:

- **Clave:** campo de texto que contiene el identificador único de la clave de aplicación.
- **Cuenta:** campo de texto que indica la cuenta VTEX que gestiona la clave de aplicación.
- **Status:** campo booleano que indica si la clave de aplicación está activa o inactiva.

<div class="alert alert-info">Tenga en cuenta que el campo <strong>Etiqueta</strong> no se muestra en la página <strong>Claves de aplicación</strong>. Para ver la descripción del objetivo de una clave de aplicación interna, utilice el valor de la <strong>Clave</strong> para encontrarla en la página <strong>Mis claves</strong>. No es posible añadir etiquetas a claves de aplicación externas.</div>

## Activar o desactivar claves de aplicación

Si una clave de aplicación que tiene acceso a su cuenta se ve comprometida, debe cancelar inmediatamente dicho acceso. Si se equivoca, puede volver a activarla para restablecer la integración afectada. La forma de hacerlo va a depender del [tipo de clave de aplicación](#tipos-de-claves-de-aplicacion).

<div class="alert alert-warning">Solo debe volver a habilitar una clave de aplicación si está seguro de que no ha sido comprometida. Cualquier usuario con el token de aplicación asociado recuperará el acceso privilegiado a su cuenta.</div>

Para desactivar una clave de aplicación interna, siga los pasos a continuación:

1. Vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_.
2. Haga clic en el botón **Administrar mis claves**.
3. Busque la clave de aplicación que desea desactivar en la lista y haga clic en el botón **፧**.
4. Seleccione la opción **Desactivar**.

Para desactivar una clave de aplicación externa, siga los pasos a continuación:

1. Vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_.
2. Busque la clave de aplicación que desea desactivar en la lista y haga clic en el botón **፧**.
3. Seleccione la opción **Eliminar**.

Para volver a activar claves de aplicación internas que se han desactivado previamente, siga los pasos a continuación:

1. Vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_.
2. Haga clic en el botón **Administrar mis claves**.
3. Busque la clave de aplicación que desea desactivar en la lista y haga clic en el botón **፧**.
4. Seleccione la opción **Activar**.

Para volver a activar claves de aplicación externas que se han desactivado previamente, siga los pasos a continuación:

1. Vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_.
2. Haga clic en el botón **⊕ Adicionar**.
3. Rellene el campo **Clave** con la clave de aplicación proporcionada por el tercero.
4. Añada perfiles de acceso para permitirles el acceso a los recursos que desee.

## Exportar claves de aplicación con acceso a su cuenta

Si es necesario para una auditoría de seguridad, puede exportar un archivo CSV que contenga los valores de la **Clave** para todas las claves de aplicación internas y externas que actualmente tienen acceso a su cuenta, es decir, que tienen perfiles de acceso asociados. Para exportar las claves, vaya a _Configuración de la cuenta > Gestión de la cuenta > Claves de aplicación_ y haga clic en el botón <span style="display: inline-block;"><img src="//images.contentful.com/alneenqid6w5/25JqGWNUZPZattDX6ORXX6/742e99e17042024b9cae641564909171/image4.png" alt="export-button"/> <strong>Exportar</strong></span>.
