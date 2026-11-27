---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-12T18:32:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: pt
categoryCover: true
---

O Agent Builder é a ferramenta do VTEX CX Platform para configurar, gerenciar e testar agentes de inteligência artificial (IA) que interagem com clientes. Por meio desses agentes, é possível automatizar atendimentos relacionados a diferentes necessidades, como consultas sobre pedidos, informações sobre produtos do catálogo e solicitações de cancelamento.

O funcionamento dos agentes é baseado em uma estrutura de colaboração entre dois tipos de agentes:

- **Agente orquestrador (manager):** ponto de contato com o cliente, responsável por conduzir a conversa, interpretar as solicitações recebidas e acionar os agentes colaboradores adequados a cada situação.
- **Agentes colaboradores:** agentes especializados em determinadas tarefas ou domínios de conhecimento, responsáveis por fornecer informações ou executar ações de acordo com as solicitações encaminhadas pelo agente orquestrador.

O VTEX CX Platform disponibiliza agentes colaboradores predefinidos para diferentes cenários de atendimento. Você pode selecionar os agentes adequados às necessidades da sua operação, configurá-los e testá-los no Agent Builder. Para conhecer os agentes disponíveis, consulte [Agentes oficiais do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/agentes-oficiais-da-vtex-cx-platform).

Caso sua operação tenha necessidades específicas que não sejam contempladas pelos agentes oficiais, também é possível desenvolver agentes customizados por meio do [CLI do VTEX CX Platform](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli).

## Páginas do Agent Builder

Para acessar o Agent Builder, selecione a organização e o projeto que deseja gerenciar na página inicial do VTEX CX Platform. O Agent Builder é composto pelas seguintes páginas:

- [Meus agentes](https://help.vtex.com/pt/docs/tutorials/meus-agentes): área de gerenciamento e teste dos agentes colaboradores e de configuração do agente orquestrador.
- [Base de conhecimento](https://help.vtex.com/pt/docs/tutorials/base-de-conhecimento): conjunto de arquivos, sites e textos que servem como fontes de informação para os agentes responderem aos clientes.
- [Fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao): área de configuração de fluxos automatizados que determinam as interações e respostas dos agentes com base nas mensagens dos clientes.
