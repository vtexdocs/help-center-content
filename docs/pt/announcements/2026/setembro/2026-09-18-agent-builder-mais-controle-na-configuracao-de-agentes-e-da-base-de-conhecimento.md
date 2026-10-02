---
title: 'Agent Builder: mais controle na configuração de agentes e da base de conhecimento'
createdAt: 2026-09-18T12:00:00.000Z
updatedAt: 2026-09-18T12:00:00.000Z
contentType: updates
productTeam: VTEX CX Platform
slugEN: 2026-09-18-agent-builder-more-control-over-agent-and-knowledge-base-configuration
locale: pt
announcementSynopsisPT: 'O Agent Builder recebeu sete melhorias que reduzem a dependência do CLI e dão mais controle sobre provedores de IA, mensagens, componentes e base de conhecimento.'
tags:
  - Melhoria
  - VTEX CX Platform
---

O **Agent Builder** do VTEX CX Platform recebeu um conjunto de melhorias que dão mais flexibilidade e visibilidade na configuração de agentes de IA.

## O que mudou?

- **Escolha do provedor de IA:** na seção de **Manager**, é possível usar uma chave de API própria da **OpenAI** ou do **Google Gemini**, em vez do motor nativo da plataforma.
- **Mensagem de erro personalizável:** o texto enviado ao cliente quando um erro de API impede a resposta do agente agora pode ser editado por projeto.
- **Componentes interativos no Manager 2.7:** o orquestrador passa a enviar nativamente respostas rápidas, botões de ação e listas de mensagens, bastando citar o componente nas instruções do agente.
- **Constantes na atribuição de agentes personalizados:** as constantes enviadas via CLI podem ser visualizadas e configuradas diretamente na interface ao atribuir um agente personalizado.
- **Datas nos cards de agentes personalizados:** os cards exibem a data de criação e da última atualização do agente.
- **Filtro de tópicos não classificados:** em **Auditoria**, é possível filtrar conversas sem classificação de tópico e identificar assuntos ainda não mapeados.
- **Organização de textos na Base de conhecimento:** a aba **Textos** passa a aceitar múltiplos segmentos nomeados, pesquisáveis e editáveis. O comportamento do agente não muda.

## Por que fizemos essa mudança?

Várias configurações do Agent Builder exigiam o uso do CLI ou intervenção técnica, e algumas informações, como o histórico de alterações de um agente ou a mensagem enviada em caso de erro, não podiam ser controladas pela interface. Essas melhorias reduzem essa dependência e centralizam a gestão dos agentes no VTEX CX Platform.

## O que precisa ser feito?

Nenhuma ação é necessária. As melhorias já estão disponíveis em todos os projetos. Para saber mais, leia os artigos [Agent Builder - Visão geral](https://help.vtex.com/pt/docs/tutorials/visao-geral-agent-builder), [Atribuir e testar agentes](https://help.vtex.com/pt/docs/tutorials/atribuir-e-testar-agentes) e [Auditoria: Conversas](https://help.vtex.com/pt/tutorial/audit-conversations).
