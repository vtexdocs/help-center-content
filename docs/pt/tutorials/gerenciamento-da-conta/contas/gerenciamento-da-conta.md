---
title: 'Gerenciamento da conta'
id: 2vhUVOKfCaswqLguT2F9xq
status: PUBLISHED
createdAt: 2023-04-25T20:31:19.403Z
updatedAt: 2024-03-09T00:12:08.991Z
publishedAt: 2024-03-09T00:12:08.991Z
firstPublishedAt: 2023-05-24T17:48:42.796Z
contentType: tutorial
productTeam: Identity
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: account-management
legacySlug: pagina-de-detalhes-da-conta
locale: pt
subcategoryId: yMp6sKDiJEi66CGAIQ4ma
---

A página de **Conta** permite que você visualize e gerencie detalhes da sua conta VTEX. Para acessá-la, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e clique em **Configurações da conta** > **Conta.**

![Admin v4 account settings menu PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_1.jpg)

> ⚠️ Esta tela não tem detalhes de chaves de aplicação. Saiba onde encontrar e gerenciar estas informações no artigo [Chaves de aplicação](/pt/tutorial/chaves-de-aplicacao--2iffYzlvvz4BDMr6WGUtet).

As funções da página de **Conta** dividem-se em duas abas: [Geral](#geral) e [Lojas](#lojas). Confira abaixo mais informações sobre cada uma delas.

## Geral

As funcionalidades da aba **Geral** estão dispostas nas seções [Detalhes](#detalhes), [Informações da Empresa](#informacoes-da-empresa) e [Titular](#titular).

![Página de detalhes da conta - seção conta](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_2.png)

Nesta aba você pode:

- Consultar [detalhes da conta](#detalhes).
- Consultar e editar [informações da empresa](#informacoes-da-empresa).
- Consultar [informações do usuário titular](#titular) da conta.

### Detalhes

Nesta seção você pode consultar as informações básicas da sua conta VTEX.

![Página de detalhes da conta - detalhes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_3.png)

- **Nome da conta principal:** [nome de conta VTEX](/pt/docs/tutorials/o-que-e-account-name).
- **Data de criação:** data em que sua conta foi criada.
- **ID da conta:** código único que identifica sua conta.
- **Data de ativação:** data em que sua conta foi ativada, ou seja, se tornou disponível para que fossem realizadas configurações e implementação de loja.
- **Status da conta:** indica se sua conta está em produção ou não. Uma conta em produção é o primeiro passo para [disponibilizar sua loja em um domínio público para clientes](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM). Este status pode ser **Em produção** ou **Não está em produção**.
- **Status da plataforma de administrador:** indica se sua conta está ativa ou não, ou seja, se o Admin e as APIs VTEX estão disponíveis para que você realize configurações e implementação da sua loja. Este status pode ser **Ativo** ou **Inativo**.

### Informações da empresa

Nesta seção você visualiza os seguintes dados de cadastro da sua empresa:

- Logotipo
- Nome legal
- CNPJ

![Página de detalhes da conta - Informações da empresa](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_4.png)

#### Editar informações da empresa

Você pode editar as informações de cadastro da empresa seguindo os passos abaixo:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Vá até a seção **Informações da empresa**.
3. Clique em `Editar`.
4. Altere as informações desejadas, entre:
    - **Logotipo**
    - **Nome comercial**
    - **Nome legal**
    - **CNPJ**
5. Clique em `Salvar`.

> ⚠️ Sua logotipo deve ser um arquivo JPG, GIF ou PNG de até 800 kb.

### Titular

Esta seção apresenta detalhes do usuário titular da conta. Cada conta VTEX tem apenas um titular, a quem é dado acesso total a todas as seções do Admin, incluindo ações importantes de manutenção e autorização.

> ℹ️ Saiba mais sobre o [usuário titular](/pt/docs/tutorials/o-que-e-o-usuario-titular).

![Página de detalhes da conta - Titular](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_5.png)

Caso você seja o usuário titular, poderá [transferir a propriedade da loja](/pt/tutorial/transferencia-de-propriedade-da-loja) nesta seção. Ou seja, tornar outro usuário o titular da conta.

## Lojas

Na aba lojas, você pode:

- Consultar [lista de lojas](#lojas).
- [Adicionar nova loja](#criar-loja).
- [Editar loja](#editar-loja).
- [Excluir loja](#excluir-loja).

Ao clicar na aba **Lojas**, na parte superior da tela, você verá uma lista com as informações de todas as lojas criadas na sua conta VTEX. 

![Página de detalhes da conta - Lojas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/gerenciamento-da-conta/contas/gerenciamento-da-conta_6.png)

Para cada loja, você pode visualizar os seguintes detalhes:

- **Nome da loja:** identificador interno da loja.
- **Nome comercial:** nome utilizado comercialmente.
- **Hosts:** domínios associados à loja.

Você pode usar a caixa de busca para filtrar as lojas exibidas na lista por qualquer um dos atributos.

Além disso, você poderá [criar uma nova loja](#criar-loja), [editar uma loja](#editar-loja) ou [excluir](#excluir-loja) lojas existentes.

### Criar loja

Para criar uma nova loja, siga os passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão `+ Nova loja`.
4. Preencha as informações básicas da loja:
    - **Nome da loja:**  identificador interno da loja.
    - **Nome comercial:** nome utilizado comercialmente.
    - **Localidade:** idioma predefinido associado a esta loja.
    - **Canal de vendas:** [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#) que deseja associar à nova loja.
5. Se deseja iniciar o processo de [go-live](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM) da sua loja, preencha o campo **Hosts** com o [domínio da sua loja](/pt/tutorial/configurando-dominios-no-license-manager). Caso contrário, deixe este campo em branco.
6. Clique no botão `Criar`.

> ℹ️ Para saber mais sobre a configuração de **Hosts** da sua loja, confira o artigo  [Configurando o domínio da sua loja](/pt/docs/tutorials/configurar-o-dominio-da-loja).

> ⚠️ Não utilize um domínio do tipo ".com" no campo Nome da Loja. Esse tipo de entrada só pode existir nos campos Hosts.

### Editar loja

Você pode editar informações de uma loja existente com estes passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão de ações <i class="fas fa-ellipsis-v"></i> correspondente à loja que deseja editar.
4. Clique em `Editar`.
5. Você verá a página de edição de conta. Edite as informações que deseja.
6. Clique em `Salvar`.

### Excluir loja

Para excluir uma loja, siga estes passos:

1. Acesse a página de **Conta**, clicando no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Conta**.
2. Clique na aba **Loja** na parte superior da tela.
3. Clique no botão de ações <i class="fas fa-ellipsis-v" aria-hidden="true" aria-label="3 pontos"></i> correspondente à loja que deseja excluir.
4. Clique em `Excluir`.
5. Você verá um modal de confirmação. Clique em `Excluir`.

O nome da loja removida não poderá ser utilizado novamente.

> ⚠️ Note que a loja principal, sinalizada com uma estrela ao lado do nome na lista de lojas, não pode ser excluída.

## Saiba mais

- [O que é nome de conta?](/pt/docs/tutorials/o-que-e-account-name)
- [Usuário titular](/pt/docs/tutorials/o-que-e-o-usuario-titular)
- [Transferir a propriedade da loja](/pt/tutorial/transferencia-de-propriedade-da-loja)
- [Configurando o domínio da sua loja](/pt/docs/tutorials/configurar-o-dominio-da-loja)
- [Go-live](/pt/tracks/realizando-o-go-live-da-sua-loja--4Ns5FxIiksmjsdX2yOTduM)

