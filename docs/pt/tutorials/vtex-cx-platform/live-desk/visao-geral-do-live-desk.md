---
title: 'Live Desk'
createdAt: 2025-09-12T16:29:16.322Z
updatedAt: 2026-11-10T21:45:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: live-desk-overview
locale: pt
hidden: false
categoryCover: true
---

O Live Desk é o módulo de atendimento humano do VTEX CX Platform, disponível em todos os projetos. Os atendentes o usam para realizar o atendimento em tempo real e em um só lugar: recebem os contatos por setor e fila, respondem no canal do contato e consultam cada conversa.

Este artigo aborda:

- [Papéis e permissões no Live Desk](#papéis-e-permissões-no-live-desk)
- [Gerenciar conversas](#gerenciar-conversas)
- [Compor mensagens](#compor-mensagens)
- [Consultar histórico e métricas de atendimento](#consultar-histórico-e-métricas-de-atendimento)
- [Definir preferências pessoais](#definir-preferências-pessoais)

## Papéis e permissões no Live Desk

O papel no projeto determina quais partes do Live Desk você pode usar. Dois papéis se aplicam diretamente ao atendimento humano:

- **Moderador:** Tem acesso administrativo completo ao projeto e pode configurar o Live Desk.
- **Human support:** Realiza os atendimentos dos setores e filas aos quais está atribuído.

Para atribuir esses papéis, consulte [Gerenciar membros do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/gerenciar-membros-do-vtex-cx-platform). Para os demais papéis do projeto, como Contribuidor, Visualizador e Marketing, consulte [Visão geral do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/vtex-cx-platform-visao-geral#permissões-do-projeto).

## Gerenciar conversas

### Identificar conversas pendentes

A lista de conversas mostra quem enviou a última mensagem em cada uma, para você identificar quais aguardam resposta.

- Um número mostra quantas mensagens do contato não foram lidas.
- Uma seta azul mostra que a última mensagem do contato foi lida e ainda precisa de resposta.
- O prefixo `Você:` indica que você enviou a última mensagem. Vale para mensagens de texto e de mídia.
- Um ponto azul indica que a conversa foi transferida, devolvida a uma fila, assumida da fila ou atribuída automaticamente. O ponto aparece independentemente de quem enviou a última mensagem.

Quando outro atendente enviou a última mensagem em uma conversa transferida, a prévia não começa com `Você:`. Ao abrir as conversas de um atendente pelo dashboard, uma conversa que aguarda resposta mostra a seta azul, e a prévia não inclui o prefixo `Você:`.

### Filtrar conversas por fila

Na visualização **Conversas em espera**, filtre a lista por fila para ver apenas as conversas das filas selecionadas. Você pode selecionar uma ou mais filas. Limpe o filtro para voltar à lista completa.

As filas disponíveis no filtro dependem do seu papel:

- Moderadores podem ver todas as filas do projeto e filtrar por elas.
- Usuários com o papel **Human support** podem ver e filtrar apenas as filas às quais estão atribuídos.

Cada fila mostra a quantidade de conversas e o setor ao qual pertence.

O filtro vale para as conversas que aguardam atendimento. Moderadores também podem usá-lo nas conversas em andamento.

> ℹ️ O filtro mantém a distribuição atual das conversas e a ordem em que elas já aparecem. Para saber como os atendimentos são distribuídos entre os atendentes, consulte [Distribuição e Roteamento dos atendimentos](https://help.vtex.com/pt/docs/tutorials/distribuicao-e-roteamento-dos-atendimentos).

### Visualizar informações do contato

Para ver os detalhes do cliente em atendimento, clique na foto ou no nome do contato na conversa. O painel de informações do contato inclui:

- A foto do contato ampliada
- O canal que o contato está usando, como WhatsApp ou Email
- O horário da última mensagem
- A opção de transferir a conversa
- A galeria de mídias do contato

### Editar campos personalizados do contato

Os atendentes podem editar os campos personalizados de um contato durante o atendimento, quando o setor permite. Para ativar essa opção, consulte [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

Para editar um campo, siga estas etapas:

1. Na conversa, clique no nome do contato para abrir o painel de informações.
2. Clique no campo que deseja alterar.
3. Insira o novo valor.

### Baixar áudio do contato

Você pode reproduzir uma mensagem de áudio do contato na conversa e baixar o arquivo original. Baixe o áudio quando precisar compartilhá-lo com outra equipe, como logística ou operações, ao escalar um caso internamente.

### Transferir uma conversa

No painel de informações do contato, você pode transferir uma conversa em andamento para um setor, uma fila ou um atendente. A transferência pode ocorrer de duas formas:

- **Transferência automática:** O agente de IA transfere a conversa quando **Permitir que agentes de IA transfiram conversas para atendimento humano** está ativado. Ele escolhe a fila a partir das descrições definidas em [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).
- **Transferência manual:** Um gerente ou administrador transfere a conversa. Pesquise pelo nome de um atendente, fila ou setor, ou selecione um destinatário na lista.

Após a confirmação, a conversa segue para o destinatário escolhido. Para ver como uma conversa transferida aparece na lista, consulte [Identificar conversas pendentes](#identificar-conversas-pendentes).

Cada atendente na lista de transferência mostra um status: **Online**, **Em pausa** (com o nome da pausa personalizada) ou **Offline**. A lista mostra os atendentes nessa ordem e organiza os nomes em ordem alfabética dentro de cada status. As pausas personalizadas e a opção **Bloquear transferência de chats para atendentes offline** são definidas em [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

## Compor mensagens

### Copiar e limpar a mensagem

Ao começar a digitar no campo de mensagem, duas ações ficam disponíveis:

- `Copiar texto`: Copia todo o conteúdo do campo de mensagem.
- `Limpar texto`: Esvazia o campo de mensagem.

### Adicionar emojis, áudio e arquivos

Use os botões abaixo do campo de mensagem para incluir conteúdo:

- **Emojis:** Clique no botão de emoji para abrir o painel de emojis e adicionar um emoji à mensagem.
- **Áudio:** Clique no botão de áudio para gravar uma mensagem e reproduzi-la antes de enviá-la ao contato.
- **Arquivos:** Clique no botão de anexo para anexar um arquivo.

Para anexar arquivos, você também pode arrastar um arquivo até o campo de mensagem ou pressionar `Ctrl + V` para colar uma imagem.

Para inserir uma quebra de linha no campo de mensagem, pressione `Shift + Enter`.

### Usar mensagens rápidas

As mensagens rápidas são modelos de texto pré-configurados. Os atendentes as usam para enviar respostas padrão durante o atendimento.

O campo de mensagem exibe `Digite sua mensagem ou / para ativar mensagens rápidas`. Abaixo do campo, clique no botão de mensagens rápidas para abrir o painel, onde você pode visualizar, gerenciar e cadastrar mensagens. Ao selecionar uma mensagem, o texto preenche o campo.

Você pode inserir uma mensagem rápida de duas formas:

- **Pelo painel:** Clique no botão de mensagens rápidas e, em seguida, na mensagem desejada.
- **Por atalho:** Digite `/` seguido do atalho atribuído à mensagem.

Na lista, você pode passar de uma mensagem para outra com as setas do teclado e pressionar `Enter` para inserir a mensagem selecionada. Você também pode configurar mensagens rápidas específicas do setor durante a criação do setor. Para mais informações, consulte [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

### Melhorar uma resposta com IA

`Melhorar resposta com IA` revisa uma mensagem antes do envio ao contato. Você escreve a resposta no campo de mensagem, e a IA corrige erros, ajusta o tom ou reescreve o texto, mantendo o sentido original.

> ℹ️ O botão <i class="fas fa-magic" aria-hidden="true"></i> `Melhorar resposta com IA` fica disponível somente quando o campo de mensagem tem texto.

Para melhorar uma resposta, siga estas etapas:

1. No campo de mensagem, escreva a mensagem que deseja enviar.
2. Clique em <i class="fas fa-magic" aria-hidden="true"></i> `Melhorar resposta com IA`.
3. Selecione uma opção de melhoria:
    - **Corrigir gramática e ortografia:** Corrige erros de ortografia, gramática e digitação.
    - **Tornar mais empática:** Reescreve a mensagem com um tom mais caloroso e acolhedor.
    - **Reescrever com clareza:** Reorganiza o texto para deixar as explicações mais claras e objetivas.
4. Aguarde até `Melhorando sua resposta` desaparecer.

    > ℹ️ Para cancelar enquanto `Melhorando sua resposta` está em exibição, clique em <i class="fas fa-times" aria-hidden="true"></i> `Resposta aprimorada`.

5. Revise a nova mensagem. Você pode editar o texto ou clicar em `Original` para restaurar o rascunho.
6. Clique em `Enviar`.

    > ℹ️ A IA não envia a mensagem sozinha. A conversa só é atualizada depois que você clica em `Enviar`.

### Adicionar uma nota interna

Uma nota interna guarda o contexto da conversa para outros atendentes, como capturas de tela e uma explicação mais longa. Eles podem lê-la ao assumir a conversa ou ao consultá-la depois. O contato não recebe a nota.

Na conversa, a nota aparece com fundo amarelo e começa com `Nota interna:`, seguido do texto. As mídias anexadas aparecem como miniaturas abaixo do texto.

Abaixo do campo de mensagem, clique no botão de nota interna, escreva a nota e envie. Você pode usar mais de um parágrafo e anexar até 10 arquivos de mídia.

### Adicionar a assinatura do atendente

Quando **Usar assinatura** está ativado no setor, o nome do atendente aparece em cada balão de mensagem, seguido de dois-pontos. Para ativar a opção, consulte [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

## Consultar histórico e métricas de atendimento

### Acompanhar métricas de atendimento

O atendimento humano é acompanhado no dashboard **Live Desk**, no módulo **Analytics**. O dashboard tem duas abas:

- **Monitoramento:** Exibe dados em tempo real dos atendimentos em andamento, como status, tempos médios, volume por fila, tag e canal, e satisfação do cliente (CSAT). Moderadores do projeto podem definir metas de tempo para o dashboard destacar os atendimentos que as ultrapassam. Consulte [Analytics: Configurar alertas operacionais](https://help.vtex.com/pt/docs/tutorials/analytics-configurar-alertas-operacionais).
- **Análise:** Exibe dados históricos dos atendimentos encerrados no período selecionado.

Você pode filtrar os dados por setor, fila, atendente, tag, canal e período. Para baixar os dados exibidos no dashboard, clique em `Exportar dados`.

Para cada métrica e seção, consulte [Analytics: Métricas de atendimento](https://help.vtex.com/pt/docs/tutorials/analytics-metricas-de-atendimento). Para criar um dashboard personalizado, consulte [Analytics: Criar dashboard personalizado](https://help.vtex.com/pt/docs/tutorials/analytics-criar-dashboard-personalizado).

### Visualizar o histórico de atendimento

A lista do Live Desk fica em ordem cronológica, do atendimento mais recente ao mais antigo. Nessa lista, você vê a foto e o nome do contato, o atendente que realizou o atendimento, as tags usadas na classificação, a data e um botão para abrir o chat.

Ao abrir o histórico do contato, você vê o início do atendimento, o histórico com o bot, os eventos do chat e as tags. Em um atendimento encerrado com resposta de CSAT nativo, o histórico também mostra a nota de CSAT e, quando o cliente deixou um comentário, o texto.

Para baixar uma conversa encerrada, consulte [Exportar uma conversa encerrada](#exportar-uma-conversa-encerrada).

### Visualizar o histórico do webchat entre sessões

O Shopping Assistant cria um Uniform Resource Name (URN) diferente para cada sessão de webchat. Ao abrir o histórico do contato, as conversas de webchat do mesmo contato são agrupadas se a conversa foi aberta com `email`, `document` ou ambos.

### Visualizar as conversas de um atendente

Clique no nome de um atendente no dashboard para abrir o **modo de visualização dos atendimentos do atendente**. Essa visualização mostra os detalhes dos atendimentos de cada atendente. Um gerente pode assumir um chat a qualquer momento, transferindo-o para si. Para ver como uma conversa que aguarda resposta aparece nessa visualização, consulte [Identificar conversas pendentes](#identificar-conversas-pendentes).

### Exportar uma conversa encerrada

Somente moderadores do projeto podem exportar uma conversa encerrada. A exportação fica disponível por até um ano depois do encerramento. Conversas ativas não podem ser exportadas.

> ⚠️ Enquanto uma exportação está em processamento, novas exportações ficam temporariamente bloqueadas para essa conversa.

O arquivo é um relatório da conversa e inclui:

- A transcrição das mensagens
- Os eventos do chat
- Os detalhes do atendimento: **Iniciado**, **Encerrado**, **Atendente**, **Contato**, **URN**, **ID do ticket**, **Tags** e **CSAT**

Para exportar uma conversa encerrada, siga estas etapas:

1. Na lista de histórico, abra uma conversa encerrada.
2. Clique em `Exportar conversa`.
3. Selecione **PDF** ou **HTML**. **PDF** vem selecionado por padrão.
4. Selecione **Aceito os termos e compreendo as limitações da exportação**.
5. Clique em `Exportar conversa`.
6. Abra o e-mail de `no-reply@weni.ai`.
7. Clique em `Baixar relatório`.

## Definir preferências pessoais

Essas configurações alteram a aparência do Live Desk e a forma como ele alerta você. Elas não alteram setores, filas nem conversas.

### Receber notificações no navegador

O Live Desk oferece notificações do navegador como alternativa aos alertas sonoros. Para recebê-las, permita as notificações do site nas configurações do navegador.

### Escolher o modo claro ou escuro

O Live Desk oferece **Modo claro** e **Modo escuro**. O Modo claro é o padrão. O Modo escuro aplica um tema escuro ao Live Desk e ao menu lateral.

Para alterar o tema, abra **Preferências** e selecione **Modo claro** ou **Modo escuro**. A seleção é salva automaticamente e aplicada sempre que você entra.

## Saiba mais

- [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk): saiba como criar e gerenciar setores, filas e atendentes e como definir as regras de atendimento.
- [Distribuição e Roteamento dos atendimentos](https://help.vtex.com/pt/docs/tutorials/distribuicao-e-roteamento-dos-atendimentos): saiba como os atendimentos são distribuídos entre os atendentes.
- [Utilizando o disparo ativo de fluxos](https://help.vtex.com/pt/docs/tutorials/utilizando-disparo-ativo-de-fluxos): saiba como iniciar conversas com contatos a partir do Live Desk.
- [Usando grupos para controlar o atendimento humano](https://help.vtex.com/pt/docs/tutorials/usando-grupos-para-controlar-o-atendimento-humano): saiba como evitar que o chatbot interrompa um atendimento em andamento.
