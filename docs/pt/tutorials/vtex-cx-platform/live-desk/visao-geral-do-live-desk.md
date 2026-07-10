---
title: 'Visão geral do Live Desk'
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: pt
hidden: false
---

O Live Desk é o módulo de atendimento humano oficial do VTEX CX Platform, nativo em todos os projetos da plataforma. Foi desenvolvido para atender às necessidades e às dificuldades de nossos clientes e oferece uma experiência de autoatendimento.

Neste artigo, você conhecerá os principais conceitos e funções do módulo:

- [Permissões de usuário](#permissões-de-usuário)
- [Funcionalidades](#funcionalidades)
- [Histórico e dashboard](#histórico-e-dashboard)
- [Configuração e recursos relacionados](#configuração-e-recursos-relacionados)

## Permissões de usuário

As permissões de usuário representam atribuições referentes a cada usuário no projeto. No Live Desk, elas indicam os seguintes papéis:

- **Agente:** utiliza o módulo Live Desk para realizar atendimentos. Tem permissão mínima no sistema e visualiza somente o módulo Live Desk e o dashboard com suas métricas individuais. Os atendimentos direcionados ao agente são definidos pelo setor e pela fila em que ele está incluído.
- **Gerente de atendimento:** gerencia os setores de atendimento do Live Desk. Tem permissão para visualizar configurações relacionadas ao setor que gerencia, visualizar os contatos que estão nas filas e realizar atendimentos. No dashboard, visualiza as métricas do setor em que é gerente.
- **Administrador:** possui todos os níveis de permissão, cria setores e delega gerentes de atendimento para os setores. No dashboard, tem uma visão geral de toda a operação.

Para saber como atribuir esses papéis, consulte o artigo [Gerenciar membros do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/gerenciar-membros-do-vtex-cx-platform).

## Funcionalidades

### Informações do contato

Ao clicar na foto ou no nome do contato em qualquer área da conversa, você acessa o painel de informações do contato, que apresenta a foto ampliada, dados como o canal pelo qual o contato está conversando, o horário da última mensagem, a função de transferir chat e a galeria de mídias do contato.

### Mensagens rápidas

As mensagens rápidas permitem cadastrar modelos de mensagens para uso ágil durante o atendimento. Ao clicar no botão de mensagens rápidas, o agente acessa o painel da função, onde pode visualizar, gerenciar e cadastrar mensagens. Ao selecionar a mensagem desejada, o texto cadastrado preenche o campo do editor de texto.

É possível utilizar as mensagens rápidas de duas maneiras:

- O agente abre o painel clicando no botão de mensagens rápidas e, em seguida, clica na mensagem desejada.
- Ao cadastrar a mensagem, o agente define uma palavra-chave como atalho. Para utilizá-la, basta digitar `/` seguido do atalho.

O agente pode navegar pelas mensagens com as setas do teclado e pressionar `Enter` para usar a mensagem. Ao digitar o texto do atalho, a ferramenta também faz a busca específica.

Também é possível configurar mensagens rápidas específicas por setor. Essa configuração é feita durante a criação do setor. Para mais informações, acesse [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configure-live-desk).

### Transferir chat

A função de transferir chat direciona o contato para um setor, fila ou agente específico e pode ser acessada no painel de informações do contato. O agente pode pesquisar pelo nome de um agente, fila ou setor, ou selecionar um destinatário na lista exibida. Ao confirmar a transferência, o contato é encaminhado para o destinatário escolhido.

Para saber como os atendimentos são distribuídos entre os agentes, consulte [Distribuição e roteamento dos atendimentos](https://help.vtex.com/pt/docs/tutorials/distribuicao-e-roteamento-dos-atendimentos).

### Gravar e enviar áudio

Por meio dos botões da caixa de texto, você pode gravar e enviar um áudio. Antes do envio, é possível reproduzir o áudio e depois enviá-lo ao contato.

### Anexar arquivos

Para anexar arquivos, arraste-os até a caixa de texto. Também é possível usar o atalho `Ctrl + V` para colar imagens diretamente, sem anexá-las manualmente.

### Emojis

O Live Desk oferece um painel completo de emojis, que ajudam a transmitir o tom e a intenção das mensagens durante o atendimento.

### Quebra de texto

Para auxiliar na organização visual da mensagem, você pode inserir quebra de linhas pressionando `Shift + Enter`.

### Assinatura ativa

A assinatura ativa adiciona o nome do agente que está respondendo a cada mensagem trocada. Para ativá-la, siga estas etapas:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Configurações**.
3. Clique em **Live Desk**.
4. Na aba **Setores**, clique no menu de ações <i class="fas fa-ellipsis-v" aria-hidden="true"></i> do setor desejado e em `Editar`.
5. Na aba **Opções extras**, ative a opção **Usar assinatura**.
6. Clique em `Salvar alterações`.

> ℹ️ Após a ativação, o nome do agente aparecerá no balão de mensagem seguido de dois-pontos.

### Edição de campos de contato

A edição de campos de contato permite que o agente corrija dados incorretos ou atualize informações do cliente durante o atendimento. Para habilitar essa função, siga estas etapas:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Configurações**.
3. Clique em **Live Desk**.
4. Na aba **Setores**, clique no menu de ações <i class="fas fa-ellipsis-v" aria-hidden="true"></i> do setor desejado e em `Editar`.
5. Na aba **Opções extras**, ative a opção **Permitir que atendentes editem informações personalizadas do contato**.
6. Clique em `Salvar alterações`.

> ℹ️ Para editar um campo, abra o painel de informações clicando no nome do contato e, em seguida, clique no campo desejado para inserir o novo valor.

### Notificação via navegador

O Live Desk oferece notificações via navegador como alternativa ao alerta sonoro. Para recebê-las, permita as notificações do site nas configurações do seu navegador.

## Histórico e dashboard

### Dashboard e métricas

O acompanhamento do atendimento humano é feito no dashboard do módulo **Analytics**, dividido em duas abas:

- **Monitoramento:** dados em tempo real dos atendimentos em andamento, como status, tempos médios, volume por fila e tag, e CSAT.
- **Análise:** dados históricos dos atendimentos finalizados no período selecionado.

É possível filtrar os dados por setor, fila, agente, tag e período, além de exportá-los com o botão `Exportar dados`.

Para a descrição completa de cada métrica e seção, consulte o artigo [Analytics: Métricas de atendimento](https://help.vtex.com/pt/docs/tutorials/analytics-support-metrics). Para criar visualizações personalizadas, consulte o artigo [Analytics: Criar dashboard personalizado](https://help.vtex.com/pt/docs/tutorials/create-analytics-dashboard).

### Visualizar histórico

O usuário visualiza a lista do Live Desk em ordem cronológica, do atendimento mais recente ao mais antigo. Nessa listagem, é possível ver a foto do contato, o nome, o agente que fez o atendimento, as tags usadas na classificação, a data e um botão para abrir o chat.

Ao visualizar o histórico do contato, o agente pode ver o início do atendimento, o histórico com o bot, os acontecimentos do chat e as tags usadas para classificá-lo.

### Modo de visualização

Ao clicar no nome do agente no dashboard, abre-se o **modo de visualização dos atendimentos do agente**. Assim, é possível ter uma visão geral dos detalhes dos atendimentos por agente, e um gerente pode assumir um chat a qualquer momento, transferindo o atendimento para si.

## Configuração e recursos relacionados

Para configurar e utilizar o Live Desk na sua operação, consulte os artigos relacionados:

- [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configure-live-desk): crie e gerencie setores, filas e atendentes, e defina as regras de atendimento.
- [Distribuição e roteamento dos atendimentos](https://help.vtex.com/pt/docs/tutorials/distribuicao-e-roteamento-dos-atendimentos): entenda como os atendimentos são distribuídos entre os agentes.
- [Utilizando o disparo ativo de fluxos](https://help.vtex.com/pt/docs/tutorials/utilizando-disparo-ativo-de-fluxos): inicie conversas ativamente com contatos pelo Live Desk.
- [Usando grupos para controlar o atendimento humano](https://help.vtex.com/pt/docs/tutorials/usando-grupos-para-controlar-o-atendimento-humano): evite que o chatbot interrompa os atendimentos em andamento.
