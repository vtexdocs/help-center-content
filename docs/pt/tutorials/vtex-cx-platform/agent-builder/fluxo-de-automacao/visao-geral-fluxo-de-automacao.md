---
title: 'Visão geral Fluxo de automação'
id: 5XxzVEJtDzXXEOS0SXANeS
status: PUBLISHED
createdAt: 2025-09-16T16:38:04.873Z
updatedAt: 2025-10-03T14:20:03.960Z
publishedAt: 2025-10-03T14:20:03.960Z
firstPublishedAt: 2025-10-03T14:20:03.960Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: automation-flow-overview
legacySlug: introducao-a-fluxos
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Um fluxo é um conjunto de passos organizados em formato de fluxograma. Esses passos são aplicados aos seus contatos quando eles entram no fluxo, ou seja, quando começam uma conversa.

## Passos dos fluxos

Cada passo do fluxo pertence a um dos dois grupos a seguir: [Cartas de ação](#cartas-de-ação) e [Cartas de decisão](#cartas-de-decisão). Essas cartas permitem a criação e o desenrolar das conversas.

Além desses dois grupos, também existem as [Cartas para notas](#cartas-para-notas-comentários). As cartas para notas não participam ativamente do fluxo e não desencadeiam ações, apenas servem para deixar comentários ou observações em seu fluxograma.

A imagem acima contém um fluxo para uma pesquisa simples. Nele, há **cartas de decisão** e **cartas de ação** que formam a estrutura para a seguinte conversa: manda uma mensagem -> o cliente seleciona dentre as opções -> o cliente é redirecionado a outro fluxo dependendo da resposta.

### Cartas de ação

As cartas de ação representam uma ação que seu agente pode fazer em uma conversa e disparam comandos executados imediatamente, seguindo uma ordem. A primeira carta sempre será executada primeiro e assim em diante.

Essas são algumas ações que seu agente pode executar:

- Enviar uma mensagem para o contato.
- Marcar uma mensagem do contato.
- Gerir contatos em grupos.
- Começar outros fluxos.
- Editar informações do contato.

Para saber mais sobre as cartas de ação, visite o artigo [Cartas de ação](/pt/docs/tutorials/cartas-de-acao).

### Cartas de Decisão

As cartas de decisão são responsáveis por outras conexões durante o fluxo. Elas criam as condições de decisão que traçam caminhos diferentes para a conversa, dependendo dos dados informados pelo cliente.

Você pode criar decisão a partir de dados como:

- A resposta do contato a uma pergunta.
- Um grupo que o contato pertence.
- Alguma informação do contato.
- Algum resultado criado no fluxo.

Essas decisões são tomadas a partir das regras de decisão da carta.

Alguns exemplos de regras são:

- Verificar existência de palavras específicas em uma resposta/valor.
- Verificar existência de frases específicas em uma resposta/valor.
- Verificar existência de números específicos ou regras numéricas em uma resposta/valor.
- Verificar existência de uma formatação específica (como data, e-mail, telefone) em uma resposta/valor.

### Cartas para notas (comentários)

As cartas para notas permitem a criação de comentários, semelhantes a post-its, em nossos fluxos. Elas podem comunicar um recado entre você e alguém que trabalha no mesmo projeto, por exemplo, explicando como uma parte do fluxo funciona ou alertando de uma etapa que não pode ser alterada.

Para criar uma carta de nota, basta clicar duas vezes em um lugar vazio no fluxo. Depois disso, você consegue mover livremente as suas notas e mudar as cores de fundo.
