---
title: 'Importar contatos'
id: 2iPoWuJtzfIvGrpUdIvvhR
status: PUBLISHED
createdAt: 2025-09-12T17:23:02.357Z
updatedAt: 2025-10-03T14:21:49.258Z
publishedAt: 2025-10-03T14:21:49.258Z
firstPublishedAt: 2025-10-03T14:21:49.258Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: importing-contacts
legacySlug: como-importar-contatos
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

A lista de contatos do VTEX CX Platform reúne as pessoas que interagem pelos canais conectados à plataforma. Esses contatos são adicionados automaticamente. Para incluir também pessoas que ainda não interagiram com seus canais, você pode importar os dados delas em massa por meio de uma planilha. Este artigo explica como preparar a planilha e realizar a importação.

## Preparar a planilha

O arquivo deve ser uma planilha do Excel no formato `.xls`. Na página de importação, há um modelo que você pode usar como referência.

Os nomes das colunas devem seguir o formato esperado pela plataforma:

- `Name`: nome do contato.
- `Language`: idioma usado pelo contato nas interações.
- `URN`: identificador do contato no canal pelo qual ele se comunicará. Cada contato deve ter pelo menos uma URN.
- `Field`: campos personalizados do contato.

> ⚠️ Para enviar mensagens de template pelo WhatsApp, inclua a coluna `URN:whatsapp` e os números de telefone correspondentes. Sem essas informações, não será possível enviar mensagens de WhatsApp aos contatos importados.

## Importar os contatos

Para importar os contatos:

1. No **Contatos**, acesse a página **Contatos**.
2. No menu lateral esquerdo, clique em **Importar contatos**.
3. Na página de importação, selecione a planilha `.xls`.
4. Clique em **Prévia** e conclua a importação.

## Resultado da importação

Após a importação, os contatos serão vinculados a um grupo estático com o mesmo nome do arquivo da planilha. Caso não queira manter esse grupo, você poderá excluí-lo sem remover os contatos importados.
