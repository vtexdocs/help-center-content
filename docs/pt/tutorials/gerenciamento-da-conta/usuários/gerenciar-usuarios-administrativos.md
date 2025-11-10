---
title: 'Gerenciar usuários administrativos'
id: tutorials_512
status: PUBLISHED
createdAt: 2017-04-27T22:03:09.608Z
updatedAt: 2024-06-10T18:24:36.901Z
publishedAt: 2024-06-10T18:24:36.901Z
firstPublishedAt: 2017-04-27T23:03:28.211Z
contentType: tutorial
productTeam: Identity
author: authors_4
slugEN: managing-admin-users
legacySlug: criando-usuarios
locale: pt
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

A gestão dos usuários com acesso ao ambiente administrativo da sua loja VTEX é feita pelo [Gerenciamento da conta](/pt/docs/tutorials/visao-geral-configuracoes-da-conta), na página de **Usuários**. Para acessá-la, na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__. 

Esta página permite que você realize as seguintes ações: 

* [Criar um usuário](#criar-um-usuario)  
* [Editar um usuário](#editar-usuários)  
* [Excluir um usuário](#excluir-um-usuário)  
* [Exportar usuários](#exportar-dados-de-usuários)

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/usuários/gerenciar-usuarios-administrativos.png)

A página apresenta as seguintes informações em uma tabela: 

| Colunas | Descrição |
| :---- | :---- |
| Email | Email do usuário administrativo cadastrado no Admin VTEX. |
| Perfis de acesso | Perfis de acesso associados ao usuário administrativo. |
| MFA | Configuração de autenticação multifator (MFA), que pode ter status *Inativo* ou exibir o método configurado (*SMS* ou *Authenticator*). Saiba mais em [Habilitar login por autenticação de 2 fatores](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores). |

A barra de busca permite buscar pelo email dos usuários e exibe resultados em tempo real.

## Requisitos

Para gerenciar usuários administrativos, você precisa ter um [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que contenha os [recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager) a seguir:

| Nome do recurso | Chave do recurso (resource_key) | Descrição |
| :---- | :---- | :---- |
| Edit Admin Users | EditAdminUsers | Permite criar, editar e remover usuários administrativos. |
| View Admin Users | ViewAdminUsers | Permite visualizar informações de usuários e perfis de acesso. |

## Criar um usuário

Para adicionar alguém ao Admin VTEX, é necessário cadastrar o email e atribuir os perfis de acesso adequados. Siga os passos abaixo para concluir o processo.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Usuários**.
2. Clique no botão `+ Novo`.
3. Preencha o **Email**.
4. Selecione os [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) desejados.
5. Clique em `Salvar`.

O usuário irá receber um email confirmando o cadastro, com um link para cadastrar a senha de acesso. A senha deverá ter pelo menos oito caracteres e um número, uma letra maiúscula e uma letra minúscula. Após preenchê-la, uma chave de acesso será enviada por email para validar o cadastro.

## Editar um usuário

Se for preciso ajustar as permissões de acesso ou atualizar os perfis de um usuário já cadastrado, edite o usuário conforme as instruções a seguir.

Aplique o princípio do mínimo acesso, ou seja, manter cada usuário apenas com os perfis e recursos estritamente necessários para desempenhar suas atividades diárias. Isso ajuda a reduzir riscos de segurança e garante um controle mais eficiente do ambiente.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Usuários**.
2. Para editar um usuário já cadastrado, clique no botão de menu ⋮ na linha do usuário desejado e então em **Editar**.

   Não é possível alterar o email de um usuário cadastrado. Neste caso, é necessário excluir o cadastro anterior e fazer um novo cadastro.
3. Na tela de edição, é possível adicionar e remover [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) do usuário.
4. Após fazer as alterações desejadas, clique em `Salvar`.

> ℹ️ Um alerta irá aparecer ao editar um usuário que não utiliza autenticação de múltiplos fatores (MFA). O artigo [Habilitar login por autenticação de 2 fatores](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores) mostra como habilitar essa configuração.

> ⚠️ Se todos os perfis de acesso forem removidos do usuário, ele não conseguirá mais acessar o Admin VTEX.

## Excluir um usuário

Quando um colaborador não deve mais acessar o Admin VTEX, é preciso remover seu cadastro. Veja abaixo como realizar essa exclusão de forma segura.

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Para remover o acesso de um usuário, na listagem de usuários, clique no botão de menu <i class="fas fa-ellipsis-v"></i> na linha do usuário que deseja remover.
3. Clique em **Excluir**.

   Aparecerá uma mensagem para confirmar a exclusão do usuário.
4. Para confirmar, clique em `Sim, remover acesso`.

## Exportar usuários

Caso precise consultar ou salvar uma lista de todos os usuários administrativos cadastrados, você pode exportar os dados em arquivo CSV. Confira a seguir como gerar esse relatório:

1. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > __Usuários__.
2. Para exportar os dados de usuários, clique no botão <i class="fas fa-download"></i> `Exportar`.

   O download do arquivo CSV começará automaticamente. O arquivo contém ID, email, perfis de acesso e configuração de MFA para cada usuário.

## Saiba mais

* [Gerenciamento da conta](/pt/docs/tutorials/visao-geral-configuracoes-da-conta)
* [Perfis de acesso](/pt/docs/tutorials/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc)
* [Recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager)
* [Habilitar login por autenticação de 2 fatores](/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores)
