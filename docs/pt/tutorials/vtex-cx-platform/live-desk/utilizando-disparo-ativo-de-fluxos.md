---
title: 'Utilizando disparo ativo de fluxos'
id: 2G7HPM4mD3vuxPHUgtexb7
status: PUBLISHED
createdAt: 2025-09-12T16:44:52.727Z
updatedAt: 2025-10-03T14:22:54.202Z
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

## Guia de uso do disparo ativo

O disparo ativo de fluxos permite que um agente envie um fluxo para um ou mais contatos e para grupos de contatos, possibilitando também iniciar uma conversa com os contatos desejados através dos modelos de mensagens do Whatsapp.

Nesse artigo trataremos um pouco sobre:

- [Habilitando um fluxo existente para envio no Live Desk](#habilitando-um-fluxo-existente-para-envio-no-live-desk)
- [Criando um fluxo que envie um modelo de mensagem](#criando-um-fluxo-que-envie-um-modelo-de-mensagem)
- [Ativando a função de disparo de fluxos em configuração do Live Desk](#ativando-a-função-de-disparo-de-fluxos)
- [Disparando um fluxo](#disparando-um-fluxo)

### Habilitando um fluxo existente para envio no Live Desk

Qualquer fluxo já existente pode ser disparado através do Live Desk. Para isso, siga os passos:

1. Acesse **Fluxo de automação** (em **Agent Builder**).
2. Selecione o fluxo desejado e clique em `Rótulo`.
3. Para que o fluxo fique disponível no Live Desk, precisa ter um rótulo de nome "chats". Caso não esteja disponível, crie um rótulo "chats".
4. Clique em `Criar`.

Ao clicar em **criar**, seu fluxo ficará automaticamente com o rótulo criado e estará disponível para ser usado em chats.

### Criando um fluxo que envie um modelo de mensagem

Apenas usuários com permissão de administrador, moderador e colaborador podem criar os fluxos.

Para enviar modelos de mensagens é necessário que os mesmos já tenham sido cadastrados e aprovados pelo Whatsapp, veja [este artigo](https://help.vtex.com/pt/docs/tutorials/whatsapp-como-criar-template-messages) caso haja dúvidas.

1. Dentro do projeto desejado, acesse **Fluxo de automação**.
2. Clique em `Criar fluxo`.
3. Preencha os campos de nome, tipo de fluxo e, se necessário, palavras-chave dos disparadores globais.
4. Para inserir um bloco, clique no botão de mais `Criar bloco`.
5. Preencha as informações do seu bloco.
6. Clique em `Confirmar`.

### Ativando a função de disparo de fluxos

Para que a função de disparo de fluxos esteja disponível aos agentes, é necessário habilitar a funcionalidade.

Siga o passo a passo:

1. Acesse **Configurações > Live Desk**.
2. Selecione o setor desejado e clique nos três pontos.
3. Clique em `Editar`.
4. Em **Opções extras**, ative o botão de `Disparo de modelos de mensagens ativo`.
5. Para finalizar, clique em `Salvar`.

### Disparando um fluxo

Para disparar um fluxo, siga o passo a passo:

1. Acesse o Live Desk.
2. Clique em `Opções`.
3. Clique em `Fluxos`.
4. Para selecionar os contatos, clique nos cards de cada um.
5. Em seguida, clique em `Continuar`.
6. Na caixa de `Selecionar o fluxo`, escolha o fluxo que você deseja disparar.
7. Por último, clique em `Enviar`.
