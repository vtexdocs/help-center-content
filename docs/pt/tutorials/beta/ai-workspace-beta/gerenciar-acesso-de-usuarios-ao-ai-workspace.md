---
title: 'Gerenciar acesso de usuários ao AI Workspace (Beta)'
createdAt: 2026-08-11T00:00:00.000Z
updatedAt: 2026-08-11T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: managing-user-access-to-ai-workspace
locale: pt
---

> ℹ️ Esta funcionalidade está disponível apenas para contas que utilizam o AI Workspace. Caso contrário, consulte [Gerenciar usuários administrativos](https://help.vtex.com/pt/docs/tutorials/gerenciar-usuarios-administrativos).

Agentes do AI Workspace atuam em nome dos usuários e podem encadear chamadas a múltiplos serviços, com permissões que variam conforme quem os aciona. Por isso, definir quais agentes cada usuário pode acessar é fundamental para a governança da conta.

Para contas com AI Workspace, a página **Usuários** no Admin VTEX lista todos os usuários administrativos e os agentes aos quais cada um tem acesso, além de permitir a gestão individual de acesso. Isso garante que cada pessoa interaja apenas com os agentes relevantes ao seu papel.

![Página de usuários administradores com as colunas Email, Perfis de acesso, Agentes e MFA](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_1.png)

A página apresenta as seguintes informações em uma tabela:

| Coluna | Descrição |
| :---- | :---- |
| Email | Email do usuário administrativo cadastrado no Admin VTEX. |
| Perfis de acesso | Perfis de acesso associados ao usuário administrativo. |
| Agentes | Agentes do AI Workspace aos quais o usuário tem acesso. |
| MFA | Configuração de autenticação multifator (MFA), que pode ter status *Inativo* ou exibir o método configurado (*SMS* ou *Authenticator*). Saiba mais em [Habilitar login por autenticação de 2 fatores](https://help.vtex.com/pt/docs/tutorials/habilitar-login-por-autenticacao-de-2-fatores). |

## Requisitos

Para gerenciar usuários administrativos, você precisa ter um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) que contenha os [recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) a seguir:

| Nome do recurso | Chave do recurso (resource_key) | Descrição |
| :---- | :---- | :---- |
| Edit Admin Users | EditAdminUsers | Permite criar, editar e remover usuários administrativos. |
| View Admin Users | ViewAdminUsers | Permite visualizar informações de usuários e de perfis de acesso. |

## Criar um usuário com acesso ao AI Workspace

Para adicionar um novo usuário e definir seu acesso ao AI Workspace, siga os passos abaixo.

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email, e depois em **Configurações da conta > Usuários**.
2. Clique em **Novo**.
3. Preencha o campo **Email** com o endereço do novo usuário.
4. Em **Escopo de acesso**, clique na aba **AI Workspace**.
5. Na seção **Agentes**, marque os agentes que o usuário poderá acessar.

   > ℹ️ Para ver quais recursos cada agente utiliza em nome do usuário, passe o cursor sobre **Recursos** ao lado do agente.
6. Clique em **Criar**.

![Tela de criação de um novo usuário com a aba AI Workspace selecionada e agentes marcados](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_2.png)

## Editar o acesso de um usuário existente

Se for necessário ajustar os agentes disponíveis para um usuário já cadastrado, edite o usuário conforme as instruções a seguir.

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email, e depois em **Configurações da conta > Usuários**.
2. Na linha do usuário desejado, clique em **⋮ > Editar**.
3. Em **Escopo de acesso**, clique na aba **AI Workspace**.
4. Na seção **Agentes**, marque ou desmarque os agentes conforme necessário.

   > ℹ️ Para ver quais recursos cada agente utiliza em nome do usuário, passe o cursor sobre **Recursos** ao lado do agente.
5. Clique em **Salvar**.

![Tela de edição de um usuário existente com a aba AI Workspace selecionada](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-beta/gerenciar-acesso-de-usuarios-ao-ai-workspace_3.png)

> ℹ️ Para excluir usuários, exportar a lista de usuários ou gerenciar o acesso a recursos do Admin VTEX, consulte [Gerenciar usuários administrativos](https://help.vtex.com/pt/docs/tutorials/gerenciar-usuarios-administrativos).
