---
title: 'VTEX CX Platform'
createdAt: 2026-03-31T15:33:34.931Z
updatedAt: 2026-11-12T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-cx-platform-overview
locale: pt
categoryCover: true
seeAlso:
  - /pt/docs/tutorials/atribuir-e-testar-agentes
  - /pt/docs/tutorials/gerenciar-membros-do-vtex-cx-platform
  - /pt/docs/tutorials/nocoes-basicas-sobre-integracoes
  - /pt/docs/tutorials/configurar-o-live-desk
---

O **VTEX CX Platform** é a solução de commerce conversacional que permite criar agentes de inteligência artificial (IA) autônomos para atuar em toda a jornada do cliente, do primeiro contato ao pós-venda. Esses agentes executam ações diretamente na sua operação, como consultar o status de um pedido, aplicar promoções, finalizar a compra e recuperar carrinhos abandonados.

A plataforma se conecta nativamente à sua operação de commerce, incluindo pedidos, catálogo, checkout e promoções. Isso dá aos agentes acesso a dados em tempo real e permite resolver as solicitações dos clientes de ponta a ponta em uma única conversa, em canais como WhatsApp, webchat, voz, email e redes sociais.

> ℹ️ Para avaliar o VTEX CX Platform para sua empresa, [agende uma demonstração](https://www.vtex.com/en-us/products/cx_platform/). Se a loja estiver em período de teste e for elegível para um plano padrão, consulte [Assinando um plano da VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/assinando-um-plano-da-vtex-cx-platform).

## Principais casos de uso

Você pode usar o VTEX CX Platform para:

- Ajudar clientes a encontrar produtos com base nas necessidades e nas informações atuais do catálogo.
- Responder a perguntas sobre pedidos e fornecer atualizações de rastreamento.
- Automatizar trocas, devoluções e cancelamentos elegíveis.
- Recuperar carrinhos abandonados e direcionar os clientes de volta ao checkout.
- Aceitar formas de pagamento compatíveis em uma conversa.
- Enviar campanhas conversacionais de reativação, reposição e upsell.
- Transferir uma conversa para um atendente quando for necessário atendimento humano.
- Monitorar conversas, desempenho do atendimento e resultados operacionais.

As funcionalidades disponíveis dependem do plano, das integrações, dos canais e da configuração do projeto.

## Como a plataforma é organizada

O acesso e os recursos são organizados em dois níveis:

- **Organização:** Agrupa os projetos e membros da empresa. As funções da organização definem o acesso em toda a organização.
- **Projeto:** Contém agentes, conhecimento, canais, contatos, conversas e configurações de uma operação ou caso de uso específico. As funções do projeto definem o que cada membro pode fazer nele.

Depois de abrir um projeto, use o menu principal para acessar os seguintes módulos:

- **Agent Builder:** Configure e teste agentes de IA, adicione fontes de conhecimento, defina instruções e crie fluxos de automação. Consulte [Agent Builder](https://help.vtex.com/pt/docs/tutorials/visao-geral-agent-builder).
- **Studio:** Gerencie contatos, mensagens, campanhas e gatilhos de conversas.
- **Live Desk:** Atenda conversas que exigem suporte humano e consulte o histórico de atendimento. Consulte [Live Desk](https://help.vtex.com/pt/docs/tutorials/visao-geral-do-live-desk).
- **Analytics:** Monitore atendimentos ativos e analise métricas de conversas, entrega de mensagens, equipe e operação. Consulte [Analytics: Métricas de atendimento](https://help.vtex.com/pt/docs/tutorials/analytics-metricas-de-atendimento).
- **Auditoria:** Revise conversas atendidas por agentes de IA, investigue resultados e identifique oportunidades de melhoria. Consulte [Auditoria](https://help.vtex.com/pt/docs/tutorials/auditoria-overview).
- **Integrações:** Conecte canais de comunicação e aplicativos externos ao projeto.
- **Configurações:** Gerencie preferências, credenciais, membros e opções de segurança do projeto. Consulte [Configurações CX Platform: Espaço de trabalho](https://help.vtex.com/pt/docs/tutorials/configuracoes-cx-platform-espaco-de-trabalho).

## Primeiros passos

### Criar ou acessar sua conta

Acesse o [painel do VTEX CX Platform](https://dash.weni.ai/). Você pode criar uma conta com email e senha ou continuar com GitHub, Google ou Microsoft. Use o mesmo método nos próximos acessos.

Se você recebeu um convite, crie ou acesse a conta associada ao email convidado. Depois de entrar, selecione a organização e o projeto incluídos no convite.

### Criar uma organização e um projeto

Se você estiver configurando uma nova operação, siga estas etapas:

1. Na página inicial do VTEX CX Platform, clique em <i class="fas fa-plus" aria-hidden="true"></i> `Criar organização`.
2. Insira o nome e a descrição da organização e o nome do projeto.
3. Clique em `Avançar`.
4. Escolha como iniciar o projeto:
    - **Criar um agente personalizado:** Insira o nome e o objetivo do agente. Você também pode adicionar arquivos, conteúdo de sites ou textos para o agente usar como fonte de conhecimento.
    - **Usar template:** Selecione um template de suporte, integração ou vendas, revise os detalhes e clique em `Usar template`.
5. Preencha as informações solicitadas do projeto e clique em `Concluir`.
6. Clique em `Começar` para abrir o projeto.

Adicionar conteúdo durante a configuração é opcional. Você pode atualizar o conhecimento do agente depois em **Agent Builder > Base de conhecimento**.

> ℹ️ Defina um objetivo específico para o agente, como "Ajudar clientes a encontrar produtos adequados às suas necessidades" ou "Responder a perguntas sobre pedidos". Um objetivo claro ajuda a determinar o comportamento esperado do agente e o conteúdo necessário.

Depois de criar o projeto, convide sua equipe e atribua somente as permissões necessárias. Para ver as instruções, consulte [Gerenciar membros do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/gerenciar-membros-do-vtex-cx-platform).

## Funções e permissões

As permissões podem ser aplicadas a toda a organização ou a um projeto específico.

### Funções da organização

- **Admin:** Gerencia a organização, os membros e suas permissões.
- **Financeiro:** Acessa as informações de faturamento.
- **Contribuidor:** Cria projetos e edita conteúdo.
- **Marketing:** Acessa contatos e envia templates de mensagens.

> ⚠️ As funções da organização se aplicam a todos os projetos dentro dela.

### Funções do projeto

- **Moderador:** Tem acesso administrativo completo ao projeto.
- **Contribuidor:** Edita recursos como fluxos, instruções e templates de mensagens.
- **Visualizador:** Visualiza informações do projeto sem editá-las.
- **Marketing:** Gerencia contatos, campanhas e gatilhos de campanhas.
- **Human support:** Acessa o Live Desk para atender conversas com clientes.

As funções do projeto se aplicam somente ao projeto em que foram atribuídas. Para adicionar membros ou alterar suas funções, abra o menu de ações da organização ou do projeto e clique em `Gerenciar membros`.

## Preferências pessoais e segurança da conta

Clique no seu nome de usuário e selecione `Perfil` para gerenciar suas informações pessoais, senha, preferências de email e configurações de segurança.

### Alterar o idioma da interface

1. Clique no seu nome de usuário.
2. Clique em `Idioma`.
3. Selecione **English**, **Español**, **Português (Brasil)** ou **Română**.

Se o idioma da interface não for atualizado, saia e entre novamente.

### Ativar a autenticação de dois fatores

A autenticação de dois fatores adiciona um código de verificação ao processo de login:

1. Clique no seu nome de usuário e selecione `Perfil`.
2. Abra **Privacidade e segurança**.
3. Ative `Habilitar autenticação`.
4. Clique em `Salvar alterações`.
5. Entre novamente e escaneie o QR code exibido com um aplicativo autenticador.
6. Insira o código de uso único gerado pelo aplicativo e clique em `Salvar`.

Depois da configuração, você deve inserir um código do aplicativo autenticador sempre que entrar.

Os administradores da organização podem exigir autenticação de dois fatores de todos os membros:

1. No card da organização, clique no ícone de menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
2. Clique em `Configurações` e abra a aba **Segurança**.
3. Em **Autenticação de dois fatores**, ative `Habilitar autenticação`.
4. Clique em `Salvar alterações`.
