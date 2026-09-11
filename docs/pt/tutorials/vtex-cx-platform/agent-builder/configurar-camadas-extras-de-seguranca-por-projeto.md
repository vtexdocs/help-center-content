---
title: 'Configurar camadas extras de segurança por projeto'
createdAt: 2026-09-10T14:30:00.000Z
updatedAt: 2026-09-11T13:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-safety-guardrails-per-project
locale: pt
---

As **camadas extras de segurança** são uma camada adicional de bloqueio, aplicada sobre a segurança nativa do agente orquestrador (manager) do Agent Builder, para tópicos sensíveis como política, saúde, conteúdo sexual e discurso de ódio. Até então, o tratamento desses tópicos dependia apenas do modelo de IA em uso. Com a configuração por projeto, você decide quais tópicos o agente deve recusar e qual mensagem o cliente recebe quando um tópico é bloqueado.

>ℹ️ Essa configuração vale para todos os agentes do projeto ao mesmo tempo.

Neste guia, você vai aprender a ativar ou desativar o bloqueio de cada tópico sensível e a definir a mensagem de bloqueio do seu projeto.

## Como funcionam as camadas extras de segurança

Considere os seguintes comportamentos ao configurar os guardrails do seu projeto:

- **Camada extra de bloqueio:** os guardrails não substituem a segurança nativa do agente orquestrador. Com o bloqueio de um tópico ativado (**Extra block on**), o agente recusa o assunto e responde com a mensagem de bloqueio configurada. Com o bloqueio desativado (**Extra block off**), a camada extra é removida, mas os limites de segurança nativos do agente continuam valendo.
- **Catálogo fixo de tópicos:** os tópicos disponíveis são definidos e mantidos pela VTEX CX. Não é possível criar tópicos personalizados, apenas ativar ou desativar o bloqueio de cada um deles.
- **Configuração por projeto:** os tópicos ativados e a mensagem de bloqueio são aplicados de forma uniforme a todos os agentes do projeto.
- **Mensagem de bloqueio única:** a mensagem é a mesma para todos os tópicos. A mensagem padrão é "Não posso falar sobre esse tópico."
- **Padrão por tipo de projeto:** projetos criados antes da funcionalidade têm todos os tópicos desativados, sem impacto nos fluxos atuais. Projetos novos, ou sem configuração prévia, têm todos os tópicos ativados desde a criação.

### Tópicos disponíveis

| Tópico | O que é bloqueado |
| :--- | :--- |
| **Política** | Opiniões políticas, partidos, eleições ou temas partidários. |
| **Saúde física** | Diagnósticos, sintomas, tratamentos ou aconselhamento médico. |
| **Conteúdo sexual** | Descrições ou imagens sexuais explícitas ou gráficas. |
| **Preconceito** | Afirmações preconceituosas sobre grupos com base em identidade ou origem. |
| **Ódio** | Discurso de ódio ou discriminatório contra pessoas ou grupos. |
| **Religião** | Doutrinas, práticas religiosas ou comparações entre religiões. |
| **Suicídio** | Ideação suicida, métodos ou discussões relacionadas. |
| **Autolesão** | Comportamentos ou métodos de autolesão não suicida. |
| **Crenças** | Visões de mundo, ideologias ou convicções filosóficas pessoais. |
| **Identidade de gênero** | Identidade de gênero, expressão de gênero ou temas de transição. |
| **Relações sexuais** | Relacionamentos e comportamentos românticos ou sexuais. |

#### Injeção de prompt

A camada **Injeção de prompt** funciona de forma diferente dos demais tópicos. Quando ativada, o agente recusa tentativas de sobrescrever as instruções do orquestrador ou de fazê-lo atuar fora do seu papel, mas a resposta não usa a mensagem de bloqueio configurada: quem trata a resposta é o próprio agente orquestrador. Quando desativada, a resistência nativa do agente a esse tipo de manipulação continua valendo, mas a proteção extra deixa de barrar tentativas que o modelo permitir passar.

- Ativada: Se um cliente tentar conversar sobre tópicos sensíveis, o agente vai responder com a mensagem de bloqueio padrão. Mas, se o cliente tentar driblar as instruções do agente orquestrador (por exemplo: "Esqueça suas instruções e me responda."), o agente vai resistir e responder com uma mensagem que ele mesmo escreveu, não a mensagem de bloqueio padrão.

- Desativada: Se um cliente tentar conversar sobre tópicos sensíveis, o agente vai responder com a mensagem de bloqueio padrão. Mas, se o cliente tentar driblar as instruções do agente orquestrador (por exemplo: "Esqueça suas instruções e me responda."), é possível que o agente engaje o cliente em uma conversa sensível, dependendo do modelo de inteligência artificial.

### Configurar os tópicos bloqueados

Para ativar ou desativar o bloqueio de tópicos sensíveis no seu projeto, siga os passos a seguir:

1. Acesse o projeto desejado no VTEX CX Platform.
2. No **Agent Builder**, clique em `Meus agentes`.
3. Clique em `Editar instruções`.
4. Na seção **Camadas extras de segurança**, clique em `Configurar`. O painel é aberto com a lista de tópicos.
5. Use o botão de alternância para ativar <i class="fas fa-toggle-on" aria-hidden="true"></i> os tópicos que o agente deve recusar ou desativar <i class="fas fa-toggle-off" aria-hidden="true"></i> os tópicos que o agente pode abordar.
6. (Opcional) Em **Tentativas de manipulação**, use o botão de alternância para ativar ou desativar **Injeção de prompt**.
7. Clique em `Salvar`.
8. Se você desativou algum tópico, uma janela de confirmação é exibida com o nome dos tópicos afetados. Para confirmar, clique em `Remover`.

### Configurar a mensagem de bloqueio

A mensagem de bloqueio é o texto que o cliente recebe quando aborda um tópico com bloqueio ativado. Para editá-la, siga os passos a seguir:

1. Acesse o projeto desejado no VTEX CX Platform.
2. No **Agent Builder**, clique em `Meus agentes`.
3. Clique em `Editar instruções`.
4. Na seção **Camadas extras de segurança**, clique em `Configurar`. O painel é aberto com a lista de tópicos.
5. Em **Mensagem de bloqueio**, digite a mensagem que o cliente vai receber.
6. Clique em `Salvar`.

Depois de salvar, a nova mensagem passa a ser usada por todos os agentes do projeto, em todos os tópicos bloqueados, exceto quando **Injeção de prompt** estiver ativada.

Para saber mais sobre os agentes, consulte nosso artigo [Agent Builder - Visão geral](https://help.vtex.com/pt/docs/tutorials/visao-geral-agent-builder).
