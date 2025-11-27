---
title: 'Usando grupos para controlar o atendimento humano'
id: 64hOFPHnTxUcaMSnIRULrz
status: PUBLISHED
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2025-10-03T14:21:49.503Z
publishedAt: 2025-10-03T14:21:49.503Z
firstPublishedAt: 2025-10-03T14:21:49.503Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: using-groups-to-organize-human-attendance
legacySlug: usando-grupos-para-controlar-o-atendimento-humano
locale: pt
subcategoryId: 6Jkw23mYV23p4V33O1Hjdh
---

O uso de grupos para controlar os contatos que estão em atendimento humano é
essencial.

ATENÇÃO: caso contatos não sejam adicionados a um grupo de controle, o chatbot
irá conflitar e interromper o atendimento humano, enviando as mensagens padrão
configuradas no seu ambiente.

### Adicionando contatos ao grupo de controle

Neste artigo iremos nos referir ao grupo de controle como `Atendimento Humano`.

Você deve adicionar o contato a este grupo no fluxo que você abre um ticket,
conforme mostrado anteriormente.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-o-atendimento-humano_1.png) É importante mencionar que, caso você abra tickets em fluxos diferentes, **você precisa fazer isso em todos os fluxos**.

### Ignorando participantes do grupo de controle em gatilhos

Apenas adicionar a este grupo não é o suficiente, mas apenas a base que você
precisa para saber quais contatos precisam ser ignorados nas mensagens
automáticas enquanto estiverem em atendimento.

Para isso, você deverá adicionar este grupo na lista de grupos ignorados **para
cada um dos triggers configurados** no seu projeto, conforme exemplifica a
imagem abaixo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-o-atendimento-humano_2.png) Com isso configurado, o chatbot não irá interromper o atendimento humano e a funcionalidade irá rodar como esperado.

### Removendo contatos do grupo de controle

É importante lembrar de remover o contato deste grupo quando a sessão de
atendimento humano for concluída. Para isto, existe um tipo
de `trigger` específico: 'start a flow when a ticket is closed':

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-o-atendimento-humano_3.png) 

Este pode ser um fluxo extremamente simples, onde a única ação é remover o contato do grupo de controle `Atendimento Humano`:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-o-atendimento-humano_4.png)

### Como enviar campos customizados?

Os campos customizados a serem enviados, devem ser definidos no corpo do card
de Ticket, no formato json, com cada campo como atributo de `custom_fields`,
representado por sua chave e valor.

obs: o valor de cada campo pode ou não estar entre `""""`.

A seguir, observe um exemplo, mostrando a configuração de campos customizados,
onde o campo `origin` com seu valor definido como o `result` origem,
entre `""""` por ser do tipo string.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/chats/usando-grupos-para-controlar-o-atendimento-humano_5.png)
