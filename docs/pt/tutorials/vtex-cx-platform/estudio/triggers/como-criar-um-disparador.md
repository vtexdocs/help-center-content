---
title: 'Criar um trigger'
id: 4bo1N0wsONdFMVDMlIPU9T
status: PUBLISHED
createdAt: 2025-09-12T17:40:04.331Z
updatedAt: 2025-10-03T14:20:34.064Z
publishedAt: 2025-10-03T14:20:34.064Z
firstPublishedAt: 2025-10-03T14:20:34.064Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-trigger
legacySlug: como-criar-um-disparador
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Neste ponto o seu chatbot está conectado a algum canal, mas, para iniciar um fluxo automático quando o usuário falar com o chatbot, você deve configurar um trigger. Para criá-lo, você deve ir em **Contatos** (em **Operações**) e em seguida em **Triggers**.

Nesta seção, iremos criar um trigger padrão que pode ser configurado tanto em **Contatos** quanto no fluxo.

- Clique em `Criar Trigger`. Uma nova janela será aberta.
- Clique em **Crie uma palavra-chave que inicia um fluxo**.
- No campo Palavra-chave, você definirá a palavra que funcionará como trigger.
  - Nesse primeiro momento, evite nomes comuns como: "ajuda", "olá", "boa tarde". Use "teste123", "ajuda123". Dessa forma, se o usuário utilizar qualquer nome comum em uma mensagem, o fluxo com este trigger não será acionado.
- Escolha o momento do disparo:
  - Quando a mensagem começa com a palavra-chave: o fluxo escolhido entrará em ação
  - Se a frase digitada para o usuário começar com a palavra-chave: o fluxo escolhido entrará em ação.
  - Se a mensagem contém apenas a palavra-chave: o fluxo escolhido executará uma ação se o usuário digitar **apenas** o único conjunto de palavras-chave cadastrado.
- Em **Fluxo** é definido como o fluxo a ser iniciado
- Em **Grupos a Incluir**, inclua as regras desse trigger a um grupo de contatos específico.
- Em **Grupos a Excluir**, exclua as regras desse trigger a um grupo de contatos específico.
- Clique na caixa `Criar Trigger`.

Se o seu Agent Builder estiver ativo, os triggers não irão funcionar, pois o acionamento dos fluxos é realizado pelo agente inteligente e não por triggers.

## Criando triggers em um fluxo

- Clique em **Fluxo de automação**.
- Selecione o fluxo e, depois, clique no menu de três listras.
- Clique em `Editar`.
- Em Palavras-chave dos Triggers globais, digite o trigger desejado e clique em `Salvar alterações`.
