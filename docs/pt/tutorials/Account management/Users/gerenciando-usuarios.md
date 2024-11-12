---
title: 'Gerenciar usuários'
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
locale: pt
legacySlug: criando-usuarios
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

A gestão dos usuários com acesso ao ambiente administrativo da sua loja VTEX é feita pelo [Gerenciamento da conta](https://help.vtex.com/pt/tutorial/visao-geral-configuracoes-da-conta--6USYxLuzNt4uAkvjdPF7I8), na página de **Usuários**. Para acessá-la, na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__. 

Esta página mostra a lista de usuários com os respectivos __Nome__, __Email__ e configuração de __MFA__. Também estão presentes opções de busca de usuários, exportar usuários e criar novos usuários. Outras opções disponíveis por esta interface são de editar ou excluir cada usuário.

![Lista Usuários User Management PT](https://images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/3440b1f6633113c14bf91d9147d4eb0a/Lista_Usu__rios_User_Management_PT.png)

>⚠️ Qualquer usuário que deseje gerenciar usuários ou chaves de aplicação deve ter um perfil que contenha o [recurso](https://help.vtex.com/en/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) **Save User**. Você pode usar, por exemplo, o perfil predefinido [User Administrator - RESTRICTED](https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#user-administrator-restricted).

## Criar um novo usuário

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Clique no botão `+ Novo`.  
3. Preencha o **Email**.
  ![Cadastro Novo usuário User Management PT](//images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/24b86a1bfa609e3a7df29a9d871bf92c/Cadastro_Novo_usu__rio_User_Management_PT.png)
4. Clique em `+ Adicionar perfis`.
5. Selecione os [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) desejados, conforme ilustrado pela imagem:
  ![Selecionar perfis User Management PT](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/f04120c62872db0a334a94cd6eaa27d0/Selecionar_perfis_User_Management__PT.png)
6. Clique em `Adicionar perfis` para confirmar a seleção.
7. Clique em `Salvar`.  

O usuário irá receber um e-mail confirmando o cadastro, com um link para cadastrar a senha de acesso.

A senha deverá ter pelo menos oito caracteres e um número, uma letra maiúscula e uma letra minúscula. Após preenchê-las, uma chave de acesso será enviada por e-mail, para validar o cadastro.

## Editar usuários

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Para editar um usuário já cadastrado, clique em seu nome a partir da listagem de usuários. Outra possibilidade é clicar no botão de menu <i class="fas fa-ellipsis-v"></i> na linha do usuário desejado e então em **Editar**.
  ![Botão Editar Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/4795fe5b550804de645180f2ce973cb0/Bot__o_Editar_Usu__rio_User_Management_PT.png)
  >⚠️ Não é possível alterar o email de um usuário cadastrado. Neste caso, é necessário excluir o cadastro anterior e fazer um novo cadastro.
3. Na tela de edição, é possível adicionar e remover [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) do usuário, conforme ilustrado a seguir.
  ![Selecionar perfis User Management PT](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/f04120c62872db0a334a94cd6eaa27d0/Selecionar_perfis_User_Management__PT.png) 
4. Clique em `Adicionar perfis` para confirmar a seleção.
5. Clique em `Salvar`.

>ℹ️ Um alerta irá aparecer ao adicionar perfis de acesso a um usuário que não utiliza autenticação de múltiplos fatores (MFA). O artigo [Habilitar login por autenticação de 2 fatores](https://help.vtex.com/pt/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ) mostra como habilitar essa configuração.

>⚠️ Se todos os perfis de acesso forem removidos do usuário, ele também não conseguirá mais acessar o Admin VTEX.

## Excluir um usuário

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Para remover o acesso de um usuário, na listagem de usuários, clique no botão de menu <i class="fas fa-ellipsis-v"></i> na linha do usuário que deseja remover.
3. Clique no item **Excluir**.  
  ![Botão Excluir Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/211543a868c70430b56872901e1a834d/Bot__o_Excluir_Usu__rio_User_Management_PT.png)
  Aparecerá uma mensagem para confirmar a exclusão do usuário.
4. Para confirmar, clique no botão `SIM, REMOVER O ACESSO`.  
  ![Confirmar Remover Acesso User Management PT](//images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/682ccb51fcb859c7f0f50f7914049718/Confirmar_Remover_Acesso_User_Management_PT.png)

## Exportar dados de usuários

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Para exportar os dados de usuários, clique no botão <i class="fas fa-download"></i> `Exportar`.
3. Salve o arquivo CSV no seu dispositivo. O arquivo contém o ID, o email e o nome de cada usuário.
