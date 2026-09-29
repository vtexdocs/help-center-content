---
title: 'Gerenciar perfis de acesso e permissões de storefront personalizados'
createdAt: '2026-09-29T18:10:00.000Z'
updatedAt: '2026-09-29T18:10:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: manage-custom-storefront-roles-and-permissions
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt), atualmente disponível para contas selecionadas.

A página **Permissões personalizadas** possibilita que você visualize os perfis de acesso e as permissões de storefront personalizados da sua conta e os gerencie pelo VTEX Admin.

Para entender os conceitos, as regras e a lista de perfis e permissões predefinidos, leia [Perfis de acesso e permissões de storefront personalizados](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-e-permissoes-de-storefront-personalizados).

Para acessar a página no VTEX Admin, clique em **Configurações > Permissões personalizadas**.

A partir desta página, você pode:

- Gerenciar perfis de acesso personalizados:
  - [Criar perfil de acesso de storefront personalizado](#criar-perfil-de-acesso-de-storefront-personalizado)
  - [Editar perfil de acesso de storefront personalizado](#editar-perfil-de-acesso-de-storefront-personalizado)
  - [Excluir perfil de acesso de storefront personalizado](#excluir-perfil-de-acesso-de-storefront-personalizado)
- Gerenciar permissões personalizadas:
  - [Criar permissão de storefront personalizada](#criar-permissao-de-storefront-personalizada)
  - [Excluir permissão de storefront personalizada](#excluir-permissao-de-storefront-personalizada)

## Requisitos

Dois requisitos precisam ser atendidos para acessar a página **Permissões personalizadas**:

- A conta precisa utilizar o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Em contas que não estão nessa edição, a página não fica visível nem pode ser acessada.
- O usuário deve ter um perfil de acesso do Admin com o [recurso do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) **Edit Storefront User Permissions**, na categoria **Services access control**. Sem esse recurso, o usuário não vê a página.

### Aba Perfis

A aba **Perfis** apresenta apenas os perfis de acesso personalizados da conta. Os perfis predefinidos não aparecem na lista, mas você pode consultá-los pelo link **Perfis predefinidos**, disponível na aba. Se a conta ainda não tiver nenhum perfil personalizado, a aba exibe uma mensagem com o botão `Criar perfil`.

Na parte superior da aba, o botão `Criar perfil` abre o formulário de criação de um novo perfil.

Abaixo, a lista de perfis apresenta os perfis em ordem alfabética, de A a Z. Para inverter a ordem, clique no título da coluna **Nome**. Quando há muitos perfis, a lista é dividida em páginas.

| Coluna | Descrição |
| --- | --- |
| **Nome** | Nome que identifica o perfil de acesso, definido no momento da criação. |
| **Ações** | Menu com as ações de `Editar perfil` ou `Excluir` um perfil. |

O menu na linha de cada perfil apresenta as seguintes opções:

- **Editar perfil:** abre o formulário de edição do perfil. Leia [Editar perfil de acesso de storefront personalizado](#editar-perfil-de-acesso-de-storefront-personalizado).
- **Excluir:** remove o perfil depois de uma confirmação. A opção fica desabilitada enquanto o perfil estiver atribuído a algum usuário. Leia [Excluir perfil de acesso de storefront personalizado](#excluir-perfil-de-acesso-de-storefront-personalizado).

### Aba Permissões

A aba **Permissões** apresenta apenas as permissões personalizadas da conta. As permissões predefinidas não aparecem na lista, mas você pode consultá-las pelo link **Permissões predefinidas**, disponível na aba. Se a conta ainda não tiver nenhuma permissão personalizada, a aba exibe uma mensagem com o botão `Criar permissão`.

Na parte superior da aba, você encontra:

- **Contador de permissões:** indica quantas permissões personalizadas a conta já criou, no formato `{n} de 10 permissões personalizadas`. Um ícone de ajuda ao lado explica que cada conta pode ter até 10 permissões personalizadas e que as predefinidas não contam para o limite.
- **Botão `Criar permissão`:** abre o formulário de criação de uma nova permissão. Quando a conta atinge o limite de 10, o botão fica desabilitado e um aviso acima da lista explica que é necessário excluir uma permissão que não esteja em uso para criar outra.

A lista de permissões apresenta as permissões personalizadas da conta, com as informações a seguir:

| Coluna | Descrição |
| --- | --- |
| **Nome** | Nome que identifica a permissão, definido no momento da criação. |
| **Descrição** | Texto que explica o que a permissão autoriza. |
| **Perfis que utilizam** | Perfis de acesso que contêm a permissão. Quando há mais de um perfil, a coluna mostra o nome do primeiro seguido do total de outros perfis, por exemplo, `Comprador, +2`. Ao passar o cursor sobre o texto, uma dica lista todos os perfis. |
| **Criado em** | Data de criação da permissão. Ao passar o cursor sobre a data, uma dica mostra o dia e o horário exatos. |
| **Ações** | Menu com a ação de `Excluir` uma permissão. |

O menu na linha de cada permissão apresenta a opção **Excluir**, que remove a permissão depois de uma confirmação. A opção fica desabilitada enquanto a permissão estiver em uso por algum perfil de acesso. Leia [Excluir permissão de storefront personalizada](#excluir-permissao-de-storefront-personalizada). Não é possível editar uma permissão depois de criada.

## Gerenciar perfis de acesso de storefront personalizados

Nesta seção, você aprende a criar, editar e excluir perfis de acesso personalizados.

### Criar perfil de acesso de storefront personalizado

Para criar um perfil de acesso personalizado, siga as instruções abaixo:

1. No VTEX Admin, acesse **Configurações > Permissões personalizadas**.
2. Na aba **Perfis**, clique em `Criar perfil`.
3. Em **Nome**, digite o nome do perfil.

    > ⚠️ É importante escolher nomes descritivos para os perfis de acesso, deixando claro que tipo de usuário deve ter aquele acesso.
4. Na lista de permissões, marque as que o perfil deve conter. Para encontrá-las mais rápido, você pode buscar pelo nome da permissão ou filtrar por **Tipo**: **Todos**, **Personalizados** ou **Predefinidos**.
5. Clique em `Criar perfil`.

    Uma mensagem confirma a criação e o perfil é listado na aba **Perfis**. O botão `Criar perfil` só é habilitado depois que o nome é preenchido com um valor válido.

#### Criar permissão de storefront durante a criação do perfil

Se a permissão de que você precisa ainda não existe, é possível criá-la sem sair do formulário de criação do perfil:

1. Com o formulário do perfil aberto, abaixo da lista de permissões, clique em `Criar uma permissão`.
2. Preencha **Nome** e **Descrição** da permissão e conclua a criação.

    O nome e as permissões que você já marcou no perfil são mantidos.
3. Na lista de permissões, localize a nova permissão, identificada pela etiqueta **Novo**. Ela aparece desmarcada. Marque-a para incluí-la no perfil.
4. Clique em `Criar perfil`.

Se a conta já tiver 10 permissões personalizadas, a opção **Criar uma permissão** não é exibida. No lugar dela, uma mensagem informa que o limite foi atingido e orienta você a excluir, na aba **Permissões**, as permissões que não estão em uso. A lista continua exibindo todas as permissões existentes, então ainda é possível montar o perfil.

### Editar perfil de acesso de storefront personalizado

> ⚠️ Ao remover uma permissão de um perfil de acesso, a alteração vale imediatamente para todos os usuários que têm esse perfil.

Para editar um perfil de acesso personalizado, siga as instruções abaixo:

1. No VTEX Admin, acesse **Configurações > Permissões personalizadas**.
2. Na aba **Perfis**, clique no ícone de menu (⋮) do perfil que você quer editar e selecione `Editar perfil`.
3. Altere o nome ou as permissões do perfil.

    As permissões atuais aparecem marcadas. As permissões criadas depois da última vez em que o perfil foi salvo aparecem desmarcadas e com a etiqueta **Novo**, para que você decida se quer incluí-las.
4. Clique em `Salvar alterações`.

    Uma mensagem confirma a atualização. Se você alterou o nome, o perfil passa para a posição correspondente na ordem alfabética.

### Excluir perfil de acesso de storefront personalizado

Para excluir um perfil de acesso personalizado, siga as instruções abaixo:

1. No VTEX Admin, acesse **Configurações > Permissões personalizadas**.
2. Na aba **Perfis**, clique no ícone de menu (⋮) do perfil que você quer excluir.
3. Clique em `Excluir`.
4. Na janela de confirmação, clique em `Excluir` novamente.

    Uma mensagem confirma a exclusão e o perfil é removido da lista.

Se a opção **Excluir** estiver desabilitada, o perfil está atribuído a algum usuário, e a dica explica o motivo. Para excluí-lo, remova o perfil de todos os usuários que o têm. Saiba como em [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora).

## Gerenciar permissões de storefront personalizadas

Nesta seção, você aprende a criar e excluir permissões personalizadas. Não é possível editar uma permissão depois de criada.

### Criar permissão de storefront personalizada

Para criar uma permissão personalizada, siga as instruções abaixo:

1. No VTEX Admin, acesse **Configurações > Permissões personalizadas**.
2. Na aba **Permissões**, clique em `Criar permissão`.
3. Em **Nome**, digite o nome da permissão.

    > ⚠️ O nome deve seguir as [regras das permissões personalizadas](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-e-permissoes-de-storefront-personalizados#regras-e-limites-das-permissoes-de-storefront-personalizadas) e não pode ser alterado depois da criação.
4. Em **Descrição**, explique o que a permissão autoriza.
5. Clique em `Criar`.

    Uma mensagem confirma a criação e a permissão é listada na tabela. Para que ela tenha efeito, associe-a a um perfil de acesso. Na própria mensagem, o botão `Ir para a aba Perfis` leva você à lista de perfis.

### Excluir permissão de storefront personalizada

Para excluir uma permissão personalizada, siga as instruções abaixo:

1. No VTEX Admin, acesse **Configurações > Permissões personalizadas**.
2. Na aba **Permissões**, clique no ícone de menu (⋮) da permissão que você quer excluir.
3. Clique em `Excluir`.
4. Na janela de confirmação, clique em `Excluir` novamente.

    Uma mensagem confirma a exclusão e a permissão é removida da lista. Se a conta estava no limite de 10 permissões personalizadas, o botão `Criar permissão` volta a ficar disponível.

Se a opção **Excluir** estiver desabilitada, a permissão está em uso por algum perfil de acesso, e a dica informa quantos perfis a utilizam. A coluna **Perfis que utilizam** mostra quais são. Para excluir a permissão, remova-a de cada um desses perfis, seguindo os passos de [Editar perfil de acesso de storefront personalizado](#editar-perfil-de-acesso-de-storefront-personalizado).

> ℹ️ Para gerenciar perfis de acesso e permissões personalizados via API, acesse a [Storefront Roles API](https://developers.vtex.com/docs/api-reference/storefront-roles-api) e o guia para desenvolvedores [Custom storefront roles and resources](https://developers.vtex.com/docs/guides/custom-storefront-roles-and-resources).

## Saiba mais

- [Perfis de acesso e permissões de storefront personalizados](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-e-permissoes-de-storefront-personalizados)
- [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora)
- [Recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager)
