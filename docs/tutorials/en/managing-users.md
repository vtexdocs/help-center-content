---
title: 'How to manage users'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2022-08-24T14:24:37.685Z
publishedAt: 2022-08-24T14:24:37.685Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: managing-users
legacySlug: creating-users
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

The user management with access to the administrative environment of your VTEX store is done through the [Account Management](/en/tutorial/visao-geral-do-modulo-license-manager/), in the **Users** section. To access this section, go to __Account Management__ > __Users__ in the Admin menu on the left. 
![Menu Users](//images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/2cf992fa7af4cbc9bfaca54209013274/Menu_Users.png)

This section will show the list of users with their __Name__, __Email__ and __MFA__ configuration. There are also options to search for users, export users and create new ones. Other options available on this interface are to edit or delete each user. 
![Lista Usuários User Management EN](//images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/a8d2afc57a750d942cfe7e6e2cd98993/Lista_Usu__rios_User_Management_EN.png)

## Creating a new user

1. Access the __Account Management__ module.
2. Click on the __Users__ tab.  
![Menu Users](//images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/2cf992fa7af4cbc9bfaca54209013274/Menu_Users.png)
3. Click on the **(+) New** button.  
![New User Management button EN](//images.ctfassets.net/alneenqid6w5/2MzlIdrqPecPcrnjeSMTTx/b644d484f14eab4e084a8e6218cda5f7/Bot__o_Novo_Usu__rio_User_Management_EN.png)
4. Fill in the **Email**.  
![Add new User Management EN](//images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/1c78fe3f13064af0b12685dba1ab85a0/Cadastro_Novo_usu__rio_User_Management_EN.png)
5. Add the desired [Roles](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc).  
![Select the User Management Profiles EN](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/78572b4e973e968383a582f44b9aecee/Selecionar_perfis_User_Management__EN.png)
6. Click on the **Save** button.  
![User Management Save button EN](//images.ctfassets.net/alneenqid6w5/707TZ7u4fRaSVGVDfaLcMC/b59901034f50198e7012ae2ce91f0b7c/Bot__o_Salvar_Usu__rio_User_Management_EN.png)

The user will receive an email confirming the information was received and a link to register the password.

The password must have at least eight characters and a number, a capital letter and a low-code letter. After filling them in, an access key will be sent by email to confirm the account.

## Editing users

To edit an existing user, click on their name in the list of users. Another possibility is to click on the button with three points next to the desired user and then on **Edit**.

![Botão Editar Usuário User Management EN](//images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/03aa67401cc9eb46480cd9a6bbb9a65e/Bot__o_Editar_Usu__rio_User_Management_EN.png)

It is not possible to change the email. In this case, it is necessary to add the information as it was the first time.

The email cannot be changed so, a new user must be created.

In the editing screen you can add and remove the [Roles](https://help.vtex.com/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc) of the user. 
![Select the User Management Profiles EN](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/78572b4e973e968383a582f44b9aecee/Selecionar_perfis_User_Management__EN.png)

<div class="alert alert-info" role="alert">An alert will appear when adding roles to a user who does not use multiple factor authentication (MFA). The article <a href="https://help.vtex.com/en/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ">Enable login by 2-factor authentication</a> shows how to enable this setting.</div>

<div class="alert alert-warning" role="alert">If all roles are removed from the user, he will also no longer be able to access admin.</div>

## Deleting a user

1. To delete a user's access, in the user list click on the three-point button next to the user you want to remove;
2. Click on the **Delete** option;  
![Delete a User Management button EN](//images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/da5bdd0600085cb4b8e4203308c89f36/Bot__o_Excluir_Usu__rio_User_Management_EN.png)
3. A message will appear to confirm the removal of the user. To confirm, click on the button **YES, REVOKE ALL ACCESS**.  
![Confirmar Remover Acesso User Management EN](//images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/9773084eac472c468e94d67f575a92e0/Confirmar_Remover_Acesso_User_Management_EN.png)

<div class="alert alert-info">
Although integration tokens appear in the user list, they cannot be deleted. To disable them, go to <em>Account Setup > Account Management > Account</em> and uncheck the field <strong>Status of Tokens</strong>.
</div>

## Exporting user data

1. To export user data, click on **EXPORT**.
2. Save the csv file to your device. The file includes the ID, email and name of each user.
