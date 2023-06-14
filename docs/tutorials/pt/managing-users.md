---
title: 'Gerenciar usuários'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2022-08-24T14:24:37.685Z
publishedAt: 2022-08-24T14:24:37.685Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slug: gerenciando-usuarios
legacySlug: criando-usuarios
subcategory: 63DHe3VQEEE6Uuua8gIs2M
---

A gestão dos usuários com acesso ao ambiente administrativo da sua loja VTEX é feita pelo [Gerenciamento da conta](/pt/tutorial/visao-geral-do-modulo-license-manager/), na seção de **Usuários**. Para acessar a seção, no painel esquerdo do Admin vá em __Gerenciamento da conta__ > __Usuários__.  
![Menu Usuários](//images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/1ced4757cb7ffdac1e796831a072cee4/Menu_Usu__rios.png)

Esta seção irá mostrar a lista de usuários com os respectivos __Nome__, __Email__ e configuração de __MFA__. Também estão presentes opções de busca de usuários, exportar usuários e criar novos usuários. Outras opções disponíveis por esta interface são de editar ou excluir cada usuário.  
![Lista Usuários User Management PT](//images.ctfassets.net/alneenqid6w5/1IjRv0l2rDBrSWtHj82CDm/3440b1f6633113c14bf91d9147d4eb0a/Lista_Usu__rios_User_Management_PT.png)

## Criando um novo usuário

1. Acesse o módulo __Gerenciamento da conta__.
2. Clique na aba __Usuários__.  
![Menu Usuários](//images.ctfassets.net/alneenqid6w5/4ufKrojjLZwb8zBdD5xz7f/1ced4757cb7ffdac1e796831a072cee4/Menu_Usu__rios.png)
3. Clique no botão **(+) Novo**.  
![Botão Novo Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/2MzlIdrqPecPcrnjeSMTTx/2e22d8445ad59154fcf3a74143ba4e83/Bot__o_Novo_Usu__rio_User_Management_PT.png)
4. Preencha o **Email**.  
![Cadastro Novo usuário User Management PT](//images.ctfassets.net/alneenqid6w5/6EWyev5Qu1nYYxbL1K8YMw/24b86a1bfa609e3a7df29a9d871bf92c/Cadastro_Novo_usu__rio_User_Management_PT.png)
5. Adicione os [Perfis de acesso](/pt/tutorial/como-criar-perfil-de-acesso/) desejados.  
![Selecionar perfis User Management PT](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/f04120c62872db0a334a94cd6eaa27d0/Selecionar_perfis_User_Management__PT.png)
6. Clique no botão **Salvar**.  
![Botão Salvar Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/707TZ7u4fRaSVGVDfaLcMC/d121f227059e530135daa14216055cf8/Bot__o_Salvar_Usu__rio_User_Management_PT.png)

O usuário irá receber um e-mail confirmando o cadastro e com um link para cadastrar a senha de acesso.

A senha deverá ter pelo menos 8 caracteres e um número, uma letra maiúscula e uma letra minúscula. Após preenchê-las, uma chave de acesso será enviada por e-mail, para validar o cadastro.

## Editando usuários

Para editar um usuário já cadastrado bastará clicar em seu nome a partir da listagem de usuários. Outra possibilidade é clicar no botão com três pontos do usuário desejado e então em **Editar**.
![Botão Editar Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/5XzJuCftOAty7JHkxHO5Th/4795fe5b550804de645180f2ce973cb0/Bot__o_Editar_Usu__rio_User_Management_PT.png)

Não é possível alterar o e-mail. Neste caso, é necessário fazer um novo cadastro.

Na tela de edição é possível adicionar e remover os [Perfis de acesso](/pt/tutorial/como-criar-perfil-de-acesso/) do usuário.  
![Selecionar perfis User Management PT](//images.ctfassets.net/alneenqid6w5/4wSp2QkYZH114DFFEOo3ly/f04120c62872db0a334a94cd6eaa27d0/Selecionar_perfis_User_Management__PT.png)

<div class="alert alert-info" role="alert">Um alerta irá aparecer ao adicionar perfis de acesso a um usuário que não utiliza autenticação de múltiplos fatores (MFA). O artigo <a href="https://help.vtex.com/pt/tutorial/habilitar-login-por-autenticacao-de-2-fatores--4Ae1fcQi12g8u4SkQKCqWQ">Habilitar login por autenticação de 2 fatores</a> mostra como habilitar essa configuração.</div>

<div class="alert alert-warning" role="alert">Se todos os perfis de acesso forem removidos do usuário, ele também não conseguirá mais acessar o admin.</div>

## Excluindo um usuário

1. Para remover o acesso de um usuário, na listagem de usuários clique no botão com três pontos do usuário que deseja remover.
2. Clique no item **Excluir**.  
![Botão Excluir Usuário User Management PT](//images.ctfassets.net/alneenqid6w5/40v9IfXb47lKyi79vZgWpJ/211543a868c70430b56872901e1a834d/Bot__o_Excluir_Usu__rio_User_Management_PT.png)
3. Aparecerá uma mensagem para confirmar a exclusão do usuário. Para confirmar, clique no botão **SIM, REMOVER O ACESSO**.  
![Confirmar Remover Acesso User Management PT](//images.ctfassets.net/alneenqid6w5/2lnDFzfX0ZPsZM8uX59Nq7/682ccb51fcb859c7f0f50f7914049718/Confirmar_Remover_Acesso_User_Management_PT.png)

<div class="alert alert-info">
Embora tokens de integração apareçam na listagem de usuários, eles não podem ser excluídos. Para desativá-los, acesse <em>Configuração da conta > Gerenciamento da conta > Conta</em> e desmarque o campo <strong>Status dos Tokens</strong>.
</div>

## Exportando dados de usuário

1. Para exportar os dados do usuário, clique no botão **EXPORTAR**.
2. Salve o arquivo csv no seu dispositivo. O arquivo contém o id, o email e o nome de cada usuário.
