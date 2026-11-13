---
title: "Cartão de mensagem do WhatsApp"
id: 4IsU6gP2dUx1F1A5AMKN4D
status: PUBLISHED
createdAt: 2025-09-17T14:17:04.971Z
updatedAt: 2026-11-13T13:47:00.000Z
publishedAt: 2025-10-03T14:20:03.619Z
firstPublishedAt: 2025-10-03T14:20:03.619Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-message-card
legacySlug: cartao-de-mensagem-do-whatsapp
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
seeAlso:
  - /pt/docs/tutorials/cartas-de-acao
---

O cartão de mensagem do WhatsApp permite criar interações específicas do WhatsApp em um [fluxo de automação](/pt/docs/tutorials/visao-geral-fluxo-de-automacao). Use-o quando o fluxo precisar enviar uma mensagem e oferecer ao contato uma forma estruturada de responder ou continuar a conversa. Você pode enviar uma mensagem simples ou configurar uma mensagem interativa com respostas rápidas, uma lista de opções, uma solicitação de localização ou um botão de URL.

## Antes de começar

Antes de adicionar o cartão, considere os seguintes requisitos:

- O contato deve ter uma URN do WhatsApp. A URN identifica o contato em um canal de comunicação.
- Em conversas iniciadas pela sua empresa, este cartão não substitui um template de mensagem aprovado pela Meta. Para saber mais, consulte [Whatsapp Template Messages: impedimentos e configurações](/pt/docs/tutorials/whatsapp-template-messages-impedimentos-e-configuracoes).

## Adicionar o cartão ao fluxo

Para adicionar o cartão ao fluxo, siga estas etapas:

1. No projeto, acesse **Agent Builder > Fluxo de automação**.
2. Abra um fluxo existente ou crie um novo.
3. Clique em `+ Criar bloco`.
4. Selecione **WhatsApp**.

Em mensagens simples, você pode fazer upload de mídias, formatar o texto e inserir emojis. Para consultar as instruções e os limites de upload, acesse [Adicionar mídias](/pt/docs/tutorials/adicionando-midias-ao-cartao-de-enviar-mensagem). Para adicionar uma mensagem interativa, configure uma das opções descritas nas seções a seguir.

## Configurar uma mensagem interativa

As mensagens interativas oferecem respostas rápidas, listas de opções, solicitações de localização e botões de URL.

### Adicionar respostas rápidas

As respostas rápidas permitem que os contatos selecionem uma entre até 3 respostas predefinidas. Cada resposta deve ser diferente das demais e pode conter até 20 caracteres.

Para configurar respostas rápidas, siga estas etapas:

1. Em **Cabeçalho**, selecione **Texto** ou **Mídia**.
2. Configure o cabeçalho de acordo com a opção selecionada:
    - Para **Texto**, insira o texto do cabeçalho.
    - Para **Mídia**, faça upload de um arquivo do seu dispositivo ou insira a URL. O cabeçalho aceita imagens, vídeos, arquivos PDF e áudios.
3. Insira as respostas rápidas.
4. (Opcional) Insira uma mensagem de rodapé.
5. Clique em `Confirmar`.

### Adicionar uma lista de opções

Uma lista pode conter até 10 opções. Cada opção tem um título e pode incluir uma descrição. Diferentemente das respostas rápidas, a lista de opções não aceita mídia no cabeçalho.

Para configurar uma lista de opções, siga estas etapas:

1. Em **Interações**, selecione **Lista de Opções**.
2. Preencha os campos **Cabeçalho**, **Corpo** e **Rodapé**.
3. Adicione as opções e preencha os seguintes campos para cada uma:
    - **Título:** Insira um nome curto que identifique a opção.
    - **Descrição (opcional):** Insira detalhes que ajudem o contato a entender a opção.
4. (Opcional) Em **Botão de Ação**, insira o texto exibido no botão que abre a lista.
5. Clique em `Confirmar`.

### Solicitar a localização do contato

Para solicitar a localização do contato, siga estas etapas:

1. Em **Interações**, selecione **Solicitar Localização**.
2. No campo de mensagem, insira o texto que o contato receberá com a solicitação.

### Adicionar um botão de URL

Um botão de URL direciona o contato para um link. A mensagem também pode incluir textos personalizados no cabeçalho e no rodapé.

Para adicionar um botão de URL, siga estas etapas:

1. Em **Interações**, adicione um **Botão de URL**.
2. Insira a URL de destino.
3. (Opcional) Adicione uma variável à URL.
4. (Opcional) Insira textos para o cabeçalho e o rodapé.
