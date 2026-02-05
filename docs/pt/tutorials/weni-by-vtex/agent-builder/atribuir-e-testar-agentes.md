---
title: 'Atribuir e testar agentes'
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2025-09-11T13:21:03.550Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents
legacySlug: atribuir-e-testar-agentes-no-agent-builder
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

A seção **Agentes** permite que o usuário atribua agentes ao time e teste-os.

Alguns agentes oficiais solicitam credenciais. Veja a lista completa no artigo [Agentes oficiais da Weni by VTEX e suas credenciais](/pt/docs/tutorials/agentes-oficiais-da-weni-by-vtex).

> ℹ️ Para criar agentes customizados, use o CLI da Weni by VTEX. Confira a [documentação](https://weni-ai.github.io/weni-cli/getting-started/installation/) para criar seu próprio agente.

Este artigo está dividido em duas partes:
- [Atribuir um agente ao time](#como-atribuir-um-agente)
- [Testar um agente](#como-testar-um-agente)

## Atribuir um agente ao time

1. No menu lateral, clique em **Agent Builder**.
2. Em seguida, clique em **Agentes**.
3. Na barra de ferramentas superior, clique em <i class="fas fa-plus"></i>`Atribuir agentes`.
4. Na Galeria de agentes, selecione **Agentes oficiais** ou **Agentes personalizados**. Você pode selecionar dentre os agentes listados ou usar o campo de busca para procurar por um agente específico.
5. Após escolher seu agente, clique em `Atribuir ao time`.

> ⚠️ Se o agente solicitar uma credencial, preencha os campos necessários e, em seguida, clique em `Atribuir`.

## Testar um agente

Para testar um agente, clique em `Prévia`.

Nessa tela, você pode:
- Iniciar uma conversa utilizando a caixa de diálogo.
- Enviar uma mensagem de áudio clicando no ícone de microfone.
- Enviar uma imagem clicando no ícone de mais <i class="fas fa-plus"></i> e em seguida em `Fotos`.

Em **Fluxo visual**, é possível observar os agentes que estão sendo acionados a partir das perguntas feitas.

Em **Logs**, fica registrado o histórico detalhado de eventos processados pela inteligência artificial (IA). A partir dessas informações, você consegue identificar como a IA funciona e diagnosticar problemas, melhorando sua performance. Clique em `Filtrar logs` para buscar por palavras-chave ou pesquisar entre as seguintes categorias:

| Categoria | Descrição da etapa |
| ------------- | :-------------- |
| Aplicando regras de segurança | Aplica proteções e grades de segurança. |
| Conhecimento | Busca informações na base de conhecimento do agente. |
| Atribuindo tarefa ao agente | Aciona o agente com tarefas. |
| Encaminhando para o manager | Encaminha mensagens do usuário para o manager, agente principal que prepara a resposta final para o usuário. |
| Enviando resposta final | Envia a resposta final para o usuário. |
| Enviando resposta ao manager | Encaminha informação para o manager, agente principal que conversa com o usuário. |
| Pensando | Raciocina sobre os próximos passos. |
| Ferramenta | Aciona ferramenta usada pelo agente para interagir com outros sistemas. |

Para limpar a conversa, clique no menu <i class="fas fa-ellipsis-v"></i> ao lado de **Prévia dos agentes** e selecionar `Limpar conversas`.
