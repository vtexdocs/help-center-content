---
title: 'Crear nuevo rol'
id: qGtNQpKSSAduX94l2WZBW
status: PUBLISHED
createdAt: 2023-11-30T16:42:01.373Z
updatedAt: 2024-11-22T14:17:26.392Z
publishedAt: 2024-11-22T14:17:26.392Z
firstPublishedAt: 2023-11-30T17:12:45.125Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-roles
locale: es
legacySlug: crear-nuevo-rol
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Los roles determinan el conjunto de recursos a los que un grupo de usuarios puede acceder en VTEX. Puedes gestionarlos a través del Admin VTEX, donde puedes definir los [recursos](/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) y usuarios asociados a cada rol.

Al crear un nuevo rol, puedes optar por utilizar uno [predefinido](/es/tutorial/control-de-acceso--4rM3gyiWqtkim4Q8hOvLTC#predefinidos), diseñado por el equipo de VTEX para abordar escenarios operativos comunes, o registrar uno [personalizado](/es/tutorial/control-de-acceso--4rM3gyiWqtkim4Q8hOvLTC#personalizados), definiendo los recursos específicos a los cuales los usuarios con ese rol tendrán acceso.

Consulta a continuación los pasos a seguir para cada una de estas opciones:

* [Rol predefinido](#rol-predefinido)
* [Rol personalizado](#rol-personalizado)

Recomendamos crear roles análogos a las estructuras jerárquicas de la tienda. De este modo, todos los colaboradores son responsables de la información a la que pueden acceder. Las buenas prácticas de gestión de los roles de usuario no solo mejoran la seguridad de las operaciones, sino que también fortalecen el compromiso de todas las partes involucradas en la protección de los datos sensibles de la tienda y tus clientes.

<div class="alert alert-warning">
  <p>El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas en caso de que se filtren las credenciales de inicio de sesión.</p>
</div>

## Rol predefinido

Para empezar a utilizar un rol predefinido sigue las instrucciones a continuación:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Roles de usuario**.

    Verás una lista con todos los roles registrados en la cuenta. Consulta más información sobre esta página accediendo al artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

2. Haz clic en `+ Crear rol`.
3. Haz clic en `Seleccionar rol` y en uno de los roles predefinidos que aparecen en el menú desplegable. No elijas la opción **Custom**, ya que está destinada a perfiles personalizados.

    Verás los recursos que se incluyen en este rol, separados por producto.

    Por ejemplo, el rol **Call center operator** contiene un recurso del producto _Catálogo_ que permite realizar operaciones en una tienda en nombre de un cliente, y un recurso de _OMS_ que permite consultar el status de un pedido:

    ![Nuevo perfil de acceso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Account%20management/Access%20control/crear-nuevo-rol_1.png)

    Consulta más información sobre los roles predefinidos disponibles y los recursos asociados en [Roles de usuario predefinidos](/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy).
4. Agrega usuarios administrativos al rol rellenando el email del usuario en **Agregar usuarios para este rol** y haciendo clic en `Agregar`.

    ![Usuarios de perfil](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Account%20management/Access%20control/crear-nuevo-rol_2.PNG)

    Si el usuario no existe, se creará uno nuevo utilizando el email como nombre, es decir, el nombre y el email serán iguales.

5. Haz clic en `Guardar`.

## Rol personalizado

Sigue las instrucciones a continuación para crear un rol personalizado que responda a las necesidades de acceso de un grupo de usuarios:

1. En la barra superior del Admin VTEX, haz clic en el **avatar de tu perfil**, marcado por la inicial de tu email, y luego en **Configuración de la cuenta** > **Roles de usuario**.

    Verás una lista con todos los roles registrados en la cuenta. Consulta más información sobre esta página accediendo al artículo [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

2. Haz clic en `+ Crear rol`.
3.  Para crear un rol personalizado, haz clic en ` Seleccionar rol` y después en la opción **Custom** del menú desplegable.
4. Haz clic en el menú desplegable en **Seleccionar un producto** y, a continuación, haz clic en uno de los productos que aparece en la lista.

    Verás una lista de todos los recursos disponibles para ese producto:

    ![Configurando producto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Account%20management/Access%20control/crear-nuevo-rol_3.png)
5. Marca los recursos a los que el rol tendrá acceso. Para más información sobre [Recursos, consulta la lista completa de License Manager](/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).
6. Si deseas agregar recursos de otro producto, haz clic en el botón **Configurar otro producto** situado en la parte inferior de la lista de productos y recursos y repite los pasos 4 y 5.

    Puedes agregar al rol recursos de tantos productos como necesites.

7. Asigna un nombre para el rol personalizado en el campo **Nombre del rol**.

  <div class="alert alert-warning">
    <p>Es importante elegir nombres descriptivos para los roles, que indiquen claramente qué tipo de usuario debe tener ese acceso. Se recomienda especificar el cargo en la empresa o la función a desempeñar en la plataforma.</p>
  </div>

8. Agrega usuarios administrativos al rol rellenando el email del usuario en **Agregar usuarios para este rol** y haciendo clic en `Agregar`.

      ![Usuarios de perfil](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Account%20management/Access%20control/crear-nuevo-rol_4.PNG)

      Si el usuario no existe, se creará uno nuevo utilizando el email como nombre, es decir, el nombre y el email serán iguales.
9. Haz clic en `Guardar`.

      Una vez creado, el nuevo rol aparecerá en la página [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

## Más información

* [Roles](/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [Recursos de License Manager](/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3)
