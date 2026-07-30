---
title: 'Visão geral do VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-07-30T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: pt
---

> ℹ️ Para conhecer o VTEX CX Platform e implementá-lo no seu negócio, [agende uma demonstração](https://www.vtex.com/en-us/products/cx_platform/).

O **VTEX CX Platform** é a solução de commerce conversacional que permite criar agentes de inteligência artificial (IA) autônomos para atuar em toda a jornada do cliente, do primeiro contato ao pós-venda. Esses agentes executam ações diretamente na sua operação, como consultar o status de um pedido, aplicar promoções, finalizar a compra e recuperar carrinhos abandonados.

A plataforma se conecta nativamente à sua operação de commerce, como pedidos, catálogo, checkout e promoções. Isso dá aos agentes acesso a dados em tempo real e permite resolver as solicitações dos clientes de ponta a ponta em uma única conversa, em canais como WhatsApp, webchat, voz, email e redes sociais.

## Funcionalidades

Confira algumas das funcionalidades do **VTEX CX Platform**:

- **Agentes autônomos** planejam e executam tarefas complexas, sem depender de fluxos fixos e predefinidos.
- **Concierge de produtos** recomenda itens com base no catálogo, no estoque e nas promoções em tempo real.
- **Acompanhamento de pedidos** informa o status em tempo real por meio do acesso nativo ao OMS.
- **Trocas, devoluções e cancelamentos** são resolvidos de ponta a ponta, sem intervenção humana.
- **Recuperação de carrinhos abandonados** reengaja o cliente com contexto do produto e checkout direto na conversa.
- **Pagamento no chat** finaliza a compra sem sair da conversa, com Pix, crédito ou débito.
- **Campanhas conversacionais** promovem reativação, reposição de estoque e upsell por meio de mensagens com templates aprovados.
- **Analytics** oferece dados e métricas sobre os atendimentos e os resultados da operação.

Este tutorial ajuda você a navegar pela plataforma e está dividido nas seguintes seções:

- [Cadastrar e fazer login](#cadastrar-e-fazer-login)
- [Criar organização e projeto](#criar-organização-e-projeto)
- [Acessar perfil](#acessar-perfil)
- [Sistema de permissões](#sistema-de-permissões)
- [Alterar idioma da plataforma](#alterar-idioma-da-plataforma)

## Cadastrar e fazer login

Ao acessar a plataforma, você pode criar um cadastro gratuito ou fazer login em uma conta existente.

Para criar um cadastro gratuito, siga os passos abaixo:

1. Acesse o [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/login-actions/registration?client_id=weni-webapp&tab_id=GrzDdSDmT-8&client_data=eyJydSI6Imh0dHBzOi8vZGFzaC53ZW5pLmFpL3Byb2plY3RzLzZjZjZiODIzLTFkYjktNDg5Ny04NTFmLWM2OTZlOTkxMjA2NS9zZXR0aW5ncy9wcm9qZWN0L3IvaW5pdCIsInJ0IjoiY29kZSIsInJtIjoiZnJhZ21lbnQiLCJzdCI6IjcwOGI1OTA4LTcwMTktNDcxMi05YTQ5LWY3OGRhMTM5MGM2OCJ9).
2. Insira seu email e a senha desejada.
3. Clique em `Criar uma conta`.

Você também pode fazer o cadastro com os seguintes provedores: **GitHub**, **Google** e **Microsoft**.

Se você concluiu o cadastro ou recebeu um convite para uma organização, mas ainda não tem cadastro na plataforma, preencha os campos exibidos na tela e clique em `Avançar`.

Para fazer login em uma conta existente, siga os passos abaixo:

1. Acesse o [VTEX CX Platform](https://accounts.weni.ai/auth/realms/weni/protocol/openid-connect/auth?client_id=weni-webapp&redirect_uri=https%3A%2F%2Fdash.weni.ai%2Fprojects%2F6cf6b823-1db9-4897-851f-c696e9912065%2Fsettings%2Fproject%2Fr%2Finit&state=708b5908-7019-4712-9a49-f78da1390c68&response_mode=fragment&response_type=code&scope=email%20profile%20openid%20offline_access&code_challenge=FEKSvKUaU81i_zufbxFiZg40t-efyp6Krh2xutDxkSY&code_challenge_method=S256).
2. Insira seu email e sua senha.
3. Clique em `Entrar`.

Se o seu cadastro foi feito com o **GitHub**, **Google** ou **Microsoft**, selecione uma dessas opções para fazer o login.

### Preencher os dados de organização e projeto

> ℹ️ Se a sua organização já existe e você foi convidado para ela, preencha os campos com nomes fictícios apenas para se registrar na plataforma. Não é necessário usar os nomes reais da empresa.

Após preencher os campos, clique em `Avançar`.

Em seguida, escolha entre criar um agente personalizado ou usar um template.

Para criar um agente personalizado, preencha os campos abaixo:

1. **Nome do agente**: nome do agente, como "Atendimento".
2. **Objetivo**: objetivo do agente, como "Tirar dúvidas dos clientes".

> ℹ️ Defina claramente o objetivo principal do seu agente ao interagir com os clientes, por exemplo: "Auxiliar os clientes a encontrar produtos adequados às suas necessidades" ou "Fornecer suporte técnico". Isso orienta as conversas de forma direta e assertiva.

3. **Conteúdo**: conteúdo de base do agente. Preencher o conteúdo é opcional na etapa de cadastro e pode ser adicionado depois.

> ℹ️ Ao incluir uma base de conteúdo, você capacita seu agente inteligente a responder aos usuários com mais eficácia. Você pode importar informações essenciais arrastando e soltando arquivos, com o texto integrado automaticamente, inserindo conteúdos de sites ou escrevendo o que desejar na base.

Os templates são fluxos prontos com finalidades específicas, divididos em três categorias: suporte, integrações e vendas. Ao clicar em um dos cards de uma categoria, você visualiza um pop-up que detalha o uso do template.

> ℹ️ Se optar por um template, clique na aba correspondente e escolha um dos templates disponíveis.

Clique em `Concluir` para seguir adiante.

## Criar organização e projeto

Para criar uma nova organização, siga os passos a seguir:

1. Na página inicial do VTEX CX Platform, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Criar organização`.
2. Digite um nome para sua organização, a descrição da organização e o nome do projeto.
3. Clique em `Avançar`.
4. Na etapa de configuração do projeto, você pode escolher entre **Criar um agente personalizado** ou **Usar template**.

Para criar um agente personalizado, siga o passo a passo a seguir:

1. Preencha o nome do agente e o objetivo desse agente.
2. Em seguida, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Adicionar conteúdo`.
  - Nesse campo, você pode adicionar informações que o agente vai usar no seu projeto, como arquivos de catálogo ou o site da sua loja. Depois, clique em `Finalizar`.
  - Essa etapa é opcional no momento de criação de uma organização e o conteúdo pode ser adicionado depois.
3. Clique em `Concluir`.

Os templates são fluxos prontos com finalidades específicas, divididos em três categorias: **Suporte**, **Integrações** e **Vendas**.

Para usar um template, siga o passo a passo a seguir:

1. Selecione um dos templates, como _Suporte_ ou _Captura de Leads_, para ver mais informações.
2. Clique em `Usar template` para ativar o template.
3. Preencha a descrição do projeto.
4. Clique em `Concluir`.

Após criar um agente personalizado ou escolher um template, a última etapa é concluída. Para entrar no seu projeto, clique em `Começar`.

> ℹ️ Depois de criar a organização e o projeto, inclua a sua equipe configurando as permissões. As pessoas adicionadas à organização terão acesso a todos os projetos criados dentro dela. Para saber mais, consulte a seção [Sistema de permissões](#sistema-de-permissões).

Para saber como adicionar ou gerenciar membros da organização ou do projeto, acesse o artigo [Gerenciar membros do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/gerenciar-membros-do-vtex-cx-platform).

## Alterar idioma da plataforma

Para alterar o idioma, siga os passos abaixo:

1. Clique no seu nome de usuário.
2. Clique em `Idioma`.
3. Escolha um dos idiomas.
  - No momento, a plataforma oferece quatro opções de idioma: **English**, **Español**, **Português (Brasil)** e **Română**.

> ℹ️ Caso a plataforma não mude o idioma, você pode sair e entrar novamente na plataforma ou reiniciar o navegador.

## Acessar perfil

A seção **Perfil** permite gerenciar sua conta e editar preferências pessoais, de segurança e notificações.

Na aba **Perfil**, você pode mudar seu nome, sobrenome, foto de perfil, número de contato e senha.

Em **Preferências**, você seleciona quais emails deseja receber do VTEX CX Platform.

Em **Privacidade e segurança**, você consegue ativar a autenticação de dois fatores seguindo os passos abaixo:

1. Clique no seu nome de usuário.
2. Clique em `Perfil`.
3. Selecione a seção **Privacidade e segurança**.
4. Ative o botão `Habilitar autenticação`.
5. Clique em `Salvar alterações`.

Após salvar, você é deslogado da plataforma automaticamente.

Ao fazer login novamente, siga os passos abaixo:

1. Abra o aplicativo autenticador de sua escolha e escaneie o QR code exibido na tela.
2. Na plataforma, digite o código de uso único que aparece no aplicativo.
3. Clique em `Salvar` para concluir a configuração.

> ℹ️ A partir de então, o login exigirá o código de verificação exibido no seu aplicativo autenticador.

### Solicitação de autenticação na organização

Para adicionar uma camada extra de segurança aos projetos e dados da sua organização, você pode permitir que apenas usuários com a autenticação de dois fatores habilitada entrem na organização.

Para solicitar a autenticação de dois fatores na organização, siga os passos abaixo:

1. Clique no ícone de <i class="fas fa-ellipsis-v" aria-hidden="true"></i> no card da organização.
2. Clique em `Configurações`.
3. Selecione a aba **Segurança**.
4. Em **Autenticação de dois fatores**, clique no botão de alternância de **Ativar autenticação**.
5. Por fim, clique em `Salvar alterações`.

## Sistema de permissões

No VTEX CX Platform, você pode gerenciar diferentes permissões para cada usuário, divididas em dois grupos:

- [Permissões da organização](#permissões-da-organização)
- [Permissões do projeto](#permissões-do-projeto)

### Permissões da organização

Essas permissões podem ser adicionadas na etapa de criação da organização ou a qualquer momento pelo ícone de configurações da organização.

As permissões da organização estão descritas a seguir:

- **Admin:** tem acesso completo à plataforma e pode adicionar novos membros ou mudar as permissões dos membros existentes.
- **Financeiro:** acessa apenas a área de faturamento.
- **Contribuidor:** pode criar novos projetos e editar conteúdo.
- **Marketing:** acessa apenas o módulo de **Contatos** e consegue enviar templates de mensagens.

> ⚠️ As permissões da organização se aplicam a todos os projetos dentro dela.

### Permissões do projeto

Também é possível adicionar permissões a um projeto específico, e não necessariamente à organização inteira. Para acessar as opções, clique em `Gerenciar membros` no projeto desejado.

As permissões de projeto são as seguintes:

- **Moderador:** tem acesso de completo de administrador de um projeto. Pode realizar qualquer alteração ou configuração do projeto.
- **Contribuidor:** pode editar conteúdo (por exemplo, fluxos, instruções, templates de messagens).
- **Visualizador:** apenas faz a leitura de informações, como fluxos, contatos, mensagens, mas sem poder editá-las.
- **Marketing:** tem acesso aos módulos **Campanhas** e **Contatos** para configurar e gerenciar disparos de campanhas com templates.
- **Human support:** permissão exclusiva do atendente humano. Apenas tem acesso ao módulo **Live Desk**.

> ⚠️ As permissões de um projeto se aplicam especificamente ao projeto e podem ser diferentes das permissões de organização. Por exemplo, se um usuário tem permissão de Admin na organização e de Visualizador em um projeto, ele pode realizar modificações em toda a organização, exceto no projeto em que ele foi designado como Visualizador. Nesse projeto, ele não pode editar as informações, apenas visualizá-las.
