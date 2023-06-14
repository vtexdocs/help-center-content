---
title: Gestionar usuarios
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2022-08-24T14:24:37.685Z
publishedAt: 2022-08-24T14:24:37.685Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: gestionar-usuarios
legacySlug: creando-usuarios, gestionar-usuarios
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

La gestión de los usuarios con acceso al ambiente administrativo de su tienda VTEX se realiza a través de la [Gestión de la cuenta](/es/tutorial/visao-geral-do-modulo-license-manager/), en la sección de **Usuarios**. Para acceder a esta sección, vaya a __Gestión de la cuenta__ > __Usuarios__ en el panel izquierdo del Admin.
![Menú Usuarios](https://images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/9c7276322c2b64435565f664830dbd89/Men___Usuarios.png)

En esta sección, se mostrará la lista de usuarios con sus respectivos __Nombre__, __Email__ y configuración de __MFA__. También pueden verse las presentes opciones de búsqueda, exportación y creación de nuevos usuarios, así como editar y eliminar usuarios.
![Lista Usuários User Management ES](https://images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/e5e96de76d8d66202887bd3339e0f01d/Lista_Usu__rios_User_Management_ES.png)

## Creando un nuevo usuario

1. Acceda al módulo __Gestión de la cuenta__.
2. Haga clic en la pestaña __Usuarios__.  
![Menú Usuarios](https://images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/9c7276322c2b64435565f664830dbd89/Men___Usuarios.png)
3. Haga clic en el botón __(+) Nuevo __.  
![Botão Novo Usuário User Management ES](https://images.ctfassets.net/alneenqid6w5/2MzlIdrqPecPcrnjeSMTTx/a677d46ec25ae71c650f4839c870a169/Bot__o_Novo_Usu__rio_User_Management_ES.png)
4. Rellene el campo **Email**.  
![Cadastro Novo usuário User Management ES](https://images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/c25703eb8635123358251772d94e147a/Cadastro_Novo_usu__rio_User_Management_ES.png)
5. Agregue los [roles](/es/tutorial/como-criar-perfil-de-acesso/) deseados.  
![Selecionar perfis User Management ES](https://images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/dc315c780a29a71e12efa19bdaaa8995/Selecionar_perfis_User_Management__ES.png)
6. Haga clic en el botón **Guardar**.  
![Botão Salvar Usuário User Management ES](https://images.ctfassets.net/alneenqid6w5/707TZ7u4fRaSVGVDfaLcMC/624a61dd96c3bc51ebd92a09c07385b2/Bot__o_Salvar_Usu__rio_User_Management_ES.png)

El usuario recibirá un email confirmando la creación, con un link para registrar una nueva contraseña de acceso.

La contraseña debe tener al menos 8 caracteres, incluyendo un número, una letra mayúscula y una minúscula. Después de ingresarla, se enviará por email una clave de acceso, para validar el registro.

## Editando usuarios

Para editar un usuario ya registrado, solamente se debe hacer clic en su nombre. Esto también es posible haciendo clic en los tres puntos al lado derecho del usuario en la lista y luego en la opción **Editar**.
![Botão Editar Usuário User Management ES](https://images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/6063958f0625ce0beabac99f407a3b87/Bot__o_Editar_Usu__rio_User_Management_ES.png)

El email no puede ser cambiado. Si desea hacer esto, se deberá realizar un nuevo registro.

En la pantalla de edición, se pueden agregar o eliminar los [roles](/es/tutorial/como-criar-perfil-de-acesso/) de los usuarios.  
![Selecionar perfis User Management ES](https://images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/dc315c780a29a71e12efa19bdaaa8995/Selecionar_perfis_User_Management__ES.png)

<div class="alert alert-info" role="alert">Aparecerá una alerta al agregar nuevos roles para un usuario que no utiliza autenticación de múltiples factores (MFA). El artículo <a href="https://help.vtex.com/es/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ">Habilitar login por autenticación de 2 factores</a> muestra como habilitar esta configuración.</div>

<div class="alert alert-warning" role="alert">Si se remueven todos los roles del usuario, el mismo no podrá más acceder al Admin.</div>

## Eliminando un usuario

1. Para remover el acceso de un usuario, haga clic en botón con tres puntos al lado del usuario que desea eliminar.
2. Haga clic en la opción **Eliminar**.  
![Botão Excluir Usuário User Management ES](https://images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/fe34b8820154abc988ee1317cf75da3a/Bot__o_Excluir_Usu__rio_User_Management_ES.png)
3. Confirme haciendo clic en **SÍ, ELIMINAR TODO ACCESO**.  
![Confirmar Remover Acesso User Management ES](https://images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/2e0ecc32f578b0da6f0698fb136a8a21/Confirmar_Remover_Acesso_User_Management_ES.png)

<div class="alert alert-info">
A pesar de que aparecen tokens de integración en la lista de usuarios, los mismos no pueden ser eliminados. Para desactivarlos, acceda a <em>Configuración de la cuenta> Gestión de la cuenta> Cuenta</em>, y desactive el campo <strong>Estado de los Tokens</strong>.
</div>

## Exportando datos de usuario

1. Para exportar datos de usuario, haga clic en el botón **EXPORTAR**.
2. Guarde el archivo csv en su dispositivo. El archivo contiene el id, el email y el nombre de cada usuario.
