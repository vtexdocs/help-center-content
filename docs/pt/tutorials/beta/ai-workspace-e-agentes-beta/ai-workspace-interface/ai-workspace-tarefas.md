---
title: 'AI Workspace - Tarefas'
createdAt: 2026-11-24T12:00:00.000Z
updatedAt: 2026-12-07T12:00:00.000Z
contentType: tutorial
productTeam: AI Workspace
slugEN: ai-workspace-tasks
locale: pt
---

> ⚠️ O AI Workspace está disponível apenas para contas selecionadas.

No AI Workspace, uma **tarefa** é uma unidade de trabalho de uma [iniciativa](https://help.vtex.com/pt/docs/tutorials/ai-workspace-iniciativas) e tem um objetivo específico. Por exemplo: *Melhore os títulos dos 500 produtos mais visitados*.

Cada tarefa possui um **responsável** que a executa, podendo ser um humano ou um agente de IA. O responsável é escolhido pelo [**Líder da iniciativa**](https://help.vtex.com/pt/docs/tutorials/ai-workspace-glossario#lider-da-iniciativa).

As tarefas existem apenas dentro de iniciativas e podem ser criadas de duas formas:

- Junto com a criação de uma iniciativa.
- Interagindo com um agente de IA em um [chat](https://help.vtex.com/pt/docs/tutorials/ai-workspace-chat).

## Página Tarefas

A página **Tarefas** é acessada pelo item **Tarefas** no [menu de navegação](https://help.vtex.com/pt/docs/tutorials/ai-workspace-menu-navegacao) lateral e reúne todas as tarefas da sua operação, agrupadas por status.

![AI Workspace página de tarefas PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-e-agentes-beta/ai-workspace-interface/ai-workspace-tarefas.png)

A página possui um quadro que organiza as tarefas em colunas, de acordo com o status de cada uma:

- **Abertas:** tarefas ainda não iniciadas.
- **Em execução:** tarefas em andamento.
- **Aguardando ação:** tarefas que dependem de interação para avançar.
- **Concluídas:** tarefas finalizadas.

As colunas contêm cartões que representam as tarefas, cada um exibindo os seguintes detalhes:

- **Título:** nome da tarefa.
- **Iniciativa:** iniciativa à qual a tarefa pertence.
- **Ícone do responsável:** identificação visual do humano ou do agente de IA responsável pela tarefa.
- **Ícone do status:** indicação visual do status atual, presente apenas nas tarefas com status **Trabalhando** e **Aguardando ação**.

## Detalhes da tarefa (canvas)

Nos [detalhes da iniciativa no canvas](https://help.vtex.com/pt/docs/tutorials/ai-workspace-iniciativas#detalhes-da-iniciativa-canvas), é exibida a lista de todas as suas tarefas. Ao clicar em uma tarefa, os detalhes dela são exibidos no [**canvas**](https://help.vtex.com/pt/docs/tutorials/ai-workspace-glossario).

![AI Workspace detalhes da tarefa no canvas PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-e-agentes-beta/ai-workspace-interface/ai-workspace-tarefa-canvas.png)

O canvas da tarefa apresenta as seguintes seções:

- **Título:** nome da tarefa.
- **Cabeçalho:** informações gerais da tarefa:
  - **Atribuída a:** usuário ou agente de IA responsável por executar a tarefa.
  - **Status:** situação atual da tarefa. A exibição do status varia conforme a etapa:
    - **Em aberto:** exibe o botão **Executar task**.
    - **Trabalhando:** exibe uma animação de carregamento acompanhada de **Planejando...**, **Explorando...** ou **Analisando...**.
    - **Aguardando ação:** exibe **🔵 Precisa de atenção**.
    - **Completa:** exibe **✔️ Concluído**.
- **Descrição:** explicação do que a tarefa realiza.
- **Escopo:** conjunto de itens sobre os quais a tarefa atua.
- **Processo manual:** ações que um usuário deve realizar na tarefa. Esta seção não aparece em tarefas atribuídas a agentes de IA.

## Chat da tarefa

Toda tarefa possui um **chat**, na qual é possível interagir com agentes de IA para obter informações e executar ações relacionadas à tarefa. Para saber mais sobre como funciona a interação com os agentes, consulte o artigo [AI Workspace - Chat](http://help.vtex.com/pt/docs/tutorials/ai-workspace-chat).

![AI Workspace chat da tarefa PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/ai-workspace-e-agentes-beta/ai-workspace-interface/ai-workspace-tarefa-chat.png)
