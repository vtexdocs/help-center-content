---
title: 'Adicionar mídias'
id: 6XfWIo7fpN4VJLzZTud2UP
status: PUBLISHED
createdAt: 2025-09-17T13:56:46.780Z
updatedAt: 2025-10-03T14:20:03.799Z
publishedAt: 2025-10-03T14:20:03.799Z
firstPublishedAt: 2025-10-03T14:20:03.799Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-media-to-the-message
legacySlug: adicionando-midias-ao-cartao-de-enviar-mensagem
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Você pode adicionar mídias à sua mensagem na plataforma, como imagens, áudios ou vídeos. Há duas maneiras diferentes:

- [Adicionar uma URL](#adicionar-uma-url).
- [Enviar um arquivo do computador](#enviar-um-arquivo-do-seu-computador).

## Adicionar uma URL

1. Dentro do seu projeto, clique em **Fluxo de automação** (em **Agent Builder**).
2. Escolha um fluxo existente ou crie um novo.
3. Clique no símbolo de `+ Criar bloco` para adicionar uma nova carta de ação.
4. Selecione **Arquivos**.
5. No menu dropdown de **Arquivo 1**, selecione uma das opções abaixo:

- URL da imagem.
- URL de áudio.
- URL de vídeo.
- URL do documento PDF.

6. Em seguida, insira a URL no campo ao lado.

> ℹ️ Você pode incluir até três URLs por cada bloco do fluxo.

7. Ao final, clique em `Confirmar`.


## Enviar um arquivo do seu computador

1. Dentro do seu projeto, clique em **Fluxo de automação** (em **Agent Builder**).
2. Escolha um fluxo existente ou crie um novo.
3. Clique no símbolo de `+ Criar bloco` para adicionar uma nova carta de ação.
4. Selecione **Arquivos**.
5. No menu dropdown de **Arquivo 1**, selecione **Enviar arquivo**.
6. Em seguida, escolha o arquivo do seu computador e clique em `Abrir`.

> ℹ️ Você pode incluir até três arquivos por cada bloco do fluxo.

> ⚠️ O limite de tamanho dos arquivos é de 32 mb ou upload de 30 segundos. Por exemplo, se você enviar um arquivo de menos de 32 mb e o upload durar mais que 30 segundos, o arquivo não será enviado ao bloco do fluxo de automação.

> ⚠️ O WhatsApp tem suas próprias regras, como demonstra a [documentação](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/media#supported-media-types). O limite de tamanho de vídeos e áudios no WhatsApp é de 16 mb. Por exemplo, se você enviar um vídeo de 20 mb no VTEX CX Platform, o vídeo ficará salvo na plataforma, mas o WhatsApp não vai enviá-lo ao cliente.

7. Ao final, clique em `Confirmar`.