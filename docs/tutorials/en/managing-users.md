---
title: 'How to manage users'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2024-06-10T18:24:36.901Z
publishedAt: 2024-06-10T18:24:36.901Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: managing-users
locale: en
legacySlug: creating-users
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

The user management with access to the administrative environment of your VTEX store is done through the [Account settings](https://help.vtex.com/en/tutorial/account-settings-overview--6USYxLuzNt4uAkvjdPF7I8), in the **Users** page. To access the page, click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __Users__ .

This page displays the list of users with their __Name__, __Email__ and __MFA__ configuration. There are also options to search for users, export users and create new ones. Other options available on this interface are to edit or delete each user.

![Lista Usuários User Management EN](https://images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/a8d2afc57a750d942cfe7e6e2cd98993/Lista_Usu__rios_User_Management_EN.png)

>⚠️ Any user that wants to manage users or application keys must have a profile with the **Save User** [resource](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3?&utm_source=autocomplete). You can use the default profile [User Administrator - RESTRICTED](https://help.vtex.com/en/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted), for example.

## Creating a new user

1. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __Users__ .
2. Click on the `+ New` button.  
3. Fill in the **Email**.  
  ![Add new User Management EN](https://images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/1c78fe3f13064af0b12685dba1ab85a0/Cadastro_Novo_usu__rio_User_Management_EN.png)
4. Click on `+ Add roles`.
5. Add the desired [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).  
  ![Select User Management roles EN](https://images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/b06bd642bf1763e915d49e3016ab845a/select-roles.PNG)
6. Click on `Add roles` to confirm the selection.
7. Click on `Save`.  

The user will receive an email confirming the information was received, with a link to register the password.

The password must have at least eight characters and a number, a capital letter and a lowercase letter. After filling them in, an access key will be sent by email to confirm the account.

## Editing users

1. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __Users__ .
2. To edit an existing user, click on their name in the list of users. Another possibility is to click on the menu button <i class="fas fa-ellipsis-v"></i> next to the desired user and then on **Edit**.
  ![Botão Editar Usuário User Management EN](https://images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/03aa67401cc9eb46480cd9a6bbb9a65e/Bot__o_Editar_Usu__rio_User_Management_EN.png)
   <div class="alert alert-warning" role="alert">It is not possible to change the email of an existing user. In this case, it is necessary to delete the user and create them again with the new email.</div>
3. In the editing page you can add and remove the [Roles](https://help.vtex.com/en/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) of the user, as shown in the image below. 
  ![Select User Management roles EN](https://images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/b06bd642bf1763e915d49e3016ab845a/select-roles.PNG)
4. Click on `Add roles` to confirm the selection.
5. Click on `Save`.

<div class="alert alert-info" role="alert">An alert will appear when adding roles to a user who does not use multiple factor authentication (MFA). The article <a href="https://help.vtex.com/en/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ">Enable login by 2-factor authentication</a> shows how to enable this setting.</div>

<div class="alert alert-warning" role="alert">If all roles are removed from the user, they will no longer be able to access VTEX Admin.</div>

## Deleting a user

1. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __Users__ .
2. Click on the menu button <i class="fas fa-ellipsis-v"></i> next to the user you want to remove.
3. Click on the **Delete** option.
  ![Delete a User Management button EN](https://images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/da5bdd0600085cb4b8e4203308c89f36/Bot__o_Excluir_Usu__rio_User_Management_EN.png)
  A message will appear to confirm the removal of the user.
4. To confirm, click on the button `YES, REVOKE ALL ACCESS`.  
  ![Confirmar Remover Acesso User Management EN](https://images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/9773084eac472c468e94d67f575a92e0/Confirmar_Remover_Acesso_User_Management_EN.png)

## Exporting user data

1. Click on your **profile avatar** on the VTEX Admin top bar, marked by the initial of your email, and click on **Account settings** > __Users__ .
2. To export user data, click <i class="fas fa-download"></i> `Export`.
3. Save the CSV file to your device. The file includes the ID, email and name of each user.
