---
title: 'Tipos de Gatilho'
id: 6yVuYFp3lrmZL0C7AUdEac
status: PUBLISHED
createdAt: 2025-09-12T17:43:13.439Z
updatedAt: 2025-10-03T14:20:34.035Z
publishedAt: 2025-10-03T14:20:34.035Z
firstPublishedAt: 2025-10-03T14:20:34.035Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: triggers-types
legacySlug: tipos-de-gatilho
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

A palavra-chave é a primeira palavra em uma mensagem e pode ser usada para iniciar o fluxo. Por exemplo, você pode definir um gatilho usando a "palavra-chave" para iniciar o fluxo e registrar contatos em seu serviço.

Todos os passos aqui descritos serão realizados na guia "**Disparadores**", localizada dentro de **Contatos** (em **Operações**).

Para facilitar a navegação neste artigo, caso queira ir diretamente para um tipo de gatilho específico, basta clicar no nome dele abaixo:

- [Para criar uma palavra-chave que inicie um fluxo](#para-criar-uma-palavra-chave-que-inicie-um-fluxo)
- [Criando uma palavra-chave de mensagem que permite que as pessoas ingressem em um grupo](#criando-uma-palavra-chave-de-mensagem-que-permite-que-as-pessoas-ingressem-em-um-grupo)
- [Iniciar um fluxo depois de receber uma mensagem não tratada em outro lugar](#iniciar-um-fluxo-depois-de-receber-uma-mensagem-não-tratada-em-outro-lugar)
- [Iniciar um fluxo futuramente ou segundo agendamento](#iniciar-um-fluxo-futuramente-ou-segundo-agendamento)
- [Iniciar um fluxo depois de receber uma chamada](#iniciar-um-fluxo-depois-de-receber-uma-chamada)
- [Iniciar um fluxo depois de uma chamada perdida](#iniciar-um-fluxo-depois-de-uma-chamada-perdida)
- [Iniciar um fluxo posterior ao fechamento de ticket com agente humano](#iniciar-um-fluxo-posterior-ao-fechamento-de-ticket-com-agente-humano)

## Para criar uma palavra-chave que inicie um fluxo

- Clique no botão **Criar uma palavra-chave que inicie um fluxo**
- Em **palavra-chave**, você pode definir uma palavra para funcionar como palavra-chave
- Em **disparar** **quando**, você escolherá entre duas opções:
- A mensagem começa com a palavra-chave: Se a frase digitada pelo usuário começar com uma palavra-chave, o fluxo escolhido será acionado
- A mensagem contém apenas a palavra-chave: O fluxo escolhido será acionado se o usuário digitar apenas a palavra-chave
- Em **fluxo**, é definido o fluxo que será iniciado quando você usar a palavra-chave
- Em **apenas grupos**, é possível incluir ou não incluir as regras desse gatilho a grupos de contato específicos, basta deixa o espaço em branco se você quiser aplicar essa regra a todos os usuários
- Clique na caixa **Criar disparador**

## Criando uma palavra-chave de mensagem que permite que as pessoas ingressem em um grupo

Usando esse gatilho para adicionar um contato de ingresso em um grupo. Esse gatilho é útil para gerenciar contatos que desejam desassociar um grupo usando as palavras-chave "parar" ou "congelar um registro".

**Para criar um gatilho com uma palavra-chave que une contatos a um grupo:**

- Clique no botão "Criar uma palavra-chave de mensagem que permita que as pessoas se juntem a um grupo":
- Introduza uma palavra-chave em "Juntar palavra-chave"
- Escolha o grupo que você gostaria de adicionar os seus contatos em "Grupo para participar"
- Opcional: Em "Resposta", você pode escolher uma mensagem para enviar
- Em "Fluxo", você pode escolher qual fluxo será iniciado

## Iniciar um fluxo depois de receber uma mensagem não tratada em outro lugar

Use este gatilho para iniciar um fluxo após receber uma mensagem não capturada (a mensagem não é tratada em outro lugar para outros gatilhos). Esse gatilho pode ser usado para mensagens que não foram tratadas para um fluxo informativo que explica seu serviço e o conduz para fluxo.

- Clique no botão "Iniciar um fluxo após receber uma mensagem que não corresponda a nenhuma palavra-chave"
- Em "Fluxo", você pode escolher qual fluxo será iniciado
- Em "Somente grupos", você pode escolher o(s) grupo(s) em que o gatilho será incluído ou não incluído
- se você deixar o campo vazio, o gatilho será aplicado a todos os contatos
- Clique em "Criar disparador"

## Iniciar um fluxo futuramente ou segundo agendamento

Use este gatilho para agendar um fluxo em um momento no futuro, o repita diariamente, semanalmente ou mensalmente. Para iniciar o fluxo no futuro ou de forma programada:

- Clique no botão "Iniciar um fluxo no futuro ou segundo agendamento"
- Escolha a data que gostaria de agendar
- Logo abaixo, em Repeat. Você pode optar por repetir o fluxo diariamente, semanalmente ou mensalmente (sendo opcional tal uso)
- Escolha o fluxo que você deseja iniciar, para quais contatos ou grupos o fluxo será ou não transmitido.
- Clique em "Criar Disparador"

## Iniciar um fluxo depois de receber uma chamada

- Clique no botão "Comece um fluxo depois de receber uma chamada":
- Em "Fluxo", você pode escolher qual fluxo será iniciado
- Em "Somente grupos", você pode escolher o(s) grupo(s) em que o gatilho será incluído ou não incluído
- se você deixar o campo vazio, o gatilho será aplicado a todos os contatos
- Clique em "Criar Disparador"

## Iniciar um fluxo depois de uma chamada perdida

Use este gatilho após uma chamada perdida.

- Clique no botão "Comece um fluxo após uma chamada perdida"
- Em "Fluxo", você pode escolher qual fluxo será iniciado
- Em "Somente grupos", você pode escolher o(s) grupo(s) em que o gatilho será incluído ou não incluído
- se você deixar o campo vazio, o gatilho será aplicado a todos os contatos
- Clique em "Criar Disparador"

## Iniciar um fluxo posterior ao fechamento des ticket com agente humano

Use este gatilho para disparar o fluxo de encerramento de atendimento humano no Weni Chats.

- Clique no botão "Start a flow after a ticket is closed":
- Em "Fluxo", você pode escolher qual fluxo será iniciado
- Em "Somente grupos", você pode escolher o(s) grupo(s) em que o gatilho será ou não incluído
- se você deixar o campo vazio, o gatilho será aplicado a todos os contatos
- Clique em "Criar Disparador"
