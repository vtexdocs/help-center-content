---
title: 'Gestionar usuarios'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2024-06-10T18:24:36.901Z
publishedAt: 2024-06-10T18:24:36.901Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: managing-users
locale: es
legacySlug: creando-usuarios, gestionar-usuarios
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

La gestión de los usuarios con acceso al ambiente administrativo de su tienda VTEX se realiza a través de la [Configuración de la cuenta](https://help.vtex.com/es/tutorial/vision-general-configuraciones-de-la-cuenta--6USYxLuzNt4uAkvjdPF7I8), en la página de **Usuarios**. Para acceder a esta sección, en la barra superior de VTEX Admin, haz clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Cuenta**.

En esta sección, se mostrará la lista de usuarios con sus respectivos __Nombre__, __Email__ y configuración de __MFA__. También pueden verse las presentes opciones de búsqueda, exportación y creación de nuevos usuarios, así como editar y eliminar usuarios.

![Lista Usuários User Management ES](//images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/e5e96de76d8d66202887bd3339e0f01d/Lista_Usu__rios_User_Management_ES.png)

>⚠️ Cualquier usuario que desee gestionar usuarios o claves de aplicación debe tener un perfil que contenga el [recurso](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **Save User**. Puedes utilizar, por ejemplo, el perfil predeterminado [User Administrator - RESTRICTED](https://help.vtex.com/es/tutorial/roles-de-usuario-predefinidos--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted).

## Creando un nuevo usuario

1. En la barra superior de VTEX Admin, haga clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Haga clic en el botón `+ Nuevo`.  
3. Rellene el campo **Email**.  
  ![Cadastro Novo usuário User Management ES](//images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/c25703eb8635123358251772d94e147a/Cadastro_Novo_usu__rio_User_Management_ES.png)
4. Haga clic en `+ Agregar roles`.
5. Seleccione los [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) deseados, como se muestra en la imagen: 
  ![Selecionar perfis User Management ES](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/fed2df535522db7b5d7288845497b8d4/seleccionar-roles.PNG)
6. Haga clic en `Agregar rol` para confirmar la selección.
7. Haga clic en `Guardar`.  

El usuario recibirá un email confirmando la creación, con un link para registrar una nueva contraseña de acceso.

La contraseña debe tener al menos 8 caracteres, incluyendo un número, una letra mayúscula y una minúscula. Después de ingresarla, se enviará por email una clave de acceso, para validar el registro.

## Editando usuarios

1. En la barra superior de VTEX Admin, haga clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Para editar un usuario ya registrado, haga clic en su nombre. Esto también es posible haciendo clic en los tres puntos al lado derecho del usuario en la lista y luego en la opción **Editar**.
  ![Botão Editar Usuário User Management ES](//images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/6063958f0625ce0beabac99f407a3b87/Bot__o_Editar_Usu__rio_User_Management_ES.png)
  >⚠️ El email no puede ser cambiado. Si desea hacer esto, se deberá realizar un nuevo registro.
3. En la pantalla de edición, se pueden agregar o eliminar los [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) de los usuarios.  
  ![Selecionar perfis User Management ES](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/fed2df535522db7b5d7288845497b8d4/seleccionar-roles.PNG)
4. Haga clic en `Agregar rol` para confirmar la selección.
5. Haga clic en `Guardar`.

>ℹ️ Aparecerá una alerta al agregar nuevos roles para un usuario que no utiliza autenticación de múltiples factores (MFA). El artículo [Habilitar login por autenticación de 2 factores](https://help.vtex.com/es/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) muestra como habilitar esta configuración.

>⚠️ Si se remueven todos los roles del usuario, el mismo no podrá más acceder al Admin.

## Eliminando un usuario

1. En la barra superior de VTEX Admin, haga clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Para remover el acceso de un usuario, haga clic en botón con tres puntos <i class="fas fa-ellipsis-v"></i> al lado del usuario que desea eliminar.
3. Haga clic en la opción **Eliminar**.  
  ![Botão Excluir Usuário User Management ES](//images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/fe34b8820154abc988ee1317cf75da3a/Bot__o_Excluir_Usu__rio_User_Management_ES.png)
4. Confirme haciendo clic en `SÍ, ELIMINAR TODO ACCESO`.  
  ![Confirmar Remover Acesso User Management ES](//images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/2e0ecc32f578b0da6f0698fb136a8a21/Confirmar_Remover_Acesso_User_Management_ES.png)

## Exportando datos de usuarios

1. En la barra superior de VTEX Admin, haga clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Cuenta**.
2. Para exportar datos de usuarios, haga clic en el botón <i class="fas fa-download"></i> `Exportar`.
3. Guarde el archivo CSV en su dispositivo. El archivo contiene el ID, el email y el nombre de cada usuario.
