---
title: 'Atribuir e testar agentes'
id: 41beBpRcBouxMywt6dUW2z
status: PUBLISHED
createdAt: 2025-07-09T18:14:18.864Z
updatedAt: 2026-06-09T00:00:00.000Z
publishedAt: 2025-09-11T13:21:03.550Z
firstPublishedAt: 2025-07-29T16:38:35.307Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: assigning-and-testing-agents-in-agent-builder
legacySlug: atribuir-e-testar-agentes-no-agent-builder
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
---

A seção **Meus agentes** permite atribuir agentes ao time e testar sua operação. Alguns agentes oficiais exigem credenciais para operar na plataforma. Para mais informações, acesse [Agentes oficiais do VTEX CX Platform e suas credenciais](https://help.vtex.com/pt/docs/tutorials/agentes-oficiais-da-vtex-cx-platform).

> ℹ️ Para criar agentes personalizados, use o CLI do VTEX CX Platform (Weni). Saiba mais em [Using the VTEX CX Platform (Weni) CLI](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli#getting-started-with-your-project).

Este artigo está dividido nas seguintes seções:

- [Atribuir um agente ao time](#atribuir-um-agente-ao-time)
- [Remover um agente](#remover-um-agente)
- [Testar um agente](#testar-um-agente)

## Atribuir um agente ao time

Para atribuir um novo agente em sua loja, siga os passos abaixo:

1. Acesse sua organização no [dashboard do VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique no ícone **Meus agentes**.
3. Clique em <i class="fas fa-plus" aria-hidden="true"></i>`Atribuir novos agentes`.
4. Na página **Atribuir novos agentes**, selecione uma das opções disponíveis:
 - **Agentes oficiais:** agentes da VTEX ou de integrações externas previamente cadastradas na plataforma.
 - **Agentes personalizados:** agentes criados para sua operação.

> ℹ️ Você também pode localizar agentes usando o campo de busca ou filtrando por tipo de categoria.

5. Após escolher um agente, clique em `Ver detalhes`.
6. No modal do agente, confira as informações sobre os MCPs disponíveis e o exemplo de conversa.
7. Clique em `Iniciar configuração`.
8. Em **Atribuir {Nome do agente}**, na seção **Seleção de sistema**, selecione uma das opções disponíveis e clique em `Avançar`.
9. Em **Seleção de MCP**, selecione uma das opções disponíveis para definir o comportamento do agente.
10. Em **Configurar MCP {Nome do sistema}**, se disponível, preencha ou selecione os parâmetros do agente. Alguns agentes não possuem parâmetros configuráveis.
11. Em **Revise a configuração e insira as credenciais**, confira as informações, preencha os campos solicitados e clique em `Concluir`.

Após concluir esses passos, o agente será exibido na seção **Agentes atribuídos** da página **Meus Agentes**.

## Remover um agente

Para remover um agente de sua loja, siga os passos abaixo:

1. Acesse sua organização no [dashboard do VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique no ícone **Meus agentes**.
3. Na seção **Agentes atribuídos**, clique sobre o agente desejado.
4. Clique em `Ver opções`.
5. Clique em `Remover agente`.

> ℹ️ Caso deseje utilizar novamente este agente, realize a nova atribuição conforme descrito em [Atribuir um agente ao time](#atribuir-um-agente-ao-time).


## Testar um agente

Para testar a operação de um agente atribuído, clique em `Teste seus agentes`, no canto inferior direito da tela.

Na seção **Teste seus agentes**, você pode:

- Selecionar, no campo **Versão do Manager**, o modelo que atuará como agente orquestrador durante a conversa.
- Iniciar uma conversa usando a caixa de diálogo.
- Enviar uma mensagem de áudio clicando no ícone de microfone ou no botão <i class="fas fa-plus" aria-hidden="true"></i> e, em seguida, em `Áudio`.
- Enviar arquivos clicando no botão <i class="fas fa-plus" aria-hidden="true"></i> e, em seguida, em `Enviar arquivo`.
- Na aba **Fluxo visual**, visualizar em formato de diagrama quais agentes estão sendo acionados para produzir a resposta exibida na caixa de diálogo.
- Na aba **Logs**, verificar o registro detalhado dos eventos processados pelo modelo de IA durante a conversa. Essas informações ajudam a entender o processamento da conversa, identificar possíveis problemas e melhorar o desempenho do agente.

Para buscar eventos específicos, clique em `Filtrar logs` e pesquise por palavras-chave ou pelas seguintes categorias:

| Categoria | Descrição da etapa |
| --- | :--- |
| Aplicando regras de segurança | Verificação de segurança do conteúdo, incluindo proteção de dados sensíveis, bloqueio de conteúdos proibidos e aplicação de políticas de uso. |
| Atribuindo tarefa ao agente | Definição do agente especializado ou recurso interno que será responsável por uma etapa da conversa. |
| Conhecimento | Consulta à base de conhecimento, como documentação, artigos do Help Center ou conteúdos internos, para buscar informações oficiais antes da resposta. |
| Encaminhando para o manager | Retorno do controle ao manager para definição da próxima etapa da conversa. |
| Encaminhando para suporte humano | Encaminhamento da conversa para atendimento humano devido a uma limitação técnica, exceção ou regra de negócio. |
| Enviando para o manager | Envio do resultado de uma ferramenta, agente ou etapa do fluxo ao Manager para processamento. |
| Enviando resposta final | Envio da resposta ao usuário após a conclusão da orquestração interna. |
| Ferramenta | Uso de um recurso externo ou módulo específico, como consulta de pedidos, análise de imagem, transcrição de áudio ou busca em outro sistema. |
| Pensando | Etapa em que o modelo processa internamente a solicitação, planeja a resposta e decide se deve acionar ferramentas, consultar conhecimento ou encaminhar a conversa para outro fluxo. |

> ℹ️ Para remover o histórico das conversas com o agente orquestrador, clique no menu <i class="fas fa-ellipsis-v" aria-hidden="true"></i> ao lado de **Teste seus agentes** e, em seguida, em `Limpar conversas`.
