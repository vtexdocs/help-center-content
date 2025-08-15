---
title: 'Atribuir e testar agentes no Agent Builder'
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2025-07-29T18:31:07.158Z
publishedAt: 2025-07-29T18:31:07.158Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: attribute-and-test-agents-on-agent-builder
legacySlug: atribuir-e-testar-agentes-no-agent-builder
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

A seção **Agentes** permite que o usuário atribua agentes ao time e teste-os.

Alguns agentes oficiais pedem credenciais. Veja a lista completa no artigo [Agentes oficiais da Weni by VTEX](https://help.vtex.com/pt/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

> ℹ️ Para criar agentes customizados, use o CLI da Weni by VTEX. Confira a <a href=”https://weni-ai.github.io/weni-cli/getting-started/installation/”>documentação</a> para criar seu próprio agente.

Este artigo está dividido em duas partes:

- [Atribuir um agente ao time](#atribuir-um-agente-ao-time)
- [Testar um agente](#testar-um-agente)

## Atribuir um agente ao time

1. No menu lateral, clique em **Agent Builder**.
2. Em seguida, clique em **Agentes**.
3. Na barra de ferramentas superior, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Atribuir agentes`.
4. Na Galeria de agentes, selecione **Agentes oficiais** ou **Agentes customizados**. Você pode selecionar dentre os agentes listados ou usar o campo de busca para procurar por um agente específico.
5. Após escolher seu agente, clique em `Atribuir ao time`.

> ⚠️ Se o agente solicitar uma credencial, preencha os campos necessários e, em seguida, clique em `Atribuir`.

## Testar um agente

Para testar um agente, clique em `Preview`.

Nessa tela, você consegue:

- Iniciar uma conversa utilizando a caixa de diálogo.
- Enviar uma mensagem de áudio clicando no ícone de microfone.
- Enviar uma imagem clicando no ícone de mais <i class="fas fa-plus" aria-hidden="true"></i> e em seguida em `Fotos`.

Em **Fluxo visual**, você consegue observar os agentes que estão sendo acionados a partir das perguntas feitas.

Em **Logs**, fica registrado o histórico detalhado de eventos processados pela inteligência artificial. A partir dessas informações, você consegue identificar como a IA funciona e diagnosticar problemas, melhorando sua performance. Clique em `Filtrar logs` para buscar por palavras-chaves ou pesquisar entre as seguintes categorias:

| Categoria | Descrição da etapa |
| ------------- | :-------------- |
| Aplicando regras de segurança | Aplica proteções e grades de segurança. |
| Conhecimento | Busca informações na base de conhecimento do agente. |
| Delegando tarefas ao agente | Aciona o agente com tarefas. |
| Encaminhando para o Manager | Encaminha mensagens do usuário para o Manager, agente principal que prepara a resposta final para o usuário. |
| Enviando resposta final | Envia a resposta final para o usuário. |
| Enviando resposta para o Manager | Encaminha informação para o Manager, agente principal que conversa com o usuário. |
| Pensando | Raciocina sobre os próximos passos. |
| Tool | Aciona ferramenta usada pelo agente para interagir com outros sistemas. |

Para limpar a conversa, basta clicar no menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> ao lado de **Preview dos agentes** e selecionar `Limpar conversas`.
