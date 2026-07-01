---
title: 'Utilizando o disparo ativo de fluxos'
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2026-06-23T00:00:00.000Z
publishedAt: 2025-10-03T14:22:54.202Z
firstPublishedAt: 2025-10-03T14:22:54.202Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-active-triggering-of-flows
legacySlug: utilizando-disparo-ativo-de-fluxos
locale: pt
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

O disparo ativo de fluxos permite que agentes iniciem conversas no Live Desk enviando fluxos para contatos ou grupos de contatos. Esse recurso é útil para comunicações ativas, como avisos, confirmações ou acompanhamentos, e pode usar modelos de mensagem aprovados pelo WhatsApp quando a conversa começa por esse canal.

Neste artigo será apresentado como:

- [Habilitar um fluxo existente para envio no Live Desk](#habilitar-um-fluxo-existente-para-envio-no-live-desk)
- [Criar um fluxo com envio de modelo de mensagem](#criar-um-fluxo-com-envio-de-modelo-de-mensagem)
- [Ativar o disparo de fluxos no Live Desk](#ativar-o-disparo-de-fluxos-no-live-desk)
- [Disparar um fluxo](#disparar-um-fluxo)

## Habilitar um fluxo existente para envio no Live Desk

Para que um fluxo apareça como opção de envio no Live Desk, ele precisa estar identificado com o rótulo `chats`. Use esse rótulo nos fluxos que os agentes poderão disparar durante o atendimento:

1. Acesse sua organização no dashboard do [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Fluxo de automação**.
3. Marque a caixa de seleção ao lado do fluxo desejado.
4. Clique na aba **Rótulo** e, em seguida, em `Novo Rótulo`.
5. Em **Nome**, insira `chats`.
6. Clique em `Criar`.


> ℹ️ Caso o rótulo `chats` já exista, selecione o fluxo desejado, clique na aba **Rótulo** e marque a caixa de seleção `chats`.


## Criar um fluxo com envio de modelo de mensagem

Apenas usuários com permissão de administrador, moderador ou colaborador podem criar fluxos. Ao criar um fluxo para disparo ativo, inclua um bloco de envio de mensagem e selecione um modelo de mensagem aprovado para iniciar a conversa pelo WhatsApp.

Antes de configurar o fluxo, verifique se o modelo de mensagem já está cadastrado e aprovado pelo WhatsApp. Para mais informações, consulte [WhatsApp: Como criar Template Messages](https://help.vtex.com/pt/docs/tutorials/whatsapp-como-criar-template-messages).

1. Acesse sua organização no dashboard do [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique no ícone **Fluxo de automação**.
3. Clique em `Criar fluxo`.
4. Preencha os campos de nome, tipo de fluxo e, se necessário, palavras-chave dos disparadores globais.
5. Clique em `Criar`.
6. Para inserir um bloco, clique no botão `Criar bloco`.
7. Preencha as informações necessárias para o seu bloco.
8. Clique em `Confirmar`.
9. Continue criando a quantidade de blocos conforme as características do fluxo que deseja disponibilizar na loja.


## Ativar o disparo de fluxos no Live Desk

Além de habilitar o fluxo com o rótulo `chats`, é necessário ativar o disparo de fluxos no setor do Live Desk. Essa configuração define quais setores terão o recurso disponível para os agentes:

1. Acesse sua organização no dashboard do [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Configurações**.
3. Clique em **Live Desk**.
4. Clique na aba **Setores**.

> ℹ️ Caso ainda não existam setores configurados no Live Desk, clique em `Criar setor` e preencha as informações solicitadas na página **Novo setor**.

5. No setor desejado, clique no botão de ações <i class="fas fa-ellipsis-v" aria-hidden="true"></i>.
6. Clique em `Editar`.
7. Em **Opções extras**, ative a opção **Disparo de modelos de mensagens ativo**.
8. Clique em `Salvar`.


## Disparar um fluxo

Depois que o fluxo estiver habilitado e o setor permitir disparos ativos, os agentes poderão selecionar os contatos e enviar o fluxo pelo Live Desk:

1. Acesse sua organização no dashboard do [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Live Desk**.
3. Clique em `Opções`.
4. Clique em `Fluxos`.
5. Marque as caixas de seleção dos contatos para os quais deseja disparar o fluxo.
6. Clique em `Continuar`.
7. Em **Selecionar fluxo**, escolha o fluxo desejado.
8. Clique em `Enviar`.

Os contatos selecionados receberão o fluxo. Quando um contato responder, a conversa ficará disponível para atendimento no Live Desk.
