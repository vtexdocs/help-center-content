---
title: 'Shopping Assistant: perguntas sugeridas'
createdAt: 2026-09-03T21:30:00.000Z
updatedAt: 2026-09-10T12:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-suggested-questions
locale: pt
---

As **perguntas sugeridas** são o ponto de entrada do Shopping Assistant do [VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/vtex-cx-platform-visao-geral) na loja. Na página de produto, o webchat exibe até três perguntas prontas sobre aquele produto. Quando o cliente clica em uma delas, o chat é aberto e a pergunta é enviada como se ele mesmo a tivesse digitado, iniciando a conversa com uma intenção clara em vez de uma caixa de mensagem vazia.

Neste artigo, você vai entender o que são as perguntas sugeridas, onde elas aparecem, como são geradas, o que influencia sua qualidade e como habilitá-las ou desabilitá-las no VTEX CX Admin.

## Onde as perguntas aparecem

As perguntas sugeridas funcionam exclusivamente em páginas de produto (PDP). Elas não são exibidas na página inicial, em páginas de categoria, nos resultados de busca nem no checkout.

Na página de produto, as perguntas aparecem em dois estados:

- **Chat fechado:** como botões compactos junto ao botão de abertura do chat (launcher).
- **Chat aberto:** dentro da lista de mensagens da conversa.

Se o cliente navegar para outra página de produto, as perguntas atuais são removidas e um novo conjunto é gerado para o novo produto.

## Como as perguntas são geradas

As perguntas são geradas automaticamente por inteligência artificial (IA), sem configuração manual da loja. Quando o webchat é carregado em uma página de produto, ele lê os dados do produto já publicados naquela página — nome, descrição, marca e especificações técnicas — e solicita três perguntas relevantes com base nesse conteúdo.

O resultado é armazenado, de modo que o próximo cliente que visualizar o mesmo produto vê as perguntas imediatamente.

Ao usar a funcionalidade, considere os seguintes comportamentos:

- **As perguntas são geradas por produto, não por variação.** Todas as cores ou tamanhos de um mesmo produto compartilham as mesmas três perguntas.
- **A qualidade das perguntas depende diretamente da qualidade do catálogo.** Produtos com descrição completa e especificações bem preenchidas geram perguntas específicas e úteis. Produtos com pouco conteúdo ou campos vazios geram perguntas genéricas.
- **Cada loja exibe perguntas em um único idioma.** Não há tradução automática entre locales.

> ℹ️ Melhorar o conteúdo do catálogo é a forma mais eficaz de melhorar as perguntas sugeridas. Revise a descrição e as especificações dos produtos para obter perguntas mais relevantes.

## Ativação

As perguntas sugeridas vêm habilitadas por padrão. Contas configuradas por meio do [onboarding do VTEX CX](https://help.vtex.com/pt/docs/tutorials/introducao-ao-cx) já têm o Shopping Assistant e as perguntas sugeridas configurados, portanto nenhuma ação é necessária para começar a usar a funcionalidade.

## Habilitar ou desabilitar as perguntas sugeridas

Se preferir não exibir as perguntas na loja, você pode desativá-las no VTEX CX Admin. Desativar as perguntas sugeridas não afeta o Shopping Assistant: o webchat continua disponível na loja e os clientes ainda podem iniciar uma conversa pelo launcher.

Para habilitar ou desabilitar as perguntas sugeridas, siga os passos abaixo:

1. Acesse o VTEX CX Admin.
2. No menu lateral, acesse **Channels > Shopping Assistant > Settings**.
3. Ative ou desative a opção **Suggested Questions**.
4. Clique em `Salvar`.
